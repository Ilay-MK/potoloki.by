"use strict";

/// @name: -=[ animSeq ]=-.
/// @description: анимация поочерёдная.
/// @require: jQuery 1.7+.
/// @require: animate.css.
/// @access: public.
/// @type: function.
/// @prop: ob {object} - объект JQ для анимации.
/// @prop: timeout {integer} - тайм-аут для следующего объекта (задержка).
/// @prop: delay {integer} - задержка (первоначальная).
/// @prop: animate {string} - классы анимации animate.css.

function animSeq(ob, animate, timeout, delay) {
    var i = 0;

    if (animate === undefined) {
        animate = "bounceIn";
    }
    if (timeout === undefined) {
        timeout = 200;
    }
    if (delay === undefined) {
        delay = 50;
    }

    /* --- */

    /* прячем наши "шары" для лучше визуализации анимации */
    ob.css("opacity", "0");

    // действия, которые будут выполняться для каждого элемента массива
    // index - это текущий индекс элемента массива (число)
    // ob - это значение текущего элемента массива
    /*$( .toString() )*/
    ob.each(function() {
        var ball = this;

        $( ball ).one('inview', function () {

            window.setTimeout(function() {
                $( ball ).css("opacity", 1).animateCss(animate);
            }, delay +  timeout* i++);

        });
    });
}
