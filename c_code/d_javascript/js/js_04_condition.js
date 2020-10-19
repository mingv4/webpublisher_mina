// js_04_condition.js

// 피자먹을까? -> 응
// 피자먹을까? -> 아니 -> 그럼 순대국 먹자
// 피자먹을까? -> 아니 -> 그럼 순대국 먹을까? -> 아니 -> 냉면 먹자 .........

var myEat ='냉면'; 
          
// 변수와 하나의 값을 같은지 비교여부로 참/거짓을 도출
//  === 비교하여 같은 참을 확인, !== 비교하여 같은 값의 반대를 확인

var q = myEat !== 'pizza'; 
// console.log( q );

// if(조건){조건의 기능이 참이면 실행하는 내용}
// if(조건){조건의 기능이 참이면 실행하는 내용} else {조건의 기능이 거짓일 경우 실행}
var myEatResult;
if (myEat==='pizza') {
  // 참이면 수행
  myEatResult = myEat + '먹으러가자!!!';
  console.log(myEatResult);
} else if(myEat == '순대국'){
  // if 첫 문항이 거짓인 경우, 새로운 if에 대한 문항이 참
  myEatResult = myEat + ' 에 밥 말아먹을까?';
} else {
  myEatResult = '니가 먹고싶은 '+ myEat + '먹으러 가자';
}

// console.log(myEatResult);

/* .
var result = confirm('당신은 성인입니까?');
// console.log(result);
if(result === true) {
  location = "http://naver.com";
} else {
  location = "https://store.pinkfong.com/"
}
참이면(확인) 네이버로 거짓이면(취소) 핑크퐁 사이트로 이동
*/


/*
var myOld = prompt ('당신의 태어난 연도를 입력하세요.');
// console.log(myOld);

var nowYear = new Date().getFullYear(); //올해 파악하는 기능
// console.log(nowYear-myOld+1);
var myNai = nowYear - myOld + 1;
if(myNai < 20){
console.log('당신은 미성년자 입니다.');
} else if (myNai >= 40){
  console.log('당신은 제법 중후한 분이겠군요?');
} else {
  console.log('2~30대의 청년이시군요!');
} 
*/

// ------------------------------------------------------------------
/*
switch(값){
  case 값1 : 참이면 수행 break;
  case 값2 : 참이면 수행 break;
  case 값3 : 참이면 수행 break;
  case 값4 : 참이면 수행 break;
  case 값5 : 참이면 수행 break;
  default : 위 기능이 모두 거짓이면 수행;
*/

/*
var n =parseInt(Math.random()*5);   //랜덤숫자 0~5 미만까지 생성 
var r;
switch(n){
  case 1:
    r='1이 나온 당신: 바보입니다.'; break;
  case 2:
    r="2가 나온 당신: 똑똑한 천재입니다."; break;
  case 3:
    r='3이군요~ 희대의 명품 얼굴을 가진 분이군요?'; break;
  case 4:
    r='4로군요.. 오래오래 사실 거예요'; break;
  case 5:
    r='5가 나왔군요.. 답하지 않을 거예요.'; break;

  default:
    r='의외의 결과로군요.. 사람.. 이신가요?';    

}
console.log(n,':',r);

*/

// ---------------------------------------------------------------------

// if, switch
// 삼항 연산자 : 세가지 항목을 가진 연산자 기법
var i= 1;
// (조건)? 조건이 참이면 수행 : 거짓이면 수행;
(i>10) ? console.log('i는 10보다 크다') : console.log('i는 10보다 작다');

// if(조건1){조건 1이 참이면 } else if(조건 1이 아닐때 조건2){조건 2가 참이면 ...} else if(){} else{}
// switch(매개변수){case 값1:...; break; case 값2:...; break; ... default: 최종;}
// (조건)? 조건이 참이면 : 조건이 거짓이면;