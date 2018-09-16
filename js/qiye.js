/*
* @Author: Lenovo
* @Date:   2018-09-09 15:39:10
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-16 11:27:04
*/

// 服务范围

window.onload=function(){
	//返回
	let back=document.querySelector(".back .top");
	// console.log(back);
	back.onclick=function(){
		// document.body.scrollTop=0;
		// document.documentElement.scrollTop=0;
		animate((document.body),{scrollTop:0});
		animate((document.documentElement),{scrollTop:0});
	}
	let line=document.querySelector("nav .button");
	let lis=document.querySelectorAll("nav .button li");
	let list=document.querySelector("nav .button .son");
	console.log(line);

	lis[0].style.borderTop="2px solid #000";

	line.onclick=function(){
		list.style.display="block";
	}
	list.onmouseleave=function(){
		list.style.display="none";
	}

	
	// lis.onmouseenter=function(){
	// 	for(let i=0;i<lis.length;i++){
	// 		lis.style.borderTop="none";
	// 		lis[i].style.borderTop="2px solid #000";
	// 	}
	// }






}