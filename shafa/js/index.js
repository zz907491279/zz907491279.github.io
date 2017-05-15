$(function(){
	// const lis=$(".Maindh .navbar li");
	const xiala=$(".dropdown-menu");
	const btn=$(".xiala");
	// const daohang=$(".nav-first");
	// console.log(daohang);
	xuanxiangka(btn,xiala);
	// daohang.onclick=function(){
	// 	navbar.style.display="block";
	// }
	const tu=$(".screenhot a img");
	const banner=$(".imagebox")[0];
	console.log(banner);
	tu[0].style.zIndex=2;
	tu[0].style.opacity=1;
	var t=setInterval(move,2000);
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,2000);
	}
	var num=0;
	function move(){
		num++;
		if(num>tu.length-1){
			num=0;
		}
		for(let i=0;i<tu.length;i++){
			tu[i].style.zIndex=1;
			tu[i].style.opacity=0;
		}
		tu[num].style.zIndex=2;
		tu[num].style.opacity=1;
	}
	
})