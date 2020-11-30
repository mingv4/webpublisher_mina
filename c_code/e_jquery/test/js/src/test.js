//test.js
(function($){

//headBox 영역    
var win = $(window); //window 변수 지정
var headBox = $('#headBox'); // #headBox 변수 지정

//viewBox 영역
var viewBox = $('#viewBox');  // #viewBox 변수 지정
var viewImg = viewBox.find('.view_img'); // #viewBox > ul
var viewLi = viewImg.children('li'); // #viewBox > ul > li
var permission = true; // 기능이 여러번 수행되지 않도록 제어해주는 변수
// console.log(viewLi);

var indicator = viewBox.find('.view_slide_indicator'); // #viewBox > .view_slide_indicator
var indiLi = indicator.find('li');  // #viewBox > .view_slide_indicator > li

var backLiLast = viewLi.eq(-1).clone(); //마지막 li 복제
viewImg.prepend(backLiLast); //복제한 요소 앞에 추가
var reBackLi = viewImg.find('li'); // 복제 후 갯수 재파악
  viewImg.css({'width': (reBackLi.length * 100) + '%'}); // #viewBox > ul에 width 100% 추가
  reBackLi.css({'width': (100 / reBackLi.length) + '%' }); // 복제 후 li 개수 / n
//   console.log(reBackLi);

// 슬라이드 버튼
var slideBtn = viewBox.find('.view_indi_button'); // #viewBox > .view_indi_button
var nextSlideBtn = slideBtn.children('button').eq(0); // next버튼
var prevSlideBtn = slideBtn.children('button').eq(1); // prev버튼 
var slideN = 0; // slideN = 0 변수 지정
var timed = 2000; // timed = 2000 변수 지정

// 다음버튼 클릭 -------------------------------------------
nextSlideBtn.on('click', function(e){ //nextSlideBtn 클릭 시

    e.preventDefault(); // 선행 이벤트 삭제
    if(permission){ // 기능이 여러번 수행되지 않도록 제어
      permission = false; // 참일 경우 해당 요소를 거짓으로 바꿔줌
      if(slideN >= viewLi.length-1){ // slideN(0) 이 viewLi.length-1 보다 크거나 같을때
        slideN = -1;  // slideN 은 -1이 된다
        viewImg.stop().css({'marginLeft':slideN * -100 + '%'}); // 마지막 li요소로 이동시키도록 css 값 변경
      }
      slideN += 1; // slideN 이 하나씩 더해질때 
      viewImg.stop().animate({'marginLeft':slideN * -100 + '%'},function(){}); //ul의 css값을 정지
       setTimeout(function(){  // 일정 시간마다 이동하도록 시간 지정
        permission=true; //permission 값이 참일때
       }, 100); // 100 마다 이동하도록 지정
      indiLi.eq(slideN).siblings().removeClass('action');  // #viewBox > .view_slide_indicator > li의 eq번째의 형제들의 action 기능 삭제
      indiLi.eq(slideN).addClass('action'); // #viewBox > .view_slide_indicator > li의 eq번째의 형제들의 action 기능 수행
    } 

  });

// 이전버튼 클릭 -------------------------------------------
  prevSlideBtn.on('click', function(e){  //prevSlideBtn 클릭 시

    e.preventDefault(); // 선행 이벤트 삭제
    if( permission ){   // 기능이 여러번 수행되지 않도록 제어
      permission = false;  //참일 경우 해당 요소를 거짓으로 바꿔줌
      slideN -= 1; // slideN 은 -1이 된다
      viewImg.stop().animate({'marginLeft':slideN * -100 + '%'}, function(){   //ul의 css값을 정지
        if(slideN <= -1){  // 만약 slideN이 -1보다 작거나 같을때,
          slideN = viewLi.length-1; // slideN(0) 은 viewLi.length-1 만큼 이동
          viewImg.stop().css({'marginLeft':slideN * -100 + '%'}); // 마지막 li요소로 이동시키도록 css 값 변경
          }
          setTimeout(function(){ permission=true; }, 100); // 일정 시간마다 이동하도록 시간 지정
      });
      indiLi.eq(slideN).siblings().removeClass('action'); // #viewBox > .view_slide_indicator > li의 eq번째의 형제들의 action 기능 삭제
      indiLi.eq(slideN).addClass('action'); // #viewBox > .view_slide_indicator > li의 eq번째의 형제들의 action 기능 수행
    }
    
  });

// ------------------------------------인디케이터 클릭
indiLi.on('click', function(e){  // indicator li를 클릭할 때
  e.preventDefault(); // 선행 이벤트를 삭제
  var its = $(this); //its를 this라고 지정
  slideN = its.index(); // slideN을 클릭한 indicator의 순번 값으로 지정 
  viewImg.stop().animate({'marginLeft': slideN * -100 + '%'}); //ul의 css값을 정지
  indiLi.eq(slideN).siblings().removeClass('action'); // #viewBox > .view_slide_indicator > li의 eq번째의 형제들의 action 기능 삭제
  indiLi.eq(slideN).addClass('action'); // #viewBox > .view_slide_indicator > li의 eq번째의 형제들의 action 기능 수행
});


//광고영역 일정시간마다 자동수행/마우스 올릴 경우 일시정지
var startInterval; //stantInterval 이라는 변수 지정
var Start = function(){ // Start라는 기능 
  startInterval = setInterval(function(){  // 일정 시간 간격으로 함수가 주기적으로 실행 

    nextSlideBtn.trigger('click'); //일정 시간마다 화면이 넘어가게
    // slideN += 1;
    // viewImg.stop().animate({'marginLeft':slideN * -100 + '%'}, function(){
    //     if(slideN >= viewLi.length-1){
    //       slideN = -1;
    //       viewImg.stop().css({'marginLeft':slideN * -100 + '%'});
    //     }
    //   });
    //   indiLi.eq(slideN).siblings().removeClass('action');
    //   indiLi.eq(slideN).addClass('action');
   
  },timed); //timed의 변수 값만큼
};
Start(); 

viewBox.on('mouseenter',function(){ // viewBox에 마우스를 올려 놓을 시
    StopSlide(); // 슬라이드 멈춤
   });
viewBox.on('mouseleave',function(){ // viewBox에서 마우스를 다른곳으로 이동 시킬 시
     Start(); // 슬라이드 재생
   });


var StopSlide = function(){  // StopSlide 라는 변수 지정
  clearInterval(startInterval); // = startInterval이라는 변수의 기능을 중지 (setInterval)
};


// // 인디케이터 포커스 --------------------------------
// indiLi.children('a').on('focus', function(e){
//   e.preventDefault();
//   var its = $(this);
//   slideN = its.parent().index();
//   viewImg.stop().animate({'marginLeft': slideN * -100 +'%'});
//   indiLi.eq(slideN).siblings().removeClass('action');
//   indiLi.eq(slideN).addClass('action');
// });



// //========================= headBox scroll fixed

// var offsetTop = headBox.offset().top;
// win.on('scroll',function(){
//     var st = win.scrollTop(); 
//     if(offsetTop<st){
//         headBox.css({position:'fixed', maxWidth:1920+'px'});
//     } else{
//         headBox.removeAttr('style');
//     }
//     });


// ----------------------------------- 상단으로 이동 

var topBtn = $('.top_box'); // topBtn이라는 변수를 지정 (= .top_box)

win.on('scroll', function(e){
    // 스크롤이 이동한 위치 값 파악
    var winSt = win.scrollTop();  // 스크롤이 얼만큼 이동했는가

    if(winSt >= 45){    //win.scrollTop(); 이 45보다 크거나 같을 때  
        headBox.css({'position':'fixed', 'top':0, 'zIndex':1500, maxWidth:1920+'px' }); //headBox의  css를 수정
    } else { // 아니라면
        headBox.removeAttr('style'); //headBox의 스타일 속성 값을 삭제
    }
    if(winSt >= 300){ //win.scrollTop();이 300보다 크거나 같을때
        topBtn.fadeIn(); // topBtn이 나타나게 
    }else{ // 아니라면
        topBtn.fadeOut(); //topBtn이 사라지게
    }

});

})(jQuery); //끝!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
