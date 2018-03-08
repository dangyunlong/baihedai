define(function (require) {
	var $ = require('jquery');
    require('rem');
    require('less'); //加载less
    
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    alert('是否是Android：'+isAndroid);
    alert('是否是iOS：'+isiOS);
	
});