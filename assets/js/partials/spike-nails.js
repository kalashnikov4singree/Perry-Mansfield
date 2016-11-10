/**
 * Created by v1pboy on 02.11.16.
 */
$(document).ready(function () {
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    mobileMenu();
    openSearch();
    addClassMenu();
});
$(window).on("load",function(){
    scrollOurStory();
});
$(window).resize(function () {
    addClassMenu()
});
function openSearch() {
    $(".btn-search-open").on("click", function () {
        $(".search-block .btn-search-open").toggleClass("active-search");
        $(".search-block .search-field").toggleClass("active-search");
    })
}
function scrollOurStory() {
    $(".our-story .text").mCustomScrollbar({
        theme:"3d-thick",
        scrollButtons:{
            enable: "true",
            scrollType: "string"
        }
    });
}
function mobileMenu() {
    var humburgerMenu = $(".humberger-menu");
    humburgerMenu.on("click",function () {
        $(".header .header-menu").slideToggle("slow");
    });
}
function addClassMenu() {
    var windowWidth = $(window).width();
    $('.header-menu .dropdown').hover(function() {
        $(this).addClass("open");
        $(this).find('.header-block .dropdown-menu').stop(true, true).delay(200).fadeIn(0);
    }, function() {
        $(this).removeClass("open");
        $(this).find('.header-block .dropdown-menu').stop(true, true).delay(200).fadeOut(0);
    });
    $(".header-menu ul>.dropdown>a").each(function () {
        var link = $(this).attr('href');
        var jsVoid = 'javascript:void(0);';
        var pageLink = $(this).data('url');
        if (!pageLink){
            $(this).data('url',link);
        }
        if (windowWidth >= 767){
            $(this).attr('href', pageLink);
        }
        else{
            $(this).attr('href' , jsVoid);
        }
    });
}