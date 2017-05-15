// window.onload=function(){
// 	const dizhi=document.querySelectorAll(".hd-nav .stress li");
// 	const cs=document.querySelectorAll(".hd-nav .stress li .csBox");
// 	const xiala=document.querySelectorAll(".hd-nav .navbox .xialaItem");
// 	const Myjd=document.querySelectorAll(".hd-nav .navbox .xialaItem .Myjd");
// 	xuanxiangka(dizhi,cs);
// 	xuanxiangka(xiala,Myjd);


// }
$(function(){
	const dizhi=$(".hd-nav .stress li");
	const cs=$(".hd-nav .stress li .csBox");
	const xiala=$(".hd-nav .navbox .xialaItem");
	const Myjd=$(".hd-nav .navbox .xialaItem .Myjd");
	const bannernavli=$(".banner .bannerNav ul li");
	const bannerMore=$(".banner .bannerNav ul li .bannerMore");
	xuanxiangka(dizhi,cs);
	xuanxiangka(xiala,Myjd);
	xuanxiangka(bannernavli,bannerMore);
    //banner轮播 cjlunbo(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor)
    // tmcjlb(lbtu,bannerBox,leftbtn,rightbtn,lbd)
    tmcjlb(".bannerMain-top .banner li",".bannerMain-top",".bannerMain-top .zuohuadong",".bannerMain-top .youhuadong",".bannerMain-top .lunbodian li");
	// banner选项卡
	const newsbtn=$(".newshd .mod_tab_head_item");
	const nescon=$(".newsneir .nescon");
	const xiahuaxian=$(".newshd .news_tab_active")[0];
	xuanxiangka1(newsbtn,nescon,xiahuaxian);

	// 节点轮播
	jiedian(".msneirongl .mslist",".zycontrol .sk_control_pre",".zycontrol .sk_control_next",".msneirongl",5);
	// 排行榜选项卡
	const ppbtn=$(".phbbtom-top .phbitem");
	const ppcon=$(".phbbtom-bt .cont_item");
	const xiahu=$(".xiahuaxian")[0];
	ppcon[0].style.display="block";
	for(let i=0;i<ppcon.length;i++){
		ppbtn[i].onmouseover=function(){
			for(let j=0;j<ppcon.length;j++){
				ppcon[j].style.display="none";
			}
			ppcon[i].style.display="block";
			if(i==0){
				animate(xiahu,{left:9},500);
			}else if(i==1){
				animate(xiahu,{left:83},500);
			}else if(i==2){
				animate(xiahu,{left:162},500);
			}else if(i==3){
				animate(xiahu,{left:236},500);
			}else if(i==4){
				animate(xiahu,{left:311},500);
			}
		}
	}
	// 直播轮播
    // tmcjlb(lbtu,bannerBox,leftbtn,rightbtn,lbd)
    tmcjlb(".pzneirong .pzlist .entry_item .zbBox .live-list li",".pzneirong .pzlist .entry_item .zb1",".pzneirong ul li .zb .zuohua",".pzneirong ul li .zb .youhua",".pzneirong ul li .zb .end span");
	// 回顶部
	gundong(".jingdong_zuo",".zuo_box","section","nav");

    // const dh=$(".dh")[0];
    // const dm=$(".dm")[0];
    // const ds=$(".ds")[0];
    // class djs{
    //     constructor(h,m,s,date){
    //         this.h=h;
    //         this.m=m;
    //         this.s=s;
    //         // this.t=t;
    //         this.date=date;
    //     }
    //     play(){
    //         let map=this.gettime();
    //         this.writes(map);
    //         this.update();
    //     }
    //     gettime(){
    //         let now= new Date();
    //         let chatime=this.date.getTime()-now.getTime();
    //         chatime/=1000;
    //         // let t=parseInt(chatime/60/60/24);
    //         let h=parseInt(chatime/60/60%24);
    //         let m=parseInt(chatime/60%60);
    //         let s=parseInt(chatime%60);
    //         let map =new Map();
    //
    //         h=h<10?('0'+h):h;
    //         m=m<10?('0'+m):m;
    //         s=s<10?('0'+s):s;
    //
    //         map.set("h",h);
    //         map.set("m",m);
    //         map.set("s",s);
    //         return map;
    //     }
    //     writes(map){
    //         this.h.innerHTML=map.get("h");
    //         this.m.innerHTML=map.get("m");
    //         this.s.innerHTML=map.get("s");
    //
    //     }
    //     update(){
    //         let that=this;
    //         setInterval(function(){
    //             that.writes(that.gettime());
    //         },1000)
    //     }
    // }
    // let wuyi=new Date(2017,4,1,0,0,0)
    // let wydjs1=new djs(dh,dm,ds,wuyi);
    // wydjs1.play();

})

