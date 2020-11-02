// navBox.js

(function($){
// ================================================================
  //navigation 내용을 담을 형식 설정
  var navBox = [
  {'titleNav':'story',
    'subNav':['몽피이야기','회사소개','후원']},
  {'titleNav':'menu',
    'subNav': ['커피류','기타음료','음식 및 디저트','음식상품','기타']},
  {'titleNav':'store',
    'subNav':['신규매장','매장찾기','가맹문의','창업설명회','창업스토리']},
  {'titleNav':'news',
    'subNav':['이벤트','공지사항','프로모션','미디어광고']}
];
// ===============================================================
// console.log(navBox);
//==============================================
//#navBox 내부에 각각의 요소 내용 삽입
var navList = '<li><dl><dt></dt><dd></dd></dl></li>';
var navBoxSel = $('#navBox');
var navBoxSelUl = navBoxSel.children('ul');
var navLen = navBox.length;
var navDt, navDd, subNavLen;

var i=0, j;
for(; i<navLen; i+=1){
  //생성, 삽입  내용
  navBoxSelUl.append(navList);
  navDt = navBoxSelUl.children('li').eq(i).find('dt');

navDt.append('<a href="#">'+navBox[i].titleNav+'</a>');
navDd = navBoxSelUl.children('li').eq(i).find('dd');
subNavLen = navBox[i].subNav.length;
// console.log(subNavLen);
j=0;
for(;j<subNavLen; j+=1){
  navDd.append('<a href="#">'+navBox[i].subNav[j]+'</a>');
  
  }
 } //for end

 //------------------------------------------------------------
 var navBoxFindDt = navBoxSel.find('dt');
 var navBoxFindDtLink = navBoxFindDt.find('a');
 var navBoxFindDd = navBoxSel.find('dd');
 var navBoxFindDdLink = navBoxFindDd.find('a');
 navBoxFindDd.hide();
//  navBoxSelUl.addEventListener(;mouseenter,function(){})
navBoxSelUl.on('mouseenter',function(){
  navBoxFindDd.stop().slideDown();
});
navBoxFindDtLink.on('focus',function(){
  navBoxFindDd.stop().slideDown();
});
navBoxSelUl.on('mouseleave',function(){
  navBoxFindDd.stop().slideUp();
});
navBoxFindDdLink.eq(-1).on('blur',function(){
  navBoxFindDd.stop().slideUp();
});

})(jQuery);

/*js에서는 자식을 선택할 경우에 children -> jQuery에서도 children

js에서 자손 요소를 선택시, getElement...() -> jQuery에서는 find() */

/* 요소 첨부 시, 
   js에서는
   document.createElement(); //생성 후
   ??.append()               //삽입
   =========================================
   jQuery 에서는
   선택자.append('요소이름')  //생성과 동시에 삽입 */

