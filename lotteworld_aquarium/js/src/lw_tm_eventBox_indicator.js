// ex_02_slideBtnBanner.js
(function($){

    var eventBox = $('#eventBox');
    var eventArea = eventBox.find('.event_area');
    var eventList = eventArea.find('.event_list');
    var eventDiv = eventList.find('div');
    var permission = true; 

    // 슬라이드 버튼
  var pnButton = eventBox.find('.pn_button');
  var nextBtn = pnButton.children('button').eq(0); // next버튼
  var prevBtn = pnButton.children('button').eq(1); // prev버튼
  var slideN = 0;
  var timed = 2000;
  
    // 마지막요소 복제에의한 내용변경
  var eventDivLast = eventDiv.eq(-1).clone(); // 마지막복제
  eventList.prepend(eventDivLast); // 복제요소 앞에 추가
  var reEventDiv = eventList.find('div'); // 복제 후 갯수 재파악
  eventList.css({ 'marginLeft':-100 + '%' , 'width': (reEventDiv.length * 100) + '%'}); // 크기변경
  reEventDiv.css({'width': (100 / reEventDiv.length) + '%' }); // 내부요소 크기변경

  // 다음버튼 클릭 -------------------------------------------
  prevBtn.on('click', function(e){

    e.preventDefault();
    
    if(permission){
      permission = false;

      slideN += 1;
    
      eventList.stop().animate({'left':slideN * -100 + '%'}, function(){
        if(slideN >= eventDiv.length-1){
          slideN = -1;
          eventList.stop().css({'left':slideN * -100 + '%'});
        }
       setTimeout(function(){
        permission=true;
       }, 100);
      });
    }
  });

  nextBtn.on('click', function(e){
    e.preventDefault();
    console.log('nextBtn');
    if( permission ){
      permission = false;
      slideN -= 1;
      eventList.stop().animate({'left':slideN * -100 + '%'}, function(){
        if(slideN <= -1){
          slideN = eventDiv.length-1;
          eventList.stop().css({'left':slideN * -100 + '%'});
          }
          setTimeout(function(){ permission=true; }, 100);
      });
    }
  });
    
    // jQuery end-----------------------------
    })(jQuery);