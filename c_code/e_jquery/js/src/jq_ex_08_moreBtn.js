// moreBtn.js

(function($){
    // moreBtn start
    $.ajax({
      url: '../data/random_people.json',
      dataType: 'json',
      context:document.body
    }).done(function(data){
      var people = data;
    //   console.log(people.length);
      var i=0;
  
      var myLen = i; // = 0과 같은내용
      var myViewLen = 10;
      var maxLen = people.length;
      var part = $('.part'); 
      var partUl = part.find('ul');
      var insertCord = '<li><div class="num"></div><div class="image"></div><dl><dt>title</dt><dd></dd></dl></li>';
      var more = $('.more_btn');
      var moreBtn = more.children('button');
      var liEq;
  
    //   myLen = i + myViewLen; // 0 + 4 지정을 해주지 않으면 한바퀴 돌고 올때 + 1 이 되기 때문에 1 + 4가 됨 / for문 밖에 지정을 해서 멈추게끔
    //   for( ; i < myLen ; i+=1 ){
    //     partUl.append(insertCord);
    //   } //for
    //   console.log( people[10].id );
  
    var moreFn = function(j){ 
        var k;
        // if( j === 'undefined'){
        //     k = myViewLen;
        // }else{
        //     k=j;
        // }                ------------------------ 1번방법
        // ( j === 'undefined')?  k = myViewLen : k=j;  -------------------------- 2번방법
        k = j||myViewLen;

        myLen = i + k;
        for(; i < myLen ; i+=1){
          if( i >= maxLen ){
            more.remove();
            break;
          } //if maxLen
          else{
            partUl.append(insertCord); 
            liEq = partUl.children('li').eq(i);
            // console.log(liEq)
            liEq.find('.num').text(people[i].id);
            liEq.find('.image').css({backgroundImage:'url('+ data[i].image+')'});
            liEq.find('dt').text(data[i].first_name);
            liEq.find('dd').text(data[i].address);
          }
        } 
      };

      moreFn();

      moreBtn.on('click',function(e){
          e.preventDefault();
          moreFn(15);
      });
  
    });
     //jQuery end
  })(jQuery);