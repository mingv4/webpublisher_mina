
(function($){
  var nowT = deviceType();
console.log('device체크: ' , nowT);
var body = $('body');

  var dType = ['mob','tab','lap','pc'];
  var wrap = $('#wrap');

  if(nowT === dType[0]){
    wrap.load('./lotteworld_aquarium_mob.html', function(){
      body.append('<script src="../js/src/lw_tm_menu.js"></script>')
      body.append('<script src="../js/src/lw_tm_menu_list.js"></script>')
      body.append('<script src="../js/src/lw_tm_eventBox_indicator.js"></script>')
      body.append('<script src="../js/src/lw_tm_headBox_fix.js"></script>')
      
    });
  }else if(nowT === dType[1]){
    wrap.load('./lotteworld_aquarium_tab.html', function(){
      body.append('<script src="../js/src/lw_tm_menu.js"></script>')
      body.append('<script src="../js/src/lw_tm_menu_list.js"></script>')
      body.append('<script src="../js/src/lw_tm_eventBox_indicator.js"></script>')
      body.append('<script src="../js/src/lw_tm_headBox_fix.js"></script>')

    });
  }else if(nowT === dType[2]){
    wrap.load('./lotteworld_aquarium_pc.html', function(){
      body.append('<script src="../js/src/lw_pl_headBox_menu.js"></script>')
      body.append('<script src="../js/src/lw_pl_comBox_indicator.js"></script>')
      body.append('<script src="../js/src/lw_pl_footBox_familysite.js"></script>')
      body.append('<script src="../js/src/lw_pl_viewBox_landing.js"></script>')
  
    });
  }else{
    wrap.load('./lotteworld_aquarium_pc.html', function(){
      body.append('<script src="../js/src/lw_pl_headBox_menu.js"></script>')
      body.append('<script src="../js/src/lw_pl_comBox_indicator.js"></script>')
      body.append('<script src="../js/src/lw_pl_footBox_familysite.js"></script>')
      body.append('<script src="../js/src/lw_pl_viewBox_landing.js"></script>')
 
    });
  }
  
})(jQuery);