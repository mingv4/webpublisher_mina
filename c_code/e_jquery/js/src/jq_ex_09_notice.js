//jq_ex_09_notice.js

(function($){
$.ajax({
    url: '../data/random_people.json',
    dataType: 'json',
    context: document.body
}).done(function(data){
      // 1. 순서를 뒤집어서 배치.
    // 2. 한번에 보일 내용(30)을 적당히 줄여서 배치
    // 2-1. 인디케이터 생성하여 그 순번에 맞는 내용 나타내기
    // 3. 오름차순, 내림차순 연결해보기
    
    var dataFile = data.sort(function(a,b){
        return b.id - a.id; //뒷 순서부터 배열
    });

    var noticeCode = '<li><a href="#"><em></em><span></span></a></li>';
    var indiCode = '<li><a href="#"></a></li>';

    var notice = $('.notice_board');
    var noticeCon = notice.children('.context');
    var noticeArea = noticeCon.children('ul'); 

    var indiCon = notice.children('.indicator');
    var indiArea = indiCon.children('ul');
    //기본세팅
    var myViewLen = 20; // 한번에 보일 갯수
    
    
    //인디케이터 생성하기 + 한번에 보일 갯수를 수정하면 남은 갯수에 따라 인디케이터 갯수가 늘어나고 줄어듦.
    var indiLen = Math.ceil(dataFile.length / myViewLen);
    var indiN = 0;
    var indiLi;
    for(;indiN < indiLen; indiN += 1){
        indiArea.append(indiCode);
        indiLi = indiArea.children('li').eq(indiN);
        indiLi.find('a').text(indiN + 1);
    }

    // 인디케이터 보일 갯수 조정하기
    var indiViewLen= 5;
    var iv = 0;
    indiLi = indiArea.children('li');
    var memoryN; 

    for (; iv < indiLen; iv += 1){
        if(iv < indiViewLen){
            memoryN=iv+1;
            continue;
        } else { indiLi.eq(iv).hide();
        }
    }

    var nBtn = indiCon.find('.next_notice');
    var pBtn = indiCon.find('.prev_notice');

    nBtn.on('click',function(e){
        e.preventDefault();
        var nbn = memoryN;
        indiLi.hide();
        for (;nbn < memoryN+indiViewLen; nbn+=1) {
            indiLi.eq(nbn).show();
        }
        memoryN=nbn;
    });



    //내용 넣기

    var reSetting = function(n){
    // var i=0;
    var i;
    // (n!==undefined)? i = n : i = 0; 맨밑에 설명
    i = 0;
    var k = n||0;
    var settingLen = i + myViewLen;
    var noticeLi;
    noticeArea.empty();
    for(; i<settingLen; i+=1){
        if(dataFile[i+k]==undefined){
            break;
        }else{
        noticeArea.append(noticeCode);
        noticeLi = noticeArea.children('li').eq(i);
        noticeLi.find('em').text( dataFile[i + k].id);
        noticeLi.find('span').text( dataFile[i + k].address);
    }
    }
};
// 기능 수행 (차후 인디케이터 기능 포함시키기)
reSetting();

var indiLiBtn = indiArea.children('li');
indiLiBtn.on('click', function(e){
    e.preventDefault();
    var liN = parseInt( $(this).text() ) - 1;
    var liSetN = liN * myViewLen;
    // console.log(liN);
    reSetting(liSetN);
});

//   --------------------------3번

//     var select_area = $('.select_area').find('button');
//     select_area.on('click',function(e){
//         e.preventDefault();
//     var i = $(this).index();
//     switch(i){  
//         case 0: 
//             data.sort(function(a,b){
//                 return b.id-a.id;
//             });
//             reSetting();
//             break;
//             case 1:
//             data.sort(function(a,b){
//                 return a.id-b.id;
//             });
//             reSetting();
//             break;
//     }
//   });

});

})(jQuery);

/* if( winSt >= 500 ){
      topBtn.stop().fadeIn();
    } //if
    else{
      topBtn.stop().fadeOut();
    } //else
  
    ------------------------
    ↓↓↓↓↓ 이렇게 사용가능 ()괄호 제거하고 이해하기 
    ( (조건) ) ? (참이면) : (거짓이면) ;
    ====================
    ( winSt >= 500 ) ? topBtn.stop().fadeIn() : topBtn.stop().fadeOut(); */