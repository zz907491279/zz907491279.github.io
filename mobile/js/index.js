/**
 * Created by 柚子好像酸 on 2017/4/21.
 */
$(function(){
    const cityjt=$(".headcon .topcity")[0];
    const citycon1=$(".headcon #divdishi")[0];
    const citycon2=$(".headcon #DivCity")[0];
    const fhsf=$(".headcon #divdishi .blue")[0];
    var flag=true;
    cityjt.onclick=function () {
        citycon1.style.display="block";
        citycon2.style.display="none";
    }
    fhsf.onclick=function () {
        citycon1.style.display="none";
        citycon2.style.display="block";
    }
   document.addEventListener("click",function () {
        citycon1.style.display="none";
       citycon2.style.display="none";
    },true)


    //    banner轮播
    const lbImg=$(".bannerbox .bannerImg li");
    const lbd=$(".bannerbox .lunbodian li");
    const leftbtn=$(".bannerbox .lbpre")[0];
    const rightbtn=$(".bannerbox .lbnext")[0];
    const bannerBox=$(".banner")[0];
    var flag=true;
    var num=0;
    var z=5;
    var t=setInterval(move,3000);
    function move() {
        lbImg[num].classList.add("leftOut");
        lbd[num].classList.remove("active");
        num++;
        if (num == lbImg.length) {
            num = 0;
        }
        lbd[num].classList.add("active");
        lbImg[num].classList.add("leftIn");
        lbImg[num].style.zIndex = z++;
    }
    lbd.forEach(function (li,index) {
        li.onclick=function () {
            if(index==num){
                return;
            }
            if(index<num){
                lbImg[num].classList.add("rightOut");
                lbImg[index].classList.add("rightIn");
            }else if(index>num){
                lbImg[num].classList.add("leftOut");
                lbImg[index].classList.add("leftIn");
            }
            lbd[num].classList.remove("active");
            lbd[index].classList.add("active");
            lbImg[index].style.zIndex=z++;
            num=index;

        }
    })
    lbImg.forEach(function (img) {
        img.addEventListener("animationend",function () {
            img.className="";
            flag=true;
        })
    })


    bannerBox.onmouseover=function () {
        clearInterval(t);
    }
    bannerBox.onmouseout=function () {
        t=setInterval(move,3000);
    }
    leftbtn.onclick=function () {

        if(flag){
            flag=false;
            move();
        }


    }
    rightbtn.onclick=function () {
        if(flag){
            flag=false;
            lbImg[num].classList.add("rightOut");
            lbd[num].classList.remove("active");
            num--;
            if(num==-1){
                num=lbImg.length-1;
            }
            lbImg[num].classList.add("rightIn");
            lbImg[num].style.zIndex=z++;
            lbd[num].classList.add("active");
        }


    }

//    图片移动
    const moveImg=$(".indexbox img.indeximg");
    const moveImg1=$(".indexbox2 img.indeximg");
    Array.from(moveImg).forEach(function (img,index) {
        img.onmouseover=function () {
            // moveImg.style.right=10+"px";
            animate(img,{right:10},200);
        }

        img.onmouseout=function () {
            // moveImg.style.right=10+"px";
            animate(img,{right:0},200);
        }
    })
    Array.from(moveImg1).forEach(function (img,index) {
        img.onmouseover=function () {
            // moveImg.style.right=10+"px";
            animate(img,{right:10},200);
        }

        img.onmouseout=function () {
            // moveImg.style.right=10+"px";
            animate(img,{right:0},200);
        }
    })

//    在线客服
    const kf1=$(".cjwt")[0];
    const kf2=$(".zxzx")[0];
    const kf3=$(".tsjy")[0];
    kf1.onmouseover=function () {
        animate(kf1,{left:-84},300);
    }
    kf1.onmouseout=function () {
        animate(kf1,{left:-20},300);
    }
    kf2.onmouseover=function () {
        animate(kf2,{left:-84},300);
    }
    kf2.onmouseout=function () {
        animate(kf2,{left:-20},300);
    }
    kf3.onmouseover=function () {
        animate(kf3,{left:-84},300);
    }
    kf3.onmouseout=function () {
        animate(kf3,{left:-20},300);
    }

//    促销轮播
//    tulist,btnzuo,btnyou,tubox,num
    jiedian(".yhgundong",".yhcx .yhpre",".yhcx .yhnext",".yhcx .indexbox",1);
//    公告轮播
    jiedian1(".indexgg ul",".indexgg .left",".indexgg .right",".indexgg li",1);
    function jiedian1(tulist,btnzuo,btnyou,tubox,num){
        // const box=$(".box")[0];
        // let boxchildlen=box.children.length;

        const zybox=$(tulist)[0];//放li 的ul
        let zyboxclen=zybox.children.length;
        const leftbtn=$(btnzuo)[0];
        const rightbtn=$(btnyou)[0];
        const zuoyouw=parseInt(window.getComputedStyle(document.querySelector(tubox),null).width);
        let flag=true;
        let n=num;
        var t=setInterval(move,3000)
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
                zybox.style.marginLeft=-zuoyouw;
                for(let i=0;i<n;i++){
                    let first1=zybox.children[0];
                    zybox.appendChild(first1);

                }
                zybox.style.marginLeft=0;
                flag=true;
                // animate(zybox,{marginLeft:-zuoyouw},500,function(){
                //     for(let i=0;i<n;i++){
                //         let first1=zybox.children[0];
                //         zybox.appendChild(first1);
                //
                //     }
                //     zybox.style.marginLeft=0;
                //     flag=true;
                //
                // });
            }else if(type=="r"){
                for(let i=0;i<n;i++){
                    let first1=zybox.children[0];
                    let last1=zybox.children[zyboxclen-1];
                    zybox.insertBefore(last1,first1);//每一次循环让最后一个插到第一个
                    zybox.style.marginLeft=-zuoyouw+"px";//要把盒子原来的块显示  让他开始移动
                }
                zybox.style.marginLeft=0;
                flag=true;
                // animate(zybox,{marginLeft:0},500,function(){
                //     flag=true;
                // });
            }


        }
        leftbtn.onmouseover=function(){
            clearInterval(t);
        }
        leftbtn.onmouseout=function(){
            t=setInterval(move,3000);
        }
        zybox.onmouseover=function(){
            clearInterval(t);
        }
        zybox.onmouseout=function(){
            t=setInterval(move,3000);
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
            t=setInterval(move,3000);
        }
        leftbtn.onclick=function(){
            if(flag=true){
                move("r");
            }
        }
    }

})