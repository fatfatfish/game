!function(e){"use strict";var t=e.Reader,n=e.Writer,r=e.util,o=e.roots.default||(e.roots.default={});o.ballgameBetting=function(){var i={};return i.Match=function(){function i(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return i.prototype.league_id=0,i.prototype.team1_id=0,i.prototype.team2_id=0,i.create=function(e){return new i(e)},i.encode=function(e,t){return t||(t=n.create()),t.uint32(8).uint32(e.league_id),t.uint32(16).uint32(e.team1_id),t.uint32(24).uint32(e.team2_id),t},i.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},i.decode=function(e,n){e instanceof t||(e=t.create(e));for(var i=void 0===n?e.len:e.pos+n,a=new o.ballgameBetting.Match;e.pos<i;){var s=e.uint32();switch(s>>>3){case 1:a.league_id=e.uint32();break;case 2:a.team1_id=e.uint32();break;case 3:a.team2_id=e.uint32();break;default:e.skipType(7&s)}}if(!a.hasOwnProperty("league_id"))throw r.ProtocolError("missing required 'league_id'",{instance:a});if(!a.hasOwnProperty("team1_id"))throw r.ProtocolError("missing required 'team1_id'",{instance:a});if(!a.hasOwnProperty("team2_id"))throw r.ProtocolError("missing required 'team2_id'",{instance:a});return a},i.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},i.verify=function(e){return"object"!=typeof e||null===e?"object expected":r.isInteger(e.league_id)?r.isInteger(e.team1_id)?r.isInteger(e.team2_id)?null:"team2_id: integer expected":"team1_id: integer expected":"league_id: integer expected"},i.fromObject=function(e){if(e instanceof o.ballgameBetting.Match)return e;var t=new o.ballgameBetting.Match;return null!=e.league_id&&(t.league_id=e.league_id>>>0),null!=e.team1_id&&(t.team1_id=e.team1_id>>>0),null!=e.team2_id&&(t.team2_id=e.team2_id>>>0),t},i.toObject=function(e,t){t||(t={});var n={};return t.defaults&&(n.league_id=0,n.team1_id=0,n.team2_id=0),null!=e.league_id&&e.hasOwnProperty("league_id")&&(n.league_id=e.league_id),null!=e.team1_id&&e.hasOwnProperty("team1_id")&&(n.team1_id=e.team1_id),null!=e.team2_id&&e.hasOwnProperty("team2_id")&&(n.team2_id=e.team2_id),n},i.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},i}(),i.BettingType=function(){var e={},t=Object.create(e);return t[e[0]="WIN_LOSE_DRAW"]=0,t[e[1]="ODD_EVEN"]=1,t[e[2]="SCORES"]=2,t}(),i.Betting=function(){function i(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return i.prototype.type=0,i.create=function(e){return new i(e)},i.encode=function(e,t){return t||(t=n.create()),t.uint32(8).int32(e.type),t},i.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},i.decode=function(e,n){e instanceof t||(e=t.create(e));for(var i=void 0===n?e.len:e.pos+n,a=new o.ballgameBetting.Betting;e.pos<i;){var s=e.uint32();switch(s>>>3){case 1:a.type=e.int32();break;default:e.skipType(7&s)}}if(!a.hasOwnProperty("type"))throw r.ProtocolError("missing required 'type'",{instance:a});return a},i.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},i.verify=function(e){if("object"!=typeof e||null===e)return"object expected";switch(e.type){default:return"type: enum value expected";case 0:case 1:case 2:}return null},i.fromObject=function(e){if(e instanceof o.ballgameBetting.Betting)return e;var t=new o.ballgameBetting.Betting;switch(e.type){case"WIN_LOSE_DRAW":case 0:t.type=0;break;case"ODD_EVEN":case 1:t.type=1;break;case"SCORES":case 2:t.type=2}return t},i.toObject=function(e,t){t||(t={});var n={};return t.defaults&&(n.type=t.enums===String?"WIN_LOSE_DRAW":0),null!=e.type&&e.hasOwnProperty("type")&&(n.type=t.enums===String?o.ballgameBetting.BettingType[e.type]:e.type),n},i.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},i}(),i.WinLoseDraw=function(){var e={},t=Object.create(e);return t[e[0]="WIN"]=0,t[e[1]="LOSE"]=1,t[e[2]="DRAW"]=2,t}(),i.OddEven=function(){var e={},t=Object.create(e);return t[e[0]="ODD"]=0,t[e[1]="EVEN"]=1,t}(),i.Scores=function(){var e={},t=Object.create(e);return t[e[0]="SCORES_0V0"]=0,t[e[1]="SCORES_0V1"]=1,t[e[2]="SCORES_1V0"]=2,t[e[3]="SCORES_0V2"]=3,t[e[4]="SCORES_2V0"]=4,t[e[5]="SCORES_1V1"]=5,t[e[6]="SCORES_1V2"]=6,t[e[7]="SCORES_2V1"]=7,t[e[8]="SCORES_2V2"]=8,t[e[9]="SCORES_WIN"]=9,t[e[10]="SCORES_LOSE"]=10,t[e[11]="SCORES_DRAW"]=11,t}(),i.BettingResult=function(){function i(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}i.prototype.win_lose_draw=0,i.prototype.odd_even=0,i.prototype.scores=0;var a;return Object.defineProperty(i.prototype,"value",{get:r.oneOfGetter(a=["win_lose_draw","odd_even","scores"]),set:r.oneOfSetter(a)}),i.create=function(e){return new i(e)},i.encode=function(e,t){return t||(t=n.create()),null!=e.win_lose_draw&&e.hasOwnProperty("win_lose_draw")&&t.uint32(8).int32(e.win_lose_draw),null!=e.odd_even&&e.hasOwnProperty("odd_even")&&t.uint32(16).int32(e.odd_even),null!=e.scores&&e.hasOwnProperty("scores")&&t.uint32(24).int32(e.scores),t},i.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},i.decode=function(e,n){e instanceof t||(e=t.create(e));for(var r=void 0===n?e.len:e.pos+n,i=new o.ballgameBetting.BettingResult;e.pos<r;){var a=e.uint32();switch(a>>>3){case 1:i.win_lose_draw=e.int32();break;case 2:i.odd_even=e.int32();break;case 3:i.scores=e.int32();break;default:e.skipType(7&a)}}return i},i.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},i.verify=function(e){if("object"!=typeof e||null===e)return"object expected";var t={};if(null!=e.win_lose_draw&&e.hasOwnProperty("win_lose_draw"))switch(t.value=1,e.win_lose_draw){default:return"win_lose_draw: enum value expected";case 0:case 1:case 2:}if(null!=e.odd_even&&e.hasOwnProperty("odd_even")){if(1===t.value)return"value: multiple values";switch(t.value=1,e.odd_even){default:return"odd_even: enum value expected";case 0:case 1:}}if(null!=e.scores&&e.hasOwnProperty("scores")){if(1===t.value)return"value: multiple values";switch(t.value=1,e.scores){default:return"scores: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:}}return null},i.fromObject=function(e){if(e instanceof o.ballgameBetting.BettingResult)return e;var t=new o.ballgameBetting.BettingResult;switch(e.win_lose_draw){case"WIN":case 0:t.win_lose_draw=0;break;case"LOSE":case 1:t.win_lose_draw=1;break;case"DRAW":case 2:t.win_lose_draw=2}switch(e.odd_even){case"ODD":case 0:t.odd_even=0;break;case"EVEN":case 1:t.odd_even=1}switch(e.scores){case"SCORES_0V0":case 0:t.scores=0;break;case"SCORES_0V1":case 1:t.scores=1;break;case"SCORES_1V0":case 2:t.scores=2;break;case"SCORES_0V2":case 3:t.scores=3;break;case"SCORES_2V0":case 4:t.scores=4;break;case"SCORES_1V1":case 5:t.scores=5;break;case"SCORES_1V2":case 6:t.scores=6;break;case"SCORES_2V1":case 7:t.scores=7;break;case"SCORES_2V2":case 8:t.scores=8;break;case"SCORES_WIN":case 9:t.scores=9;break;case"SCORES_LOSE":case 10:t.scores=10;break;case"SCORES_DRAW":case 11:t.scores=11}return t},i.toObject=function(e,t){t||(t={});var n={};return null!=e.win_lose_draw&&e.hasOwnProperty("win_lose_draw")&&(n.win_lose_draw=t.enums===String?o.ballgameBetting.WinLoseDraw[e.win_lose_draw]:e.win_lose_draw,t.oneofs&&(n.value="win_lose_draw")),null!=e.odd_even&&e.hasOwnProperty("odd_even")&&(n.odd_even=t.enums===String?o.ballgameBetting.OddEven[e.odd_even]:e.odd_even,t.oneofs&&(n.value="odd_even")),null!=e.scores&&e.hasOwnProperty("scores")&&(n.scores=t.enums===String?o.ballgameBetting.Scores[e.scores]:e.scores,t.oneofs&&(n.value="scores")),n},i.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},i}(),i.Draw=function(){function i(e){if(e)for(var t=Object.keys(e),n=0;n<t.length;++n)null!=e[t[n]]&&(this[t[n]]=e[t[n]])}return i.prototype.score1=0,i.prototype.score2=0,i.create=function(e){return new i(e)},i.encode=function(e,t){return t||(t=n.create()),t.uint32(8).uint32(e.score1),t.uint32(16).uint32(e.score2),t},i.encodeDelimited=function(e,t){return this.encode(e,t).ldelim()},i.decode=function(e,n){e instanceof t||(e=t.create(e));for(var i=void 0===n?e.len:e.pos+n,a=new o.ballgameBetting.Draw;e.pos<i;){var s=e.uint32();switch(s>>>3){case 1:a.score1=e.uint32();break;case 2:a.score2=e.uint32();break;default:e.skipType(7&s)}}if(!a.hasOwnProperty("score1"))throw r.ProtocolError("missing required 'score1'",{instance:a});if(!a.hasOwnProperty("score2"))throw r.ProtocolError("missing required 'score2'",{instance:a});return a},i.decodeDelimited=function(e){return e instanceof t||(e=new t(e)),this.decode(e,e.uint32())},i.verify=function(e){return"object"!=typeof e||null===e?"object expected":r.isInteger(e.score1)?r.isInteger(e.score2)?null:"score2: integer expected":"score1: integer expected"},i.fromObject=function(e){if(e instanceof o.ballgameBetting.Draw)return e;var t=new o.ballgameBetting.Draw;return null!=e.score1&&(t.score1=e.score1>>>0),null!=e.score2&&(t.score2=e.score2>>>0),t},i.toObject=function(e,t){t||(t={});var n={};return t.defaults&&(n.score1=0,n.score2=0),null!=e.score1&&e.hasOwnProperty("score1")&&(n.score1=e.score1),null!=e.score2&&e.hasOwnProperty("score2")&&(n.score2=e.score2),n},i.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},i}(),i}()}(protobuf);