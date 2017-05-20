"use strict";

$(function() {
    if (getPageSize()[2] < 768) {
        navbarCollapseLinkClick(".navbar-nav__item a", "#menu_main");
    }
});
