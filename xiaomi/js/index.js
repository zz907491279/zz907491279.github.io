$(function(){
	const gouwuc=$(".gouwuche");
	const gwxiala=$(".gouwuche .gwxiala");
	const maindaohang=$(".maindaohang .nav-item");
	const navxiala=$(".maindaohang .nav-xiala");
	const  bannerBox=$(".bannerBox")[0];
	const bannerload=$(".bannerBox .bannerload");
	const lunbo=$(".lunbo span");
	const lhd=$(".bannerBox a .lhuadong")[0];
	const yhd=$(".bannerBox a .yhuadong")[0];
	const dapeilis=$(".dapeiMore ul li");
	const dapeicon=$(".dapeineit");
	// console.log(navxiala);
	xuanxiangka(gouwuc,gwxiala);
	xuanxiangka(maindaohang,navxiala);
	xuanxiangka2(dapeilis,dapeicon);
	bannerload[0].style.opacity=1;
	lunbo[0].style.background="#fff";
	var num=0;
	var t=setInterval(move,2000);
		bannerBox.onmouseover=function(){
			clearInterval(t);

		}
		bannerBox.onmouseout=function(){
			t=setInterval(move,2000);
		}
		for(let j=0;j<lunbo.length;j++){
			lunbo[j].onclick=function(){
				for(let i=0;i<bannerload.length;i++){
					bannerload[i].style.opacity=0;
						lunbo[i].style.backgroundColor="gray";
						lunbo[i].style.borderColor="rgba(255,255,255,0.3)";
				}
				// tu[j].style.opacity=1;
				animate(bannerload[j],{opacity:1},1000);
				lunbo[j].style.backgroundColor="rgba(255,255,255,0.4)";
				lunbo[j].style.borderColor="rgba(0,0,0,0.4)";
				num=j;
			}
			// lunbo[j].onmouseover=function(){
			// 	lunbo[j].style.backgroundColor="#fff";
			// }
			// lunbo[j].onmouseout=function(){
			// 	lunbo[j].style.backgroundColor="gray";
				
			// }
		}
		function move(type="l"){
			if(type=="l"){
				num++;
				if(num>bannerload.length-1){
					num=0;
				}
			}else if(type=="r"){
				num--;
				if(num<0){
					num=bannerload.length-1;
				}
			}
			
			for(let i=0;i<bannerload.length;i++){
				bannerload[i].style.opacity=0;
				lunbo[i].style.backgroundColor="gray";
				lunbo[i].style.borderColor="rgba(255,255,255,0.3)";


			}
			// tu[num].style.opacity=1;
			animate(bannerload[num],{opacity:1},1000);
			lunbo[num].style.backgroundColor="rgba(255,255,255,0.4)";
			lunbo[num].style.borderColor="rgba(0,0,0,0.4)";
		

		}
		lhd.onclick=function(){
			move("r");

		}
		yhd.onclick=function(){
			move("l");
		}
	
	jiedian(".mxSection .mxlist",".more .morez",".more .morey",".mxSection",5);
	zylunbo(".wraper .item-list li",".NeirongText ul .nritem1",".NeirongText ul li .zuo",".NeirongText ul li .you",".lunbosmall span","#fff","#ff6700","gray");
	zylunbo(".wraper .item-list2 li",".NeirongText ul .nritem2",".NeirongText ul li .zuo2",".NeirongText ul li .you2",".lunbosmall2 span","#fff","#ff6700","gray");
	zylunbo(".wraper3 .item-list3 li",".NeirongText ul .nritem3",".NeirongText ul li .zuo3",".NeirongText ul li .you3",".lunbosmall3 span","#fff","#ff6700","gray");
	zylunbo(".wraper .item-list4 li",".NeirongText ul .nritem4",".NeirongText ul li .zuo4",".NeirongText ul li .you4",".lunbosmall4 span","#fff","#ff6700","gray");

})