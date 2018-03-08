define(function (require) {
	var $ = require('jquery');
    require('rem');
    require('zepto');
    require('less'); //加载less
	
	$(function(){
		/*打开银行卡选择区域*/
		$("#bank").on("tap",function(){
			if($("#bank-box").css("display")=="none"){
				$("#bank-box").css("display","block");
				$("#bank-arrow").attr("src","src/img/user/add/bank_point_down.png")
				return false
			}else if($("#bank-box").css("display")=="block"){
				setTimeout(function(){
					$("#bank-box").css("display","none");
				},100)
				$("#bank-arrow").attr("src","src/img/user/add/bank_point_right.png")
				return false
			}
		})
		/*选择银行卡*/
		$("#bank-box tr").on("tap",function(){
			var bank=$(this).find("td:last-of-type").text();
			$("#bankname").text(bank);
			setTimeout(function(){
					$("#bank-box").css("display","none");
			},100)
			$("#bank-arrow").attr("src","src/img/user/add/bank_point_right.png")
			$("#bankspan").val($(this).find("span").attr("data-value"))
		})
		/*计算银行卡区域大小*/
		var headHeight=$(".headbox").height();
		var detailsHeight=$(".user-details").height();
		var addboxHeight=$(".user-addbox-top").height();
		var viewbox=parseFloat(headHeight+detailsHeight+addboxHeight);
		var windowHeight=$(window).height();
		$("#bank-box").css("height",windowHeight-viewbox);
		$("#bank-box").css("top",addboxHeight+10)
	})
});