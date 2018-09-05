var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var AdminGame1ManageUI=(function(_super){
		function AdminGame1ManageUI(){
			
		    this.GameName=null;
		    this.BtnBack=null;
		    this.BtnCloseGame=null;
		    this.BtnModifyOdds=null;
		    this.BtnModifyPrice=null;
		    this.BtnModifyTime=null;
		    this.BtnModifyMax=null;
		    this.BetMax=null;
		    this.BetPrice=null;
		    this.BetOdds=null;
		    this.BetTime=null;

			AdminGame1ManageUI.__super.call(this);
		}

		CLASS$(AdminGame1ManageUI,'ui.background.AdminGame1ManageUI',_super);
		var __proto__=AdminGame1ManageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AdminGame1ManageUI.uiView);

		}

		AdminGame1ManageUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,15,12,8","height":800,"centerX":0}},{"type":"Image","props":{"y":0,"width":480,"skin":"resource/main_top.png","sizeGrid":"28,15,12,8","height":82,"centerX":0}},{"type":"Label","props":{"y":20,"x":90,"width":280,"var":"GameName","valign":"middle","text":"游戏名","strokeColor":"#381A09","stroke":5,"height":40,"fontSize":30,"color":"#ffc43b","centerX":0,"align":"center"}},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":0,"width":100,"var":"BtnCloseGame","skin":"resource/checkbutton3.png","right":0,"labelStrokeColor":"#333333","labelStroke":3,"labelSize":20,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","labelAlign":"center","label":"关闭玩法","height":80}},{"type":"Button","props":{"y":170,"x":310,"width":150,"var":"BtnModifyOdds","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","selected":false,"labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"修改返奖","height":60}},{"type":"Button","props":{"y":320,"x":310,"width":150,"var":"BtnModifyPrice","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"修改价格","height":60}},{"type":"Button","props":{"y":620,"x":310,"width":150,"var":"BtnModifyTime","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"修改时间","height":60}},{"type":"Button","props":{"y":470,"x":310,"width":150,"var":"BtnModifyMax","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"修改上限","height":60}},{"type":"Label","props":{"y":400,"x":30,"width":150,"valign":"middle","text":"投注上限：","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":25,"color":"#40e0d0","align":"left"}},{"type":"Label","props":{"y":470,"x":30,"width":150,"var":"BetMax","valign":"middle","text":"100 注","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":35,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":250,"x":34,"width":150,"valign":"middle","text":"单注价格：","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":25,"color":"#40e0d0","align":"left"}},{"type":"Label","props":{"y":320,"x":34,"width":150,"var":"BetPrice","valign":"middle","text":"0.01 ETH","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":35,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":100,"x":30,"width":150,"valign":"middle","text":"返奖率：","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":25,"color":"#40e0d0","align":"left"}},{"type":"Label","props":{"y":170,"x":30,"width":150,"var":"BetOdds","valign":"middle","text":"216 / 240 (95%)","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":30,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":550,"x":30,"width":150,"valign":"middle","text":"开奖时间：","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":25,"color":"#40e0d0","align":"left"}},{"type":"Label","props":{"y":620,"x":30,"width":150,"var":"BetTime","valign":"middle","text":"10 分钟","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":35,"color":"#ffffff","align":"left"}}]};
		return AdminGame1ManageUI;
	})(View);
var AdminGame3ConfirmUI=(function(_super){
		function AdminGame3ConfirmUI(){
			
		    this.BtnOk=null;
		    this.BtnClose=null;
		    this.HomeGoal=null;
		    this.VisitorGoal=null;
		    this.VisitorName=null;
		    this.HomeName=null;

			AdminGame3ConfirmUI.__super.call(this);
		}

		CLASS$(AdminGame3ConfirmUI,'ui.background.AdminGame3ConfirmUI',_super);
		var __proto__=AdminGame3ConfirmUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AdminGame3ConfirmUI.uiView);

		}

		AdminGame3ConfirmUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"x":0,"width":470,"skin":"resource/base.png","sizeGrid":"5,5,5,5","height":400,"centerY":-85,"centerX":0},"child":[{"type":"Label","props":{"y":30,"width":400,"valign":"middle","text":"录入双方进球数","height":50,"fontSize":30,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Button","props":{"y":300,"width":300,"var":"BtnOk","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"确认开奖","height":70,"centerX":0}},{"type":"Button","props":{"width":80,"var":"BtnClose","top":10,"left":5,"height":80},"child":[{"type":"Image","props":{"y":19,"x":24,"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"TextInput","props":{"y":180,"width":150,"var":"HomeGoal","type":"number","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"进球","height":60,"fontSize":27,"color":"#ffffff","centerX":-120,"align":"center"}},{"type":"TextInput","props":{"y":180,"width":150,"var":"VisitorGoal","type":"number","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"进球","height":60,"fontSize":27,"color":"#ffffff","centerX":120,"align":"center"}},{"type":"Label","props":{"y":110,"width":150,"var":"VisitorName","valign":"middle","text":"客队","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":25,"color":"#B6DFE5","centerX":120,"align":"center"}},{"type":"Label","props":{"y":155,"width":150,"valign":"middle","text":"VS","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":30,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":110,"width":150,"var":"HomeName","valign":"middle","text":"主队","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":25,"color":"#B6DFE5","centerX":-120,"align":"center"}}]}]};
		return AdminGame3ConfirmUI;
	})(View);
var AdminGame3CreateUI=(function(_super){
		function AdminGame3CreateUI(){
			
		    this.BtnOk=null;
		    this.BtnClose=null;
		    this.HomeName=null;
		    this.VisitorName=null;
		    this.LeagueName=null;
		    this.StopDate=null;
		    this.StopTime=null;

			AdminGame3CreateUI.__super.call(this);
		}

		CLASS$(AdminGame3CreateUI,'ui.background.AdminGame3CreateUI',_super);
		var __proto__=AdminGame3CreateUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AdminGame3CreateUI.uiView);

		}

		AdminGame3CreateUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":100,"x":0,"width":470,"skin":"resource/base.png","sizeGrid":"5,5,5,5","height":600,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":30,"width":400,"valign":"middle","text":"录入开赛球队","height":50,"fontSize":30,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Button","props":{"y":510,"width":300,"var":"BtnOk","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"确认","height":70,"centerX":0}},{"type":"Button","props":{"width":80,"var":"BtnClose","top":10,"left":5,"height":80},"child":[{"type":"Image","props":{"y":19,"x":24,"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"ComboBox","props":{"y":180,"width":250,"var":"HomeName","type":"number","skin":"resource/input.png","sizeGrid":"10,10,10,10","selectedIndex":0,"scrollBarSkin":"comp/vscroll.png","prompt":"输入球队名","labelSize":25,"height":60,"fontSize":27,"color":"#ffffff","centerX":62,"align":"center"}},{"type":"ComboBox","props":{"y":260,"width":250,"var":"VisitorName","type":"number","skin":"resource/input.png","sizeGrid":"10,10,10,10","scrollBarSkin":"comp/vscroll.png","prompt":"输入球队名","labelSize":25,"height":60,"fontSize":27,"color":"#ffffff","centerX":64,"align":"center"}},{"type":"Label","props":{"y":260,"width":150,"valign":"middle","text":"客队名称","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":25,"color":"#B6DFE5","centerX":-150,"align":"center"}},{"type":"Label","props":{"y":180,"width":150,"valign":"middle","text":"主队名称","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":25,"color":"#B6DFE5","centerX":-150,"align":"center"}},{"type":"ComboBox","props":{"y":100,"width":250,"var":"LeagueName","type":"number","skin":"resource/input.png","sizeGrid":"10,10,10,10","scrollBarSkin":"comp/vscroll.png","prompt":"输入赛事类型","labelSize":25,"height":60,"fontSize":27,"color":"#ffffff","centerX":62,"align":"center"}},{"type":"Label","props":{"y":100,"width":150,"valign":"middle","text":"赛事","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":25,"color":"#B6DFE5","centerX":-150,"align":"center"}},{"type":"TextInput","props":{"y":340,"width":250,"var":"StopDate","type":"date","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"投注截止日期","height":60,"fontSize":27,"color":"#ffffff","centerX":64,"align":"center"}},{"type":"Label","props":{"y":340,"width":150,"valign":"middle","text":"截止日期","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":25,"color":"#B6DFE5","centerX":-150,"align":"center"}},{"type":"TextInput","props":{"y":420,"width":250,"var":"StopTime","type":"time","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"投注截止时间","height":60,"fontSize":27,"color":"#ffffff","centerX":64,"align":"center"}},{"type":"Label","props":{"y":420,"width":150,"valign":"middle","text":"截止时间","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":25,"color":"#B6DFE5","centerX":-150,"align":"center"}}]}]};
		return AdminGame3CreateUI;
	})(View);
var AdminGame3ListUI=(function(_super){
		function AdminGame3ListUI(){
			
		    this.MatchList=null;

			AdminGame3ListUI.__super.call(this);
		}

		CLASS$(AdminGame3ListUI,'ui.background.AdminGame3ListUI',_super);
		var __proto__=AdminGame3ListUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AdminGame3ListUI.uiView);

		}

		AdminGame3ListUI.uiView={"type":"View","props":{"width":470,"height":550},"child":[{"type":"List","props":{"width":470,"var":"MatchList","top":0,"centerX":0,"bottom":0},"child":[{"type":"Box","props":{"y":0,"x":0,"width":470,"name":"render","height":180},"child":[{"type":"Image","props":{"y":0,"x":0,"width":470,"skin":"resource/base.png","sizeGrid":"5,5,5,5","height":120,"centerX":0}},{"type":"Button","props":{"y":120,"x":10,"width":200,"stateNum":1,"skin":"resource/btn_create1.png","sizeGrid":"10,10,10,10","name":"BtnCancel","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"取消赛事","height":60,"alpha":1}},{"type":"Button","props":{"y":120,"x":260,"width":200,"stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","right":10,"name":"BtnConfirm","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"录入赛果","height":60,"alpha":1}},{"type":"Label","props":{"y":60,"x":15,"width":200,"valign":"middle","text":"主队","strokeColor":"#381A09","stroke":3,"overflow":"visible","name":"HomeName","height":40,"fontSize":25,"color":"#B6DFE5","centerX":-120,"align":"right"}},{"type":"Label","props":{"y":60,"x":160,"width":150,"valign":"middle","text":"VS","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":40,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":60,"x":255,"width":200,"valign":"middle","text":"客队","strokeColor":"#381A09","stroke":3,"overflow":"visible","name":"VisitorName","height":40,"fontSize":25,"color":"#B6DFE5","centerX":120,"align":"left"}},{"type":"Label","props":{"y":10,"x":360,"width":140,"valign":"middle","text":"截止时间","right":10,"overflow":"hidden","name":"EndTime","height":40,"fontSize":20,"color":"#aaaaaa","align":"right"}},{"type":"Label","props":{"y":10,"x":15,"width":80,"valign":"middle","text":"世界杯","overflow":"hidden","name":"GameType","height":40,"fontSize":20,"color":"#aaaaaa","align":"left"}}]}]}]};
		return AdminGame3ListUI;
	})(View);
var AdminGame3ManageUI=(function(_super){
		function AdminGame3ManageUI(){
			
		    this.BtnCreateRound=null;
		    this.BtnModifyWater=null;
		    this.BtnModifyPrice=null;
		    this.BtnModifyMax=null;
		    this.GameName=null;
		    this.BtnBack=null;
		    this.BtnCloseGame=null;
		    this.List=null;

			AdminGame3ManageUI.__super.call(this);
		}

		CLASS$(AdminGame3ManageUI,'ui.background.AdminGame3ManageUI',_super);
		var __proto__=AdminGame3ManageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AdminGame3ManageUI.uiView);

		}

		AdminGame3ManageUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,15,12,8","height":800,"centerX":0}},{"type":"Image","props":{"y":0,"width":480,"skin":"resource/main_top.png","sizeGrid":"28,15,12,8","height":82,"centerX":0}},{"type":"Button","props":{"width":300,"var":"BtnCreateRound","stateNum":3,"skin":"resource/btn2.png","sizeGrid":"10,10,10,10","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"＋发布新赛事","height":70,"centerX":0,"bottom":85}},{"type":"Image","props":{"width":480,"skin":"resource/main_top.png","sizeGrid":"28,15,12,8","height":82,"centerX":0,"bottom":0},"child":[{"type":"Button","props":{"x":10,"width":150,"var":"BtnModifyWater","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","selected":false,"labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"修改返奖","height":70,"centerY":0}},{"type":"Button","props":{"x":160,"width":150,"var":"BtnModifyPrice","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","name":"item1","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"修改价格","height":70,"centerY":0,"centerX":0}},{"type":"Button","props":{"width":150,"var":"BtnModifyMax","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","right":10,"name":"item2","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"修改上限","height":70,"centerY":0}}]},{"type":"Label","props":{"y":20,"x":90,"width":280,"var":"GameName","valign":"middle","text":"游戏名","strokeColor":"#381A09","stroke":5,"height":40,"fontSize":30,"color":"#ffc43b","centerX":0,"align":"center"}},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":0,"width":100,"var":"BtnCloseGame","skin":"resource/checkbutton3.png","right":0,"labelStrokeColor":"#333333","labelStroke":3,"labelSize":20,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","labelBold":false,"labelAlign":"center","label":"关闭玩法","height":80}},{"type":"Panel","props":{"y":85,"width":470,"var":"List","height":550,"centerX":0}}]};
		return AdminGame3ManageUI;
	})(View);
var AdminMainUI=(function(_super){
		function AdminMainUI(){
			
		    this.BtnRefresh=null;
		    this.BtnLoginOut=null;
		    this.GameList=null;
		    this.QRCode=null;
		    this.Address=null;
		    this.Money=null;
		    this.Currency=null;

			AdminMainUI.__super.call(this);
		}

		CLASS$(AdminMainUI,'ui.background.AdminMainUI',_super);
		var __proto__=AdminMainUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AdminMainUI.uiView);

		}

		AdminMainUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,15,12,8","height":800}},{"type":"Image","props":{"y":0,"width":480,"skin":"resource/main_top.png","sizeGrid":"5,5,5,5","height":82,"centerX":0},"child":[{"type":"Label","props":{"x":10,"width":440,"valign":"middle","text":"游戏管理","height":40,"fontSize":30,"color":"#ffc43b","centerY":0,"centerX":0,"align":"center"}},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnRefresh","height":80},"child":[{"type":"Image","props":{"width":50,"skin":"resource/refresh.png","height":60,"centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":0,"width":80,"var":"BtnLoginOut","right":0,"height":80},"child":[{"type":"Image","props":{"width":48,"skin":"resource/out.png","height":42,"centerY":0,"centerX":0}}]}]},{"type":"List","props":{"y":270,"x":0,"width":480,"var":"GameList","vScrollBarSkin":"comp/vscroll.png","height":520},"child":[{"type":"Box","props":{"y":0,"x":0,"width":240,"name":"render","height":260},"child":[{"type":"Image","props":{"y":0,"width":240,"skin":"resource/icon1.png","sizeGrid":"10,10,10,10","name":"Icon","height":260,"centerX":0}}]}]},{"type":"Image","props":{"y":130,"x":30,"width":120,"var":"QRCode","height":120}},{"type":"TextArea","props":{"y":90,"x":15,"wordWrap":true,"width":450,"var":"Address","valign":"middle","text":"Address","overflow":"scroll","height":25,"fontSize":20,"editable":false,"color":"#c0c0c0","centerX":0,"align":"center"}},{"type":"Label","props":{"y":200,"x":190,"width":200,"var":"Money","valign":"bottom","text":"999999","right":90,"height":50,"fontSize":40,"color":"#F6F3E1","align":"right"}},{"type":"Label","props":{"y":200,"x":360,"width":100,"var":"Currency","valign":"bottom","text":"ETH","right":20,"height":50,"fontSize":30,"color":"#F6F3E1","align":"right"}}]};
		return AdminMainUI;
	})(View);
var AdminModifyUI=(function(_super){
		function AdminModifyUI(){
			
		    this.BtnBack=null;
		    this.Title1=null;
		    this.BtnOk=null;
		    this.BtnClose=null;
		    this.Value=null;
		    this.Title2=null;

			AdminModifyUI.__super.call(this);
		}

		CLASS$(AdminModifyUI,'ui.background.AdminModifyUI',_super);
		var __proto__=AdminModifyUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AdminModifyUI.uiView);

		}

		AdminModifyUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Button","props":{"y":0,"x":0,"width":480,"var":"BtnBack","skin":"resource/bg.png","sizeGrid":"30,5,5,5","height":800,"alpha":0.3}},{"type":"Image","props":{"y":100,"x":0,"width":470,"skin":"resource/base.png","sizeGrid":"5,5,5,5","height":400,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":30,"width":400,"var":"Title1","valign":"middle","text":"修改开奖时间","height":50,"fontSize":30,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Button","props":{"y":300,"width":300,"var":"BtnOk","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"确认","height":70,"centerX":0}},{"type":"Button","props":{"width":80,"var":"BtnClose","top":10,"left":5,"height":80},"child":[{"type":"Image","props":{"y":19,"x":24,"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"TextInput","props":{"y":150,"width":200,"var":"Value","skin":"resource/input.png","sizeGrid":"10,10,10,10","height":60,"fontSize":27,"color":"#ffffff","centerX":110,"align":"center"}},{"type":"Label","props":{"y":150,"width":150,"var":"Title2","valign":"middle","text":"设置开奖时间","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":60,"fontSize":25,"color":"#B6DFE5","centerX":-130,"align":"left"}}]}]};
		return AdminModifyUI;
	})(View);
var AdminWalleMoneyUI=(function(_super){
		function AdminWalleMoneyUI(){
			
		    this.BtnBack=null;
		    this.BtnRecharge=null;
		    this.BtnTransfer=null;
		    this.Bonus=null;
		    this.Money=null;
		    this.Currency1=null;
		    this.Currency2=null;
		    this.AddressList=null;
		    this.BtnAdd=null;

			AdminWalleMoneyUI.__super.call(this);
		}

		CLASS$(AdminWalleMoneyUI,'ui.background.AdminWalleMoneyUI',_super);
		var __proto__=AdminWalleMoneyUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AdminWalleMoneyUI.uiView);

		}

		AdminWalleMoneyUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,5,5,5","height":800}},{"type":"Image","props":{"y":0,"width":480,"skin":"resource/main_top.png","height":82,"centerX":0}},{"type":"Label","props":{"y":20,"width":280,"valign":"middle","text":"资金管理","strokeColor":"#381A09","stroke":5,"height":40,"fontSize":30,"color":"#ffc43b","centerX":0,"align":"center"}},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":250,"width":200,"var":"BtnRecharge","stateNum":1,"skin":"resource/btn_wallet3.png","sizeGrid":"5,5,5,5","right":30,"labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"充值","height":80}},{"type":"Button","props":{"y":250,"width":200,"var":"BtnTransfer","stateNum":1,"skin":"resource/btn_wallet3.png","sizeGrid":"5,5,5,5","left":30,"labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"转出","height":80}},{"type":"Label","props":{"y":203,"width":230,"var":"Bonus","valign":"middle","text":"--","right":100,"height":40,"fontSize":25,"color":"#F6F3E1","align":"right"}},{"type":"Label","props":{"y":140,"width":230,"var":"Money","valign":"middle","text":"--","right":100,"height":50,"fontSize":25,"color":"#F6F3E1","align":"right"}},{"type":"Label","props":{"y":140,"valign":"middle","text":"账户资金","left":20,"height":50,"fontSize":25,"color":"#F6F3E1","align":"right"}},{"type":"Label","props":{"y":200,"valign":"middle","text":"待兑付","left":20,"height":40,"fontSize":25,"color":"#F6F3E1","align":"right"}},{"type":"Label","props":{"y":140,"width":100,"var":"Currency1","valign":"middle","right":30,"height":50,"fontSize":25,"color":"#F6F3E1","align":"right"}},{"type":"Label","props":{"y":203,"width":100,"var":"Currency2","valign":"middle","right":30,"height":40,"fontSize":25,"color":"#F6F3E1","align":"right"}},{"type":"List","props":{"y":400,"width":470,"var":"AddressList","height":300,"centerX":0},"child":[{"type":"Box","props":{"y":0,"x":0,"width":470,"name":"render","height":60},"child":[{"type":"Label","props":{"x":10,"width":400,"valign":"middle","text":"地址地址地址地址地址地址地址地址地址地址","overflow":"scroll","name":"Address","height":40,"fontSize":20,"color":"#aaaaaa","centerY":0,"align":"left"}},{"type":"Button","props":{"y":180,"x":420,"width":40,"stateNum":1,"skin":"resource/close.png","right":10,"name":"BtnDelete","labelSize":20,"labelColors":"#ffffff","labelAlign":"center","height":40,"centerY":0}}]}]},{"type":"Label","props":{"y":355,"valign":"middle","text":"收款地址","left":20,"height":50,"fontSize":30,"color":"#40e0d0","align":"right"}},{"type":"Label","props":{"y":90,"x":10,"valign":"middle","text":"当前资金","left":20,"height":50,"fontSize":30,"color":"#40e0d0","align":"right"}},{"type":"Button","props":{"y":710,"width":300,"var":"BtnAdd","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"添加收款地址","height":70,"centerX":0}}]};
		return AdminWalleMoneyUI;
	})(View);
var AdminWalletAccountUI=(function(_super){
		function AdminWalletAccountUI(){
			
		    this.BtnAdd=null;

			AdminWalletAccountUI.__super.call(this);
		}

		CLASS$(AdminWalletAccountUI,'ui.background.AdminWalletAccountUI',_super);
		var __proto__=AdminWalletAccountUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AdminWalletAccountUI.uiView);

		}

		AdminWalletAccountUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":10,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,15,12,8","height":800,"centerX":0}},{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_top.png","height":82,"centerX":0}},{"type":"Label","props":{"y":20,"width":280,"valign":"middle","text":"权限账号管理","strokeColor":"#381A09","stroke":5,"height":40,"fontSize":30,"color":"#ffc43b","centerX":0,"align":"center"}},{"type":"Button","props":{"y":0,"x":0,"width":80,"height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"List","props":{"y":100,"x":5,"width":470,"height":600,"centerX":0},"child":[{"type":"Box","props":{"y":0,"x":0,"width":470,"name":"render","height":60},"child":[{"type":"Label","props":{"x":10,"width":400,"valign":"middle","text":"地址地址地址地址地址地址地址地址地址地址","overflow":"scroll","name":"AccountAddress","height":40,"fontSize":20,"color":"#ffffff","centerY":0,"align":"left"}},{"type":"Button","props":{"y":180,"x":420,"width":40,"stateNum":1,"skin":"resource/close.png","right":10,"name":"BtnDelete","labelSize":20,"labelColors":"#ffffff","labelAlign":"center","height":40,"centerY":0}}]}]},{"type":"Button","props":{"y":710,"width":300,"var":"BtnAdd","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"添加权限账号","height":70,"centerX":0}}]};
		return AdminWalletAccountUI;
	})(View);
var AdminWalletAddAddressUI=(function(_super){
		function AdminWalletAddAddressUI(){
			
		    this.Title=null;
		    this.BtnOk=null;
		    this.BtnClose=null;
		    this.Address=null;

			AdminWalletAddAddressUI.__super.call(this);
		}

		CLASS$(AdminWalletAddAddressUI,'ui.background.AdminWalletAddAddressUI',_super);
		var __proto__=AdminWalletAddAddressUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AdminWalletAddAddressUI.uiView);

		}

		AdminWalletAddAddressUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":100,"x":0,"width":470,"skin":"resource/base.png","sizeGrid":"5,5,5,5","height":300,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":30,"width":400,"var":"Title","valign":"middle","text":"添加运营账号","height":50,"fontSize":30,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Button","props":{"y":200,"width":300,"var":"BtnOk","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"确认","height":70,"centerX":0}},{"type":"Button","props":{"width":80,"var":"BtnClose","top":10,"left":5,"height":80},"child":[{"type":"Image","props":{"y":19,"x":24,"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"TextInput","props":{"y":120,"width":400,"var":"Address","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"输入账号地址","height":60,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}}]}]};
		return AdminWalletAddAddressUI;
	})(View);
var AdminWalletAddressUI=(function(_super){
		function AdminWalletAddressUI(){
			
		    this.Title=null;
		    this.BtnBack=null;
		    this.AddressList=null;
		    this.BtnAdd=null;

			AdminWalletAddressUI.__super.call(this);
		}

		CLASS$(AdminWalletAddressUI,'ui.background.AdminWalletAddressUI',_super);
		var __proto__=AdminWalletAddressUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AdminWalletAddressUI.uiView);

		}

		AdminWalletAddressUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":10,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,15,12,8","height":800,"centerX":0}},{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_top.png","height":82,"centerX":0}},{"type":"Label","props":{"y":20,"width":280,"var":"Title","valign":"middle","text":"运营账号管理","strokeColor":"#381A09","stroke":5,"height":40,"fontSize":30,"color":"#ffc43b","centerX":0,"align":"center"}},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"List","props":{"y":100,"x":5,"width":470,"var":"AddressList","height":600,"centerX":0},"child":[{"type":"Box","props":{"y":0,"x":0,"width":470,"name":"render","height":60},"child":[{"type":"Label","props":{"x":10,"width":400,"valign":"middle","text":"地址地址地址地址地址地址地址地址地址地址","overflow":"scroll","name":"Address","height":40,"fontSize":20,"color":"#ffffff","centerY":0,"align":"left"}},{"type":"Button","props":{"y":180,"x":420,"width":40,"stateNum":1,"skin":"resource/close.png","right":10,"name":"BtnDelete","labelSize":20,"labelColors":"#ffffff","labelAlign":"center","height":40,"centerY":0}}]}]},{"type":"Button","props":{"y":710,"width":300,"var":"BtnAdd","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"添加运营账号","height":70,"centerX":0}}]};
		return AdminWalletAddressUI;
	})(View);
var AdminWalletMainUI=(function(_super){
		function AdminWalletMainUI(){
			
		    this.BtnAdmin=null;
		    this.BtnMoney=null;
		    this.BtnAccount=null;
		    this.BtnContract=null;
		    this.BtnRefresh=null;
		    this.BtnLoginOut=null;
		    this.TxtLastProposalDesc=null;
		    this.TxtLastProposalStatus=null;
		    this.TxtCurProposalDesc=null;
		    this.BtnAccept=null;
		    this.BtnReject=null;
		    this.BtnAccepted=null;
		    this.QRCode=null;
		    this.Address=null;
		    this.Money=null;
		    this.Currency=null;

			AdminWalletMainUI.__super.call(this);
		}

		CLASS$(AdminWalletMainUI,'ui.background.AdminWalletMainUI',_super);
		var __proto__=AdminWalletMainUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AdminWalletMainUI.uiView);

		}

		AdminWalletMainUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,5,5,5","height":800}},{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/base.png","height":800}},{"type":"Image","props":{"y":0,"width":480,"skin":"resource/main_top.png","height":82,"centerX":0}},{"type":"Button","props":{"x":0,"width":120,"var":"BtnAdmin","stateNum":1,"skin":"resource/btn_wallet2.png","sizeGrid":"10,10,10,10","labelSize":24,"labelColors":"#ffffff,#40E0D0,#40E0D0","label":"运营","height":80,"bottom":-5}},{"type":"Button","props":{"x":360,"width":120,"var":"BtnMoney","stateNum":1,"skin":"resource/btn_wallet2.png","sizeGrid":"10,10,10,10","labelSize":24,"labelColors":"#ffffff,#40E0D0,#40E0D0","label":"资金","height":80,"bottom":-5}},{"type":"Button","props":{"x":120,"width":120,"var":"BtnAccount","stateNum":1,"skin":"resource/btn_wallet2.png","sizeGrid":"10,10,10,10","labelSize":24,"labelColors":"#ffffff,#40E0D0,#40E0D0","label":"权限","height":80,"bottom":-5}},{"type":"Label","props":{"y":20,"width":280,"valign":"middle","text":"超级管理","strokeColor":"#381A09","stroke":5,"height":40,"fontSize":30,"color":"#ffc43b","centerX":0,"align":"center"}},{"type":"Button","props":{"x":240,"width":120,"var":"BtnContract","stateNum":1,"skin":"resource/btn_wallet2.png","sizeGrid":"10,10,10,10","labelSize":24,"labelColors":"#ffffff,#40E0D0,#40E0D0","label":"合约","height":80,"bottom":-5}},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnRefresh","height":80},"child":[{"type":"Image","props":{"width":50,"skin":"resource/refresh.png","height":60,"centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":0,"width":80,"var":"BtnLoginOut","right":0,"height":80},"child":[{"type":"Image","props":{"width":48,"skin":"resource/out.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":500,"width":450,"skin":"resource/game3card.png","sizeGrid":"10,10,10,10","height":220,"centerX":0,"alpha":0.8},"child":[{"type":"Label","props":{"y":50,"wordWrap":true,"width":430,"var":"TxtLastProposalDesc","valign":"middle","height":100,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":155,"wordWrap":true,"width":400,"var":"TxtLastProposalStatus","valign":"middle","height":50,"fontSize":30,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":0,"x":25,"wordWrap":true,"width":400,"valign":"middle","text":"上一个提案","strokeColor":"#333333","stroke":3,"height":40,"fontSize":25,"color":"#ffffff","centerX":0,"align":"center"}}]},{"type":"Image","props":{"y":270,"width":450,"skin":"resource/game3card.png","sizeGrid":"10,10,10,10","height":220,"centerX":0},"child":[{"type":"Label","props":{"y":50,"wordWrap":true,"width":430,"var":"TxtCurProposalDesc","valign":"middle","height":100,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Button","props":{"y":155,"width":150,"var":"BtnAccept","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#22e807","label":"同意","height":50,"centerX":120}},{"type":"Button","props":{"y":155,"width":150,"var":"BtnReject","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#f93633","label":"拒绝","height":50,"centerX":-120}},{"type":"Button","props":{"y":155,"width":225,"var":"BtnAccepted","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#22e807","label":"已同意","height":50,"disabled":true,"centerX":0}},{"type":"Label","props":{"y":0,"x":26,"wordWrap":true,"width":400,"valign":"middle","text":"待处理的提案","strokeColor":"#333333","stroke":3,"height":40,"fontSize":25,"color":"#ffffff","centerX":0,"align":"center"}}]},{"type":"Image","props":{"y":130,"x":20,"width":120,"var":"QRCode","height":120}},{"type":"TextArea","props":{"y":90,"wordWrap":true,"width":450,"var":"Address","valign":"middle","text":"Address","overflow":"scroll","height":25,"fontSize":20,"editable":false,"color":"#c0c0c0","centerX":0,"align":"center"}},{"type":"Label","props":{"y":200,"width":200,"var":"Money","valign":"bottom","text":"999999","right":90,"height":50,"fontSize":40,"color":"#F6F3E1","align":"right"}},{"type":"Label","props":{"y":200,"width":100,"var":"Currency","valign":"bottom","text":"ETH","right":20,"height":50,"fontSize":30,"color":"#F6F3E1","align":"right"}}]};
		return AdminWalletMainUI;
	})(View);
var AdminWithDrawUI=(function(_super){
		function AdminWithDrawUI(){
			
		    this.AbleWithDraw=null;
		    this.BtnOk=null;
		    this.ChooseAddress=null;
		    this.EditMoney=null;
		    this.BtnBack=null;

			AdminWithDrawUI.__super.call(this);
		}

		CLASS$(AdminWithDrawUI,'ui.background.AdminWithDrawUI',_super);
		var __proto__=AdminWithDrawUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(AdminWithDrawUI.uiView);

		}

		AdminWithDrawUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,15,12,8","height":800}},{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_top.png","height":82,"centerX":0}},{"type":"Label","props":{"y":20,"width":280,"valign":"middle","text":"转出","strokeColor":"#381A09","stroke":5,"height":40,"fontSize":30,"color":"#ffc43b","centerX":0,"align":"center"}},{"type":"Label","props":{"y":220,"width":400,"var":"AbleWithDraw","valign":"middle","text":"可提现金额：\b","height":40,"fontSize":24,"color":"#40e0d0","centerX":-10,"align":"left"}},{"type":"Button","props":{"y":700,"width":400,"var":"BtnOk","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"确认","height":70,"centerX":0}},{"type":"ComboBox","props":{"y":150,"width":440,"var":"ChooseAddress","skin":"resource/input.png","sizeGrid":"10,10,10,10","labelSize":27,"labelColors":"#ffffff,#ffffff,#ffffff","height":60,"fontSize":27,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"TextInput","props":{"y":265,"width":440,"var":"EditMoney","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"  金额","height":60,"fontSize":30,"color":"#ffffff","centerX":0,"align":"left"}},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Label","props":{"y":100,"width":400,"valign":"middle","text":"选择提现地址","height":40,"fontSize":24,"color":"#40e0d0","centerX":-10,"align":"left"}}]};
		return AdminWithDrawUI;
	})(View);
var BetDiff2UI=(function(_super){
		function BetDiff2UI(){
			
		    this.Txt1=null;
		    this.Bet_Diff2_1=null;
		    this.Bet_Diff2_2=null;
		    this.Bet_Diff2_3=null;
		    this.Bet_Diff2_4=null;
		    this.Bet_Diff2_5=null;
		    this.Bet_Diff2_6=null;
		    this.Bet_Diff2_1D=null;
		    this.Bet_Diff2_2D=null;
		    this.Bet_Diff2_3D=null;
		    this.Bet_Diff2_4D=null;
		    this.Bet_Diff2_5D=null;
		    this.Bet_Diff2_6D=null;
		    this.Bet_Diff2_1T=null;
		    this.Bet_Diff2_2T=null;
		    this.Bet_Diff2_3T=null;
		    this.Bet_Diff2_4T=null;
		    this.Bet_Diff2_5T=null;
		    this.Bet_Diff2_6T=null;

			BetDiff2UI.__super.call(this);
		}

		CLASS$(BetDiff2UI,'ui.game.BetDiff2UI',_super);
		var __proto__=BetDiff2UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BetDiff2UI.uiView);

		}

		BetDiff2UI.uiView={"type":"View","props":{"width":470,"height":600},"child":[{"type":"Image","props":{"y":0,"x":-5,"width":480,"skin":"resource/bet_bottom2.png","sizeGrid":"10,10,10,10","height":600,"centerX":0}},{"type":"Label","props":{"y":40,"x":110,"width":250,"text":"猜有2个号码不相同","strokeColor":"#381A09","stroke":5,"overflow":"visible","height":30,"fontSize":25,"color":"#ffc43b","align":"center"}},{"type":"Label","props":{"y":100,"width":440,"var":"Txt1","text":"选2个不同的号码，奖金","overflow":"visible","height":20,"fontSize":20,"color":"#E2DCA7","centerX":0,"bold":false,"align":"left"}},{"type":"Button","props":{"y":140,"x":20,"width":60,"var":"Bet_Diff2_1","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"1","height":50}},{"type":"Button","props":{"y":140,"x":95,"width":60,"var":"Bet_Diff2_2","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"2","height":50}},{"type":"Button","props":{"y":140,"x":170,"width":60,"var":"Bet_Diff2_3","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"3","height":50}},{"type":"Button","props":{"y":140,"x":245,"width":60,"var":"Bet_Diff2_4","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"4","height":50}},{"type":"Button","props":{"y":140,"x":320,"width":60,"var":"Bet_Diff2_5","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"5","height":50}},{"type":"Button","props":{"y":140,"x":395,"width":60,"var":"Bet_Diff2_6","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"6","height":50}},{"type":"Label","props":{"y":230,"x":112,"width":250,"text":"胆拖玩法","strokeColor":"#381a09","stroke":5,"overflow":"visible","height":30,"fontSize":25,"color":"#ffc43b","align":"center"}},{"type":"Label","props":{"y":270,"width":440,"text":"胆码","overflow":"visible","height":25,"fontSize":25,"color":"#B6DFE5","centerX":0,"align":"center"}},{"type":"Button","props":{"y":310,"x":20,"width":60,"var":"Bet_Diff2_1D","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"1","height":50}},{"type":"Button","props":{"y":310,"x":95,"width":60,"var":"Bet_Diff2_2D","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"2","height":50}},{"type":"Button","props":{"y":310,"x":170,"width":60,"var":"Bet_Diff2_3D","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"3","height":50}},{"type":"Button","props":{"y":310,"x":245,"width":60,"var":"Bet_Diff2_4D","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"4","height":50}},{"type":"Button","props":{"y":310,"x":320,"width":60,"var":"Bet_Diff2_5D","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"5","height":50}},{"type":"Button","props":{"y":310,"x":395,"width":60,"var":"Bet_Diff2_6D","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"6","height":50}},{"type":"Label","props":{"y":370,"width":440,"text":"托码","overflow":"visible","height":25,"fontSize":25,"color":"#B6DFE5","centerX":0,"align":"center"}},{"type":"Button","props":{"y":410,"x":20,"width":60,"var":"Bet_Diff2_1T","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"1","height":50}},{"type":"Button","props":{"y":410,"x":95,"width":60,"var":"Bet_Diff2_2T","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"2","height":50}},{"type":"Button","props":{"y":410,"x":170,"width":60,"var":"Bet_Diff2_3T","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"3","height":50}},{"type":"Button","props":{"y":410,"x":245,"width":60,"var":"Bet_Diff2_4T","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"4","height":50}},{"type":"Button","props":{"y":410,"x":320,"width":60,"var":"Bet_Diff2_5T","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"5","height":50}},{"type":"Button","props":{"y":410,"x":395,"width":60,"var":"Bet_Diff2_6T","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"6","height":50}}]};
		return BetDiff2UI;
	})(View);
var BetDiff3UI=(function(_super){
		function BetDiff3UI(){
			
		    this.Txt1=null;
		    this.Bet_Diff3_1=null;
		    this.Bet_Diff3_2=null;
		    this.Bet_Diff3_3=null;
		    this.Bet_Diff3_4=null;
		    this.Bet_Diff3_5=null;
		    this.Bet_Diff3_6=null;
		    this.Txt2=null;
		    this.Bet_Diff3_Lian=null;
		    this.Bet_Diff3_1D=null;
		    this.Bet_Diff3_2D=null;
		    this.Bet_Diff3_3D=null;
		    this.Bet_Diff3_4D=null;
		    this.Bet_Diff3_5D=null;
		    this.Bet_Diff3_6D=null;
		    this.Bet_Diff3_1T=null;
		    this.Bet_Diff3_2T=null;
		    this.Bet_Diff3_3T=null;
		    this.Bet_Diff3_4T=null;
		    this.Bet_Diff3_5T=null;
		    this.Bet_Diff3_6T=null;

			BetDiff3UI.__super.call(this);
		}

		CLASS$(BetDiff3UI,'ui.game.BetDiff3UI',_super);
		var __proto__=BetDiff3UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BetDiff3UI.uiView);

		}

		BetDiff3UI.uiView={"type":"View","props":{"width":470,"height":600},"child":[{"type":"Image","props":{"y":0,"x":-5,"width":480,"skin":"resource/bet_bottom2.png","sizeGrid":"10,10,10,10","height":600,"centerX":0}},{"type":"Label","props":{"y":20,"x":110,"width":250,"text":"猜3个号码各不相同","strokeColor":"#381A09","stroke":5,"overflow":"visible","height":30,"fontSize":25,"color":"#ffc43b","align":"center"}},{"type":"Label","props":{"y":70,"width":440,"var":"Txt1","text":"选3个不同的号码，奖金","overflow":"visible","height":20,"fontSize":20,"color":"#E2DCA7","centerX":0,"align":"left"}},{"type":"Button","props":{"y":110,"x":20,"width":60,"var":"Bet_Diff3_1","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"1","height":50}},{"type":"Button","props":{"y":110,"x":95,"width":60,"var":"Bet_Diff3_2","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"2","height":50}},{"type":"Button","props":{"y":110,"x":170,"width":60,"var":"Bet_Diff3_3","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"3","height":50}},{"type":"Button","props":{"y":110,"x":245,"width":60,"var":"Bet_Diff3_4","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"4","height":50}},{"type":"Button","props":{"y":110,"x":320,"width":60,"var":"Bet_Diff3_5","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"5","height":50}},{"type":"Button","props":{"y":110,"x":395,"width":60,"var":"Bet_Diff3_6","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"6","height":50}},{"type":"Label","props":{"y":190,"width":440,"var":"Txt2","text":"123/234/345/456任意，奖金","overflow":"visible","height":20,"fontSize":20,"color":"#E2DCA7","centerX":0,"align":"left"}},{"type":"Button","props":{"y":230,"x":20,"width":430,"var":"Bet_Diff3_Lian","toggle":true,"skin":"resource/btn2.png","sizeGrid":"10,10,10,10","labelSize":24,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"三连号通选","height":50}},{"type":"Label","props":{"y":330,"x":112,"width":250,"text":"胆拖玩法","strokeColor":"#381A09","stroke":5,"overflow":"visible","height":30,"fontSize":25,"color":"#ffc43b","align":"center"}},{"type":"Label","props":{"y":370,"width":440,"text":"胆码","overflow":"visible","height":25,"fontSize":25,"color":"#B6DFE5","centerX":0,"align":"center"}},{"type":"Button","props":{"y":410,"x":20,"width":60,"var":"Bet_Diff3_1D","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"1","height":50}},{"type":"Button","props":{"y":410,"x":95,"width":60,"var":"Bet_Diff3_2D","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"2","height":50}},{"type":"Button","props":{"y":410,"x":170,"width":60,"var":"Bet_Diff3_3D","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"3","height":50}},{"type":"Button","props":{"y":410,"x":245,"width":60,"var":"Bet_Diff3_4D","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"4","height":50}},{"type":"Button","props":{"y":410,"x":320,"width":60,"var":"Bet_Diff3_5D","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"5","height":50}},{"type":"Button","props":{"y":410,"x":395,"width":60,"var":"Bet_Diff3_6D","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"6","height":50}},{"type":"Label","props":{"y":490,"width":440,"text":"托码","overflow":"visible","height":25,"fontSize":25,"color":"#B6DFE5","centerX":0,"align":"center"}},{"type":"Button","props":{"y":530,"x":20,"width":60,"var":"Bet_Diff3_1T","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"1","height":50}},{"type":"Button","props":{"y":530,"x":95,"width":60,"var":"Bet_Diff3_2T","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"2","height":50}},{"type":"Button","props":{"y":530,"x":170,"width":60,"var":"Bet_Diff3_3T","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"3","height":50}},{"type":"Button","props":{"y":530,"x":245,"width":60,"var":"Bet_Diff3_4T","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"4","height":50}},{"type":"Button","props":{"y":530,"x":320,"width":60,"var":"Bet_Diff3_5T","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"5","height":50}},{"type":"Button","props":{"y":530,"x":395,"width":60,"var":"Bet_Diff3_6T","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"6","height":50}}]};
		return BetDiff3UI;
	})(View);
var BetSame2UI=(function(_super){
		function BetSame2UI(){
			
		    this.Bet_Same2_11=null;
		    this.Bet_Same2_22=null;
		    this.Bet_Same2_33=null;
		    this.Bet_Same2_44=null;
		    this.Bet_Same2_55=null;
		    this.Bet_Same2_66=null;
		    this.Txt1=null;
		    this.Bet_Same2_1=null;
		    this.Bet_Same2_2=null;
		    this.Bet_Same2_3=null;
		    this.Bet_Same2_4=null;
		    this.Bet_Same2_5=null;
		    this.Bet_Same2_6=null;
		    this.Txt2=null;
		    this.Bet_Same2_11A=null;
		    this.Bet_Same2_22A=null;
		    this.Bet_Same2_33A=null;
		    this.Bet_Same2_44A=null;
		    this.Bet_Same2_55A=null;
		    this.Bet_Same2_66A=null;

			BetSame2UI.__super.call(this);
		}

		CLASS$(BetSame2UI,'ui.game.BetSame2UI',_super);
		var __proto__=BetSame2UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BetSame2UI.uiView);

		}

		BetSame2UI.uiView={"type":"View","props":{"width":470,"height":600},"child":[{"type":"Image","props":{"y":0,"width":480,"skin":"resource/bet_bottom2.png","sizeGrid":"5,5,5,5","height":600,"centerX":0}},{"type":"Button","props":{"y":150,"x":20,"width":60,"var":"Bet_Same2_11","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"11","height":50}},{"type":"Button","props":{"y":150,"x":95,"width":60,"var":"Bet_Same2_22","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"22","height":50}},{"type":"Button","props":{"y":150,"x":170,"width":60,"var":"Bet_Same2_33","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"33","height":50}},{"type":"Button","props":{"y":150,"x":245,"width":60,"var":"Bet_Same2_44","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"44","height":50}},{"type":"Button","props":{"y":150,"x":320,"width":60,"var":"Bet_Same2_55","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"55","height":50}},{"type":"Button","props":{"y":150,"x":395,"width":60,"var":"Bet_Same2_66","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"66","height":50}},{"type":"Label","props":{"y":20,"x":110,"width":250,"text":"猜对子号（有2个相同）","strokeColor":"#381A09","stroke":5,"overflow":"visible","height":30,"fontSize":25,"color":"#ffc43b","align":"center"}},{"type":"Label","props":{"y":70,"width":440,"var":"Txt1","text":"选择同号与不同号的组合，奖金","overflow":"visible","height":20,"fontSize":20,"color":"#E2DCA7","centerX":0,"align":"left"}},{"type":"Button","props":{"y":260,"x":20,"width":60,"var":"Bet_Same2_1","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"1","height":50}},{"type":"Button","props":{"y":260,"x":95,"width":60,"var":"Bet_Same2_2","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"2","height":50}},{"type":"Button","props":{"y":260,"x":170,"width":60,"var":"Bet_Same2_3","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"3","height":50}},{"type":"Button","props":{"y":260,"x":245,"width":60,"var":"Bet_Same2_4","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"4","height":50}},{"type":"Button","props":{"y":260,"x":320,"width":60,"var":"Bet_Same2_5","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"5","height":50}},{"type":"Button","props":{"y":260,"x":395,"width":60,"var":"Bet_Same2_6","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"6","height":50}},{"type":"Label","props":{"y":110,"x":125,"width":220,"text":"同号","overflow":"visible","height":30,"fontSize":25,"color":"#B6DFE5","align":"center"}},{"type":"Label","props":{"y":220,"x":125,"width":220,"text":"不同号","overflow":"visible","height":30,"fontSize":25,"color":"#B6DFE5","align":"center"}},{"type":"Label","props":{"y":360,"width":440,"var":"Txt2","text":"猜两个指定的相同号码，奖金","overflow":"visible","height":20,"fontSize":20,"color":"#E2DCA7","centerX":0,"align":"left"}},{"type":"Button","props":{"y":400,"x":20,"width":60,"var":"Bet_Same2_11A","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"11*","height":50}},{"type":"Button","props":{"y":400,"x":95,"width":60,"var":"Bet_Same2_22A","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"22*","height":50}},{"type":"Button","props":{"y":400,"x":170,"width":60,"var":"Bet_Same2_33A","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"33*","height":50}},{"type":"Button","props":{"y":400,"x":245,"width":60,"var":"Bet_Same2_44A","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"44*","height":50}},{"type":"Button","props":{"y":400,"x":320,"width":60,"var":"Bet_Same2_55A","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"55*","height":50}},{"type":"Button","props":{"y":400,"x":395,"width":60,"var":"Bet_Same2_66A","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"66*","height":50}}]};
		return BetSame2UI;
	})(View);
var BetSame3UI=(function(_super){
		function BetSame3UI(){
			
		    this.Bet_111=null;
		    this.Bet_222=null;
		    this.Bet_333=null;
		    this.Bet_444=null;
		    this.Bet_555=null;
		    this.Bet_666=null;
		    this.Bet_Same=null;
		    this.Bonus_111=null;
		    this.Bonus_222=null;
		    this.Bonus_333=null;
		    this.Bonus_444=null;
		    this.Bonus_555=null;
		    this.Bonus_666=null;
		    this.Bonus_Same=null;

			BetSame3UI.__super.call(this);
		}

		CLASS$(BetSame3UI,'ui.game.BetSame3UI',_super);
		var __proto__=BetSame3UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BetSame3UI.uiView);

		}

		BetSame3UI.uiView={"type":"View","props":{"width":470,"height":600},"child":[{"type":"Image","props":{"y":0,"x":-5,"width":480,"skin":"resource/bet_bottom2.png","sizeGrid":"10,10,10,10","height":600,"centerX":0}},{"type":"Button","props":{"y":90,"x":20,"width":140,"var":"Bet_111","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"111","height":50}},{"type":"Button","props":{"y":90,"x":165,"width":140,"var":"Bet_222","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"222","height":50}},{"type":"Button","props":{"y":90,"x":310,"width":140,"var":"Bet_333","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"333","height":50}},{"type":"Button","props":{"y":200,"x":20,"width":140,"var":"Bet_444","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#777777","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"444","height":50}},{"type":"Button","props":{"y":200,"x":165,"width":140,"var":"Bet_555","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"555","height":50}},{"type":"Button","props":{"y":200,"x":310,"width":140,"var":"Bet_666","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"666","height":50}},{"type":"Button","props":{"y":370,"x":20,"width":430,"var":"Bet_Same","toggle":true,"skin":"resource/btn2.png","sizeGrid":"10,10,10,10","labelSize":24,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"三同号通选","height":50}},{"type":"Label","props":{"y":30,"x":125,"width":220,"text":"猜豹子号（3个相同）","strokeColor":"#381A09","stroke":5,"overflow":"visible","height":30,"fontSize":25,"color":"#ffc43b","align":"center"}},{"type":"Label","props":{"y":150,"x":20,"width":140,"var":"Bonus_111","text":"180倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":150,"x":165,"width":140,"var":"Bonus_222","text":"180倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":150,"x":310,"width":140,"var":"Bonus_333","text":"180倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":260,"x":20,"width":140,"var":"Bonus_444","text":"180倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":260,"x":165,"width":140,"var":"Bonus_555","text":"180倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":260,"x":310,"width":140,"var":"Bonus_666","text":"180倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":430,"x":20,"width":430,"var":"Bonus_Same","text":"30倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","bold":true,"align":"center"}},{"type":"Label","props":{"y":330,"x":20,"width":430,"text":"猜任意豹子","strokeColor":"#381A09","stroke":5,"overflow":"visible","height":30,"fontSize":25,"color":"#ffc43b","align":"center"}}]};
		return BetSame3UI;
	})(View);
var BetSumUI=(function(_super){
		function BetSumUI(){
			
		    this.Bet_3=null;
		    this.Bet_4=null;
		    this.Bet_5=null;
		    this.Bet_6=null;
		    this.Bet_7=null;
		    this.Bet_8=null;
		    this.Bet_9=null;
		    this.Bet_10=null;
		    this.Bet_11=null;
		    this.Bet_12=null;
		    this.Bet_13=null;
		    this.Bet_14=null;
		    this.Bet_15=null;
		    this.Bet_16=null;
		    this.Bet_17=null;
		    this.Bet_18=null;
		    this.BetAll_Big=null;
		    this.BetAll_Small=null;
		    this.BetAll_Singular=null;
		    this.BetAll_Even=null;
		    this.Bonus_3=null;
		    this.Bonus_13=null;
		    this.Bonus_12=null;
		    this.Bonus_11=null;
		    this.Bonus_18=null;
		    this.Bonus_17=null;
		    this.Bonus_16=null;
		    this.Bonus_15=null;
		    this.Bonus_4=null;
		    this.Bonus_6=null;
		    this.Bonus_5=null;
		    this.Bonus_7=null;
		    this.Bonus_8=null;
		    this.Bonus_9=null;
		    this.Bonus_10=null;
		    this.Bonus_14=null;

			BetSumUI.__super.call(this);
		}

		CLASS$(BetSumUI,'ui.game.BetSumUI',_super);
		var __proto__=BetSumUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BetSumUI.uiView);

		}

		BetSumUI.uiView={"type":"View","props":{"width":470,"height":600},"child":[{"type":"Image","props":{"y":0,"width":480,"skin":"resource/bet_bottom2.png","sizeGrid":"28,15,12,8","height":600,"centerX":0}},{"type":"Button","props":{"y":60,"x":20,"width":100,"var":"Bet_3","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"3","height":50}},{"type":"Button","props":{"y":60,"x":130,"width":100,"var":"Bet_4","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"4","height":50}},{"type":"Button","props":{"y":60,"x":240,"width":100,"var":"Bet_5","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"5","height":50}},{"type":"Button","props":{"y":60,"x":350,"width":100,"var":"Bet_6","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"6","height":50}},{"type":"Button","props":{"y":165,"x":20,"width":100,"var":"Bet_7","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"7","height":50}},{"type":"Button","props":{"y":165,"x":130,"width":100,"var":"Bet_8","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"8","height":50}},{"type":"Button","props":{"y":165,"x":240,"width":100,"var":"Bet_9","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"9","height":50}},{"type":"Button","props":{"y":165,"x":350,"width":100,"var":"Bet_10","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"10","height":50}},{"type":"Button","props":{"y":270,"x":20,"width":100,"var":"Bet_11","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"11","height":50}},{"type":"Button","props":{"y":270,"x":130,"width":100,"var":"Bet_12","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"12","height":50}},{"type":"Button","props":{"y":270,"x":240,"width":100,"var":"Bet_13","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"13","height":50}},{"type":"Button","props":{"y":270,"x":350,"width":100,"var":"Bet_14","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"14","height":50}},{"type":"Button","props":{"y":375,"x":20,"width":100,"var":"Bet_15","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"15","height":50}},{"type":"Button","props":{"y":375,"x":130,"width":100,"var":"Bet_16","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"16","height":50}},{"type":"Button","props":{"y":375,"x":240,"width":100,"var":"Bet_17","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"17","height":50}},{"type":"Button","props":{"y":375,"x":350,"width":100,"var":"Bet_18","toggle":true,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"18","height":50}},{"type":"Button","props":{"y":530,"x":20,"width":100,"var":"BetAll_Big","toggle":true,"skin":"resource/btn3.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#777777","labelStroke":3,"labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"大","height":50}},{"type":"Button","props":{"y":530,"x":130,"width":100,"var":"BetAll_Small","toggle":true,"skin":"resource/btn3.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#777777","labelStroke":3,"labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"小","height":50}},{"type":"Button","props":{"y":530,"x":240,"width":100,"var":"BetAll_Singular","toggle":true,"skin":"resource/btn3.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#777777","labelStroke":3,"labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"单","height":50}},{"type":"Button","props":{"y":530,"x":350,"width":100,"var":"BetAll_Even","toggle":true,"skin":"resource/btn3.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#777777","labelStroke":3,"labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"双","height":50}},{"type":"Label","props":{"y":20,"x":125,"width":220,"text":"猜开奖号码相加的和","strokeColor":"#381A09","stroke":5,"overflow":"visible","height":30,"fontSize":25,"color":"#ffc43b","align":"center"}},{"type":"Label","props":{"y":490,"x":125,"width":220,"text":"快速选号","strokeColor":"#381A09","stroke":5,"overflow":"visible","height":30,"fontSize":25,"color":"#ffc43b","align":"center"}},{"type":"Label","props":{"y":120,"x":20,"width":100,"var":"Bonus_3","text":"180倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":330,"x":240,"width":100,"var":"Bonus_13","text":"8.6倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":330,"x":130,"width":100,"var":"Bonus_12","text":"7.2倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":330,"x":20,"width":100,"var":"Bonus_11","text":"6.7倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":435,"x":350,"width":100,"var":"Bonus_18","text":"180倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","bold":false,"align":"center"}},{"type":"Label","props":{"y":435,"x":240,"width":100,"var":"Bonus_17","text":"60倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":435,"x":130,"width":100,"var":"Bonus_16","text":"30倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":435,"x":20,"width":100,"var":"Bonus_15","text":"18倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":120,"x":130,"width":100,"var":"Bonus_4","text":"60倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":120,"x":350,"width":100,"var":"Bonus_6","text":"18倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":120,"x":240,"width":100,"var":"Bonus_5","text":"30倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":225,"x":20,"width":100,"var":"Bonus_7","text":"12倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":225,"x":130,"width":100,"var":"Bonus_8","text":"8.6倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":225,"x":240,"width":100,"var":"Bonus_9","text":"7.2倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":225,"x":350,"width":100,"var":"Bonus_10","text":"6.7倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}},{"type":"Label","props":{"y":330,"x":350,"width":100,"var":"Bonus_14","text":"12倍","overflow":"visible","height":30,"fontSize":25,"color":"#E2DCA7","align":"center"}}]};
		return BetSumUI;
	})(View);
var DescUI=(function(_super){
		function DescUI(){
			
		    this.BtnBack=null;
		    this.Desc=null;

			DescUI.__super.call(this);
		}

		CLASS$(DescUI,'ui.game.DescUI',_super);
		var __proto__=DescUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(DescUI.uiView);

		}

		DescUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,15,12,8","height":800}},{"type":"Label","props":{"y":20,"width":280,"valign":"middle","text":"玩法说明","strokeColor":"#381A09","stroke":5,"height":40,"fontSize":30,"color":"#ffc43b","centerX":0,"align":"center"}},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"x":10,"width":460,"skin":"resource/input.png","sizeGrid":"10,10,10,10","height":720,"bottom":0},"child":[{"type":"Label","props":{"x":90,"wordWrap":true,"width":440,"var":"Desc","overflow":"scroll","leading":10,"height":700,"fontSize":20,"color":"#F6F3E1","centerY":0,"centerX":0,"align":"left"}}]}]};
		return DescUI;
	})(View);
var GameMain1UI=(function(_super){
		function GameMain1UI(){
			
		    this.BtnType=null;
		    this.ResultTxt=null;
		    this.LastResult=null;
		    this.Num1=null;
		    this.Num2=null;
		    this.Num3=null;
		    this.TimeTxt=null;
		    this.NextTime=null;
		    this.BetTxt=null;
		    this.BtnRandom=null;
		    this.BtnOk=null;
		    this.GameMain=null;
		    this.BtnBack=null;
		    this.BtnMore=null;

			GameMain1UI.__super.call(this);
		}

		CLASS$(GameMain1UI,'ui.game.GameMain1UI',_super);
		var __proto__=GameMain1UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameMain1UI.uiView);

		}

		GameMain1UI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,15,12,8","height":800}},{"type":"Image","props":{"width":480,"skin":"resource/main_top.png","sizeGrid":"28,15,12,8","height":82}},{"type":"Image","props":{"width":480,"skin":"resource/main_top.png","sizeGrid":"28,15,12,8","height":82,"centerX":0,"bottom":0}},{"type":"Tab","props":{"y":80,"width":450,"var":"BtnType","space":1,"skin":"resource/tab.png","labels":"和值,三同,二同,三不同,二不同","labelStrokeColor":"#AF401E","labelStroke":5,"labelSize":20,"labelColors":"#ffffff,#ffffff,#ffffff","labelAlign":"center","height":50,"direction":"horizontal","centerX":0}},{"type":"TextArea","props":{"y":5,"width":170,"var":"ResultTxt","type":"text","text":"0期开奖号码","mouseEnabled":false,"hitTestPrior":false,"height":70,"fontSize":24,"editable":false,"color":"#F6F3E1","centerX":-90,"align":"center"},"child":[{"type":"Label","props":{"y":35,"width":143,"var":"LastResult","height":30,"fontSize":30,"color":"#ffd700","centerX":0,"bold":true,"align":"center"}},{"type":"Image","props":{"x":20,"width":40,"var":"Num1","skin":"resource/dice1.png","height":40,"centerY":15}},{"type":"Image","props":{"width":40,"var":"Num2","skin":"resource/dice1.png","height":40,"centerY":15,"centerX":0}},{"type":"Image","props":{"width":40,"var":"Num3","skin":"resource/dice1.png","right":20,"height":40,"centerY":15}}]},{"type":"TextArea","props":{"y":5,"width":170,"var":"TimeTxt","type":"text","text":"距离开奖时间","mouseEnabled":false,"hitTestPrior":false,"height":70,"fontSize":24,"editable":false,"color":"#F6F3E1","centerX":90,"alpha":1,"align":"center"},"child":[{"type":"Label","props":{"y":35,"width":143,"var":"NextTime","text":"MM:SS","height":30,"fontSize":30,"color":"#B6DFE5","centerX":0,"align":"center"}}]},{"type":"Image","props":{"width":250,"skin":"resource/input.png","sizeGrid":"5,5,5,5","height":80,"centerX":0,"bottom":0},"child":[{"type":"Label","props":{"width":250,"var":"BetTxt","text":"共$注，$元","height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"align":"center"}}]},{"type":"Button","props":{"x":10,"width":100,"var":"BtnRandom","stateNum":1,"skin":"resource/btn1.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":24,"labelColors":"#FEF1AF,#FEF1AF,#FEF1AF","label":"机选","height":70,"bottom":10}},{"type":"Button","props":{"x":375,"width":100,"var":"BtnOk","stateNum":1,"skin":"resource/btn1.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":24,"labelColors":"#FEF1AF,#FEF1AF,#FEF1AF","label":"确定","height":70,"bottom":10}},{"type":"Panel","props":{"y":130,"x":5,"width":470,"var":"GameMain","height":580}},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":0,"width":80,"var":"BtnMore","right":0,"height":80},"child":[{"type":"Image","props":{"width":46,"skin":"resource/more.png","height":22,"centerY":0,"centerX":0}}]}]};
		return GameMain1UI;
	})(View);
var Kuai3OrderListUI=(function(_super){
		function Kuai3OrderListUI(){
			
		    this.OrderList=null;
		    this.TimeTxt=null;
		    this.EndTime=null;
		    this.BtnClear=null;
		    this.BetTxt=null;
		    this.BtnBack=null;
		    this.BtnPay=null;
		    this.BtnRandom=null;
		    this.RateTxt=null;
		    this.BtnDec=null;
		    this.BtnAdd=null;
		    this.BtnRate=null;
		    this.RateList=null;
		    this.BtnHideRateList=null;
		    this.BtnRate50=null;
		    this.BtnRate20=null;
		    this.BtnRate10=null;

			Kuai3OrderListUI.__super.call(this);
		}

		CLASS$(Kuai3OrderListUI,'ui.game.Kuai3OrderListUI',_super);
		var __proto__=Kuai3OrderListUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(Kuai3OrderListUI.uiView);

		}

		Kuai3OrderListUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"x":10,"width":480,"skin":"resource/main_bg.png","height":800,"centerY":0,"centerX":0}},{"type":"Image","props":{"y":718,"x":0,"width":480,"skin":"resource/main_top.png","sizeGrid":"28,15,12,8","height":82,"centerX":0,"bottom":0}},{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_top.png","sizeGrid":"28,15,12,8","height":82,"centerX":0}},{"type":"List","props":{"y":90,"x":5,"width":470,"var":"OrderList","height":550},"child":[{"type":"Box","props":{"y":5,"width":460,"name":"render","height":100,"centerX":0},"child":[{"type":"Image","props":{"width":460,"skin":"resource/base.png","sizeGrid":"5,5,5,5","height":110,"centerY":0,"centerX":0}},{"type":"Image","props":{"y":0,"x":5,"width":450,"skin":"resource/line.png","sizeGrid":"5,5,5,5","height":100,"centerY":0,"centerX":0}},{"type":"Button","props":{"width":450,"sizeGrid":"10,10,10,10","name":"BtnCheck","labelSize":40,"labelColors":"#ffffff","labelAlign":"left","height":100,"centerY":0,"centerX":0,"alpha":0.5}},{"type":"Button","props":{"y":10,"width":40,"stateNum":1,"skin":"resource/close.png","right":20,"name":"BtnDelete","labelSize":20,"labelColors":"#ffffff","labelAlign":"center","height":40}},{"type":"Label","props":{"y":55,"x":20,"width":150,"valign":"middle","text":"和值","name":"Type","height":30,"fontSize":24,"color":"#c0c0c0","align":"left"}},{"type":"Label","props":{"y":10,"x":20,"width":300,"valign":"middle","text":"4,15,13,15","overflow":"hidden","name":"Numbers","height":30,"fontSize":27,"color":"#F6F3E1","align":"left"}},{"type":"Label","props":{"y":10,"x":300,"width":100,"valign":"middle","text":"5注","name":"Hands","height":30,"fontSize":24,"color":"#c0c0c0","align":"center"}},{"type":"Label","props":{"y":55,"x":280,"width":150,"valign":"middle","text":"1883ETH","name":"Price","height":30,"fontSize":24,"color":"#ffd700","align":"center"}}]}]},{"type":"Label","props":{"y":5,"x":165,"width":250,"var":"TimeTxt","text":"本期截止","height":80,"fontSize":27,"color":"#F6F3E1","centerX":0,"align":"center"},"child":[{"type":"Label","props":{"y":40,"x":0,"width":150,"var":"EndTime","text":"MM:SS","height":30,"fontSize":30,"color":"#B6DFE5","centerX":0,"align":"center"}}]},{"type":"Button","props":{"y":0,"width":80,"var":"BtnClear","right":0,"labelSize":24,"labelColors":"#40e0d0","labelAlign":"center","height":80},"child":[{"type":"Image","props":{"width":32,"skin":"resource/delete.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"y":730,"x":115,"width":250,"skin":"resource/input.png","sizeGrid":"10,10,10,10","height":80,"centerX":0,"bottom":0},"child":[{"type":"Label","props":{"x":-40,"width":250,"var":"BetTxt","text":"共$注，$元","height":24,"fontSize":24,"color":"#F6F3E1","centerY":0,"centerX":0,"align":"center"}}]},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Button","props":{"x":375,"width":100,"var":"BtnPay","stateNum":1,"skin":"resource/btn1.png","sizeGrid":"10,10,10,10","right":5,"labelStrokeColor":"#743A14","labelStroke":5,"labelSize":24,"labelColors":"#FEF1AF,#FEF1AF,#FEF1AF","label":"确定","height":70,"bottom":10}},{"type":"Button","props":{"x":10,"width":100,"var":"BtnRandom","stateNum":1,"skin":"resource/btn1.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":24,"labelColors":"#FEF1AF,#FEF1AF,#FEF1AF","label":"机选","height":70,"bottom":10}},{"type":"Image","props":{"y":650,"width":440,"skin":"resource/btn_create1.png","sizeGrid":"0,20,0,20","height":65,"centerX":0,"alpha":1},"child":[{"type":"Label","props":{"x":75,"width":100,"var":"RateTxt","text":"1倍","height":30,"fontSize":30,"color":"#ffffff","centerY":0,"centerX":0,"align":"center"}},{"type":"Button","props":{"x":0,"width":135,"var":"BtnDec","stateNum":1,"skin":"resource/dec.png","height":60,"centerY":0}},{"type":"Button","props":{"width":135,"var":"BtnAdd","stateNum":1,"skin":"resource/add.png","right":0,"height":60,"centerY":0}},{"type":"Button","props":{"y":10,"width":135,"var":"BtnRate","height":60,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":200,"visible":false,"var":"RateList","skin":"resource/base.png","sizeGrid":"10,10,10,10","height":200,"centerX":0,"bottom":60},"child":[{"type":"Button","props":{"width":480,"var":"BtnHideRateList","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","height":800,"centerY":-155,"centerX":0,"alpha":1}},{"type":"Button","props":{"y":130,"x":10,"width":180,"var":"BtnRate50","stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","right":10,"labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"50倍","height":60,"bottom":10,"alpha":1}},{"type":"Button","props":{"width":180,"var":"BtnRate20","stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"20倍","height":60,"centerX":0,"bottom":70,"alpha":1}},{"type":"Button","props":{"width":180,"var":"BtnRate10","stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","right":10,"labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"10倍","height":60,"bottom":130,"alpha":1}}]}]}]};
		return Kuai3OrderListUI;
	})(View);
var MoreUI=(function(_super){
		function MoreUI(){
			
		    this.BtnDesc=null;
		    this.BtnReport=null;

			MoreUI.__super.call(this);
		}

		CLASS$(MoreUI,'ui.game.MoreUI',_super);
		var __proto__=MoreUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MoreUI.uiView);

		}

		MoreUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/bg.png","sizeGrid":"30,5,5,5","height":800,"alpha":0.3}},{"type":"Image","props":{"width":200,"top":60,"skin":"resource/base.png","sizeGrid":"10,10,10,10","right":0,"height":150},"child":[{"type":"Button","props":{"width":180,"var":"BtnDesc","stateNum":3,"skin":"resource/btn_wallet.png","sizeGrid":"5,5,5,5","right":10,"labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"玩法说明","height":60,"bottom":10,"alpha":1}},{"type":"Button","props":{"width":180,"var":"BtnReport","stateNum":3,"skin":"resource/btn_wallet.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"开奖走势","height":60,"centerX":0,"bottom":77,"alpha":1}}]}]};
		return MoreUI;
	})(View);
var ReportUI=(function(_super){
		function ReportUI(){
			
		    this.RecordList=null;
		    this.BtnBack=null;
		    this.ReportType=null;
		    this.BtnSum=null;
		    this.BtnDiff=null;
		    this.BtnHotCold=null;

			ReportUI.__super.call(this);
		}

		CLASS$(ReportUI,'ui.game.ReportUI',_super);
		var __proto__=ReportUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ReportUI.uiView);

		}

		ReportUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,15,12,8","height":800}},{"type":"List","props":{"width":480,"var":"RecordList","vScrollBarSkin":"comp/vscroll.png","height":720,"centerX":0,"bottom":0},"child":[{"type":"Box","props":{"y":5,"width":480,"name":"render","height":50,"centerX":0},"child":[{"type":"Image","props":{"x":0,"width":80,"skin":"resource/input.png","sizeGrid":"10,10,10,10","height":50}},{"type":"Image","props":{"y":0,"x":80,"width":100,"skin":"resource/input.png","sizeGrid":"10,10,10,10","height":50}},{"type":"Image","props":{"y":0,"x":180,"width":100,"skin":"resource/input.png","sizeGrid":"10,10,10,10","height":50}},{"type":"Image","props":{"y":0,"x":280,"width":100,"skin":"resource/input.png","sizeGrid":"10,10,10,10","height":50}},{"type":"Image","props":{"y":0,"x":380,"width":100,"skin":"resource/input.png","sizeGrid":"10,10,10,10","height":50}},{"type":"Label","props":{"y":13,"x":0,"width":80,"text":"期数","name":"Round","height":25,"fontSize":24,"color":"#F6F3E1","centerY":0,"align":"center"}},{"type":"Label","props":{"y":13,"x":80,"width":100,"text":"开奖号","name":"Number","height":25,"fontSize":24,"color":"#E2DCA7","centerY":0,"align":"center"}},{"type":"Label","props":{"y":13,"x":180,"width":100,"text":"和值","name":"Sum","height":25,"fontSize":24,"color":"#ffffff","centerY":0,"align":"center"}},{"type":"Label","props":{"y":13,"x":280,"width":100,"text":"大小","name":"Size","height":25,"fontSize":24,"color":"#ffffff","centerY":0,"align":"center"}},{"type":"Label","props":{"y":13,"x":380,"width":100,"text":"单双","name":"Parity","height":25,"fontSize":24,"color":"#ffffff","centerY":0,"align":"center"}}]}]},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Tab","props":{"y":0,"width":300,"var":"ReportType","selectedIndex":0,"height":80,"centerX":0},"child":[{"type":"Button","props":{"width":100,"var":"BtnSum","stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","name":"item0","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"和值","height":80,"centerY":0,"centerX":-100}},{"type":"Button","props":{"width":100,"var":"BtnDiff","stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","name":"item1","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"同号","height":80,"centerY":0,"centerX":0}},{"type":"Button","props":{"y":0,"x":200,"width":100,"var":"BtnHotCold","stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","name":"item2","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":30,"labelColors":"#FEF5CC,#FEF5CC,#FEF5CC","label":"冷热","height":80,"centerY":0,"centerX":100}}]}]};
		return ReportUI;
	})(View);
var Game2BetInfoUI=(function(_super){
		function Game2BetInfoUI(){
			
		    this.BtnBack=null;
		    this.Btn1=null;
		    this.Btn2=null;
		    this.Btn5=null;
		    this.Btn10=null;
		    this.Btn20=null;
		    this.BtnMax=null;
		    this.BetTxt=null;
		    this.BtnReset=null;
		    this.BtnOk=null;
		    this.BtnClose=null;

			Game2BetInfoUI.__super.call(this);
		}

		CLASS$(Game2BetInfoUI,'ui.game2.Game2BetInfoUI',_super);
		var __proto__=Game2BetInfoUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(Game2BetInfoUI.uiView);

		}

		Game2BetInfoUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Button","props":{"y":0,"x":0,"width":480,"var":"BtnBack","skin":"resource/bg.png","sizeGrid":"30,5,5,5","height":800,"alpha":0.3}},{"type":"Image","props":{"y":100,"x":0,"width":450,"skin":"resource/dice_bg2.png","sizeGrid":"5,5,5,5","height":600,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":230,"x":60,"width":100,"var":"Btn1","stateNum":1,"skin":"resource/chip1.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":10,"labelSize":30,"labelColors":"#E2DCA7,#E2DCA7,#E2DCA7","labelAlign":"center","label":"+0.01","height":100}},{"type":"Button","props":{"y":230,"width":100,"var":"Btn2","stateNum":1,"skin":"resource/chip2.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":10,"labelSize":30,"labelColors":"#E2DCA7,#E2DCA7,#E2DCA7","labelAlign":"center","label":"+0.02","height":100,"centerX":0}},{"type":"Button","props":{"y":230,"width":100,"var":"Btn5","stateNum":1,"skin":"resource/chip3.png","sizeGrid":"5,5,5,5","right":60,"labelStrokeColor":"#381A09","labelStroke":10,"labelSize":30,"labelColors":"#E2DCA7,#E2DCA7,#E2DCA7","labelAlign":"center","label":"+0.05","height":100}},{"type":"Button","props":{"y":340,"x":60,"width":100,"var":"Btn10","stateNum":1,"skin":"resource/chip4.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":10,"labelSize":30,"labelColors":"#E2DCA7,#E2DCA7,#E2DCA7","labelAlign":"center","label":"+0.1","height":100}},{"type":"Button","props":{"y":340,"width":100,"var":"Btn20","stateNum":1,"skin":"resource/chip5.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":10,"labelSize":30,"labelColors":"#E2DCA7,#E2DCA7,#E2DCA7","labelAlign":"center","label":"+0.2","height":100,"centerX":0}},{"type":"Button","props":{"y":340,"width":100,"var":"BtnMax","stateNum":1,"skin":"resource/chip6.png","sizeGrid":"5,5,5,5","right":60,"labelStrokeColor":"#381A09","labelStroke":10,"labelSize":30,"labelColors":"#E2DCA7,#E2DCA7,#E2DCA7","labelAlign":"center","label":"+Max","height":100}},{"type":"Image","props":{"y":120,"width":400,"skin":"resource/input.png","sizeGrid":"5,5,5,5","height":80,"centerX":0},"child":[{"type":"Label","props":{"width":350,"var":"BetTxt","valign":"middle","text":"0.02","height":50,"fontSize":40,"color":"#ffffff","centerY":0,"centerX":0,"align":"center"}}]},{"type":"Label","props":{"y":30,"width":400,"valign":"middle","text":"选择下注金额","height":50,"fontSize":30,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Button","props":{"y":120,"width":80,"var":"BtnReset","right":20,"height":80},"child":[{"type":"Image","props":{"width":50,"skin":"resource/refresh.png","height":60,"centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":480,"width":294,"var":"BtnOk","stateNum":1,"skin":"resource/btn_confirm.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelPadding":"-5","labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"确定投注","height":99,"centerX":0}},{"type":"Button","props":{"width":80,"var":"BtnClose","top":10,"left":5,"height":80},"child":[{"type":"Image","props":{"y":19,"x":24,"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]}]}]};
		return Game2BetInfoUI;
	})(View);
var Game2RecordUI=(function(_super){
		function Game2RecordUI(){
			
		    this.RecordList=null;
		    this.BtnClose=null;
		    this.Desc=null;

			Game2RecordUI.__super.call(this);
		}

		CLASS$(Game2RecordUI,'ui.game2.Game2RecordUI',_super);
		var __proto__=Game2RecordUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(Game2RecordUI.uiView);

		}

		Game2RecordUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/bg.png","sizeGrid":"30,5,5,5","height":800,"alpha":0.3}},{"type":"Image","props":{"width":240,"skin":"resource/base.png","sizeGrid":"5,5,5,5","right":0,"height":600,"centerY":0},"child":[{"type":"List","props":{"y":50,"width":220,"var":"RecordList","height":530,"centerX":0},"child":[{"type":"Box","props":{"y":0,"width":230,"name":"render","height":100,"centerX":0},"child":[{"type":"Image","props":{"width":230,"skin":"resource/dice_wnd1.png","sizeGrid":"5,5,5,5","height":100,"centerY":0,"centerX":0}},{"type":"Label","props":{"width":150,"valign":"middle","text":"9999 ETH","right":10,"name":"BetMoney","height":30,"fontSize":20,"color":"#c0c0c0","bottom":15,"align":"right"}},{"type":"Label","props":{"y":5,"width":100,"valign":"middle","text":"100期","overflow":"hidden","name":"Round","left":10,"height":30,"fontSize":20,"color":"#Ffffff","align":"left"}},{"type":"Label","props":{"x":40,"width":60,"valign":"middle","name":"Result","height":30,"fontSize":20,"color":"#ffd700","bottom":15,"align":"left"}},{"type":"Label","props":{"y":5,"width":100,"valign":"middle","text":"未中奖","stroke":5,"right":10,"name":"Status","height":30,"fontSize":20,"color":"#fffff0","align":"right"}},{"type":"Label","props":{"width":150,"valign":"middle","text":"999 ETH","right":10,"name":"BonueMoney","height":30,"fontSize":20,"color":"#ffd700","bottom":15,"align":"right"}},{"type":"Image","props":{"x":10,"width":50,"skin":"resource/coin_heads.png","name":"Coin","height":50,"bottom":15}}]}]},{"type":"Label","props":{"y":20,"x":-90,"width":180,"valign":"middle","text":"我的投注","overflow":"hidden","height":30,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}}]},{"type":"Button","props":{"y":0,"x":0,"width":480,"var":"BtnClose","stateNum":3,"sizeGrid":"5,5,5,5","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","height":800,"centerY":0,"alpha":1}},{"type":"Label","props":{"width":240,"var":"Desc","valign":"middle","right":0,"height":600,"fontSize":30,"color":"#fffff0","centerY":0,"align":"center"}}]};
		return Game2RecordUI;
	})(View);
var Game2ReportUI=(function(_super){
		function Game2ReportUI(){
			
		    this.HistoryList=null;
		    this.BtnClose=null;
		    this.Desc=null;

			Game2ReportUI.__super.call(this);
		}

		CLASS$(Game2ReportUI,'ui.game2.Game2ReportUI',_super);
		var __proto__=Game2ReportUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(Game2ReportUI.uiView);

		}

		Game2ReportUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":10,"x":10,"width":480,"skin":"resource/bg.png","sizeGrid":"30,5,5,5","height":800,"alpha":0.3}},{"type":"Image","props":{"y":10,"width":200,"skin":"resource/base.png","sizeGrid":"5,5,5,5","left":0,"height":600,"centerY":0},"child":[{"type":"List","props":{"y":50,"width":180,"var":"HistoryList","height":530,"centerX":0},"child":[{"type":"Box","props":{"y":0,"width":190,"name":"render","height":70,"centerX":0},"child":[{"type":"Image","props":{"width":190,"skin":"resource/dice_wnd1.png","sizeGrid":"5,5,5,5","height":70,"centerY":0,"centerX":0}},{"type":"Label","props":{"width":100,"valign":"middle","text":"100期","overflow":"hidden","name":"Round","left":10,"height":30,"fontSize":20,"color":"#ffffff","centerY":0,"align":"left"}},{"type":"Label","props":{"width":40,"valign":"middle","right":10,"name":"Result","height":30,"fontSize":20,"color":"#ffd700","centerY":0,"align":"left"}},{"type":"Image","props":{"width":50,"skin":"resource/coin_heads.png","right":15,"name":"Coin","height":50,"centerY":0}}]}]},{"type":"Label","props":{"y":20,"width":180,"valign":"middle","text":"开奖记录","overflow":"hidden","height":30,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}}]},{"type":"Button","props":{"y":10,"width":480,"var":"BtnClose","stateNum":3,"sizeGrid":"5,5,5,5","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","height":800,"centerY":0,"centerX":0,"alpha":1}},{"type":"Label","props":{"y":100,"x":0,"width":200,"var":"Desc","valign":"middle","left":0,"height":600,"fontSize":30,"centerY":0,"align":"center"}}]};
		return Game2ReportUI;
	})(View);
var GameMain2UI=(function(_super){
		function GameMain2UI(){
			
		    this.GameMain=null;
		    this.BtnTails=null;
		    this.TxtTailsRate=null;
		    this.TxtTailsMoney=null;
		    this.BtnHeads=null;
		    this.TxtHeadsRate=null;
		    this.TxtHeadsMoney=null;
		    this.ResultTxt=null;
		    this.Coin=null;
		    this.TxtResultContainer=null;
		    this.TimeTxt=null;
		    this.NextTime=null;
		    this.BtnBack=null;
		    this.BtnMore=null;
		    this.BetMoney=null;
		    this.Txt1=null;
		    this.BonusMoney=null;
		    this.Txt2=null;
		    this.BtnRecord=null;
		    this.BtnReport=null;
		    this.BtnBlockLink=null;

			GameMain2UI.__super.call(this);
		}

		CLASS$(GameMain2UI,'ui.game2.GameMain2UI',_super);
		var __proto__=GameMain2UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameMain2UI.uiView);

		}

		GameMain2UI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"x":24,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,15,12,8","height":800,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":500,"skin":"resource/dice_bg.png","sizeGrid":"28,15,12,8","scaleY":0.95,"scaleX":0.95,"height":843,"centerY":0,"centerX":0}},{"type":"Image","props":{"y":0,"x":28,"width":424,"skin":"resource/dice_wnd3.png","height":763,"centerX":0}},{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_top.png","sizeGrid":"28,15,12,8","height":82,"centerX":0}},{"type":"Panel","props":{"y":0,"x":5,"width":470,"var":"GameMain","height":800},"child":[{"type":"Button","props":{"y":360,"width":180,"var":"BtnTails","stateNum":1,"skin":"resource/wnd_tails.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":10,"labelSize":30,"labelPadding":"-105","labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"labelAlign":"center","height":257,"centerX":90},"child":[{"type":"TextArea","props":{"y":0,"width":180,"var":"TxtTailsRate","valign":"middle","text":"1.9倍 ","strokeColor":"#381A09","stroke":5,"mouseEnabled":false,"height":40,"fontSize":25,"color":"#E2DCA7","centerX":0,"align":"center"}},{"type":"Label","props":{"width":180,"var":"TxtTailsMoney","valign":"middle","text":"999999","height":30,"fontSize":20,"color":"#ffffff","centerX":0,"bottom":15,"align":"center"}},{"type":"Label","props":{"y":175,"x":-180,"width":180,"valign":"middle","text":"尾数：13579bdf","height":40,"fontSize":20,"color":"#aaaaaa","centerX":0,"align":"center"}}]},{"type":"Button","props":{"y":360,"width":180,"var":"BtnHeads","stateNum":1,"skin":"resource/wnd_heads.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":10,"labelSize":30,"labelPadding":"-105","labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"labelAlign":"center","height":257,"centerX":-95},"child":[{"type":"TextArea","props":{"y":0,"width":180,"var":"TxtHeadsRate","valign":"middle","text":"1.9倍 ","strokeColor":"#381A09","stroke":5,"mouseEnabled":false,"height":40,"fontSize":25,"color":"#E2DCA7","centerX":0,"align":"center"}},{"type":"Label","props":{"x":200,"width":200,"var":"TxtHeadsMoney","valign":"middle","text":"999999","height":30,"fontSize":20,"color":"#ffffff","centerX":0,"bottom":15,"align":"center"}},{"type":"Label","props":{"y":175,"x":180,"width":180,"valign":"middle","text":"尾数：02468ace","height":40,"fontSize":20,"color":"#aaaaaa","centerX":0,"align":"center"}}]}]},{"type":"Image","props":{"y":90,"width":380,"skin":"resource/dice_wnd2.png","height":90,"centerX":0},"child":[{"type":"Label","props":{"y":0,"x":15,"width":350,"var":"ResultTxt","valign":"middle","type":"text","text":"期开奖结果","strokeColor":"#381A09","stroke":5,"mouseEnabled":false,"hitTestPrior":false,"height":50,"fontSize":27,"editable":false,"color":"#E2DCA7","centerX":0,"align":"center"}}]},{"type":"Image","props":{"y":140,"width":100,"var":"Coin","skin":"resource/coin_heads.png","height":100,"centerX":0}},{"type":"Panel","props":{"y":280,"x":77,"wordWrap":true,"width":326,"var":"TxtResultContainer","valign":"middle","text":"0xf76f310b23bd9c4ce6ee303ec75bb74dadeae885aba1af7d8a45b6827fc266ed","height":80,"fontSize":26,"color":"#aaaaaa","centerX":0,"bold":true,"align":"left"}},{"type":"TextArea","props":{"y":5,"width":250,"var":"TimeTxt","type":"text","text":"距离{}期开奖时间","mouseEnabled":false,"hitTestPrior":false,"height":70,"fontSize":24,"editable":false,"color":"#F6F3E1","centerX":0,"alpha":1,"align":"center"},"child":[{"type":"Label","props":{"y":35,"width":143,"var":"NextTime","text":"MM:SS","height":30,"fontSize":30,"color":"#B6DFE5","centerX":0,"align":"center"}}]},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":0,"width":80,"visible":false,"var":"BtnMore","right":0,"height":80,"alpha":1},"child":[{"type":"Image","props":{"width":46,"skin":"resource/more.png","height":22,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"width":180,"skin":"resource/money_left.png","sizeGrid":"5,5,5,5","height":121,"centerX":-95,"bottom":55},"child":[{"type":"Label","props":{"width":150,"var":"BetMoney","valign":"middle","text":"--","height":30,"fontSize":25,"color":"#F6F3E1","centerY":0,"centerX":10,"align":"center"}},{"type":"Label","props":{"y":5,"width":50,"valign":"middle","text":"本金","height":30,"fontSize":25,"color":"#F6F3E1","centerX":10,"align":"right"}},{"type":"Label","props":{"width":50,"var":"Txt1","valign":"middle","height":30,"fontSize":25,"color":"#E2DCA7","centerX":10,"bottom":10,"align":"center"}}]},{"type":"Image","props":{"width":180,"skin":"resource/money_right.png","sizeGrid":"5,5,5,5","height":121,"centerX":90,"bottom":55},"child":[{"type":"Label","props":{"y":5,"width":50,"valign":"middle","text":"奖金","height":30,"fontSize":25,"color":"#F6F3E1","centerX":-10,"align":"right"}},{"type":"Label","props":{"width":150,"var":"BonusMoney","valign":"middle","text":"--","height":30,"fontSize":25,"color":"#F6F3E1","centerY":0,"centerX":-10,"align":"center"}},{"type":"Label","props":{"y":126,"width":50,"var":"Txt2","valign":"middle","height":30,"fontSize":25,"color":"#E2DCA7","centerX":-10,"bottom":10,"align":"center"}}]},{"type":"Button","props":{"y":10,"x":0,"width":63,"var":"BtnRecord","stateNum":1,"skin":"resource/left.png","sizeGrid":"10,10,10,10","scaleY":0.8,"scaleX":0.8,"right":0,"labelStrokeColor":"#743A14","labelStroke":5,"labelSize":20,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","height":72,"centerY":0}},{"type":"Button","props":{"y":340,"x":0,"width":63,"var":"BtnReport","stateNum":1,"skin":"resource/right.png","sizeGrid":"10,10,10,10","scaleY":0.8,"scaleX":0.8,"left":0,"labelStrokeColor":"#743A14","labelStroke":5,"labelSize":20,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","height":72,"centerY":0}},{"type":"Button","props":{"y":230,"width":80,"visible":false,"var":"BtnBlockLink","right":118,"height":80,"alpha":1},"child":[{"type":"Image","props":{"width":46,"skin":"resource/more.png","height":22,"centerY":0,"centerX":0}}]}]};
		return GameMain2UI;
	})(View);
var BetGoalUI=(function(_super){
		function BetGoalUI(){
			
		    this.BettingList=null;

			BetGoalUI.__super.call(this);
		}

		CLASS$(BetGoalUI,'ui.game3.BetGoalUI',_super);
		var __proto__=BetGoalUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BetGoalUI.uiView);

		}

		BetGoalUI.uiView={"type":"View","props":{"width":470,"height":600},"child":[{"type":"List","props":{"y":0,"x":0,"width":470,"var":"BettingList","height":600},"child":[{"type":"Box","props":{"y":10,"width":480,"scaleY":0.95,"scaleX":0.95,"name":"render","height":262,"centerX":0},"child":[{"type":"Image","props":{"width":480,"skin":"resource/game3card.png","sizeGrid":"5,5,5,5","height":262,"centerY":0,"centerX":0}},{"type":"Image","props":{"y":60,"width":475,"skin":"resource/game3wnd.png","sizeGrid":"5,5,5,5","scaleY":0.95,"scaleX":0.95,"height":190,"centerX":0}},{"type":"Label","props":{"y":0,"width":200,"valign":"middle","text":"世界杯","strokeColor":"#333333","stroke":8,"overflow":"hidden","name":"GameType","height":40,"fontSize":27,"color":"#ffffff","centerX":0,"bold":true,"align":"center"}},{"type":"Label","props":{"y":60,"width":262,"valign":"middle","text":"截止时间","right":25,"overflow":"hidden","name":"EndTime","height":40,"fontSize":20,"color":"#aaaaaa","align":"right"}},{"type":"Label","props":{"y":60,"x":25,"width":200,"valign":"middle","text":"999999 ETH","overflow":"visible","name":"TotalBonus","height":40,"fontSize":20,"color":"#fffff0","align":"left"}},{"type":"Button","props":{"y":150,"x":85,"width":150,"toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","name":"BetOdd","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"进球单数(9.9)","height":60,"centerX":-80}},{"type":"Button","props":{"y":150,"width":150,"toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","name":"BetEven","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"进球双数(9.9)","height":60,"centerX":80}},{"type":"Label","props":{"y":100,"width":150,"valign":"middle","text":"vs","strokeColor":"#381A09","stroke":3,"overflow":"hidden","height":40,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":200,"width":150,"valign":"middle","text":"99%","overflow":"hidden","name":"BetOddPer","height":40,"fontSize":20,"color":"#aaaaaa","centerX":-80,"align":"center"}},{"type":"Label","props":{"y":200,"width":150,"valign":"middle","text":"99%","overflow":"hidden","name":"BetEvenPer","height":40,"fontSize":20,"color":"#aaaaaa","centerX":80,"align":"center"}},{"type":"Label","props":{"y":100,"width":200,"valign":"middle","text":"主队","strokeColor":"#381A09","stroke":5,"overflow":"scroll","name":"HomeName","height":40,"fontSize":25,"color":"#B6DFE5","centerX":-120,"align":"right"}},{"type":"Label","props":{"y":100,"width":200,"valign":"middle","text":"客队","strokeColor":"#381A09","stroke":5,"overflow":"scroll","name":"VisitorName","height":40,"fontSize":25,"color":"#B6DFE5","centerX":120,"align":"left"}},{"type":"Button","props":{"y":5,"width":40,"stateNum":1,"skin":"resource/close.png","right":5,"name":"BtnDelete","labelSize":20,"labelColors":"#ffffff","labelAlign":"center","height":40}}]}]}]};
		return BetGoalUI;
	})(View);
var BetScoreUI=(function(_super){
		function BetScoreUI(){
			
		    this.BettingList=null;

			BetScoreUI.__super.call(this);
		}

		CLASS$(BetScoreUI,'ui.game3.BetScoreUI',_super);
		var __proto__=BetScoreUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BetScoreUI.uiView);

		}

		BetScoreUI.uiView={"type":"View","props":{"width":470,"height":600},"child":[{"type":"List","props":{"y":0,"x":0,"width":470,"var":"BettingList","height":600},"child":[{"type":"Box","props":{"y":10,"width":480,"scaleY":0.95,"scaleX":0.95,"name":"render","height":262,"centerX":0},"child":[{"type":"Image","props":{"width":480,"skin":"resource/game3card.png","sizeGrid":"5,5,5,5","height":262,"centerY":0,"centerX":0}},{"type":"Image","props":{"y":60,"width":475,"skin":"resource/game3wnd.png","sizeGrid":"5,5,5,5","scaleY":0.95,"scaleX":0.95,"height":190,"centerX":0}},{"type":"Label","props":{"y":0,"width":200,"valign":"middle","text":"世界杯","strokeColor":"#333333","stroke":8,"overflow":"hidden","name":"GameType","height":40,"fontSize":27,"color":"#ffffff","centerX":0,"bold":true,"align":"center"}},{"type":"Label","props":{"y":60,"width":257,"valign":"middle","text":"截止时间","right":25,"overflow":"hidden","name":"EndTime","height":40,"fontSize":20,"color":"#aaaaaa","align":"right"}},{"type":"Label","props":{"y":60,"x":25,"width":200,"valign":"middle","text":"999999 ETH","overflow":"visible","name":"TotalBonus","height":40,"fontSize":20,"color":"#fffff0","align":"left"}},{"type":"Button","props":{"y":150,"width":420,"toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","name":"BtnChoose","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"点击选择比分","height":80,"centerX":0}},{"type":"Label","props":{"y":100,"width":150,"valign":"middle","text":"vs","strokeColor":"#381A09","stroke":3,"overflow":"hidden","height":40,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":100,"width":200,"valign":"middle","text":"主队","strokeColor":"#381A09","stroke":5,"overflow":"scroll","name":"HomeName","height":40,"fontSize":25,"color":"#B6DFE5","centerX":-120,"align":"right"}},{"type":"Label","props":{"y":100,"width":200,"valign":"middle","text":"客队","strokeColor":"#381A09","stroke":5,"overflow":"scroll","name":"VisitorName","height":40,"fontSize":25,"color":"#B6DFE5","centerX":120,"align":"left"}},{"type":"Button","props":{"y":5,"width":40,"stateNum":1,"skin":"resource/close.png","right":5,"name":"BtnDelete","labelSize":20,"labelColors":"#ffffff","labelAlign":"center","height":40}}]}]}]};
		return BetScoreUI;
	})(View);
var BetScoreInfoUI=(function(_super){
		function BetScoreInfoUI(){
			
		    this.HomeName=null;
		    this.VisitorName=null;
		    this.Bet10=null;
		    this.Bet00=null;
		    this.Bet01=null;
		    this.Bet10Per=null;
		    this.Bet00Per=null;
		    this.Bet01Per=null;
		    this.Bet20=null;
		    this.Bet11=null;
		    this.Bet02=null;
		    this.Bet20Per=null;
		    this.Bet11Per=null;
		    this.Bet02Per=null;
		    this.Bet21=null;
		    this.Bet22=null;
		    this.Bet12=null;
		    this.Bet21Per=null;
		    this.Bet22Per=null;
		    this.Bet12Per=null;
		    this.BetWin=null;
		    this.BetDraw=null;
		    this.BetLose=null;
		    this.BetWinPer=null;
		    this.BetDrawPer=null;
		    this.BetLosePer=null;
		    this.BtnConfirm=null;
		    this.BtnCancel=null;

			BetScoreInfoUI.__super.call(this);
		}

		CLASS$(BetScoreInfoUI,'ui.game3.BetScoreInfoUI',_super);
		var __proto__=BetScoreInfoUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BetScoreInfoUI.uiView);

		}

		BetScoreInfoUI.uiView={"type":"View","props":{"width":480,"skin":"resource/btn4.png","height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/dice_wnd1.png","sizeGrid":"10,10,10,10","height":800,"alpha":0.5}},{"type":"Image","props":{"x":0,"width":480,"skin":"resource/game3tip.png","sizeGrid":"100,30,120,30","height":650,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":30,"width":200,"var":"HomeName","valign":"middle","text":"主队","strokeColor":"#381A09","stroke":5,"overflow":"visible","height":40,"fontSize":25,"color":"#B6DFE5","centerX":-120,"align":"right"}},{"type":"Label","props":{"y":30,"width":150,"valign":"middle","text":"/","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":40,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":30,"width":200,"var":"VisitorName","valign":"middle","text":"客队","strokeColor":"#381A09","stroke":5,"overflow":"scroll","height":40,"fontSize":25,"color":"#B6DFE5","centerX":120,"align":"left"}},{"type":"Button","props":{"y":150,"width":120,"var":"Bet10","toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"1 - 0 (9.9)","height":60,"centerX":-140}},{"type":"Button","props":{"y":150,"width":120,"var":"Bet00","toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"0 - 0 (9.9)","height":60,"centerX":0}},{"type":"Button","props":{"y":150,"width":120,"var":"Bet01","toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"0 - 1 (9.9)","height":60,"centerX":140}},{"type":"Label","props":{"y":200,"width":120,"var":"Bet10Per","valign":"middle","text":"99%","overflow":"hidden","height":40,"fontSize":20,"color":"#aaaaaa","centerX":-140,"align":"center"}},{"type":"Label","props":{"y":200,"width":120,"var":"Bet00Per","valign":"middle","text":"99%","overflow":"hidden","height":40,"fontSize":20,"color":"#aaaaaa","centerX":0,"align":"center"}},{"type":"Label","props":{"y":200,"width":120,"var":"Bet01Per","valign":"middle","text":"99%","overflow":"hidden","height":40,"fontSize":20,"color":"#aaaaaa","centerX":140,"align":"center"}},{"type":"Button","props":{"y":250,"width":120,"var":"Bet20","toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"2 - 0 (9.9)","height":60,"centerX":-140}},{"type":"Button","props":{"y":250,"width":120,"var":"Bet11","toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"1 - 1 (9.9)","height":60,"centerX":0}},{"type":"Button","props":{"y":250,"width":120,"var":"Bet02","toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"0 - 2 (9.9)","height":60,"centerX":140}},{"type":"Label","props":{"y":300,"width":120,"var":"Bet20Per","valign":"middle","text":"99%","overflow":"hidden","height":40,"fontSize":20,"color":"#aaaaaa","centerX":-140,"align":"center"}},{"type":"Label","props":{"y":300,"width":120,"var":"Bet11Per","valign":"middle","text":"99%","overflow":"hidden","height":40,"fontSize":20,"color":"#aaaaaa","centerX":0,"align":"center"}},{"type":"Label","props":{"y":300,"width":120,"var":"Bet02Per","valign":"middle","text":"99%","overflow":"hidden","height":40,"fontSize":20,"color":"#aaaaaa","centerX":140,"align":"center"}},{"type":"Button","props":{"y":350,"width":120,"var":"Bet21","toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"2 - 1 (9.9)","height":60,"centerX":-140}},{"type":"Button","props":{"y":350,"width":120,"var":"Bet22","toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"2 - 2 (9.9)","height":60,"centerX":0}},{"type":"Button","props":{"y":350,"width":120,"var":"Bet12","toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"1 - 2 (9.9)","height":60,"centerX":140}},{"type":"Label","props":{"y":400,"width":120,"var":"Bet21Per","valign":"middle","text":"99%","overflow":"hidden","height":40,"fontSize":20,"color":"#aaaaaa","centerX":-140,"align":"center"}},{"type":"Label","props":{"y":400,"width":120,"var":"Bet22Per","valign":"middle","text":"99%","overflow":"hidden","height":40,"fontSize":20,"color":"#aaaaaa","centerX":0,"align":"center"}},{"type":"Label","props":{"y":400,"width":120,"var":"Bet12Per","valign":"middle","text":"99%","overflow":"hidden","height":40,"fontSize":20,"color":"#aaaaaa","centerX":140,"align":"center"}},{"type":"Button","props":{"y":450,"width":120,"var":"BetWin","toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"赢其他 (9.9)","height":60,"centerX":-140}},{"type":"Button","props":{"y":450,"width":120,"var":"BetDraw","toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"平其他 (9.9)","height":60,"centerX":0}},{"type":"Button","props":{"y":450,"width":120,"var":"BetLose","toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"负其他 (9.9)","height":60,"centerX":140}},{"type":"Label","props":{"y":500,"width":120,"var":"BetWinPer","valign":"middle","text":"99%","overflow":"hidden","height":40,"fontSize":20,"color":"#aaaaaa","centerX":-140,"align":"center"}},{"type":"Label","props":{"y":500,"width":120,"var":"BetDrawPer","valign":"middle","text":"99%","overflow":"hidden","height":40,"fontSize":20,"color":"#aaaaaa","centerX":0,"align":"center"}},{"type":"Label","props":{"y":500,"width":120,"var":"BetLosePer","valign":"middle","text":"99%","overflow":"hidden","height":40,"fontSize":20,"color":"#aaaaaa","centerX":140,"align":"center"}},{"type":"Label","props":{"y":100,"width":120,"valign":"middle","text":"主胜","strokeColor":"#111111","stroke":3,"overflow":"hidden","height":40,"fontSize":25,"color":"#40e0d0","centerX":-140,"align":"center"}},{"type":"Label","props":{"y":100,"width":120,"valign":"middle","text":"平局","strokeColor":"#111111","stroke":3,"overflow":"hidden","height":40,"fontSize":25,"color":"#40e0d0","centerX":0,"align":"center"}},{"type":"Label","props":{"y":100,"width":120,"valign":"middle","text":"主负","strokeColor":"#111111","stroke":3,"overflow":"hidden","height":40,"fontSize":25,"color":"#40e0d0","centerX":140,"align":"center"}},{"type":"Button","props":{"y":565,"width":180,"var":"BtnConfirm","toggle":true,"stateNum":1,"skin":"resource/btn4.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":30,"labelPadding":"-2","labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"确定","height":70,"centerX":120}},{"type":"Button","props":{"y":565,"width":180,"var":"BtnCancel","toggle":true,"stateNum":1,"skin":"resource/btn4.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":30,"labelPadding":"-2","labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"取消","height":70,"centerX":-120}}]}]};
		return BetScoreInfoUI;
	})(View);
var BetWinloseUI=(function(_super){
		function BetWinloseUI(){
			
		    this.BettingList=null;

			BetWinloseUI.__super.call(this);
		}

		CLASS$(BetWinloseUI,'ui.game3.BetWinloseUI',_super);
		var __proto__=BetWinloseUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BetWinloseUI.uiView);

		}

		BetWinloseUI.uiView={"type":"View","props":{"width":470,"height":600},"child":[{"type":"List","props":{"y":0,"x":0,"width":470,"var":"BettingList","height":600},"child":[{"type":"Box","props":{"y":10,"width":480,"scaleY":0.95,"scaleX":0.95,"name":"render","height":262,"centerX":0},"child":[{"type":"Image","props":{"width":480,"skin":"resource/game3card.png","sizeGrid":"5,5,5,5","height":262,"centerY":0,"centerX":0}},{"type":"Image","props":{"y":60,"width":475,"skin":"resource/game3wnd.png","sizeGrid":"5,5,5,5","scaleY":0.95,"scaleX":0.95,"height":190,"centerX":0}},{"type":"Label","props":{"y":0,"width":200,"valign":"middle","text":"世界杯","strokeColor":"#333333","stroke":8,"overflow":"hidden","name":"GameType","height":40,"fontSize":27,"color":"#ffffff","centerX":0,"bold":true,"align":"center"}},{"type":"Label","props":{"y":60,"width":234,"valign":"middle","text":"截止时间","right":25,"overflow":"hidden","name":"EndTime","height":40,"fontSize":20,"color":"#aaaaaa","align":"right"}},{"type":"Label","props":{"y":60,"x":25,"width":200,"valign":"middle","text":"999999 ETH","overflow":"visible","name":"TotalBonus","height":40,"fontSize":20,"color":"#fffff0","align":"left"}},{"type":"Button","props":{"y":150,"width":140,"toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","name":"BetHome","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"主胜(9.9)","height":60,"centerX":-140}},{"type":"Button","props":{"width":140,"toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","name":"BetDraw","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"平(9.9)","height":60,"centerX":0,"bottom":52}},{"type":"Button","props":{"y":150,"width":140,"toggle":true,"stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"5,5,5,5","name":"BetVisitor","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":20,"labelColors":"#fffff0,#fffff0,#fffff0","labelBold":true,"label":"客胜(9.9)","height":60,"centerX":140}},{"type":"Label","props":{"y":100,"width":150,"valign":"middle","text":"vs","strokeColor":"#381A09","stroke":3,"overflow":"hidden","height":40,"fontSize":20,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":200,"width":140,"valign":"middle","text":"99%","overflow":"hidden","name":"BetHomePer","height":40,"fontSize":20,"color":"#aaaaaa","centerX":-140,"align":"center"}},{"type":"Label","props":{"y":200,"width":140,"valign":"middle","text":"99%","overflow":"hidden","name":"BetDrawPer","height":40,"fontSize":20,"color":"#aaaaaa","centerX":0,"align":"center"}},{"type":"Label","props":{"y":100,"width":200,"valign":"middle","text":"主队","strokeColor":"#381A09","stroke":5,"overflow":"scroll","name":"HomeName","height":40,"fontSize":25,"color":"#B6DFE5","centerX":-120,"align":"right"}},{"type":"Label","props":{"y":100,"width":200,"valign":"middle","text":"客队","strokeColor":"#381A09","stroke":5,"overflow":"scroll","name":"VisitorName","height":40,"fontSize":25,"color":"#B6DFE5","centerX":120,"align":"left"}},{"type":"Button","props":{"y":5,"width":40,"stateNum":1,"skin":"resource/close.png","right":5,"name":"BtnDelete","labelSize":20,"labelColors":"#ffffff","labelAlign":"center","height":40}},{"type":"Label","props":{"y":200,"width":140,"valign":"middle","text":"99%","overflow":"hidden","name":"BetVisitorPer","height":40,"fontSize":20,"color":"#aaaaaa","centerX":140,"align":"center"}}]}]}]};
		return BetWinloseUI;
	})(View);
var FootBallOrderListUI=(function(_super){
		function FootBallOrderListUI(){
			
		    this.OrderList=null;
		    this.BtnClear=null;
		    this.BetTxt=null;
		    this.BtnBack=null;
		    this.BtnPay=null;
		    this.RateTxt=null;
		    this.BtnDec=null;
		    this.BtnAdd=null;
		    this.BtnRate=null;
		    this.RateList=null;
		    this.BtnHideRateList=null;
		    this.BtnRate50=null;
		    this.BtnRate20=null;
		    this.BtnRate10=null;

			FootBallOrderListUI.__super.call(this);
		}

		CLASS$(FootBallOrderListUI,'ui.game3.FootBallOrderListUI',_super);
		var __proto__=FootBallOrderListUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(FootBallOrderListUI.uiView);

		}

		FootBallOrderListUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"x":10,"width":480,"skin":"resource/main_bg.png","height":800,"centerY":0,"centerX":0}},{"type":"Image","props":{"y":718,"x":0,"width":480,"skin":"resource/main_top.png","sizeGrid":"28,15,12,8","height":82,"centerX":0,"bottom":0}},{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_top.png","sizeGrid":"28,15,12,8","height":82,"centerX":0}},{"type":"Panel","props":{"y":90,"x":5,"width":470,"var":"OrderList","height":550}},{"type":"Label","props":{"y":5,"x":165,"width":250,"valign":"middle","text":"确认订单","height":80,"fontSize":40,"color":"#F6F3E1","centerX":0,"align":"center"}},{"type":"Button","props":{"y":0,"width":80,"var":"BtnClear","right":0,"labelSize":24,"labelColors":"#40e0d0","labelAlign":"center","height":80},"child":[{"type":"Image","props":{"width":32,"skin":"resource/delete.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Image","props":{"x":5,"width":300,"skin":"resource/input.png","sizeGrid":"10,10,10,10","height":80,"bottom":0},"child":[{"type":"Label","props":{"x":-40,"width":250,"var":"BetTxt","text":"共$注，$元","height":24,"fontSize":24,"color":"#F6F3E1","centerY":0,"centerX":0,"align":"center"}}]},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Button","props":{"x":315,"width":160,"var":"BtnPay","stateNum":1,"skin":"resource/btn1.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#FEF1AF,#FEF1AF,#FEF1AF","label":"确定","height":80,"bottom":5}},{"type":"Image","props":{"y":650,"width":440,"skin":"resource/btn_create1.png","sizeGrid":"0,20,0,20","height":65,"centerX":0,"alpha":1},"child":[{"type":"Label","props":{"x":75,"width":100,"var":"RateTxt","text":"1倍","height":30,"fontSize":30,"color":"#ffffff","centerY":0,"centerX":0,"align":"center"}},{"type":"Button","props":{"x":0,"width":135,"var":"BtnDec","stateNum":1,"skin":"resource/dec.png","height":60,"centerY":0}},{"type":"Button","props":{"width":135,"var":"BtnAdd","stateNum":1,"skin":"resource/add.png","right":0,"height":60,"centerY":0}},{"type":"Button","props":{"y":10,"width":135,"var":"BtnRate","height":60,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":200,"visible":false,"var":"RateList","skin":"resource/base.png","sizeGrid":"10,10,10,10","height":200,"centerX":0,"bottom":60},"child":[{"type":"Button","props":{"width":480,"var":"BtnHideRateList","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","height":800,"centerY":-155,"centerX":0,"alpha":1}},{"type":"Button","props":{"y":130,"x":10,"width":180,"var":"BtnRate50","stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","right":10,"labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"50倍","height":60,"bottom":10,"alpha":1}},{"type":"Button","props":{"width":180,"var":"BtnRate20","stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"20倍","height":60,"centerX":0,"bottom":70,"alpha":1}},{"type":"Button","props":{"width":180,"var":"BtnRate10","stateNum":3,"skin":"resource/checkbutton.png","sizeGrid":"10,10,10,10","right":10,"labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"10倍","height":60,"bottom":130,"alpha":1}}]}]}]};
		return FootBallOrderListUI;
	})(View);
var GameMain3UI=(function(_super){
		function GameMain3UI(){
			
		    this.BtnType=null;
		    this.BetTxt=null;
		    this.BtnOk=null;
		    this.GameMain=null;
		    this.BtnBack=null;
		    this.BtnMore=null;

			GameMain3UI.__super.call(this);
		}

		CLASS$(GameMain3UI,'ui.game3.GameMain3UI',_super);
		var __proto__=GameMain3UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameMain3UI.uiView);

		}

		GameMain3UI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,15,12,8","height":800}},{"type":"Image","props":{"width":480,"skin":"resource/main_top.png","sizeGrid":"28,15,12,8","height":82}},{"type":"Tab","props":{"y":0,"x":90,"width":300,"var":"BtnType","selectedIndex":0,"height":80,"centerX":0},"child":[{"type":"Image","props":{"y":0,"width":306,"skin":"resource/checkbutton_bg.png","sizeGrid":"28,15,12,8","height":80,"centerX":0}},{"type":"Button","props":{"y":0,"x":0,"width":100,"stateNum":3,"skin":"resource/checkbutton4.png","sizeGrid":"5,5,5,5","name":"item0","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":30,"labelColors":"#aaaaaa,#FEF5CC,#FEF5CC","label":"胜平负","height":80,"centerY":0,"centerX":-100}},{"type":"Button","props":{"y":0,"x":100,"width":100,"stateNum":3,"skin":"resource/checkbutton4.png","sizeGrid":"5,5,5,5","name":"item1","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":30,"labelColors":"#aaaaaa,#FEF5CC,#FEF5CC","label":"比分","height":80,"centerY":0,"centerX":0}},{"type":"Button","props":{"y":0,"x":200,"width":100,"stateNum":3,"skin":"resource/checkbutton4.png","sizeGrid":"5,5,5,5","name":"item2","labelStrokeColor":"#381A09","labelStroke":5,"labelSize":30,"labelColors":"#aaaaaa,#FEF5CC,#FEF5CC","label":"进球","height":80,"centerY":0,"centerX":100}}]},{"type":"Image","props":{"width":480,"skin":"resource/main_top.png","sizeGrid":"28,15,12,8","height":82,"centerX":0,"bottom":0}},{"type":"Image","props":{"x":5,"width":300,"skin":"resource/input.png","sizeGrid":"5,5,5,5","height":80,"bottom":0},"child":[{"type":"Label","props":{"width":250,"var":"BetTxt","text":"共$注，$元","height":24,"fontSize":24,"color":"#ffffff","centerY":0,"centerX":0,"align":"center"}}]},{"type":"Button","props":{"x":315,"width":160,"var":"BtnOk","stateNum":1,"skin":"resource/btn1.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#FEF1AF,#FEF1AF,#FEF1AF","label":"确定","height":80,"bottom":5}},{"type":"Panel","props":{"y":80,"x":5,"width":470,"var":"GameMain","height":640}},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":0,"width":80,"visible":false,"var":"BtnMore","right":0,"height":80},"child":[{"type":"Image","props":{"width":46,"skin":"resource/more.png","height":22,"centerY":0,"centerX":0}}]}]};
		return GameMain3UI;
	})(View);
var HomeMainUI=(function(_super){
		function HomeMainUI(){
			
		    this.GameList=null;
		    this.BtnFunc=null;
		    this.BtnWallet=null;
		    this.BtnHall=null;
		    this.BtnRecord=null;

			HomeMainUI.__super.call(this);
		}

		CLASS$(HomeMainUI,'ui.home.HomeMainUI',_super);
		var __proto__=HomeMainUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HomeMainUI.uiView);

		}

		HomeMainUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,15,12,8","height":800}},{"type":"Image","props":{"y":0,"width":480,"skin":"resource/main_top.png","sizeGrid":"28,15,12,8","height":82,"centerX":0},"child":[{"type":"Image","props":{"width":438,"skin":"resource/name.png","sizeGrid":"28,15,12,8","scaleY":0.6,"scaleX":0.6,"height":94,"centerY":0,"centerX":0}}]},{"type":"List","props":{"y":90,"x":5,"width":470,"var":"GameList","vScrollBarSkin":"comp/vscroll.png","height":600},"child":[{"type":"Box","props":{"y":5,"x":0,"width":240,"name":"render","height":260},"child":[{"type":"Image","props":{"y":0,"width":240,"skin":"resource/icon1.png","sizeGrid":"10,10,10,10","name":"Icon","height":260,"centerX":0}}]}]},{"type":"Image","props":{"width":480,"skin":"resource/main_bottom.png","sizeGrid":"28,15,12,8","height":108,"centerX":0,"bottom":0}},{"type":"Tab","props":{"y":720,"x":0,"width":480,"var":"BtnFunc","stateNum":0,"selectedIndex":0,"height":80,"bottom":0},"child":[{"type":"Button","props":{"y":0,"x":320,"width":160,"var":"BtnWallet","stateNum":3,"sizeGrid":"10,10,10,10","right":0,"name":"item2","labelSize":25,"labelPadding":"30","labelColors":"#929292,#0079ff","height":80,"bottom":0},"child":[{"type":"Image","props":{"width":112,"skin":"resource/wallet.png","scaleY":0.8,"scaleX":0.8,"hitTestPrior":false,"height":85,"centerY":-20,"centerX":0}},{"type":"Label","props":{"width":160,"valign":"middle","text":"钱包","overflow":"hidden","height":30,"fontSize":25,"color":"#F6F3E1","centerX":0,"bottom":5,"align":"center"}}]},{"type":"Button","props":{"y":0,"x":-10,"width":160,"var":"BtnHall","stateNum":3,"sizeGrid":"10,10,10,10","name":"item0","labelSize":25,"labelPadding":"30","labelColors":"#929292,#0079ff","height":80,"bottom":0},"child":[{"type":"Image","props":{"x":383,"width":92,"skin":"resource/home.png","scaleY":0.8,"scaleX":0.8,"hitTestPrior":false,"height":89,"centerY":-20,"centerX":0}},{"type":"Label","props":{"y":45,"x":330,"width":160,"valign":"middle","text":"游戏","overflow":"hidden","height":30,"fontSize":25,"color":"#F6F3E1","centerX":0,"bottom":5,"align":"center"}}]},{"type":"Button","props":{"y":0,"x":160,"width":160,"var":"BtnRecord","stateNum":3,"sizeGrid":"10,10,10,10","name":"item1","labelSize":25,"labelPadding":"30","labelColors":"#929292,#0079ff","height":80,"centerX":0,"bottom":0},"child":[{"type":"Image","props":{"width":93,"skin":"resource/record.png","scaleY":0.8,"scaleX":0.8,"hitTestPrior":false,"height":102,"centerY":-20,"centerX":0}},{"type":"Label","props":{"y":45,"x":160,"width":160,"valign":"middle","text":"记录","overflow":"hidden","height":30,"fontSize":25,"color":"#F6F3E1","centerX":0,"bottom":5,"align":"center"}}]}]}]};
		return HomeMainUI;
	})(View);
var confirmUI=(function(_super){
		function confirmUI(){
			
		    this.Message=null;
		    this.BtnOk=null;
		    this.BtnNo=null;

			confirmUI.__super.call(this);
		}

		CLASS$(confirmUI,'ui.home.confirmUI',_super);
		var __proto__=confirmUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(confirmUI.uiView);

		}

		confirmUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/bg.png","sizeGrid":"30,5,5,5","height":800,"alpha":0.3}},{"type":"Image","props":{"width":400,"skin":"resource/base.png","sizeGrid":"10,10,10,10","height":250,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"wordWrap":true,"width":380,"var":"Message","valign":"middle","text":"你真的要这样吗？","height":150,"fontSize":24,"color":"#F6F3E1","centerY":-30,"centerX":0,"align":"center"}},{"type":"Button","props":{"width":180,"var":"BtnOk","stateNum":3,"skin":"resource/btn_wallet.png","sizeGrid":"5,5,5,5","right":10,"labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"确定","height":60,"bottom":10,"alpha":1}},{"type":"Button","props":{"x":10,"width":180,"var":"BtnNo","stateNum":3,"skin":"resource/btn_wallet.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"取消","height":60,"bottom":10,"alpha":1}}]}]};
		return confirmUI;
	})(View);
var loadingUI=(function(_super){
		function loadingUI(){
			
		    this.Message=null;

			loadingUI.__super.call(this);
		}

		CLASS$(loadingUI,'ui.home.loadingUI',_super);
		var __proto__=loadingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(loadingUI.uiView);

		}

		loadingUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/bg.png","sizeGrid":"30,5,5,5","height":800,"alpha":0.3}},{"type":"Image","props":{"width":300,"skin":"resource/base.png","sizeGrid":"5,5,5,5","height":150,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"wordWrap":true,"width":250,"var":"Message","valign":"middle","text":"准备数据中……","height":100,"fontSize":24,"color":"#F6F3E1","centerY":0,"centerX":0,"align":"center"}}]}]};
		return loadingUI;
	})(View);
var tipsUI=(function(_super){
		function tipsUI(){
			
		    this.Message=null;
		    this.BtnOk=null;

			tipsUI.__super.call(this);
		}

		CLASS$(tipsUI,'ui.home.tipsUI',_super);
		var __proto__=tipsUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(tipsUI.uiView);

		}

		tipsUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":10,"x":10,"width":480,"skin":"resource/bg.png","sizeGrid":"30,5,5,5","height":800,"alpha":0.3}},{"type":"Image","props":{"width":400,"skin":"resource/base.png","sizeGrid":"5,5,5,5","height":250,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"wordWrap":true,"width":370,"var":"Message","valign":"middle","text":"121期开始投注了！","height":150,"fontSize":24,"color":"#F6F3E1","centerY":-30,"centerX":0,"align":"center"}},{"type":"Button","props":{"width":200,"var":"BtnOk","stateNum":3,"skin":"resource/btn_wallet.png","sizeGrid":"5,5,5,5","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"确定","height":60,"centerX":0,"bottom":10,"alpha":1}}]}]};
		return tipsUI;
	})(View);
var RecordUI=(function(_super){
		function RecordUI(){
			
		    this.Desc=null;
		    this.RecordList=null;
		    this.BtnBack=null;
		    this.BtnRefresh=null;

			RecordUI.__super.call(this);
		}

		CLASS$(RecordUI,'ui.record.RecordUI',_super);
		var __proto__=RecordUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RecordUI.uiView);

		}

		RecordUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,15,12,8","height":800}},{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_top.png","sizeGrid":"28,15,12,8","height":82,"centerX":0}},{"type":"Label","props":{"y":85,"x":5,"width":470,"var":"Desc","valign":"middle","strokeColor":"#381A09","stroke":5,"height":700,"fontSize":30,"color":"#aaaaaa","centerX":0,"align":"center"}},{"type":"List","props":{"y":85,"width":470,"var":"RecordList","height":700,"centerX":0},"child":[{"type":"Box","props":{"y":5,"width":470,"name":"render","height":100,"centerX":0},"child":[{"type":"Image","props":{"width":460,"skin":"resource/base.png","sizeGrid":"5,5,5,5","height":110,"centerY":0,"centerX":0}},{"type":"Image","props":{"x":5,"width":460,"skin":"resource/line.png","sizeGrid":"5,5,5,5","height":100,"centerY":0,"centerX":0}},{"type":"Label","props":{"y":15,"x":25,"width":150,"valign":"middle","text":"和值","name":"Type","height":30,"fontSize":27,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":60,"x":25,"width":150,"valign":"middle","text":"1883ETH","name":"Price","height":30,"fontSize":30,"color":"#c0c0c0","align":"left"}},{"type":"Label","props":{"y":15,"width":100,"valign":"middle","text":"194期","right":25,"name":"Round","height":30,"fontSize":27,"color":"#c0c0c0","align":"right"}},{"type":"Label","props":{"y":60,"width":300,"valign":"middle","text":"等待开奖/恭喜中奖/未中奖","right":25,"overflow":"scroll","name":"Text","height":30,"fontSize":30,"color":"#B6DFE5","align":"right"}},{"type":"Label","props":{"y":60,"width":180,"valign":"middle","text":"111.111 ETH","right":25,"overflow":"scroll","name":"Bonus","height":30,"fontSize":30,"color":"#ffd700","align":"right"}},{"type":"Button","props":{"y":271,"x":10,"width":450,"sizeGrid":"10,10,10,10","name":"BtnCheck","labelSize":40,"labelColors":"#ffffff","labelAlign":"left","height":100,"centerY":0,"centerX":0,"alpha":0.5}}]}]},{"type":"Label","props":{"y":20,"width":280,"valign":"middle","text":"投注记录","strokeColor":"#381A09","stroke":5,"height":40,"fontSize":30,"color":"#ffc43b","centerX":0,"align":"center"}},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":0,"width":80,"var":"BtnRefresh","right":0,"height":80},"child":[{"type":"Image","props":{"width":50,"skin":"resource/refresh.png","height":60,"centerY":0,"centerX":0}}]}]};
		return RecordUI;
	})(View);
var RecordInfoUI=(function(_super){
		function RecordInfoUI(){
			
		    this.Numbers=null;
		    this.Result=null;
		    this.Num1=null;
		    this.Num2=null;
		    this.Num3=null;
		    this.Type=null;
		    this.BonusTitle=null;
		    this.Status=null;
		    this.Bonus=null;
		    this.Price=null;
		    this.Hands=null;

			RecordInfoUI.__super.call(this);
		}

		CLASS$(RecordInfoUI,'ui.record.RecordInfoUI',_super);
		var __proto__=RecordInfoUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RecordInfoUI.uiView);

		}

		RecordInfoUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/bg.png","sizeGrid":"30,5,5,5","height":800,"alpha":0.5}},{"type":"Image","props":{"width":400,"skin":"resource/base.png","sizeGrid":"5,5,5,5","height":500,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":290,"x":20,"width":360,"var":"Numbers","valign":"top","text":"4,15,13,15","overflow":"scroll","height":90,"fontSize":24,"color":"#B6DFE5","align":"left"}},{"type":"TextArea","props":{"y":20,"width":350,"var":"Result","valign":"middle","type":"text","text":"0期开奖","mouseEnabled":false,"hitTestPrior":false,"height":70,"fontSize":24,"editable":false,"color":"#F6F3E1","centerX":0,"align":"left"},"child":[{"type":"Image","props":{"width":40,"var":"Num1","skin":"resource/dice1.png","right":110,"height":40,"centerY":0}},{"type":"Image","props":{"width":40,"var":"Num2","skin":"resource/dice1.png","right":60,"height":40,"centerY":0}},{"type":"Image","props":{"width":40,"var":"Num3","skin":"resource/dice1.png","right":10,"height":40,"centerY":0}}]},{"type":"Label","props":{"y":240,"x":20,"width":300,"var":"Type","valign":"middle","text":"我的投注 - ","overflow":"hidden","height":30,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":120,"x":20,"width":150,"valign":"middle","text":"订单状态","overflow":"hidden","height":30,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":120,"width":210,"var":"BonusTitle","valign":"middle","text":"中奖金额","right":10,"overflow":"hidden","height":30,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":10,"width":400,"skin":"resource/line.png","sizeGrid":"30,5,5,5","height":100,"centerX":0,"alpha":0.3}},{"type":"Label","props":{"y":160,"x":20,"width":150,"var":"Status","valign":"middle","text":"已中奖","strokeColor":"#381A09","stroke":5,"overflow":"hidden","height":60,"fontSize":30,"color":"#ffc43b","align":"left"}},{"type":"Label","props":{"y":160,"width":210,"var":"Bonus","valign":"middle","text":"0.100ETH","strokeColor":"#381A09","stroke":5,"right":10,"overflow":"hidden","height":60,"fontSize":30,"color":"#ffc43b","align":"left"}},{"type":"Label","props":{"y":445,"width":150,"var":"Price","valign":"middle","right":30,"overflow":"hidden","height":30,"fontSize":24,"color":"#c0c0c0","align":"right"}},{"type":"Label","props":{"y":405,"width":150,"var":"Hands","valign":"middle","right":30,"overflow":"hidden","height":30,"fontSize":24,"color":"#c0c0c0","align":"right"}},{"type":"Label","props":{"y":405,"x":120,"width":100,"valign":"middle","text":"注数：","overflow":"hidden","height":30,"fontSize":24,"color":"#c0c0c0","align":"left"}},{"type":"Label","props":{"y":445,"x":120,"width":100,"valign":"middle","text":"金额：","overflow":"hidden","height":30,"fontSize":24,"color":"#c0c0c0","align":"left"}}]}]};
		return RecordInfoUI;
	})(View);
var RecordInfo1UI=(function(_super){
		function RecordInfo1UI(){
			
		    this.Numbers=null;
		    this.Result=null;
		    this.Coin=null;
		    this.Type=null;
		    this.BonusTitle=null;
		    this.Status=null;
		    this.Bonus=null;
		    this.Price=null;

			RecordInfo1UI.__super.call(this);
		}

		CLASS$(RecordInfo1UI,'ui.record.RecordInfo1UI',_super);
		var __proto__=RecordInfo1UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RecordInfo1UI.uiView);

		}

		RecordInfo1UI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/bg.png","sizeGrid":"30,5,5,5","height":800,"alpha":0.5}},{"type":"Image","props":{"width":400,"skin":"resource/base.png","sizeGrid":"5,5,5,5","height":500,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":290,"x":20,"width":360,"var":"Numbers","valign":"top","text":"正","overflow":"scroll","height":90,"fontSize":24,"color":"#B6DFE5","align":"left"}},{"type":"TextArea","props":{"y":20,"width":350,"var":"Result","valign":"middle","type":"text","text":"0期开奖","mouseEnabled":false,"hitTestPrior":false,"height":70,"fontSize":24,"editable":false,"color":"#F6F3E1","centerX":0,"align":"left"},"child":[{"type":"Image","props":{"width":60,"var":"Coin","skin":"resource/dice1.png","right":10,"height":60,"centerY":0}}]},{"type":"Label","props":{"y":240,"x":20,"width":300,"var":"Type","valign":"middle","text":"我的投注","overflow":"hidden","height":30,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":120,"x":20,"width":150,"valign":"middle","text":"订单状态","overflow":"hidden","height":30,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":120,"width":210,"var":"BonusTitle","valign":"middle","text":"中奖金额","right":10,"overflow":"hidden","height":30,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":10,"width":400,"skin":"resource/line.png","sizeGrid":"30,5,5,5","height":100,"centerX":0,"alpha":0.3}},{"type":"Label","props":{"y":160,"x":20,"width":150,"var":"Status","valign":"middle","text":"已中奖","strokeColor":"#381A09","stroke":5,"overflow":"hidden","height":60,"fontSize":30,"color":"#ffc43b","align":"left"}},{"type":"Label","props":{"y":160,"width":210,"var":"Bonus","valign":"middle","text":"0.100ETH","strokeColor":"#381A09","stroke":5,"right":10,"overflow":"hidden","height":60,"fontSize":30,"color":"#ffc43b","align":"left"}},{"type":"Label","props":{"y":445,"width":150,"var":"Price","valign":"middle","right":30,"overflow":"hidden","height":30,"fontSize":24,"color":"#c0c0c0","align":"right"}},{"type":"Label","props":{"y":445,"x":120,"width":100,"valign":"middle","text":"金额：","overflow":"hidden","height":30,"fontSize":24,"color":"#c0c0c0","align":"left"}}]}]};
		return RecordInfo1UI;
	})(View);
var RecordInfo2UI=(function(_super){
		function RecordInfo2UI(){
			
		    this.Numbers=null;
		    this.Type=null;
		    this.BonusTitle=null;
		    this.Status=null;
		    this.Bonus=null;
		    this.Price=null;
		    this.HomeName=null;
		    this.VisitorName=null;
		    this.TxtResult=null;

			RecordInfo2UI.__super.call(this);
		}

		CLASS$(RecordInfo2UI,'ui.record.RecordInfo2UI',_super);
		var __proto__=RecordInfo2UI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(RecordInfo2UI.uiView);

		}

		RecordInfo2UI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/bg.png","sizeGrid":"30,5,5,5","height":800,"alpha":0.5}},{"type":"Image","props":{"width":400,"skin":"resource/base.png","sizeGrid":"5,5,5,5","height":500,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":290,"x":20,"width":360,"var":"Numbers","valign":"top","text":"正","overflow":"scroll","height":90,"fontSize":24,"color":"#B6DFE5","align":"left"}},{"type":"Label","props":{"y":240,"x":20,"width":300,"var":"Type","valign":"middle","text":"我的投注 - ","overflow":"hidden","height":30,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":120,"x":20,"width":150,"valign":"middle","text":"订单状态","overflow":"hidden","height":30,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":120,"width":210,"var":"BonusTitle","valign":"middle","text":"中奖金额","right":10,"overflow":"hidden","height":30,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":10,"width":400,"skin":"resource/line.png","sizeGrid":"30,5,5,5","height":100,"centerX":0,"alpha":0.3}},{"type":"Label","props":{"y":160,"x":20,"width":150,"var":"Status","valign":"middle","text":"已中奖","strokeColor":"#381A09","stroke":5,"overflow":"hidden","height":60,"fontSize":30,"color":"#ffc43b","align":"left"}},{"type":"Label","props":{"y":160,"width":210,"var":"Bonus","valign":"middle","text":"0.100ETH","strokeColor":"#381A09","stroke":5,"right":10,"overflow":"hidden","height":60,"fontSize":30,"color":"#ffc43b","align":"left"}},{"type":"Label","props":{"y":445,"width":150,"var":"Price","valign":"middle","right":30,"overflow":"hidden","height":30,"fontSize":24,"color":"#c0c0c0","align":"right"}},{"type":"Label","props":{"y":445,"x":120,"width":100,"valign":"middle","text":"金额：","overflow":"hidden","height":30,"fontSize":24,"color":"#c0c0c0","align":"left"}},{"type":"Label","props":{"y":20,"width":100,"valign":"middle","text":"VS","strokeColor":"#381A09","stroke":3,"overflow":"hidden","height":40,"fontSize":30,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":20,"width":150,"var":"HomeName","valign":"middle","text":"主队","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":40,"fontSize":25,"color":"#B6DFE5","centerX":-120,"align":"right"}},{"type":"Label","props":{"y":20,"width":150,"var":"VisitorName","valign":"middle","text":"客队","strokeColor":"#381A09","stroke":3,"overflow":"visible","height":40,"fontSize":25,"color":"#B6DFE5","centerX":120,"align":"left"}},{"type":"Label","props":{"y":60,"width":100,"var":"TxtResult","valign":"middle","text":"0 : 0","strokeColor":"#381A09","stroke":3,"overflow":"hidden","height":40,"fontSize":30,"color":"#3cf303","centerX":0,"align":"center"}}]}]};
		return RecordInfo2UI;
	})(View);
var TestPageUI=(function(_super){
		function TestPageUI(){
			
		    this.btn=null;
		    this.clip=null;
		    this.combobox=null;
		    this.tab=null;
		    this.list=null;
		    this.btn2=null;
		    this.check=null;
		    this.radio=null;
		    this.box=null;

			TestPageUI.__super.call(this);
		}

		CLASS$(TestPageUI,'ui.test.TestPageUI',_super);
		var __proto__=TestPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(TestPageUI.uiView);

		}

		TestPageUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"skin":"comp/bg.png","sizeGrid":"30,4,4,4","height":400}},{"type":"Button","props":{"y":56,"x":41,"width":150,"var":"btn","skin":"comp/button.png","sizeGrid":"4,4,4,4","label":"点我赋值","height":37}},{"type":"Clip","props":{"y":56,"x":401,"var":"clip","skin":"comp/clip_num.png","clipX":10}},{"type":"ComboBox","props":{"y":143,"x":220,"width":200,"var":"combobox","skin":"comp/combobox.png","sizeGrid":"4,20,4,4","selectedIndex":1,"labels":"select1,select2,selecte3","height":23}},{"type":"Tab","props":{"y":96,"x":220,"var":"tab","skin":"comp/tab.png","labels":"tab1,tab2,tab3"}},{"type":"VScrollBar","props":{"y":223,"x":259,"skin":"comp/vscroll.png","height":150,"alpha":0,"visible":"false"}},{"type":"VSlider","props":{"y":223,"x":224,"skin":"comp/vslider.png","height":150}},{"type":"List","props":{"y":68,"x":452,"width":128,"var":"list","vScrollBarSkin":"comp/vscroll.png","repeatX":1,"height":299},"child":[{"type":"Box","props":{"y":0,"x":0,"width":112,"name":"render","height":30},"child":[{"type":"Label","props":{"y":5,"x":26,"width":78,"text":"this is a list","skin":"comp/label.png","name":"label","height":20,"fontSize":14}},{"type":"Clip","props":{"y":2,"x":0,"skin":"comp/clip_num.png","name":"clip","clipX":10}}]}]},{"type":"Button","props":{"y":4,"x":563,"skin":"comp/btn_close.png","name":"close"}},{"type":"Button","props":{"y":112,"x":41,"width":150,"var":"btn2","skin":"comp/button.png","sizeGrid":"4,4,4,4","labelSize":30,"labelBold":true,"label":"点我赋值","height":66}},{"type":"CheckBox","props":{"y":188,"x":220,"var":"check","skin":"comp/checkbox.png","label":"checkBox1"}},{"type":"RadioGroup","props":{"y":61,"x":220,"var":"radio","skin":"comp/radiogroup.png","labels":"radio1,radio2,radio3"}},{"type":"Panel","props":{"y":223,"x":299,"width":127,"vScrollBarSkin":"comp/vscroll.png","height":150},"child":[{"type":"Image","props":{"skin":"comp/image.png"}}]},{"type":"CheckBox","props":{"y":188,"x":326,"skin":"comp/checkbox.png","labelColors":"#ff0000","label":"checkBox2"}},{"type":"Box","props":{"y":197,"x":41,"var":"box"},"child":[{"type":"ProgressBar","props":{"y":70,"width":150,"skin":"comp/progress.png","sizeGrid":"4,4,4,4","name":"progress","height":14}},{"type":"Label","props":{"y":103,"width":137,"text":"This is a Label","skin":"comp/label.png","name":"label","height":26,"fontSize":20}},{"type":"TextInput","props":{"y":148,"width":150,"text":"textinput","skin":"comp/textinput.png","name":"input"}},{"type":"HSlider","props":{"width":150,"skin":"comp/hslider.png","name":"slider"}},{"type":"HScrollBar","props":{"y":34,"width":150,"skin":"comp/hscroll.png","name":"scroll"}}]}]};
		return TestPageUI;
	})(View);
var CreateUI=(function(_super){
		function CreateUI(){
			
		    this.BtnCreate=null;
		    this.WalletPassword=null;
		    this.BtnChange=null;
		    this.WalletUserName=null;

			CreateUI.__super.call(this);
		}

		CLASS$(CreateUI,'ui.wallet.CreateUI',_super);
		var __proto__=CreateUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(CreateUI.uiView);

		}

		CreateUI.uiView={"type":"View","props":{"width":480,"layoutEnabled":true,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"0,0,0,0","height":802}},{"type":"Button","props":{"y":390,"width":400,"var":"BtnCreate","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"创建账户","height":70,"centerX":0}},{"type":"TextInput","props":{"y":304,"width":440,"var":"WalletPassword","type":"password","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"\b输入密码，至少6个字符","height":60,"fontSize":24,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Button","props":{"y":500,"width":400,"var":"BtnChange","stateNum":1,"skin":"resource/btn_create1.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"已有账户","height":70,"centerX":0,"alpha":1}},{"type":"Label","props":{"y":182,"width":440,"valign":"middle","text":"为ETH账户设置密码","height":40,"fontSize":24,"color":"#F6F3E1","centerX":0,"align":"center"}},{"type":"TextInput","props":{"y":233,"width":440,"var":"WalletUserName","type":"text","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"输入用户名，至少3个字符","height":60,"fontSize":24,"color":"#ffffff","centerX":0,"align":"center"}}]};
		return CreateUI;
	})(View);
var CreateSuccessUI=(function(_super){
		function CreateSuccessUI(){
			
		    this.TxtPolicy=null;
		    this.AccountInfo=null;
		    this.BtnCopy=null;
		    this.BtnLogin=null;

			CreateSuccessUI.__super.call(this);
		}

		CLASS$(CreateSuccessUI,'ui.wallet.CreateSuccessUI',_super);
		var __proto__=CreateSuccessUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(CreateSuccessUI.uiView);

		}

		CreateSuccessUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"30,5,5,5","height":800}},{"type":"Label","props":{"y":30,"width":440,"text":"注册成功","height":50,"fontSize":50,"color":"#98FB98","centerX":0,"align":"center"}},{"type":"Label","props":{"y":110,"wordWrap":true,"width":440,"var":"TxtPolicy","text":"                          安全声明\\n·账户·keystore请自己保存。\\n·我们不会访问账户、恢复密钥、重置密码，或是撤销交易。\\n·账户安全由自己负责，我们不对你的损失负责。","leading":10,"height":230,"fontSize":24,"color":"#F6F3E1","centerX":0,"align":"left"}},{"type":"TextArea","props":{"y":325,"wordWrap":true,"width":440,"var":"AccountInfo","skin":"resource/input.png","sizeGrid":"10,10,10,10","overflow":"scroll","height":280,"fontSize":25,"editable":false,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Button","props":{"y":630,"width":400,"var":"BtnCopy","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"复制到剪切板","height":70,"centerX":0,"alpha":1}},{"type":"Button","props":{"y":720,"width":400,"var":"BtnLogin","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"我已保存","height":70,"centerX":0,"alpha":1}}]};
		return CreateSuccessUI;
	})(View);
var DepositUI=(function(_super){
		function DepositUI(){
			
		    this.BtnBack=null;
		    this.EditMoney=null;
		    this.WalletIcon=null;
		    this.BtnCopy=null;
		    this.Address=null;

			DepositUI.__super.call(this);
		}

		CLASS$(DepositUI,'ui.wallet.DepositUI',_super);
		var __proto__=DepositUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(DepositUI.uiView);

		}

		DepositUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,5,5,5","height":800}},{"type":"Label","props":{"y":15,"width":280,"valign":"middle","text":"充值","strokeColor":"#381A09","stroke":5,"height":40,"fontSize":30,"color":"#ffc43b","centerX":0,"align":"center"}},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Label","props":{"y":140,"width":440,"valign":"middle","text":"输入金额","height":40,"fontSize":30,"color":"#c0c0c0","centerX":0,"align":"center"}},{"type":"TextInput","props":{"y":200,"width":440,"var":"EditMoney","skin":"resource/input.png","sizeGrid":"10,10,10,10","height":60,"fontSize":45,"color":"#ffd700","centerX":0,"align":"center"}},{"type":"Label","props":{"y":340,"width":440,"valign":"middle","text":"您的钱包地址二维码","height":40,"fontSize":30,"color":"#c0c0c0","centerX":0,"align":"center"}},{"type":"Image","props":{"y":400,"x":140,"width":200,"var":"WalletIcon","height":200}},{"type":"Button","props":{"y":700,"width":400,"var":"BtnCopy","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"复制地址","height":80,"centerX":0,"alpha":1}},{"type":"TextArea","props":{"y":630,"x":10,"wordWrap":true,"width":450,"var":"Address","valign":"middle","text":"Address","height":25,"fontSize":20,"editable":false,"color":"#c0c0c0","centerX":0,"align":"center"}}]};
		return DepositUI;
	})(View);
var DepositSuceesUI=(function(_super){
		function DepositSuceesUI(){
			
		    this.BtnOk=null;
		    this.BtnJump=null;

			DepositSuceesUI.__super.call(this);
		}

		CLASS$(DepositSuceesUI,'ui.wallet.DepositSuceesUI',_super);
		var __proto__=DepositSuceesUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(DepositSuceesUI.uiView);

		}

		DepositSuceesUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"30,5,5,5","height":800}},{"type":"Label","props":{"y":60,"width":440,"text":"交易成功","height":50,"fontSize":50,"color":"#98FB98","centerX":0,"align":"center"}},{"type":"Button","props":{"y":200,"width":400,"var":"BtnOk","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"确认","height":70,"centerX":0}},{"type":"Button","props":{"y":290,"width":400,"var":"BtnJump","stateNum":1,"skin":"resource/btn_create1.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"查看交易","height":70,"centerX":0,"alpha":1}}]};
		return DepositSuceesUI;
	})(View);
var LoginUI=(function(_super){
		function LoginUI(){
			
		    this.WalletPassword=null;
		    this.WalletKeystore=null;
		    this.BtnLogin=null;
		    this.BtnCreate=null;
		    this.WalletUserName=null;

			LoginUI.__super.call(this);
		}

		CLASS$(LoginUI,'ui.wallet.LoginUI',_super);
		var __proto__=LoginUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LoginUI.uiView);

		}

		LoginUI.uiView={"type":"View","props":{"width":480,"layoutEnabled":false,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"30,5,5,5","height":800}},{"type":"TextInput","props":{"y":461,"width":400,"var":"WalletPassword","type":"password","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"密码","height":60,"fontSize":27,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"TextInput","props":{"y":210,"wordWrap":true,"width":450,"var":"WalletKeystore","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"Keystore","height":180,"fontSize":27,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":160,"width":440,"valign":"middle","text":"用ETH账户登陆","height":40,"fontSize":25,"color":"#F6F3E1","centerX":0,"align":"center"}},{"type":"Button","props":{"y":530,"width":400,"var":"BtnLogin","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"登录","height":70,"centerX":0}},{"type":"Button","props":{"y":620,"width":400,"var":"BtnCreate","stateNum":1,"skin":"resource/btn_create1.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"创建账户","height":70,"centerX":0,"alpha":1}},{"type":"Image","props":{"y":60,"width":445,"skin":"resource/name.png","sizeGrid":"30,5,5,5","scaleY":0.6,"scaleX":0.6,"height":89,"centerX":0}},{"type":"TextInput","props":{"y":393,"width":400,"var":"WalletUserName","type":"text","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"输入用户名，至少3个字符","height":60,"fontSize":24,"color":"#ffffff","centerX":1,"align":"center"}}]};
		return LoginUI;
	})(View);
var MyWalletUI=(function(_super){
		function MyWalletUI(){
			
		    this.BtnInfo=null;
		    this.BtnOut=null;
		    this.WalletIcon=null;
		    this.BetMoney=null;
		    this.BtnCopy=null;
		    this.BtnBack=null;
		    this.BtnLoginOut=null;
		    this.BtnCash=null;
		    this.BtnRecharge=null;
		    this.Address=null;
		    this.TotalMoney=null;
		    this.BonusMoney=null;
		    this.BtnTransfer=null;
		    this.Txt1=null;
		    this.Txt2=null;
		    this.Txt3=null;

			MyWalletUI.__super.call(this);
		}

		CLASS$(MyWalletUI,'ui.wallet.MyWalletUI',_super);
		var __proto__=MyWalletUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MyWalletUI.uiView);

		}

		MyWalletUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,5,5,5","height":800}},{"type":"Image","props":{"y":0,"width":480,"skin":"resource/main_top.png","height":82,"centerX":0}},{"type":"Image","props":{"y":100,"width":450,"skin":"resource/wallet_wnd1.png","height":232,"centerX":0}},{"type":"Button","props":{"x":0,"width":160,"var":"BtnInfo","stateNum":1,"skin":"resource/btn_wallet2.png","sizeGrid":"10,10,10,10","labelSize":24,"labelColors":"#ffffff,#40E0D0,#40E0D0","label":"详情","height":80,"bottom":-5}},{"type":"Button","props":{"width":160,"var":"BtnOut","stateNum":1,"skin":"resource/btn_wallet2.png","sizeGrid":"10,10,10,10","right":0,"labelSize":24,"labelColors":"#ffffff,#40E0D0,#40E0D0","label":"导出","height":80,"bottom":-5}},{"type":"Label","props":{"y":20,"width":280,"valign":"middle","text":"我的钱包","strokeColor":"#381A09","stroke":5,"height":40,"fontSize":30,"color":"#ffc43b","centerX":0,"align":"center"}},{"type":"Image","props":{"y":490,"width":180,"var":"WalletIcon","height":180,"centerX":0}},{"type":"Label","props":{"y":440,"width":400,"text":"钱包地址","height":40,"fontSize":30,"color":"#c0c0c0","centerX":0,"align":"center"}},{"type":"Label","props":{"y":163,"width":200,"var":"BetMoney","valign":"bottom","text":"--","right":100,"height":40,"fontSize":30,"color":"#F6F3E1","align":"right"}},{"type":"Button","props":{"width":160,"var":"BtnCopy","stateNum":1,"skin":"resource/btn_wallet2.png","sizeGrid":"10,10,10,10","labelSize":24,"labelColors":"#ffffff,#40E0D0,#40E0D0","label":"复制","height":80,"centerX":0,"bottom":-5}},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":0,"width":80,"var":"BtnLoginOut","right":0,"height":80},"child":[{"type":"Image","props":{"width":48,"skin":"resource/out.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Button","props":{"y":265,"width":150,"var":"BtnCash","stateNum":1,"skin":"resource/btn_withdraw.png","right":30,"labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelPadding":"-1","labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"转移","height":60}},{"type":"Button","props":{"y":340,"width":200,"var":"BtnRecharge","stateNum":1,"skin":"resource/btn_wallet3.png","sizeGrid":"5,5,5,5","right":30,"labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"充值","height":80}},{"type":"TextArea","props":{"y":680,"wordWrap":true,"width":450,"var":"Address","valign":"middle","text":"Address","overflow":"scroll","height":25,"fontSize":20,"editable":false,"color":"#c0c0c0","centerX":0,"align":"center"}},{"type":"Label","props":{"y":103,"width":200,"var":"TotalMoney","valign":"bottom","text":"--","right":100,"height":50,"fontSize":40,"color":"#F6F3E1","align":"right"}},{"type":"Label","props":{"y":211,"width":200,"var":"BonusMoney","valign":"bottom","text":"--","right":100,"height":40,"fontSize":30,"color":"#F6F3E1","align":"right"}},{"type":"Label","props":{"y":100,"valign":"bottom","text":"总资金","left":30,"height":50,"fontSize":30,"color":"#F6F3E1","align":"right"}},{"type":"Label","props":{"y":160,"valign":"bottom","text":"本金","left":30,"height":40,"fontSize":25,"color":"#F6F3E1","align":"right"}},{"type":"Label","props":{"y":208,"valign":"bottom","text":"奖金","left":30,"height":40,"fontSize":25,"color":"#F6F3E1","align":"right"}},{"type":"Button","props":{"y":340,"width":200,"var":"BtnTransfer","stateNum":1,"skin":"resource/btn_wallet3.png","sizeGrid":"5,5,5,5","left":30,"labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"提现","height":80}},{"type":"Label","props":{"y":103,"width":100,"var":"Txt1","valign":"bottom","right":30,"height":50,"fontSize":30,"color":"#F6F3E1","align":"right"}},{"type":"Label","props":{"y":163,"width":100,"var":"Txt2","valign":"bottom","right":30,"height":40,"fontSize":30,"color":"#F6F3E1","align":"right"}},{"type":"Label","props":{"y":211,"width":100,"var":"Txt3","valign":"bottom","right":30,"height":40,"fontSize":30,"color":"#F6F3E1","align":"right"}}]};
		return MyWalletUI;
	})(View);
var QuickLoginUI=(function(_super){
		function QuickLoginUI(){
			
		    this.WalletPassword=null;
		    this.BtnLogin=null;
		    this.BtnSwitch=null;
		    this.Addresses=null;
		    this.BtnReadme=null;

			QuickLoginUI.__super.call(this);
		}

		CLASS$(QuickLoginUI,'ui.wallet.QuickLoginUI',_super);
		var __proto__=QuickLoginUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(QuickLoginUI.uiView);

		}

		QuickLoginUI.uiView={"type":"View","props":{"width":480,"layoutEnabled":false,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"30,5,5,5","height":800}},{"type":"TextInput","props":{"y":407,"width":280,"var":"WalletPassword","type":"password","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"密码","height":60,"fontSize":27,"color":"#ffffff","centerX":53,"align":"left"}},{"type":"Button","props":{"y":524,"width":163,"var":"BtnLogin","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"登录","height":70,"centerX":-114}},{"type":"Button","props":{"y":523,"width":167,"var":"BtnSwitch","stateNum":1,"skin":"resource/btn_create1.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"已有账户","height":70,"centerX":112,"alpha":1}},{"type":"Image","props":{"y":93,"width":445,"skin":"resource/name.png","sizeGrid":"30,5,5,5","scaleY":0.6,"scaleX":0.6,"height":89,"centerX":0}},{"type":"Image","props":{"y":169,"width":177,"skin":"resource/logo.png","sizeGrid":"30,5,5,5","scaleY":1,"scaleX":1,"height":148,"centerX":0}},{"type":"ComboBox","props":{"y":339,"width":280,"var":"Addresses","type":"number","skin":"resource/input.png","sizeGrid":"10,10,10,10","selectedIndex":1,"prompt":"输入球队名","labels":"sdfasdf,skdjflasdkjf","labelSize":27,"labelPadding":"0","labelColors":"#ffffff,#ffffff,#ffffff","height":60,"fontSize":27,"color":"#ffffff","centerX":53,"align":"center"}},{"type":"Label","props":{"y":352,"x":39,"width":102,"text":"用户名：","height":33,"fontSize":27,"color":"#fbf9f9"}},{"type":"Label","props":{"y":421,"x":39,"width":102,"text":"密    码：","height":33,"fontSize":27,"color":"#fbf9f9"}},{"type":"Button","props":{"y":738,"width":142,"var":"BtnReadme","stateNum":1,"skin":"resource/btn_readme.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","height":42,"centerX":132}},{"type":"Image","props":{"y":8,"width":297,"skin":"resource/tips.png","sizeGrid":"30,5,5,5","scaleY":1,"scaleX":1,"height":34,"centerX":-92}}]};
		return QuickLoginUI;
	})(View);
var WithDrawUI=(function(_super){
		function WithDrawUI(){
			
		    this.AbleWithDraw=null;
		    this.Loss=null;
		    this.BtnNext=null;
		    this.BtnMore=null;
		    this.EditAddress=null;
		    this.EditNote=null;
		    this.EditMoney=null;
		    this.EditGasPrice=null;
		    this.EditGasLimit=null;
		    this.BtnBack=null;

			WithDrawUI.__super.call(this);
		}

		CLASS$(WithDrawUI,'ui.wallet.WithDrawUI',_super);
		var __proto__=WithDrawUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(WithDrawUI.uiView);

		}

		WithDrawUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,15,12,8","height":800}},{"type":"Label","props":{"y":15,"width":280,"valign":"middle","text":"转出","strokeColor":"#381A09","stroke":5,"height":40,"fontSize":30,"color":"#ffc43b","centerX":0,"align":"center"}},{"type":"Label","props":{"y":190,"width":400,"var":"AbleWithDraw","valign":"middle","text":"可提现金额：\b","height":40,"fontSize":24,"color":"#40e0d0","centerX":-4,"align":"left"}},{"type":"Label","props":{"y":610,"width":440,"visible":false,"var":"Loss","valign":"middle","text":"\b手续费:0.00001 ETH","height":40,"fontSize":24,"color":"#40e0d0","centerX":0,"align":"right"}},{"type":"Button","props":{"y":700,"width":400,"var":"BtnNext","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"下一步","height":70,"centerX":0}},{"type":"Button","props":{"y":390,"width":400,"var":"BtnMore","toggle":true,"stateNum":1,"skin":"resource/btn_create1.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"高级选项\b▽","height":60,"centerX":0,"alpha":1}},{"type":"TextInput","props":{"y":100,"width":440,"var":"EditAddress","skin":"resource/input.png","sizeGrid":"4,4,4,4","height":60,"fontSize":27,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"TextInput","props":{"y":310,"width":440,"var":"EditNote","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"  \b备注","height":60,"fontSize":30,"color":"#ffffff","centerX":0,"align":"left"}},{"type":"TextInput","props":{"y":235,"width":440,"var":"EditMoney","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"  金额","height":60,"fontSize":30,"color":"#ffffff","centerX":0,"align":"left"}},{"type":"TextInput","props":{"y":465,"width":440,"visible":false,"var":"EditGasPrice","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"  瓦斯价格","height":60,"fontSize":30,"color":"#ffffff","centerX":0,"align":"left"}},{"type":"TextInput","props":{"y":540,"width":440,"visible":false,"var":"EditGasLimit","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"  瓦斯上限","height":60,"fontSize":30,"color":"#ffffff","centerX":0,"align":"left"}},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]}]};
		return WithDrawUI;
	})(View);
var WithDrawConfirmUI=(function(_super){
		function WithDrawConfirmUI(){
			
		    this.BtnConfirm=null;
		    this.RecipientAddress=null;
		    this.TransFee=null;
		    this.TransAmount=null;
		    this.PaymentAddress=null;
		    this.BtnBack=null;
		    this.password=null;

			WithDrawConfirmUI.__super.call(this);
		}

		CLASS$(WithDrawConfirmUI,'ui.wallet.WithDrawConfirmUI',_super);
		var __proto__=WithDrawConfirmUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(WithDrawConfirmUI.uiView);

		}

		WithDrawConfirmUI.uiView={"type":"View","props":{"width":480,"height":800},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"skin":"resource/main_bg.png","sizeGrid":"28,15,12,8","height":800}},{"type":"Label","props":{"y":15,"width":280,"valign":"middle","text":"转出\b确认","strokeColor":"#381A09","stroke":5,"height":40,"fontSize":30,"color":"#ffc43b","centerX":0,"align":"center"}},{"type":"Button","props":{"y":700,"width":440,"var":"BtnConfirm","stateNum":1,"skin":"resource/btn_create2.png","sizeGrid":"10,10,10,10","labelStrokeColor":"#743A14","labelStroke":5,"labelSize":30,"labelColors":"#F6F3E1,#F6F3E1,#F6F3E1","label":"确认无误，现在提现","height":70,"centerX":0}},{"type":"Label","props":{"y":230,"width":440,"text":"支出地址","height":40,"fontSize":24,"color":"#c0c0c0","centerX":0,"align":"left"}},{"type":"Label","props":{"y":110,"width":440,"text":"接收地址","height":40,"fontSize":24,"color":"#c0c0c0","centerX":0,"align":"left"}},{"type":"Label","props":{"y":350,"width":440,"text":"手续费","height":40,"fontSize":24,"color":"#c0c0c0","centerX":0,"align":"left"}},{"type":"Label","props":{"y":470,"width":440,"text":"提现金额","height":40,"fontSize":24,"color":"#c0c0c0","centerX":0,"align":"left"}},{"type":"TextArea","props":{"y":140,"wordWrap":false,"width":440,"var":"RecipientAddress","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"dfd54632x4566xfgh","padding":"15","overflow":"hidden","height":60,"fontSize":30,"editable":false,"color":"#40e0d0","centerX":0,"borderColor":"#ffffffff","align":"left"}},{"type":"TextArea","props":{"y":380,"wordWrap":false,"width":440,"var":"TransFee","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"10000.00","padding":"15","overflow":"hidden","height":60,"fontSize":30,"editable":false,"color":"#40e0d0","centerX":0,"borderColor":"#ffffffff","align":"left"}},{"type":"TextArea","props":{"y":500,"wordWrap":false,"width":440,"var":"TransAmount","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"22222.00","padding":"15","overflow":"hidden","height":60,"fontSize":30,"editable":false,"color":"#40e0d0","centerX":0,"borderColor":"#ffffffff","align":"left"}},{"type":"TextArea","props":{"y":260,"wordWrap":false,"width":440,"var":"PaymentAddress","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"12asd234fgn567bas2123","padding":"15","overflow":"hidden","height":60,"fontSize":30,"editable":false,"color":"#40e0d0","centerX":0,"borderColor":"#ffffffff","align":"left"}},{"type":"Button","props":{"y":0,"x":0,"width":80,"var":"BtnBack","height":80},"child":[{"type":"Image","props":{"width":33,"skin":"resource/back.png","height":42,"centerY":0,"centerX":0}}]},{"type":"Label","props":{"y":609,"x":23,"width":107,"text":"输入密码：","height":40,"fontSize":24,"color":"#c0c0c0","align":"left"}},{"type":"TextInput","props":{"y":593,"width":306,"var":"password","type":"password","skin":"resource/input.png","sizeGrid":"10,10,10,10","prompt":"密码","height":60,"fontSize":27,"color":"#ffffff","centerX":49,"align":"center"}}]};
		return WithDrawConfirmUI;
	})(View);