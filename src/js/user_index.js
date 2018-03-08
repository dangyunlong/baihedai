define(function (require) {
	var $ = require('jquery');
    require('rem');
    require('less'); //加载less
	
	/*阻止浏览器滚动*/
	function qcmove(event) {event.preventDefault();}
	/*给遮罩层重设高度 解决iphone6下遮罩层无法抵达底部的问题*/
	$(function(){
		$("#fullwindow").css("height",$(document).height())
	})
	$("#fullwindow").on("tap",function(ev){
		if(ev.target.id=="fullwindow"){
			/*100毫秒以后关闭防止触发body里面的其他标签*/
			setTimeout(function(){$("#fullwindow").hide();},100)
			$("body").unbind("touchmove",qcmove);
		}
	})
	$("#closs-bankbox").on("tap",function(){
		setTimeout(function(){$("#fullwindow").hide();},100)
		$("body").unbind("touchmove",qcmove);
	})
	/*判断是否进入页面 ,#reduce*/
	$("#add").on("tap",function(ev){
		if(1==1){
			$("body").on("touchmove",qcmove)
			$("#fullwindow").show()
		}else{
			alert(123);
		}
	})
});