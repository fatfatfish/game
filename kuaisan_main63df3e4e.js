if (typeof __GAME_ENTRY__ !== "undefined") (function () {
    "use strict";

    var Handler = laya.utils.Handler;
    var Event = laya.events.Event;

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

        var odds = data.odds.toNumber();
        var ticketPrice = Number(web3.fromWei(data.ticket_price, "ether"));
        var maxTotalTicketCount = Number(data.max_total_ticket_count);

        function OrderList() {
            OrderList.super(this);

            this.OrderList.vScrollBarSkin = "";

            this.BtnBack.on(Event.CLICK, this, function () {
                this.parent.removeChild(this);
            });

            this.BtnClear.on(Event.CLICK, this, function () {
                this.parent.addChild(new goblin.misc.Confirm(goblin.texts[1126], cart.empty.bind(cart)));
            });

            this.BtnRandom.on(Event.CLICK, this, function () {
                gameMain.user_random();
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

            var pay = function() {
                var arr = this.OrderList.array;
                var tickets = [];
                for (var i = 0; i < arr.length; ++i) {
                    Array.prototype.push.apply(tickets, arr[i]._tickets);
                }
                var raw_ticket_bundle = goblin.kuaisan.dump_ticket_bundle(tickets, factor);
                var roundNumber = getCurRoundCount();
                if (getTimeout() <= 0) {
                    ++roundNumber;
                }
                var txParams = {
                    to: contract.address,
                    value: data.ticket_price.mul(tickets.length * factor),
                    data: contract.buy_tickets.getData(
                        "0x" + ethereumjs.Buffer.Buffer.from(raw_ticket_bundle).toString("hex"),
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
                    goblin.addPendingKuaisanRecords(
                        result,
                        txParams.gasLimit,
                        roundNumber, this.OrderList, ticketPrice, odds, factor
                    );
                    this.parent.removeChild(loading);
                    this.parent.addChild(new goblin.misc.Tips(goblin.texts[1017], function () {
                        cart.empty();
                        this.parent.removeChild(this);
                    }.bind(this)));
                }.bind(this)).catch(function (error) {
                    this.parent.removeChild(loading);
                    goblin.util.displayTransactionError(error, this.parent);
                }.bind(this));
            }.bind(this);

            this.BtnPay.on(Event.CLICK, this, function () {
                contract.get_round_count(function (error, result) {
                    if (error) throw error;
                    if (result.toNumber() != getCurRoundCount()) {
                        this.parent.addChild(new goblin.misc.Tips(goblin.texts[1049], function () {
                            destroy();
                        }));
                    } else {
                        pay();
                    }
                }.bind(this));
            });

            this.OrderList.array = [];

            var OnBtnDeleteClick = function (index) {
                cart.removeByIndex(index);
            };

            var OnBtnCheckClick = function (index) {
                cart.checkByIndex(index);
            };

            this.OrderList.renderHandler = new Handler(this, function (item, index) {
                var btnDelete = item.getChildByName("BtnDelete");
                btnDelete.on(Event.CLICK, this, OnBtnDeleteClick, [index]);
                var btnCheck = item.getChildByName("BtnCheck");
                btnCheck.on(Event.CLICK, this, OnBtnCheckClick, [index]);
            });

            cart.bindList(this.OrderList);

            var count = 0;

            var changeCount = function (delta) {
                count += delta;
                if (count * factor > maxTotalTicketCount) {
                    var newFactor = Math.floor(maxTotalTicketCount / count);
                    changeFactor(newFactor - factor);
                    if (delta == 0)
                        this.parent.addChild(new goblin.misc.Tips(goblin.texts[1056].format(maxTotalTicketCount)));
                }
                var c = count * factor;
                this.BetTxt.text = goblin.texts[1018].format(c, (c * ticketPrice).toFixed(goblin.valuePrecision) + " " + goblin.currencyName);
                this.BtnPay.disabled = c == 0;
            }.bind(this);

            var onUpdate = function (oldObj, newObj) {
                if (oldObj == undefined) {
                    changeCount(newObj._tickets.length);
                } else if (newObj == undefined) {
                    changeCount(-oldObj._tickets.length);
                } else {
                    changeCount(newObj._tickets.length - oldObj._tickets.length);
                }
            }.bind(this);

            cart.onHezhiUpdate(onUpdate);
            cart.onSantonghaodanxuanUpdate(onUpdate);
            cart.onSantonghaotongxuanUpdate(onUpdate);
            cart.onErtonghaodanxuanUpdate(onUpdate);
            cart.onErtonghaofuxuanUpdate(onUpdate);
            cart.onSanlianhaotongxuanUpdate(onUpdate);
            cart.onSanbutonghaoUpdate(onUpdate);
            cart.onSanbutonghaodantuoUpdate(onUpdate);
            cart.onErbutonghaoUpdate(onUpdate);
            cart.onErbutonghaodantuoUpdate(onUpdate);

            var factor = 1;

            var changeFactor = function (delta) {
                var newFactor = factor + delta;

                if (newFactor < 1) {
                    return;
                }

                factor += delta;
                this.RateTxt.text = factor.toString() + goblin.texts[1019];
                changeCount(0);
            }.bind(this);

            this.BtnAdd.on(Event.CLICK, this, function () {
                changeFactor(1);
            });

            this.BtnDec.on(Event.CLICK, this, function () {
                changeFactor(-1);
            });

            changeCount(0);
            changeFactor(0);
        }

        function BetSum() {
            BetSum.super(this);

            var rate = [1, 3, 6, 10, 15, 21, 25, 27, 27, 25, 21, 15, 10, 6, 3, 1];

            for (var i = 0; i < rate.length; ++i) {
                var j = i + 3;
                this['Bonus_' + j.toString()].text = (odds / rate[i]).toFixed(goblin.valuePrecision) + goblin.texts[1019];
            }

            var updateCart = function () {
                var hezhis = [];

                for (var j = 3; j < 19; ++j) {
                    if (this['Bet_' + j.toString()].selected) {
                        hezhis.push(j);
                    }
                }

                if (hezhis.length == 0) {
                    cart.setHezhi();
                } else {
                    cart.setHezhi(hezhis);
                }
            }.bind(this);

            var clearBetAll = function () {
                this.BetAll_Small.selected = false;
                this.BetAll_Big.selected = false;
                this.BetAll_Even.selected = false;
                this.BetAll_Singular.selected = false;
                updateCart();
            }.bind(this);

            var setBetAll = function (betAll) {
                if (betAll == "Big") {
                    this.BetAll_Small.selected = false;
                } else if (betAll == "Small") {
                    this.BetAll_Big.selected = false;
                } else if (betAll == "Singular") {
                    this.BetAll_Even.selected = false;
                } else if (betAll == "Even") {
                    this.BetAll_Singular.selected = false;
                }

                for (var j = 3; j < 19; ++j) {
                    var f = true;
                    var c = 0;
                    if (this.BetAll_Small.selected) {
                        f = f && j <= 10;
                        ++c;
                    } else if (this.BetAll_Big.selected) {
                        f = f && j >= 11;
                        ++c;
                    }
                    if (this.BetAll_Even.selected) {
                        f = f && j % 2 == 0;
                        ++c;
                    } else if (this.BetAll_Singular.selected) {
                        f = f && j % 2 == 1;
                        ++c;
                    }
                    this['Bet_' + j.toString()].selected = f && c >= 1;
                }

                updateCart();
            }.bind(this);

            this.BetAll_Big.on(Event.CLICK, this, function () {
                if (!this.BetAll_Big.selected) {
                    setBetAll();
                } else {
                    setBetAll('Big');
                }
            });

            this.BetAll_Small.on(Event.CLICK, this, function () {
                if (!this.BetAll_Small.selected) {
                    setBetAll();
                } else {
                    setBetAll('Small');
                }
            });

            this.BetAll_Singular.on(Event.CLICK, this, function () {
                if (!this.BetAll_Singular.selected) {
                    setBetAll();
                } else {
                    setBetAll('Singular');
                }
            });

            this.BetAll_Even.on(Event.CLICK, this, function () {
                if (!this.BetAll_Even.selected) {
                    setBetAll();
                } else {
                    setBetAll('Even');
                }
            });

            for (var j = 3; j < 19; ++j) {
                this['Bet_' + j.toString()].on(Event.CLICK, this, function () {
                    clearBetAll();
                });
            }

            var onRemove = function () {
                for (var j = 3; j < 19; ++j) {
                    this['Bet_' + j.toString()].selected = false;
                }
                clearBetAll();
            }.bind(this);

            cart.onHezhiRemove(onRemove);

            cart.onHezhiCheck(function () {
                setTabUI(this);
                orderList.parent.removeChild(orderList);
            }.bind(this));

            this.user_random = function () {
                var k = goblin.util.randomBetween(3, 19);
                for (var j = 3; j < 19; ++j) {
                    this['Bet_' + j.toString()].selected = j == k;
                }
                clearBetAll();
            };

            var count = 0;

            var onUpdate = function (oldObj, newObj) {
                if (oldObj == undefined) {
                    count += newObj._tickets.length;
                } else if (newObj == undefined) {
                    count -= oldObj._tickets.length;
                } else {
                    count += newObj._tickets.length - oldObj._tickets.length;
                }
                updateTabUI(this);
            }.bind(this);

            cart.onHezhiUpdate(onUpdate);

            this.user_get_count = function () {
                return count;
            };
        }

        function BetSame3() {
            BetSame3.super(this);

            for (var j = 111; j <= 666; j += 111) {
                this['Bonus_' + j.toString()].text = odds.toFixed(goblin.valuePrecision) + goblin.texts[1019];
            }

            this.Bonus_Same.text = (odds / 6).toFixed(goblin.valuePrecision) + goblin.texts[1019];


            var updateCart = function () {
                var tonghaos = [];

                for (var j = 111; j <= 666; j += 111) {
                    if (this['Bet_' + j.toString()].selected) {
                        tonghaos.push(j / 111);
                    }
                }

                if (tonghaos.length == 0) {
                    cart.setSantonghaodanxuan();
                } else {
                    cart.setSantonghaodanxuan(tonghaos);
                }

                cart.setSantonghaotongxuan(this.Bet_Same.selected);
            }.bind(this);

            for (var j = 111; j <= 666; j += 111) {
                this['Bet_' + j.toString()].on(Event.CLICK, this, updateCart);
            }

            cart.onSantonghaodanxuanRemove(function () {
                for (var j = 111; j <= 666; j += 111) {
                    this['Bet_' + j.toString()].selected = false;
                }

                updateCart();
            }.bind(this));

            cart.onSantonghaodanxuanCheck(function () {
                setTabUI(this);
                orderList.parent.removeChild(orderList);
            }.bind(this));

            this.Bet_Same.on(Event.CLICK, this, updateCart);

            cart.onSantonghaotongxuanRemove(function () {
                this.Bet_Same.selected = false;
                updateCart();
            }.bind(this));

            cart.onSantonghaotongxuanCheck(function () {
                setTabUI(this);
                orderList.parent.removeChild(orderList);
            }.bind(this));

            this.user_random = function () {
                var r = goblin.util.randomBetween(1, 6);

                for (var j = 111; j <= 666; j += 111) {
                    this['Bet_' + j.toString()].selected = j == r * 111;
                }

                updateCart();
            };

            var count = 0;

            var onUpdate = function (oldObj, newObj) {
                if (oldObj == undefined) {
                    count += newObj._tickets.length;
                } else if (newObj == undefined) {
                    count -= oldObj._tickets.length;
                } else {
                    count += newObj._tickets.length - oldObj._tickets.length;
                }
                updateTabUI(this);
            }.bind(this);

            cart.onSantonghaodanxuanUpdate(onUpdate);
            cart.onSantonghaotongxuanUpdate(onUpdate);

            this.user_get_count = function () {
                return count;
            };
        }

        function BetSame2() {
            BetSame2.super(this);

            this.Txt1.text += (odds / 3).toFixed(goblin.valuePrecision) + goblin.texts[1019];
            this.Txt2.text += (odds / 16).toFixed(goblin.valuePrecision) + goblin.texts[1019];

            var updateCart = function () {
                var tonghaos = [];

                for (var j = 11; j <= 66; j += 11) {
                    if (this['Bet_Same2_' + j.toString() + 'A'].selected) {
                        tonghaos.push(j / 11);
                    }
                }

                if (tonghaos.length == 0) {
                    cart.setErtonghaofuxuan();
                } else {
                    cart.setErtonghaofuxuan(tonghaos);
                }

                var tonghaos1 = [];
                var butonghaos1 = [];

                for (var j = 11; j <= 66; j += 11) {
                    if (this['Bet_Same2_' + j.toString()].selected) {
                        tonghaos1.push(j / 11);
                    }
                }

                for (var j = 1; j <= 6; j += 1) {
                    if (this['Bet_Same2_' + j.toString()].selected) {
                        butonghaos1.push(j);
                    }
                }

                if (tonghaos1.length * butonghaos1.length == 0) {
                    cart.setErtonghaodanxuan();
                } else {
                    cart.setErtonghaodanxuan(tonghaos1, butonghaos1);
                }
            }.bind(this);

            for (var j = 11; j <= 66; j += 11) {
                this['Bet_Same2_' + j.toString() + 'A'].on(Event.CLICK, this, updateCart);
            }

            cart.onErtonghaofuxuanRemove(function () {
                for (var j = 11; j <= 66; j += 11) {
                    this['Bet_Same2_' + j.toString() + 'A'].selected = false;
                }

                updateCart();
            }.bind(this));

            cart.onErtonghaofuxuanCheck(function () {
                setTabUI(this);
                orderList.parent.removeChild(orderList);
            }.bind(this));

            for (var j = 11; j <= 66; j += 11) {
                this['Bet_Same2_' + j.toString()].on(Event.CLICK, this, function (j) {
                    var k = j / 11;
                    this['Bet_Same2_' + k.toString()].selected = false;
                    updateCart();
                }, [j]);
            }

            for (var j = 1; j <= 6; j += 1) {
                this['Bet_Same2_' + j.toString()].on(Event.CLICK, this, function (j) {
                    var k = j * 11;
                    this['Bet_Same2_' + k.toString()].selected = false;
                    updateCart();
                }, [j]);
            }

            cart.onErtonghaodanxuanRemove(function () {
                for (var j = 11; j <= 66; j += 11) {
                    this['Bet_Same2_' + j.toString()].selected = false;
                }
                for (var j = 1; j <= 6; j += 1) {
                    this['Bet_Same2_' + j.toString()].selected = false;
                }
                updateCart();
            }.bind(this));

            cart.onErtonghaodanxuanCheck(function () {
                setTabUI(this);
                orderList.parent.removeChild(orderList);
            }.bind(this));

            this.user_random = function () {
                var r1 = goblin.util.randomBetween(1, 6);

                for (var j = 11; j <= 66; j += 11) {
                    this['Bet_Same2_' + j.toString()].selected = j == r1 * 11;
                }

                var r2;
                do { r2 = goblin.util.randomBetween(1, 6); } while (r2 == r1);

                for (var j = 1; j <= 6; j += 1) {
                    this['Bet_Same2_' + j.toString()].selected = j == r2;
                }

                updateCart();
            };

            var count = 0;

            var onUpdate = function (oldObj, newObj) {
                if (oldObj == undefined) {
                    count += newObj._tickets.length;
                } else if (newObj == undefined) {
                    count -= oldObj._tickets.length;
                } else {
                    count += newObj._tickets.length - oldObj._tickets.length;
                }
                updateTabUI(this);
            }.bind(this);

            cart.onErtonghaodanxuanUpdate(onUpdate);
            cart.onErtonghaofuxuanUpdate(onUpdate);

            this.user_get_count = function () {
                return count;
            };
        }

        function BetDiff3() {
            BetDiff3.super(this);

            this.Txt1.text += (odds / 6).toFixed(goblin.valuePrecision) + goblin.texts[1019];
            this.Txt2.text += (odds / 24).toFixed(goblin.valuePrecision) + goblin.texts[1019];

            var updateCart = function () {
                var butonghaos = [];

                for (var j = 1; j <= 6; j += 1) {
                    if (this['Bet_Diff3_' + j.toString()].selected) {
                        butonghaos.push(j);
                    }
                }

                if (butonghaos.length < 3) {
                    cart.setSanbutonghao();
                } else {
                    cart.setSanbutonghao(butonghaos);
                }

                var tuos = [];
                var dans = [];

                for (var j = 1; j <= 6; j += 1) {
                    if (this['Bet_Diff3_' + j.toString() + 'T'].selected) {
                        tuos.push(j);
                    }
                }

                for (var j = 1; j <= 6; j += 1) {
                    if (this['Bet_Diff3_' + j.toString() + 'D'].selected) {
                        dans.push(j);
                    }
                }

                if (tuos.length * dans.length == 0 || tuos.length + dans.length < 3) {
                    cart.setSanbutonghaodantuo();
                } else {
                    cart.setSanbutonghaodantuo(tuos.concat(dans), dans);
                }

                cart.setSanlianhaotongxuan(this.Bet_Diff3_Lian.selected);
            }.bind(this);

            for (var j = 1; j <= 6; j += 1) {
                this['Bet_Diff3_' + j.toString()].on(Event.CLICK, this, updateCart);
            }

            cart.onSanbutonghaoRemove(function () {
                for (var j = 1; j <= 6; j += 1) {
                    this['Bet_Diff3_' + j.toString()].selected = false;
                }

                updateCart();
            }.bind(this));

            cart.onSanbutonghaoCheck(function () {
                setTabUI(this);
                orderList.parent.removeChild(orderList);
            }.bind(this));

            var q = [];

            for (var j = 1; j <= 6; j += 1) {
                this['Bet_Diff3_' + j.toString() + 'D'].on(Event.CLICK, this, function (j) {
                    if (this['Bet_Diff3_' + j.toString() + 'D'].selected) {
                        q.push(j);

                        if (q.length > 2) {
                            var k = q.shift();
                            this['Bet_Diff3_' + k.toString() + 'D'].selected = false;
                        }
                    } else {
                        var k = q.indexOf(j);
                        q.splice(k, 1);
                    }

                    this['Bet_Diff3_' + j.toString() + 'T'].selected = false;
                    updateCart();
                }, [j]);
                this['Bet_Diff3_' + j.toString() + 'T'].on(Event.CLICK, this, function (j) {
                    this['Bet_Diff3_' + j.toString() + 'D'].selected = false;
                    var k = q.indexOf(j);

                    if (k >= 0) {
                        q.splice(k, 1);
                    }

                    updateCart();
                }, [j]);
            }

            cart.onSanbutonghaodantuoRemove(function () {
                for (var j = 1; j <= 6; j += 1) {
                    this['Bet_Diff3_' + j.toString() + 'D'].selected = false;
                    this['Bet_Diff3_' + j.toString() + 'T'].selected = false;
                }

                updateCart();
            }.bind(this));

            cart.onSanbutonghaodantuoCheck(function () {
                setTabUI(this);
                orderList.parent.removeChild(orderList);
            }.bind(this));

            this.Bet_Diff3_Lian.on(Event.CLICK, this, updateCart);

            cart.onSanlianhaotongxuanRemove(function () {
                this.Bet_Diff3_Lian.selected = false;
                updateCart();
            }.bind(this));

            cart.onSanlianhaotongxuanCheck(function () {
                setTabUI(this);
                orderList.parent.removeChild(orderList);
            }.bind(this));

            this.user_random = function () {
                var r1 = goblin.util.randomBetween(1, 6);
                var r2;
                do { r2 = goblin.util.randomBetween(1, 6); } while (r2 == r1);
                var r3;
                do { r3 = goblin.util.randomBetween(1, 6); } while (r3 == r1 || r3 == r2);
                for (var j = 1; j <= 6; j += 1) {
                    this['Bet_Diff3_' + j.toString()].selected = j == r1 || j == r2 || j == r3;
                }
                updateCart();
            };

            var count = 0;

            var onUpdate = function (oldObj, newObj) {
                if (oldObj == undefined) {
                    count += newObj._tickets.length;
                } else if (newObj == undefined) {
                    count -= oldObj._tickets.length;
                } else {
                    count += newObj._tickets.length - oldObj._tickets.length;
                }
                updateTabUI(this);
            }.bind(this);

            cart.onSanlianhaotongxuanUpdate(onUpdate);
            cart.onSanbutonghaoUpdate(onUpdate);
            cart.onSanbutonghaodantuoUpdate(onUpdate);

            this.user_get_count = function () {
                return count;
            };
        }

        function BetDiff2() {
            BetDiff2.super(this);

            this.Txt1.text += (odds / 30).toFixed(goblin.valuePrecision) + goblin.texts[1019];

            var updateCart = function () {
                var butonghaos = [];

                for (var j = 1; j <= 6; j += 1) {
                    if (this['Bet_Diff2_' + j.toString()].selected) {
                        butonghaos.push(j);
                    }
                }

                if (butonghaos.length < 2) {
                    cart.setErbutonghao();
                } else {
                    cart.setErbutonghao(butonghaos);
                }

                var tuos = [];
                var dan = undefined;

                for (var j = 1; j <= 6; j += 1) {
                    if (this['Bet_Diff2_' + j.toString() + 'T'].selected) {
                        tuos.push(j);
                    }
                }

                for (var j = 1; j <= 6; j += 1) {
                    if (this['Bet_Diff2_' + j.toString() + 'D'].selected) {
                        dan = j;
                        break;
                    }
                }

                if (tuos.length == 0 || dan == undefined) {
                    cart.setErbutonghaodantuo();
                } else {
                    cart.setErbutonghaodantuo(tuos.concat([dan]), dan);
                }
            }.bind(this);

            for (var j = 1; j <= 6; j += 1) {
                this['Bet_Diff2_' + j.toString()].on(Event.CLICK, this, updateCart);
            }

            cart.onErbutonghaoRemove(function () {
                for (var j = 1; j <= 6; j += 1) {
                    this['Bet_Diff2_' + j.toString()].selected = false;
                }

                updateCart();
            }.bind(this));

            cart.onErbutonghaoCheck(function () {
                setTabUI(this);
                orderList.parent.removeChild(orderList);
            }.bind(this));

            for (var j = 1; j <= 6; j += 1) {
                this['Bet_Diff2_' + j.toString() + 'D'].on(Event.CLICK, this, function (j) {
                    for (var k = 1; k <= 6; ++k) {
                        if (k == j) {
                            continue;
                        }
                        this['Bet_Diff2_' + k.toString() + 'D'].selected = false;
                    }

                    this['Bet_Diff2_' + j.toString() + 'T'].selected = false;
                    updateCart();
                }, [j]);
                this['Bet_Diff2_' + j.toString() + 'T'].on(Event.CLICK, this, function (j) {
                    this['Bet_Diff2_' + j.toString() + 'D'].selected = false;
                    updateCart();
                }, [j]);
            }

            cart.onErbutonghaodantuoRemove(function () {
                for (var j = 1; j <= 6; j += 1) {
                    this['Bet_Diff2_' + j.toString() + 'D'].selected = false;
                    this['Bet_Diff2_' + j.toString() + 'T'].selected = false;
                }

                updateCart();
            }.bind(this));

            cart.onErbutonghaodantuoCheck(function () {
                setTabUI(this);
                orderList.parent.removeChild(orderList);
            }.bind(this));

            this.user_random = function () {
                var r1 = goblin.util.randomBetween(1, 6);
                var r2;
                do { r2 = goblin.util.randomBetween(1, 6); } while (r2 == r1);
                for (var j = 1; j <= 6; j += 1) {
                    this['Bet_Diff2_' + j.toString()].selected = j == r1 || j == r2;
                }
                updateCart();
            };

            var count = 0;

            var onUpdate = function (oldObj, newObj) {
                if (oldObj == undefined) {
                    count += newObj._tickets.length;
                } else if (newObj == undefined) {
                    count -= oldObj._tickets.length;
                } else {
                    count += newObj._tickets.length - oldObj._tickets.length;
                }
                updateTabUI(this);
            }.bind(this);

            cart.onErbutonghaoUpdate(onUpdate);
            cart.onErbutonghaodantuoUpdate(onUpdate);

            this.user_get_count = function () {
                return count;
            };
        }

        function More() {
            More.super(this);

            this.on(Event.CLICK, this, function () {
                this.parent.removeChild(this);
            });

            this.BtnReport.on(Event.CLICK, this, function () {
                this.parent.addChild(new Report(getCurRoundCount(), getLucyCodes()));
            });

            this.BtnDesc.on(Event.CLICK, this, function() {
                this.parent.addChild(new Desc());
            });
        }

        Laya.class(OrderList, "KuaisanOrderList", Kuai3OrderListUI);
        Laya.class(BetSum, "BetSum", BetSumUI);
        Laya.class(BetSame3, "BetSame3", BetSame3UI);
        Laya.class(BetSame2, "BetSame2", BetSame2UI);
        Laya.class(BetDiff3, "BetDiff3", BetDiff3UI);
        Laya.class(BetDiff2, "BetDiff2", BetDiff2UI);
        Laya.class(More, "KuaisanMore", MoreUI);

        var cart = new goblin.KuaisanCart(ticketPrice);
        var orderList = new OrderList();
        var betSum = new BetSum();
        var betSame3 = new BetSame3();
        var betSame2 = new BetSame2();
        var betDiff3 = new BetDiff3();
        var betDiff2 = new BetDiff2();
        var more = new More();

        //-----------------------

        var tabUIs = [
            betSum,
            betSame3,
            betSame2,
            betDiff3,
            betDiff2,
        ];

        var currentTabUI = null;

        var setTabUI = function (tabUI) {
            var tabUIIndex = tabUIs.indexOf(tabUI);

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
            if (tabUI == currentTabUI) {
                var c = tabUI.user_get_count();
                this.BetTxt.text = goblin.texts[1018].format(c, (c * ticketPrice).toFixed(goblin.valuePrecision) + " " + goblin.currencyName);
            }
        }.bind(this);

        setTabUI(betSum);

        //-----------------------

        this.BtnBack.on(Event.CLICK, this, function () {
            this.parent.removeChild(this);
        });

        this.BtnType.on(Event.CLICK, this, function () {
            var nextTabUI = tabUIs[this.BtnType.selectedIndex];
            setTabUI(nextTabUI);
        });

        this.BtnOk.on(Event.CLICK, this, function () {
            this.parent.addChild(orderList);
        });

        this.BtnRandom.on(Event.CLICK, this, function () {
            this.user_random();
        });

        this.BtnMore.on(Event.CLICK, this, function () {
            this.parent.addChild(more);
        });

        this.user_random = function () {
            currentTabUI.user_random();
        };

        //-----------------------

        var timeout;

        var setTimeout_ = function (deadline) {
            timeout = deadline == 0 ? -1 : Math.max(deadline - Math.floor(Date.now() / 1000), 0);
            changeTimeout(0);
        };

        var getTimeout = function () { return timeout; };

        var changeTimeout = function (delta) {
            var t;
            if (timeout < 0) {
                t = goblin.texts[1020];
            } else {
                timeout += delta;
                if (timeout < 0) {
                    timeout = 0;
                    t = goblin.texts[1021];
                } else {
                    t = goblin.util.secondsToHHMMSS(timeout);
                }
            }
            this.NextTime.text = t;
            orderList.EndTime.text = t;
        }.bind(this);

        setTimeout_(data.deadline.toNumber());

        this.timer.loop(1000, this, function () {
            changeTimeout(-1);
        });

        //-----------------------

        var _roundCount = data.round_count.toNumber();
        var _luckyCodes = data.lucky_codes;

        var getCurRoundCount = function () { return _roundCount; };
        var getLucyCodes = function () { return _luckyCodes; };

        var refreshHistory = function () {
            var i = 0;
            for (; i < _luckyCodes.length; ++i) {
                if (_luckyCodes[i] != goblin.kuaisan.NO_CODE) {
                    break;
                }
            }
            var luckyCode = i == _luckyCodes.length ? -1 : _luckyCodes[i];
            this.ResultTxt.text = goblin.texts[1022].format(_roundCount - i);
            var luckyNumber = luckyCode < 0 ? 0 : goblin.kuaisan.code_2_number(luckyCode);
            var a = luckyNumber.toString().split("").map(Number);
            // this.LastResult.text = a.join(" ");
            this.Num1.skin = "resource/dice{}.png".format(a[0]);
            this.Num2.skin = "resource/dice{}.png".format(a[1]);
            this.Num3.skin = "resource/dice{}.png".format(a[2]);
        }.bind(this);

        var updateHistory = function (roundCount, luckyCode) {
            if (luckyCode == undefined) luckyCode = goblin.kuaisan.NO_CODE;
            if (roundCount <= _roundCount) {
                _luckyCodes[_roundCount - roundCount] = luckyCode;
                refreshHistory();
            } else {
                _luckyCodes.unshift(luckyCode);
                _roundCount = roundCount;
            }
        };

        refreshHistory();

        //-----------------------

        var contract = goblin.contract.kuaisan;

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
            var luckyCode = Number(result.args.lucky_code);
            if (this.parent)
                this.parent.addChild(new goblin.misc.Tips(
                    goblin.texts[1024].format(roundCount, goblin.kuaisan.code_2_number(luckyCode))
                ));
            if (getCurRoundCount() == roundCount/* && getTimeout() == 0*/) {
                setTimeout_(0);
            }
            updateHistory(roundCount, luckyCode);
        }.bind(this));

        //-----------------------

        var destroy = function () {
            eventRoundStart.stopWatching();
            eventRoundEnd.stopWatching();
            this.destroy();
            orderList.destroy();
            more.destroy();
        }.bind(this);
    }

    var getData = function (callback) {
        var data = {};
        var count = 0;
        var stop = false;

        var put = function (error, key, value) {
            if (stop) {
                return;
            }

            if (error) {
                stop = true;
                callback(error);
            } else {
                data[key] = value;
                ++count;

                if (count == n) {
                    callback(null, data);
                }
            }
        };

        var contract = goblin.contract.kuaisan;
        var n = 0;

        contract.get_ticket_price(function (error, result) {
            put(error, "ticket_price", result);
        }), ++n;

        contract.get_odds(function (error, result) {
            put(error, "odds", result);
        }), ++n;

        contract.get_max_total_ticket_count(function (error, result) {
            put(error, "max_total_ticket_count", result);
        }), ++n;

        contract.get_deadline(function (error, result) {
            put(error, "deadline", result);
        }), ++n;

        contract.get_round_count(function (error, result) {
            put(error, "round_count", result);
        }), ++n;

        contract.get_lucky_codes(function (error, result) {
            put(error, "lucky_codes", result);
        }), ++n;
    };
    function Desc(){
        Desc.super(this);
        this.Desc.text = goblin.texts[1053];
        this.BtnBack.on(Event.CLICK, this, function () {
            this.destroy();
        });
    }
    function Report(roundCount, luckyCodes) {
        Report.super(this);

        this.RecordList.vScrollBarSkin = "";

        this.BtnBack.on(Event.CLICK, this, function () {
            this.destroy();
        });

        this.ReportType.renderHandler = new Handler(this, function (item, index) {
            item.on(Event.CLICK, this, function (index) {
                setTab(index);
            }, [index]);
        });

        this.BtnSum.on(Event.CLICK, this, function() {
            sumArr(roundCount, luckyCodes);
        });
        this.BtnDiff.on(Event.CLICK, this, function() {
            diffArr(roundCount, luckyCodes);
        });
        this.BtnHotCold.on(Event.CLICK, this, function() {
            hotColdArr(roundCount, luckyCodes);
        });

        var sumArr = function(roundCount, luckyCodes) {
            var arr = [{Round: "期数", Number: "开奖号", Sum: "和值", Size: "大小", Parity: "单双"}];

            for (var i = 0; i < luckyCodes.length; ++i) {
                if (luckyCodes[i] == goblin.kuaisan.NO_CODE) continue;
                var luckyNumber = goblin.kuaisan.code_2_number(luckyCodes[i]);
                var a = luckyNumber.toString().split("").map(Number);
                var sum = a[0] + a[1] + a[2];
                arr.push({
                    Round: (roundCount - i).toString(),
                    Number: a.join(" "),
                    Sum: sum,
                    Size: goblin.texts[1025][sum >= 11 ? 0 : 1],
                    Parity: goblin.texts[1026][sum % 2 == 1 ? 0 : 1],
                });
            }

            this.RecordList.array = arr
        }.bind(this);

        var getTimes = function(lucky_codes, times, sum) {
            var t = 0;
            for (var i = 0; i < luckyCodes.length && i < times; ++i) {
                if (luckyCodes[i] == goblin.kuaisan.NO_CODE) continue;
                var luckyNumber = goblin.kuaisan.code_2_number(luckyCodes[i]);
                var a = luckyNumber.toString().split("").map(Number);
                var s = a[0] + a[1] + a[2];
                if (s == sum) {
                    t ++;
                }
            }
            return t;
        }

        var hotColdArr = function(roundCount, lucky_codes) {
            var arr = [{Round:"和值", Number:"30期", Sum:"50期", Size:"100期", Parity:"遗漏"}];
            for (var i=3; i<=18; i++) {
                arr.push({
                    Round:i.toString(),
                    Number:getTimes(lucky_codes, 30, i),
                    Sum:getTimes(lucky_codes, 50, i),
                    Size:getTimes(lucky_codes, 100, i),
                    Parity:"-",
                });
            }


            var contract = goblin.contract.kuaisan;

            contract.get_sum_missing_counts(function (error, result) {
                if (error) throw error;
                for (var i=0; i<result.length; i++) {
                    arr[i+1].Parity = result[i].toNumber();
                }
                this.RecordList.array = arr;
            }.bind(this));

            this.RecordList.array = arr;
        }.bind(this);
        var diffArr = function(roundCount, luckyCodes) {
            var arr = [{Round:"期数", Number:"开奖号", Sum:"三同号", Size:"三不同", Parity:"二同号"}];
            for (var i=0; i<luckyCodes.length; ++i) {
                if (luckyCodes[i] == goblin.kuaisan.NO_CODE) continue;

                var luckyNumber = goblin.kuaisan.code_2_number(luckyCodes[i]);
                var a = luckyNumber.toString().split("").map(Number);
                var sum = "";
                var size = "";
                var parity = "";
                if (a[0] == a[1] && a[1] == a[2]) {
                    sum = goblin.texts[1046];
                } else if ( a[0] == a[1] || a[1] == a[2] || a[0] == a[2]) {
                    parity = goblin.texts[1047];
                } else if (a[0] + 1 == a[1] && a[1] + 1 == a[2]) {
                    sum = goblin.texts[1048];
                } else {
                    size = goblin.texts[1011];
                }
                arr.push({
                    Round:(roundCount -i).toString(),
                    Number: a.join(" "),
                    Sum:sum,
                    Size:size,
                    Parity:parity,
                })
            }
            this.RecordList.array = arr;
        }.bind(this);


        sumArr(roundCount, luckyCodes);
    }

    Laya.class(GameMain, "KuaisanMain", GameMain1UI);
    Laya.class(Report, "KuaisanReport", ReportUI);
    Laya.class(Desc, "KuaisanDesc", DescUI);
    goblin.newKuaisanMain = newGameMain;
})();
