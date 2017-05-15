/**
 * Created by 柚子好像酸 on 2017/5/2.
 */
//导航的点击效果
const navli=$(".daohang li a");
navli.onclick=function () {
    navli.classList.add("active");
}
//banner轮播
// tmcjlb(lbtu,bannerBox,leftbtn,rightbtn,lbd)
tmcjlb(".banner img",".banner",".pre",".next",".lbd li");
