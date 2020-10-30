// js_08_array.js

var a=[1,2,3];
a.push('one'); //뒤에다가 추가
console.log(a);
a.shift(); //앞에서부터 삭제
console.log(a);
a.push('three');
a.push('four');
console.log(a);
a.pop(); // 뒤에부터 삭제
a.pop(); 
console.log(a);
a.unshift('before'); // 앞에다가 추가
console.log(a);

var b = [1,2,3];
var c = [4,5,6];
var d;
d = b.concat(c); //합치기
console.log(b);
console.log(c);
console.log(d);


var ar;
ar = []; // 배열을 쓸거라고 말해주는 것
ar[4] = 'in string';

var arrQ_01=[];  //1부터 100까지 나오게 하는 법
var i = 0;
for(;i<100;i+=1){
  arrQ_01[i]=i+1;
}
// i+=1 이란 i=i+1  ------------------  i++ 이란 i+1 (i에게 1씩 더해라) === ++i
// console.log(arrQ_01);
/*  for(시작값;조건;값의 증감){}  */

var arrQ_02=[];  //1부터 100까지의 홀수값만을 나오게 하는 법
var j=0, k, l;
for( ;j < 100;j+=1 ) {
  k=j % 2;                       //%는 j를 2로 나눴을때의 나머지 값
  if(k===0) {
    continue;
  } else if(k !==0){         //k!== 0 ---- k는 0과 같지않다
    arrQ_02.push(j);
  }    
}               ;
// console.log(arrQ_02); 
  /*  {continue;}      
  l=parseInt(j/2);                 
    arrQ_02[j]=j;  */

 var arrQ_03=[];
 var m=0;
 for(;m<100;m+=1){
   arrQ_03[m]=m+1;
 }; arrQ_03.reverse();
 console.log(arrQ_03);

//  var arrQ_03 = [];
//  var m = 0
//  for(m=0; m < 100 ; m += 1){
//      arrQ_03[m] = 100-m;
//  };
//  console.log(arrQ_03);


 var arrQ_04=[];
var n=0
for(;n<=100; n+=2){
  if(n===0) {
    continue;
  } else if(k !==0){arrQ_04.push(n)}
};
arrQ_04.reverse();
console.log(arrQ_04);

// var arrQ_04 = [];
// var p = 0
// for(; p < 101 ; p += 2){
//     if (p === 0){
//         continue;
//     }else if (p !== 0){
//         arrQ_04.push(p);
//     }
// };
// arrQ_04.reverse();
// console.log(arrQ_04);
var li_list =['nav_01','nav_02','nav_03','nav_04'];

var nav=document.getElementsByClassName('nav')[0];

// var li=document.createElement('li');
// nav.append(li);
// li.classList.add(list[0]);
// li.innerText="글쓰기";

// var li2=document.createElement('li');
// nav.append(li2);
// li2.classList.add(list[1]);
// li2.innerText="글쓰기";

// var li3=document.createElement('li');
// nav.append(li3);
// li3.classList.add(list[2]);
// li3.innerText="글쓰기";
// -----------------------------------------------------------------------===다른방법
// var o;
// for(o=0; o<4; o+=1){
//   var li = document.createElement('li');
//   li.classList.add(li_list[o]);
//   li.innerText='글쓰기'+(o+1);
//   nav.append(li);
// }

// -----------------------------------------------------------------------=== 다른 방법

var o=0, li, link;
var clnLen=li_list.length;

for(o=0;o<clnLen;o+=1){
  var li = document.createElement('li');
  link=document.createElement('a');
  li.classList.add(li_list[o]);
  link.innerText='글쓰기' + (o+1);
  link.setAttribute('href',li_list[o]+'.com' );
  li.append(link);
  nav.append(li);
};

// var list = ['nav_01','nav_02','nav_03','nav_04']
// var nav = document.getElementsByClassName('nav')[0];
// var b = 0, li, link;
// var listLen = list.length;

// for(b=0;b<listLen;b+=1){
//     li = document.createElement('li');
//     link = document.createElement('a');
//     li.classList.add(list[b]);
//     link.innerText = '글쓰기' + (b+1);
//     link.setAttribute('href','#')
//     li.append(link);
//     nav.append(li);
// };
  


