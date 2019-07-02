"use strict";

/// @name: -=[ on.input ]=-.
/// @name: -=[ on.keydown ]=-.
/// @description: очистка маркеров валидации input'ов форм,
/// @description: при событиях "on.input" && "on.keydown".
/// @description: ввода в поле инпута и нажития клавиш.
/// @require: clearValidationMarkers().
/// @access: public.
/// @type: event.

$(function() {
    /* on.input */
    $('form').find('input').on('input', function () {
        clearValidationMarkers(this);
    })

    /* on.keydown */
    $('form').find('input').on('keydown', function () {
        clearValidationMarkers(this);
    })
});
