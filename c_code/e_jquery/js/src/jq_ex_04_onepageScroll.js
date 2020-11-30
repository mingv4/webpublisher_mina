// jq_ex_04_onepageScroll.js

(function($){
    // jQuery Start
  /*
     1. 스크롤시 $('#headBox') 상단 고정
     1-1. 상단이동버튼 기능 추가
     2. $('popup_dp') 의 닫기 버튼 클릭 시 팝업창 삭제 
  */
  
  /* 1번 사용 시 : offset().top, scrollTop, on('scroll'), $(window)
     
  */
  var win = $(window);       //window라고 변수를 지정하는것은 오류.
  var headBox = $('#headBox');
  var navBox = $('#navBox');
  var navLi = navBox.find('li');
  var topBtn = $('.top_move_btn');
  // 브라우저 상단에서 떨어져 있는 정도 체크
  
  var headOffset = headBox.offset().top;
  
  // console.log(headOffset);
  // 1-1번 보이지 않았다가, 1000px 이동 후에 나타나기
  topBtn.hide();
  
  win.on('scroll', function(e){
      // 스크롤이 이동한 위치 값 파악
      var winSt = win.scrollTop();
      // console.log(winSt);
  
      if(winSt >= headOffset){    //headOffset - 스크롤이 떨어져있는 정도보다 winSt - 스크롤이 이동한 위치값이 크다면 상단에 고정시켜라.
          headBox.css({'position':'fixed', 'top':0, 'zIndex':1500});
      } else {
          headBox.removeAttr('style');
      }
  
      if(winSt >= 1000){  // (winSt >= 500) ?  ---- 조건
          topBtn.fadeIn(); // topBtn.stop().fadeIn()  ---- 참
      } else {
          topBtn.stop().fadeOut(); //: topBtn.stop().fadeOut(); ---- 거짓
      }
  
      // (winSt >= 500) ? topBtn.stop().fadeIn() : topBtn.stop().fadeOut(); ------ 위의 조건문과 같음.
  });
  //-------------------------------------------------------------------------------
  // 클릭 시 처리되는 내용을 별도의 함수로 처리
  var liScrollMove = function(e){
      e.preventDefault();
      var it = $(this).find('a');
      var itAttr = it.attr('href');  // a요소의 연결된 선택자 파악
      var itOffset = $(itAttr).offset().top;  // a요소의 href 값이 상단에서 떨어져 있는 정도 체크
      $('html, body').animate({ scrollTop: itOffset });  // 브라우저를 이동시켜라(스크롤) -> itOffset의 파악된 크기만큼
  }; //liScrollMove();
  //-------------------------------------------------------------------------------
  // topBtn.on('click',['a'], liScrollMove);
  // navLi.on('click',['a'], liScrollMove);
  //    선택자(). forEach(function(배역요소각각, 해당 배열요소 순서){});  ------ js
  //    $.each(배열, function(배열요소 순서, 순서에 맞는 배열요소 각각){});
  
  var btnCollection = [topBtn,navLi]  // 위의 topBtn, navLi 선택자를 하나로 합침
  $.each(btnCollection,function(i,btn){
      btn.on('click',['a'],liScrollMove);
  });
  //-------------------------------------------------------------------------------
  //2번 기능
  
  var popupDp = $('.popup_dp');
  var popupBtn = popupDp.find('button');
  popupBtn.on('click',function(e){
      e.preventDefault();
      popupDp.remove();
  });
  
  //--------------------------------------------------------------------------------
  
  // 3. tab 메뉴
  
  var tab = $('.tab_li');
  var tabLi = tab.find('li');
  var tabConWrap = $('.tab_content');
  var tabCon = tabConWrap.find('div');
  
  tabLi.on ('click',['a'],function(e){
      e.preventDefault();
      var it = $(this);
      var itI = it.index();
  
      tabCon.eq(itI).show();
      tabCon.eq(itI).siblings().hide();
  });
  
    //jQuery End
  })(jQuery);