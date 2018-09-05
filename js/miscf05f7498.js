(function () {
    "use strict";

    var Handler = laya.utils.Handler;
    var Event = laya.events.Event;

    function Loading(message) {
        Loading.super(this);
        this.on(Event.CLICK, this, function () {});

        this.Message.text = message;
    }

    function Tips(message, callback) {
        Tips.super(this);
        this.on(Event.CLICK, this, function () {});

        this.Message.text = message;

        this.BtnOk.on(Event.CLICK, this, function () {
            this.destroy();
            if (callback) callback();
        });
    }

    function Confirm(message, callback) {
        Tips.super(this);
        this.on(Event.CLICK, this, function () {});

        this.Message.text = message;

        this.BtnOk.on(Event.CLICK, this, function () {
            this.destroy();
            if (callback) callback();
        });
        this.BtnNo.on(Event.CLICK, this, function () {
            this.destroy();
        });
    }

    Laya.class(Loading, "Loading", loadingUI);
    Laya.class(Tips, "Tips", tipsUI);
    Laya.class(Confirm, "Confirm", confirmUI);

    goblin.misc = {
        Loading: Loading,
        Tips: Tips,
        Confirm: Confirm,
    };
})();