"use strict";

$(function() {

    /// @description: добавляет класс навигационному меню при скролле через заданное расстояние.
    /// @require: jQuery 1.7+.
    /// @require: addClassScrollTop(target, offsetTop, classAdd).
    $.extend(true, $(document).scroll(), $(document).scroll(
        function() {
            addClassScrollTop (".contacts__item_navbar", window.globOffsetTop, 'contacts__item_navbar_mini');
        }
    ));
});
