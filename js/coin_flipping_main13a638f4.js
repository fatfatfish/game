if (typeof __GAME_ENTRY__ !== "undefined") (function () {
    "use strict";

    goblin.coinFlipping = {NO_SIDE: 255};

    var Handler = laya.utils.Handler;
    var Event = laya.events.Event;

    var contract = goblin.contract.coinFlipping;

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

        var oddsX10 = data.odds_x_10.toNumber();
        var ticketPrice = web3.fromWei(data.ticket_price, "ether").toNumber();
        var maxTotalTicketCount = data.max_total_ticket_count.toNumber();

        function BetInfo(coinSide) {
            BetInfo.super(this);
            var factor = 0;
            var factorDiffs = [1, 2, 5, 10, 20];
            var clickCount = 0;
            
            var setFactor = function (newFactor) {
                if (newFactor > maxTotalTicketCount) newFactor = maxTotalTicketCount;
                factor = newFactor;
                this.BetTxt.text = (newFactor * ticketPrice).toFixed(goblin.valuePrecision);
            }.bind(this);

            setFactor(2);

            this.BtnBack.on(Event.CLICK, this, function () {
                this.destroy();
            });

            this.BtnReset.on(Event.CLICK, this, function () {
                setFactor(2);
                clickCount = 0;
            });

            this.BtnClose.on(Event.CLICK, this, function () {
                this.destroy();
            });

            for (var i = 0; i < factorDiffs.length; ++i) {
                var factorDiff = factorDiffs[i];
                var btn = this["Btn" + factorDiff.toString()];
                btn.label = "+" + factorDiff * ticketPrice;

                btn.on(Event.CLICK, this, function (factorDiff) {
                    if (++clickCount == 1 && factorDiff >= 10) {
                        setFactor(factorDiff);
                    } else {
                        setFactor(factor + factorDiff);
                    }
                }, [factorDiff]);
            }

            this.BtnMax.on(Event.CLICK, this, function () {
                setFactor(maxTotalTicketCount);
            });

            this.BtnOk.on(Event.CLICK, this, function () {
                contract.get_round_count(function (error, result) {
                    if (error) throw error;
                    if (result.toNumber() != getCurRoundCount()) {
                        this.parent.addChild(new goblin.misc.Tips(goblin.texts[1049], function () {
                            this.destroy();
                            destroy();
                        }.bind(this)));
                    } else {
                        submit();
                    }
                }.bind(this));
            });
            var submit = function () {
                var roundNumber = getCurRoundCount();
                if (getTimeout() <= 0) {
                    ++roundNumber;
                }
                var txParams = {
                    to: contract.address,
                    value: data.ticket_price.mul(factor),
                    data: contract.buy_tickets.getData(
                        "0x" + ethereumjs.Buffer.Buffer.from([factor, coinSide]).toString("hex"),
                        roundNumber
                    )
                };
                var loading = new goblin.misc.Loading(goblin.texts[1016]);
                this.parent.addChild(loading);
                goblin.util.buildTxParams(txParams, goblin.privateKey).then(function () {
                    console.info("total value: ", web3.fromWei(txParams.value.toString(), "ether"));
                    console.info("total fee: ", web3.fromWei(txParams.gasLimit.mul(txParams.gasPrice).toString(), "ether"));
                    return goblin.util.sendTransaction(txParams, goblin.privateKey);
                }).then(function (result) {
                    goblin.addPendingCoinFlippingRecord(
                        result,
                        txParams.gasLimit,
                        roundNumber, {_coinSide: coinSide, _rawType: [coinSide == 0 ? 1062 : 1063]}, ticketPrice, oddsX10, factor
                    );
                    this.parent.removeChild(loading);
                    this.parent.addChild(new goblin.misc.Tips(goblin.texts[1017], function () {
                        this.destroy();
                    }.bind(this)));
                }.bind(this)).catch(function (error) {
                    this.parent.removeChild(loading);
                    goblin.util.displayTransactionError(error, this.parent);
                }.bind(this));
            }.bind(this);
        }

        Laya.class(BetInfo, "CoinFlippingBetInfo", Game2BetInfoUI);

        this.TxtHeadsRate.text = this.TxtTailsRate.text = (oddsX10 / 10).toString() + goblin.texts[1019];
        this.TxtHeadsMoney.text = this.TxtTailsMoney.text = goblin.texts[1060].format(0);
        this.BetMoney.text = this.BonusMoney.text = "--";
        var address = "0x" + ethereumjs.Util.privateToAddress(goblin.privateKey).toString("hex");

        var refreshMoneys = function () {
            contract.get_ticket_counts_of_sides(function (error, result) {
                if (error) throw error;
                this.TxtHeadsMoney.text = goblin.texts[1060].format(web3.fromWei(data.ticket_price.mul(result[0]), "ether")
                                          .toNumber().toFixed(goblin.valuePrecision));
                this.TxtTailsMoney.text = goblin.texts[1060].format(web3.fromWei(data.ticket_price.mul(result[1]), "ether")
                                          .toNumber().toFixed(goblin.valuePrecision));
            }.bind(this));

            web3.eth.getBalance(address, function (error, result) {
                if (error) throw error;
                this.BetMoney.text = web3.fromWei(result, "ether").toNumber().toFixed(goblin.valuePrecision);
                this.Txt1.text = goblin.currencyName;
            }.bind(this));
            goblin.contract.bank.get_balance({from: address}, function (error, result) {
                if (error) throw error;
                this.BonusMoney.text = web3.fromWei(result, "ether").toNumber().toFixed(goblin.valuePrecision);
                this.Txt2.text = goblin.currencyName;
            }.bind(this))
        }.bind(this);

        refreshMoneys();
        this.timer.loop(15000, this, refreshMoneys);

        //--------------------------------------------------

        this.BtnBack.on(Event.CLICK, this, function () {
            this.parent.removeChild(this);
        });

        this.BtnHeads.on(Event.CLICK, this, function () {
            this.parent.addChild(new BetInfo(0));
        });

        this.BtnTails.on(Event.CLICK, this, function () {
            this.parent.addChild(new BetInfo(1));
        });

        this.BtnReport.on(Event.CLICK, this, function () {
            this.parent.addChild(new Report(getLuckySides(), getCurRoundCount()));
        });

        this.BtnRecord.on(Event.CLICK, this, function () {
            this.parent.addChild(new Record());
        });
        /*
        this.BtnBlockLink.on(Event.clickCount, this, function() {
            console.log(this.parent.href);
            Browser.window.href = this.parent.href;
        });
        */
        //--------------------------------------------------

        var _roundCount = data.round_count.toNumber();
        var _luckySides = data.lucky_sides;
        var _luckyBlockHash = goblin.util.uint256ToHash(data.lucky_block_hash);

        var getCurRoundCount = function () { return _roundCount; };
        var getLuckySides = function () { return _luckySides; };

        var refreshHistory = function () {
            var i = 0;
            for (; i < _luckySides.length; ++i) {
                if (_luckySides[i] != goblin.coinFlipping.NO_SIDE) {
                    break;
                }
            }
            var luckySide = i == _luckySides.length ? 0 : _luckySides[i];
            this.ResultTxt.text = goblin.texts[1064].format(_roundCount - i);
            if (luckySide == 0) {
                this.Coin.skin = "resource/coin_heads.png";
            } else {
                this.Coin.skin = "resource/coin_tails.png";
            }

            web3.eth.getBlock(_luckyBlockHash, function (error, block) {
                if (error) throw error;
                if (!block) block = {
                    number: 0,
                    timestamp: 0
                };
                var txtResultContainer = this.TxtResultContainer;
                var txtResult = this.TxtResult;
                var htmlTempl = ("<div style='position:fixed;padding:0;margin:0;top:0;left:0;width:100%;height:100%;color:#bbbbbb;fontSize:24;font-weight:bold'>" +
                                "<p>{}{{}}</p><br/>" + 
                                "<p>{}{{}}</p><br/>" + 
                                "<p>{}{{}}..{{}}<font color='gold'>{{}}</font></p>" +
                                "</div>").format(goblin.texts[1068], goblin.texts[1069], goblin.texts[1070]);
                
                this.href = "https://etherscan.io/block/" + block.number;
                if (!txtResult) {
                    txtResult = new Laya.HTMLDivElement();
                    txtResult.width = txtResultContainer.width;
                    txtResult.height = txtResultContainer.height;
                    txtResult.x = 0;
                    txtResult.y = 0;
                    txtResultContainer.addChild(txtResult);
                    this.TxtResult = txtResult;                    
                }
                var d = new Date();
                d.setTime(block.timestamp * 1000);
                var ds = d.getFullYear() + "-" + 
                         ("00" + (d.getMonth() + 1)).slice(-2) + "-" + 
                         ("00" + d.getDate()).slice(-2) + " " +
                         ("00" + d.getHours()).slice(-2) + ":" + 
                         ("00" + d.getMinutes()).slice(-2) + ":" + 
                         ("00" + d.getSeconds()).slice(-2);
                var s = _luckyBlockHash.substring(0, 2) + "0".repeat(66 - _luckyBlockHash.length) + _luckyBlockHash.substring(2);
                txtResult.innerHTML = htmlTempl.format(
                    block.number,
                    ds,
                    s.substring(0, 9),
                    s.substring(s.length - 7, s.length - 1),
                    s.substring(s.length - 1)
                );
            }.bind(this));
        }.bind(this);

        var updateHistory = function (roundCount, luckySide, luckyBlockHash) {
            if (luckySide == undefined) {
                luckySide = goblin.coinFlipping.NO_SIDE;
            } else {
                _luckyBlockHash = luckyBlockHash;
            }
            if (roundCount <= _roundCount) {
                _luckySides[_roundCount - roundCount] = luckySide;
                refreshHistory();
            } else {
                _luckySides.unshift(luckySide);
                _roundCount = roundCount;
            }
        };

        refreshHistory();

        //-----------------------

        var eventRoundStart = contract.RoundStart(function(error, result) {
            if (error) throw error;
            var roundCount = result.args.round_count.toNumber();
            if (this.parent)
                this.parent.addChild(new goblin.misc.Tips(goblin.texts[1023].format(roundCount)));
            contract.get_deadline(function (error, result) {
                if (error) throw error;
                setTimeout_(result.toNumber());
            });
            updateHistory(roundCount);
        }.bind(this));

        var eventRoundEnd = contract.RoundEnd(function(error, result) {
            if (error) throw error;
            var roundCount = result.args.round_count.toNumber();
            var luckySide = result.args.lucky_side.toNumber();
            var luckyBlockHash = goblin.util.uint256ToHash(result.args.lucky_block_hash);
            if (this.parent)
                this.parent.addChild(new goblin.misc.Tips(
                    goblin.texts[1066].format(roundCount, goblin.texts[luckySide == 0 ? 1062 : 1063])
                ));
            if (getCurRoundCount() == roundCount) {
                setTimeout_(0);
            }
            updateHistory(roundCount, luckySide, luckyBlockHash);
        }.bind(this));

        //--------------------------------------------------

        var _timeout;

        var setTimeout_ = function (deadline) {
            if (deadline == 0) {
                _timeout = -1;
                this.TimeTxt.text = goblin.texts[1067].format(_roundCount + 1);
            } else {
                _timeout = Math.max(deadline - Math.floor(Date.now() / 1000), 0);
                this.TimeTxt.text = goblin.texts[1067].format(_roundCount);
            }

            changeTimeout(0);
        }.bind(this);

        var getTimeout = function () { return _timeout; };

        var changeTimeout = function (delta) {
            var t;
            if (_timeout < 0) {
                t = goblin.texts[1020];
            } else {
                _timeout += delta;
                if (_timeout < 0) {
                    _timeout = 0;
                    t = goblin.texts[1021];
                } else {
                    t = goblin.util.secondsToHHMMSS(_timeout);
                }
            }
            this.NextTime.text = t;
        }.bind(this);

        setTimeout_(data.deadline.toNumber());

        this.timer.loop(1000, this, function () {
            changeTimeout(-1);
        });

        //-----------------------

        var destroy = function () {
            eventRoundStart.stopWatching();
            eventRoundEnd.stopWatching();
            this.destroy();
        }.bind(this);
    }

    function Report(luckySides, roundCount) {
        Report.super(this);
        
        this.BtnClose.on(Event.CLICK, this, function () {
            this.destroy();
        });

        var arr = [];
        for (var i = 0; i < luckySides.length; ++i) {
            var luckySide = luckySides[i];
            if (luckySide == goblin.coinFlipping.NO_SIDE) continue;
            arr.push({Round: goblin.texts[1029].format(roundCount - i), Coin: luckySide == 0 ? "resource/coin_heads.png" : "resource/coin_tails.png" /*Result: goblin.texts[luckySide == 0 ? 1062 : 1063]*/});
            if (arr == 12) break;
        }
        this.HistoryList.array = arr;
        if (arr.length == 0) {
            this.Desc.text = goblin.texts[1065];
        } else {
            this.Desc.text = "";
        }
    }

    function Record() {
        Record.super(this);

        this.BtnClose.on(Event.CLICK, this, function () {
            this.destroy();
        });

        this.RecordList.array = [];
        this.Desc.text = goblin.texts[1001];

        goblin.updateRecords(function (records) {
            var arr = [];

            for (var i = 0; i < records.length; ++i) {
                var rawRecord = records[i]._raw;
                if (rawRecord._type != goblin.RECORD_TYPE_COIN_FLIPPING) continue;
                var obj = {Round: goblin.util.makeText(rawRecord._rawRound), Coin: rawRecord._coinSide == 0 ? "resource/coin_heads.png" : "resource/coin_tails.png"/*Result: goblin.texts[rawRecord._coinSide == 0 ? 1062 : 1063]*/};
                if (rawRecord._luckySide == undefined) {
                    obj.Status = goblin.util.makeText(rawRecord._rawText);
                    obj.BetMoney = goblin.util.makeText(rawRecord._rawPrice);
                    obj.BonueMoney = "";
                } else {
                    if (rawRecord._bonus == undefined) {
                        obj.Status = goblin.util.makeText(rawRecord._rawText);
                        obj.BetMoney = goblin.util.makeText(rawRecord._rawPrice);
                        obj.BonueMoney = "";
                    } else {
                        obj.Status = goblin.texts[1032];
                        obj.BetMoney = "";
                        obj.BonueMoney = rawRecord._bonus.toFixed(goblin.valuePrecision) + " " + goblin.currencyName;
                    }
                }
                arr.push(obj);
                if (arr == 6) break;
            }
            this.RecordList.array = arr;
            if (arr.length == 0) {
                this.Desc.text = goblin.texts[1065];
            } else {
                this.Desc.text = "";
            }
        }.bind(this));

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

        contract.get_ticket_price(function (error, result) {
            put(error, "ticket_price", result);
        }), ++putCount;

        contract.get_odds_x_10(function (error, result) {
            put(error, "odds_x_10", result);
        }), ++putCount;

        contract.get_max_total_ticket_count(function (error, result) {
            put(error, "max_total_ticket_count", result);
        }), ++putCount;

        contract.get_deadline(function (error, result) {
            put(error, "deadline", result);
        }), ++putCount;

        contract.get_round_count(function (error, result) {
            put(error, "round_count", result);
        }), ++putCount;

        contract.get_lucky_sides(function (error, result) {
            put(error, "lucky_sides", result);
        }), ++putCount;

        contract.get_lucky_block_hash(function (error, result) {
            put(error, "lucky_block_hash", result);
        }), ++putCount;
    };

    Laya.class(GameMain, "CoinFlippingMain", GameMain2UI);
    Laya.class(Report, "CoinFlippingReport", Game2ReportUI);
    Laya.class(Record, "CoinFlippingRecord", Game2RecordUI);
    goblin.newCoinFlippingMain = newGameMain;
})();