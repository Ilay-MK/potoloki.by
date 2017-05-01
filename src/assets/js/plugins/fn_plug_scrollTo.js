"use strict";

/// @name: -=[ fn_plug_scrollTo ]=-.
/// @description: Скроллинг до места с заданной скоростью и отступом.
/// @require: require.
/// @access: public.
/// @type: function.
/// @prop: target {string} - объект, к которому применяется данная функция
/// (класс, идентификатор или селектор).
/// @prop: speed {integer} (ms) - скорость прокрутки (время прокрутки).
/// @prop: offsetTop {integer} (px) - отступ до объекта (цели),
/// расстояние на котором нужно остановиться.
/// @return: none.

var fn_plug_scrollTo = function (target, speed, offsetTop) {

    /* значения по умолчанию */
    var dflt_target    = ".scrollTo",
        dflt_speed     = 800,
        dflt_offsetTop = -51;

    if (target !== undefined ) {
        target = dflt_target;
    }
    if (speed !== undefined ) {
        speed = dflt_speed;
    }
    if (offsetTop !== undefined ) {
        offsetTop = dflt_offsetTop;
    }

    /* --- */

    $(target).click(function (e) {
        e.preventDefault();

        $.scrollTo($(this).attr('href'), speed, {
			offset: offsetTop
		});
        //$('.navbar-toggle').click();*/ /*для того, чтобы свернуть менюшку для удобства
	});
};

$(function() {
    fn_plug_scrollTo(".scrollTo", 800, -51);
});
