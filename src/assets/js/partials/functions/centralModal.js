"use strict";

/// @name: -=[ centerModal ]=-.
/// @description: центрирует модальное окно bootstrap.
/// @require: jQuery 1.7+.
/// @require: jQuery BS3.
/// @access: public.
/// @type: function.

function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(window).height() - $dialog.height()) / 2;
    $dialog.css("margin-top", offset);
}
