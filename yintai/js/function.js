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
function xuanxiangka1(btn,con){
    // for 循环中把let换为var的写法 btn[i].ind=i;保证btn中的i与con中的i一致
    for(var i=0;i<btn.length;i++){
        btn[i].ind=i;
        btn[i].onmouseover=function(){
            for(let j=0;j<con.length;j++){
                con[j].style.display="none";
                btn[j].classList.remove("brand_content_active");
                btn[j].style.fontWeight="normal";
            }
            // console.log(this.ind);
            con[this.ind].style.display="block";
			btn[this.ind].style.fontWeight="bold";

			btn[this.ind].classList.add("brand_content_active");
        }
        // btn[i].onmouseout=function () {
        //     btn[this.ind].classList.remove("brand_content_active");
        // }
    }
}
function xuanxiangka2(btn,con){
    // for 循环中把let换为var的写法 btn[i].ind=i;保证btn中的i与con中的i一致
    for(var i=0;i<btn.length;i++){
        btn[i].ind=i;
        btn[i].onmouseover=function(){
            for(let j=0;j<con.length;j++){
                con[j].style.display="none";
                btn[j].classList.remove("active");
                btn[j].style.fontWeight="normal";
            }
            // console.log(this.ind);
            con[this.ind].style.display="block";
            btn[this.ind].style.fontWeight="bold";

            btn[this.ind].classList.add("active");
        }
        // btn[i].onmouseout=function () {
        //     btn[this.ind].classList.remove("brand_content_active");
        // }
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
function cjlunbo(pic,bigbannerBox,lis,huadongzuo,huadongyou,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor){
    const tu=$(pic);
    const banner=$(bigbannerBox)[0];
    const li=$(lis);
    console.log(li);
    const leftbtn=$(huadongzuo)[0];
    console.log(leftbtn);
    const rightbtn=$(huadongyou)[0];
    console.log(rightbtn);
    tu[0].style.zIndex=tuactiveZ;//图片比较大的层级
	tu[0].style.opacity=1;
    li[0].style.borderBottomColor=liactivebgColor;//起作用的颜色
	let flag=true;
    var num=0;
    var t=setInterval(move,lunboTime);
    for(let j=0;j<li.length;j++){
        li[j].onmouseover=function(){
            for(let i=0;i<tu.length;i++){
                tu[i].style.zIndex=tuZ;//初始的层级
				tu[i].style.opacity=0;
                li[i].style.borderBottomColor=lisColor;//轮播点初始的背景颜色

            }
            tu[j].style.zIndex=tuactiveZ;
            animate(tu[j],{opacity:1},500);
            li[j].style.borderBottomColor=liactivebgColor;
            // banner.style.background=color[j];
            num=j;
        }
    }

    function move(type="l"){
    	flag=false;
    	if(type=="l"){
            num++;
            if(num>tu.length-1){
                num=0;
            }
		}else if(type=="r"){
    		num--;
    		if(num<0){
    			num=tu.length-1;
			}
		}

        for(let i=0;i<tu.length;i++){
            tu[i].style.zIndex=tuZ;
            // tu[i].style.opacity=0;
            animate(tu[i],{opacity:0},500);
            li[i].style.borderBottomColor=lisColor;


        }

        tu[num].style.zIndex=tuactiveZ;
		animate(tu[num],{opacity:1},500,function () {
			flag=true;
        });
        li[num].style.borderBottomColor=liactivebgColor;

    }
    banner.onmouseover=function(){
        clearInterval(t);

    }
    banner.onmouseout=function(){
        t=setInterval(move,lunboTime);
    }
    leftbtn.onclick=function () {
    	if(flag){
            move("r");
		}

    }
    // leftbtn.onmouseover=function () {
		// clearInterval(t);
    // }
    // leftbtn.onmouseout=function(){
    //     t=setInterval(move,lunboTime);
    // }
    rightbtn.onclick=function () {
    	if(flag){
            move("l");
		}

    }
    // rightbtn.onmouseover=function () {
    //     clearInterval(t);
    // }
    // rightbtn.onmouseout=function(){
    //     t=setInterval(move,lunboTime);
    // }
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
         //楼层跳转
	function lctz(cedaohang,cdhys,neirong,cnavHead,head) {
        const floor = $(cedaohang)[0];
        const li = $(cdhys);
        const section = $(neirong);
        const li_hd = $(cnavHead)[0];
        const dingbu = $(head);
        const ch = document.documentElement.clientHeight;
        let obj = scrollobj();//获取当前浏览器
        for (let i = 0; i < li.length; i++) {
            li[i].onclick = function () {
                animate(obj, {scrollTop: section[i].offsetTop-60}, 500);
                // body的滚动条滚动的距离是楼层section距离顶部的距离
            }
        }
        li_hd.onclick = function () {
            animate(obj, {scrollTop: dingbu.offsetTop}, 500);
        }
        window.onscroll = function () {

            // 当某个楼层显示到窗口中间的时候 对应的li的背景颜色更换
            for (let i = 0; i < section.length; i++) {
                if (obj.scrollTop + ch * 0.5 >= section[i].offsetTop) {
                    for (let j = 0; j < li.length; j++) {
                        // li[i].style.backgroundImage = "block";
                        li[j].classList.remove("f_active");
                        li[j].style.background = "";
                    }
                    li[i].style.backgroundImage = "none";
                    li[i].style.background = "#e5004f";
                    li[i].classList.add("f_active");
                } else {
                    li[i].classList.remove("f_active");
                    li[i].style.background = "";
                    li[i].style.backgroundImage = "block";
                }
            }
            if(obj.scrollTop>=710){
            	floor.style.display="block";
			}else{
            	floor.style.display="none";
			}
        }
    }

		 // 隐藏导航
function gundong(cedaohang,cdhys,neirong,topnav){

	const floor=$(cedaohang)[0];
	const li=$(cdhys);
	const section=$(neirong);
	console.log(section);
	const nav=$(topnav)[0];
	const btndb=$(".db")[0];
	const head=$("header")[0];
	console.log(btndb);
	const ch=document.documentElement.clientHeight;
	let obj=scrollobj();//获取当前浏览器
	for(let i=0;i<li.length;i++){
		li[i].onclick=function(){
		animate(obj,{scrollTop:section[i].offsetTop-60},500);
		// body的滚动条滚动的距离是楼层section距离顶部的距离
		}
	}
	btndb.onclick=function(){
		animate(obj,{scrollTop:head.offsetTop},500);
	}
	let flagx=true;
	let flags=false;
	let colorArr=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#000"];
	window.onscroll=function(){
		
		// 当某个楼层显示到窗口中间的时候 对应的li的背景颜色更换
		for(let i=0;i<section.length;i++){
			if(obj.scrollTop+ch*0.5>=section[i].offsetTop){
				for(let j=0;j<li.length;j++){
					li[j].style.background="gray";
				}
				li[i].style.background=colorArr[i];
			}else{
				li[i].style.background="gray";
			}
		}
		if(obj.scrollTop>=729){
			// 设备一
		// 往下走
		// 已经收到消息
		nav.style.display="block";
			if(flagx){
				// 收到消息 关闭设备
				flagx=false;
				flags=true;
				// 开始执行
				nav.style.top=0;
				
				animate(nav,{top:0},500,function(){
					
					//已经走完
					flagx=true;//如果滚动条来回滚动 可能执行不到这块
				});
			}
			floor.style.display="block";
		}else{
			// 设备二 消息 往上走
			// 设备一打开

			if(flags){

				// alert(1);
				flagx=true;
				flags=false;
				animate(nav,{top:-50},500,function(){

					flags=true;
				});
			}
			floor.style.display="none";
		}

		
	}
	setTimeout(function(){
		animate(nav,{top:-50},500,function(){
			flags=true;
		});
	},1000)


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

	// 鼠标滚轮事件
	// mousewheel(box,shang,xia);
	// obj 鼠标滚动事件的事件源
	// 上 鼠标滚轮向上时触发的处理程序
	// 下 鼠标滚轮向下时触发的处理程序
	function mousewheel(obj,shang,xia){
		obj.addEventListener("mousewheel",scrollFn,false);
		obj.addEventListener("DOMMousewheel",scrollFn,false);
		function scrollFn(e){
			e.preventDefault();//阻止浏览器的默认行为 默认向上走或者向下走
			if(e.wheelDelta){
				// 谷歌
				if(e.wheelDelta>0){
					// 上
					shang();

				}else{
					// 下
					xia();
				}
			}else{
				// 火狐
				if(e.detail>0){
					// 下
					xia();
				}else{
					// 上
					shang();
				}
			}

		}
	}

	// 左右轮播
	function zylunbo(pic,bannerbox,leftbtn,rightbtn,lunbodian,activeweizhi,chushiweizhi){
		// 获取轮播图
		const tu=$(pic);
		console.log(tu);
		// 获取轮播图的盒子
		const img=$(bannerbox)[0];
		// 获取轮播的左按钮
		const leftbtn1=$(leftbtn)[0];
		// 获取轮播的右按钮
		const rightbtn1=$(rightbtn)[0];
		// 获取轮播图的宽度
		const imgw=parseInt(window.getComputedStyle(img,null).width);
		// 获取轮播点
		const li=$(lunbodian);
		

		// 初始化
		// 初始化轮播点的白色
		li[0].style.backgroundPosition=activeweizhi;
		// li[0].classList.add("active");
		// 定义开关
		var flag=true;
		// 把所有的图片都移到右边
		for(let i=0;i<tu.length;i++){
			tu[i].style.left=imgw+"px";
		}
		// 让第一张图片在中间显示
		tu[0].style.left=0;
		// 开始轮播
		// var t=setInterval(move,1000);
		var now=0;
		var next=0;
		// 初始化结束
		// 定义轮播函数
		function move(type="l"){
			flag=false;//当图片移动过程中让他无法点击
			if(type=="l"){
				next++;
				if(next>1){
					next=0;
				}//如果轮播图超出最后一张 让他从第一张重新开始
				tu[next].style.left=imgw+"px";//下一张图片的位置
				animate(tu[now],{left:-imgw},500);//当前图片向左移
				}else if(type=="r"){
				next--;
				if(next<0){
					next=1;
				}//如果向右移的话 当下一张图片的下标小于0时 让它从最后一张开始
				tu[next].style.left=-imgw+"px";
				animate(tu[now],{left:imgw},500);
			}
			// 轮播结束
			
			animate(tu[next],{left:0},500,function(){
				flag=true;//开关打开 可以继续点击
				li[next].style.backgroundPosition=activeweizhi;
				li[now].style.backgroundPosition=chushiweizhi;

				
				// li[next].classList.add("active");
				// li[now].classList.remove("active");
				now=next;
			});
		}
		for(let i=0;i<li.length;i++){
			li[i].onclick=function(){
				// clearInterval(t);
				if(flag){
					for(let j=0;j<tu.length;j++){
						tu[j].style.left=imgw+"px";
						li[now].style.backgroundPosition=chushiweizhi;
						
						// li[now].classList.remove("active");//要走的元素
						//让所有的li元素变为橙色
						
					}	
				}
					tu[i].style.left=0;
					li[i].style.backgroundPosition=activeweizhi;
					
					now=i;//当鼠标移开的时候 当前位置从当前获取到的i开始
					next=i;//当鼠标移走以后 for循环重新开始
					// li[next].classList.add("active");//要来的元素

			}
		
		}
		// img.onmouseover=function(){
		// 	clearInterval(t);
		// }
		// img.onmouseout=function(){
		// 	t=setInterval(move,1000);
		// }
		// leftbtn1.onmouseover=function(){
		// 	clearInterval(t);
		// }
		// leftbtn1.onmouseout=function(){
		// 	t=setInterval(move,1000);
		// }
		// rightbtn1.onmouseover=function(){
		// 	clearInterval(t);
		// }
		// rightbtn1.onmouseout=function(){
		// 	t=setInterval(move,1000);
		// }
		
		leftbtn1.onclick=function(){
			if(flag){
				move("r");
			}
			
		}
		rightbtn1.onclick=function(){
			if(flag){
				move("l");
			}
			
		}
		// window.onblur=function(){
		// 	clearInterval(t);
		// }
		// window.onfocus=function(){
		// 	t=setInterval(move,1000);
		// }//当浏览器获得焦点的时候 让他重新开始动
		
	}
// 获取元素的宽度或者高度
	// 获得obj元素的style样式（宽度、高度等）样式值
	// attr(obj,style)
	// obj 类型 DOM元素
	//  style 类型 string
	function attr(obj,style){
		return window.getComputedStyle(obj,null)[style];//传入的可能是字符串 所以用方括号
	}

	// 下拉导航
	function xialadaohang(navbtn,navxlbox){
		const item=$(navbtn);
			const ul=$(navxlbox);
			for(let i=0;i<ul.length;i++){
				let h=parseInt(attr(ul[i],"height"));
				console.log(h);
				ul[i].setAttribute("h",h);
				ul[i].style.height=0;
			}
			for(let i=0;i<item.length;i++){
				// item[i].onmouseover=function(){
				// 	let ul=item[i].children[1];
				// 	if(item[i].children[1]){
				// 		animate(ul,{height:ul.getAttribute("h")},500);
				// 	}
				// }
				// item[i].onmouseout=function(){
				// 	let ul=item[i].children[1];
				// 	if(item[i].children[1]){
				// 		animate(ul,{height:0},500);
				// 	}
				// }
				hover(item[i],function(){
					let ul=item[i].children[1];
					if(item[i].children[1]){
						animate(ul,{height:ul.getAttribute("h")},500);
					}
				},function(){
					let ul=item[i].children[1];
					if(item[i].children[1]){
						animate(ul,{height:0},500);
					}
				});
			}
		
	}

	// 节点轮播
	function jiedian(tulist,btnzuo,btnyou,tubox,num){
			// const box=$(".box")[0];
			// let boxchildlen=box.children.length;

			const zybox=$(tulist)[0];//放li 的ul
			let zyboxclen=zybox.children.length;
			const leftbtn=$(btnzuo)[0];
			const rightbtn=$(btnyou)[0];
			const zuoyouw=parseInt(window.getComputedStyle(document.querySelector(tubox),null).width);
			let flag=true;
			let n=num;
			var t=setInterval(move,2000)
				// 从下往上轮播
				// let last=box.children[boxchildlen-1];
				// let first=box.children[0];
				// last.style.height=0;
				// box.insertBefore(last,first);
				// animate(last,{height:200},500);
				 // let last=box.children[boxchildlen-1];
				 // 从上往下
				// let last=box.children[boxchildlen-1];
				// let first=box.children[0];
				// animate(first,{height:0},500,function(){
				// 	box.appendChild(first);
				// 	first.style.height=200+"px";
				// });
			
			// margin-top 从上到下
			
		

			function move(type="l"){
				// let first=box.children[0];
				// animate(box,{marginTop:-200},500,function(){

				// 	box.appendChild(first);
				// 	box.style.marginTop=0;
				// });
			flag=false;
			if(type=="l"){
				
				animate(zybox,{marginLeft:-zuoyouw},500,function(){
					for(let i=0;i<n;i++){
						let first1=zybox.children[0];
						zybox.appendChild(first1);
						
					}
					zybox.style.marginLeft=0;
					flag=true;
					
					});
			}else if(type=="r"){
					for(let i=0;i<n;i++){
						let first1=zybox.children[0];
						let last1=zybox.children[zyboxclen-1];
						zybox.insertBefore(last1,first1);//每一次循环让最后一个插到第一个
						zybox.style.marginLeft=-zuoyouw+"px";//要把盒子原来的块显示  让他开始移动
					}
					animate(zybox,{marginLeft:0},500,function(){
						flag=true;
					});
			}
				

			}
			leftbtn.onmouseover=function(){
				clearInterval(t);
			}
			leftbtn.onmouseout=function(){
				t=setInterval(move,2000);
			}
			zybox.onmouseover=function(){
				clearInterval(t);
			}
			zybox.onmouseout=function(){
				t=setInterval(move,2000);
			}
			rightbtn.onclick=function(){
					if(flag=true){
						move("l");
					}
					
			}
			rightbtn.onmouseover=function(){
				clearInterval(t);
			}
			rightbtn.onmouseout=function(){
				t=setInterval(move,2000);
			}
			leftbtn.onclick=function(){
				if(flag=true){
					move("r");
				}
			}
	}
			