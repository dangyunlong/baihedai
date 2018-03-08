define(function (require) {
	var $ = require('jquery');
    require('rem');
    require('less'); //加载less
	
	/*页面切换*/
	function pagehide(){
		$("#page1,#page2,#page3").hide()
	}
	$("#pagebtn").on("tap",function(){
		pagehide();
		$("#pagebtn").hide();
		$("#page2").show()
	})
	$("#return-arrow").on("tap",function(){
		if($("#page2").css("display")=="block"){
			$("#page2").hide();
			$("#page1").show();
			$("#pagebtn").show();
		}
		if($("#page3").css("display")=="block"){
			$("#page3").hide();
			$("#page1").show();
			$("#pagebtn").show();
		}
	})
	$("#return-arrow2").on("tap",function(){
		$("#page1,#page2,#page3").hide();
		$("#page3").show();
		$("#pagebtn").hide();
	})
	
	/*底部加载*/	
	$(function(){
		$(window).scroll(function(){
			var docHeight=$(document).height();
			var windHeigth=$(window).height();
			var scollPx=docHeight-windHeigth;
			if($(window).scrollTop()==scollPx){
				alert(123)
			}
		})
	})
});