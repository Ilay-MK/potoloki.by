"use strict";

$(function() {

    /// @description: добавляет класс навигационному меню при скролле через заданное расстояние.
    /// @require: jQuery 1.7+.
    /// @require: addClassScrollTop(target, offsetTop, classAdd).
    $.extend(true, $(document).scroll(), $(document).scroll(
        function() {
            addClassScrollTop ("#navbar_main", 60, 'navbar_main_top', true);
        }
    ));
});


