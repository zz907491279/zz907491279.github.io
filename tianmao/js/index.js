$(function(){
	const nav=$(".head-nav .xialanav");
	const xialanav=$(".head-nav .xialanav .navxiala");
	const lis=$(".bannernav ul li");
	const bannermore=$(".bannernav ul li .bannermore");
	const lunbodian=$(".mainbanner .lunbo li");
	const mainbanner=$(".mainbanner")[0];
	const  bannerBox=$(".mainbanner .banner .bannerimg");
	const color=["rgb(232,232,232)","rgb(232,232,232)","rgb(137,27,209)","rgb(140,196,243)","rgb(206,2,194)","rgb(7,117,242)"];
	bannerBox[0].style.opacity=1;
	lunbodian[0].style.background="gray";
	mainbanner.style.background=color[0];
	xuanxiangka(nav,xialanav);
	xuanxiangka(lis,bannermore);
	jiedian(".items-ctn",".page-prev",".page-next",".livelist",3);
	const btnd=$(".live-slide-item");
	const con=$(".livebox");
	xuanxiangka1(btnd,con);
	//banner轮播
	var num=0;
	var t=setInterval(move,2000);
		mainbanner.onmouseover=function(){
			clearInterval(t);

		}
		mainbanner.onmouseout=function(){
			t=setInterval(move,2000);
		}
		for(let j=0;j<lunbodian.length;j++){
			lunbodian[j].onmouseover=function(){
				clearInterval(t);
				for(let i=0;i<bannerBox.length;i++){
					bannerBox[i].style.opacity=0;
						lunbodian[i].style.backgroundColor="gray";

				}
				// bannerBox[j].style.opacity=1;
				animate(bannerBox[j],{opacity:1},1000);
				lunbodian[j].style.backgroundColor="#fff";
				mainbanner.style.background=color[j];
				num=j;
			}
		}
		
		function move(){
			num++;
			if(num>bannerBox.length-1){
				num=0;
			}
			for(let i=0;i<bannerBox.length;i++){
				bannerBox[i].style.opacity=0;
				lunbodian[i].style.backgroundColor="gray";


			}

			// bannerBox[num].style.opacity=1;
			animate(bannerBox[num],{opacity:1},1000);
			lunbodian[num].style.backgroundColor="#fff";
			mainbanner.style.background=color[num];

		}
		const floor1=$(".floors .floor-item")[0];

		gundong(".floors",".fplift a","section",".xialashow");
		floor1.style.background="red";

	// 直播上下轮播
		const kuang=$(".fc-item-list")[0];
		shangxialb(kuang,40);
		const kuang1=$(".sitems");
		for(let i=0;i<kuang1.length;i++){
			shangxialb(kuang1[i],30);
		}
		function shangxialb(obj,mgTop){
			var t=setInterval(function(){
				let first=obj.firstElementChild;
				animate(obj,{marginTop:-mgTop},500,function(){
					obj.appendChild(first);
					obj.style.marginTop=0;
				})
			},2500);
		}
		
	//右侧黑色框
	const youce=$(".youce-11");
	const youcehua=$(".mui-mbar-tab-tip");
	console.log(youce);
	let q;
	for(let i=0;i<youce.length;i++){
		youce[i].onmouseover=function(){
			q=setTimeout(function(){
				youcehua[i].style.display="block";
				animate(youcehua[i],{right:35,opacity:1},300);
			},100);
		}
		youce[i].onmouseout=function(){
			if(q){
				clearTimeout(q);
			}
			animate(youcehua[i],{right:70,opacity:0},300,function(){youcehua[i].style.display="none";});
		}
	}
		let erweima=$(".youce-3-9")[0];
	let erweima1=$(".youerweima")[0];
	erweima.onmouseover=function(){
		erweima1.style.display="block";
		erweima.onmouseout=function(){
			erweima1.style.display="none";
		}
	}
	// 返回顶部
	const youtop=$(".youce-3-8")[0];
	const head=$("header")[0];
	const youdhl=$(".youce")[0];
	let obj=scrollobj();
	window.onscroll=function(){
		if(obj.scrollTop==0){
			let youding=$(".youce-3-8")[0];
			youding.style.display="none";
		}else{
			let youding=$(".youce-3-8")[0];
			youding.style.display="block";
		}
	}
	youtop.onclick=function(){
		animate(obj,{scrollTop:head.offsetTop},500);
	}

	window.onresize=function(){
		youdhl.style.height=document.documentElement.clientHeight+"px";
	}
})