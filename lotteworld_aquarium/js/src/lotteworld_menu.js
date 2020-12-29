(function($){
    // jQuery start
   
   // 메뉴버튼 기능
     var headBox = $('#headBox');
     var menuBtn = headBox.find('.menu_open');
     var allmenu = headBox.find('#menuBox');
     var closeBtn = allmenu.find('.menu_close');
   
    menuBtn.on('click', ['button'], function(e){
       e.preventDefault();
       
       var allmenuDp = allmenu.css('display');
       if(allmenuDp === 'none'){
         allmenu.stop().fadeIn();
        }
  
       }); //==================================== menuBtn

       closeBtn.on('click', ['button'], function(e){
        e.preventDefault();
        
        var allmenuDp = allmenu.css('display');
        if(allmenuDp === 'block'){
          allmenu.stop().fadeOut();
        }
      });
       
    // jQuery end
  })(jQuery);