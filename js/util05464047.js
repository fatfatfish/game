goblin.util = new (function () {
    "use strict";

    this.gasPriceScale = function(price) {
        //return price.dividedBy(1);
        if (price.lessThen(10000000000)) price = price.multipliedBy(2);
        // 大于10GWei按10GWei算
        if (price.greaterThan(10000000000)) return new web3.BigNumber(10000000000);
        return price;
    }

    this.randomBetween = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    this.secondsToHHMMSS = function (sec_num) {
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours+':'+minutes+':'+seconds;
    };

    this.buildTxParams = function (txParams, privateKey) {
        return (new Promise(function (resolve, reject) {
            txParams.from = "0x" + ethereumjs.Util.privateToAddress(privateKey).toString("hex");

            web3.eth.getTransactionCount(txParams.from, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    txParams.nonce = result;
                    resolve();
                }
            });
        })).then(function () {
            return new Promise(function(resolve, reject) {
                web3.eth.getGasPrice(function (error, result) {
                    if (error) {
                        reject(error);
                    } else {
                        txParams.gasPrice = goblin.util.gasPriceScale(result);
                        console.log("gas price = " + txParams.gasPrice.toString());
                        resolve();
                    }
                });
            });
        }).then(function () {
            return new Promise(function(resolve, reject) {
                web3.eth.estimateGas(txParams, function (error, result) {
                    if (error) {
                        reject(error);
                    } else {
                        txParams.gasLimit = new web3.BigNumber(result);
                        resolve();
                    }
                });
            });
        });
    };

    var sendTransaction = function (txParams, privateKey) {
        return (new Promise(function (resolve, reject) {
            if (txParams.nonce != undefined) {
                txParams.nonce = web3.toHex(txParams.nonce.toString());
            }

            if (txParams.gasPrice != undefined) {
                txParams.gasPrice = web3.toHex(txParams.gasPrice.toString());
            }

            if (txParams.gasLimit != undefined) {
                txParams.gasLimit = web3.toHex(txParams.gasLimit.mul(2).toString());
            }

            if (txParams.value != undefined) {
                txParams.value = web3.toHex(txParams.value.toString());
            }

            var tx = new ethereumjs.Tx(txParams);
            tx.sign(privateKey);

            web3.eth.sendRawTransaction("0x" + tx.serialize().toString("hex"), function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        }));
    };

    this.sendTransaction = sendTransaction;

    var getTransactionReceipt = function (transactionHash, gasLimit) {
        return (new Promise(function (resolve, reject) {
            var callback = function () {
                web3.eth.getTransactionReceipt(transactionHash, function (error, result) {
                    if (error) {
                        if (error.message == "unknown transaction") {
                            setTimeout(callback, 1000);
                            return;
                        }

                        reject(error);
                    } else {
                        if (!result) {
                            setTimeout(callback, 1000);
                            return;
                        }

                        if (new web3.BigNumber(result.gasUsed).eq(gasLimit)) {
                            reject(Error("unknown error"));
                        } else {
                            resolve(transactionHash);
                        }
                    }
                });
            };

            callback();
        }));
    };

    this.getTransactionReceipt = getTransactionReceipt;

    this.sendTransactionAndGetReceipt = function (txParams, privateKey) {
        return sendTransaction(txParams, privateKey).then(function (transactionHash) {
            return getTransactionReceipt(transactionHash, txParams.gasLimit);
        });
    };

    this.makeText = function (args) {
        if (typeof(args) == "string") {
            return args;
        }

        var textID = args[0];
        var formatArgs = Array.prototype.slice.call(args, 1);
        return String.prototype.format.apply(goblin.texts[textID], formatArgs);
    };

    this.padNumber = function (n, p, w) {
        return (p.repeat(w) + n.toString()).slice(-w);
    };

    this.copyToClipboard = function (text) {
        var textToCopy = document.getElementById("text-to-copy");
                textToCopy.textContent = text;
        var copyHelper = document.getElementById("copy-helper");
                copyHelper.style.display = "inherit";
    };
    this.uint256ToHash = function (uint256) {
        var hash = web3.toHex(uint256);
        hash = hash.substring(0, 2) + "0".repeat(66 - hash.length) + hash.substring(2);
        return hash;
    };
    this.uint256ToAddress = function (uint256) {
        var addr = web3.toHex(uint256);
        addr = addr.substring(0, 2) + "0".repeat(42 - addr.length) + addr.substring(2);
        return addr;
    };
    this.drawQRCode = function (text, image) {
        var qrCode = new QRCode(
            Laya.Browser.document.createElement("div"),
            {
                width: image.width,
                height: image.height,
            }
        );
        qrCode.makeCode(text);
        var intervalID = setInterval(function () {
            var data = qrCode._oDrawing._elImage.src;
            if (!data) return;
            clearInterval(intervalID);
            image.loadImage(data);
        }.bind(this), 100);
    };
    this.displayTransactionError = function (error, parent) {
        switch (error.message) {
            case "replacement transaction underpriced":
                parent.addChild(new goblin.misc.Tips(goblin.texts[1045]));
                break;
            case "insufficient funds for gas * price + value":
                parent.addChild(new goblin.misc.Tips(goblin.texts[1124]));
                break;
            case "unknown error":
            case "gas required exceeds allowance or always failing transaction":
                parent.addChild(new goblin.misc.Tips(goblin.texts[1125]));
                break;
            default:
                alert("Error: " + error.message);
        }
    };
})();
