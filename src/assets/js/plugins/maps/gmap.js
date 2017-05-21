var map;
var markers = [], marker;
var neighborhoods = [
    { lat: 53.840447, lng: 27.504932 }
];
var image = './assets/img/map/marker.png';

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
    /* 53.911619, 27.579647 */
    /*var image = './assets/img/map/marker.png';*/
    /*marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {
            lat: 53.911619,
            lng: 27.579647
        },
        icon: image
    });*/
}

function drop() {
    clearMarkers();
    /*for (var i = 0; i < neighborhoods.length; i++) {
        addMarker(neighborhoods[i], i * 200);
    }*/
    addMarker(neighborhoods[0], 1500);
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

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

$(function() {
    // Handler for .ready() called.
    $.extend(true, $(window).resize(), $(window).resize(
        function () {
            window.setTimeout(function() {
                map.setCenter( marker.getPosition() );
            }, 500);
        }
    ));

    /* --- */

    $('#gmap').one('inview', function () {
        window.setTimeout(function() {
            initMap(); /* необходимо проверять или насильно инициализировать карту после загрузки библиотеки API gmap */
            drop();
        }, 1500);
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
