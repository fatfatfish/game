if (typeof __GAME_ENTRY__ !== "undefined") (function () {
    "use strict";

    goblin.BallgameBettingCart = function () {
        this.matchIndex2BettingIndex2ResultIndexes = {};
        this.bettingType2FullIndexes = {};
        this.unmarkedBettingType = null;
        this.unmarkedBettingFullIndexes = null;
    };

    var CartPrototype = goblin.BallgameBettingCart.prototype;

    var makeBettingFullIndex = function (matchIndex, bettingIndex) {
        return "{}:{}".format(matchIndex, bettingIndex);
    };

    var parseBettingFullIndex = function (bettingFullIndex) {
        return bettingFullIndex.split(":").map(Number);
    }

    CartPrototype.toggleBettingResult = function (bettingResult) {
        var betting = bettingResult.parent;
        var match = betting.parent;
        var bettingIndex2ResultIndexes = this.matchIndex2BettingIndex2ResultIndexes[match.index];
        if (bettingIndex2ResultIndexes == undefined) {
            bettingIndex2ResultIndexes = {};
            this.matchIndex2BettingIndex2ResultIndexes[match.index] = bettingIndex2ResultIndexes;
        }
        var bettingResultIndexes = bettingIndex2ResultIndexes[betting.index];
        if (bettingResultIndexes == undefined) {
            bettingResultIndexes = [];
            bettingIndex2ResultIndexes[betting.index] = bettingResultIndexes;
        }
        var oldBettingResultIndexCount = bettingResultIndexes.length;
        var i = bettingResultIndexes.indexOf(bettingResult.index);
        if (i < 0) {
            bettingResultIndexes.push(bettingResult.index);
        } else {
            bettingResultIndexes.splice(i, 1);
        }
        var newBettingResultIndexCount = bettingResultIndexes.length;
        var bettingFullIndexes = this.bettingType2FullIndexes[betting.data.type];
        var bettingFullIndex = makeBettingFullIndex(match.index, betting.index);
        if (oldBettingResultIndexCount == 0) {
            if (bettingFullIndexes == undefined) {
                bettingFullIndexes = {};
                this.bettingType2FullIndexes[betting.data.type] = bettingFullIndexes;
            }
            bettingFullIndexes[bettingFullIndex] = true;
        } else if (newBettingResultIndexCount == 0) {
            delete bettingFullIndexes[bettingFullIndex];
        }
    };

    CartPrototype._clearBetting = function (matchIndex, bettingIndex, bettingType) {
        var bettingIndex2ResultIndexes = this.matchIndex2BettingIndex2ResultIndexes[matchIndex];
        var bettingFullIndexes = this.bettingType2FullIndexes[bettingType];
        var bettingFullIndex = makeBettingFullIndex(matchIndex, bettingIndex);
        delete bettingIndex2ResultIndexes[bettingIndex];
        delete bettingFullIndexes[bettingFullIndex];
    };

    CartPrototype.clearBetting = function (betting) {
        var match = betting.parent;
        this._clearBetting(match.index, betting.index, betting.data.type);
    };

    CartPrototype.clearBettings = function (bettingType) {
        var bettingFullIndexes = this.bettingType2FullIndexes[bettingType];
        if (bettingFullIndexes == undefined) {
            bettingFullIndexes = {};
        }
        for (var matchIndex in this.matchIndex2BettingIndex2ResultIndexes) {
            var bettingIndex2ResultIndexes = this.matchIndex2BettingIndex2ResultIndexes[matchIndex];
            for (var bettingIndex in bettingIndex2ResultIndexes) {
                var bettingFullIndex = makeBettingFullIndex(matchIndex, bettingIndex);
                if (bettingFullIndexes[bettingFullIndex]) {
                    delete bettingIndex2ResultIndexes[bettingIndex];
                    delete bettingFullIndexes[bettingFullIndex];
                }
            }
        }
    }

    CartPrototype.clearUnmarkedBettingsBegin = function (bettingType) {
        this.unmarkedBettingType = bettingType;
        this.unmarkedBettingFullIndexes = {};
        var bettingFullIndexes = this.bettingType2FullIndexes[bettingType];
        if (bettingFullIndexes != undefined) {
            for (var bettingFullIndex in bettingFullIndexes) {
                this.unmarkedBettingFullIndexes[bettingFullIndex] = true;
            }
        }
    }

    CartPrototype.markBetting = function (betting) {
        var match = betting.parent;
        var bettingFullIndex = makeBettingFullIndex(match.index, betting.index);
        delete this.unmarkedBettingFullIndexes[bettingFullIndex];
    }

    CartPrototype.clearUnmarkedBettingsEnd = function () {
        for (var bettingFullIndex in this.unmarkedBettingFullIndexes) {
            var temp = parseBettingFullIndex(bettingFullIndex);
            this._clearBetting(temp[0], temp[1], this.unmarkedBettingType);
        }
        this.unmarkedBettingType = null;
        this.unmarkedBettingFullIndexes = null;
    }

    CartPrototype.getNumberOfBettingResults = function (bettingType) {
        var bettingResultCount = 0;
        var bettingFullIndexes = this.bettingType2FullIndexes[bettingType];
        if (bettingFullIndexes == undefined) {
            bettingFullIndexes = {};
        }
        for (var matchIndex in this.matchIndex2BettingIndex2ResultIndexes) {
            var bettingIndex2ResultIndexes = this.matchIndex2BettingIndex2ResultIndexes[matchIndex];
            for (var bettingIndex in bettingIndex2ResultIndexes) {
                var bettingFullIndex = makeBettingFullIndex(matchIndex, bettingIndex);
                if (bettingFullIndexes[bettingFullIndex]) {
                    var bettingResultIndexes = bettingIndex2ResultIndexes[bettingIndex];
                    bettingResultCount += bettingResultIndexes.length;
                }
            }
        }

        return bettingResultCount;
    }

    CartPrototype.testBettingResult = function (bettingResult) {
        var betting = bettingResult.parent;
        var match = betting.parent;
        var bettingIndex2ResultIndexes = this.matchIndex2BettingIndex2ResultIndexes[match.index];
        if (bettingIndex2ResultIndexes == undefined) return false;
        var bettingResultIndexes = bettingIndex2ResultIndexes[betting.index];
        if (bettingResultIndexes == undefined) return false;
        var i = bettingResultIndexes.indexOf(bettingResult.index);
        return i >= 0;
    };

    CartPrototype.testBetting = function (betting) {
        var match = betting.parent;
        var bettingIndex2ResultIndexes = this.matchIndex2BettingIndex2ResultIndexes[match.index];
        if (bettingIndex2ResultIndexes == undefined) return false;
        var bettingResultIndexes = bettingIndex2ResultIndexes[betting.index];
        if (bettingResultIndexes == undefined) return false;
        return bettingResultIndexes.length >= 1;
    };

    CartPrototype.getBetInfos = function (betting, bettingValueForPerResult) {
        var match = betting.parent;
        var bettingIndex2ResultIndexes = this.matchIndex2BettingIndex2ResultIndexes[match.index];
        if (bettingIndex2ResultIndexes == undefined) return [];
        var bettingResultIndexes = bettingIndex2ResultIndexes[betting.index];
        if (bettingResultIndexes == undefined) return [];
        var betInfos = [];
        for (var i = 0; i < bettingResultIndexes.length; ++i) {
            betInfos.push([match.index, betting.index, bettingResultIndexes[i], bettingValueForPerResult]);
        }
        return betInfos;
    };
})();