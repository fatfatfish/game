"undefined"!=typeof __ADMIN_ENTRY__&&function(){"use strict";function t(){t.super(this),this.BtnLoginOut.on(l.CLICK,this,function(){goblin.privateKey=null,goblin.newLoginMain(this.parent),this.destroy()});var n="0x"+ethereumjs.Util.privateToAddress(goblin.privateKey).toString("hex");this.Address.text=n.substr(2),goblin.util.drawQRCode("ethereum:"+n,this.QRCode);var s=function(){this.Money.text="--",web3.eth.getBalance(n,function(t,e){if(t)throw t;this.Money.text=web3.fromWei(e,"ether").toNumber().toFixed(goblin.valuePrecision)}.bind(this))}.bind(this);this.BtnRefresh.on(l.CLICK,this,s),s();var a=[];a[h]={Icon:"resource/icon1.png"},a[d]={Icon:"resource/icon2.png"},a[u]={Icon:"resource/icon3.png"},this.GameList.array=a,this.GameList.vScrollBarSkin="";var o=function(t){t==u?this.parent.addChild(new i):this.parent.addChild(new e(t))};this.GameList.renderHandler=new r(this,function(t,e){t.on(l.CLICK,this,o,[e])})}function e(t){e.super(this);var i;t==h?(i=goblin.contract.kuaisan,this.GameName.text=goblin.texts[1e3]):t==d&&(i=goblin.contract.coinFlipping,this.GameName.text=goblin.texts[1042]),this.BtnBack.on(l.CLICK,this,function(){this.destroy()});var n=function(){this.BetOdds.text="",this.BtnModifyOdds.disabled=!0,t==h?i.get_odds(function(t,e){if(t)throw t;var s={title:goblin.texts[1116],minValue:1,maxValue:216,value:e.toNumber(),valueFilter:function(t){return Math.floor(t)},valueSetter:function(t){return i.set_odds.getData(t)},refresher:n};this.BetOdds.text="{} / {} ({}%)".format(s.value,s.maxValue,(s.value/s.maxValue*100).toFixed(goblin.valuePrecision)),this.BtnModifyOdds.user_Context=s,this.BtnModifyOdds.disabled=!1}.bind(this)):t==d&&i.get_odds_x_10(function(t,e){if(t)throw t;var s={title:goblin.texts[1116],minValue:1,maxValue:20,value:e.toNumber(),valueFilter:function(t){return Math.floor(t)},valueSetter:function(t){return i.set_odds_x_10.getData(t)},refresher:n};this.BetOdds.text="{} / {} ({}%)".format(s.value,s.maxValue,(s.value/s.maxValue*100).toFixed(goblin.valuePrecision)),this.BtnModifyOdds.user_Context=s,this.BtnModifyOdds.disabled=!1}.bind(this))}.bind(this);n();var s=function(){this.BetPrice.text="",this.BtnModifyPrice.disabled=!0,i.get_ticket_price(function(t,e){if(t)throw t;var n={title:goblin.texts[1117],minValue:null,maxValue:null,value:web3.fromWei(e,"ether").toNumber(),valueFilter:function(t){return t},valueSetter:function(t){return i.set_ticket_price.getData(web3.toWei(t,"ether"))},refresher:s};this.BetPrice.text=n.value.toFixed(goblin.valuePrecision)+" "+goblin.currencyName,this.BtnModifyPrice.user_Context=n,this.BtnModifyPrice.disabled=!1}.bind(this))}.bind(this);s();var a=function(){this.BetMax.text="",this.BtnModifyMax.disabled=!0,i.get_max_total_ticket_count(function(t,e){if(t)throw t;var n={title:goblin.texts[1118],minValue:1,maxValue:127,value:e.toNumber(),valueFilter:function(t){return Math.floor(t)},valueSetter:function(t){return i.set_max_total_ticket_count.getData(t)},refresher:a};this.BetMax.text=n.value.toString()+goblin.texts[1005],this.BtnModifyMax.user_Context=n,this.BtnModifyMax.disabled=!1}.bind(this))}.bind(this);a();var r=function(){this.BetTime.text="",this.BtnModifyTime.disabled=!0,i.get_duration(function(t,e){if(t)throw t;var n={title:goblin.texts[1119],minValue:null,maxValue:null,value:e.toNumber()/60,valueFilter:function(t){return Math.floor(t)},valueSetter:function(t){return i.set_duration.getData(60*t)},refresher:r};this.BetTime.text=n.value+goblin.texts[1115],this.BtnModifyTime.user_Context=n,this.BtnModifyTime.disabled=!1}.bind(this))}.bind(this);r();var u=function(t){this.parent.addChild(new o(i,t.user_Context))};this.BtnModifyMax.on(l.CLICK,this,u.bind(this,this.BtnModifyMax)),this.BtnModifyOdds.on(l.CLICK,this,u.bind(this,this.BtnModifyOdds)),this.BtnModifyPrice.on(l.CLICK,this,u.bind(this,this.BtnModifyPrice)),this.BtnModifyTime.on(l.CLICK,this,u.bind(this,this.BtnModifyTime));var c;this.BtnCloseGame.visible=!1,i.get_disabled(function(t,e){if(t)throw t;c=e,this.BtnCloseGame.label=goblin.texts[c?1122:1123],this.BtnCloseGame.visible=!0}.bind(this)),this.BtnCloseGame.on(l.CLICK,this,function(){this.parent.addChild(new goblin.misc.Confirm(goblin.texts[1127].format(this.BtnCloseGame.label),function(){f({to:i.address,data:i.set_disabled.getData(!c)},this.parent,function(){c=!c,this.BtnCloseGame.label=goblin.texts[c?1122:1123]}.bind(this))}.bind(this)))})}function i(){i.super(this);var t=goblin.contract.ballgameBetting;this.GameName.text=goblin.texts[1092],this.BtnBack.on(l.CLICK,this,function(){this.destroy()});var e=new n(t);this.List.addChild(e),this.BtnCreateRound.on(l.CLICK,this,function(){this.parent.addChild(new s(t,e.refresh.bind(e)))});var a=function(){this.BtnModifyWater.disabled=!0,t.get_water_percent(function(e,i){if(e)throw e;var n={title:goblin.texts[1116]+"(%)",minValue:0,maxValue:99,value:100-i.toNumber(),valueFilter:function(t){return Math.floor(t)},valueSetter:function(e){return t.set_water_percent.getData(100-e)},refresher:a};this.BtnModifyWater.user_Context=n,this.BtnModifyWater.disabled=!1}.bind(this))}.bind(this);a();var r=function(){this.BtnModifyPrice.disabled=!0,t.get_ticket_price(function(e,i){if(e)throw e;var n={title:goblin.texts[1117]+"({})".format(goblin.currencyName),minValue:null,maxValue:null,value:web3.fromWei(i,"ether").toNumber(),valueFilter:function(t){return t},valueSetter:function(e){return t.set_ticket_price.getData(web3.toWei(e,"ether"))},refresher:r};this.BtnModifyPrice.user_Context=n,this.BtnModifyPrice.disabled=!1}.bind(this))}.bind(this);r();var h=function(){this.BtnModifyMax.disabled=!0,t.get_max_total_ticket_count(function(e,i){if(e)throw e;var n={title:goblin.texts[1118]+"({})".format(goblin.texts[1005]),minValue:1,maxValue:127,value:i.toNumber(),valueFilter:function(t){return Math.floor(t)},valueSetter:function(e){return t.set_max_total_ticket_count.getData(e)},refresher:h};this.BtnModifyMax.user_Context=n,this.BtnModifyMax.disabled=!1}.bind(this))}.bind(this);h();var d=function(e){this.parent.addChild(new o(t,e.user_Context))};this.BtnModifyMax.on(l.CLICK,this,d.bind(this,this.BtnModifyMax)),this.BtnModifyWater.on(l.CLICK,this,d.bind(this,this.BtnModifyWater)),this.BtnModifyPrice.on(l.CLICK,this,d.bind(this,this.BtnModifyPrice));var u;this.BtnCloseGame.visible=!1,t.get_disabled(function(t,e){if(t)throw t;u=e,this.BtnCloseGame.label=goblin.texts[u?1122:1123],this.BtnCloseGame.visible=!0}.bind(this)),this.BtnCloseGame.on(l.CLICK,this,function(){this.parent.addChild(new goblin.misc.Confirm(goblin.texts[1127].format(this.BtnCloseGame.label),function(){f({to:t.address,data:t.set_disabled.getData(!u)},this.parent,function(){u=!u,this.BtnCloseGame.label=goblin.texts[u?1122:1123]}.bind(this))}.bind(this)))})}function n(t){n.super(this),this.MatchList.array=[],this.MatchList.vScrollBarSkin="";var e=new ethers.Contract(t.address,t.abi,new ethers.providers.Web3Provider(web3.currentProvider)),i=goblin.protocol.ballgameBetting,s=function(){e.get_matches().then(function(t){for(u=0;u<t.length;++u){(f=t[u]).length=0,f.betting_of_type={},f.data=i.Match.decode(ethereumjs.Buffer.Buffer.from(f.data.substr(2),"hex"));for(var e=0;e<f.bettings.length;++e){var n=f.bettings[e];n.length=0,n.parent=f,n.index=e,n.result_of_type={},n.data=i.Betting.decode(ethereumjs.Buffer.Buffer.from(n.data.substr(2),"hex")),f.betting_of_type[n.data.type]=n;for(var s=0;s<n.results.length;++s){var a=n.results[s];a.length=0,a.parent=n,a.index=s,a.data=i.BettingResult.decode(ethereumjs.Buffer.Buffer.from(a.data.substr(2),"hex")),n.result_of_type[a.data[a.data.value]]=a}}}for(var o=function(t){var e=new Date;return e.setTime(1e3*t),("00"+(e.getMonth()+1)).slice(-2)+"-"+("00"+e.getDate()).slice(-2)+" "+("00"+e.getHours()).slice(-2)+":"+("00"+e.getMinutes()).slice(-2)},r=Math.floor(Date.now()/1e3),l=goblin.config.ballgameBetting,h=[],d=[],u=0;u<t.length;++u){var f=t[u],c={GameType:l.leagueName(f.data.league_id),HomeName:l.teamName(f.data.team1_id),VisitorName:l.teamName(f.data.team2_id),EndTime:o(f.betting_stop_time.toNumber()),_match:f};f.betting_stop_time.toNumber()<r?h.push(c):(c.BtnConfirm={visible:!1},d.push(c))}this.MatchList.array=h.concat(d)}.bind(this))}.bind(this);this.refresh=s,s();var o=function(e){var n=function(){var n=new ethers.Interface(t.abi),a={to:t.address,data:n.functions.end_match(e.index,[-1,-1,-1],i.Draw.encode({score1:0,score2:0}).finish()).data};f(a,this.parent,s)}.bind(this),a=Math.floor(Date.now()/1e3);e.betting_start_time.toNumber()<a?this.parent.addChild(new goblin.misc.Confirm(goblin.texts[1100],n)):n()},h=function(e){var n=function(n,a){var o,r,l=[-1,-1,-1];o=e.betting_of_type[i.BettingType.WIN_LOSE_DRAW],r=n>a?o.result_of_type[i.WinLoseDraw.WIN]:n<a?o.result_of_type[i.WinLoseDraw.LOSE]:o.result_of_type[i.WinLoseDraw.DRAW],l[o.index]=r.index,o=e.betting_of_type[i.BettingType.ODD_EVEN],r=(n+a)%2==1?o.result_of_type[i.OddEven.ODD]:o.result_of_type[i.OddEven.EVEN],l[o.index]=r.index,o=e.betting_of_type[i.BettingType.SCORES],r=0==n&&0==a?o.result_of_type[i.Scores.SCORES_0V0]:0==n&&1==a?o.result_of_type[i.Scores.SCORES_0V1]:1==n&&0==a?o.result_of_type[i.Scores.SCORES_1V0]:0==n&&2==a?o.result_of_type[i.Scores.SCORES_0V2]:2==n&&0==a?o.result_of_type[i.Scores.SCORES_2V0]:1==n&&1==a?o.result_of_type[i.Scores.SCORES_1V1]:1==n&&2==a?o.result_of_type[i.Scores.SCORES_1V2]:2==n&&1==a?o.result_of_type[i.Scores.SCORES_2V1]:2==n&&2==a?o.result_of_type[i.Scores.SCORES_2V2]:n>a?o.result_of_type[i.Scores.SCORES_WIN]:n<a?o.result_of_type[i.Scores.SCORES_LOSE]:o.result_of_type[i.Scores.SCORES_DRAW],l[o.index]=r.index,console.log("fvck",e.id,l);var h=new ethers.Interface(t.abi),d={to:t.address,data:h.functions.end_match(e.index,l,i.Draw.encode({score1:n,score2:a}).finish()).data};f(d,this.parent,s)}.bind(this);this.parent.addChild(new a(e.data,n))};this.MatchList.renderHandler=new r(this,function(t,e){t.getChildByName("BtnCancel").on(l.CLICK,this,o,[this.MatchList.array[e]._match]);t.getChildByName("BtnConfirm").on(l.CLICK,this,h,[this.MatchList.array[e]._match])})}function s(t,e){s.super(this),this.BtnClose.on(l.CLICK,this,function(){this.destroy()});for(var i=goblin.config.ballgameBetting,n=[],a=[],o=0;o<i.leagues.length;++o){var r=i.leagues[o];n.push(r.id),a.push(r.name)}this.LeagueName.labels=a.join(",");var h,d,u=function(){this.BtnOk.disabled=this.StopDate.text.length*this.StopTime.text.length==0||this.LeagueName.selectedIndex<0||this.HomeName.selectedIndex<0||this.VisitorName.selectedIndex<0}.bind(this);this.LeagueName.on(l.CHANGE,this,function(){var t=i.leagueById[n[this.LeagueName.selectedIndex]];h=[],d=[];for(var e=0;e<t.teams.length;++e){var s=t.teams[e];h.push(s.id),d.push(s.name)}this.HomeName.selectedIndex=this.VisitorName.selectedIndex=-1,this.HomeName.labels=this.VisitorName.labels=d.join(","),u()}),this.HomeName.on(l.CHANGE,this,u),this.VisitorName.on(l.CHANGE,this,u),this.StopDate.on(l.INPUT,this,u),this.StopTime.on(l.INPUT,this,u),u(),this.BtnOk.on(l.CLICK,this,function(){if(this.HomeName.selectedIndex==this.VisitorName.selectedIndex)this.parent.addChild(new goblin.misc.Tips(goblin.texts[1103]));else{var i=Math.floor(Date.now()/1e3),s=(this.StopDate.text+" "+this.StopTime.text).match(/^(\d+)-(\d+)-(\d+) (\d+)\:(\d+)$/),a=Math.floor(new Date(s[1],s[2]-1,s[3],s[4],s[5])/1e3),o=new ethers.Interface(t.abi),r=goblin.protocol.ballgameBetting,l={to:t.address,data:o.functions.post_football_match(r.Match.encode({league_id:n[this.LeagueName.selectedIndex],team1_id:h[this.HomeName.selectedIndex],team2_id:h[this.VisitorName.selectedIndex]}).finish(),i+60,a).data};f(l,this.parent,function(){this.parent.addChild(new goblin.misc.Tips(goblin.texts[1102].format(1),function(){this.destroy(),e()}.bind(this)))}.bind(this))}})}function a(t,e){a.super(this),this.BtnClose.on(l.CLICK,this,function(){this.destroy()});var i=goblin.config.ballgameBetting;this.HomeName.text=i.teamName(t.team1_id),this.VisitorName.text=i.teamName(t.team2_id);var n=null,s=null,o=function(){this.BtnOk.disabled=this.HomeGoal.text.length*this.VisitorGoal.text.length==0}.bind(this);o(),this.HomeGoal.on(l.INPUT,this,function(){(n=parseInt(this.HomeGoal.text))<0&&(n=0,this.HomeGoal.text=n.toString()),o()}),this.VisitorGoal.on(l.INPUT,this,function(){(s=parseInt(this.VisitorGoal.text))<0&&(s=0,this.VisitorGoal.text=s.toString()),o()}),this.BtnOk.on(l.CLICK,this,function(){this.parent.addChild(new goblin.misc.Confirm(goblin.texts[1101].format(n,s),function(){this.destroy(),e(n,s)}.bind(this)))})}function o(t,e){o.super(this),this.BtnClose.on(l.CLICK,this,function(){this.destroy()}),this.Title1.text=goblin.texts[1120].format(e.title),this.Title2.text=goblin.texts[1121].format(e.title),this.Value.text=e.value.toString(),this.Value.on(l.INPUT,this,function(){var t=Number(this.Value.text);isNaN(t)?this.Value.text=e.value.toString():(t=e.valueFilter(t),null!=e.maxValue&&t>e.maxValue&&(this.Value.text=e.maxValue.toString()),null!=e.minValue&&t<e.minValue&&(this.Value.text=e.minValue.toString()))}),this.BtnOk.on(l.CLICK,this,function(){var i=e.valueFilter(Number(this.Value.text));this.Value.text=i.toString(),i!=e.value?f({to:t.address,data:e.valueSetter(i)},this.parent,function(){e.refresher(),this.destroy()}.bind(this)):this.destroy()})}var r=laya.utils.Handler,l=laya.events.Event,h=1,d=0,u=2,f=function(t,e,i){var n=new goblin.misc.Loading(goblin.texts[1098]);e.addChild(n),goblin.util.buildTxParams(t,goblin.privateKey).then(function(){return goblin.util.sendTransactionAndGetReceipt(t,goblin.privateKey)}).then(function(t){e.removeChild(n),e.addChild(new goblin.misc.Tips(goblin.texts[1099])),i()}).catch(function(t){e.removeChild(n),goblin.util.displayTransactionError(t,e)})};Laya.class(t,"AdminMain",AdminMainUI),Laya.class(e,"AdminGameManage",AdminGame1ManageUI),Laya.class(i,"AdminGameManage3",AdminGame3ManageUI),Laya.class(n,"AdminGame3List",AdminGame3ListUI),Laya.class(s,"AdminGame3Create",AdminGame3CreateUI),Laya.class(a,"AdminGame3Confirm",AdminGame3ConfirmUI),Laya.class(o,"AdminModify",AdminModifyUI),goblin.newHomeMain=function(e,i){var n=new t;e.addChild(n),i(n)}}();