// jq_03_makeRemove.js

(function($){
var part = $('.part'); 
var p = part.children('p');
var div = part.find('div');
p.css({'border':'0.065rem solid #7a0'});

//------------------------------------------------------------------------------

var text = part.find('.text');
text.text('원하는 글자를 <br /> 입력할 수 있습니다.'); //기존 문자 지워지고 새롭게 생성됨

//------------------------------------------------------------------------------

var html = part.find('.html');
html.html('원하는 요소를 <br /> 삽입할 수 있습니다.') // html 요소로 인식
//$('head').text('<style>');

//------------------------------------------------------------------------------

var wrap = part.find('.wrap');
wrap.wrap('<dl><dt></dt></dl>'); // 태그 열었으면 닫는것도 같이 쓰는것을 권장
wrap.unwrap().unwrap(); //감싸는 요소 삭제. 하나씩 하위부터

//------------------------------------------------------------------------------

// prepend는 내부의 앞에 생성하게 되는 메소드이며,
// 요소의 형태로 사용하지 않으면, 다른곳의 요소를 강제로 뜯어서 가져올 수 있다.

var prepend = part.find('.prepend'); 
prepend.prepend('<span>삽입</span>');  // p요소 내부 앞에 span 삽입
// var span = $('span');
// prepend.prepend(span);
var mySpan = $('.preto');
mySpan.prependTo(prepend);  // .preto를, p요소 내부 앞에 삽입--- prepend(p태그)안에 삽입

/* 1. 선택자A.prepend(선택자B); ------ A의 내부에 B를 담는 것 ( 이런거 할수있어? )
   2. 선택자C.prependTo(선택자D); ------ D의 내부에 C를 담는 것 ( 할수있어 이런거? )
*/
//------------------------------------------------------------------------------

var append = part.find('.append');
append.append('<span>내부 뒤에 삽입완료!!</span>');
mySpan.appendTo(append)  
// 위 prepend(p) 안에 삽입되어있던 mySpan(div)가 append(p)안으로 옮겨짐 ---ctrl X,ctrl V 느낌
//------------------------------------------------------------------------------

var context = part.find('.context'); // 안의 내용 확인하는 기능
var contextCon = context.contents(); // .context안의 내용 전부를 확인

// html메소드는 기존 내용을 삭제하고 새로 작성한 내용을 삽입함.
// 필요시 기존 내용을 변수로 만들어 html메소드 안에 입력해야함
context.html('<a href="#"></a>'); 
context.children('a').html(contextCon);

// console.log(context.html()); // 코드도 같이 console.log에 나옴
// console.log(context.text()); // text만 나옴

//------------------------------------------------------------------------------

var before = part.find('.before');
before.before('<div>.before 앞에 요소를 생성</div>');

//------------------------------------------------------------------------------

var after = part.find('.after');
after.after('<div>.after 뒤에 요소를 생성</div>');

div = part.find('div');

//------------------------------------------------------------------------------
// attribute -> 속성을 처리하는 기능
var afterAttr = after.attr('title').split(' ');
console.log(afterAttr);
after.attr({'data-x':'what is data'});
after.removeAttr('style');

var arr = ['style','class','title','data-x'];
// arr.forEach(function(d,i){        ------- d : sytle,class,title,data-x 각각항목 // i : 순서
//   after.removeAttr(d);
// })  ------------- 자바스크립트 방식
$.each(arr,function(i,d){   // ------- js랑 반대로 jq는 쓰는 순서가 반대
  after.removeAttr(d);
});
//  ------------ 제이쿼리 형식
})(jQuery);