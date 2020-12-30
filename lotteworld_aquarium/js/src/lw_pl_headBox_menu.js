(function($){
var win = $(window);
var headBox = $('#headBox');
var headArea = headBox.find('.head_area');
var gnbBox = $('#gnbBox');
var gnbBoxUl = gnbBox.find('ul');
var gnbBoxDt = gnbBox.find('dt');
var gnbBoxDtLink = gnbBoxDt.find('a');
var gnbBoxDd = gnbBox.find('dd');
var gnbBoxDdLink = gnbBoxDd.find('a');

var unbBox = $('#unbBox');

// gnbBoxUl.on('mouseenter',function(){
//   gnbBoxUl.css({backgroundColor:'rgba(0,0,0,0.5)'});
// });

var navSlideDown = function(){
    gnbBoxDd.stop().slideDown();
    headBox.addClass('action');
  };
  var navSlideUp = function(t){
    var check = t;
    gnbBoxDd.stop().slideUp(function(){
      if(check){
        headBox.removeClass('action'); // backgroundColor 유지 체크
      }
    });    
  };

  // navSlideDown(); 
  // navBoxSelUl.on('mouseenter', navSlideDown);
  // navBoxSelUl.on('mouseleave', navSlideUp);
  //                   'mouseleave': navSlideUp

  gnbBoxUl.on({'mouseenter': navSlideDown });
  var ScrollFn = function(){
    var winSt = win.scrollTop();
    if(winSt >= 45 ){ // 스크롤 값이 45보다 크거나 같으면 아래 기능 수행
      unbBox.fadeOut();
      headBox.addClass('action');
      headBox.addClass('scroll');
      gnbBoxUl.on('mouseleave', function(){
        navSlideUp(false); //  headBox.removeClass('action'); 못하게 할거예용
      } );
      
    }else{ // 45보다 크거나 같지 않으면, 아래기능 수행
      unbBox.removeAttr('style'); // if문에서 headBox에 변경해준 css값을 없애줌
      headBox.removeClass('action');
      headBox.removeClass('scroll');
      gnbBoxUl.on('mouseleave', function(){
        navSlideUp(true); //  headBox.removeClass('action'); 하게 할거예용
      } );
    };
  }// ScrollFn();
  ScrollFn();


  win.on('scroll', function(e){ // win에 scroll이라는 기능을 수행할 경우 함수 아래 실행 
     // winSt는 scroll 했을 시 생기는 값으로 변수로 지정
    ScrollFn();    
   });


})(jQuery);


