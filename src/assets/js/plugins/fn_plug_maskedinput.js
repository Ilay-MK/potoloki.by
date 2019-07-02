"use strict";

/// @name: -=[ fn_plug_maskedinput ]=-.
/// @description: Маска ввода телефона.
/// @require: jQuery.
/// @require: jquery.maskedinput.min.js^1.4.1.
/// @type: function.
/// @prop: target {string} - объект, к которому применяется данная функция
/// (класс, идентификатор или селектор).
/// @return: none.

var fn_plug_maskedinput = function (target) {

    /* значения по умолчанию */
    var dflt_target = ".bsPhone";

    if (target !== undefined ) {
        target = dflt_target;
    }

    /* --- */

    /* mask of inputs */
    $.mask.definitions['~']='[+-]';
    $.mask.definitions['h'] = "[1234579]";
    $.mask.definitions['!'] = "[0-9]";

    $(target).mask("+375 (hh) 999-99-99", { placeholder:"_" });
};

$(function() {
    fn_plug_maskedinput(".bsPhone");
});
