define(function (require) {
	var $ = require('jquery');
    require('rem');
    require('zepto');
    require('less'); //加载less
	
	/*选项卡*/
	function tab(event){
		str=$(event.data.name).attr("id");
		father=$(event.data.father).attr("id");
		tabbox=$(event.data.tabbox).attr("id");
		num=str.substr(str.length-1,1);
		$("#"+father).find("li").removeClass("project-tab-border");
		$("#"+father).find("li span").removeClass("project-tab-border");
		$(event.data.name).addClass("project-tab-border");
		$(event.data.name).find("span").addClass("project-tab-border");
		$("#"+tabbox).children("div").css("display","none");
		$("#target-page"+num).css("display","block");
	}
	$("#target1").on("tap",{name:"#target1",father:"#pagetab",tabbox:"#page5"},tab)
	$("#target2").on("tap",{name:"#target2",father:"#pagetab",tabbox:"#page5"},tab)
	$("#target3").on("tap",{name:"#target3",father:"#pagetab",tabbox:"#page5"},tab)
	/*返回按钮*/
	$("#return-arrow").on("touchstart",function(){
		if($("#page2").css("display")=="none"){
			//代码放在这里
		}
		if($("#page2").css("display")=="block"){
			$("#page2").hide();
			$("#public-title").text("项目详情");
		}
		if($("#page4").css("display")=="block"){
			$("#page1").show();
			$("#page4").hide();
		}
		if($("#page4").css("display")=="none" && $("#page5").css("display")=="none"){
			$("#investment-button").show();
			$("#disable-button").hide();
		}
		if($("#page5").css("display")=="block"){
			$("#page5").hide();
			$("#page4").show();
		}
	})
	/*同意协议*/
	$("#agree").on("tap",function(){
		var img=$(this).attr("src");
		if(img=="img/project/agree-enter.png"){
			$(this).attr("src","img/project/agree.png")
		}else{
			$(this).attr("src","img/project/agree-enter.png")
		}
	})
	/*确认投资*/
	$("#investment-button").on("touchstart",function(){
		if($("#page3").css("display")=="none"){
			$(this).html("确认投资");
		}
	})
	$("#page3").on("touchstart",function(ev){
		var Event=ev||window.event;
		if (Event.stopPropagation){
		  Event.stopPropagation();
		}else{
		  Event.cancelBubble=true;
		}
		if(ev.target.id=="page3"){
			$(this).hide();
			$("#investment-button").html("立即投资")
		}
	})
	$("#investment-button").on("touchstart",function(){
		$("#page3").show()
	})
});