// JavaScript Document
var fontAuto={
	FA:function(json){//width表示网页的宽度
		this.init(json);
	}
};
fontAuto.FA.prototype={
	faFun:function(json){
		var winW=document.documentElement.clientWidth;//屏幕的宽度
		if(winW>=json.width)
		{
			document.documentElement.style.fontSize="625%";
		}
		else{
			document.documentElement.style.fontSize=(winW/json.width*625)+"%";
		}
	},
	init:function(json){
		this.faFun(json);//触发一次字体设置
		var obj=this;
		window.onresize=function(){
			obj.faFun(json);
		}
	}
};

var fa=new fontAuto.FA({
	width:750
});
