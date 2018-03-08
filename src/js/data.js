define(function (require) {
	var $ = require('jquery');
    require('rem');
    require('zepto');
    require('swiper');
    var echarts=require('echarts'); //你加载echarts的话，因为他本身已经是基于amd开发的了，所以你直接使用即可。
    require('less'); //加载less
    

	/*web端*/
    $(function(){
		var windowHeigth=$(window).height();
		var headerHeigth=$(".public-head").eq(0).height();
		var swiperHeigth=windowHeigth-headerHeigth;
		/*swiper*/
		var swiperV = new Swiper('.swiper-container-v', {    
	        pagination: '.swiper-pagination-v',    
	        paginationClickable: true,    
	        direction: 'vertical',    
	        spaceBetween: 50,
	        nextButton:'.uparrow',
	        height:swiperHeigth
	    });  
	    var swiperH = new Swiper('.swiper-container-h', {    
	        pagination: '.swiper-pagination-h',    
	        paginationClickable: true,    
	        spaceBetween: 50
	    });  
	    var swiperY = new Swiper('.swiper-container-y', {    
	        pagination: '.swiper-pagination-y',    
	        paginationClickable: true,    
	        spaceBetween: 50
	    }); 
	})
    $(function(){
		var windowHeigth=$(window).height();
		var headerHeigth=$(".public-head").eq(0).height();
		var swiperHeigth=windowHeigth-headerHeigth;
		/*swiper*/
		var swiperV = new Swiper('.swiper-container-v', {    
	        pagination: '.swiper-pagination-v',    
	        paginationClickable: true,    
	        direction: 'vertical',    
	        spaceBetween: 50,
	        nextButton:'.uparrow',
	        height:swiperHeigth
	    });  
	    var swiperH = new Swiper('.swiper-container-h', {    
	        pagination: '.swiper-pagination-h',    
	        paginationClickable: true,    
	        spaceBetween: 50
	    });  
	    var swiperY = new Swiper('.swiper-container-y', {    
	        pagination: '.swiper-pagination-y',    
	        paginationClickable: true,    
	        spaceBetween: 50
	    });  
	})
    /*app*/
	/*var swiperV = new Swiper('.swiper-container-v', {    
        pagination: '.swiper-pagination-v',    
        paginationClickable: true,    
        direction: 'vertical',    
        spaceBetween: 50,
        nextButton:'.uparrow',
        height:swiperHeigth
    });  
    var swiperH = new Swiper('.swiper-container-h', {    
        pagination: '.swiper-pagination-h',    
        paginationClickable: true,    
        spaceBetween: 50
    });  
    var swiperY = new Swiper('.swiper-container-y', {    
        pagination: '.swiper-pagination-y',    
        paginationClickable: true,    
        spaceBetween: 50
    });*/ 
    /*echarts*/
    /*平台月度成交量*/
    var myChart = echarts.init(document.getElementById('echarts1'));
    var option = {
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    grid: {
	        left: '2%',
	        right: '8%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	    	type: 'value',
	    	//不显示分割线
			splitLine:{show: false},
	        axisLabel: {
                show: true,
                textStyle: {
                    color: '#948a92'
                }
            },
            //x轴的颜色
            axisLine:{  
                show: true,
				textStyle: {
					color: '#948a92'
				}  
            } 
	    },
	    yAxis: {
	        type: 'category',
	        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
	        //设置颜色
	        axisLabel: {
				show: true,
				textStyle: {
					color: '#948a92'
				}
			},
            axisLabel: {
				show: true,
				textStyle: {
					color: '#948a92'
				} 
			} 
	    },
	    series: [
	        {
	            name: '2011年',
	            type: 'bar',
	            data: [1200,1350,1280,1550,1800,2011,2080,2180,2480,2100,1980,1600],
	        }
	    ],
	    itemStyle:{
		    normal:{
		        color:'#29aae3',
		    }
		}
	};
	/*投资用户分析*/
    var myChart2 = echarts.init(document.getElementById('echarts2'));
    var option2 ={
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
			right:"3%",
			bottom:"30%",
			data:[
			{
                name:'25岁以下',
                textStyle:{
                    color:'#cccccc'
                },
        	},{
                name:'26-35岁',
                textStyle:{
                    color:'#cccccc'
                },
        	},{
                name:'36-45岁',
                textStyle:{
                    color:'#cccccc'
                },
        	},{
                name:'46岁以上',
                textStyle:{
                    color:'#cccccc'
                },
        	}
			],
	    },
	    color:['#034099', '#2276d9','#46a1fc','#f8931f'],
	    series: [
			{
				name:'年龄分布',
				type:'pie',
				center:["37%","50%"],
				radius: ['50%', '70%'],
				data:[{value:9, name:'25岁以下'},{value:10, name:'26-35岁'},{value:4, name:'36-45岁'},{value:2, name:'46岁以上'}]				
			}
		]
	};
	var myChart3 = echarts.init(document.getElementById('echarts3'));
    var option3 ={
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
			right:"13.5%",
			bottom:"30%",
			data:[
				{
	                name:'男',
	                textStyle:{
	                    color:'#cccccc'
	                },
            	},
            	{
	                name:'女',
	                textStyle:{
	                    color:'#cccccc'
	                },
            	}
        	]
	    },
	    color:['#f8931f','#2375d8'],
	    series: [
			{
				name:'性别分布',
				type:'pie',
				center:["37%","50%"],
				radius: ['50%', '70%'],
				data:[{value:15, name:'男'},{value:10, name:'女'}]				
			}
		]
	};
	/*平台月度成交量*/
    var myChart4 = echarts.init(document.getElementById('echarts4'));
    var option4 = {
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    grid: {
	        left: '2%',
	        right: '8%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	    	type: 'value',
	    	//不显示分割线
			splitLine:{show: false},
	        axisLabel: {
                show: true,
                textStyle: {
                    color: '#948a92'
                }
            },
            //x轴的颜色
            axisLine:{  
                show: true,
				textStyle: {
					color: '#948a92'
				}  
            } 
	    },
	    yAxis: {
	        type: 'category',
	        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
	        //设置颜色
	        axisLabel: {
				show: true,
				textStyle: {
					color: '#948a92'
				}
			},
            axisLabel: {
				show: true,
				textStyle: {
					color: '#948a92'
				} 
			} 
	    },
	    series: [
	        {
	            name: '2011年',
	            type: 'bar',
	            data: [1200,1350,1280,1550,1800,2011,2080,2180,2480,2100,1980,1600],
	        }
	    ],
	    itemStyle:{
		    normal:{
		        color:'#29aae3',
		    }
		}
	};
	/*借款用户分析*/
    var myChart5 = echarts.init(document.getElementById('echarts5'));
    var option5 ={
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
			right:"3%",
			bottom:"30%",
			data:[
				{
	                name:'25岁以下',
	                textStyle:{
	                    color:'#cccccc'
	                },
            	},{
	                name:'26-35岁',
	                textStyle:{
	                    color:'#cccccc'
	                },
            	},{
	                name:'36-45岁',
	                textStyle:{
	                    color:'#cccccc'
	                },
            	},{
	                name:'46岁以上',
	                textStyle:{
	                    color:'#cccccc'
	                },
            	}
			]
	    },
	    color:['#034099', '#2276d9','#46a1fc','#f8931f'],
	    series: [
			{
				name:'年龄分布',
				type:'pie',
				center:["37%","50%"],
				radius: ['50%', '70%'],
				data:[{value:9, name:'25岁以下'},{value:10, name:'26-35岁'},{value:4, name:'36-45岁'},{value:2, name:'46岁以上'}]				
			}
		]
	};
	var myChart6 = echarts.init(document.getElementById('echarts6'));
    var option6 ={
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
			right:"13.5%",
			bottom:"30%",
			data:[
				{
	                name:'男',
	                textStyle:{
	                    color:'#cccccc'
	                },
            	},
            	{
	                name:'女',
	                textStyle:{
	                    color:'#cccccc'
	                },
            	}
			]
	    },
	    color:['#f8931f','#2375d8'],
	    series: [
			{
				name:'性别分布',
				type:'pie',
				center:["37%","50%"],
				radius: ['50%', '70%'],
				data:[{value:1, name:'男'},{value:2, name:'女'}]				
			}
		]
	};
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
    myChart4.setOption(option4);
    myChart5.setOption(option5);
    myChart6.setOption(option6);
    // 自动视频窗口大小
    /*window.onresize = myChart.resize({
    	width:"auto",
    	height:"auto"
    });*/
});