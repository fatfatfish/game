if (typeof __GAME_ENTRY__ !== "undefined") (function () {
    "use strict";

    var KEY_HEZHI = "hezhi";
    var KEY_SANTONGHAODANXUAN = "santonghaodanxuan";
    var KEY_SANTONGHAOTONGXUAN = "santonghaotongxuan";
    var KEY_ERTONGHAOFUXUAN = "ertonghaofuxuan";
    var KEY_ERTONGHAODANXUAN = "ertonghaodanxuan";
    var KEY_SANBUTONGHAO = "sanbutonghao";
    var KEY_SANBUTONGHAODANTUO = "sanbutonghaodantuo";
    var KEY_SANLIANHAOTONGXUAN = "sanlianhaotongxuan";
    var KEY_ERBUTONGHAO = "erbutonghao";
    var KEY_ERBUTONGHAODANTUO = "erbutongdantuo";

    var makeOnEvent = function () {
        return {
            [KEY_HEZHI]: [],
            [KEY_SANTONGHAODANXUAN]: [],
            [KEY_SANTONGHAOTONGXUAN]: [],
            [KEY_ERTONGHAOFUXUAN]: [],
            [KEY_ERTONGHAODANXUAN]: [],
            [KEY_SANBUTONGHAO]: [],
            [KEY_SANBUTONGHAODANTUO]: [],
            [KEY_SANLIANHAOTONGXUAN]: [],
            [KEY_ERBUTONGHAO]: [],
            [KEY_ERBUTONGHAODANTUO]: [],
        };
    };

    var scheduleCallbacks = function (callbacks, args) {
        for (var i = 0; i < callbacks.length; ++i) {
            var callback = callbacks[i];
            callback.apply(this, args);
        }
    };

    goblin.KuaisanCart = function (ticketPrice) {
        this._list = null;
        this._key2Obj = {};
        this._onRemove = makeOnEvent();
        this._onCheck = makeOnEvent();
        this._onUpdate = makeOnEvent();
        this._ticketPrice = ticketPrice;
    };

    goblin.KuaisanCart.prototype.bindList = function (list) {
        this._list = list;
    };

    goblin.KuaisanCart.prototype.setHezhi = function (hezhis) {
        var newObj;

        if (hezhis == undefined) {
            newObj = undefined;
        } else {
            var tickets = goblin.kuaisan.hezhi(hezhis);
            newObj = {_key: KEY_HEZHI, _tickets: tickets, Numbers: hezhis.join(","), Type: goblin.texts[1006], _rawType: [1006]
                      , Hands: tickets.length.toString() + goblin.texts[1005], Price: (tickets.length * this._ticketPrice).toFixed(goblin.valuePrecision) + " " + goblin.currencyName };
        }

        this._setKey(KEY_HEZHI, newObj);
    };

    goblin.KuaisanCart.prototype.onHezhiRemove = function (callback) {
        this._onRemove[KEY_HEZHI].push(callback);
    }

    goblin.KuaisanCart.prototype.onHezhiCheck = function (callback) {
        this._onCheck[KEY_HEZHI].push(callback);
    }

    goblin.KuaisanCart.prototype.onHezhiUpdate = function (callback) {
        this._onUpdate[KEY_HEZHI].push(callback);
    }

    goblin.KuaisanCart.prototype.setSantonghaodanxuan = function (tonghaos) {
        var newObj;

        if (tonghaos == undefined) {
            newObj = undefined;
        } else {
            var tickets = goblin.kuaisan.santonghaodanxuan(tonghaos);
            newObj = {_key: KEY_SANTONGHAODANXUAN, _tickets: tickets, Numbers: tickets.join(","), Type: goblin.texts[1007], _rawType: [1007]
                      , Hands: tickets.length.toString() + goblin.texts[1005], Price: (tickets.length * this._ticketPrice).toFixed(goblin.valuePrecision) + " " + goblin.currencyName };
        }

        this._setKey(KEY_SANTONGHAODANXUAN, newObj);
    };

    goblin.KuaisanCart.prototype.onSantonghaodanxuanRemove = function (callback) {
        this._onRemove[KEY_SANTONGHAODANXUAN].push(callback);
    }

    goblin.KuaisanCart.prototype.onSantonghaodanxuanCheck = function (callback) {
        this._onCheck[KEY_SANTONGHAODANXUAN].push(callback);
    }

    goblin.KuaisanCart.prototype.onSantonghaodanxuanUpdate = function (callback) {
        this._onUpdate[KEY_SANTONGHAODANXUAN].push(callback);
    }

    goblin.KuaisanCart.prototype.setSantonghaotongxuan = function (onOff) {
        var newObj;

        if (!onOff) {
            newObj = undefined;
        } else {
            var tickets = goblin.kuaisan.santonghaotongxuan();
            newObj = {_key: KEY_SANTONGHAOTONGXUAN, _tickets: tickets, Numbers: tickets.join(","), Type: goblin.texts[1008], _rawType: [1008]
                      , Hands: tickets.length.toString() + goblin.texts[1005], Price: (tickets.length * this._ticketPrice).toFixed(goblin.valuePrecision) + " " + goblin.currencyName };
        }

        this._setKey(KEY_SANTONGHAOTONGXUAN, newObj);
    };

    goblin.KuaisanCart.prototype.onSantonghaotongxuanRemove = function (callback) {
        this._onRemove[KEY_SANTONGHAOTONGXUAN].push(callback);
    }

    goblin.KuaisanCart.prototype.onSantonghaotongxuanCheck = function (callback) {
        this._onCheck[KEY_SANTONGHAOTONGXUAN].push(callback);
    }

    goblin.KuaisanCart.prototype.onSantonghaotongxuanUpdate = function (callback) {
        this._onUpdate[KEY_SANTONGHAOTONGXUAN].push(callback);
    }

    goblin.KuaisanCart.prototype.setErtonghaofuxuan = function (tonghaos) {
        var newObj;

        if (tonghaos == undefined) {
            newObj = undefined;
        } else {
            var tickets = goblin.kuaisan.ertonghaofuxuan(tonghaos);
            var temp = [];

            for (var i = 0; i < tonghaos.length; ++i) {
                temp.push((tonghaos[i] * 11).toString() + "*");
            }

            newObj = {_key: KEY_ERTONGHAOFUXUAN, _tickets: tickets, Numbers: temp.join(","), Type: goblin.texts[1009], _rawType: [1009]
                      , Hands: tickets.length.toString() + goblin.texts[1005], Price: (tickets.length * this._ticketPrice).toFixed(goblin.valuePrecision) + " " + goblin.currencyName };
        }

        this._setKey(KEY_ERTONGHAOFUXUAN, newObj);
    };

    goblin.KuaisanCart.prototype.onErtonghaofuxuanRemove = function (callback) {
        this._onRemove[KEY_ERTONGHAOFUXUAN].push(callback);
    }

    goblin.KuaisanCart.prototype.onErtonghaofuxuanCheck = function (callback) {
        this._onCheck[KEY_ERTONGHAOFUXUAN].push(callback);
    }

    goblin.KuaisanCart.prototype.onErtonghaofuxuanUpdate = function (callback) {
        this._onUpdate[KEY_ERTONGHAOFUXUAN].push(callback);
    }

    goblin.KuaisanCart.prototype.setErtonghaodanxuan = function (tonghaos, butonghaos) {
        var newObj;

        if (tonghaos == undefined || butonghaos == undefined) {
            newObj = undefined;
        } else {
            var tickets = goblin.kuaisan.ertonghaodanxuan(tonghaos, butonghaos);
            newObj = {_key: KEY_ERTONGHAODANXUAN, _tickets: tickets, Numbers: tickets.join(","), Type: goblin.texts[1010], _rawType: [1010]
                      , Hands: tickets.length.toString() + goblin.texts[1005], Price: (tickets.length * this._ticketPrice).toFixed(goblin.valuePrecision) + " " + goblin.currencyName };
        }

        this._setKey(KEY_ERTONGHAODANXUAN, newObj);
    };

    goblin.KuaisanCart.prototype.onErtonghaodanxuanRemove = function (callback) {
        this._onRemove[KEY_ERTONGHAODANXUAN].push(callback);
    }

    goblin.KuaisanCart.prototype.onErtonghaodanxuanCheck = function (callback) {
        this._onCheck[KEY_ERTONGHAODANXUAN].push(callback);
    }

    goblin.KuaisanCart.prototype.onErtonghaodanxuanUpdate = function (callback) {
        this._onUpdate[KEY_ERTONGHAODANXUAN].push(callback);
    }

    goblin.KuaisanCart.prototype.setSanbutonghao = function (butonghaos) {
        var newObj;

        if (butonghaos == undefined) {
            newObj = undefined;
        } else {
            var tickets = goblin.kuaisan.sanbutonghao(butonghaos);
            newObj = {_key: KEY_SANBUTONGHAO, _tickets: tickets, Numbers: tickets.join(","), Type: goblin.texts[1011], _rawType: [1011]
                      , Hands: tickets.length.toString() + goblin.texts[1005], Price: (tickets.length * this._ticketPrice).toFixed(goblin.valuePrecision) + " " + goblin.currencyName };
        }

        this._setKey(KEY_SANBUTONGHAO, newObj);
    };

    goblin.KuaisanCart.prototype.onSanbutonghaoRemove = function (callback) {
        this._onRemove[KEY_SANBUTONGHAO].push(callback);
    }

    goblin.KuaisanCart.prototype.onSanbutonghaoCheck = function (callback) {
        this._onCheck[KEY_SANBUTONGHAO].push(callback);
    }

    goblin.KuaisanCart.prototype.onSanbutonghaoUpdate = function (callback) {
        this._onUpdate[KEY_SANBUTONGHAO].push(callback);
    }

    goblin.KuaisanCart.prototype.setSanbutonghaodantuo = function (butonghaos, dans) {
        var newObj;

        if (butonghaos == undefined) {
            newObj = undefined;
        } else {
            var tickets = goblin.kuaisan.sanbutonghao(butonghaos, dans);
            newObj = {_key: KEY_SANBUTONGHAODANTUO, _tickets: tickets, Numbers: tickets.join(","), Type: goblin.texts[1012], _rawType: [1012]
                      , Hands: tickets.length.toString() + goblin.texts[1005], Price: (tickets.length * this._ticketPrice).toFixed(goblin.valuePrecision) + " " + goblin.currencyName };
        }

        this._setKey(KEY_SANBUTONGHAODANTUO, newObj);
    };

    goblin.KuaisanCart.prototype.onSanbutonghaodantuoRemove = function (callback) {
        this._onRemove[KEY_SANBUTONGHAODANTUO].push(callback);
    }

    goblin.KuaisanCart.prototype.onSanbutonghaodantuoCheck = function (callback) {
        this._onCheck[KEY_SANBUTONGHAODANTUO].push(callback);
    }

    goblin.KuaisanCart.prototype.onSanbutonghaodantuoUpdate = function (callback) {
        this._onUpdate[KEY_SANBUTONGHAODANTUO].push(callback);
    }

    goblin.KuaisanCart.prototype.setSanlianhaotongxuan = function (onOff) {
        var newObj;

        if (!onOff) {
            newObj = undefined;
        } else {
            var tickets = goblin.kuaisan.sanlianhaotongxuan();
            newObj = {_key: KEY_SANLIANHAOTONGXUAN, _tickets: tickets, Numbers: tickets.join(","), Type: goblin.texts[1013], _rawType: [1013]
                      , Hands: tickets.length.toString() + goblin.texts[1005], Price: (tickets.length * this._ticketPrice).toFixed(goblin.valuePrecision) + " " + goblin.currencyName };
        }

        this._setKey(KEY_SANLIANHAOTONGXUAN, newObj);
    };

    goblin.KuaisanCart.prototype.onSanlianhaotongxuanRemove = function (callback) {
        this._onRemove[KEY_SANLIANHAOTONGXUAN].push(callback);
    }

    goblin.KuaisanCart.prototype.onSanlianhaotongxuanCheck = function (callback) {
        this._onCheck[KEY_SANLIANHAOTONGXUAN].push(callback);
    }

    goblin.KuaisanCart.prototype.onSanlianhaotongxuanUpdate = function (callback) {
        this._onUpdate[KEY_SANLIANHAOTONGXUAN].push(callback);
    }

    goblin.KuaisanCart.prototype.setErbutonghao = function (butonghaos) {
        var newObj;

        if (butonghaos == undefined) {
            newObj = undefined;
        } else {
            var tickets = goblin.kuaisan.erbutonghao(butonghaos);
            var temp = [];

            for (var i = 0; i < butonghaos.length; ++i) {
                for (var j = i + 1; j < butonghaos.length; ++j) {
                    var ns = [butonghaos[i], butonghaos[j]].sort();
                    temp.push(ns.join("") + "*");
                }
            }
            newObj = {_key: KEY_ERBUTONGHAO, _tickets: tickets, Numbers: temp.join(","), Type: goblin.texts[1014], _rawType: [1014]
                      , Hands: tickets.length.toString() + goblin.texts[1005], Price: (tickets.length * this._ticketPrice).toFixed(goblin.valuePrecision) + " " + goblin.currencyName };
        }

        this._setKey(KEY_ERBUTONGHAO, newObj);
    };

    goblin.KuaisanCart.prototype.onErbutonghaoRemove = function (callback) {
        this._onRemove[KEY_ERBUTONGHAO].push(callback);
    }

    goblin.KuaisanCart.prototype.onErbutonghaoCheck = function (callback) {
        this._onCheck[KEY_ERBUTONGHAO].push(callback);
    }

    goblin.KuaisanCart.prototype.onErbutonghaoUpdate = function (callback) {
        this._onUpdate[KEY_ERBUTONGHAO].push(callback);
    }

    goblin.KuaisanCart.prototype.setErbutonghaodantuo = function (butonghaos, dan) {
        var newObj;

        if (butonghaos == undefined) {
            newObj = undefined;
        } else {
            var tickets = goblin.kuaisan.erbutonghao(butonghaos, [dan]);
            var temp = [];

            for (var i = 0; i < butonghaos.length; ++i) {
                for (var j = i + 1; j < butonghaos.length; ++j) {
                    var ns = [butonghaos[i], butonghaos[j]].sort();

                    if (ns.indexOf(dan) < 0) {
                        continue;
                    }

                    temp.push(ns.join("") + "*");
                }
            }

            newObj = {_key: KEY_ERBUTONGHAODANTUO, _tickets: tickets, Numbers: temp.join(","), Type: goblin.texts[1015], _rawType: [1015]
                      , Hands: tickets.length.toString() + goblin.texts[1005], Price: (tickets.length * this._ticketPrice).toFixed(goblin.valuePrecision) + " " + goblin.currencyName };
        }

        this._setKey(KEY_ERBUTONGHAODANTUO, newObj);
    };

    goblin.KuaisanCart.prototype.onErbutonghaodantuoRemove = function (callback) {
        this._onRemove[KEY_ERBUTONGHAODANTUO].push(callback);
    }

    goblin.KuaisanCart.prototype.onErbutonghaodantuoCheck = function (callback) {
        this._onCheck[KEY_ERBUTONGHAODANTUO].push(callback);
    }

    goblin.KuaisanCart.prototype.onErbutonghaodantuoUpdate = function (callback) {
        this._onUpdate[KEY_ERBUTONGHAODANTUO].push(callback);
    }

    goblin.KuaisanCart.prototype._setKey = function (key, newObj) {
        var arr = this._list.array;
        var oldObj = this._key2Obj[key];
        var refresh = false;

        if (newObj == undefined) {
            if (oldObj != undefined) {
                var i = arr.indexOf(oldObj);
                arr.splice(i, 1);
                delete this._key2Obj[key];
                refresh = true;
            }
        } else {
            if (oldObj == undefined) {
                arr.push(newObj);
            } else {
                var i = arr.indexOf(oldObj);
                arr[i] = newObj;
            }

            this._key2Obj[key] = newObj;
            refresh = true;
        }

        if (refresh) {
            this._list.array = arr;
            scheduleCallbacks(this._onUpdate[key], [oldObj, newObj]);
        }
    };

    goblin.KuaisanCart.prototype.removeByIndex = function (index) {
        var arr = this._list.array;
        var obj = arr[index];
        scheduleCallbacks(this._onRemove[obj._key]);
    };

    goblin.KuaisanCart.prototype.empty = function () {
        for (var n = this._list.array.length; n >= 1; --n) {
            this.removeByIndex(0);
        }
    };

    goblin.KuaisanCart.prototype.checkByIndex = function (index) {
        var arr = this._list.array;
        var obj = arr[index];
        scheduleCallbacks(this._onCheck[obj._key]);
    };
})();