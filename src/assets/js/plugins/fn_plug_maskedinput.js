"use strict";

/// -=[ fn_plug_maskedinput ]=-.
/// Маска ввода телефона.
/// @access public.
/// @type function.
/// @prop - target {string} - объект, к которому применяется данная функция
/// (класс, идентификатор или селектор).
/// (класс, идентификатор или селектор input'а).
/// @return empty.

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
