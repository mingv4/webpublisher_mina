(function($){
  
var familySiteArea = $('.family_site_area');
var familySiteBox = familySiteArea.find('dt');
var familyList = familySiteArea.find('dd');

familySiteBox.on('click',function(e){
    e.preventDefault();
    //console.log($(this));
    
    var it = $(this);
    it.siblings('dd').stop().slideToggle(function(){
    var itDdDisplay = it.siblings('dd').eq(0).css('display'); 
    // 그것의 형제중 첫번째 dd의 display 상태 파악
    //console.log(itDdDisplay);
        
    if(itDdDisplay === 'block'){
        it.addClass('action');   it.parent('dl').stop().siblings().children('dt').removeClass('action');
    }else if(itDdDisplay === 'none')
        it.removeClass('action');
    });
    
    it.parent('dl').stop().siblings().children('dd').slideUp();
    // 그것의 부모요소 (dl)의 형제요소(siblings)의 자식인 dd를 사라지게 만들어라.
    
    
    //if(){
    //   
    //   }
})

})(jQuery);