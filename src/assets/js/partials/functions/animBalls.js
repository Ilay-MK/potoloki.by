"use strict";

/// @name: -=[ animBalls ]=-.
/// @description: очистить маркеры проверки.
/// @require: jQuery 1.7+.
/// @require: animate.css.
/// @access: public.
/// @type: function.
/// @prop: balls {arr} - массив объектов JQ для анимации.

function animBalls(balls) {

    // переберём массив balls
    $.each(balls, function (index, value) {

        var timeout = 50,
            delay   = 200,
            i       = 0;

        /* --- */

        /* прячем наши "шары" для лучше визуализации анимации */
        value.css("opacity", "0");

        // действия, которые будут выполняться для каждого элемента массива
        // index - это текущий индекс элемента массива (число)
        // value - это значение текущего элемента массива
        /*$( .toString() )*/
        value.each(function() {
            var ball = this;

            $( ball ).one('inview', function () {

                window.setTimeout(function() {
                    $( ball ).css("opacity", 1).animateCss('bounceInLeft');
                }, timeout + delay * i++);

                window.setTimeout(function() {
                    $( ball ).find(".ball__img").animateCss('bounceIn');
                }, 1000 + timeout + delay * i++);

            });
        });

    });
}
