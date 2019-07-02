"use strict";

/// @name: -=[ imgLoaded ]=-.
/// @description: отображение картинки только после полной загрузки.
/// @access: public.
/// @param: img.
/// @type: function.

function imgLoaded(img){
    var $img = $(img);

    /*$img.parent().addClass('loaded');*/
    $img.addClass('loaded');
};
