(function () {
    var Loader = laya.net.Loader;
    var Handler = laya.utils.Handler;

    //程序入口
    Laya.init(480, 800);
    Laya.stage.alignV = "middle";
    Laya.stage.alignH = "center";
    Laya.stage.scaleMode = "showall";
    //自动竖屏，让游戏的水平方向始终与浏览器显示屏幕的最长边保持垂直。
    // Laya.stage.screenMode = "vertical";
    //激活资源版本控制
    Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);

    var langFileName = "res/atlas/zh-cht.lang";
    var ballgameBettingConfigFileName = "json/ballgame_betting_config.json";

    var resources = [
        ["res/atlas/comp.atlas", Loader.ATLAS],
        ["res/atlas/resource.atlas", Loader.ATLAS],
        [langFileName, Loader.JSON],
        [ballgameBettingConfigFileName, Loader.JSON]
    ];

    function beginLoad() {
        for (var i = 0; i < resources.length; ++i) {
            var resource = resources[i];
            Laya.loader.load(resource[0], Handler.create(null, onLoaded), null, resource[1]);
        }
    }

    var loadCount = 0;

    function initConfigs() {
        var getBallgameBettingConfig = function () {
            var result = Laya.loader.getRes(ballgameBettingConfigFileName);
            var leagues = result.leagues;
            var leagueById = result.leagueById = {};
            var teamById = result.teamById = {};
            for (var i = 0; i < leagues.length; ++i) {
                var league = leagues[i];
                leagueById[league.id] = league;
                var teams = league.teams;
                for (var j = 0; j < teams.length; ++j) {
                    var team = teams[j];
                    teamById[team.id] = team;
                }
            }
            result.leagueName = function(leagueId) {
                var l = this.leagueById[leagueId];
                if (!l) return "?";
                return l.name;
            };
            result.teamName = function(teamId) {
                var t = this.teamById[teamId];
                if (!t) return "?";
                return t.name;
            };
            return result;
        };
        goblin.config = {
            ballgameBetting: getBallgameBettingConfig()
        };
    }

    function onLoaded() {
        ++loadCount;

        if (loadCount == resources.length) {
            laya.display.Text.langPacks = Laya.loader.getRes(langFileName);
            initConfigs();

            if (goblin.privateKey) {
                goblin.newHomeMain(Laya.stage, function () {});
            } else {
                goblin.newLoginMain(Laya.stage);
            }
        }
    }
})();
