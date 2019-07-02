"use strict";

/// @description: работа прелоудера.

/*$(window).on('load', function () {

});*/

$(function() {
    /* preloader */
    var preloader = setTimeout( function () {
        jQuery( '#preloader' ).fadeOut( "normal" , function () {
            // Анимация завершена.

            /* preloader_hide */
            jQuery( '#preloader_hide' ).fadeIn( "normal" , function () {
                // Анимация завершена.

            });
        });
    }, 0);
});
