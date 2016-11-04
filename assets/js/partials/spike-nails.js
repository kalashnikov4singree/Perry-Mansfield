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
});
$(window).on("load",function(){
    scrollOurStory();
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