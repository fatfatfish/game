if (typeof __BANK_ENTRY__ !== "undefined") (function () {
    "use strict";

    goblin.bank = {
        NO: 0,
        ADD_MANAGER: 1,
        REMOVE_MANAGER: 2,
        ADD_GAME: 3,
        REMOVE_GAME: 4,
        ADD_GAME_ADMIN: 5,
        REMOVE_GAME_ADMIN: 6,
        ADD_BENEFICIARY: 7,
        REMOVE_BENEFICIARY: 8,
        BENEFIT: 9
    };

    var ADDR_TYPE_MANAGER = 1;
    var ADDR_TYPE_GAME = 2;
    var ADDR_TYPE_GAME_ADMIN = 3;

    var Handler = laya.utils.Handler;
    var Event = laya.events.Event;

    var contract = goblin.contract.bank;

    function newBankMain(parent, callback) {
        var bankMain = new BankMain();
        parent.addChild(bankMain);
        callback(bankMain);
    }

    function makeProposalDesc(cmd, param1, param2) {
        var desc;
        switch (cmd.toNumber()) {
        case goblin.bank.ADD_MANAGER:
            desc = goblin.texts[1104].format(goblin.texts[1106], goblin.util.uint256ToAddress(param1));
            break;
        case goblin.bank.REMOVE_MANAGER:
            desc = goblin.texts[1105].format(goblin.texts[1106], goblin.util.uint256ToAddress(param1));
            break;
        case goblin.bank.ADD_GAME:
            desc = goblin.texts[1104].format(goblin.texts[1107], goblin.util.uint256ToAddress(param1));
            break;
        case goblin.bank.REMOVE_GAME:
            desc = goblin.texts[1105].format(goblin.texts[1107], goblin.util.uint256ToAddress(param1));
            break;
        case goblin.bank.ADD_GAME_ADMIN:
            desc = goblin.texts[1104].format(goblin.texts[1108], goblin.util.uint256ToAddress(param1));
            break;
        case goblin.bank.REMOVE_GAME_ADMIN:
            desc = goblin.texts[1105].format(goblin.texts[1108], goblin.util.uint256ToAddress(param1));
            break;
        case goblin.bank.ADD_BENEFICIARY:
            desc = goblin.texts[1104].format(goblin.texts[1109], goblin.util.uint256ToAddress(param1));
            break;
        case goblin.bank.REMOVE_BENEFICIARY:
            desc = goblin.texts[1105].format(goblin.texts[1109], goblin.util.uint256ToAddress(param1));
            break;
        case goblin.bank.BENEFIT:
            desc = goblin.texts[1112].format(web3.fromWei(param2, "ether").toNumber().toFixed(goblin.valuePrecision)
                                             , goblin.util.uint256ToAddress(param1));
            break;
        }
        return desc;
    }

    function BankMain() {
        BankMain.super(this);
        this.BtnLoginOut.on(Event.CLICK, this, function () {
            goblin.privateKey = null;
            goblin.newLoginMain(this.parent);
            this.destroy();
        });

        var address = "0x" + ethereumjs.Util.privateToAddress(goblin.privateKey).toString("hex");
        this.Address.text = address.substr(2);
        goblin.util.drawQRCode("ethereum:" + address, this.QRCode);
        var proposalInProgress;

        var refresh = function () {
            this.BtnAccept.visible = this.BtnReject.visible = this.BtnAccepted.visible = false;
            this.BtnAdmin.disabled = this.BtnAccount.disabled = this.BtnMoney.disabled = this.BtnContract.disabled = true;

            contract.get_proposal(function (error, result) {
                if (error) throw error;
                proposalInProgress = result.length >= 1;
                if (!proposalInProgress) {
                    this.TxtCurProposalDesc.text = "";
                } else {
                    this.TxtCurProposalDesc.text = makeProposalDesc(result[0], result[1], result[2]);
                    var a = new web3.BigNumber(address);
                    var i = 0;
                    for (i = 3; i < result.length; ++i) {
                        if (result[i].eq(a)) break;
                    }
                    if (i < result.length) {
                        this.BtnAccepted.visible = true;
                    } else {
                        this.BtnAccept.visible = this.BtnReject.visible = true;
                    }
                }
                this.BtnAdmin.disabled = this.BtnAccount.disabled = this.BtnMoney.disabled = this.BtnContract.disabled = false;
            }.bind(this));

            contract.get_last_proposal_record(function (error, result) {
                if (error) throw error;
                if (result.length == 0) {
                    this.TxtLastProposalDesc.text = "";
                    this.TxtLastProposalStatus.text = "";
                } else {
                    this.TxtLastProposalDesc.text = makeProposalDesc(result[0], result[1], result[2]);
                    this.TxtLastProposalStatus.text = result[3].eq(0) ? goblin.texts[1111] : goblin.texts[1110];
                }
            }.bind(this));

            this.Money.text = "--";
            web3.eth.getBalance(address, function (error, result) {
                if (error) throw error;
                this.Money.text = web3.fromWei(result, "ether").toNumber().toFixed(goblin.valuePrecision);
            }.bind(this));
        }.bind(this);

        refresh();
        this.BtnRefresh.on(Event.CLICK, this, refresh);

        this.BtnAccept.on(Event.CLICK, this, function () {
            sendTx(
                {to: contract.address, data: contract.accept_proposal.getData()},
                this.parent,
                refresh
            );
        });
        this.BtnReject.on(Event.CLICK, this, function () {
            sendTx(
                {to: contract.address, data: contract.reject_proposal.getData()},
                this.parent,
                refresh
            );
        });
        this.BtnAdmin.on(Event.CLICK, this, function () {
            this.parent.addChild(new AddressList(ADDR_TYPE_GAME_ADMIN, proposalInProgress, refresh));
        });
        this.BtnAccount.on(Event.CLICK, this, function () {
            this.parent.addChild(new AddressList(ADDR_TYPE_MANAGER, proposalInProgress, refresh));
        });
        this.BtnContract.on(Event.CLICK, this, function () {
            this.parent.addChild(new AddressList(ADDR_TYPE_GAME, proposalInProgress, refresh));
        });
        this.BtnMoney.on(Event.CLICK, this, function () {
            this.parent.addChild(new AdminMoney(address, proposalInProgress, refresh));
        });
    }

    function AddressList(addressType, proposalInProgress, onBack) {
        AddressList.super(this);
        this.AddressList.array = [];
        this.AddressList.vScrollBarSkin = "";
        var itemGetter = null;
        var itemAdder = null;
        var itemRemover = null;
        var txCount = 0;

        if (addressType == ADDR_TYPE_GAME) {
            this.Title.text = goblin.texts[1113].format(goblin.texts[1107]);
            this.BtnAdd.label = goblin.texts[1114].format(goblin.texts[1107]);
            itemGetter = contract.get_games;
            itemAdder = contract.add_game;
            itemRemover = contract.remove_game;
        } else if (addressType == ADDR_TYPE_GAME_ADMIN) {
            this.Title.text = goblin.texts[1113].format(goblin.texts[1108]);
            this.BtnAdd.label = goblin.texts[1114].format(goblin.texts[1108]);
            itemGetter = contract.get_game_admins;
            itemAdder = contract.add_game_admin;
            itemRemover = contract.remove_game_admin;
        } else if (addressType == ADDR_TYPE_MANAGER) {
            this.Title.text = goblin.texts[1113].format(goblin.texts[1106]);
            this.BtnAdd.label = goblin.texts[1114].format(goblin.texts[1106]);
            itemGetter = contract.get_managers;
            itemAdder = contract.add_manager;
            itemRemover = contract.remove_manager;
        }

        var onDelete = function (addressToDelete) {
            sendTx(
                {to: contract.address, data: itemRemover.getData(addressToDelete)},
                this.parent,
                refresh
            );
        };

        this.AddressList.renderHandler = new Handler(this, function (item, index) {
            var btnDelete = item.getChildByName("BtnDelete");
            btnDelete.on(Event.CLICK, this, onDelete, [this.AddressList.array[index].Address]);
            if (proposalInProgress) {
                btnDelete.disabled = true;
            }
            if (addressType == ADDR_TYPE_MANAGER && this.AddressList.array.length < 3) {
                btnDelete.visible = false;
            } else {
                if (proposalInProgress) {
                    btnDelete.disabled = true;
                }
            }
        });

        itemGetter.call(contract, function (error, result) {
            if (error) throw error;
            var arr = [];
            for (var i = 0; i < result.length; ++i) {
                arr.push({Address: goblin.util.uint256ToAddress(result[i])});
            }
            this.AddressList.array = arr;
        }.bind(this))

        this.BtnBack.on(Event.CLICK, this, function () {
            this.destroy();
            if (txCount >= 1) {
                onBack();
            }
        });

        this.BtnAdd.on(Event.CLICK, this, function () {
            this.parent.addChild(new AddAddress(this.BtnAdd.label, itemAdder, refresh));
        });

        if (proposalInProgress) {
            this.BtnAdd.disabled = true;
        }

        var refresh = function () {
            proposalInProgress = true;
            this.BtnAdd.disabled = true;
            this.AddressList.refresh();
            ++txCount;
        }.bind(this);
    }

    var sendTx = function (txParams, parent, callback) {
        var loading = new goblin.misc.Loading(goblin.texts[1098]);
        parent.addChild(loading);
        goblin.util.buildTxParams(txParams, goblin.privateKey).then(function () {
            return goblin.util.sendTransactionAndGetReceipt(txParams, goblin.privateKey);
        }).then(function (result) {
            parent.removeChild(loading);
            parent.addChild(new goblin.misc.Tips(goblin.texts[1099]));
            callback();
        }).catch(function (error) {
            parent.removeChild(loading);
            goblin.util.displayTransactionError(error, parent);
        });
    };

    function AddAddress(title, itemAdder, refresh) {
        AddAddress.super(this);
        this.Title.text = title;

        this.BtnClose.on(Event.CLICK, this, function () {
            this.destroy();
        });

        this.BtnOk.on(Event.CLICK, this, function () {
            sendTx(
                {to: contract.address, data: itemAdder.getData("0x" + this.Address.text)},
                this.parent,
                function () {
                    this.destroy();
                    refresh();
                }.bind(this)
            );
        });

        var updateBtnOk = function () {
            this.BtnOk.disabled = this.Address.text.length == 0;
        }.bind(this);

        updateBtnOk();

        this.Address.on(Event.INPUT, this, function () {
            if (this.Address.text.substring(0,2).toLowerCase() == "0x") {
                this.Address.text = this.Address.text.substring(2);
            }
            if (!ethereumjs.Util.isValidAddress("0x" + this.Address.text)) {
                this.Address.text = "";
            }
            updateBtnOk();
        });
    }

    function AdminMoney(address, proposalInProgress, onBack) {
        AdminMoney.super(this);

        this.Currency1.text = this.Currency2.text = goblin.currencyName;

        var txCount = 0;

        this.BtnBack.on(Event.CLICK, this, function () {
            this.destroy();
            if (txCount >= 1) {
                onBack();
            }
        });

        var money;
        this.BtnTransfer.disabled = true;
        web3.eth.getBalance(contract.address, function (error, result) {
            if (error) throw error;
            money = result;
            this.Money.text = web3.fromWei(money, "ether").toNumber();
            if (!(money.eq(0) || proposalInProgress)) this.BtnTransfer.disabled = false;
        }.bind(this));

        contract.get_total_balance(function (error, result) {
            if (error) throw error;
            this.Bonus.text = web3.fromWei(result, "ether").toNumber().toFixed(goblin.valuePrecision);
        }.bind(this));

        var refresh = function () {
            proposalInProgress = true;
            this.BtnAdd.disabled = true;
            this.BtnTransfer.disabled = true;
            this.AddressList.refresh();
            ++txCount;
        }.bind(this);

        var onDelete = function (addressToDelete) {
            sendTx(
                {to: contract.address, data: contract.remove_beneficiary.getData(addressToDelete)},
                this.parent,
                refresh
            );
        };

        this.AddressList.renderHandler = new Handler(this, function (item, index) {
            var btnDelete = item.getChildByName("BtnDelete");
            btnDelete.on(Event.CLICK, this, onDelete, [this.AddressList.array[index].Address]);
            if (proposalInProgress) {
                btnDelete.disabled = true;
            }
        });

        var beneficiaries = [];
        this.AddressList.array = beneficiaries;
        this.AddressList.vScrollBarSkin = "";

        contract.get_beneficiaries(function (error, result) {
            if (error) throw error;
            var arr = [];
            for (var i = 0; i < result.length; ++i) {
                var a = goblin.util.uint256ToAddress(result[i]);
                beneficiaries.push(a)
                arr.push({Address: a});
            }
            this.AddressList.array = arr;
        }.bind(this))

        this.BtnAdd.on(Event.CLICK, this, function () {
            this.parent.addChild(new AddAddress(this.BtnAdd.label, contract.add_beneficiary, refresh));
        });

        if (proposalInProgress) {
            this.BtnAdd.disabled = true;
        }
        this.BtnRecharge.on(Event.CLICK, this, function () {
            this.parent.addChild(new Deposit(contract.address));
        });
        this.BtnTransfer.on(Event.CLICK, this, function () {
            this.parent.addChild(new AdminWithDraw(money, beneficiaries, function () {
                this.destroy();
                onBack();
            }.bind(this)));
        });
    }

    function AdminWithDraw(maxAmount, beneficiaries, callback) {
        AdminWithDraw.super(this);
        this.BtnBack.on(Event.CLICK, this, function () {
            this.destroy();
        });
        this.AbleWithDraw.text += web3.fromWei(maxAmount, "ether").toNumber().toFixed(goblin.valuePrecision) + " " + goblin.currencyName;
        this.ChooseAddress.labels = beneficiaries.join(",");

        var updateBtnOk = function () {
            this.BtnOk.disabled = this.ChooseAddress.selectedIndex < 0 || this.EditMoney.text.length == 0;
        }.bind(this);

        updateBtnOk();
        var amount = new web3.BigNumber(0);

        this.EditMoney.on(Event.INPUT, this, function () {
            try {
                amount = web3.toWei(new web3.BigNumber(this.EditMoney.text), "ether");
            } catch (e) {
                this.EditMoney.text = "";
                amount = new web3.BigNumber(0);
            }
            if (amount.gt(maxAmount)) {
                this.EditMoney.text = "";
                amount = new web3.BigNumber(0);
            }
            updateBtnOk();
        });

        this.ChooseAddress.on(Event.CHANGE, this, function () {
            updateBtnOk();
        });

        this.BtnOk.on(Event.CLICK, this, function () {
            sendTx(
                {to: contract.address, data: contract.benefit.getData(beneficiaries[this.ChooseAddress.selectedIndex], amount)},
                this.parent,
                function () {
                    this.destroy();
                    callback();
                }.bind(this)
            );
        });
    }

    Laya.class(BankMain, "AdminBankMain", AdminWalletMainUI);
    Laya.class(AddressList, "AdminAddressList", AdminWalletAddressUI);
    Laya.class(AddAddress, "AdminAddAddress", AdminWalletAddAddressUI);
    Laya.class(AdminMoney, "AdminMoney", AdminWalleMoneyUI);
    Laya.class(AdminWithDraw, "AdminWithDraw", AdminWithDrawUI);
    goblin.newHomeMain = newBankMain;
})();