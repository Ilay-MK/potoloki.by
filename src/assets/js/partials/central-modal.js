"use strict";

/// @require: centerModal();

$(function() {
    $('.modal-vertical-centered').on('show.bs.modal', centerModal);

    /// Расширение функции resize
    $.extend(true, $(window). resize(), $(window).resize(
        function() {
            $('.modal-vertical-centered:visible').each(centerModal);
        }
    ));
});
