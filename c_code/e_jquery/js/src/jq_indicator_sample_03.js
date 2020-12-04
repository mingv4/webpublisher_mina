// jq_indicator_sample_03.js

(function($){
var miniProduct = $('#miniProduct');
var backImg = miniProduct.find('.product'); //ul
var backLi = backImg.find('li');
var permission = true;

var backLiLast = backLi.eq(-1).clone(); 
backImg.prepend(backLiLast); 

var reBackLi = backImg.find('li') 
backImg.css({'marginLeft':-100 + '%','width': reBackLi.length * 100 + '%'});
reBackLi.css({'width': (100 / reBackLi.length) + '%'});

var slideBtn = miniProduct.find('.slide_btn');
var nextSlideBtn = slideBtn.children('button').eq(0); 
var prevSlideBtn = slideBtn.children('button').eq(1);

var slideN = 0;
   
var indicator = miniProduct.find('.indicator');
var indLi = indicator.find('li');
    
//슬라이드 버튼
    nextSlideBtn.on('click',function(e){
        e.preventDefault();
        if(permission){
        permission = false;
        
        slideN += 1;
        backImg.stop().animate({'left':slideN * -100 + '%'}, function(){
            if(slideN >= backLi.length-1){
            slideN = -1;
            backImg.stop().css({'left':slideN * -100 + '%'});
        }   
        setTimeout(function(){
            permission=true;
        },100);    
        });
        }  
    });
    
    prevSlideBtn.on('click',function(e){
        e.preventDefault();
        if(permission){
        permission = false;
        slideN -= 1;
        backImg.stop().animate({'left':slideN * -100 + '%'}, function(){
            if(slideN <= -1){
            slideN = backLi.length-1;
            backImg.stop().css({'left':slideN * -100 + '%'});
        }                      
        setTimeout(function(){
            permission=true;
        },100);
        });
        };
    
    });
    
    //indicator 버튼 
    indLi.on('click',function(e){
    e.preventDefault();
    
    var thisI = $(this);
    slideN = thisI.index();
    backImg.stop().animate({'left': slideN * -100 +'%'});
    indLi.eq(slideN).addClass('action');
    indLi.eq(slideN).siblings().removeClass('action');
    });
})(jQuery);



