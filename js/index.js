 var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
     on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    }
    });
var music=document.querySelector(".music");
var img1=document.querySelector(".img1");
var img2=document.querySelector(".img2");
var audio=document.querySelector("audio");
var flag=1;
music.onclick=function(){
    if(flag==1){
      img1.style.display="none";
      img2.style.animation="none";
      audio.pause();
      flag=0;
    }else{
        img1.style.display="block";
        img2.style.animation="run 6s infinite linear";
        audio .play();
        flag=1;
    }
}