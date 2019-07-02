"use strict";

/// @name: -=[ getUrlVars ]=-.
/// @name: -=[ getUrlVar ]=-.
/// @description: получение GET параметров.
/// @require: jQuery 1.7+.
/// @access: public.
/// @type: function, встроенные в jQuery.
/// @return: {object} - $.getUrlVars(); - объект с URL параметрами.
/// @return: {string} - $.getUrlVar(); - параметр с URL по его имени.

/*
*   EXAMPLE
*   -------
*   var allVars = $.getUrlVars();      // Получить объект с URL параметрами
*   var byName  = $.getUrlVar('name'); // Получит параметр URL по его имени
*/

$.extend({
    getUrlVars: function () {
        var vars = [],
            hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function (name) {
        return $.getUrlVars()[name];
    }
});
