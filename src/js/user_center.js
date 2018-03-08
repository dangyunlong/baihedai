define(function (require) {
	var $ = require('jquery');
    require('rem');
    require('zepto');
    require('less'); //加载less
	
	/*阻止浏览器滚动*/
	function qcmove(event) {event.preventDefault();}
	/*显示二维码*/
	$("#fullwindow").on("tap",function(ev){
		if(ev.target.id=="fullwindow"){
			$(this).hide();
			$("body").unbind("touchmove",qcmove);
		}
	})
	$("#center-code").on("tap",function(ev){
		$("body").on("touchmove",qcmove)
		$("#fullwindow").show()
	})
	/*请去官方修改*/
	function leave(){
		alert("请到PC端官网修改！")
	}
});