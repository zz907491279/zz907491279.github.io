$(function(){
	const weixin=$(".weixin");
	const xiala=$(".loginBox .weixin .xiala");
	const gouwuche=$(".gouwuche");
	const gouwuxiala=$(".gouwuche .gouwuxiala");
	const xlnav=$(".caidan1 ul .xlnav");
	const hdnav=$(".caidan1 ul .xlnav .hdnav");
	console.log(hdnav);
	const banner=$(".banner");
	const imgs=$(".banner ul li");
	const lis=$(".banner .banner_lisBox span");
	const huidingbu=$(".baywindow ul .huidingbu")[0];
	const head=$("header");
	const sousuo=$(".sousuokuang")[0];
	sousuo.onmouseover=function(){
		sousuo.select();
	}
	sousuo.onmousedown=function(){
		
		sousuo.value="";
	}
	let obj=scrollobj();
	console.log(huidingbu);
	// const hudong=$(".banner .huadong");
	xuanxiangka(weixin,xiala);
	xuanxiangka(gouwuche,gouwuxiala);
	// xuanxiangka(xlnav,hdnav);
	xialadaohang(".caidan1 ul .xlnav",".caidan1 ul .xlnav .hdnav");
	toumingdulunbo(".banner ul li",".banner",".banner .banner_lisBox span",[,,,,,,,],1,"#a10000",2000,0,"#dddddd");
	huidingbu.onclick=function(){
		animate(obj,{scrollTop:0},500);
	}
})