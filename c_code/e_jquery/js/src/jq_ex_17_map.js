
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
// var container = document.getElementsByClassName('map_img')[0];

var MySetMap = function(lat,lng){
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(lat,lng), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };
    
var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

var markerPosition  = new kakao.maps.LatLng(lat,lng); // 마커가 표시될 위치입니다 

var marker = new kakao.maps.Marker({  // 마커를 생성합니다
    position: markerPosition
});

marker.setMap(map);   // 마커가 지도 위에 표시되도록 설정합니다
 
};
// MySetMap()
MySetMap(37.262700908213816, 127.02993659360767)

// js라 (function($)){jQuery}; 필요없음
