if (typeof __ADMIN_ENTRY__ !== "undefined") (function () {
    "use strict";

    var Handler = laya.utils.Handler;
    var Event = laya.events.Event;

    function newAdminMain(parent, callback) {
        var adminMain = new AdminMain();
        parent.addChild(adminMain);
        callback(adminMain);
    }

    var INDEX_KUAISAN = 1;
    var INDEX_COIN_FLIPPING = 0;
    var INDEX_BALLGAME_BETTING = 2;

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

    function AdminMain() {
        AdminMain.super(this);
        this.BtnLoginOut.on(Event.CLICK, this, function () {
            goblin.privateKey = null;
            goblin.newLoginMain(this.parent);
            this.destroy();
        });

        var address = "0x" + ethereumjs.Util.privateToAddress(goblin.privateKey).toString("hex");
        this.Address.text = address.substr(2);
        goblin.util.drawQRCode("ethereum:" + address, this.QRCode);

        var refresh = function () {
            this.Money.text = "--";
            web3.eth.getBalance(address, function (error, result) {
                if (error) throw error;
                this.Money.text = web3.fromWei(result, "ether").toNumber().toFixed(goblin.valuePrecision);
            }.bind(this));
        }.bind(this);
        this.BtnRefresh.on(Event.CLICK, this, refresh);
        refresh();
        
        var array = [];
        array[INDEX_KUAISAN] = {Icon: "resource/icon1.png"};
        array[INDEX_COIN_FLIPPING] = {Icon: "resource/icon2.png"};
        array[INDEX_BALLGAME_BETTING] = {Icon: "resource/icon3.png"};
        this.GameList.array = array;
        this.GameList.vScrollBarSkin = "";

        var onIconClick = function (gameIndex) {
            if (gameIndex == INDEX_BALLGAME_BETTING) {
                this.parent.addChild(new AdminGameManage3());
            } else {
                this.parent.addChild(new AdminGameManage(gameIndex));
            }
        };

        this.GameList.renderHandler = new Handler(this, function (item, index) {
            item.on(Event.CLICK, this, onIconClick, [index]);
        });
    }

    function AdminGameManage(gameIndex) {
        AdminGameManage.super(this);

        var contract;

        if (gameIndex == INDEX_KUAISAN) {
            contract = goblin.contract.kuaisan;
            this.GameName.text = goblin.texts[1000];
        } else if (gameIndex == INDEX_COIN_FLIPPING) {
            contract = goblin.contract.coinFlipping;
            this.GameName.text = goblin.texts[1042];
        }

        this.BtnBack.on(Event.CLICK, this, function () {
            this.destroy();
        });

        var refreshOdds = function () {
            this.BetOdds.text = "";
            this.BtnModifyOdds.disabled = true;
            if (gameIndex == INDEX_KUAISAN) {
                contract.get_odds(function (error, result) {
                    if (error) throw error;
                    var context = {
                        title: goblin.texts[1116],
                        minValue: 1,
                        maxValue: 216,
                        value: result.toNumber(),
                        valueFilter: function (value) { return Math.floor(value); },
                        valueSetter: function (value) { return contract.set_odds.getData(value); },
                        refresher: refreshOdds
                    };
                    this.BetOdds.text = "{} / {} ({}%)".format(context.value, context.maxValue, (context.value / context.maxValue * 100).toFixed(goblin.valuePrecision));
                    this.BtnModifyOdds.user_Context = context;
                    this.BtnModifyOdds.disabled = false;
                }.bind(this));
            } else if (gameIndex == INDEX_COIN_FLIPPING) {
                contract.get_odds_x_10(function (error, result) {
                    if (error) throw error;
                    var context = {
                        title: goblin.texts[1116],
                        minValue: 1,
                        maxValue: 20,
                        value: result.toNumber(),
                        valueFilter: function (value) { return Math.floor(value); },
                        valueSetter: function (value) { return contract.set_odds_x_10.getData(value); },
                        refresher: refreshOdds
                    };
                    this.BetOdds.text = "{} / {} ({}%)".format(context.value, context.maxValue, (context.value / context.maxValue * 100).toFixed(goblin.valuePrecision));
                    this.BtnModifyOdds.user_Context = context;
                    this.BtnModifyOdds.disabled = false;
                }.bind(this));
            }
        }.bind(this);
        refreshOdds();

        var refreshPrice = function () {
            this.BetPrice.text = "";
            this.BtnModifyPrice.disabled = true;
            contract.get_ticket_price(function (error, result) {
                if (error) throw error;
                var context = {
                    title: goblin.texts[1117],
                    minValue: null,
                    maxValue: null,
                    value: web3.fromWei(result, "ether").toNumber(),
                    valueFilter: function (value) { return value; },
                    valueSetter: function (value) { return contract.set_ticket_price.getData(web3.toWei(value, "ether")); },
                    refresher: refreshPrice
                };
                this.BetPrice.text = context.value.toFixed(goblin.valuePrecision) + " " + goblin.currencyName;
                this.BtnModifyPrice.user_Context = context;
                this.BtnModifyPrice.disabled = false;
            }.bind(this));
        }.bind(this);
        refreshPrice();

        var refreshMax = function () {
            this.BetMax.text = "";
            this.BtnModifyMax.disabled = true;
            contract.get_max_total_ticket_count(function (error, result) {
                if (error) throw error;
                var context = {
                    title: goblin.texts[1118],
                    minValue: 1,
                    maxValue: 127,
                    value: result.toNumber(),
                    valueFilter: function (value) { return Math.floor(value); },
                    valueSetter: function (value) { return contract.set_max_total_ticket_count.getData(value); },
                    refresher: refreshMax
                };
                this.BetMax.text = context.value.toString() + goblin.texts[1005];
                this.BtnModifyMax.user_Context = context;
                this.BtnModifyMax.disabled = false;
            }.bind(this));
        }.bind(this);
        refreshMax();

        var refreshTime = function () {
            this.BetTime.text = "";
            this.BtnModifyTime.disabled = true;
            contract.get_duration(function (error, result) {
                if (error) throw error;
                var context = {
                    title: goblin.texts[1119],
                    minValue: null,
                    maxValue: null,
                    value: result.toNumber() / 60,
                    valueFilter: function (value) { return Math.floor(value); },
                    valueSetter: function (value) { return contract.set_duration.getData(value * 60); },
                    refresher: refreshTime
                };
                this.BetTime.text = context.value + goblin.texts[1115];
                this.BtnModifyTime.user_Context = context;
                this.BtnModifyTime.disabled = false;
            }.bind(this));
        }.bind(this);
        refreshTime();

        var onModify = function (btn) {
            this.parent.addChild(new AdminModify(contract, btn.user_Context));
        };

        this.BtnModifyMax.on(Event.CLICK, this, onModify.bind(this, this.BtnModifyMax));
        this.BtnModifyOdds.on(Event.CLICK, this, onModify.bind(this, this.BtnModifyOdds));
        this.BtnModifyPrice.on(Event.CLICK, this, onModify.bind(this, this.BtnModifyPrice));
        this.BtnModifyTime.on(Event.CLICK, this, onModify.bind(this, this.BtnModifyTime));

        var isDisabled;
        this.BtnCloseGame.visible = false;

        contract.get_disabled(function (error, result) {
            if (error) throw error;
            isDisabled = result;
            this.BtnCloseGame.label = goblin.texts[isDisabled ? 1122 : 1123];
            this.BtnCloseGame.visible = true;
        }.bind(this));

        this.BtnCloseGame.on(Event.CLICK, this, function () {
            this.parent.addChild(new goblin.misc.Confirm(goblin.texts[1127].format(this.BtnCloseGame.label), function () {
                sendTx(
                    {to: contract.address, data: contract.set_disabled.getData(!isDisabled)},
                    this.parent,
                    function () {
                        isDisabled = !isDisabled;
                        this.BtnCloseGame.label = goblin.texts[isDisabled ? 1122 : 1123];
                    }.bind(this)
                );
            }.bind(this)));
        });
    }

    function AdminGameManage3() {
        AdminGameManage3.super(this);

        var contract = goblin.contract.ballgameBetting;
        this.GameName.text = goblin.texts[1092];

        this.BtnBack.on(Event.CLICK, this, function () {
            this.destroy();
        });

        var list = new AdminGame3List(contract);
        this.List.addChild(list);

        this.BtnCreateRound.on(Event.CLICK, this, function () {
            this.parent.addChild(new AdminGame3Create(contract, list.refresh.bind(list)));
        });

        var refreshWater = function () {
            // this.BetOdds.text = "";
            this.BtnModifyWater.disabled = true;
            contract.get_water_percent(function (error, result) {
                if (error) throw error;
                var context = {
                    title: goblin.texts[1116] + "(%)",
                    minValue: 0,
                    maxValue: 99,
                    value: 100 - result.toNumber(),
                    valueFilter: function (value) { return Math.floor(value); },
                    valueSetter: function (value) { return contract.set_water_percent.getData(100 - value); },
                    refresher: refreshWater
                };
                // this.BetOdds.text = "{} / {} ({}%)".format(context.value, context.maxValue, (context.value / context.maxValue).toFixed(goblin.valuePrecision));
                this.BtnModifyWater.user_Context = context;
                this.BtnModifyWater.disabled = false;
            }.bind(this));
        }.bind(this);
        refreshWater();

        var refreshPrice = function () {
            // this.BetPrice.text = "";
            this.BtnModifyPrice.disabled = true;
            contract.get_ticket_price(function (error, result) {
                if (error) throw error;
                var context = {
                    title: goblin.texts[1117] + "({})".format(goblin.currencyName),
                    minValue: null,
                    maxValue: null,
                    value: web3.fromWei(result, "ether").toNumber(),
                    valueFilter: function (value) { return value; },
                    valueSetter: function (value) { return contract.set_ticket_price.getData(web3.toWei(value, "ether")); },
                    refresher: refreshPrice
                };
                // this.BetPrice.text = context.value.toFixed(goblin.valuePrecision) + " " + goblin.currencyName;
                this.BtnModifyPrice.user_Context = context;
                this.BtnModifyPrice.disabled = false;
            }.bind(this));
        }.bind(this);
        refreshPrice();

        var refreshMax = function () {
            // this.BetMax.text = "";
            this.BtnModifyMax.disabled = true;
            contract.get_max_total_ticket_count(function (error, result) {
                if (error) throw error;
                var context = {
                    title: goblin.texts[1118] + "({})".format(goblin.texts[1005]),
                    minValue: 1,
                    maxValue: 127,
                    value: result.toNumber(),
                    valueFilter: function (value) { return Math.floor(value); },
                    valueSetter: function (value) { return contract.set_max_total_ticket_count.getData(value); },
                    refresher: refreshMax
                };
                // this.BetMax.text = context.value.toString() + goblin.texts[1005];
                this.BtnModifyMax.user_Context = context;
                this.BtnModifyMax.disabled = false;
            }.bind(this));
        }.bind(this);
        refreshMax();

        var onModify = function (btn) {
            this.parent.addChild(new AdminModify(contract, btn.user_Context));
        };

        this.BtnModifyMax.on(Event.CLICK, this, onModify.bind(this, this.BtnModifyMax));
        this.BtnModifyWater.on(Event.CLICK, this, onModify.bind(this, this.BtnModifyWater));
        this.BtnModifyPrice.on(Event.CLICK, this, onModify.bind(this, this.BtnModifyPrice));

        var isDisabled;
        this.BtnCloseGame.visible = false;

        contract.get_disabled(function (error, result) {
            if (error) throw error;
            isDisabled = result;
            this.BtnCloseGame.label = goblin.texts[isDisabled ? 1122 : 1123];
            this.BtnCloseGame.visible = true;
        }.bind(this));

        this.BtnCloseGame.on(Event.CLICK, this, function () {
            this.parent.addChild(new goblin.misc.Confirm(goblin.texts[1127].format(this.BtnCloseGame.label), function () {
                sendTx(
                    {to: contract.address, data: contract.set_disabled.getData(!isDisabled)},
                    this.parent,
                    function () {
                        isDisabled = !isDisabled;
                        this.BtnCloseGame.label = goblin.texts[isDisabled ? 1122 : 1123];
                    }.bind(this)
                );
            }.bind(this)));
        });
    }

    function AdminGame3List(contract) {
        AdminGame3List.super(this);

        this.MatchList.array = [];
        this.MatchList.vScrollBarSkin = "";

        var contract2 = new ethers.Contract(contract.address, contract.abi, new ethers.providers.Web3Provider(web3.currentProvider));
        var protocol = goblin.protocol.ballgameBetting;

        var refresh = function() {
            contract2.get_matches().then(function (matches) {
                for (var i = 0; i < matches.length; ++i) {
                    var match = matches[i];
                    match.length = 0;
                    match.betting_of_type = {};
                    match.data = protocol.Match.decode(ethereumjs.Buffer.Buffer.from(match.data.substr(2), "hex"));
                    for (var j = 0; j < match.bettings.length; ++j) {
                        var betting = match.bettings[j];
                        betting.length = 0;
                        betting.parent = match;
                        betting.index = j;
                        betting.result_of_type = {};
                        betting.data = protocol.Betting.decode(ethereumjs.Buffer.Buffer.from(betting.data.substr(2), "hex"));
                        match.betting_of_type[betting.data.type] = betting;
                        for (var k = 0; k < betting.results.length; ++k) {
                            var bettingResult = betting.results[k];
                            bettingResult.length = 0;
                            bettingResult.parent = betting;
                            bettingResult.index = k;
                            bettingResult.data = protocol.BettingResult.decode(ethereumjs.Buffer.Buffer.from(bettingResult.data.substr(2), "hex"));
                            betting.result_of_type[bettingResult.data[bettingResult.data.value]] = bettingResult;
                        }
                    }
                }

                var timestampToString = function (ts) {
                    var d = new Date();
                    d.setTime(ts * 1000);
                    return ("00" + (d.getMonth() + 1)).slice(-2) + "-" + 
                        ("00" + d.getDate()).slice(-2) + " " +
                        ("00" + d.getHours()).slice(-2) + ":" + 
                        ("00" + d.getMinutes()).slice(-2);
                };

                var now = Math.floor(Date.now() / 1000);
                var config = goblin.config.ballgameBetting;
                var arr1 = [];
                var arr2 = [];

                for (var i = 0; i < matches.length; ++i) {
                    var match = matches[i];
                    var itemData = {
                        GameType: config.leagueName(match.data.league_id),
                        HomeName: config.teamName(match.data.team1_id),
                        VisitorName: config.teamName(match.data.team2_id),
                        EndTime: timestampToString(match.betting_stop_time.toNumber()),
                        _match: match
                    };
                    if (match.betting_stop_time.toNumber() < now) {
                        arr1.push(itemData);
                    } else {
                        itemData.BtnConfirm = {visible: false};
                        arr2.push(itemData);
                    }
                }

                this.MatchList.array = arr1.concat(arr2);
            }.bind(this));
        }.bind(this);

        this.refresh = refresh;
        refresh();

        var onCancel = function (match) {
            var doCancel = function () {
                var iface = new ethers.Interface(contract.abi);
                var txParams = {
                    to: contract.address,
                    data: iface.functions.end_match(
                        match.index,
                        [-1, -1, -1],
                        protocol.Draw.encode({score1: 0, score2: 0}).finish()
                    ).data
                };
                sendTx(
                    txParams,
                    this.parent,
                    refresh
                );
            }.bind(this);

            var now = Math.floor(Date.now() / 1000);

            if (match.betting_start_time.toNumber() < now) {
                this.parent.addChild(new goblin.misc.Confirm(goblin.texts[1100], doCancel));
            } else {
                doCancel();
            }
        };

        var onConfirm = function (match) {
            var doConfirm = function (score1, score2) {
                var bettingResultIndexes = [-1, -1, -1];
                var betting;
                var bettingResult;

                betting = match.betting_of_type[protocol.BettingType.WIN_LOSE_DRAW];
                if (score1 > score2) {
                    bettingResult = betting.result_of_type[protocol.WinLoseDraw.WIN];
                } else if (score1 < score2) {
                    bettingResult = betting.result_of_type[protocol.WinLoseDraw.LOSE];
                } else {
                    bettingResult = betting.result_of_type[protocol.WinLoseDraw.DRAW];
                }
                bettingResultIndexes[betting.index] = bettingResult.index;
                
                betting = match.betting_of_type[protocol.BettingType.ODD_EVEN];
                if ((score1 + score2) % 2 == 1) {
                    bettingResult = betting.result_of_type[protocol.OddEven.ODD];
                } else {
                    bettingResult = betting.result_of_type[protocol.OddEven.EVEN];
                }
                bettingResultIndexes[betting.index] = bettingResult.index;

                betting = match.betting_of_type[protocol.BettingType.SCORES];
                if (score1 == 0 && score2 == 0) {
                    bettingResult = betting.result_of_type[protocol.Scores.SCORES_0V0];
                } else if (score1 == 0 && score2 == 1) {
                    bettingResult = betting.result_of_type[protocol.Scores.SCORES_0V1];
                } else if (score1 == 1 && score2 == 0) {
                    bettingResult = betting.result_of_type[protocol.Scores.SCORES_1V0];
                } else if (score1 == 0 && score2 == 2) {
                    bettingResult = betting.result_of_type[protocol.Scores.SCORES_0V2];
                } else if (score1 == 2 && score2 == 0) {
                    bettingResult = betting.result_of_type[protocol.Scores.SCORES_2V0];
                } else if (score1 == 1 && score2 == 1) {
                    bettingResult = betting.result_of_type[protocol.Scores.SCORES_1V1];
                } else if (score1 == 1 && score2 == 2) {
                    bettingResult = betting.result_of_type[protocol.Scores.SCORES_1V2];
                } else if (score1 == 2 && score2 == 1) {
                    bettingResult = betting.result_of_type[protocol.Scores.SCORES_2V1];
                } else if (score1 == 2 && score2 == 2) {
                    bettingResult = betting.result_of_type[protocol.Scores.SCORES_2V2];
                } else if (score1 > score2) {
                    bettingResult = betting.result_of_type[protocol.Scores.SCORES_WIN];
                } else if (score1 < score2) {
                    bettingResult = betting.result_of_type[protocol.Scores.SCORES_LOSE];
                } else {
                    bettingResult = betting.result_of_type[protocol.Scores.SCORES_DRAW];
                }
                bettingResultIndexes[betting.index] = bettingResult.index;

                console.log("fvck", match.id, bettingResultIndexes);

                var iface = new ethers.Interface(contract.abi);
                var txParams = {
                    to: contract.address,
                    data: iface.functions.end_match(
                        match.index,
                        bettingResultIndexes,
                        protocol.Draw.encode({score1: score1, score2: score2}).finish()
                    ).data
                };
                sendTx(
                    txParams,
                    this.parent,
                    refresh
                );
            }.bind(this);

            this.parent.addChild(new AdminGame3Confirm(match.data, doConfirm));
        };

        this.MatchList.renderHandler = new Handler(this, function (item, index) {
            var btnCancel = item.getChildByName("BtnCancel");
            btnCancel.on(Event.CLICK, this, onCancel, [this.MatchList.array[index]._match]);
            var btnConfirm = item.getChildByName("BtnConfirm");
            btnConfirm.on(Event.CLICK, this, onConfirm, [this.MatchList.array[index]._match]);
        });
    }

    function AdminGame3Create(contract, refresh) {
        AdminGame3Create.super(this);

        this.BtnClose.on(Event.CLICK, this, function () {
            this.destroy();
        });

        var config = goblin.config.ballgameBetting;
        var comboIndex2LeagueId = [];
        var comboIndex2LeagueName = [];

        for (var i = 0; i < config.leagues.length; ++i) {
            var league = config.leagues[i];
            comboIndex2LeagueId.push(league.id);
            comboIndex2LeagueName.push(league.name);
        }

        this.LeagueName.labels = comboIndex2LeagueName.join(",");

        var updateBtnOk = function () {
            this.BtnOk.disabled = (this.StopDate.text.length * this.StopTime.text.length == 0) || (
                this.LeagueName.selectedIndex < 0 ||
                this.HomeName.selectedIndex < 0 ||
                this.VisitorName.selectedIndex < 0
            );
        }.bind(this);

        var comboIndex2TeamId;
        var comboIndex2TeamName;

        // this.HomeName.vScrollBarSkin = this.VisitorName.vScrollBarSkin = "";

        this.LeagueName.on(Event.CHANGE, this, function () {
            var league = config.leagueById[comboIndex2LeagueId[this.LeagueName.selectedIndex]];
            comboIndex2TeamId = [];
            comboIndex2TeamName = [];
            for (var i = 0; i < league.teams.length; ++i) {
                var team = league.teams[i];
                comboIndex2TeamId.push(team.id);
                comboIndex2TeamName.push(team.name);
            }
            this.HomeName.selectedIndex = this.VisitorName.selectedIndex = -1;
            this.HomeName.labels = this.VisitorName.labels = comboIndex2TeamName.join(",");
            updateBtnOk();
        });

        this.HomeName.on(Event.CHANGE, this, updateBtnOk);
        this.VisitorName.on(Event.CHANGE, this, updateBtnOk);
        this.StopDate.on(Event.INPUT, this, updateBtnOk);
        this.StopTime.on(Event.INPUT, this, updateBtnOk);

        updateBtnOk();

        this.BtnOk.on(Event.CLICK, this, function () {
            if (this.HomeName.selectedIndex == this.VisitorName.selectedIndex) {
                this.parent.addChild(new goblin.misc.Tips(goblin.texts[1103]));
            } else {
                var now = Math.floor(Date.now() / 1000);
                var m = (this.StopDate.text + " " + this.StopTime.text).match(/^(\d+)-(\d+)-(\d+) (\d+)\:(\d+)$/);
                var date = Math.floor(new Date(m[1], m[2] - 1, m[3], m[4], m[5]) / 1000);

                var iface = new ethers.Interface(contract.abi);
                var protocol = goblin.protocol.ballgameBetting;
                var delayMins = 1;
                var txParams = {
                    to: contract.address,
                    data: iface.functions.post_football_match(
                        protocol.Match.encode({
                            league_id: comboIndex2LeagueId[this.LeagueName.selectedIndex],
                            team1_id: comboIndex2TeamId[this.HomeName.selectedIndex],
                            team2_id: comboIndex2TeamId[this.VisitorName.selectedIndex]
                        }).finish(),
                        now + delayMins * 60,
                        date
                    ).data
                };

                sendTx(
                    txParams,
                    this.parent,
                    function () {
                        this.parent.addChild(new goblin.misc.Tips(goblin.texts[1102].format(delayMins), function () {
                            this.destroy();
                            refresh();
                        }.bind(this)));
                    }.bind(this)
                );
            }
        });
    }

    function AdminGame3Confirm(matchData, doConfirm) {
        AdminGame3Confirm.super(this);

        this.BtnClose.on(Event.CLICK, this, function () {
            this.destroy();
        });

        var config = goblin.config.ballgameBetting;
        this.HomeName.text = config.teamName(matchData.team1_id);
        this.VisitorName.text = config.teamName(matchData.team2_id);

        var score1 = null;
        var score2 = null;

        var updateBtnOk = function () {
            this.BtnOk.disabled = this.HomeGoal.text.length * this.VisitorGoal.text.length == 0;
        }.bind(this);

        updateBtnOk();

        this.HomeGoal.on(Event.INPUT, this, function () {
            score1 = parseInt(this.HomeGoal.text);
            if (score1 < 0) {
                score1 = 0;
                this.HomeGoal.text = score1.toString();
            }
            updateBtnOk();
        });
        this.VisitorGoal.on(Event.INPUT, this, function () {
            score2 = parseInt(this.VisitorGoal.text);
            if (score2 < 0) {
                score2 = 0;
                this.VisitorGoal.text = score2.toString();
            }
            updateBtnOk();
        });
        this.BtnOk.on(Event.CLICK, this, function () {
            this.parent.addChild(new goblin.misc.Confirm(goblin.texts[1101].format(score1, score2), function () {
                this.destroy();
                doConfirm(score1, score2);
            }.bind(this)));
        });
    }

    function AdminModify(contract, context) {
        AdminModify.super(this);

        this.BtnClose.on(Event.CLICK, this, function () {
            this.destroy();
        });

        this.Title1.text = goblin.texts[1120].format(context.title);
        this.Title2.text = goblin.texts[1121].format(context.title);
        this.Value.text = context.value.toString();;

        this.Value.on(Event.INPUT, this, function () {
            var value = Number(this.Value.text);
            if (isNaN(value)) {
                this.Value.text = context.value.toString();
            } else {
                value = context.valueFilter(value);
                if (context.maxValue != null && value > context.maxValue) {
                    this.Value.text = context.maxValue.toString();
                }
                if (context.minValue != null && value < context.minValue) {
                    this.Value.text = context.minValue.toString();
                }
            }
        });
        this.BtnOk.on(Event.CLICK, this, function () {
            var value = context.valueFilter(Number(this.Value.text));
            this.Value.text = value.toString();

            if (value == context.value) {
                this.destroy();
                return;
            }

            sendTx(
                {to: contract.address, data: context.valueSetter(value)},
                this.parent,
                function () {
                    context.refresher();
                    this.destroy();
                }.bind(this)
            );
        });
    }

    Laya.class(AdminMain, "AdminMain", AdminMainUI);
    Laya.class(AdminGameManage, "AdminGameManage", AdminGame1ManageUI);
    Laya.class(AdminGameManage3, "AdminGameManage3", AdminGame3ManageUI);
    Laya.class(AdminGame3List, "AdminGame3List", AdminGame3ListUI);
    Laya.class(AdminGame3Create, "AdminGame3Create", AdminGame3CreateUI);
    Laya.class(AdminGame3Confirm, "AdminGame3Confirm", AdminGame3ConfirmUI);
    Laya.class(AdminModify, "AdminModify", AdminModifyUI);
    goblin.newHomeMain = newAdminMain;
})();