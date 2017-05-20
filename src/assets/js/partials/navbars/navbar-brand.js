"use strict";

$(function() {
    if (getPageSize()[2] < 768) {
        navbarCollapseLinkClick(".navbar-brand", "#menu_main");
    }
});
