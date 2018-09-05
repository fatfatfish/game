if (typeof __GAME_ENTRY__ !== "undefined") (function () {
    "use strict";

    var TYPE_KUAISAN = "kuaisan";
    var TYPE_COIN_FLIPPING = "coin_flipping";
    var TYPE_BALLGAME_BETTING = "ballgame_betting";
    goblin.RECORD_TYPE_KUAISAN = TYPE_KUAISAN;
    goblin.RECORD_TYPE_COIN_FLIPPING = TYPE_COIN_FLIPPING;
    goblin.RECORD_TYPE_BALLGAME_BETTING = TYPE_BALLGAME_BETTING;

    var PENDING_RECORDS_STORAGE_NAME = "rawPendingRecords.v5";
    var RECORDS_STORAGE_NAME = "rawRecords.v5";

    var TYPE_2_GAME_NAME = {
        [TYPE_KUAISAN]: goblin.util.makeText([1000]),
        [TYPE_COIN_FLIPPING]: goblin.util.makeText([1042]),
        [TYPE_BALLGAME_BETTING]: goblin.util.makeText([1092]),
    };

    var STAUTS_PENDING = 0;
    var STAUTS_ERROR = 1;
    var STAUTS_WON = 2;
    var STAUTS_WAIT = 3;
    var STAUTS_LOST = 4;

    var addPendingRecords = function (transactionHash, gasLimit, rawRecords) {
        var json = Laya.LocalStorage.getItem(PENDING_RECORDS_STORAGE_NAME);
        var rawPendingRecords = json ? JSON.parse(json) : {};
        var now = Math.floor(Date.now() / 1000);
        rawPendingRecords[transactionHash] = {
            gasLimit: gasLimit.toString(),
            rawRecords: rawRecords,
            deadline: now + 10 * 60,
        };
        json = JSON.stringify(rawPendingRecords);
        Laya.LocalStorage.setItem(PENDING_RECORDS_STORAGE_NAME, json);
    };

    goblin.addPendingKuaisanRecords = function (transactionHash, gasLimit, roundNumber, orderList, ticketPrice, odds, factor) {
        var rawRecords = [];
        for (var i = 0; i < orderList.array.length; ++i) {
            var t = orderList.array[i];
            rawRecords.push({
                _type: TYPE_KUAISAN,
                _roundNumber: roundNumber,
                _factor: factor,
                _status: STAUTS_PENDING,
                _hands: t._tickets.length,

                _tickets: t._tickets,
                _ticketPrice: ticketPrice,
                _odds: odds,

                _rawRound: [1029, roundNumber],
                _rawType: t._rawType,
                _rawPrice: (t._tickets.length * ticketPrice * factor).toFixed(goblin.valuePrecision) + " " + goblin.currencyName,
                _rawText: [1044],
                _rawBonus: "",

                _rawNumbers: t.Numbers,
            });
        }
        addPendingRecords(transactionHash, gasLimit, rawRecords);
    };

    goblin.addPendingCoinFlippingRecord = function (transactionHash, gasLimit, roundNumber, order, ticketPrice, oddsX10, factor) {
        addPendingRecords(transactionHash, gasLimit, [{
                _type: TYPE_COIN_FLIPPING,
                _roundNumber: roundNumber,
                _factor: factor,
                _status: STAUTS_PENDING,
                _hands: 1,

                _coinSide: order._coinSide,
                _ticketPrice: ticketPrice,
                _oddsX10: oddsX10,

                _rawRound: [1029, roundNumber],
                _rawType: order._rawType,
                _rawPrice: (ticketPrice * factor).toFixed(goblin.valuePrecision) + " " + goblin.currencyName,
                _rawText: [1044],
                _rawBonus: "",
        }]);
    };

    goblin.addPendingBallgameBettingRecords = function (transactionHash, gasLimit, bettingList, ticketPrice, factor) {
        var rawRecords = [];
        for (var i = 0; i < bettingList.array.length; ++i) {
            var t = bettingList.array[i];
            rawRecords.push({
                _type: TYPE_BALLGAME_BETTING,
                _factor: factor,
                _status: STAUTS_PENDING,

                _matchId: t._betting.parent.id,
                _matchData: t._betting.parent.data,
                _betInfos: t._betInfos,
                _betNameTextIDs: t._betNameTextIDs,
                _ticketPrice: ticketPrice,

                _rawRound: "",
                _rawType: t._rawType,
                _rawPrice: (t._betInfos.length * ticketPrice * factor).toFixed(goblin.valuePrecision) + " " + goblin.currencyName,
                _rawText: [1044],
                _rawBonus: "",
            });
        }
        addPendingRecords(transactionHash, gasLimit, rawRecords);
    };

    var getTransactionReceipt = function (transactionHash, gasLimit, callback) {
        web3.eth.getTransactionReceipt(transactionHash, function (error, result) {
            if (error) {
                if (error.message == "unknown transaction") {
                    callback(transactionHash, 0);
                    return;
                }

                throw error;
            }

            if (!result) {
                callback(transactionHash, 0);
                return;
            }

            if (new web3.BigNumber(result.gasUsed).eq(gasLimit)) {
                callback(transactionHash, -1);
            } else {
                callback(transactionHash, 1);
            }
        });
    };

    var updatePendingRecords = function (rawRecords, callback) {
        var rawPendingRecordList = [];
        var json = Laya.LocalStorage.getItem(PENDING_RECORDS_STORAGE_NAME);
        var rawPendingRecords = json ? JSON.parse(json) : {};
        var doneCount = 0;
        var done = function (transactionHash, result) {
            var rawPendingRecords2 = rawPendingRecords[transactionHash];
            if (result == 0) {
                var now = Math.floor(Date.now() / 1000);
                if (now > rawPendingRecords2.deadline) {
                    delete rawPendingRecords[transactionHash];
                } else {
                    Array.prototype.push.apply(rawPendingRecordList, rawPendingRecords2.rawRecords);
                }
            } else if (result > 0) {
                for (var i = 0; i < rawPendingRecords2.rawRecords.length; ++i) {
                    var rawRecord = rawPendingRecords2.rawRecords[i];
                    rawRecord._status = STAUTS_WAIT;
                    rawRecord._rawText = [rawRecord._type == TYPE_BALLGAME_BETTING ? 1093 : 1030];
                    rawRecords.push(rawRecord);
                }
                delete rawPendingRecords[transactionHash];
            } else {
                for (var i = 0; i < rawPendingRecords2.rawRecords.length; ++i) {
                    var rawRecord = rawPendingRecords2.rawRecords[i];
                    rawRecord._status = STAUTS_ERROR;
                    rawRecord._rawText = [1043];
                    rawRecords.push(rawRecord);
                }
                delete rawPendingRecords[transactionHash];
            }
            if (++doneCount < doCount) return;
            json = JSON.stringify(rawPendingRecords);
            Laya.LocalStorage.setItem(PENDING_RECORDS_STORAGE_NAME, json);
            callback(rawPendingRecordList);
        };
        var doCount = 0;
        for (var transactionHash in rawPendingRecords) {
            var rawPendingRecords2 = rawPendingRecords[transactionHash];
            getTransactionReceipt(transactionHash, rawPendingRecords2.gasLimit, done), ++doCount;
        }
        if (doCount == 0) {
            setTimeout(callback, 0, rawPendingRecordList);
        }
    };

    function setRecordBonus(rawRecord, bonus, resultFieldName, resultFieldValue) {
        rawRecord[resultFieldName] = resultFieldValue;
        if (bonus == 0) {
            rawRecord._status = STAUTS_LOST;
            rawRecord._rawText = [1031];
        } else {
            rawRecord._status = STAUTS_WON;
            rawRecord._rawText = "";
            rawRecord._bonus = bonus;
            rawRecord._rawBonus = "+" + bonus.toFixed(goblin.valuePrecision) + " " + goblin.currencyName;
        }
    }

    function updateKuaisanRecords(rawRecords, callback) {
        var rawRecordsNeedUpdating = [];
        for (var i = 0; i < rawRecords.length; ++i) {
            var rawRecord = rawRecords[i];
            if (rawRecord._type != TYPE_KUAISAN || rawRecord._status != STAUTS_WAIT) continue;
            rawRecordsNeedUpdating.push(rawRecord);
        }
        if (rawRecordsNeedUpdating.length == 0) {
            setTimeout(callback, 0);
            return;
        }

        var roundCount;
        var luckyNumbers;

        var doneCount = 0;
        var done = function () {
            if (++doneCount < doCount) return;
            for (var i = 0; i < rawRecordsNeedUpdating.length; ++i) {
                var rawRecord = rawRecordsNeedUpdating[i];
                var j = roundCount - rawRecord._roundNumber;
                if (j < 0 || j >= luckyNumbers.length) continue;
                var luckyNumber = luckyNumbers[j];
                if (luckyNumber == 0) continue;

                var totalGain = 0;

                for (j = 0; j < rawRecord._tickets.length; ++j) {
                    var ticket = rawRecord._tickets[j];
                    var m = 0;
                    var n = 0;
                    for (var k = 0; k < ticket.length; ++k) {
                        var number = ticket[k];
                        if (number == luckyNumber) {
                            ++m;
                        }
                        n += goblin.kuaisan.code_2_weight(goblin.kuaisan.number_2_code(number));
                    }
                    var gain = rawRecord._ticketPrice * rawRecord._odds * rawRecord._factor * m / n;
                    totalGain += gain;
                }

                setRecordBonus(rawRecord, totalGain, "_luckyNumber", luckyNumber);
            }
            callback();
        };

        var kuaisanContract = goblin.contract.kuaisan;
        var doCount = 0;

        kuaisanContract.get_round_count(function (error, result) {
            if (error) throw error;
            roundCount = result.toNumber()
            done();
        }), ++doCount;

        kuaisanContract.get_lucky_codes(function (error, result) {
            if (error) throw error;
            var luckyCodes = result;
            luckyNumbers = [];
            for (var i = 0; i < luckyCodes.length; ++i) {
                var luckyNumber;
                if (luckyCodes[i] == goblin.kuaisan.NO_CODE) {
                    luckyNumber = 0;
                } else {
                    luckyNumber = goblin.kuaisan.code_2_number(luckyCodes[i]);
                }
                luckyNumbers.push(luckyNumber);
            }
            done();
        }), ++doCount;
    }

    function updateCoinFlippingRecords(rawRecords, callback) {
        var rawRecordsNeedUpdating = [];
        for (var i = 0; i < rawRecords.length; ++i) {
            var rawRecord = rawRecords[i];
            if (rawRecord._type != TYPE_COIN_FLIPPING || rawRecord._status != STAUTS_WAIT) continue;
            rawRecordsNeedUpdating.push(rawRecord);
        }
        if (rawRecordsNeedUpdating.length == 0) {
            setTimeout(callback, 0);
            return;
        }

        var roundCount;
        var luckySides;

        var doneCount = 0;
        var done = function () {
            if (++doneCount < doCount) return;
            for (var i = 0; i < rawRecordsNeedUpdating.length; ++i) {
                var rawRecord = rawRecordsNeedUpdating[i];
                var j = roundCount - rawRecord._roundNumber;
                if (j < 0 || j >= luckySides.length) continue;
                var luckySide = luckySides[j];
                if (luckySide < 0) continue;

                var totalGain;

                if (rawRecord._coinSide == luckySide) {
                    totalGain = rawRecord._ticketPrice * rawRecord._factor * rawRecord._oddsX10 / 10;
                } else {
                    totalGain = 0;
                }

                setRecordBonus(rawRecord, totalGain, "_luckySide", luckySide);
            }
            callback();
        };

        var coinFlippingContract = goblin.contract.coinFlipping;
        var doCount = 0;

        coinFlippingContract.get_round_count(function (error, result) {
            if (error) throw error;
            roundCount = result.toNumber()
            done();
        }), ++doCount;

        coinFlippingContract.get_lucky_sides(function (error, result) {
            if (error) throw error;
            luckySides = [];
            for (var i = 0; i < result.length; ++i) {
                var luckySide;
                if (result[i] == goblin.coinFlipping.NO_SIDE) {
                    luckySide = -1;
                } else {
                    luckySide = result[i];
                }
                luckySides.push(luckySide);
            }
            done();
        }), ++doCount;
    }

    function updateBallgameBettingRecords(rawRecords, callback) {
        var rawRecordsNeedUpdating = [];
        for (var i = 0; i < rawRecords.length; ++i) {
            var rawRecord = rawRecords[i];
            if (rawRecord._type != TYPE_BALLGAME_BETTING || rawRecord._status != STAUTS_WAIT) continue;
            rawRecordsNeedUpdating.push(rawRecord);
        }
        if (rawRecordsNeedUpdating.length == 0) {
            setTimeout(callback, 0);
            return;
        }

        var doneCount = 0;
        var done = function () {
            if (++doneCount < doCount) return;
            for (var i = 0; i < rawRecordsNeedUpdating.length; ++i) {
                var rawRecord = rawRecordsNeedUpdating[i];
                var drawInfo = matchIdToDrawInfo[rawRecord._matchId];
                if (!drawInfo) continue;
                var totalGain = 0;
                var scores;
                for (var j = 0; j < rawRecord._betInfos.length; ++j) {
                    var betInfo = rawRecord._betInfos[j];
                    var betting = drawInfo.bettings[betInfo[1]];
                    var bettingResultIndex = betting.result_index;
                    var odds = new web3.BigNumber(betting.odds.toString());
                    if (bettingResultIndex < 0) {
                        totalGain += web3.fromWei(odds.mul(rawRecord._ticketPrice * rawRecord._factor), "ether").toNumber();
                        scores = [];
                    } else if (betInfo[2] == bettingResultIndex) {
                        totalGain += web3.fromWei(odds.mul(rawRecord._ticketPrice * rawRecord._factor), "ether").toNumber();
                        scores = [drawInfo.data.score1, drawInfo.data.score2];
                    } else {
                        scores = [drawInfo.data.score1, drawInfo.data.score2];
                    }
                }
                setRecordBonus(rawRecord, totalGain, "_scores", scores);
            }
            callback();
        };

        var ballgameBettingContract = goblin.contract.ballgameBetting;
        var ballgameBettingProtocol = goblin.protocol.ballgameBetting;
        ballgameBettingContract = new ethers.Contract(ballgameBettingContract.address, ballgameBettingContract.abi, new ethers.providers.Web3Provider(web3.currentProvider));
        var doCount = 0;

        var matchIdToDrawInfo = {};
        ballgameBettingContract.get_draw_infos().then(function (result) {
            for (var i = 0; i < result.length; ++i) {
                var drawInfo = result[i];
                drawInfo.data = ballgameBettingProtocol.Draw.decode(ethereumjs.Buffer.Buffer.from(drawInfo.data.substr(2), "hex"))
                matchIdToDrawInfo[drawInfo.match_id] = drawInfo;
            }
            done();
        }).catch(function (error) {
            throw error;
        }), ++doCount;
    }

    goblin.updateRecords = function (callback) {
        var json = Laya.LocalStorage.getItem(RECORDS_STORAGE_NAME);
        var rawRecords = json ? JSON.parse(json) : [];
        updatePendingRecords(rawRecords, function (rawPendingRecords) {
            if (rawRecords.length > 100) {
                rawRecords = rawRecords.slice(rawRecords.length - 100);
            }

            var doneCount = 0;
            var done = function () {
                if (++doneCount < doCount) return;
                json = JSON.stringify(rawRecords);
                Laya.LocalStorage.setItem(RECORDS_STORAGE_NAME, json);
                Array.prototype.push.apply(rawRecords, rawPendingRecords);

                var records = [];
                for (var i = rawRecords.length - 1; i >= 0; --i) {
                    var rawRecord = rawRecords[i];
                    records.push({
                        _raw: rawRecord,
                        Round: goblin.util.makeText(rawRecord._rawRound),
                        Type: TYPE_2_GAME_NAME[rawRecord._type] + " - " + goblin.util.makeText(rawRecord._rawType),
                        Price: goblin.util.makeText(rawRecord._rawPrice),
                        Text: goblin.util.makeText(rawRecord._rawText),
                        Bonus: goblin.util.makeText(rawRecord._rawBonus),
                    });
                }
                callback(records);
            };

            var doCount = 0;
            updateKuaisanRecords(rawRecords, done), ++doCount;
            updateCoinFlippingRecords(rawRecords, done), ++doCount;
            updateBallgameBettingRecords(rawRecords, done), ++doCount;
        });
    }
})();
