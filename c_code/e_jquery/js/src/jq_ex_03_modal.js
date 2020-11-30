//jq_ex_03_modal_js
(function($){
    
    var data = [
       {
           "title":"juice_01",
           "thumImg":"juice_small_01.jpg",
           "bigImg":"juice_big_01.jpg",
           "content":"image_01 설명 lorem5"
      }, 
       {
           "title":"juice_02",
           "thumImg":"juice_small_02.jpg",
           "bigImg":"juice_big_02.jpg",
           "content":"image_02 설명 lorem10"
      }, 
       {
           "title":"juice_03",
           "thumImg":"juice_small_03.jpg",
           "bigImg":"juice_big_03.jpg",
           "content":"image_03 설명 lorem15"
      }, 
       {
           "title":"juice_04",
           "thumImg":"juice_small_04.jpg",
           "bigImg":"juice_big_04.jpg",
           "content":"image_04 설명 lorem20"
      } 
    ];
  //   ------------------------------------------------------------
  
  var url = "../../img/modal/";
  var modalInCode =  '<li><button type="button"><span></span></button></li>';
  var galleryCode =  '<div class="gallery_box"><div class="gallery_area"><div class="close"><button type="button"><span></span></button></div><div class="big_img"><p></p></div></div></div>'; 
  var gallery,galleryClose,bigImg,bigNarr;
  var indexcheck;
  var timed = 500;
  // --------------------------------------------------------------
  var modal01 = $('.modal_01');
  
  
  var modalUl=modal01.children('ul');
  
  var temLi
  var modalBtn
  var i=0;
  modalUl.empty(); // 선택자 내부를 지우기
  for(;i<data.length; i+=1){
      modalUl.append(modalInCode);
      temLi = modalUl.children('li').eq(-1);
      modalBtn = temLi.find('button');
      modalBtn.css({backgroundImage:'url('+ url + data[i].thumImg + ')',
      textTransform:'uppercase'});
  
      modalBtn.children('span').text(data[i].title);
  
      temLi.attr({'data-big':data[i].bigImg, 'data-narr':data[i].content});
  }
  var modalLi = modal01.find('li');
  var mLiBtn = modalLi.find('button');
  
  
  mLiBtn.on('click',function(e){
      e.preventDefault();
      var it = $(this).parent('li');
      var itI = it.index();
      indexcheck = itI;
      // var thisBig = it.attr('data-big');
      // var thisNarr = it.attr('data-narr');
  //--------------------------------------------------------------------------------------
  //modal01.append(galleryCode); // 선택자 내부의 뒤에
  modal01.after(galleryCode); //선택자 바로 뒤에
  gallery = $('.gallery_box');
  galleryClose = gallery.find('.close');
  bigImg = gallery.find('.big_img');
  bigNarr = bigImg.children('p');
  
  //---------------------------------------------------------------------------------------
      // bigImg.css({backgroundImage:'url('+url+thisBig+')'});
      bigImg.css({backgroundImage:'url('+url+data[indexcheck].bigImg+')'});
      bigNarr.text(data[indexcheck].content);
      gallery.stop().fadeIn(function(){
          galleryClose.children('button').focus();
          setTimeout(function(){
            bigNarr.addClass('action');  
          }, timed/2)
          
      });
  
  
  galleryClose.on('click',function(e){
      e.preventDefault();
      gallery.stop().fadeOut();
      modalLi.eq(indexcheck).find('button').focus();
    
      bigNarr.removeClass('action');
      gallery.remove();
  });
  //-----------------------------------------------------------------------------------------
  });
  })(jQuery);