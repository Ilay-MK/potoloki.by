"use strict";

/// @name: -=[ bs3_affix ]=-.
/// @description: The affix plugin toggles position: fixed; on and off, emulating the effect found with position: sticky;. The subnavigation on the right is a live demo of the affix plugin.
/// @require: jQuery 1.7+.
/// @require: Bootstrap 3.x.
/// @access: public.
/// @type: function.
/// @prop: target {string} - объект, к которому применяется данная функция
/// (класс, идентификатор или селектор).
/// @return: none.

var bs3_affix = function (target, offsetTop) {
    $(target).affix({
        offset: {
            top: offsetTop,
            /*bottom: function () {
                return (this.bottom = $('#footer').outerHeight(true))
            }*/
        }
    })
};

$(function() {

});
