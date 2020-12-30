(function($){
    var win = $(window);
    var headBox = $('#headBox');
    
    
    win.on('scroll', function(e){ // win에 scroll이라는 기능을 수행할 경우 함수 아래 실행
        var winSt = win.scrollTop();
        if(winSt >= 45 ){ // 스크롤 값이 45보다 크거나 같으면 아래 기능 수행
          headBox.css({backgroundColor:'rgba(0,0,0,0.5)'});
          } 
          else{ // 45보다 크거나 같지 않으면, 아래기능 수행
          headBox.removeAttr('style');
          };
          });
    })(jQuery);