
let events = ['onscroll', 'onload', 'onresize'];
let header = document.querySelector("#header");
let intro = document.querySelector("#intro");
let introHeight = intro.offsetHeight;
let scrollPos = window.scrollY;

function eventFunction(){
    scrollPos = window.scrollY;
    console.log(scrollPos);
    if(scrollPos > introHeight){
        header.classList.add('fixed');
    } else{
        header.classList.remove('fixed');
    }
}

window.addEventListener("onscroll", eventFunction());
window.addEventListener("onload", eventFunction());
window.addEventListener("onresize", eventFunction());