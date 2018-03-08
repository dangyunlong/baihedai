define(function (require) {
	var $ = require('jquery');
    require('rem');
    require('zepto');
    require('less'); //加载less
	
	/*选项卡*/
	function tab(event){
		str=$(event.data.name).attr("id");
		num=str.substr(str.length-1,1);
		$("#pagetab li").removeClass("project-tab-border");
		$("#pagetab li span").removeClass("project-tab-border");
		$(event.data.name).addClass("project-tab-border");
		$(event.data.name).find("span").addClass("project-tab-border");
		$("#page2>div").css("display","none");
		$("#target-page"+num).css("display","block");
	}
	$("#target1").on("tap",{name:"#target1"},tab)
	$("#target2").on("tap",{name:"#target2"},tab)
	$("#target3").on("tap",{name:"#target3"},tab)
	$("#target4").on("tap",{name:"#target4"},tab)
	$("#target5").on("tap",{name:"#target5"},tab)
	$("#target6").on("tap",{name:"#target6"},tab)
	/*证书切换*/
	var srcArray=["src/img/about/zs/7.png","src/img/about/zs/8.png"]
	var srcArray2=["src/img/about/zs/1.jpg","src/img/about/zs/2.jpg","src/img/about/zs/3.jpg","src/img/about/zs/4.jpg","src/img/about/zs/5.jpg","src/img/about/zs/6.jpg"]
	function scrollzs(id,leftid,rightid,myarray){
		var page=0;
		var maxpage=myarray.length-1;
		var upperimg=$(leftid);
		var nextimg=$(rightid);
		upperimg.on("touchstart",function(){
			if(page==0){
				page=maxpage;
				$(id).attr("src",myarray[page]);
			}else{
				page-=1;
				$(id).attr("src",myarray[page])
			}
		})
		nextimg.on("touchstart",function(){
			if(page==maxpage){
				page=0;
				$(id).attr("src",myarray[page]);
			}else{
				page+=1;
				$(id).attr("src",myarray[page])
			}
		})
	}
	scrollzs("#zs","#zs-left","#zs-right",srcArray);
	scrollzs("#zs2","#zs-left2","#zs-right2",srcArray2);
});