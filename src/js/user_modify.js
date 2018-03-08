define(function (require) {
	var $ = require('jquery');
    require('rem');
    require('zepto');
    require('less'); //加载less
	
	// 选中
	$("input").on("tap",function(){
		$(".passbox1,.passbox2,.passbox3,.picturebox,.messagebox").removeClass("choice");
		$(".passbox1,.passbox2,.passbox3").find("img").css("display","none");
		$(this).parent("div").addClass("choice");
		$(this).siblings("img").css("display","block");
	})
	// 清空
	$(".uesrdelete").on("tap",function(){
		$(this).siblings("input").val("");
	})
	// 提交
	$("#nextbtn").on("tap",function(){
		$("#page1").hide()
		$("#page2").show()
	})
});