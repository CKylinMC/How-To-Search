var app = {
	version: 6,
	ver: "v1.2.6",
	apk: "http://cansll.gitee.io/how-to-search/app/app.apk",
	msg: "更新：\n\n* 新增检查更新功能\n* 修复bug",
	tempKey: 0,
	test: function(clientVer){
		if(clientVer<app.version){
			if(confirm("APP有更新，是否前往更新？")){
				location.replace("download.html");
			}
		}
	},
	testOnce: function(clientVer){
		if(app.tempKey) return;
		app.tempKey = 1;
		app.test(clientVer);
	},
};
var msgs = {
	msg: false,
	target: false
};
