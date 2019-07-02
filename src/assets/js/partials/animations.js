"use strict";

/// @description: анимация элементов сайта;
/// @require: animSeq();

$(function() {

    var delay = 50;

    var $allObjectsAnim = [
        $( '#navbar_main' ),
        $( '#hero .lead-form-1' ),
        $( '.form_theme_white' ),
        $( '.type-ceiling' ),
        $( '#new-direction .title__h3' ),
        $( '#new-direction .text-desc' ),
        $( '#new-direction .big-arrow' ),
        $( '.reasons__reasons' ),
        $( '.reasons__benefits' ),
        $( '.reasons__seq' ),
        $( '.bonuse' ),
        $( '#our-projects__carousel' ),
        $( '#guarantee .big-arrow' ),
        $( '.partner' ),
        $( '#reviews__carousel' ),
        $( '#gmap' ),
        $( '.title__sub-header' ),
        $( '.title__header' ),
        $( '.advantage' ),
        $( '.work-step' ),
        $( '.terms-purchase' ),
        $( '.footer-info' )/*,
        $( '.developer' )*/
    ];

    var titleCenter = [
        "#advantages",
        "#new-direction",
        "#guarantee",
        "#scheme-work",
        "#terms-purchase"
    ];
    var titleLeft = [
        "#hero",
        "#types-ceilings",
        "#about",
        ".twice-section",
    ];

    var balls = [
        $(".advantage"),
        $(".work-step"),
        $(".terms-purchase")
    ];

    /* --- */

    // The .each() method is unnecessary here:
    $( $allObjectsAnim ).each(function() {
        $( this ).css("opacity", 0);
    });

    /* --- */

    $( '#navbar_main' ).one('inview', function () {
        window.setTimeout(function() {
            $( "nav" ).css("opacity", 1).animateCss("fadeInDown");
        }, delay + 800);
    });

    $( '#hero' ).one('inview', function () {
        window.setTimeout(function() {
            $( ".lead-form-1" ).css("opacity", 1).animateCss("fadeInRight");
        }, delay + 500);
    });

    $( '.form_theme_white' ).one('inview', function () {
        window.setTimeout(function() {
            $( ".form_theme_white" ).css("opacity", 1).animateCss("fadeInUp");
        }, delay);
    });

    /* --- */

    /* type-ceiling */
    animSeq($( '.type-ceiling' ), "fadeIn", 200, 50);

    /* new-direction */
    $( '#new-direction .title__h3' ).one('inview', function () {
        window.setTimeout(function() {
            $( "#new-direction .title__h3" ).css("opacity", 1).animateCss("fadeIn");
            $( "#new-direction .text-desc" ).css("opacity", 1).animateCss("fadeIn");
        }, delay);
    });

    $( '#new-direction .big-arrow' ).one('inview', function () {
        window.setTimeout(function() {
            $( "#new-direction .big-arrow" ).css("opacity", 1).animateCss("fadeInRight");
        }, delay);
    });

    /* about */
    $( '.reasons__reasons' ).one('inview', function () {
        window.setTimeout(function() {
            $( ".reasons__reasons" ).css("opacity", 1).animateCss("fadeInLeft");
        }, delay);
    });

    $( '.reasons__benefits' ).one('inview', function () {
        window.setTimeout(function() {
            $( ".reasons__benefits" ).css("opacity", 1).animateCss("fadeInRight");
        }, delay);
    });

    animSeq($( '.reasons__seq' ), "pulse", 200, 600);

    /* bonuse */
    animSeq($( '.bonuse' ), "pulse", 200, 350);

    /* our-projects */
    $( '#our-projects__carousel' ).one('inview', function () {
        window.setTimeout(function() {
            $( "#our-projects__carousel" ).css("opacity", 1).animateCss("slideInRight");
        }, delay);
    });

    /* guarantee */
    $( '#guarantee .big-arrow' ).one('inview', function () {
        window.setTimeout(function() {
            $( "#guarantee .big-arrow" ).css("opacity", 1).animateCss("fadeInDown");
        }, delay);
    });

    /* partner */
    animSeq($( '.partner' ), "zoomIn", 200, 350);

    /* reviews */
    $( '#reviews__carousel' ).one('inview', function () {
        window.setTimeout(function() {
            $( "#reviews__carousel" ).css("opacity", 1).animateCss("slideInRight");
        }, delay);
    });

    /* footer */
    $( '#gmap' ).one('inview', function () {
        window.setTimeout(function() {
            $( "#gmap" ).css("opacity", 1).animateCss("zoomInUp");
        }, delay + 100);
    });

    $( '.footer-info' ).one('inview', function () {
        window.setTimeout(function() {
            $( ".footer-info" ).css("opacity", 1).animateCss("fadeInUp");
        }, delay);
    });

    /*$( '.developer' ).on('inview', function () {
        window.setTimeout(function() {
            $( ".developer" ).css("opacity", 1).animateCss("flip");  rotateIn | zoomInUp
        }, delay);
    });*/

    /* --- */

    /// переберём массив titleCenter
    $.each(titleCenter, function(index, value) {

        var target = value.toString();

        $( target ).one('inview', function () {

            window.setTimeout(function() {
                $( target + " .title__header" ).css("opacity", 1).animateCss("fadeInDown");
            }, delay);

            window.setTimeout(function() {
                $( target + " .title__sub-header" ).css("opacity", 1).animateCss("fadeInUp");
            }, delay);

        });

    });

    /// переберём массив titleLeft
    $.each(titleLeft, function(index, value) {

        var target = value.toString();

        $( target ).one('inview', function () {

            window.setTimeout(function() {
                $( target + " .title__header" ).css("opacity", 1).css("opacity", 1).animateCss("fadeInLeft");
            }, delay);

            window.setTimeout(function() {
                $( target + " .title__sub-header" ).css("opacity", 1).css("opacity", 1).animateCss("fadeInUp");
            }, delay);

        });

    });

    /* --- */

    /* анимируем "яйца" */
    animBalls(balls);

});
