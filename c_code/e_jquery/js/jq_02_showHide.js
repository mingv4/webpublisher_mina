//jq_02_showHide

(function($){

var timed = 1000;
var box = $('.box');
var boxPar = box.children('p');
boxPar.css({'borderRadius':'1rem'});


var part=$('.part');
var partUl = part.children('ul');

var showHide = partUl.children('.show_hide'); 
var fade = partUl.children('.fade');
var slide = partUl.children('.slide');
var className = partUl.children('.class_name');
var other = partUl.children('.other');

//show_hide
var shBtn = showHide.children('button');
shBtn.eq(0).on('click',function(e){
  e.preventDefault();
  boxPar.stop().show(timed);
});

shBtn.eq(1).on('click',function(e){
  e.preventDefault();
  boxPar.stop().hide(timed);
});

shBtn.eq(2).on('click',function(e){
  e.preventDefault();
  boxPar.stop().toggle(timed);
});

//fade
var fdBtn = fade.children('button');
fdBtn.eq(0).on('click',function(e){
  e.preventDefault();
  boxPar.stop().fadeIn(timed);
});

var fdBtn = fade.children('button');
fdBtn.eq(1).on('click',function(e){
  e.preventDefault();
  boxPar.stop().fadeOut(timed);
});

var fdBtn = fade.children('button');
fdBtn.eq(2).on('click',function(e){
  e.preventDefault();
  boxPar.stop().fadeToggle(timed);
});

//slide
var sldBtn = slide.children('button');
sldBtn.eq(0).on('click',function(e){
  e.preventDefault();
  boxPar.stop().slideDown(timed);
});

var sldBtn = slide.children('button');
sldBtn.eq(1).on('click',function(e){
  e.preventDefault();
  boxPar.stop().slideUp(timed);
});


var sldBtn = slide.children('button');
sldBtn.eq(2).on('click',function(e){
  e.preventDefault();
  boxPar.stop().slideToggle(timed);
});

//class_name
var clnBtn = className.children('button');
clnBtn.eq(0).on('click',function(e){
  e.preventDefault();
  boxPar.removeClass('view');
});

var clnBtn = className.children('button');
clnBtn.eq(1).on('click',function(e){
  e.preventDefault();
  boxPar.addClass('view');
});

var clnBtn = className.children('button');
clnBtn.eq(2).on('click',function(e){
  e.preventDefault();
  boxPar.toggleClass('view');
});


})(jQuery); 
