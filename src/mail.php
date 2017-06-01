<?php
    error_reporting(-1);
    header('Content-Type: text/html; charset= utf-8');

    $error = false;
    $email = "";

    /* Объявление переменной с какой секции заявка */
    $whichService = "";

    /* Объявление переменных UTM меток */
    $utm_source__value = "\n\nИсточника трафика: ";
    $utm_term__value   = "\nКлючевое слово: ";


    if (!empty($_POST["bsName"])) {
        $name = substr(htmlspecialchars(trim($_POST["bsName"])), 0, 250);
    } /*else {
        $error = true;
    }*/

    if (!empty($_POST["bsEmail"])) {
        $email = substr(htmlspecialchars(trim($_POST["bsEmail"])), 0, 255);
    } /*else {
        $error = true;
    }*/

    if (!empty($_POST["bsPhone"])) {
        $phone = substr(htmlspecialchars(trim($_POST["bsPhone"])), 0, 50);
    } else {
        $error = true;
    }

    if (!empty($_POST["whichService"])) {
        $whichService = substr(htmlspecialchars(trim($_POST["whichService"])), 0, 255);
    }

    /* Получение значений UTM из формы заявки */

    if (!empty($_POST["utm_source"])) {
        $utm_source         = htmlspecialchars(trim($_POST["utm_source"]));
        $utm_source__value .= $utm_source;
    }

    if (!empty($_POST["utm_term"])) {
        $utm_term           = htmlspecialchars(trim($_POST["utm_term"]));
        $utm_term__value   .= $utm_term;
    }

    /* -------------------------- */
    /* Получение UTM меток */
    /*$utm_source__value .= UTMTags::getUtm(UTMTags::UTM_SOURCE);
    $utm_term__value   .= UTMTags::getUtm(UTMTags::UTM_TERM);*/

    /* -------------------------- */

    if (!$error) {
        $recepient = "client@potoloki.by";
        $sitename  = "potoloki.by";
        $pagetitle = "Новая заявка с сайта \"$sitename\"";

        $message   = "
                      Имя: $name \n
                      Телефон: $phone \n
                      Email: $email \n\n
                      Куда кликнул: $whichService \n\n
                      $utm_source__value \n
                      $utm_term__value
                     ";

        mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
    } else {
        echo "<p class='bg-danger text-danger'>Произошла ошибка! Заполните правильно все поля!</p>";
    }
?>
