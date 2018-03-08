define(function (require) {
	var $ = require('jquery');
    require('rem');
    require('zepto');
    require('less'); //加载less
	
	$(function(){
		/*展开更多*/
		$(".message-big-box a").on("tap",function(){
			var imgsrc=$(this).children(".message-title").children(".floatright").find("img");
			$(this).parent().siblings(".message-main").toggle();
			if(imgsrc.attr("src")=="src/img/user/message/pointDown.png"){
				imgsrc.attr("src","src/img/user/message/pointUp.png");
				return false;
			}else{
				imgsrc.attr("src","src/img/user/message/pointDown.png")
			}
		})
		/*下拉加载*/
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