//monfee_main_module.js

//$(document).ready(function({/*jQuery*/}));
//$(function(){/*jQuery*/});

(function($){
  //jQuery
  var headBox = $('#headBox');
  var viewBox = $('#viewBox');
  var bestNewsBox=$('#bestNewsBox');
  var issueBox=$('#issueBox');

  headBox.load('./monfee/monfee_headBox.html');
  viewBox.load('./monfee/monfee_viewBox.html');
  issueBox.load('./monfee/monfee_issueBox.html',function(){
    $(this).append('<script src="../js/src/issueBox.js"></script>');
  });
  bestNewsBox.append('<script src="../js/src/bestNewsBox.js"></script>');

})(jQuery);

//jQuery에서는 선택자의 형태는 css와 매우 유사.
//단, $('')를 이용하여 내부에 선택자를 작성.