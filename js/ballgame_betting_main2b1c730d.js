if (typeof __GAME_ENTRY__ !== "undefined") (function () {
    "use strict";

    var Handler = laya.utils.Handler;
    var Event = laya.events.Event;

    var contract = goblin.contract.ballgameBetting;
    var protocol = goblin.protocol.ballgameBetting;

    function newGameMain(parent, callback) {
        var loading = new goblin.misc.Loading(goblin.texts[1001]);
        parent.addChild(loading);

        getData(function (error, result) {
            parent.removeChild(loading);

            if (error) {
                throw error;
            }

            var gameMain = new GameMain(result);
            parent.addChild(gameMain);
            callback(gameMain);
        });
    }

    function GameMain(data) {
        GameMain.super(this);
        var gameMain = this;
        var ticketPrice = 0;
        var maxTotalTicketCount = 0;

        function BetGoal(source) {
            var bettingType = protocol.BettingType.ODD_EVEN;
            BetGoal.super(this);
            this.BettingList.vScrollBarSkin = "";

            var betNames = ["BetOdd", "BetEven"];

            var onBet = function (index, betName) {
                cart.toggleBettingResult(this.BettingList.array[index][betName]._bettingResult);
                updateTabUI(this);
            };
            var onDeleteCallback = null;
            var onDelete = function (index) {
                cart.clearBetting(this.BettingList.array[index]._betting);
                this.BettingList.array.splice(index, 1);
                this.BettingList.refresh();
                source.BettingList.refresh();
                updateTabUI(source);
                if (onDeleteCallback) onDeleteCallback();
            };
            this.BettingList.renderHandler = new Handler(this, function (item, index) {
                for (var i = 0; i < betNames.length; ++i) {
                    var betName = betNames[i];
                    var btnBet = item.getChildByName(betName);
                    if (source || this.BettingList.array[index].isEnded) {
                        btnBet.mouseEnabled = false;
                    } else {
                        btnBet.on(Event.CLICK, this, onBet, [index, betName]);
                    }
                    btnBet.selected = cart.testBettingResult(this.BettingList.array[index][betName]._bettingResult);
                }
                var btnDelete = item.getChildByName("BtnDelete");
                if (source) {
                    btnDelete.on(Event.CLICK, this, onDelete, [index]);
                } else {
                    btnDelete.visible = false;
                }
            });

            if (source) {
                var arr1 = source.BettingList.array;
                var arr2 = [];
                for (var i = 0; i < arr1.length; ++i) {
                    var e = arr1[i];
                    var betNameTextIDs = e._betNameTextIDs = [];
                    if (cart.testBetting(e._betting)) {
                        for (var j = 0; j < betNames.length; ++j) {
                            var betName = betNames[j];
                            if (cart.testBettingResult(e[betName]._bettingResult)) {
                                betNameTextIDs.push(e[betName]._labelBasicTextID);
                            }
                        }
                        arr2.push(e);
                    }
                }
                this.BettingList.array = arr2;

                this.user_clearChosen = function () {
                    cart.clearBettings(bettingType);
                    source.BettingList.refresh();
                    updateTabUI(source);
                }
                this.user_getBetInfos = function (bettingValueForPerResult) {
                    var betInfos = [];
                    for (var i = 0; i < this.BettingList.array.length; ++i) {
                        var itemData = this.BettingList.array[i];
                        itemData._betInfos = cart.getBetInfos(itemData._betting, bettingValueForPerResult);
                        Array.prototype.push.apply(betInfos, itemData._betInfos);
                    }
                    return betInfos;
                }
                this.user_onDelete = function (callback) { onDeleteCallback = callback; };
            } else {
                this.user_setList = function (array) {
                    cart.clearUnmarkedBettingsBegin(bettingType);
                    for (var i = 0; i < array.length; ++i) {
                        cart.markBetting(array[i]._betting);
                    }
                    cart.clearUnmarkedBettingsEnd();
                    updateTabUI(this);
                    this.BettingList.array = array;
                };
                this.user_getChosenCount = function () {
                    return cart.getNumberOfBettingResults(bettingType);
                };
                this.user_copyChosen = function () {
                    return new BetGoal(this);
                };
            }
        }

        function BetWinlose(source) {
            var bettingType = protocol.BettingType.WIN_LOSE_DRAW;
            BetWinlose.super(this);
            this.BettingList.vScrollBarSkin = "";

            var betNames = ["BetHome", "BetVisitor", "BetDraw"];

            var onBet = function (index, betName) {
                cart.toggleBettingResult(this.BettingList.array[index][betName]._bettingResult);
                updateTabUI(this);
            };
            var onDeleteCallback = null;
            var onDelete = function (index) {
                cart.clearBetting(this.BettingList.array[index]._betting);
                this.BettingList.array.splice(index, 1);
                this.BettingList.refresh();
                source.BettingList.refresh();
                updateTabUI(source);
                if (onDeleteCallback) onDeleteCallback();
            };
            this.BettingList.renderHandler = new Handler(this, function (item, index) {
                for (var i = 0; i < betNames.length; ++i) {
                    var betName = betNames[i];
                    var btnBet = item.getChildByName(betName);
                    if (source || this.BettingList.array[index].isEnded) {
                        btnBet.mouseEnabled = false;
                    } else {
                        btnBet.on(Event.CLICK, this, onBet, [index, betName]);
                    }
                    btnBet.selected = cart.testBettingResult(this.BettingList.array[index][betName]._bettingResult);
                }
                var btnDelete = item.getChildByName("BtnDelete");
                if (source) {
                    btnDelete.on(Event.CLICK, this, onDelete, [index]);
                } else {
                    btnDelete.visible = false;
                }
            });

            if (source) {
                var arr1 = source.BettingList.array;
                var arr2 = [];
                for (var i = 0; i < arr1.length; ++i) {
                    var e = arr1[i];
                    var betNameTextIDs = e._betNameTextIDs = [];
                    if (cart.testBetting(e._betting)) {
                        for (var j = 0; j < betNames.length; ++j) {
                            var betName = betNames[j];
                            if (cart.testBettingResult(e[betName]._bettingResult)) {
                                betNameTextIDs.push(e[betName]._labelBasicTextID);
                            }
                        }
                        arr2.push(e);
                    }
                }
                this.BettingList.array = arr2;

                this.user_clearChosen = function () {
                    cart.clearBettings(bettingType);
                    source.BettingList.refresh();
                    updateTabUI(source);
                }
                this.user_getBetInfos = function (bettingValueForPerResult) {
                    var betInfos = [];
                    for (var i = 0; i < this.BettingList.array.length; ++i) {
                        var itemData = this.BettingList.array[i];
                        itemData._betInfos = cart.getBetInfos(itemData._betting, bettingValueForPerResult);
                        Array.prototype.push.apply(betInfos, itemData._betInfos);
                    }
                    return betInfos;
                }
                this.user_onDelete = function (callback) { onDeleteCallback = callback; };
            } else {
                this.user_setList = function (array) {
                    cart.clearUnmarkedBettingsBegin(bettingType);
                    for (var i = 0; i < array.length; ++i) {
                        cart.markBetting(array[i]._betting);
                    }
                    cart.clearUnmarkedBettingsEnd();
                    updateTabUI(this);
                    this.BettingList.array = array;
                };
                this.user_getChosenCount = function () {
                    return cart.getNumberOfBettingResults(bettingType);
                };
                this.user_copyChosen = function () {
                    return new BetWinlose(this);
                };
            }
        }

        function BetScore(source) {
            var bettingType = protocol.BettingType.SCORES;
            BetScore.super(this);
            this.BettingList.vScrollBarSkin = "";

            var betNames = ["Bet10", "Bet00", "Bet01", "Bet20", "Bet11", "Bet02", "Bet21", "Bet22", "Bet12", "BetWin", "BetDraw", "BetLose"];

            var onChoose = function (index) {
                var itemData = this.BettingList.array[index];
                gameMain.parent.addChild(new BetScoreInfo(itemData, function () {
                    this.BettingList.refresh();
                    updateTabUI(this);
                }.bind(this)));
            };
            var onDeleteCallback = null;
            var onDelete = function (index) {
                cart.clearBetting(this.BettingList.array[index]._betting);
                this.BettingList.array.splice(index, 1);
                this.BettingList.refresh();
                source.BettingList.refresh();
                updateTabUI(source);
                if (onDeleteCallback) onDeleteCallback();
            };
            this.BettingList.renderHandler = new Handler(this, function (item, index) {
                var btnChoose = item.getChildByName("BtnChoose");
                if (this.BettingList.array[index].isEnded) {
                    btnChoose.mouseEnabled = false;
                } if (!source) {
                    btnChoose.on(Event.CLICK, this, onChoose, [index]);
                }
                var itemData = this.BettingList.array[index];
                var label = "";
                for (var i = 0; i < betNames.length; ++i) {
                    var betName = betNames[i];
                    if (cart.testBettingResult(itemData[betName]._bettingResult)) {
                        label += goblin.texts[itemData[betName]._labelBasicTextID] + ", ";
                    }
                }
                if (label.length == 0) {
                    label = goblin.texts[1088];
                    btnChoose.selected = false;
                } else {
                    label = label.substr(0, label.length - 2);
                    btnChoose.selected = true;
                }
                btnChoose.label = label;
                var btnDelete = item.getChildByName("BtnDelete");
                if (source) {
                    btnDelete.on(Event.CLICK, this, onDelete, [index]);
                } else {
                    btnDelete.visible = false;
                }
            });

            if (source) {
                var arr1 = source.BettingList.array;
                var arr2 = [];
                for (var i = 0; i < arr1.length; ++i) {
                    var e = arr1[i];
                    var betNameTextIDs = e._betNameTextIDs = [];
                    if (cart.testBetting(e._betting)) {
                        for (var j = 0; j < betNames.length; ++j) {
                            var betName = betNames[j];
                            if (cart.testBettingResult(e[betName]._bettingResult)) {
                                betNameTextIDs.push(e[betName]._labelBasicTextID);
                            }
                        }
                        arr2.push(e);
                    }
                }
                this.BettingList.array = arr2;

                this.user_clearChosen = function () {
                    cart.clearBettings(bettingType);
                    source.BettingList.refresh();
                    updateTabUI(source);
                }
                this.user_getBetInfos = function (bettingValueForPerResult) {
                    var betInfos = [];
                    for (var i = 0; i < this.BettingList.array.length; ++i) {
                        var itemData = this.BettingList.array[i];
                        itemData._betInfos = cart.getBetInfos(itemData._betting, bettingValueForPerResult);
                        Array.prototype.push.apply(betInfos, itemData._betInfos);
                    }
                    return betInfos;
                }
                this.user_onDelete = function (callback) { onDeleteCallback = callback; };
            } else {
                this.user_setList = function (array) {
                    cart.clearUnmarkedBettingsBegin(bettingType);
                    for (var i = 0; i < array.length; ++i) {
                        cart.markBetting(array[i]._betting);
                    }
                    cart.clearUnmarkedBettingsEnd();
                    updateTabUI(this);
                    this.BettingList.array = array;
                };
                var BetScoreInfo = function (itemData, refresh) {
                    BetScoreInfo.super(this);
                    this.HomeName.text = itemData.HomeName;
                    this.VisitorName.text = itemData.VisitorName;

                    var bettingResults = [];

                    var onBet = function (bettingResult) {
                        var i = bettingResults.indexOf(bettingResult);
                        if (i < 0) {
                            bettingResults.push(bettingResult);
                        } else {
                            bettingResults.splice(i, 1);
                        }
                    };

                    for (var i = 0; i < betNames.length; ++i) {
                        var betName = betNames[i];
                        var btnBet = this[betName];
                        var bettingResult = itemData[betName]._bettingResult;
                        btnBet.label = itemData[betName].label;
                        btnBet.on(Event.CLICK, this, onBet, [bettingResult]);
                        btnBet.selected = cart.testBettingResult(bettingResult);
                        this[betName + "Per"].text = itemData[betName + "Per"];
                    }

                    this.BtnConfirm.on(Event.CLICK, this, function () {
                        for (var i = 0; i < bettingResults.length; ++i) {
                            var bettingResult = bettingResults[i];
                            cart.toggleBettingResult(bettingResult);
                        }
                        refresh();
                        this.destroy();
                    });
                    this.BtnCancel.on(Event.CLICK, this, function () {
                        this.destroy();
                    });
                }

                Laya.class(BetScoreInfo, "BallgameBetScoreInfo", BetScoreInfoUI);

                this.user_getChosenCount = function () {
                    return cart.getNumberOfBettingResults(bettingType);
                };
                this.user_copyChosen = function () {
                    return new BetScore(this);
                };
            }
        }

        function OrderList(bettingList) {
            OrderList.super(this);
            this.OrderList.addChild(bettingList);

            this.BtnBack.on(Event.CLICK, this, function () {
                this.destroy();
            });
            this.BtnClear.on(Event.CLICK, this, function () {
                this.parent.addChild(new goblin.misc.Confirm(goblin.texts[1126], function () {
                    bettingList.user_clearChosen();
                    this.destroy();
                }.bind(this)));
            });

            this.BtnRate.on(Event.CLICK, this, function () {
                this.RateList.visible = true;
            });

            this.BtnHideRateList.on(Event.CLICK, this, function () {
                this.RateList.visible = false;
            });

            this.BtnRate50.on(Event.CLICK, this, function () {
                this.RateList.visible = false;
                changeFactor(50 - factor);
            });

            this.BtnRate20.on(Event.CLICK, this, function () {
                this.RateList.visible = false;
                changeFactor(20 - factor);
            });

            this.BtnRate10.on(Event.CLICK, this, function () {
                this.RateList.visible = false;
                changeFactor(10 - factor);
            });

            this.BtnAdd.on(Event.CLICK, this, function () {
                changeFactor(1);
            });

            this.BtnDec.on(Event.CLICK, this, function () {
                changeFactor(-1);
            });

            var factor = 1;

            var changeFactor = function (delta) {
                var newFactor = factor + delta;

                if (newFactor < 1) {
                    return;
                }

                factor += delta;
                this.RateTxt.text = factor.toString() + goblin.texts[1019];
                updateCount();
            }.bind(this);

            var getBetInfos = function () {
                return
            };

            var betInfos = null;
            var count = null;

            bettingList.user_onDelete(function () {
                updateCount();
            })

            var updateCount = function () {
                betInfos = bettingList.user_getBetInfos(data.ticket_price.mul(factor).toString());
                count = betInfos.length;
                if (count * factor > maxTotalTicketCount) {
                    var newFactor = Math.floor(maxTotalTicketCount / count);
                    changeFactor(newFactor - factor);
                    this.parent.addChild(new goblin.misc.Tips(goblin.texts[1056].format(maxTotalTicketCount)));
                }
                var c = count * factor;
                this.BetTxt.text = goblin.texts[1018].format(c, (c * ticketPrice).toFixed(goblin.valuePrecision) + " " + goblin.currencyName);
                this.BtnPay.disabled = c == 0;
            }.bind(this);

            changeFactor(0);

            this.BtnPay.on(Event.CLICK, this, function () {
                var iface = new ethers.Interface(contract.abi);
                var txParams = {
                    to: contract.address,
                    value: (new web3.BigNumber(data.ticket_price.toString())).mul(count * factor),
                    data: iface.functions.bet(betInfos).data
                };
                var loading = new goblin.misc.Loading(goblin.texts[1016]);
                this.parent.addChild(loading);
                goblin.util.buildTxParams(txParams, goblin.privateKey).then(function () {
                    console.info("total value: ", web3.fromWei(txParams.value.toString(), "ether"));
                    console.info("total fee: ", web3.fromWei(txParams.gasLimit.mul(txParams.gasPrice).toString(), "ether"));
                    return goblin.util.sendTransaction(txParams, goblin.privateKey);
                }).then(function (result) {
                    goblin.addPendingBallgameBettingRecords(
                        result,
                        txParams.gasLimit,
                        bettingList.BettingList, ticketPrice, factor
                    );
                    this.parent.removeChild(loading);
                    this.parent.addChild(new goblin.misc.Tips(goblin.texts[1017], function () {
                        bettingList.user_clearChosen();
                        this.destroy();
                    }.bind(this)));
                }.bind(this)).catch(function (error) {
                    this.parent.removeChild(loading);
                    goblin.util.displayTransactionError(error, this.parent);
                }.bind(this));
            });
        }

        Laya.class(BetGoal, "BallgameBetGoal", BetGoalUI);
        Laya.class(BetScore, "BallgameBetScore", BetScoreUI);
        Laya.class(BetWinlose, "BallgameBetWinlose", BetWinloseUI);
        Laya.class(OrderList, "BallgameOrderList", FootBallOrderListUI);
        var betGoal = new BetGoal();
        var betScore = new BetScore();
        var betWinlose = new BetWinlose();
        var cart = new goblin.BallgameBettingCart();

        var tabUIs = [
            betWinlose,
            betScore,
            betGoal
        ];

        var currentTabUI = null;

        var setTabUI = function (tabUI) {
            var tabUIIndex = tabUIs.indexOf(tabUI);
            this.BtnType.selectedIndex = tabUIIndex;
            if (this.BtnType.selectedIndex != tabUIIndex) {
                this.BtnType.selectedIndex = tabUIIndex;
            }
            if (tabUI != currentTabUI) {
                if (currentTabUI) {
                    this.GameMain.removeChild(currentTabUI);
                }

                currentTabUI = tabUI;
                updateTabUI(tabUI);
                this.GameMain.addChild(currentTabUI);
            }
        }.bind(this);

        var updateTabUI = function (tabUI) {
            if (tabUI != currentTabUI) {
                return;
            }
            var c = tabUI.user_getChosenCount();
            this.BetTxt.text = goblin.texts[1018].format(c, (c * ticketPrice).toFixed(goblin.valuePrecision) + " " + goblin.currencyName);
            this.BtnOk.disabled = c == 0;
        }.bind(this);

        setTabUI(tabUIs[0]);

        this.BtnType.on(Event.CLICK, this, function () {
            var nextTabUI = tabUIs[this.BtnType.selectedIndex];
            setTabUI(nextTabUI);
        });

        //---------------------------------------------------

        var batIsEnd = function (match) {
            var now = Math.floor(Date.now() / 1000);                
            return now > match.betting_stop_time.toNumber();
        }
        var acceptData = function (data) {
            var now = Math.floor(Date.now() / 1000);
            ticketPrice = Number(web3.fromWei(data.ticket_price, "ether"));
            maxTotalTicketCount = Number(data.max_total_ticket_count);

            var bettingTypeToBettings = {};
            bettingTypeToBettings[protocol.BettingType.WIN_LOSE_DRAW] = [];
            bettingTypeToBettings[protocol.BettingType.ODD_EVEN] = [];
            bettingTypeToBettings[protocol.BettingType.SCORES] = [];
            var aday = 24 * 60 *60; // 已经投注完的比赛保留一天
            for (var i = 0; i < data.matches.length; ++i) {
                var match = data.matches[i];
                if (match.betting_start_time.toNumber() >= now || match.betting_stop_time.toNumber() < now - aday) continue;
                var matchIsInvalid = false;
                for (var j = 0; j < match.bettings.length; ++j) {
                    var betting = match.bettings[j];
                    if (bettingTypeToBettings[betting.data.type] == undefined) {
                        matchIsInvalid = true;
                        break;
                    }
                }
                if (matchIsInvalid) {
                    continue;
                }
                for (var j = 0; j < match.bettings.length; ++j) {
                    var betting = match.bettings[j];
                    bettingTypeToBettings[betting.data.type].push(betting);
                }
            }

            var timestampToString = function (ts) {
                var d = new Date();
                d.setTime(ts * 1000);
                var endText = "";
                var now = Math.floor(Date.now() / 1000);
                if (ts <= now) {
                    endText = "(投注已截止)";
                }
                return ("00" + (d.getMonth() + 1)).slice(-2) + "-" +
                    ("00" + d.getDate()).slice(-2) + " " +
                    ("00" + d.getHours()).slice(-2) + ":" +
                    ("00" + d.getMinutes()).slice(-2) + endText;
            };

            var config = goblin.config.ballgameBetting;
            var none = "--";
            var p = (100 - data.water_percent.toNumber()) * 10;
            var bettings;
            var arr;
            var t;

            //---------------------------
            bettings = bettingTypeToBettings[protocol.BettingType.ODD_EVEN];
            arr = [];
            t = {
                BetOdd: [protocol.OddEven.ODD, 1074],
                BetEven: [protocol.OddEven.EVEN, 1075],
            };
            for (var i = 0; i < bettings.length; ++i) {
                var betting = bettings[i];
                var totalValue1 = betting.total_value;
                var match = betting.parent;

                var isEnded = batIsEnd(match);
                var itemData = {
                    TotalBonus: Number(web3.fromWei(totalValue1.toString(), "ether")).toFixed(goblin.valuePrecision) + " " + goblin.currencyName,
                    GameType: config.leagueName(match.data.league_id),
                    HomeName: config.teamName(match.data.team1_id),
                    VisitorName: config.teamName(match.data.team2_id),
                    EndTime: timestampToString(match.betting_stop_time.toNumber()),
                    _rawType: [1089],
                    _betting: betting, 
                    isEnded: isEnded,
                };

                for (var key in t) {
                    var val = t[key];
                    var bettingResult = betting.result_of_type[val[0]];
                    var totalValue2 = bettingResult.total_value;
                    var labelText = goblin.texts[val[1]];
                    if (isEnded) {
                        labelText = "{} ({})".format(goblin.texts[val[1]], totalValue2.eq(0) ? none : (totalValue1.mul(p).div(totalValue2).toNumber() / 1000));
                    }
                    itemData[key] = {
                        label: labelText,
                        selected: false,
                        _labelBasicTextID: val[1],
                        _bettingResult: bettingResult
                    };
                    itemData[key + "Per"] = "{}%".format(totalValue1.eq(0) ? none : (totalValue2.mul(1000).div(totalValue1).toNumber() / 10))
                }
                arr.unshift(itemData);
                //arr.push(itemData);
            }
            betGoal.user_setList(arr);
            //---------------------------
            bettings = bettingTypeToBettings[protocol.BettingType.WIN_LOSE_DRAW];
            arr = [];
            t = {
                BetHome: [protocol.WinLoseDraw.WIN, 1071],
                BetVisitor: [protocol.WinLoseDraw.LOSE, 1072],
                BetDraw: [protocol.WinLoseDraw.DRAW, 1073]
            };
            for (var i = 0; i < bettings.length; ++i) {
                var betting = bettings[i];
                var totalValue1 = betting.total_value;
                var match = betting.parent;

                var isEnded = batIsEnd(match);
                var itemData = {
                    TotalBonus: Number(web3.fromWei(totalValue1.toString(), "ether")).toFixed(goblin.valuePrecision) + " " + goblin.currencyName,
                    GameType: config.leagueName(match.data.league_id),
                    HomeName: config.teamName(match.data.team1_id),
                    VisitorName: config.teamName(match.data.team2_id),
                    EndTime: timestampToString(match.betting_stop_time.toNumber()),
                    _rawType: [1090],
                    _betting: betting,
                    isEnded: isEnded
                };

                for (var key in t) {
                    var val = t[key];
                    var labelText = goblin.texts[val[1]];
                    var bettingResult = betting.result_of_type[val[0]];
                    var totalValue2 = bettingResult.total_value;
                    if (isEnded) {
                        labelText = "{} ({})".format(goblin.texts[val[1]], totalValue2.eq(0) ? none : (totalValue1.mul(p).div(totalValue2).toNumber() / 1000));
                    }
                    itemData[key] = {
                        label: labelText,
                        selected: false,
                        _labelBasicTextID: val[1],
                        _bettingResult: bettingResult
                    };
                    itemData[key + "Per"] = "{}%".format(totalValue1.eq(0) ? none : (totalValue2.mul(1000).div(totalValue1).toNumber() / 10))
                }

                arr.unshift(itemData);
            }
            betWinlose.user_setList(arr);
            //---------------------------
            bettings = bettingTypeToBettings[protocol.BettingType.SCORES];
            arr = [];
            t = {
                Bet00: [protocol.Scores.SCORES_0V0, 1076],
                Bet01: [protocol.Scores.SCORES_0V1, 1077],
                Bet10: [protocol.Scores.SCORES_1V0, 1078],
                Bet02: [protocol.Scores.SCORES_0V2, 1079],
                Bet20: [protocol.Scores.SCORES_2V0, 1080],
                Bet11: [protocol.Scores.SCORES_1V1, 1081],
                Bet12: [protocol.Scores.SCORES_1V2, 1082],
                Bet21: [protocol.Scores.SCORES_2V1, 1083],
                Bet22: [protocol.Scores.SCORES_2V2, 1084],
                BetWin: [protocol.Scores.SCORES_WIN, 1085],
                BetLose: [protocol.Scores.SCORES_LOSE, 1086],
                BetDraw: [protocol.Scores.SCORES_DRAW, 1087]
            };
            for (var i = 0; i < bettings.length; ++i) {
                var betting = bettings[i];
                var totalValue1 = betting.total_value;
                var match = betting.parent;

                var isEnded = batIsEnd(match);
                var itemData = {
                    TotalBonus: Number(web3.fromWei(totalValue1.toString(), "ether")).toFixed(goblin.valuePrecision) + " " + goblin.currencyName,
                    GameType: config.leagueName(match.data.league_id),
                    HomeName: config.teamName(match.data.team1_id),
                    VisitorName: config.teamName(match.data.team2_id),
                    EndTime: timestampToString(match.betting_stop_time.toNumber()),
                    _rawType: [1091],
                    _betting: betting,
                    isEnded: isEnded
                };

                for (var key in t) {
                    var val = t[key];
                    var bettingResult = betting.result_of_type[val[0]];
                    var totalValue2 = bettingResult.total_value;

                    var labelText = goblin.texts[val[1]];
                    if (isEnded) {
                        labelText = "{} ({})".format(goblin.texts[val[1]], totalValue2.eq(0) ? none : (totalValue1.mul(p).div(totalValue2).toNumber() / 1000));
                    }
                    itemData[key] = {
                        label: labelText,
                        selected: false,
                        _labelBasicTextID: val[1],
                        _bettingResult: bettingResult
                    };
                    itemData[key + "Per"] = "{}%".format(totalValue1.eq(0) ? none : (totalValue2.mul(1000).div(totalValue1).toNumber() / 10))
                }

                arr.unshift(itemData);
            }
            betScore.user_setList(arr);
        };

        acceptData(data);
        setInterval(function () {
            getData(function (error, newData) {
                if (error) throw error;
                acceptData(newData);
                data = newData;
            });
        }, 15000);

        //---------------------------

        this.BtnBack.on(Event.CLICK, this, function () {
            this.parent.removeChild(this);
        });

        this.BtnOk.on(Event.CLICK, this, function () {
            this.addChild(new OrderList(currentTabUI.user_copyChosen()));
        });
    }

    var getData = function (callback) {
        var data = {};
        var stop = false;
        var putCount = 0;

        var put = function (error, key, value) {
            if (stop) {
                return;
            }

            if (error) {
                stop = true;
                callback(error);
            } else {
                data[key] = value;

                if (--putCount == 0) {
                    callback(null, data);
                }
            }
        };

        var contract2 = new ethers.Contract(contract.address, contract.abi, new ethers.providers.Web3Provider(web3.currentProvider));

        contract2.get_matches().then(function (result) {
            for (var i = 0; i < result.length; ++i) {
                var match = result[i];
                match.length = 0;
                match.betting_of_type = {};
                match.data = protocol.Match.decode(ethereumjs.Buffer.Buffer.from(match.data.substr(2), "hex"));
                for (var j = 0; j < match.bettings.length; ++j) {
                    var betting = match.bettings[j];
                    betting.length = 0;
                    betting.parent = match;
                    betting.index = j;
                    betting.result_of_type = {};
                    betting.total_value = new ethers.utils.BigNumber(0);
                    betting.better_count = 0;
                    betting.data = protocol.Betting.decode(ethereumjs.Buffer.Buffer.from(betting.data.substr(2), "hex"));
                    match.betting_of_type[betting.data.type] = betting;
                    for (var k = 0; k < betting.results.length; ++k) {
                        var bettingResult = betting.results[k];
                        bettingResult.length = 0;
                        bettingResult.parent = betting;
                        bettingResult.index = k;
                        bettingResult.data = protocol.BettingResult.decode(ethereumjs.Buffer.Buffer.from(bettingResult.data.substr(2), "hex"));
                        betting.result_of_type[bettingResult.data[bettingResult.data.value]] = bettingResult;
                        betting.total_value = betting.total_value.add(bettingResult.total_value);
                        betting.better_count += betting.better_count;
                    }
                }
            }
            put(null, "matches", result);
        }).catch(function (error) {
            put(error);
        }), ++putCount;

        contract.get_water_percent(function (error, result) {
            put(error, "water_percent", result);
        }), ++putCount;

        contract.get_ticket_price(function (error, result) {
            put(error, "ticket_price", result);
        }), ++putCount;

        contract.get_max_total_ticket_count(function (error, result) {
            put(error, "max_total_ticket_count", result);
        }), ++putCount;
    };

    Laya.class(GameMain, "BallgameBettingMain", GameMain3UI);
    goblin.newBallgameBettingMain = newGameMain;
})();