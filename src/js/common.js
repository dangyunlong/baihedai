require.config({
	baseUrl: 'src/js/', //文件存放路径
    paths: { 
    	//paths节点的名称和加载路径
    	//如果common.js与使用的js在同一个目录 直接写名字即可 这里只定义公用的
        "jquery": "public/jquery", 
        "echarts": "public/echarts",
        "rem": "public/rem",
        "myfun": "public/myfun",
        "swiper": "public/swiper",
        "touchslide": "public/touchslide",
        "zepto": "public/zepto",
        "event": "public/event",
        "touch": "public/touch",
        "less": "public/less",
    },
    shim: { //这里写明依赖关系
        "myfun": {
            exports: "$",
            deps: ['jquery']
        },
        "echarts": {
            exports: "$",
            deps: ['jquery']
        },
        "rem": {
            exports: "$",
            deps: ['jquery']
        },
        "swiper": {
            exports: "$",
            deps: ['jquery']
        },
        "touchslide": {
            exports: "$",
            deps: ['jquery']
        }
    },
    waitSeconds: 0
});
