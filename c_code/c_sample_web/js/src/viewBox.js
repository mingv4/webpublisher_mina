// monfee_viewBox.js
(function($){
var viewBox = $('#viewBox');

var backImg = viewBox.find('.back_image');
var backLi = backImg.find('li');
// 순서를 언급 시 에는 eq()라는 메소드를 사용 0~....., 마지막 순서 선택시 -1,-2....
// 복제의 기능은 clone() -> 복제된 기능을 원본처럼 수행하게 하려면 true 매개변수 입력
// 마지막 요소 복제에 의한 내용변경

var backLiLast = backLi.eq(-1).clone(); // 마지막 복제
backImg.prepend(backLiLast); // 복제요소 앞에 추가

var reBackLi = backImg.find('li'); // 복제 후 갯수 재 파악
backImg.css({'marginLeft':-100 +'%','width':reBackLi.length*100+'%'}); // 크기 변경
reBackLi.css({'width' : (100 / reBackLi.length) + '%'}); // 내부요소 크기 변경

var slideBtn = viewBox.find('.slide_btn');
var nextSlideBtn = slideBtn.children('button').eq(0); // next 버튼
var prevSlideBtn = slideBtn.children('button').eq(1); // prev 버튼

var slideN = 0;
nextSlideBtn.on('click',function(e){
// a,button 요소처름 이벤트 기능이 이미 내장된 요소는 미리 해당 기능을 제거할 필요가 있다.
e.preventDefault();
slideN += 1;
backImg.stop().animate({'left' : slideN * -100 + '%'}, function(){
  if(slideN>=backLi.length-1){
    slideN=-1;
    backImg.stop().css({'left':slideN*-100+'%'});
  }
});
});

prevSlideBtn.on('click',function(e){
  e.preventDefault();
  slideN-=1; //반대로 넘어가게
  backImg.stop().animate({'left':slideN*-100+'%'},function(){
    if(slideN<=-1){
      slideN=backLi.length-1;
      backImg.stop().css({'left':slideN*-100+'%'});
    }
  })
})



})(jQuery);
/* jQuery 선택자
   - #box -> $('#box');
   - .box -> $('.box');
   - ul>li -> $('ul>li');  -> $('ul').children('li');
   - ul li -> $('ul li');  -> $('ul').find('li');
   - dt+dd -> $('dt+dd');  -> $('dt').next('dd');  ------ 바로 뒤에 있는 형제를 의미
   - dt~dd -> $('dt~dd')l  -> $('dt').nextAll('dd'); ------ 뒤에 있는 형제 모두선택
   -                       -> $('dt').prev('dd');  ------ 이전 형제 선택
   -                       -> $('dt').prevAll('dd')  ------ 이전 형제 모두선택
   -                       -> $('dt').siblings('dd'); ------ 자신을 제외한 형제
   -                       -> $('dt').parent('dl');    /     $('dt').parentUntil('body');  ------ 부모 형제를 선택
   ------------------------------------------------------------------------------------------------------------------------
   css
   - 선택자.style.backgroundColor = '#acf';
   - 선택자.style = 'backgroundColor:#fac; color:#fff';
     선택자.css({'속성명':'속성값','속성명':'속성값'....)};  */

  /* var reFn = function(i){
    i+=1;
    if(i>20){
      reFn(i);
    } else{console.log('20이 되었습니다.');}
  } */

  /* jQuery 에서 콜백 함수란?
  
     하나의 메소드(함수)를 수행한 후에, 다시 함수를 수행할 수 있도록 처리하는 형태.
     단, animation 기능을 가진 메소드 및 이벤트 내에서만 콜백함수의 기능을 가질 수 있다.

     선택자.on('click',function(){
         선택자.animate({기능수행}),function(){})
     })
     */

