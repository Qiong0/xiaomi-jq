/*
* @Author: Lenovo
* @Date:   2018-09-11 14:00:36
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-11 16:27:50
*/
window.onload=function(){
	let lis=document.querySelectorAll(".foryou li");
	let uls=document.querySelectorAll(".content .text ")
	console.log(lis,uls);

	uls[0].style.display="block";

	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
		for(let j=0;j<uls.length;j++){
			uls[j].style.display="none";
		}
			uls[i].style.display="block";
		}
	}




}