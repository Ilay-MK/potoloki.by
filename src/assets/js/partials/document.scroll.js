"use strict";

/// @name: -=[ $(document).scroll ]=-.
/// @description: description.
/// @require: .
/// @access: access.
/// @type: method of $(document).
/// @prop: function anonimus.
/// @return: none.

$(function() {
    $(document).scroll( function () {
        window.currentScrollPosition = +$(document).scrollTop();

        var currScrollPos = window.currentScrollPosition;

        /* --- */
    });
});
