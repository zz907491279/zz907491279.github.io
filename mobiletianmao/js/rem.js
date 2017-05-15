//当页面加载之后
window.onload=function(){
	//常量
	const designwidth=750;
	const fontSize=100;
	// 驼峰命名方式 
	// document.querySelector("html").style.fontSize=fontSize+"px";
	function resizeFont(){
		var CW=document.documentElement.clientWidth;
		// console.log(CW);
		var radio=CW/designwidth;
		var newFontSize=fontSize*radio;
		document.querySelector("html").style.fontSize=newFontSize+"px";
	}
	resizeFont();
	// 屏幕大小改变的时候
	window.onresize=resizeFont;
	window.addEventListener("orientationchange",resizeFont);//监听屏幕旋转
}