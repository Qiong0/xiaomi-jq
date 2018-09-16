/*
* @Author: Lenovo
* @Date:   2018-09-16 09:27:57
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-16 10:18:46
*/
window.onload=function(){
	let li= document.querySelectorAll(".select ul li")[1];
	let son=document.querySelector(".select ul li .son");
	let a=document.querySelectorAll(".select ul li .son .box a");
	let list=document.querySelectorAll(".content .box  ")
	console.log(li,son,a,list);

	li.onclick=function(){
		son.style.display="block";
	}
	son.onmouseleave=function(){
		son.style.display="none";
	}

	list[0].style.display="block";
	for(let i=0;i<a.length;i++){
		a[i].onmouseenter=function(){
		for(let j=0;j<list.length;j++){
			list[j].style.display="none";
		}
			list[i].style.display="block";
		}
	}

}