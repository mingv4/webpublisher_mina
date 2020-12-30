
(function($){

    var win = $(window);
    var viewBox = $('#viewBox');
  
    var winH = win.outerHeight() / 4 * 3;
  
    var viewBoxOffset = viewBox.offset().top;
    var conScroll;
    win.on('scroll', function(e){
        var getScroll = win.scrollTop(); // 스크롤 값
        // console.log( getScroll );
    
        // 스크롤값이, 
        // conBox의 offset().top (에서 브라우저 높이값 일부빠진만큼)보다 크면 수행
        if(getScroll >= viewBoxOffset - winH){
            viewBox.addClass('action');
          conScroll = getScroll - (viewBoxOffset - winH);
          viewBox.css({'backgroundPositionY':-conScroll/3 + 'px' });
              }else{
                viewBox.removeClass('action');
        }
  });
  })(jQuery);