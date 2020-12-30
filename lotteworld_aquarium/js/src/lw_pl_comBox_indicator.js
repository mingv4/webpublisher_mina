// lw_comBox_indicator.js

(function($){
    // jQuery start
  
   // lw_comBox_indicator 이미지 slide
   var communityBox = $('#communityBox');
   var comBtn = communityBox.find('.community_btn');
   var prevSlideBtn = comBtn.children('button').eq(0);
   var nextSlideBtn = comBtn.children('button').eq(1);
   var comImg = communityBox.find('.community_area');
   var comUl = comImg.find('ul');
   var comLi = comUl.find('li');
   var permission = true;
   var beforeComLiWidth = comUl.find('li').eq(0).outerWidth(true);
   var beforeComLiMargin = comUl.find('li').eq(0).outerWidth(true) -  comUl.find('li').eq(0).outerWidth();
  
//    comImg.css({'overflow':'hidden'});
  
   // 이미지 전체 복사
   var comSize = function(){
    var copyImg = comLi.clone(true);
    var copyLastImg = comLi.eq(-1).clone(true);
    comUl.append(copyImg);
    comUl.prepend(copyLastImg);
    var recomLi = comUl.find('li');
    var reComLilen = recomLi.length;
    // 처음에 5개 -> 5개의li 를 담을 수 있는 크기
    // 복제5개  -> 10개의 li담을 수 있는
    // 마지막을 하나 더 복제 -> 11개 
    comUl.css({
        width: (beforeComLiWidth * reComLilen) - beforeComLiMargin + 'px',
        left: -beforeComLiWidth +'px'
    });
    
    var slideN = 0;
    var comLiMargin = parseFloat(recomLi.css('marginRight')); // li의 margin-right값을 소수점까지 측정
     console.log(comLiMargin);
    var comUlWidth = comImg.width() * recomLi.length / 2; // ul넓이 측정(ul부모 * 복사된 전체 li길이 나누기 2)
    
    // comUl.css({'width':recomLi.length * 20 + '%'}); // ul css값 중 넓이 값 변경
    recomLi.css({'width':beforeComLiWidth - beforeComLiMargin + 'px', marginRight:beforeComLiMargin +'px'});
    recomLi.eq(-1).css({marginRight:0});

    // var comLiWidth = comLi.outerWidth(true);
  
    nextSlideBtn.on('click', function(e){
      e.preventDefault();
      if(permission){
        permission = false;
        slideN +=1;
        comUl.stop().animate({ 'margin-left':-beforeComLiWidth * slideN + 'px' },function(){
          if(slideN > comLi.length -1){
            slideN = 0;
            comUl.stop().css({'margin-left':-beforeComLiWidth  * slideN});
          }
          setTimeout(function(){
            permission = true;
          },100);
        });
      }
    });
    prevSlideBtn.on('click', function(e){
        e.preventDefault();
        if(permission){
          permission = false;
          slideN -=1;
          comUl.stop().animate({ 'margin-left':-beforeComLiWidth * slideN + 'px' },function(){
            if( slideN < 0){
             slideN = comLi.length -1;
              comUl.stop().css({'margin-left':-beforeComLiWidth  * slideN});
            }
            setTimeout(function(){
              permission = true;
            },100);
          });
        }
      });
  };
  comSize();
  $(window).on('resize', function(){
    comSize();
  });
  // jQuery end
  })(jQuery);