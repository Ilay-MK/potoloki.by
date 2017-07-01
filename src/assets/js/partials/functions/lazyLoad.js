"use strict";

/// @name: -=[ lazyLoad ]=-.
/// @description: Загрузка картинки по событию.
/// @require: imgLoaded().
/// @access: public.
/// @type: function.
/// @return: none.

function lazyLoad() {
    var $images = $('.lazy_load');

    $images.each( function() {
        var $img = $(this),
            src = $img.attr('data-src');

        $img
            .on('load', imgLoaded( $img[0] ))
            .attr('src', src);
    });
};
