define(function (require) {
	var $ = require('jquery');
    require('rem');
 	require('zepto');
    require('less'); //加载less
    
    $(function(){
		/*显示项目介绍页*/
		function showone(){
			$("#page1,#page4").hide();
			$("#pg1").show();
			$("#investment-button").hide();
			location.hash="pg1";
		}
		/*显示投资记录页*/
		function showtwo(){
			$("#page1,#page4").hide();
			$("#pg2").show();
			$("#investment-button").hide();
			location.hash="pg2";
		}
		/*显示红包页*/
		function page4show(){
			$("#page4").show();
			$("#page1").hide();
			$("#tz").hide();
			location.hash="pg4";
		}
		/*清理page*/
		function clearpage(){
			setTimeout(function(){
				$("#page1").show();
				$("#pg1,#pg2").hide();
			},100)
			location.hash="";
		}
		/*显示立即投资*/
		function page3show(){
			setTimeout(function(){$("#page3").show()},100);
			$("#investment-button").html("确认投资");
		}
		/*顶部返回箭头*/
		function returnarrow(){
			//全部关闭跳转页面
			if($("#pg1").css("display")!="block"&&$("#pg2").css("display")!="block"&&$("#page4").css("display")!="block"){
				window.location.href="financial.html"
			}
			//关闭项目介绍
			if($("#pg1").css("display")=="block"||$("#pg2").css("display")=="block"){clearpage();}
			//关闭红包
			if($("#page4").css("display")=="block"){
				setTimeout(function(){
					$("#page1").show();
					$("#page4").hide();
				},100);
				$("#tz").show()
			}
		}
		/*手机物理按键返回详情*/
		function clearpage(){
			setTimeout(function(){
				if($("#page4").css("display")=="block"){
					$("#page4").hide();
					$("#tz").show()
				}
				$("#page4").hide();
				$("#page1").show();
				$("#pg1,#pg2").hide();
				$("#investment-button").show();
				location.hash=""; 
			},100)
		}
		function checkLocation(){
		    if(location.hash.indexOf("#pg1")>-1){  
		        showone();
		    }else if(location.hash.indexOf("#pg2")>-1){
		    	showtwo();
		    }else if(location.hash.indexOf("#pg4")>-1){
		    	page4show();
		    }else{
		    	clearpage();
		    }
		}
		/*按钮绑定*/
		$("#return-arrow").on("tap",returnarrow)
		$("#pet1").on("tap",showone)
		$("#pet2").on("tap",showtwo)
		/*确认投资 && 开通投标授权*/
		$("#investment-button").on("tap",function(){
			//请填入你自己的判断条件 返回false则投标授权窗口不弹出
			if(1==2){
				setTimeout(function(){
					$("#page5").show();
				},100)
				$("#cancel").on("tap",function(){
					$("#page5").hide();
				})
			}else if($("#page3").css("display")=="none"){
				page3show();
			}
		})
		/*开通弹出框*/
		$("#page5").on("touchstart",function(ev){
			var Event=ev||window.event;
			if (Event.stopPropagation){
			  Event.stopPropagation();
			}else{
			  Event.cancelBubble=true;
			}
			if(ev.target.id=="page5"){
				$(this).hide();
			}
		})
		/*监听物理返回*/
		window.onpopstate = function() {  
		    checkLocation();  
		}; 
		/*在app中不需要以下代码*/
		/*同意协议*/
		$("#agree").on("touchstart",function(){
			var img=$(this).attr("src");
			if(img=="img/project/agree-enter.png"){
				$(this).attr("src","src/img/project/agree.png");
				alert("不同意协议")
			}else{
				$(this).attr("src","src/img/project/agree-enter.png");
				alert("同意协议")
			}
		})
		$("#page3").on("tap",function(ev){
			var Event=ev||window.event;
			if (Event.stopPropagation){
			  Event.stopPropagation();
			}else{
			  Event.cancelBubble=true;
			}
			if(ev.target.id=="page3"){
				if($("#page2").css("display")=="block"){
					$("#top").show();
				}
				$(this).hide();
				$("#investment-button").html("立即投资")
			}
		})
		/*红包页绑定事件*/
		$(function(){
			$("#jx").on("tap",page4show)
			$("#page4 a").find(".hb").parent().parent().on("tap",function(){
				$("#jx-val").text($(this).find("input").val());
				$("#jx-input").val($(this).find("input").val());
				$("#page4").hide();
				$("#page1").show();
				$("#tz").show();
			})
			$("#page4 a").find(".jx").parent().parent().on("tap",function(){
				$("#jx-val").text($(this).find("input").val());
				$("#jx-input").val($(this).find("input").val());
				$("#page4").hide();
				$("#page1").show();
				$("#tz").show();
			})
		})
	})
});