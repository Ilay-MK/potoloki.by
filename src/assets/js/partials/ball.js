"use strict";

/// @description: добавляем анимацию "шарам", разовую, при появлении на экране.
/// @require: inview.
/// @require: animBalls().

$(function() {

    /*$('.ball').one('inview', function () {
        window.setTimeout(function() {
            $(".ball").animateCss('bounceInLeft');
        }, 250);
        window.setTimeout(function() {
            $(".ball__img").animateCss('bounceIn');
        }, 500);
    });*/

    var balls = [
        $(".advantage"),
        $(".work-step"),
        $(".terms-purchase")
    ];

    /* анимируем "яйца" */
    animBalls(balls);
});
