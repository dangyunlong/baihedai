define(function (require) {
	var $ = require('jquery');
    require('rem');
    require('zepto');
    require('swiper');
    require('less'); //加载less

	/*web端*/
	$(function(){
		var windowHeigth=$(window).height();
		var headerHeigth=$(".public-head").height();
		var swiperHeigth=windowHeigth-headerHeigth;
		var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        direction: 'vertical',
	        nextButton:'.uparrow',
	        //height:swiperHeigth
	    });
		setTimeout(function(){
			$(".security-page1").height(swiperHeigth);
		},10)
	})
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        nextButton:'.uparrow',
	});

    $("#page2-big-window").on("touchstart",function(ev){
    	var Event=ev||window.event;
		if (Event.stopPropagation){
		  Event.stopPropagation();
		}else{
		  Event.cancelBubble=true;
		}
		if(ev.target.id=="closs-window"){
			$("#page2-big-window").css("display","none");
		}
    })
    
    $("#img1").on("touchstart",function(){
    	alert(123);
    	$("#page2-big-window").css("display","table");
    	$("#page2-big-img").attr("src","src/img/security/page2/role6.png")
    })
    $("#img2").on("touchstart",function(){
    	$("#page2-big-window").css("display","table");
    	$("#page2-big-img").attr("src","src/img/security/page2/role5.png")
    })
    
});