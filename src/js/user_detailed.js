define(function (require) {
	var $ = require('jquery');
    require('rem');
    require('zepto');
    require('less'); //加载less
	
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