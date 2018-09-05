(function () {
    "use strict";

    var Handler = laya.utils.Handler;
    var Event = laya.events.Event;

    var addKeystore = function (keystore, username) {
        var json = Laya.LocalStorage.getItem('keystores');
        var keystores = json == undefined ? [] : JSON.parse(json);
        var re = /"address":\s*"([^"]+)"/;
        var address1 = re.exec(keystore)[1];
        var i;
        for (i = 0; i < keystores.length; ++i) {
            var address2 = re.exec(keystores[i])[1];
            if (address1 == address2) break;
        }
        if (i < keystores.length) {
            keystores.splice(i, 1);
        }
        keystores.push(keystore);
        json = JSON.stringify(keystores);
        Laya.LocalStorage.setItem('keystores', json);
        if (username != undefined)
            Laya.LocalStorage.setItem(address1, username);
    };

    var getUserName = function(address) {
        var username = Laya.LocalStorage.getItem(address);
        return username || address;
    }

    var getKeystores = function () {
        var json = Laya.LocalStorage.getItem('keystores');
        var keystores = json == undefined ? [] : JSON.parse(json);
        return keystores;
    };

    function login(keystore, password, username) {
        try {
            var keyObject = JSON.parse(keystore);
        } catch (error) {
            this.parent.addChild(new goblin.misc.Tips(goblin.texts[1027]));
            return;
        }

        addKeystore(keystore, username);
        var privateKey = keythereum.recover(password, keyObject, function (error, privateKey) {
            if (error) {
                this.parent.addChild(new goblin.misc.Tips(goblin.texts[1028]));
            } else {
                goblin.keyObject = keyObject;
                goblin.privateKey = privateKey;
                goblin.newHomeMain(Laya.stage, function () { this.destroy(); }.bind(this));
            }
        }.bind(this));
    }

    function Desc(){
        Desc.super(this);
        this.Desc.text = goblin.texts[1130];
        this.BtnBack.on(Event.CLICK, this, function () {
            this.destroy();
        });
    }

    function QuickLogin(keystores) {
        QuickLogin.super(this);

        var addresses = [];
        var re = /"address":\s*"([^"]+)"/;
        for (var i = keystores.length - 1; i >= 0; --i) {
            addresses.push(getUserName(re.exec(keystores[i])[1]));
        }
        this.Addresses.labels = addresses.join(",");
        this.Addresses.selectedIndex = 0;

        this.WalletPassword.on(Event.INPUT, this, function () {
            this.BtnLogin.disabled = this.WalletPassword.text.length == 0;
        });

        this.BtnLogin.on(Event.CLICK, this, function () {
            var keystore = keystores[keystores.length - this.Addresses.selectedIndex - 1];
            login.call(this, keystore, this.WalletPassword.text);
        });

        this.BtnSwitch.on(Event.CLICK, this, function () {
            var keystore = keystores[keystores.length - this.Addresses.selectedIndex - 1];
            this.parent.addChild(new Login(keystore));
            this.destroy();
        });

        this.BtnReadme.on(Even.CLICK, this, function() {
            this.parent.addChild(new Desc());
        });
    }

    function Login(keystore) {
        Login.super(this);

        if (keystore != undefined) {
            this.WalletKeystore.text = keystore;
        }

        this.BtnLogin.disabled = this.WalletKeystore.text.length * this.WalletPassword.text.length == 0;

        this.WalletPassword.on(Event.INPUT, this, function () {
            this.BtnLogin.disabled = this.WalletKeystore.text.length * this.WalletPassword.text.length == 0;
        });

        this.WalletKeystore.on(Event.INPUT, this, function () {
            this.BtnLogin.disabled = this.WalletKeystore.text.length * this.WalletPassword.text.length == 0;
        });

        this.BtnLogin.on(Event.CLICK, this, function () {

            if (this.WalletUserName.text.length < 3) {
                this.parent.addChild(new goblin.misc.Tips(goblin.texts[1129]));
                return;
            }

            login.call(this, this.WalletKeystore.text, this.WalletPassword.text, this.WalletUserName.text);
        });

        this.BtnCreate.on(Event.CLICK, this, function () {
            this.parent.addChild(new Create(keystore));
            this.destroy();
        });
    }

    function isPasswd(s) {
        var patrn = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
        if (!patrn.exec(s)) return false
        return true
    }    

    function Create(keystore) {
        Create.super(this);
        // this.BtnCreate.disabled = true;

        this.WalletPassword.on(Event.INPUT, this, function () {
            // this.BtnCreate.disabled = this.WalletPassword.text.length < 3;
        });

        this.BtnCreate.on(Event.CLICK, this, function () {
            if (this.WalletUserName.text.length < 3) {
                this.parent.addChild(new goblin.misc.Tips(goblin.texts[1129]));
                return;
            }

            if (!isPasswd(this.WalletPassword.text)) {
                this.parent.addChild(new goblin.misc.Tips(goblin.texts[1128]));
                return;
            }

            var params = { keyBytes: 32, ivBytes: 16 };

            keythereum.create(params, function (dk) {
                var options = {
                    kdf: "pbkdf2",
                    cipher: "aes-128-ctr",
                    kdfparams: {
                        c: 65536,
                        dklen: 32,
                        prf: "hmac-sha256"
                    }
                };

                var password = this.WalletPassword.text;
                goblin.userName = this.WalletUserName.text;

                keythereum.dump(password, dk.privateKey, dk.salt, dk.iv, options, function (keyObject) {
                    goblin.keyObject = keyObject;
                    goblin.privateKey = dk.privateKey;
                    var keystore = JSON.stringify(keyObject)
                    addKeystore(keystore, goblin.userName);
                    this.parent.addChild(new CreateSuccess(keystore));
                    this.destroy();
                }.bind(this));
            }.bind(this));
        });

        this.BtnChange.on(Event.CLICK, this, function () {
            this.parent.addChild(new Login(keystore));
            this.destroy();
        });
    }

    function CreateSuccess(keystore) {
        CreateSuccess.super(this);

        this.AccountInfo.text = keystore;

        this.BtnCopy.on(Event.CLICK, this, function () {
            goblin.util.copyToClipboard(this.AccountInfo.text);
        });

        this.BtnLogin.on(Event.CLICK, this, function () {
            goblin.newHomeMain(Laya.stage, function () { this.destroy(); }.bind(this));
        });
    }

    Laya.class(QuickLogin, "QuickLogin", QuickLoginUI);
    Laya.class(Login, "Login", LoginUI);
    Laya.class(Create, "Create", CreateUI);
    Laya.class(CreateSuccess, "CreateSuccess", CreateSuccessUI);

    goblin.newLoginMain = function (parent) {
        var keystores = getKeystores();

        if (keystores.length == 0) {
            parent.addChild(new Create());
        } else {
            parent.addChild(new QuickLogin(keystores));
        }
    };
})();