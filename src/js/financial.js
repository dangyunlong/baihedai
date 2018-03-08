define(function (require) {
	var $ = require('jquery');
    require('rem');
    require('zepto');
    require('less'); //加载less
	
	
	function tab(event){
		str=$(event.data.name).attr("id");
		num=str.substr(str.length-1,1);
		$("#pagetab li").removeClass("project-tab-border");
		$("#pagetab li span").removeClass("project-tab-border");
		$(event.data.name).addClass("project-tab-border");
		$(event.data.name).find("span").addClass("project-tab-border");
		$("#pagebox>div").css("display","none");
		$("#target-page"+num).css("display","block");
	}
	$("#target1").on("tap",{name:"#target1"},tab)
	$("#target2").on("tap",{name:"#target2"},tab)
	$("#target3").on("tap",{name:"#target3"},tab)
	$("#target4").on("tap",{name:"#target4"},tab)
	$(function(){
		$(window).scroll(function(){
			var docHeight=$(document).height();
			var windHeigth=$(window).height();
			var scollPx=docHeight-windHeigth;
			if($(window).scrollTop()==scollPx){
				//alert(123)
			}
		})
	})

});