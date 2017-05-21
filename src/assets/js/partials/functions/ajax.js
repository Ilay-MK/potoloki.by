"use strict";

/// @name: -=[ ajax ]=-.
/// @description: ajax отправка письма (заявки).
/// @require: jQuery 1.7+.
/// @require: validate().
/// @access: public.
/// @type: function.
/// @prop: ob {jQuery object} - объект, к которому применяется данная функция (форма).

function ajax(ob) {
    var result = $("#result");
    alert("Test");

    if (!validate(ob)) {alert("invalid form");
        /*result.addClass("text-danger bg-danger").text("Пожалуйста, проверьте введённые данные!");*/
        return false;
    }

    var processor = "./mail.php";
    var msg;

    $.ajax({
        type: "POST",
        url: processor,
        data: $(ob).serialize()
            + "&bsName=" + $(ob).find('.bsName').val()
            + "&bsPhone=" + $(ob).find('.bsPhone').val()
            + "&bsEmail=" + $(ob).find('.bsEmail').val()
            + "&whichService=" + $(ob).closest('.whichService').attr("data-nameForm")
            + "&utm_source=" + $.getUrlVar('utm_source')
            + "&utm_term=" + $.getUrlVar('utm_term'),
        beforeSend: function(data) { // сoбытиe дo oтпрaвки
            /*$(ob).find('input[type="submit"]').attr('disabled', 'disabled');*/ // нaпримeр, oтключим кнoпку, чтoбы нe жaли пo 100 рaз
            $(ob).find('.submit').attr('disabled', 'disabled');
        },
        complete: function(data) { // сoбытиe пoслe любoгo исхoдa
            /*$(ob).find('input[type="submit"]').prop('disabled', false);*/ // в любoм случae включим кнoпку oбрaтнo
            $(ob).find('.submit').prop('disabled', false);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            /*result.addClass("text-danger bg-danger").text("Пожалуйста, проверьте введённые данные!");*/
            /*alert("Ошибка: "+xhr.responseCode+" | сообщение: "+str);*/ /* отладка */
            //alert("send email ERROR! "+ xhr.responseText); /* xhr.responseCode */
            //alert(xhr.status); // пoкaжeм oтвeт сeрвeрa
            //alert(thrownError); // и тeкст oшибки
        },
        success: function(data) {
            //alert(data); /* $('.results').html(data); */
        },
    }).done(function (msg) {

        /*if(msg === "OK"){
            var result = "<div = 'bg-success'>Спасибо за заявку! Мы вам перезвоним!</div>"
            form.html(result);
        } else {
            form.html(msg);
        }*/

        $(ob).find("[type='text']").val("");
        $(ob).trigger("reset");
        /*result.addClass("text-success bg-success").removeClass("text-danger bg-danger").text("Ваша заявка принята!");*/

        /*setTimeout(function () {
        	$.fancybox.close();
        	result.addClass("animated zoomInDown show").fadeIn('slow');
        }, 500);*/

        setTimeout(function () {
            //сркыть модальное окно
            /*$('#modalOrder').modal('hide');*/
            $(ob).closest(".modal").modal('hide');
            //отобразить сообщение об успехе
            $('#modalAlert-success').modal('show');
            /*$(ob).find('.form-control-feedback-message-success').addClass("flex-center");*/
            /*result.removeClass("text-danger bg-danger text-success bg-success").text("");*/
            /*$(ob).find('.submit').prop('disabled', false);*/
            yaCounter38441125.reachGoal('ORDER'); /* for Y. target */
            $(ob).find('#whichService').val(""); /* нужно заменить на класс */
            $(ob).find('.has-feedback').removeClass('has-success');
            $(ob).find('.form-control-feedback').removeClass('glyphicon-ok');
        }, 1000);

    });

    return false;
}
