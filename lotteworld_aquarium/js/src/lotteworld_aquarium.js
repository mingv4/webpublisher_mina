var nowT = deviceType();
console.log('device체크: ' , nowT);
var body = $('body');

(function($){
  var dType = ['mob','tab','lap','pc'];
  var wrap = $('#wrap');
  if(nowT === dType[0]){
    wrap.load('./lotteworld_aquarium_mob.html', function(){
      body.append('<script src="../js/src/lotteworld_menu.js"></script>')
      
    });
  }else if(nowT === dType[1]){
    wrap.load('./lotteworld_aquarium_tab.html', function(){
      body.append('<script src="../js/src/lotteworld_menu.js"></script>')

    });
  }else if(nowT === dType[2]){
    wrap.load('./lotteworld_aquarium_pc.html', function(){
      body.append('<script src="../js/src/lw_headBox_menu.js"></script>')
      body.append('<script src="../js/src/lw_eventBox.js"></script>')
  
    });
  }else{
    wrap.load('./lotteworld_aquarium_pc.html', function(){
      body.append('<script src="../js/src/lw_headBox_menu.js"></script>')
      body.append('<script src="../js/src/lw_eventBox.js"></script>')
 
    });
  }
  
})(jQuery);