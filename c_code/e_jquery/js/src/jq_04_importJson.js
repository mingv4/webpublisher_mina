//jq_04_importJson.js
(function($){
    // 비동기란?  -- 동기화 
$.ajax({
    url : '../../data/make_json.json',
    dataType:'json',  // 데이터 타입 설명
    context : document.body   // 적용할 위치 지정
}).done(function(data){
   var wrap=$("#wrap");
   wrap.append('<ul class="list_Insert"></ul>');
   var Insert = wrap.children('ul');

   var i=0;
   for(;i<data.length; i+=1){
       Insert.append('<li></li>');
       Insert.children('li').eq(-1).text(data[i].name);
   }
});


})(jQuery);