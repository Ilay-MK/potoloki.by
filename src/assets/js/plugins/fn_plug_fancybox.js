"use strict";

/// -=[ fn_plugins_fancybox ]=-.
/// Объявление fancybox плагина с заданными параметрами или без.
/// @access public.
/// @type function.
/// @prop - empty.
/// @return empty.

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
