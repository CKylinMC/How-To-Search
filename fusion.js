var app = {
	version: 6,
	ver: "v1.2",
	apk: "https://github.com/Cansll/How-To-Search/releases/download/v1.2/app.apk",
	msg: "更新：\n\n* 新增检查更新功能",
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
		if(clientVer<app.version){
			if(confirm("APP有更新，是否前往更新？")){
				location.replace("download.html");
			}
		}
	},
};
var msgs = {
	msg: false,
	target: false
};