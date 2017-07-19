/**
 * Created by 柚子好像酸 on 2017/4/18.
 */
$(function(){
    //banner
    cjlunbo(".banner .pannels .tab-pannel",".banner",".banner .lunbodian .lblist li",".banner .btn-pre",".banner .btn-next",2,"#e5004f",2500,1,"#211616");
//    banner 选项卡
    const btn=$(".top-menu .menu-cate .menu-cate-all dl");
    const con=$(".top-menu .menu-cate .menu-cate-all dl dd");
    console.log(con);
    xuanxiangka(btn,con);

//    banner 下方选项卡
    const btn1=$(".brand_contentRec .brand_content .brand_content_hd li");
    const con1=$(".brand_contentRec .brand_content .brand_pannels .tmnr");
    xuanxiangka1(btn1,con1);

//    商场同款选项卡
    const btn2=$(".sctk .sctk_content .tk_items .tk_nav .tk_nav_list li");
    const con2=$(".sctk .sctk_content .tk_items .tknrzs .remen");
   xuanxiangka2(btn2,con2);
//    楼层跳转
    const db=$("#hdtop");
    console.log(db);
    lctz(".floor_right_nav .floor_nav",".floor_right_nav .floor_nav a",".floor_item",".floor_right_nav .floor_nav .Y_floor_db","#hdtop");

    //框
    const borderBox=$(".border_animation");
    console.log(borderBox);
    for(let i=0;i<borderBox.length;i++){
        borderBox[i].onmouseover=function () {
            borderBox[i].children[0].style.width="100%";
            borderBox[i].children[1].style.height="100%";
            borderBox[i].children[2].style.width="100%";
            borderBox[i].children[3].style.height="100%";
        }
        borderBox[i].onmouseout=function () {
            borderBox[i].children[0].style.width=0;
            borderBox[i].children[1].style.height=0;
            borderBox[i].children[2].style.width=0;
            borderBox[i].children[3].style.height=0;
        }
    }

//    时尚名品轮播
//     zylunbo(pic,bannerbox,leftbtn,rightbtn,lunbodian,activeColor,chushiColor)
    zylunbo(".floor_silde .floor_banner_silde .mp_banner_pannels a",".floor_silde .floor_banner_silde",".floor_silde .floor_banner_silde .menu.mp_pre",".floor_silde .floor_banner_silde .menu.mp_next",".floor_silde .floor_banner_silde .mplbd li","0 -13px","0 1px");
//    运动户外
    zylunbo(".floor_silde .floor_banner_silde1 .mp_banner_ydhw a",".floor_silde .floor_banner_silde1",".floor_silde .floor_banner_silde1 .menu.mp_pre1",".floor_silde .floor_banner_silde1 .menu.mp_next1",".floor_silde .floor_banner_silde1 .mplbd1 li","0 -13px","0 1px");
//    品牌轮播
    const brands=$(".floor_nav .floor_brand_mp .scroller .mp_brands");
    const brandsBox=$(".floor_nav .floor_brand_mp .scroller .mp_brands");

//    brand 轮播
    const brandlist=$(".floor_nav .floor_brand_mp .scroller .mp_brands");
    const zmenu=$(".floor_nav .floor_brand_mp .scroller .mpbtn.mpbtn-pre");
    const ymenu=$(".floor_nav .floor_brand_mp .scroller .mpbtn.mpbtn-next");
    console.log(ymenu);
    for(let i=0;i<brandlist.length;i++){
        zmenu[i].onclick=function () {
            brandlist[i].style.marginLeft=-170+"px";
            brandlist[i].insertBefore(brandlist[i].lastElementChild,brandlist[i].firstElementChild);
            animate(brandlist[i],{marginLeft:0},500);
        }
        ymenu[i].onclick=function () {
            animate(brandlist[i],{marginLeft:-170},500,function(){

                brandlist[i].appendChild(brandlist[i].firstElementChild);
                brandlist[i].style.marginLeft=0;
            });
        }

    }


})