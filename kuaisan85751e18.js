if (typeof __GAME_ENTRY__ !== "undefined") goblin.kuaisan = new (function () {
    "use strict";

    var CODE_2_NUMBER = [
        111, 112, 113, 114, 115, 116, 122, 123, 124, 125,
        126, 133, 134, 135, 136, 144, 145, 146, 155, 156,
        166, 222, 223, 224, 225, 226, 233, 234, 235, 236,
        244, 245, 246, 255, 256, 266, 333, 334, 335, 336,
        344, 345, 346, 355, 356, 366, 444, 445, 446, 455,
        456, 466, 555, 556, 566, 666
    ];

    var NUMBER_2_CODE = (function () {
        var number_2_code = {};

        for (var code = 0; code < CODE_2_NUMBER.length; ++code) {
            var number = CODE_2_NUMBER[code];
            number_2_code[number] = code;
        }

        return number_2_code;
    })();

    var CODE_2_WEIGHT = [
        1, 3, 3, 3, 3, 3, 3, 6, 6, 6,
        6, 3, 6, 6, 6, 3, 6, 6, 3, 6,
        3, 1, 3, 3, 3, 3, 3, 6, 6, 6,
        3, 6, 6, 3, 6, 3, 1, 3, 3, 3,
        3, 6, 6, 3, 6, 3, 1, 3, 3, 3,
        6, 3, 1, 3, 3, 1
    ];

    var NO_CODE = 255; // end of ticket

    var make_number = function (x, y, z) {
        if (y < x) { var t = x; x = y; y = t; }
        if (z < x) { var t = x; x = z; z = t; }
        if (z < y) { var t = y; y = z; z = t; }
        var number = x * 100 + y * 10 + z;
        return number;
    };

    var make_numbers = function (x, y) {
        var z;
        var numbers = [];

        if (y == undefined) {
            for (y = 1; y < x; ++y) {
                for (z = y; z < x; ++z) {
                    var number = y * 100 + z * 10 + x;
                    numbers.push(number);
                }
            }

            for (y = 1; y < x; ++y) {
                for (z = x; z < 7; ++z) {
                    var number = y * 100 + x * 10 + z;
                    numbers.push(number);
                }
            }

            for (y = x; y < 7; ++y) {
                for (z = y; z < 7; ++z) {
                    var number = x * 100 + y * 10 + z;
                    numbers.push(number);
                }
            }
        } else {
            if (y < x) { var t = x; x = y; y = t; }

            for (z = 1; z < x; ++z) {
                var number = z * 100 + x * 10 + y;
                numbers.push(number);
            }

            for (z = x; z < y; ++z) {
                var number = x * 100 + z * 10 + y;
                numbers.push(number);
            }

            for (z = y; z < 7; ++z) {
                var number = x * 100 + y * 10 + z;
                numbers.push(number);
            }
        }

        return numbers;
    };

    // 和值
    // @hezhis: 指定和值
    var hezhi = function (hezhis) {
        var tickets = [];

        for (var i = 0; i < hezhis.length; ++i) {
            var hezhi_ = hezhis[i];
            var ticket = [];

            for (var x = 1; x < 7; ++x) {
                for (var y = x; y < 7; ++y) {
                    for (var z = y; z < 7; ++z) {
                        if (x + y + z == hezhi_) {
                            var number = x * 100 + y * 10 + z;
                            ticket.push(number);
                        }
                    }
                }
            }

            tickets.push(ticket);
        }

        return tickets
    };

    // 三同号通选
    var santonghaotongxuan = function () {
        return [[111, 222, 333, 444, 555, 666]];
    };

    // 三同号单选
    // @tonghaos: 指定同号
    var santonghaodanxuan = function (tonghaos) {
        var tickets = [];
        
        for (var i = 0; i < tonghaos.length; ++i) {
            var tonghao = tonghaos[i];
            tickets.push([make_number(tonghao, tonghao, tonghao)]);
        }

        return tickets;
    };

    // 二同号复选
    // @tonghaos: 指定同号
    var ertonghaofuxuan = function (tonghaos) {
        var tickets = [];

        for (var i = 0; i < tonghaos.length; ++i) {
            var tonghao = tonghaos[i];
            tickets.push(make_numbers(tonghao, tonghao));
        }

        return tickets;
    };

    // 二同号单选
    // @tonghaos: 指定同号
    // @butonghaos: 指定不同号
    var ertonghaodanxuan = function (tonghaos, butonghaos) {
        var tickets = [];

        for (var i = 0; i < tonghaos.length; ++i) {
            var tonghao = tonghaos[i];

            for (var j = 0; j < butonghaos.length; ++j) {
                var butonghao = butonghaos[j];
                tickets.push([make_number(tonghao, tonghao, butonghao)]);
            }
        }

        return tickets;
    };

    // 三不同号
    // @butonghaos: 指定不同号
    // @dans: 定胆（undefined为不定胆）
    var sanbutonghao = function (butonghaos, dans) {
        var tickets = [];

        for (var i = 0; i < butonghaos.length - 2; ++i) {
            for (var j = i + 1; j < butonghaos.length - 1; ++j) {
                for (var k = j + 1; k < butonghaos.length; ++k) {
                    var x = butonghaos[i];
                    var y = butonghaos[j];
                    var z = butonghaos[k];

                    if (dans != undefined) {
                        var skip = false;

                        for (var l = 0; l < dans.length; ++l) {
                            var dan = dans[l];

                            if (dan != x && dan != y && dan != z) {
                                skip = true;
                                break;
                            }
                        }

                        if (skip) {
                            continue;
                        }
                    }

                    tickets.push([make_number(x, y, z)]);
                }
            }
        }

        return tickets;
    };

    // 二不同号
    // @butonghaos: 指定不同号
    // @dans: 定胆（undefined为不定胆）
    var erbutonghao = function (butonghaos, dans) {
        var tickets = [];

        for (var i = 0; i < butonghaos.length - 1; ++i) {
            for (var j = i + 1; j < butonghaos.length; ++j) {
                var x = butonghaos[i];
                var y = butonghaos[j];

                if (dans != undefined) {
                    var skip = false;

                    for (var l = 0; l < dans.length; ++l) {
                        var dan = dans[l];

                        if (dan != x && dan != y) {
                            skip = true;
                            break;
                        }
                    }

                    if (skip) {
                        continue;
                    }
                }

                tickets.push(make_numbers(x, y));
            }
        }

        return tickets;
    };

    // 三连号通选
    var sanlianhaotongxuan = function() {
        return [[123, 234, 345, 456]];
    };

    // 任意选号
    // @xuanhao: 指定选号
    var renyixuanhao = function (xuanhao) {
        return [make_numbers(xuanhao)];
    };

    var fix_ticket_counts = function (number_of_tickets, ticket_counts) {
        var default_ticket_count;

        if (ticket_counts == undefined) {
            default_ticket_count = 1;
            ticket_counts = [];
        } else {
            if (typeof(ticket_counts) == "number") {
                default_ticket_count = ticket_counts;
                ticket_counts = [];
            } else {
                default_ticket_count = 1;
            }
        }

        for (var i = ticket_counts.length; i < number_of_tickets; ++i) {
            ticket_counts.push(default_ticket_count);
        }

        return ticket_counts;
    }

    var dump_ticket_bundle = function (tickets, ticket_counts) {
        ticket_counts = fix_ticket_counts(tickets.length, ticket_counts);

        var raw_ticket_bundle = [];

        for (var i = 0; i < tickets.length; ++i) {
            var ticket_count = ticket_counts[i];
            raw_ticket_bundle.push(ticket_count)
            var ticket = tickets[i];

            for (var j = 0; j < ticket.length; ++j) {
                var number = ticket[j];
                var code = NUMBER_2_CODE[number];
                raw_ticket_bundle.push(code);
            }

            raw_ticket_bundle.push(NO_CODE);
        }

        return raw_ticket_bundle;
    };

    var load_ticket_bundle = function (raw_ticket_bundle) {
        var tickets = [];
        var ticket_counts = [];
        var ticket;

        for (var i = 0, j = 0; j < raw_ticket_bundle.length; ++j) {
            var code = raw_ticket_bundle[j];

            if (code == NO_CODE) {
                tickets.push(ticket);
                i = j + 1;
            } else {
                if (j == i) {
                    ticket_counts.push(code);
                    ticket = [];
                } else {
                    var number = CODE_2_NUMBER[code];
                    ticket.push(number);
                }
            }
        }

        return [tickets, ticket_counts];
    };

    var calculate_input = function (ticket_price, number_of_tickets, ticket_counts) {
        ticket_counts = fix_ticket_counts(number_of_tickets, ticket_counts);
        var input = 0;

        for (var i = 0; i < ticket_counts.length; ++i) {
            var ticket_count = ticket_counts[i];
            input += ticket_count * ticket_price;
        }

        return input;
    };

    var calculate_output = function (ticket_price, odds, tickets, ticket_counts) {
        ticket_counts = fix_ticket_counts(tickets.length, ticket_counts);
        var code_2_output = {};

        for (var i = 0; i < tickets.length; ++i) {
            var ticket_count = ticket_counts[i];
            var ticket = tickets[i];
            var codes = [];
            var code_count = 0;

            for (var j = 0; j < ticket.length; ++j) {
                var number = ticket[j];
                var code = NUMBER_2_CODE[number];
                var code_weight = CODE_2_WEIGHT[code];
                codes.push(code);
                code_count += code_weight;
            }

            var output = (ticket_count * ticket_price * odds) / code_count;

            for (var j = 0; j < codes.length; ++j) {
                var code = codes[j];

                if (code_2_output[code] == undefined) {
                    code_2_output[code] = output;
                } else {
                    code_2_output[code] += output;
                }
            }
        }

        var output_min = Number.MAX_VALUE;
        var output_max = Number.MIN_VALUE;

        for (var code in code_2_output) {
            var output = code_2_output[code];

            if (output < output_min) {
                output_min = output;
            }

            if (output > output_max) {
                output_max = output;
            }
        }

        return [output_min, output_max];
    };

    this.NO_CODE = NO_CODE;

    this.hezhi = hezhi;
    this.santonghaotongxuan = santonghaotongxuan;
    this.santonghaodanxuan = santonghaodanxuan;
    this.ertonghaofuxuan = ertonghaofuxuan;
    this.ertonghaodanxuan = ertonghaodanxuan;
    this.sanbutonghao = sanbutonghao;
    this.erbutonghao = erbutonghao;
    this.sanlianhaotongxuan = sanlianhaotongxuan;
    this.renyixuanhao = renyixuanhao;

    this.dump_ticket_bundle = dump_ticket_bundle;
    this.load_ticket_bundle = load_ticket_bundle;
    this.calculate_input = calculate_input;
    this.calculate_output = calculate_output;

    this.code_2_number = function (code) { return CODE_2_NUMBER[code]; };
    this.code_2_weight = function (code) { return CODE_2_WEIGHT[code]; };
    this.number_2_code = function (number) { return NUMBER_2_CODE[number]; };
})();
