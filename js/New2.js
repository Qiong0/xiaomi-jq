/*
* @Author: Lenovo
* @Date:   2018-09-10 15:20:37
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-16 11:49:51
*/
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
}