define(function (require) {
    var $ = require('jquery');
    //你要使用哪个js你就加载哪个
    require('rem');
    require('touchslide');
    require('less'); //加载less
    
    var myfun=require('myfun');
    
    //如果你要使用对象方式来使用方法，需要先在前面定义一个变量去继承这个对象
    myfun.tip(); //运行自己的方法
    less.watch();//加载less
    
    //如果是当前页面的 直接写下面就行了
    
    
    
    //关闭浮动条
    $("#closs-float-btn").on("touchstart",function(){
		setTimeout(function(){$("#float-windowbox").hide()},100)
	})
    
    //banner
    TouchSlide({ 
		slideCell:"#focus",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		mainCell:".bd ul", 
		effect:"leftLoop", 
		autoPlay:true,//自动播放
		autoPage:true, //自动分页
		switchLoad:"_src" //切换加载，真实图片路径为"_src" ,
	});
	
});