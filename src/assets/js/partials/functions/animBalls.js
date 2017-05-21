"use strict";

/// @name: -=[ animBalls ]=-.
/// @description: онимация "шаров".
/// @require: jQuery 1.7+.
/// @require: animate.css.
/// @require: animSeq().
/// @access: public.
/// @type: function.
/// @prop: balls {arr} - массив объектов JQ для анимации.

function animBalls(balls) {

    // переберём массив balls
    $.each(balls, function (index, value) {

        animSeq(value, "fadeInUp", 200, 50);

    });
}
