/*
* @Author: Lenovo
* @Date:   2018-09-09 18:10:09
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-09 19:36:27
*/
window.onload=function(){
	let li=document.querySelectorAll(".head li");
	let list=document.querySelectorAll(".nav3box ul");
	let box=document.querySelector(".nav3box");

	console.log(li,list);
	list[0].style.display="block";

// 	for(let i=0;i<li.length;i++){
// 		li[i].onclick=function(){
// 		for(let j=0;j<list.length;j++){
// 			list[j].style.display="none";
// 		}
// 		list[i].style.dispaly="block";
// 	}
// }
	li[0].onclick=function(){
		list[0].style.display="block";
		list[1].style.display="none";
		list[2].style.display="none";
		list[3].style.display="none";
		box.style.height="450px";

	}
	li[1].onclick=function(){
		list[1].style.display="block";
		list[0].style.display="none";
		list[2].style.display="none";
		list[3].style.display="none";
		box.style.height="295px";

	}
	li[2].onclick=function(){
		list[2].style.display="block";
		list[0].style.display="none";
		list[1].style.display="none";
		list[3].style.display="none";
		box.style.height="295px";

	}
	li[3].onclick=function(){
		list[3].style.display="block";
		list[0].style.display="none";
		list[2].style.display="none";
		list[1].style.display="none";
		box.style.height="295px";

	}


}



