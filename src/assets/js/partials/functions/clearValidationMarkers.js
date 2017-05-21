"use strict";

/// @name: -=[ clearValidationMarkers ]=-.
/// @description: очистить маркеры проверки.
/// @require: jQuery 1.7+.
/// @access: public.
/// @type: function.
/// @prop: target {jQuery object} - объект, к которому применяется данная функция (input ...).

function clearValidationMarkers(target) {
    //найти предка, который имеет класс .form-group, для удаления success/error
    var formGroup = $(target).parents('.form-group');

    formGroup.removeClass('has-error has-success');

    /* активируем кнопку отправки */
    $(target).closest('form').find('.submit').prop('disabled', false);
}
