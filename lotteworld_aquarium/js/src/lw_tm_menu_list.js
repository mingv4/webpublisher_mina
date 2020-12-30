(function($){
    var gnbBox = $('#gnbBox');
    var gnbMenu = gnbBox.find('.gnb_menu');
    var gnbMenuDt = gnbMenu.find('dt');
    var gnbMenuDd = gnbMenu.find('dd');
    
    gnbMenuDd.hide();

    // gnbMenuDt.on('click',function(e){
    //     e.preventDefault();
    //     //console.log($(this));
        
    //     var it = $(this);
    //     it.siblings('dd').stop().slideToggle(function(){
    //     var itDdDisplay = it.siblings('dd').eq(0).css('display'); 
    //     // 그것의 형제중 첫번째 dd의 display 상태 파악
    //     //console.log(itDdDisplay);
            
    //     if(itDdDisplay === 'block'){
    //         it.addClass('action');   it.parent('dl').stop().siblings().children('dt').removeClass('action');
    //     }else if(itDdDisplay === 'none')
    //         it.removeClass('action');
    //     });
        
    //     it.parent('dl').stop().siblings().children('dd').slideUp();
    //     // 그것의 부모요소 (dl)의 형제요소(siblings)의 자식인 dd를 사라지게 만들어라.
        
    // })

    gnbMenuDt.on('click',function(){
        var nextDd = $(this).next('dd').css('display');
        if(nextDd === 'none'){
            $(this).next('dd').slideDown();
            $(this).parent('dl').siblings('dl').children('dd').slideUp()
        }else{
            $(this).next('dd').slideUp();
            }
    });



    })(jQuery);