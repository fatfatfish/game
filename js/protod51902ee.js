/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.ballgameBetting = (function() {
    
        /**
         * Namespace ballgameBetting.
         * @exports ballgameBetting
         * @namespace
         */
        var ballgameBetting = {};
    
        ballgameBetting.Match = (function() {
    
            /**
             * Properties of a Match.
             * @memberof ballgameBetting
             * @interface IMatch
             * @property {number} league_id Match league_id
             * @property {number} team1_id Match team1_id
             * @property {number} team2_id Match team2_id
             */
    
            /**
             * Constructs a new Match.
             * @memberof ballgameBetting
             * @classdesc Represents a Match.
             * @implements IMatch
             * @constructor
             * @param {ballgameBetting.IMatch=} [properties] Properties to set
             */
            function Match(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Match league_id.
             * @member {number} league_id
             * @memberof ballgameBetting.Match
             * @instance
             */
            Match.prototype.league_id = 0;
    
            /**
             * Match team1_id.
             * @member {number} team1_id
             * @memberof ballgameBetting.Match
             * @instance
             */
            Match.prototype.team1_id = 0;
    
            /**
             * Match team2_id.
             * @member {number} team2_id
             * @memberof ballgameBetting.Match
             * @instance
             */
            Match.prototype.team2_id = 0;
    
            /**
             * Creates a new Match instance using the specified properties.
             * @function create
             * @memberof ballgameBetting.Match
             * @static
             * @param {ballgameBetting.IMatch=} [properties] Properties to set
             * @returns {ballgameBetting.Match} Match instance
             */
            Match.create = function create(properties) {
                return new Match(properties);
            };
    
            /**
             * Encodes the specified Match message. Does not implicitly {@link ballgameBetting.Match.verify|verify} messages.
             * @function encode
             * @memberof ballgameBetting.Match
             * @static
             * @param {ballgameBetting.IMatch} message Match message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Match.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.league_id);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.team1_id);
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.team2_id);
                return writer;
            };
    
            /**
             * Encodes the specified Match message, length delimited. Does not implicitly {@link ballgameBetting.Match.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ballgameBetting.Match
             * @static
             * @param {ballgameBetting.IMatch} message Match message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Match.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Match message from the specified reader or buffer.
             * @function decode
             * @memberof ballgameBetting.Match
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ballgameBetting.Match} Match
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Match.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ballgameBetting.Match();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.league_id = reader.uint32();
                        break;
                    case 2:
                        message.team1_id = reader.uint32();
                        break;
                    case 3:
                        message.team2_id = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("league_id"))
                    throw $util.ProtocolError("missing required 'league_id'", { instance: message });
                if (!message.hasOwnProperty("team1_id"))
                    throw $util.ProtocolError("missing required 'team1_id'", { instance: message });
                if (!message.hasOwnProperty("team2_id"))
                    throw $util.ProtocolError("missing required 'team2_id'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a Match message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ballgameBetting.Match
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ballgameBetting.Match} Match
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Match.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Match message.
             * @function verify
             * @memberof ballgameBetting.Match
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Match.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.league_id))
                    return "league_id: integer expected";
                if (!$util.isInteger(message.team1_id))
                    return "team1_id: integer expected";
                if (!$util.isInteger(message.team2_id))
                    return "team2_id: integer expected";
                return null;
            };
    
            /**
             * Creates a Match message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ballgameBetting.Match
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ballgameBetting.Match} Match
             */
            Match.fromObject = function fromObject(object) {
                if (object instanceof $root.ballgameBetting.Match)
                    return object;
                var message = new $root.ballgameBetting.Match();
                if (object.league_id != null)
                    message.league_id = object.league_id >>> 0;
                if (object.team1_id != null)
                    message.team1_id = object.team1_id >>> 0;
                if (object.team2_id != null)
                    message.team2_id = object.team2_id >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Match message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ballgameBetting.Match
             * @static
             * @param {ballgameBetting.Match} message Match
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Match.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.league_id = 0;
                    object.team1_id = 0;
                    object.team2_id = 0;
                }
                if (message.league_id != null && message.hasOwnProperty("league_id"))
                    object.league_id = message.league_id;
                if (message.team1_id != null && message.hasOwnProperty("team1_id"))
                    object.team1_id = message.team1_id;
                if (message.team2_id != null && message.hasOwnProperty("team2_id"))
                    object.team2_id = message.team2_id;
                return object;
            };
    
            /**
             * Converts this Match to JSON.
             * @function toJSON
             * @memberof ballgameBetting.Match
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Match.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Match;
        })();
    
        /**
         * BettingType enum.
         * @name ballgameBetting.BettingType
         * @enum {string}
         * @property {number} WIN_LOSE_DRAW=0 WIN_LOSE_DRAW value
         * @property {number} ODD_EVEN=1 ODD_EVEN value
         * @property {number} SCORES=2 SCORES value
         */
        ballgameBetting.BettingType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "WIN_LOSE_DRAW"] = 0;
            values[valuesById[1] = "ODD_EVEN"] = 1;
            values[valuesById[2] = "SCORES"] = 2;
            return values;
        })();
    
        ballgameBetting.Betting = (function() {
    
            /**
             * Properties of a Betting.
             * @memberof ballgameBetting
             * @interface IBetting
             * @property {ballgameBetting.BettingType} type Betting type
             */
    
            /**
             * Constructs a new Betting.
             * @memberof ballgameBetting
             * @classdesc Represents a Betting.
             * @implements IBetting
             * @constructor
             * @param {ballgameBetting.IBetting=} [properties] Properties to set
             */
            function Betting(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Betting type.
             * @member {ballgameBetting.BettingType} type
             * @memberof ballgameBetting.Betting
             * @instance
             */
            Betting.prototype.type = 0;
    
            /**
             * Creates a new Betting instance using the specified properties.
             * @function create
             * @memberof ballgameBetting.Betting
             * @static
             * @param {ballgameBetting.IBetting=} [properties] Properties to set
             * @returns {ballgameBetting.Betting} Betting instance
             */
            Betting.create = function create(properties) {
                return new Betting(properties);
            };
    
            /**
             * Encodes the specified Betting message. Does not implicitly {@link ballgameBetting.Betting.verify|verify} messages.
             * @function encode
             * @memberof ballgameBetting.Betting
             * @static
             * @param {ballgameBetting.IBetting} message Betting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Betting.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                return writer;
            };
    
            /**
             * Encodes the specified Betting message, length delimited. Does not implicitly {@link ballgameBetting.Betting.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ballgameBetting.Betting
             * @static
             * @param {ballgameBetting.IBetting} message Betting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Betting.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Betting message from the specified reader or buffer.
             * @function decode
             * @memberof ballgameBetting.Betting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ballgameBetting.Betting} Betting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Betting.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ballgameBetting.Betting();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("type"))
                    throw $util.ProtocolError("missing required 'type'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a Betting message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ballgameBetting.Betting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ballgameBetting.Betting} Betting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Betting.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Betting message.
             * @function verify
             * @memberof ballgameBetting.Betting
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Betting.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
                return null;
            };
    
            /**
             * Creates a Betting message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ballgameBetting.Betting
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ballgameBetting.Betting} Betting
             */
            Betting.fromObject = function fromObject(object) {
                if (object instanceof $root.ballgameBetting.Betting)
                    return object;
                var message = new $root.ballgameBetting.Betting();
                switch (object.type) {
                case "WIN_LOSE_DRAW":
                case 0:
                    message.type = 0;
                    break;
                case "ODD_EVEN":
                case 1:
                    message.type = 1;
                    break;
                case "SCORES":
                case 2:
                    message.type = 2;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Betting message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ballgameBetting.Betting
             * @static
             * @param {ballgameBetting.Betting} message Betting
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Betting.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.type = options.enums === String ? "WIN_LOSE_DRAW" : 0;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.ballgameBetting.BettingType[message.type] : message.type;
                return object;
            };
    
            /**
             * Converts this Betting to JSON.
             * @function toJSON
             * @memberof ballgameBetting.Betting
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Betting.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Betting;
        })();
    
        /**
         * WinLoseDraw enum.
         * @name ballgameBetting.WinLoseDraw
         * @enum {string}
         * @property {number} WIN=0 WIN value
         * @property {number} LOSE=1 LOSE value
         * @property {number} DRAW=2 DRAW value
         */
        ballgameBetting.WinLoseDraw = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "WIN"] = 0;
            values[valuesById[1] = "LOSE"] = 1;
            values[valuesById[2] = "DRAW"] = 2;
            return values;
        })();
    
        /**
         * OddEven enum.
         * @name ballgameBetting.OddEven
         * @enum {string}
         * @property {number} ODD=0 ODD value
         * @property {number} EVEN=1 EVEN value
         */
        ballgameBetting.OddEven = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ODD"] = 0;
            values[valuesById[1] = "EVEN"] = 1;
            return values;
        })();
    
        /**
         * Scores enum.
         * @name ballgameBetting.Scores
         * @enum {string}
         * @property {number} SCORES_0V0=0 SCORES_0V0 value
         * @property {number} SCORES_0V1=1 SCORES_0V1 value
         * @property {number} SCORES_1V0=2 SCORES_1V0 value
         * @property {number} SCORES_0V2=3 SCORES_0V2 value
         * @property {number} SCORES_2V0=4 SCORES_2V0 value
         * @property {number} SCORES_1V1=5 SCORES_1V1 value
         * @property {number} SCORES_1V2=6 SCORES_1V2 value
         * @property {number} SCORES_2V1=7 SCORES_2V1 value
         * @property {number} SCORES_2V2=8 SCORES_2V2 value
         * @property {number} SCORES_WIN=9 SCORES_WIN value
         * @property {number} SCORES_LOSE=10 SCORES_LOSE value
         * @property {number} SCORES_DRAW=11 SCORES_DRAW value
         */
        ballgameBetting.Scores = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SCORES_0V0"] = 0;
            values[valuesById[1] = "SCORES_0V1"] = 1;
            values[valuesById[2] = "SCORES_1V0"] = 2;
            values[valuesById[3] = "SCORES_0V2"] = 3;
            values[valuesById[4] = "SCORES_2V0"] = 4;
            values[valuesById[5] = "SCORES_1V1"] = 5;
            values[valuesById[6] = "SCORES_1V2"] = 6;
            values[valuesById[7] = "SCORES_2V1"] = 7;
            values[valuesById[8] = "SCORES_2V2"] = 8;
            values[valuesById[9] = "SCORES_WIN"] = 9;
            values[valuesById[10] = "SCORES_LOSE"] = 10;
            values[valuesById[11] = "SCORES_DRAW"] = 11;
            return values;
        })();
    
        ballgameBetting.BettingResult = (function() {
    
            /**
             * Properties of a BettingResult.
             * @memberof ballgameBetting
             * @interface IBettingResult
             * @property {ballgameBetting.WinLoseDraw|null} [win_lose_draw] BettingResult win_lose_draw
             * @property {ballgameBetting.OddEven|null} [odd_even] BettingResult odd_even
             * @property {ballgameBetting.Scores|null} [scores] BettingResult scores
             */
    
            /**
             * Constructs a new BettingResult.
             * @memberof ballgameBetting
             * @classdesc Represents a BettingResult.
             * @implements IBettingResult
             * @constructor
             * @param {ballgameBetting.IBettingResult=} [properties] Properties to set
             */
            function BettingResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * BettingResult win_lose_draw.
             * @member {ballgameBetting.WinLoseDraw} win_lose_draw
             * @memberof ballgameBetting.BettingResult
             * @instance
             */
            BettingResult.prototype.win_lose_draw = 0;
    
            /**
             * BettingResult odd_even.
             * @member {ballgameBetting.OddEven} odd_even
             * @memberof ballgameBetting.BettingResult
             * @instance
             */
            BettingResult.prototype.odd_even = 0;
    
            /**
             * BettingResult scores.
             * @member {ballgameBetting.Scores} scores
             * @memberof ballgameBetting.BettingResult
             * @instance
             */
            BettingResult.prototype.scores = 0;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * BettingResult value.
             * @member {"win_lose_draw"|"odd_even"|"scores"|undefined} value
             * @memberof ballgameBetting.BettingResult
             * @instance
             */
            Object.defineProperty(BettingResult.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["win_lose_draw", "odd_even", "scores"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new BettingResult instance using the specified properties.
             * @function create
             * @memberof ballgameBetting.BettingResult
             * @static
             * @param {ballgameBetting.IBettingResult=} [properties] Properties to set
             * @returns {ballgameBetting.BettingResult} BettingResult instance
             */
            BettingResult.create = function create(properties) {
                return new BettingResult(properties);
            };
    
            /**
             * Encodes the specified BettingResult message. Does not implicitly {@link ballgameBetting.BettingResult.verify|verify} messages.
             * @function encode
             * @memberof ballgameBetting.BettingResult
             * @static
             * @param {ballgameBetting.IBettingResult} message BettingResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BettingResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.win_lose_draw != null && message.hasOwnProperty("win_lose_draw"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.win_lose_draw);
                if (message.odd_even != null && message.hasOwnProperty("odd_even"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.odd_even);
                if (message.scores != null && message.hasOwnProperty("scores"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.scores);
                return writer;
            };
    
            /**
             * Encodes the specified BettingResult message, length delimited. Does not implicitly {@link ballgameBetting.BettingResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ballgameBetting.BettingResult
             * @static
             * @param {ballgameBetting.IBettingResult} message BettingResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BettingResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a BettingResult message from the specified reader or buffer.
             * @function decode
             * @memberof ballgameBetting.BettingResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ballgameBetting.BettingResult} BettingResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BettingResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ballgameBetting.BettingResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.win_lose_draw = reader.int32();
                        break;
                    case 2:
                        message.odd_even = reader.int32();
                        break;
                    case 3:
                        message.scores = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a BettingResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ballgameBetting.BettingResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ballgameBetting.BettingResult} BettingResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BettingResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a BettingResult message.
             * @function verify
             * @memberof ballgameBetting.BettingResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BettingResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.win_lose_draw != null && message.hasOwnProperty("win_lose_draw")) {
                    properties.value = 1;
                    switch (message.win_lose_draw) {
                    default:
                        return "win_lose_draw: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                }
                if (message.odd_even != null && message.hasOwnProperty("odd_even")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    switch (message.odd_even) {
                    default:
                        return "odd_even: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                }
                if (message.scores != null && message.hasOwnProperty("scores")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    switch (message.scores) {
                    default:
                        return "scores: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                        break;
                    }
                }
                return null;
            };
    
            /**
             * Creates a BettingResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ballgameBetting.BettingResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ballgameBetting.BettingResult} BettingResult
             */
            BettingResult.fromObject = function fromObject(object) {
                if (object instanceof $root.ballgameBetting.BettingResult)
                    return object;
                var message = new $root.ballgameBetting.BettingResult();
                switch (object.win_lose_draw) {
                case "WIN":
                case 0:
                    message.win_lose_draw = 0;
                    break;
                case "LOSE":
                case 1:
                    message.win_lose_draw = 1;
                    break;
                case "DRAW":
                case 2:
                    message.win_lose_draw = 2;
                    break;
                }
                switch (object.odd_even) {
                case "ODD":
                case 0:
                    message.odd_even = 0;
                    break;
                case "EVEN":
                case 1:
                    message.odd_even = 1;
                    break;
                }
                switch (object.scores) {
                case "SCORES_0V0":
                case 0:
                    message.scores = 0;
                    break;
                case "SCORES_0V1":
                case 1:
                    message.scores = 1;
                    break;
                case "SCORES_1V0":
                case 2:
                    message.scores = 2;
                    break;
                case "SCORES_0V2":
                case 3:
                    message.scores = 3;
                    break;
                case "SCORES_2V0":
                case 4:
                    message.scores = 4;
                    break;
                case "SCORES_1V1":
                case 5:
                    message.scores = 5;
                    break;
                case "SCORES_1V2":
                case 6:
                    message.scores = 6;
                    break;
                case "SCORES_2V1":
                case 7:
                    message.scores = 7;
                    break;
                case "SCORES_2V2":
                case 8:
                    message.scores = 8;
                    break;
                case "SCORES_WIN":
                case 9:
                    message.scores = 9;
                    break;
                case "SCORES_LOSE":
                case 10:
                    message.scores = 10;
                    break;
                case "SCORES_DRAW":
                case 11:
                    message.scores = 11;
                    break;
                }
                return message;
            };
    
            /**
             * Creates a plain object from a BettingResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ballgameBetting.BettingResult
             * @static
             * @param {ballgameBetting.BettingResult} message BettingResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BettingResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.win_lose_draw != null && message.hasOwnProperty("win_lose_draw")) {
                    object.win_lose_draw = options.enums === String ? $root.ballgameBetting.WinLoseDraw[message.win_lose_draw] : message.win_lose_draw;
                    if (options.oneofs)
                        object.value = "win_lose_draw";
                }
                if (message.odd_even != null && message.hasOwnProperty("odd_even")) {
                    object.odd_even = options.enums === String ? $root.ballgameBetting.OddEven[message.odd_even] : message.odd_even;
                    if (options.oneofs)
                        object.value = "odd_even";
                }
                if (message.scores != null && message.hasOwnProperty("scores")) {
                    object.scores = options.enums === String ? $root.ballgameBetting.Scores[message.scores] : message.scores;
                    if (options.oneofs)
                        object.value = "scores";
                }
                return object;
            };
    
            /**
             * Converts this BettingResult to JSON.
             * @function toJSON
             * @memberof ballgameBetting.BettingResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BettingResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return BettingResult;
        })();
    
        ballgameBetting.Draw = (function() {
    
            /**
             * Properties of a Draw.
             * @memberof ballgameBetting
             * @interface IDraw
             * @property {number} score1 Draw score1
             * @property {number} score2 Draw score2
             */
    
            /**
             * Constructs a new Draw.
             * @memberof ballgameBetting
             * @classdesc Represents a Draw.
             * @implements IDraw
             * @constructor
             * @param {ballgameBetting.IDraw=} [properties] Properties to set
             */
            function Draw(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Draw score1.
             * @member {number} score1
             * @memberof ballgameBetting.Draw
             * @instance
             */
            Draw.prototype.score1 = 0;
    
            /**
             * Draw score2.
             * @member {number} score2
             * @memberof ballgameBetting.Draw
             * @instance
             */
            Draw.prototype.score2 = 0;
    
            /**
             * Creates a new Draw instance using the specified properties.
             * @function create
             * @memberof ballgameBetting.Draw
             * @static
             * @param {ballgameBetting.IDraw=} [properties] Properties to set
             * @returns {ballgameBetting.Draw} Draw instance
             */
            Draw.create = function create(properties) {
                return new Draw(properties);
            };
    
            /**
             * Encodes the specified Draw message. Does not implicitly {@link ballgameBetting.Draw.verify|verify} messages.
             * @function encode
             * @memberof ballgameBetting.Draw
             * @static
             * @param {ballgameBetting.IDraw} message Draw message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Draw.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.score1);
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.score2);
                return writer;
            };
    
            /**
             * Encodes the specified Draw message, length delimited. Does not implicitly {@link ballgameBetting.Draw.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ballgameBetting.Draw
             * @static
             * @param {ballgameBetting.IDraw} message Draw message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Draw.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Draw message from the specified reader or buffer.
             * @function decode
             * @memberof ballgameBetting.Draw
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ballgameBetting.Draw} Draw
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Draw.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ballgameBetting.Draw();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.score1 = reader.uint32();
                        break;
                    case 2:
                        message.score2 = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("score1"))
                    throw $util.ProtocolError("missing required 'score1'", { instance: message });
                if (!message.hasOwnProperty("score2"))
                    throw $util.ProtocolError("missing required 'score2'", { instance: message });
                return message;
            };
    
            /**
             * Decodes a Draw message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ballgameBetting.Draw
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ballgameBetting.Draw} Draw
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Draw.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Draw message.
             * @function verify
             * @memberof ballgameBetting.Draw
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Draw.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.score1))
                    return "score1: integer expected";
                if (!$util.isInteger(message.score2))
                    return "score2: integer expected";
                return null;
            };
    
            /**
             * Creates a Draw message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ballgameBetting.Draw
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ballgameBetting.Draw} Draw
             */
            Draw.fromObject = function fromObject(object) {
                if (object instanceof $root.ballgameBetting.Draw)
                    return object;
                var message = new $root.ballgameBetting.Draw();
                if (object.score1 != null)
                    message.score1 = object.score1 >>> 0;
                if (object.score2 != null)
                    message.score2 = object.score2 >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a Draw message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ballgameBetting.Draw
             * @static
             * @param {ballgameBetting.Draw} message Draw
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Draw.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.score1 = 0;
                    object.score2 = 0;
                }
                if (message.score1 != null && message.hasOwnProperty("score1"))
                    object.score1 = message.score1;
                if (message.score2 != null && message.hasOwnProperty("score2"))
                    object.score2 = message.score2;
                return object;
            };
    
            /**
             * Converts this Draw to JSON.
             * @function toJSON
             * @memberof ballgameBetting.Draw
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Draw.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Draw;
        })();
    
        return ballgameBetting;
    })();

    return $root;
})(protobuf);
