(function () {
    "use strict";

    var Handler = laya.utils.Handler;
    var Event = laya.events.Event;

    function Deposit(address) {
        Deposit.super(this);

        this.Address.text = address.substring(2);
        var amount = 0;

        var redrawQRCode = function () {
            goblin.util.drawQRCode("ethereum:" + address + "?value=" + amount, this.WalletIcon);
        }.bind(this);

        redrawQRCode();

        this.EditMoney.on(Event.INPUT, this, function () {
            try {
                amount = web3.toWei(new web3.BigNumber(this.EditMoney.text), "ether");
            } catch (e) {
                this.EditMoney.text = "";
                amount = new web3.BigNumber(0);
            }

            redrawQRCode();
        });

        this.BtnBack.on(Event.CLICK, this, function () {
            this.destroy();
        });

        this.BtnCopy.on(Event.CLICK, this, function () {
            goblin.util.copyToClipboard(this.Address.text);
        });
    }

    Laya.class(Deposit, "Deposit", DepositUI);
})();
    
if (typeof __GAME_ENTRY__ !== "undefined") (function () {
    "use strict";

    var Handler = laya.utils.Handler;
    var Event = laya.events.Event;

    var INDEX_LOBBY = 0;
    var INDEX_RECORD = 1;
    var INDEX_WALLET = 2;

    function newHomeMain(parent, callback) {
        var loading = new goblin.misc.Loading(goblin.texts[1001]);
        parent.addChild(loading);

        initGameIndexes(function () {
            parent.removeChild(loading);
            var homeMain = new HomeMain();
            parent.addChild(homeMain);
            callback(homeMain);
        });
    }

    var INDEX_KUAISAN;
    var INDEX_COIN_FLIPPING;
    var INDEX_BALLGAME_BETTING;

    var initGameIndexes = function(callback) {
        var count = 0;
        var done = function() {
            if (--count >= 1) return;
            callback();
        };
        var nextGameIndex = 0;
        goblin.contract.coinFlipping.get_disabled(function (error, result) {
            //if (error) throw error;
            INDEX_COIN_FLIPPING = result ? -1 : nextGameIndex++;
            done();
        }), ++count;
        goblin.contract.kuaisan.get_disabled(function (error, result) {
            //if (error) throw error;
            INDEX_KUAISAN = result ? -1 : nextGameIndex++;
            done();
        }), ++count;
        goblin.contract.ballgameBetting.get_disabled(function (error, result) {
            //if (error) throw error;
            INDEX_BALLGAME_BETTING = result ? -1 : nextGameIndex++;
            done();
        }), ++count;
    };

    function HomeMain() {
        HomeMain.super(this);

        var kuaisanMain = null;
        var coinFlippingMain = null;
        var ballgameBettingMain = null;

        var array = [];
        if (INDEX_KUAISAN >= 0) array[INDEX_KUAISAN] = {Icon: "resource/icon1.png"};
        if (INDEX_COIN_FLIPPING >= 0) array[INDEX_COIN_FLIPPING] = {Icon: "resource/icon2.png"};
        if (INDEX_BALLGAME_BETTING >= 0) array[INDEX_BALLGAME_BETTING] = {Icon: "resource/icon3.png"};
        this.GameList.array = array;
        this.GameList.vScrollBarSkin = "";

        var kuaisanOnClick = function () {
            if (kuaisanMain && !kuaisanMain.destroyed) {
                this.parent.addChild(kuaisanMain);
            } else {
                goblin.newKuaisanMain(this.parent, function (gameMain) {
                    kuaisanMain = gameMain;
                });
            }
        };

        var coinFlippingOnClick = function () {
            if (coinFlippingMain && !coinFlippingMain.destroyed) {
                this.parent.addChild(coinFlippingMain);
            } else {
                goblin.newCoinFlippingMain(this.parent, function (gameMain) {
                    coinFlippingMain = gameMain;
                });
            }
        };

        var ballgameBettingOnClick = function () {
            if (ballgameBettingMain && !ballgameBettingMain.destroyed) {
                this.parent.addChild(ballgameBettingMain);
            } else {
                goblin.newBallgameBettingMain(this.parent, function (gameMain) {
                    ballgameBettingMain = gameMain;
                });
            }
        };

        this.GameList.renderHandler = new Handler(this, function (item, index) {
            switch (index) {
            case INDEX_KUAISAN: item.on(Event.CLICK, this, kuaisanOnClick); break;
            case INDEX_COIN_FLIPPING: item.on(Event.CLICK, this, coinFlippingOnClick); break;
            case INDEX_BALLGAME_BETTING: item.on(Event.CLICK, this, ballgameBettingOnClick); break;
            }
        });

        var curFuncIndex = 0;
        this.BtnFunc.selectedIndex = curFuncIndex;

        this.BtnFunc.on(Event.CLICK, this, function () {
            if (this.BtnFunc.selectedIndex == INDEX_RECORD) {
                this.BtnFunc.selectedIndex = curFuncIndex;
                var loading = new goblin.misc.Loading(goblin.texts[1001]);
                this.parent.addChild(loading);
                goblin.updateRecords(function (records) {
                    this.parent.removeChild(loading);
                    this.parent.addChild(new Record(records));
                }.bind(this));
            } else if (this.BtnFunc.selectedIndex == INDEX_WALLET) {
                this.BtnFunc.selectedIndex = curFuncIndex;
                this.parent.addChild(new MyWallet(this));
            } else {
                curFuncIndex = this.BtnFunc.selectedIndex;
            }
        });
    }

    function MyWallet(homeMain) {
        MyWallet.super(this);

        var address = "0x" + ethereumjs.Util.privateToAddress(goblin.privateKey).toString("hex");
        this.Address.text = address.substring(2);

        goblin.util.drawQRCode("ethereum:" + address, this.WalletIcon);

        this.BtnBack.on(Event.CLICK, this, function () {
            this.destroy();
        });

        this.BtnLoginOut.on(Event.CLICK, this, function () {
            goblin.privateKey = null;
            goblin.newLoginMain(this.parent);
            this.destroy();
            homeMain.destroy();
        });

        this.BtnRecharge.on(Event.CLICK, this, function () {
            this.parent.addChild(new Deposit(address));
        });

        var ethAmount = new web3.BigNumber(0);
        var kxcAmount = new web3.BigNumber(0);

        var getBalances = function () {
            var balanceCount = 0;

            var showTotalBalance = function () {
                if (--balanceCount >= 1) return;
                this.TotalMoney.text = web3.fromWei(ethAmount.add(kxcAmount), "ether").toNumber().toFixed(goblin.valuePrecision);
                this.Txt1.text = goblin.currencyName;
            }.bind(this);

            web3.eth.getBalance(address, function (error, result) {
                if (error) {
                    //throw error;
                    console.log("wallet get eth error: " + error.toString());
                    result = 0;
                }
                ethAmount = result;
                this.BtnTransfer.disabled = ethAmount.eq(0);
                this.BetMoney.text = web3.fromWei(ethAmount, "ether").toNumber().toFixed(goblin.valuePrecision);
                this.Txt2.text = goblin.currencyName;
                showTotalBalance();
            }.bind(this)), ++balanceCount;

            goblin.contract.bank.get_balance({from: address}, function (error, result) {
                if (error) {
                    //throw error;
                    console.log("wallet get bonus money error: " + error.toString());
                    result = 0;
                }
                kxcAmount = result;
                this.BtnCash.disabled = kxcAmount.eq(0);
                this.BonusMoney.text = web3.fromWei(kxcAmount, "ether").toNumber().toFixed(goblin.valuePrecision);
                this.Txt3.text = goblin.currencyName;
                showTotalBalance();
            }.bind(this)), ++balanceCount;
        }.bind(this);

        getBalances();

        this.BtnTransfer.on(Event.CLICK, this, function () {
            this.parent.addChild(new WithDraw(address, ethAmount, getBalances));
        });

        this.BtnCash.on(Event.CLICK, this, function () {
            var bankContract = goblin.contract.bank;
            var txParams = {to: bankContract.address, data: bankContract.withdraw.getData(address, kxcAmount)};
            var loading = new goblin.misc.Loading(goblin.texts[1057]);
            this.parent.addChild(loading);
            goblin.util.buildTxParams(txParams, goblin.privateKey).then(function () {
                return goblin.util.sendTransactionAndGetReceipt(txParams, goblin.privateKey);
            }).then(function (result) {
                this.parent.removeChild(loading);
                this.parent.addChild(new goblin.misc.Tips(goblin.texts[1058]));
                getBalances();
            }.bind(this)).catch(function (error) {
                this.parent.removeChild(loading);
                goblin.util.displayTransactionError(error, this.parent);
            }.bind(this));
        });

        this.BtnCopy.on(Event.CLICK, this, function () {
            goblin.util.copyToClipboard(this.Address.text);
        });

        this.BtnOut.on(Event.CLICK, this, function () {
            var keystore = JSON.stringify(goblin.keyObject);
            var blob = new Blob([keystore], {type: "text/plain;charset=utf-8"});
            var fileName = keythereum.generateKeystoreFilename(goblin.keyObject.address);
            saveAs(blob, fileName);
        });
    }

    function WithDraw(addr, /*coinType, */maxAmount, callback) {
        WithDraw.super(this);

        var gasPrice = new web3.BigNumber(0);
        var gasLimit = new web3.BigNumber(0);

        web3.eth.getGasPrice(function (error, result) {
            if (error) throw error;
            gasPrice = goblin.util.gasPriceScale(result);
            this.EditGasPrice.text = gasPrice.toString();
            refreshLoss();
            disableNext();
        }.bind(this));

        var txParams;

        // if (coinType == "ETH") {
        txParams = {from: addr, to: addr, value: maxAmount, data: web3.toHex("*".repeat(80))};
        // } else if (coinType == "KXC") {
        //     var bankContract = goblin.contract.bank;
        //     txParams = {from: addr, to: bankContract.address, data: bankContract.withdraw.getData(addr, maxAmount)};
        // }

        web3.eth.estimateGas(txParams, function (error, result) {
            if (error) throw error;
            gasLimit = (new web3.BigNumber(result)).add(1);
            this.EditGasLimit.text = gasLimit.toString();
            refreshLoss();
            disableNext();
        }.bind(this));

        var refreshLoss = function() {
            this.Loss.text = goblin.texts[1002].format(web3.fromWei(gasPrice.mul(gasLimit), "ether").toString() + " " + goblin.currencyName);
        }.bind(this);

        refreshLoss();

        var disableNext = function () {
            this.BtnNext.disabled = this.EditAddress.text.length * this.EditMoney.text.length * this.EditGasPrice.text.length * this.EditGasLimit.text.length == 0;
        }.bind(this);

        disableNext();

        this.EditGasLimit.on(Event.INPUT, this, function () {
            try {
                gasLimit = new web3.BigNumber(this.EditGasLimit.text);
            } catch (e) {
                this.EditGasLimit.text = "";
                gasLimit = new web3.BigNumber(0);
            }
            refreshLoss();
            disableNext();
        });

        this.EditGasPrice.on(Event.INPUT, this, function () {
            try {
                gasPrice = new web3.BigNumber(this.EditGasPrice.text);
            } catch (e) {
                this.EditGasPrice.text = "";
                gasPrice = new web3.BigNumber(0);
            }
            refreshLoss();
            disableNext();
        });

        this.EditAddress.on(Event.INPUT, this, function () {
            if (this.EditAddress.text.substring(0,2).toLowerCase() == "0x") {
                this.EditAddress.text = this.EditAddress.text.substring(2);
            }
            if (!ethereumjs.Util.isValidAddress("0x" + this.EditAddress.text)) {
                this.EditAddress.text = "";
            }
            disableNext();
        });

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
            disableNext();
        });

        this.BtnNext.on(Event.CLICK, this, function () {
            var fromAddr = addr;
            var toAddr = '0x' + this.EditAddress.text;
            // if (coinType == "ETH") {
            txParams = {
                from: fromAddr,
                to: toAddr,
                value: amount,
                data: web3.toHex(this.EditNote.text),
                gasLimit: gasLimit,
                gasPrice: gasPrice,
            };
            // } else if (coinType == "KXC") {
            //     var bankContract = goblin.contract.bank;
            //     txParams = {
            //         from: fromAddr,
            //         to: bankContract.address,
            //         data: bankContract.withdraw.getData(toAddr, amount),
            //         gasLimit: gasLimit,
            //         gasPrice: gasPrice,
            //     };
            //     fromAddr = bankContract.address;
            // }
            web3.eth.getTransactionCount(txParams.from, function (error, result) {
                if (error) throw error;
                txParams.nonce = result;
                this.parent.addChild(new WithDrawConfirm(this, fromAddr, toAddr, gasPrice.mul(gasLimit), amount, txParams, callback));
            }.bind(this));
        });

        this.BtnBack.on(Event.CLICK, this, function () {
            this.destroy();
        });

        this.BtnMore.on(Event.CLICK, this, function () {
            var b = this.BtnMore.selected;
            this.EditGasPrice.visible = b;
            this.EditGasLimit.visible = b;
            this.Loss.visible = b;
        });

        this.AbleWithDraw.text += web3.fromWei(maxAmount, "ether").toNumber().toFixed(goblin.valuePrecision) + " " + goblin.currencyName;
    }

    function WithDrawConfirm(withDraw, fromAddr, toAddr, loss, amount, txParams, callback) {
        WithDrawConfirm.super(this);

        this.BtnBack.on(Event.CLICK, this, function () {
            this.destroy();
        });

        this.BtnConfirm.on(Event.CLICK, this, function () {
            var loading = new goblin.misc.Loading(goblin.texts[1003]);
            this.parent.addChild(loading);
            var password = this.password.text;
            var privateKey = keythereum.recover(password, goblin.keyObject, function (error, privateKey) {
                if (error) {
                    this.parent.removeChild(loading);
                    this.parent.addChild(new goblin.misc.Tips(goblin.texts[1028]));
                } else {
                    this.parent.removeChild(loading);
                    goblin.util.sendTransactionAndGetReceipt(txParams, privateKey).then(function (result) {
                        this.parent.removeChild(loading);
                        this.parent.addChild(new goblin.misc.Tips(goblin.texts[1004], function () {
                            this.destroy();
                            withDraw.destroy();
                        }.bind(this)));
                        callback();
                    }.bind(this)).catch(function (error) {
                        goblin.util.displayTransactionError(error, this.parent);
                        this.parent.removeChild(loading);
                        this.destroy();
                        withDraw.destroy();
                    }.bind(this));
                }
            }.bind(this));

           
        });

        this.RecipientAddress.text = toAddr.substring(2);
        this.PaymentAddress.text = fromAddr.substring(2);
        this.TransFee.text = web3.fromWei(loss, "ether");
        this.TransAmount.text = web3.fromWei(amount, "ether");
    }

    function Record(records) {
        Record.super(this);
        this.RecordList.vScrollBarSkin = "";
        this.RecordList.array = records;
        if (records.length == 0) {
            this.Desc.text = goblin.texts[1065];
        } else {
            this.Desc.text = "";
        }

        this.BtnBack.on(Event.CLICK, this, function () {
            this.destroy();
        });

        this.BtnRefresh.on(Event.CLICK, this, function () {
            this.BtnRefresh.disabled = true;
            goblin.updateRecords(function (newRecords) {
                this.BtnRefresh.disabled = false;
                records = newRecords;
                this.RecordList.array = records;
            }.bind(this));
        });

        var onClick = function (index) {
            var rawRecord = records[index]._raw;
            if (rawRecord._type == goblin.RECORD_TYPE_KUAISAN) {
                this.parent.addChild(new RecordInfo(rawRecord));
            } else if (rawRecord._type == goblin.RECORD_TYPE_COIN_FLIPPING) {
                this.parent.addChild(new CoinFlippingRecordInfo(rawRecord));
            } else if (rawRecord._type == goblin.RECORD_TYPE_BALLGAME_BETTING) {
                this.parent.addChild(new BallgameBettingRecordInfo(rawRecord));
            }
        }.bind(this);

        this.RecordList.renderHandler = new Handler(this, function (item, index) {
            item.on(Event.CLICK, this, onClick, [index]);
        });
    }

    function RecordInfo(rawRecord) {
        RecordInfo.super(this);
        this.on(Event.CLICK, this, function () { this.destroy(); });
        if (rawRecord._luckyNumber == undefined) {
            this.Result.text = goblin.texts[1029].format(rawRecord._roundNumber);
            this.Result.valign = "middle";
            this.Num1.visible = false;
            this.Num2.visible = false;
            this.Num3.visible = false;
        } else {
            this.Result.text = goblin.texts[1051].format(rawRecord._roundNumber);
            var a = rawRecord._luckyNumber.toString().split("").map(Number);
            this.Num1.skin = "resource/dice{}.png".format(a[0]);
            this.Num2.skin = "resource/dice{}.png".format(a[1]);
            this.Num3.skin = "resource/dice{}.png".format(a[2]);
        }
        if (rawRecord._bonus == undefined) {
            this.Status.text = goblin.util.makeText(rawRecord._rawText);
            this.BonusTitle.visible = false;
            this.Bonus.visible = false;
        } else {
            this.Status.text = goblin.texts[1032];
            this.Bonus.text = rawRecord._bonus.toFixed(goblin.valuePrecision) + " " + goblin.currencyName;
        }
        this.Type.text += goblin.util.makeText(rawRecord._rawType);
        this.Numbers.text = goblin.util.makeText(rawRecord._rawNumbers);
        this.Hands.text =  "{}{}{}{}".format(
            rawRecord._hands, goblin.texts[1005],
            rawRecord._factor, goblin.texts[1019]
        );
        this.Price.text = goblin.util.makeText(rawRecord._rawPrice);
    }

    function CoinFlippingRecordInfo(rawRecord) {
        CoinFlippingRecordInfo.super(this);
        this.on(Event.CLICK, this, function () { this.destroy(); });
        if (rawRecord._luckySide == undefined) {
            this.Result.text = goblin.texts[1029].format(rawRecord._roundNumber);
            this.Result.valign = "middle";
            this.Coin.visible = false;
        } else {
            this.Result.text = goblin.texts[1064].format(rawRecord._roundNumber);
            if (rawRecord._luckySide == 0) {
                this.Coin.skin = "resource/coin_heads.png";
            } else {
                this.Coin.skin = "resource/coin_tails.png";
            }
        }
        if (rawRecord._bonus == undefined) {
            this.Status.text = goblin.util.makeText(rawRecord._rawText);
            this.BonusTitle.visible = false;
            this.Bonus.visible = false;
        } else {
            this.Status.text = goblin.texts[1032];
            this.Bonus.text = rawRecord._bonus.toFixed(goblin.valuePrecision) + " " + goblin.currencyName;
        }
        this.Numbers.text = goblin.util.makeText(rawRecord._rawType);
        this.Price.text = goblin.util.makeText(rawRecord._rawPrice);
    }

    function BallgameBettingRecordInfo(rawRecord) {
        BallgameBettingRecordInfo.super(this);
        this.on(Event.CLICK, this, function () { this.destroy(); });
        if (rawRecord._scores == undefined || rawRecord._scores.length == 0) {
            this.TxtResult.text = goblin.texts[1095].format("∞", "∞");
        } else {
            this.TxtResult.text = goblin.texts[1095].format(rawRecord._scores[0], rawRecord._scores[1]);
        }
        if (rawRecord._bonus == undefined) {
            this.Status.text = goblin.util.makeText(rawRecord._rawText);
            this.BonusTitle.visible = false;
            this.Bonus.visible = false;
        } else {
            this.Status.text = goblin.texts[rawRecord._scores.length == 0 ? 1094 : 1032];
            this.Bonus.text = rawRecord._bonus.toFixed(goblin.valuePrecision) + " " + goblin.currencyName;
        }
        this.HomeName.text = goblin.config.ballgameBetting.teamName(rawRecord._matchData.team1_id),
        this.VisitorName.text = goblin.config.ballgameBetting.teamName(rawRecord._matchData.team2_id),
        this.Type.text += goblin.util.makeText(rawRecord._rawType);

        var ss = [];
        for (var i = 0; i < rawRecord._betNameTextIDs.length; ++i) {
            ss.push(goblin.texts[rawRecord._betNameTextIDs[i]]);
        }
        this.Numbers.text = ss.join(", ");

        this.Price.text = goblin.util.makeText(rawRecord._rawPrice);
    }

    Laya.class(HomeMain, "HomeMain", HomeMainUI);
    Laya.class(MyWallet, "MyWallet", MyWalletUI);
    Laya.class(WithDraw, "WithDraw", WithDrawUI);
    Laya.class(WithDrawConfirm, "WithDrawConfirm", WithDrawConfirmUI);
    Laya.class(Record, "Record", RecordUI);
    Laya.class(RecordInfo, "RecordInfo", RecordInfoUI);
    Laya.class(CoinFlippingRecordInfo, "CoinFlippingRecordInfo", RecordInfo1UI);
    Laya.class(BallgameBettingRecordInfo, "BallgameBettingRecordInfo", RecordInfo2UI);
    goblin.newHomeMain = newHomeMain;
})();
