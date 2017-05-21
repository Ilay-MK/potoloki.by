"use strict";

/// @description: привязка событий клика на кнопку сабмит и событие сабмит формы.

$(function() {
    // Ajax send mail
    $("form").submit(function (e) {
        e.preventDefault();

        ajax(this);

        return false;
	});

    /*$(".order").submit(function (e) {
        ajax(this);

        return false;
	});

    $(".submit").click(function (e) {
        //e.preventDefault();

        var recipient = $(this).closest(".order");

        $(recipient).submit();
        //ajax(recipient);

        return false;
    });*/
});
