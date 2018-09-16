/*
* @Author: Lenovo
* @Date:   2018-09-03 15:42:32
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-15 11:59:55
*/

$(function(){

	//轮播图
	let imgbox=$(".banner .imgs img");
	let btns=$(".banner .dots .box");
	let leftbtn=$(".banner .leftbtn");
	let rightbtn=$(".banner .rightbtn");
	
	// console.log(imgbox);

	imgbox.first().css("z-index",10);
	btns.eq(0).addClass("active");

	let now=0;
	let t=setInterval(move, 2000);
	function move(){
		now++;
		if(now==imgbox.length){
			now=0;
		}
		imgbox.css("z-index",5).eq(now).css("z-index",10);
		btns.removeClass("active").eq(now).addClass('active');

	}


    let bannerbox=$(".banner .container .bannerbox");
	$(".banner .container .bannerbox").mouseenter(function(){
		clearInterval(t);
	})
	$(".banner .container .bannerbox").mouseleave(function(){
		t=setInterval(move, 2000);
	})
	// console.log($(".banner .container .bannerbox"));

	leftbtn.on("click",function(){
		now--;
		if(now<0){
			now=imgbox.length-1;
		}
		imgbox.css("z-index",5).eq(now).css("z-index",10);
		btns.removeClass("active").eq(now).addClass('active');
	})

	rightbtn.on("click",function(){
		now++;
		if(now>imgbox.length-1){
			now=0;
		}
		imgbox.css("z-index",5).eq(now).css("z-index",10);
		btns.removeClass("active").eq(now).addClass('active');
	})


	btns.on("click",function(){
		let index=$(this).index();
		imgbox.css("z-index",5).eq(index).css("z-index",10);
		btns.removeClass("active").eq(index).addClass("active");
	})

	//轮播图侧导航
	let lis=$(".banner .list  a");
	let son=$(".banner .list .son");
	// console.log(lis,son);
	lis.mouseenter(function(){
		$(".banner .list .son").css("display","none");
		$(this).children(".banner .list .son").css("display","flex");
	})
	
	lis.mouseleave(function(){
		$(this).children(".banner .list .son").css("display","none");
	})

	//家电 
	
	let parent=$(".home ul li");
	let son1=$(".home .bottom .right1");
	// console.log(parent,son1);
	parent.eq(0).addClass("homeactive");
	parent.mouseenter(function(){
		let i=$(this).index();
		son1.css("display","none").eq(i).css("display","flex");
		parent.removeClass("homeactive").eq(i).addClass('homeactive');
		
	})
	parent.triggerHandler("mouseenter");


	//购物车

	$(".top .pic").mouseenter(function(){
		$(".top .pic .cartbox").clearQueue().slideDown();
	});

	$(".top .pic").mouseleave(function(){
		$(".top .pic .cartbox").clearQueue().slideUp();
	});



	//小米闪购


	let btn1=$(".shop .one .pic1 .left");
	let btn2=$(".shop .one .pic1 .right");
    let lists=$(".shop .box1 ul");
    // console.log(btn1,btn2,lists);
    let widths=lists.width()/2;
    let times=0;
    btn2.click(function () {
        times++;
        if (times===2){
            times=1;
        }
        lists.css("transform",`translate(${(-widths*times)}px)`);
    })
    btn1.click(function () {
        times--;
        if (times===-1){
            times=0;
        }
        lists.css("transform",`translate(${(-widths*times)}px)`)
    })


    //为你推荐

    let leftbtn1=$(".recommend .one .pic1 .left");
	let rightbtn1=$(".recommend .one .pic1 .right");
    let list=$(".recommend .commentbox .two");
    // console.log(leftbtn1,rightbtn1,list);
    let width1=list.width()/4;
    let time=0;
    rightbtn1.click(function () {
        time++;
        if (time===4){
            time=3;
        }
        list.css("transform",`translate(${(-width1*time)}px)`);
    })
    leftbtn1.click(function () {
        time--;
        if (time===-1){
            time=0;
        }
        list.css("transform",`translate(${(-width1*time)}px)`)
    })



	//内容开始

	//封装下方轮播效果函数
    function banner(imgs,dots,leftBtn,rightBtn,widths,active) {
        let now=0;
        let next=0;
        //设置默认值
        imgs.eq(0).css("left","0");
        dots.eq(0).addClass(active);

        //定义开关:控制快速点击时图片快速轮播的现象
        //默认开关是打开的，可以点击左右箭头 flag=true
        let flag=true;
        function move() {
            next++;
            if(next==imgs.length){
                next=0;
            }
            //确保下一张图永远在最右侧
            imgs.eq(next).css("left",`$(widths)px`);
            imgs.eq(now).animate({left:-widths});
            imgs.eq(next).animate({left:0},function(){
                flag=true;
            });
            dots.eq(now).removeClass(active);
            dots.eq(next).addClass(active);
            now=next;
        }
        // 点击左箭头
        function moveL(){
            next--;
            if(next<0){
                next=imgs.length-1;
            }
            imgs.eq(next).css("left",`$(-widths)px`);
            imgs.eq(now).animate({left:widths});
            imgs.eq(next).animate({left:0},function(){
                flag=true;
            });
            dots.eq(now).removeClass(active);
            dots.eq(next).addClass(active);
            now=next;
        }
        leftBtn.click(function(){
            //判断开关是否开启
            //如果开关开启，则!flag=flase,不执行return，执行flag=flase和move，move执行完flag=true
            //开关关闭的时候，不要点击
            //flag=false !flge=true
            if(!flag){
                return;
            }
            if (next==0) {
                return;
            }
            flag=false;
            moveL();
        })
        rightBtn.click(function(){
            if(!flag){
                return;
            }
            if (next==imgs.length-1) {
                return;
            }
            flag=false;
            move();
        })
        //鼠标单击轮播点
            dots.click(function(){
                let i=$(this).index();
                if (next==i){
                    return;
                }
                if (next>i){
                    imgs.eq(i).css("left",`${-widths}px`);
                    imgs.eq(now).animate({left:widths});
                    imgs.eq(i).animate({left:0});
                    dots.eq(now).removeClass(active);
                    dots.eq(i).addClass(active);
                }else  if (next<i){
                    imgs.eq(i).css("left",`${widths}px`);
                    imgs.eq(now).animate({left:-widths});
                    imgs.eq(i).animate({left:0});
                    dots.eq(now).removeClass(active);
                    dots.eq(i).addClass(active);
                }
                now=next=i;
            })
    }



let box=$(".border .innerBox1");
let leftBtn=$(".border .tip1");
let rightBtn=$(".border .tip2");
let dot=$(".border .dot .box");
let widthnr1=box.width();
banner(box,dot,leftBtn,rightBtn,widthnr1,"boxdot");


let box2=$(".border2 .innerBox1");
let leftBtn2=$(".border2  .tip1");
let rightBtn2=$(".border2  .tip2");
let dot2=$(".border2  .dot .box");
let widthnr2=box2.width();
banner(box2,dot2,leftBtn2,rightBtn2,widthnr2,"boxdot");


let box3=$(".border3 .innerBox1");
let leftBtn3=$(".border3  .tip1");
let rightBtn3=$(".border3  .tip2");
let dot3=$(".border3  .dot .box");
let width3=box3.width();
banner(box3,dot3,leftBtn3,rightBtn3,width3,"boxdot");

let box4=$(".border4 .innerBox1");
let leftBtn4=$(".border4  .tip1");
let rightBtn4=$(".border4  .tip2");
let dot4=$(".border4  .dot .box");
let width4=box4.width();
banner(box4,dot4,leftBtn4,rightBtn4,width4,"boxdot");


//返回顶部
let back=$(".backbottom1");
back.click(function(){
		animate((document.body),{scrollTop:0});
		animate((document.documentElement),{scrollTop:0});
	
	})

//头部选项卡

let headerlis1=$(".header li");
let headerson1=$(".header li .son1")
console.log(headerlis1,headerson1);
headerlis1.mouseenter(function(){
	let index=$(this).index();
	headerson1.css("display","none").eq(index).css("display","block");
})
headerlis1.mouseleave(function(){
	let index=$(this).index();
	headerson1.css("display","none").eq(index).css("display","none");
})

//倒计时
 timemove();
    setInterval(timemove,1000)
    function timemove() {
        let newtime = new Date()
        let liss = $(".shop .last .box")
        let sa = newtime.getFullYear();
        let sb = newtime.getDate();
        let sc = newtime.getMonth();
        if (newtime.getHours() >= 18) {
            sb += 1;
        }
        let nexttime = new Date(sa, sc, sb, 18);
        let cha = Math.floor(nexttime.getTime() / 1000) - Math.floor(newtime.getTime() / 1000)
        let newh = 0;
        let newf = 0;
        let newm = 0;
        let a = [];
        hour = Math.floor(cha / (60 * 60));
        fen = Math.floor(cha % (60 * 60) / 60);
        miao = Math.floor(cha % 60);
        if (Math.floor(hour / 10) == 0) {
            newh = "0" + hour;
        } else {
            newh = hour
        }
        a.push(newh)
        if (Math.floor(fen / 10) == 0) {
            newf = "0" + fen;
        } else {
            newf = fen
        }
        a.push(newf)

        if (Math.floor(miao / 10) == 0) {
            newm = "0" + miao;
        } else {
            newm = miao
        }
        a.push(newm)
        for (let i = 0; i < liss.length; i++) {
            liss[i].innerText = a[i]
        }
    }



})


























// window.onload=function(){
// 	//banner图
// 	let imgs=document.querySelectorAll(".banner .imgs img");
// 	let dots=document.querySelectorAll(".banner .dots .box");
// 	let banner=document.querySelectorAll(".banner")[0];
// 	let leftbtn=document.querySelector(".leftbtn");
// 	let rightbtn=document.querySelector(".rightbtn");
// 	let widths=parseInt(getComputedStyle(imgs[0],null).width);
// 	// console.log(imgs,dots,banner,leftbtn,rightbtn,widths);

// 	imgs[0].style.left=0;
// 	dots[0].classList.add("active");
// 	let now=0;
// 	let next=0;
// 	let flag=true;

// 	//自动轮播
// 	let t=setInterval(move, 2000);
// 	function move(){
// 		next++;
// 		if(next==imgs.length){
// 			next=0;
// 		}
// 		imgs[next].style.left=widths+"px";
// 		animate(imgs[now],{left:-widths});
// 		animate(imgs[next],{left:0},function(){
// 			flag=true;
// 		});

// 		dots[now].classList.remove("active");
// 		dots[next].classList.add("active");
// 		now=next;
// 	}
	
	
// 	function moveleft(){
// 		next--;
// 		if(next<0){
// 			next=imgs.length-1;
// 		}
// 		imgs[next].style.left=-widths+"px";
// 		animate(imgs[now],{left:widths});
// 		animate(imgs[next],{left:0},function(){
// 			flag=true;
// 		});
// 		dots[now].classList.remove("active");
// 		dots[next].classList.add("active");
// 		now=next;
// 	}

// 	leftbtn.onclick=function(){
// 		if(!flag){
// 			return;
// 		}
// 		flag=false;
// 		moveleft();
// 	}
// 	rightbtn.onclick=function(){
// 		if(!flag){
// 			return;
// 		}
// 		flag=false;
// 		move();
// 	}
// 	banner.onmouseenter=function(){
// 		clearInterval(t);
// 	}
// 	banner.onmouseleave=function(){
// 		t=setInterval(move, 2000);
// 	}


// 	for(let i=0;i<dots.length;i++){
// 		dots[i].onclick=function(){
// 			for(let j=0;j<dots.length;j++){
// 				imgs[j].style.left=widths+"px";
// 				dots[j].classList.remove("active");
// 			}
// 			imgs[i].style.left=0;
// 			dots[i].classList.add("active");
// 			next=i;
// 			now=i;

// 		}

// 	}

// 	// window.onfocus=function(){
// 	// 	t=setInterval(move,2000);
// 	// }
// 	// window.onblur=function(){
// 	// 	clearInterval(t);
// 	// }

// //内容轮播
	
// function contentbanner(imgs,dots,leftBtn,rightBtn,widths,active){

// 	let now1=0;
// 	let next1=0;
// 	let flag1=true;
	
// 	// console.log(box,leftBtn,rightBtn,dot,width1);
// 	imgs[0].style.left=0;
// 	dots[0].classList.add(active);

//     function moveL() {
//         next1++;
//         if (next1==imgs.length){
//             next1=0;
//         }
//             imgs[next1].style.left=widths+"px";
//             animate(imgs[next1],{left:0},function(){
//             	flag1=true;
//             });
//             animate(imgs[now1],{left:-widths});
//             dots[next1].classList.add(active);
//             dots[now1].classList.remove(active);
//             now1=next1;
            
//     }
//     function moveR() {
//         next1--;
//         if (next1<0){
//             next1=imgs.length-1;
//         }
//         imgs[next1].style.left=-widths+"px";
//         animate(imgs[next1],{left:0},function(){
//         	flag1=true;
//         });
//         animate(imgs[now1],{left:widths});
//         dots[next1].classList.add(active);
//         dots[now1].classList.remove(active);
//         now1=next1;
//     }
//     leftBtn.onclick=function () {
//     	if(!flag1){
//     		return;
//     	}
//     	if(next1==0){
//     		return;
//     	}
//     	flag1=false;
//         moveR();
//     };
//     rightBtn.onclick=function () {
//     	if(!flag1){
//     		return;
//     	}
//     	if(next1==dots.length-1){
//     		return;
//     	}
//     	flag1=false;
//         moveL();
//     };

//     //鼠标点击
    
//     for(let i=0;i<dots.length;i++){
//     	dots[i].onclick=function(){
//     		if(next1==i){
//     			return;
//     		}else if(next1>i){
//     			imgs[i].style.left=`${-widths}px`;
//     			animate(imgs[now1],{left:widths});
//     			animate(imgs[i],{left:0});
//     			dots[now1].classList.remove(active);
//     			dots[i].classList.add(active)
//     		}else if(next1<i){
//     			imgs[i].style.left=`${widths}px`;
//     			animate(imgs[i],{left:0});
//     			animate(imgs[now1],{left:-widths});
//     			dots[now1].classList.remove(active);
//     			dots[i].classList.add(active);
//     		}
//     		now1=i;
//     		next1=i;
//     	}
//     }

// }

// let box=document.querySelectorAll(".border .innerBox1");
// let leftBtn=document.querySelectorAll(".border .tip1")[0];
// let rightBtn=document.querySelectorAll(".border .tip2")[0];
// let dot=document.querySelectorAll(".border .dot .box");
// let width1=parseInt(getComputedStyle(box[0],null).width);
// contentbanner(box,dot,leftBtn,rightBtn,width1,"boxdot");



// let box2=document.querySelectorAll(".border2 .innerBox1");
// let leftBtn2=document.querySelectorAll(".border2  .tip1")[0];
// let rightBtn2=document.querySelectorAll(".border2  .tip2")[0];
// let dot2=document.querySelectorAll(".border2  .dot .box");
// let width2=parseInt(getComputedStyle(box2[0],null).width);
// contentbanner(box2,dot2,leftBtn2,rightBtn2,width2,"boxdot");


// let box3=document.querySelectorAll(".border3 .innerBox1");
// let leftBtn3=document.querySelectorAll(".border3  .tip1")[0];
// let rightBtn3=document.querySelectorAll(".border3  .tip2")[0];
// let dot3=document.querySelectorAll(".border3  .dot .box");
// let width3=parseInt(getComputedStyle(box2[0],null).width);
// contentbanner(box3,dot3,leftBtn3,rightBtn3,width3,"boxdot");

// let box4=document.querySelectorAll(".border4 .innerBox1");
// let leftBtn4=document.querySelectorAll(".border4  .tip1")[0];
// let rightBtn4=document.querySelectorAll(".border4  .tip2")[0];
// let dot4=document.querySelectorAll(".border4  .dot .box");
// let width4=parseInt(getComputedStyle(box2[0],null).width);
// contentbanner(box4,dot4,leftBtn4,rightBtn4,width4,"boxdot");




// //为你推荐

// let out=document.querySelector(".recommend .two");
// let btnleft=document.querySelector(".recommend .left");
// let btnright=document.querySelector(".recommend .right");
// let wh=parseInt(getComputedStyle(out,null).width)/4;
// let times=0;
// // console.log(out,btnleft,btnright,wh);
// btnright.onclick=function(){
// 	times++;
// 	if(times==4){
// 		times=3;
// 	}
// 	out.style.transform=`translate(${(-wh*times)}px)`;

// }
// btnleft.onclick=function(){
// 	times--;
// 	if(times==-1){
// 		times=0;
// 	}
// 	out.style.transform=`translate(${(-wh*times)}px)`;

// }


// //小米闪购

// let out1=document.querySelector(".shop ul");
// let btnleft1=document.querySelector(".shop .left");
// let btnright1=document.querySelector(".shop .right");
// let wh1=parseInt(getComputedStyle(out1,null).width)/2;
// let time=0;
// // console.log(out1,btnleft1,btnright1,wh1);
// btnright1.onclick=function(){
// 	time++;
// 	if(time==2){
// 		time=1;
// 	}
// 	out1.style.transform=`translate(${(-wh1*time)}px)`;


// }
// btnleft1.onclick=function(){
// 	time--;
// 	if(time==-1){
// 		time=0;
// 	}
// 	out1.style.transform=`translate(${(-wh1*time)}px)`;

// }


//头部购物车
 
// let head=document.querySelector(".pic");
// let change=document.querySelector(".cartbox");
// // console.log(change);
// change.style.height=0; 
// head.onmouseenter=function(){
// 	change.style.height="89px";

// }
// head.onmouseleave=function(){
// 	change.style.height=0;
// }


//banner选项卡

// let lis=document.querySelectorAll(".num");
// let son=document.querySelectorAll(".son")
// // console.log(lis,son);

// for(let i=0;i<lis.length;i++){
// 	lis[i].onmouseenter=function(){
// 		for(let j=0;j<son.length;j++){
// 			son[j].style.display="none";
// 		}
// 		son[i].style.display="flex";
// 	}
// 	lis[i].onmouseleave=function(){
// 		son[i].style.display="none";
// 	}
// }

//头部选项卡

// let lis1=document.querySelectorAll(".header li");
// let son1=document.querySelectorAll(".header li .son1")
// console.log(lis1,son1);


// for(let i=0;i<lis1.length;i++){
// 	lis1[i].onmouseenter=function(){
// 		for(let j=0;j<son1.length;j++){
// 			son1[j].style.display="none";
// 		}
// 		son1[i].style.display="block";
// 	}
// 	lis1[i].onmouseleave=function(){
// 		son1[i].style.display="none";
// 	}
// }


// 家电
	// let homebtn=document.querySelectorAll(".home .more li");
	// let homelist=document.querySelectorAll(".home .bottom .right1");
	// // console.log(color);
	// homebtn[0].classList.add("homeactive");
	// homelist[0].style.display="flex";

	// for(let i=0;i<homebtn.length;i++){
	// 	homebtn[i].onmouseenter=function(){
	// 		for(let j=0;j<homelist.length;j++){
	// 			homebtn[j].classList.remove("homeactive");
	// 			homelist[j].style.display="none";
	// 		}
	// 	homebtn[i].classList.add("homeactive");
	// 	homelist[i].style.display="flex";
	// 	}
	// }

//返回顶部
// let back=document.querySelector(".backbottom1");
// // console.log(back);
// back.onclick=function(){
// 		animate((document.body),{scrollTop:0});
// 		animate((document.documentElement),{scrollTop:0});
	
// 	}

// 	lis.forEach(function (value,index) {
//         value.onclick=function () {
//             animate(document.body,{scrollTop:arr[index]});
//               animate(document.documentElement,{scrollTop:arr[index]});
//         }
//     })



// }





