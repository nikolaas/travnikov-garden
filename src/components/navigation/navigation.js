$(function() {
    var mobileHeader = $('.c-navigation__header');
    var mobileHeaderBtn = $('.c-navigation__header-btn');
    var mobileMenu = $('.c-navigation__menu');
    mobileHeader.on("click", function () {
        /* Act on the event */
        mobileMenu.slideToggle(300).toggleClass('c-navigation__menu--active');
        mobileHeaderBtn.toggleClass('c-navigation__header-btn--open');
        $(this).toggleClass('c-navigation__header--active');
    });
});