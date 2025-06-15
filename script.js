let header = document.querySelector('header');
let left_home = document.getElementById('left_home');
let right_home = document.getElementById('right_home');
let titleWeb = document.querySelector('.titleWeb');
let scrollUp = document.querySelector('.scrollUp');
window.onscroll = function (){
    header.classList.toggle('header_scroll', scrollY > 0);
    if(scrollY > 150){
        scrollUp.style.right = '3%';
    }else{
        scrollUp.style.right = '-100%';
    }
}
scrollUp.onclick = function (){
    window.scroll({
        top:0,
        behavior:'smooth'
    })
}
//leftHomePage / rightHomePage
window.onload = function () {
left_home.style.opacity="1";
right_home.style.opacity="1";
titleWeb.style.top="60%"
}