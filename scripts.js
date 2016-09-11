(function($){
    "use strict";

    $(window).load(function() {

        // Preloader
        $('.loader').fadeOut();
        $('.loader-mask').delay(350).fadeOut('slow');

        $(window).trigger("resize");
        initMasonry();

    });

    $(document).ready(function(){

        $(window).trigger("resize");
        initOnepagenav();
        
    });   


    /* Full Height Container / Dropdowns
    -------------------------------------------------------*/       
  
    $(window).resize(function(){
        
        container_full_height_init();
            
        var windowWidth = $(window).width();
        if (windowWidth <= 974) {
            $('.dropdown-toggle').attr('data-toggle', 'dropdown');
            $('.navigation').removeClass("sticky offset scrolling");
            $('.nav-type-4').find(".local-scroll-no-offset").removeClass('local-scroll-no-offset').addClass("local-scroll");
        }
        if (windowWidth > 974) {
            $('.dropdown-toggle').removeAttr('data-toggle', 'dropdown');
            $('.dropdown').removeClass('open');
            $('.nav-type-4').find(".local-scroll").removeClass('local-scroll').addClass("local-scroll-no-offset");
        }

        /* Mobile Menu Resize
        -------------------------------------------------------*/
        $(".navbar .navbar-collapse").css("max-height", $(window).height() - $(".navbar-header").height() );
        
    });


    /* Sticky Navigation
    -------------------------------------------------------*/
    $(window).scroll(function(){
        if ($(window).scrollTop() > 50 && $('.navbar-toggle').is(":hidden")){
            $('.navigation-overlay, .navigation').addClass("sticky");
            $('.logo-wrap').addClass("shrink");
            $('.nav-left .logo-wrap').removeClass("shrink");
        } else {
            $('.navigation-overlay, .navigation').removeClass("sticky");
            $('.logo-wrap').removeClass("shrink");
        }

        if ($(window).scrollTop() > 200 && $('.navbar-toggle').is(":hidden")){
            $('.navigation').addClass("offset");
        } else {
            $('.navigation').removeClass("offset");
        }

        if ($(window).scrollTop() > 500 && $('.navbar-toggle').is(":hidden")){
            $('.navigation').addClass("scrolling");
        } else {
            $('.navigation').removeClass("scrolling");
        }
    });
    

    /* Full screen Navigation
    -------------------------------------------------------*/
    $('#nav-icon, .overlay-menu').on("click", function(){
        $('#nav-icon').toggleClass('open');
        $('#overlay').toggleClass('open');
    });


    // Closes the Responsive Menu on Menu Item Click
    function initOnepagenav(){
        
        $('.navigation-overlay .navbar-collapse ul li a, .nav-type-4 .navbar-collapse ul li a').on('click',function() {
            $('.navbar-toggle:visible').click();
        });

        // Smooth Scroll Navigation
        $('.local-scroll').localScroll({offset: {top: -60},duration: 1500,easing:'easeInOutExpo'});
        $('.local-scroll-no-offset').localScroll({offset: {top: 0},duration: 1500,easing:'easeInOutExpo'});
    }


    /* Search
    -------------------------------------------------------*/

    $('.search-trigger').on('click',function(e){
        e.preventDefault();
        $('.search-wrap').animate({opacity: 'toggle'},500);
        $('.nav-search').addClass("open");
        $('.search-wrap .form-control').focus();
    });

    $('.search-close').on('click',function(e){
        e.preventDefault();
        $('.search-wrap').animate({opacity: 'toggle'},500);
        $('.nav-search').removeClass("open");
    });

    function closeSearch(){
      $('.search-wrap').fadeOut(200);
      $('.nav-search').removeClass("open");
    }
      
    $(document.body).on('click',function(e) {
        closeSearch();
    });

    $(".search-wrap, .search-trigger").on('click',function(e) {
        e.stopPropagation();
    });


    /* Bootstrap Dropdown Navigation
    -------------------------------------------------------*/
    "use strict";!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function b(b){this.$element=a(b),this.$main=this.$element.closest(".dropdown, .dropup, .btn-group"),this.$menu=this.$element.parent(),this.$drop=this.$menu.parent().parent(),this.$menus=this.$menu.siblings(".dropdown-submenu");var d=this.$menu.find("> .dropdown-menu > "+c);this.$submenus=d.filter(".dropdown-submenu"),this.$items=d.not(".dropdown-submenu"),this.init()}var c=":not(.disabled, .divider, .dropdown-header)";return b.prototype={init:function(){this.$element.on({"click.bs.dropdown":this.click.bind(this),keydown:this.keydown.bind(this)}),this.$menu.on("hide.bs.submenu",this.hide.bind(this)),this.$items.on("keydown",this.item_keydown.bind(this)),this.$menu.nextAll(c+":first:not(.dropdown-submenu)").children("a").on("keydown",this.next_keydown.bind(this))},click:function(a){a.stopPropagation(),this.toggle()},toggle:function(){this.$menu.hasClass("open")?this.close():(this.$menu.addClass("open"),this.$menus.trigger("hide.bs.submenu"))},hide:function(a){a.stopPropagation(),this.close()},close:function(){this.$menu.removeClass("open"),this.$submenus.trigger("hide.bs.submenu")},keydown:function(a){if(/^(32|38|40)$/.test(a.keyCode)&&a.preventDefault(),/^(13|32)$/.test(a.keyCode))this.toggle();else if(/^(27|38|40)$/.test(a.keyCode))if(a.stopPropagation(),27==a.keyCode)this.$menu.hasClass("open")?this.close():(this.$menus.trigger("hide.bs.submenu"),this.$drop.removeClass("open").children("a").trigger("focus"));else{var b=this.$main.find("li:not(.disabled):visible > a"),c=b.index(a.target);if(38==a.keyCode&&0!==c)c--;else{if(40!=a.keyCode||c===b.length-1)return;c++}b.eq(c).trigger("focus")}},item_keydown:function(a){27==a.keyCode&&(a.stopPropagation(),this.close(),this.$element.trigger("focus"))},next_keydown:function(a){if(38==a.keyCode){a.preventDefault(),a.stopPropagation();var b=this.$drop.find("li:not(.disabled):visible > a"),c=b.index(a.target);b.eq(c-1).trigger("focus")}}},a.fn.submenupicker=function(c){var d=this instanceof a?this:a(c);return d.each(function(){var c=a.data(this,"bs.submenu");c||(c=new b(this),a.data(this,"bs.submenu",c))})}});
    $('.dropdown-submenu > a').submenupicker();


    /* Mobile Navigation 
    -------------------------------------------------------*/
    $('.dropdown-toggle').on('click', function(e){
        e.preventDefault();
    });


    /* IE Detect
    -------------------------------------------------------*/
    if(Function('/*@cc_on return document.documentMode===10@*/')()){ $("html").addClass("ie"); }

    /* Mobile Detect
    -------------------------------------------------------*/
    if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
       $("html").addClass("mobile");
       $('.dropdown-toggle').attr('data-toggle', 'dropdown');
    }
    else {
        $("html").removeClass("mobile");
    }

})(jQuery);

/* Full Height Container
-------------------------------------------------------*/

function container_full_height_init(){
    (function($){
        $(".container-full-height").height($(window).height());
    })(jQuery);
}