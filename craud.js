let up=document.getElementById('up');
window.onscroll=function(){
    if(scrollY >=300){
        up.style.display='block'
    }
    else{
        up.style.display='none'
    }
}
up.onclick=function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}
console.log(screen.availWidth);
console.log(screen.availHeight);
let txt=document.getElementById('txt');
if(sessionStorage.length>0){
    txt.value=sessionStorage.getItem('text');
}
txt.onkeyup=function(){
    sessionStorage.setItem('text',txt.value);
}
