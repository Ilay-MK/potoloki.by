"use strict";

/// @name: -=[ validate ]=-.
/// @description: валидация формы (заявки): полей ввода телефона, имени...
/// @require: jQuery 1.7+.
/// @access: public.
/// @type: function.
/// @prop: target {jQuery object} - объект, к которому применяется данная функция (форма).
/// @return: formValid {bolean} - валидна ли форма (да, нет | true / false).

function validate(target) {

    /*var name, tel;

    name = $(target).find('input:text').val();
    tel = $(target).find('input:tel').val();*/

    //переменная formValid
    var formValid = true;

    $(target).find('.submit').attr('disabled', 'disabled');

    $(target).find('input.validating').each(function () {
        //найти предков, которые имеют класс .form-group, для установления success/error
        var formGroup = $(this).parents('.form-group');
        //найти glyphicon, который предназначен для показа иконки успеха или ошибки
        var glyphicon = formGroup.find('.form-control-feedback');
        //для валидации данных используем HTML5 функцию checkValidity

        if (this.checkValidity() && ($(this).val() != "")) {
            //добавить к formGroup класс .has-success, удалить has-error
            formGroup.addClass('has-success').removeClass('has-error');
            //добавить к glyphicon класс glyphicon-ok, удалить glyphicon-remove
            glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
        } else {
            //добавить к formGroup класс .has-error, удалить .has-success
            formGroup.addClass('has-error').removeClass('has-success');
            //добавить к glyphicon класс glyphicon-remove, удалить glyphicon-ok
            glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
            //отметить форму как невалидную
            formValid = false;
        }
    });

    return formValid;
}
