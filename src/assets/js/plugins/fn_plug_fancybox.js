"use strict";

/// @name: -=[ fn_plugins_fancybox ]=-.
/// @description: Объявление fancybox плагина с заданными параметрами или без.
/// @require: jQuery 1.7+.
/// @require: jquery.mousewheel^3.0.6.
/// @access: public.
/// @type: function.
/// @prop: empty.
/// @return: empty.

var fn_plugins_fancybox = function () {
    $(".fancybox").fancybox({
        helpers : {
            title : {
                type : 'over'
            },
            thumbs	: {
                width	: 50,
                height	: 50
            }
        }
    });
};

$(function() {
    fn_plugins_fancybox;
});
