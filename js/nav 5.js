/*
* @Author: Lenovo
* @Date:   2018-09-09 16:09:53
* @Last Modified by:   Lenovo
* @Last Modified time: 2018-09-10 08:59:57
*/

window.onload=function(){
	let front=document.querySelector(".one");
	let one=document.querySelector(".two");
	let two=document.querySelector(".three");
	let three=document.querySelector(".four");
	let ul=document.querySelectorAll(".Newsbox ul");
	let bigbox=document.querySelector(".Newsbox");
	console.log(one);

one.classList.add("active");

three.onclick=function(){
	ul[0].style.display="none";
	bigbox.style.height="192px";
	one.classList.remove("active");
	// three.classList.add("active");
	two.classList.add("active");
	front.classList.remove("active");
}
two.onclick=function(){
	ul[0].style.display="none";
	bigbox.style.height="192px";
	one.classList.remove("active");
	three.classList.remove("active");
	two.classList.add("active");
	front.classList.remove("active");

}
front.onclick=function(){
	ul[0].style.display="block";
	bigbox.style.height="778px";
	one.classList.add("active");
	three.classList.remove("active");
	two.classList.remove("active");
	// front.classList.add("active");
}
one.onclick=function(){
	ul[0].style.display="block";
	bigbox.style.height="778px";
	one.classList.add("active");
	three.classList.remove("active");
	two.classList.remove("active");
	front.classList.remove("active");
}
}