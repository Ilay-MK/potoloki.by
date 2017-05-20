"use strict";

/// @description: привязка событий клика на кнопку сабмит и событие сабмит формы.

$(function() {
    // Ajax send mail
    $(".order").submit(function (e) {
        ajax(this);

        return false;
	});

    $('.submit').click(function () {
        var recipient = $(this).closest(".order");

        $(recipient).submit();
        //ajax(recipient);

        return false;
    });
});
