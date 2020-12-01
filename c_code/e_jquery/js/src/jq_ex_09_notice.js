//jq_ex_09_notice.js

(function($){
$.ajax({
    url: '../data/random_people.json',
    dataType: 'json',
    context: document.body
}).done(function(data){
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

    //내용 넣기
    var reSetting = function(){
    var i=0;
    var noticeLi;
    noticeArea.empty();
    for(; i<dataFile.length; i+=1){
        noticeArea.append(noticeCode);
        noticeLi = noticeArea.children('li').eq(i);
        noticeLi.find('em').text( dataFile[i].id);
        noticeLi.find('span').text( dataFile[i].address);
    }
};
reSetting();
    // 1. 순서를 뒤집어서 배치.
    // 2. 한번에 보일 내용을 적당히 줄여서 배치
    // 3. 오름차순, 내림차순 연결해보기

    var select_area = $('.select_area').find('button');
    select_area.on('click',function(e){
        e.preventDefault();
    var i = $(this).index();
    switch(i){  
        case 0:
            data.sort(function(a,b){
                return b.id-a.id;
            });
            reSetting();
            break;
            case 1:
            data.sort(function(a,b){
                return a.id-b.id;
            });
            reSetting();
            break;
    }
  });
});

})(jQuery);