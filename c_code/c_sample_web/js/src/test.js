//test.js
(function($){

var miniProduct = $('#miniProduct');
var product = miniProduct.find('.product');
var productLi = product.find('li');
var productLiLast = productLi.eq(-1).clone();

product.prepend(productLiLast);

var reProductLi = product.find('li');

product.css ({
  'marginLeft': -100 + '%','width':reProductLi.length * 100 + '%'
});

var slideBtn = miniProduct.find('.slide_btn');
var nextSlideBtn = slideBtn.children('button').eq(0);
var prevSlideBtn = slideBtn.children('button').eq(1);
var indicator = miniProduct.find('.indicator');
var indiLi = indicator.find('li');
var permission = true; 


var slideN = 0;
nextSlideBtn.on('click',function(e){
  e.preventDefault();
  if(permission){
    permission=false;
  slideN += 1;
  product.stop().animate({'left':slideN * -100 + '%'},function(){
    if(slideN>=productLi.length-1){
      slideN=-1;
      product.stop().css({'left':slideN * -100 + '%'});
    }
    setTimeout(function(){
      permission=true;
     }, 1000);
    });
    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action');
}
});

prevSlideBtn.on('click',function(e){
  e.preventDefault();
  if(permission){
    permission=false;
  slideN -= 1;
  product.stop().animate({'left':slideN * -100 + '%'},function(){
    if(slideN<=-1){
      slideN=productLi.length-1;
      product.stop().css({'left':slideN * -100 + '%'});
    }
    setTimeout(function(){ permission=true; }, 1000);
  });
  indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
  }
});



indiLi.on('click',function(e){
  e.preventDefault();
  var its = $(this);
  slideN = its.index();
  product.stop().animate({'left':slideN * -100 +'%'});
  indiLi.eq(slideN).siblings().removeClass('action');
  indiLi.eq(slideN).addClass('action');
});

})(jQuery);