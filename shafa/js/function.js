// window.onload 只能写一次
// 函数库
 //obj=document 范围 是select的父级元素 select是选择器 功能：封装了window.onload以及查找元素或者集合的方法
	// $功能 1、获取元素 2、创建元素 3页面加载
	function $(select,obj=document){          
		if(typeof select=="function"){
			// window.onload=function(){
			// 	select();
			// }
			window.addEventListener("load",select,false);
		}else if(typeof select=="string"){
			if(/^<\w+>$/.test(select)){
				return document.createElement(select.slice(1,-1));
			}else{
				return obj.querySelectorAll(select);
				//select 选择器
			}
			
		}
	}

	//xuanxiangka(btn,con)选项卡  btn选项卡的按钮 con选项卡的内容
	function xuanxiangka(btn,con){
		// for 循环中把let换为var的写法 btn[i].ind=i;保证btn中的i与con中的i一致 
		for(var i=0;i<btn.length;i++){
			btn[i].ind=i;
			btn[i].onmouseover=function(){	
			for(let j=0;j<con.length;j++){	
			con[j].style.display="none";
			}
			// console.log(this.ind);
			con[this.ind].style.display="block";
			}
			btn[i].onmouseout=function(){
			con[this.ind].style.display="none";
			}
		}
	}


	//遮罩
	// kuai是要加遮罩的那部分，zheBox就是遮罩
	function zhezhao1(kuai,zheBox){
		for(let i=0;i<kuai.length;i++){
			kuai[i].onmouseover=function(){
				zheBox[i].style.display="block";
			}
			kuai[i].onmouseout=function(){
				zheBox[i].style.display="none";
			}

		}
	}
	// 层级轮播
	// pic 轮播图 字符串的选择器
	// bigbannerBox 通屏的banner盒子   字符串的选择器
	// lis  轮播点  字符串的选择器
	// colorArr 通屏banner盒子的所有颜色（数组【“red”】） 
	// tuactiveZ 当前显示的轮播图的层级 高于其他轮播图
	// liactivebgColor 轮播点的颜色
	function cjlunbo(pic,bigbannerBox,lis,colorArr,huadong,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor){
		const tu=$(pic);
		const banner=$(bigbannerBox)[0];
		const li=$(lis);
		const color=colorArr;
		// const bannerBox=$(bannerbox)[0];
		const huadongkuai=$(huadong);
		tu[0].style.zIndex=tuactiveZ;//图片比较大的层级
		li[0].style.backgroundColor=liactivebgColor;//起作用的颜色
		banner.style.background=color[0];
		var num=0;
		var t=setInterval(move,lunboTime);
		banner.onmouseover=function(){
			clearInterval(t);
			for(let i=0;i<huadongkuai.length;i++){
				huadongkuai[i].style.display="block";
				huadongkuai[i].onmouseover=function(){
					huadongkuai[i].style.background="rgba(0,0,0,.6)";
				}
				huadongkuai[i].onmouseout=function(){
					huadongkuai[i].style.background="rgba(0,0,0,0.1)";
				}
			}

		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
			
			for(let i=0;i<huadongkuai.length;i++){
				huadongkuai[i].style.display="none";
			}
		}

		for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
				for(let i=0;i<tu.length;i++){
					tu[i].style.zIndex=tuZ;//初始的层级
						li[i].style.backgroundColor=lisColor;//轮播点初始的背景颜色

				}
				tu[j].style.zIndex=tuactiveZ;
				li[j].style.backgroundColor=liactivebgColor;
				banner.style.background=color[j];
				num=j;
			}
		}
		
		function move(){
			num++;
			if(num>tu.length){
				num=0;
			}
			for(let i=0;i<tu.length;i++){
				tu[i].style.zIndex=tuZ;
				li[i].style.backgroundColor=lisColor;


			}

			tu[num].style.zIndex=tuactiveZ;
			li[num].style.backgroundColor=liactivebgColor;
			banner.style.background=color[num];

		}
	}
	// 获取scrollTop前的对象
		function scrollobj(){
			let body=document.body;
			let html=document.documentElement;
			body.scrollTop=1;
			html.scrollTop=1;
			let obj;
			if(body.scrollTop==0){
				obj=html;
			}else{
				obj=body;
			}
			return obj;
		}

		// one one(obj,type,fn)
		// 事件执行一次
		// obj 对象 type 事件类型 fn 对象要做的事情
		function one(obj,type,fn){
				// 添加第一个type类型事件 执行函数fn
				obj.addEventListener(type,fn,false);
				// obj.addEventListener(type,function(){
				// 	obj.removeEventListener(type,fn,false);
				// },false);//添加一个事件清除
				// 添加第二个type类型事件 执行函数clear
				obj.addEventListener(type,clear,false);
				function clear(){
					// 清除type类型中fn的处理程序
					obj.removeEventListener(type,fn,false);
					// 清除type类型中clear的处理程序
					obj.removeEventListener(type,clear,false);
				}

		}

		// 拖拽
		// tuozhuai(box)
		// box 要求要拖拽的对象必须绝对定位
	function tuozhai(box){
			box.addEventListener("mousedown",down,false);
			let shubiaox;
			let shubiaoy;
			let boxx;
			let boxy;
			function down(e){
				// 当鼠标按下的时候要记录鼠标距离窗口的距离。
				shubiaox=e.clientX;//鼠标的位置
				shubiaoy=e.clientY;
				boxx=box.offsetLeft;
				boxy=box.offsetTop;
				window.addEventListener("mousemove",move,false);
				window.addEventListener("mouseup",up,false);
			}
			
			function move(e){
				let mx=e.clientX;//新的鼠标x值
				let my=e.clientY;
				let chax=mx-shubiaox;
				let chay=my-shubiaoy;
				let lefts=boxx+chax;
				let tops=boxy+chay;
				const cw=document.documentElement.clientWidth;
				const ch=document.documentElement.clientHeight;
				if(lefts<0){
					lefts=0;
				}
				if(tops<0){
					tops=0;
				}
				if(lefts>cw-box.offsetWidth){
					lefts=cw-box.offsetWidth;
				}
				if(tops>ch-box.offsetHeight){
					tops=ch-box.offsetHeight;
				}
				// if(){

				// }
				box.style.left=lefts+"px";//定位的left跟top
				box.style.top=tops+"px";
			}
			function up(){
				window.removeEventListener("mousemove",move,false);
				window.removeEventListener("mouseup",up,false);
			}

	}
		