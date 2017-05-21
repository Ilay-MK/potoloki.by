"use strict";

/// @description: работа прелоудера.

$(window).on('load', function () {

    /* preloader */
    var preloader = setTimeout( function () {
        jQuery( '#preloader' ).fadeOut( "slow" , function () {
            // Анимация завершена.

        });
    }, 300);

    /* preloader_hide */
    var preloader = setTimeout( function () {
        jQuery( '.preloader_hide' ).fadeIn( "slow" , function () {
            // Анимация завершена.

        });
    }, 800);
 });
