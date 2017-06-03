var map;
var markers = [], marker;
var neighborhoods = [
    { lat: 53.840447, lng: 27.504932 }
];
/*
    new google.maps.LatLng(neighborhoods[0])
*/

/* ----------------------------------------------------------- */
/* ----------------------------------------------------------- */

/// @require: variable map
function initMap() {
    map = new google.maps.Map(document.getElementById('gmap'), {
        zoom: 17,
        center: neighborhoods[0],
        disableDefaultUI: true,
        scrollwheel: false
    });

    /*var markerImage = './assets/img/map/marker.png';*/
    marker = new google.maps.Marker({
        map: map,
        /*draggable: true,*/
        animation: google.maps.Animation.DROP,
        position: neighborhoods[0],
        title: 'POTOLOKI'/*,
        icon: image*/
    });

    google.maps.event.addListener(map, 'zoom_changed', function(){
        map.setCenter( marker.getPosition() );
    });

    $.extend(true, $(window).resize(), $(window).resize(
        function () {
            map.setCenter( marker.getPosition() );
        }
    ));

    /*drop();*/
}

function drop() {
    clearMarkers();
    /*for (var i = 0; i < neighborhoods.length; i++) {
        addMarker(neighborhoods[i], i * 200);
    }*/
    addMarker(neighborhoods[0], 1500);
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

function addMarker(position, timeout) {
    window.setTimeout(function () {
        marker = new google.maps.Marker({
            map: map,
            position: position,
            /*draggable: true,*/
            animation: google.maps.Animation.DROP/*,
            icon: image*/
        });
        /*marker.addListener('click', toggleBounce);*/

        if (getPageSize()[2] < 768) {
            map.setCenter( marker.getPosition() );
        }
    }, timeout);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

$(function() {

    $('#gmap').one('inview', function () {
        window.setTimeout(function() {
            initMap(); // необходимо проверять или насильно инициализировать карту после загрузки библиотеки API gmap */
        }, 500);
    });

    /*$('#gmap').on('inview', function(event, isInView) {
        if (isInView) {
            drop();
        } else {
            alert("out from gmap");
        }
    });*/

    /* --- */
});
