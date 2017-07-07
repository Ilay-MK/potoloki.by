"use strict";

/// @require: lazyLoad();

/*$(function() {
    lazyLoad();
});*/

/*$(window).load(function(){
    lazyLoad();
};*/

$(window).on('load', function () {
    var lazyLoadTimeout = setTimeout( function () {
        lazyLoad();
    }, 1500);
});
