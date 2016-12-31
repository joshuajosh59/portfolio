(function($) {

/* --------------------------------------------------
 ## CountTo init
-------------------------------------------------- */
if (jQuery().countTo) {
    $('.counter-wrap').each(function(){
        var item = $(this);
        new Waypoint({
            element: item,
            handler: function(direction) {
                item.find('.counter-value').countTo({
                    from: 0,
                    speed: 2500,
                    refreshInterval: 25
                });
                this.destroy();
            },
            offset: 'bottom-in-view'
        });
    });
}


$(document).ready(function() {


$('html').removeClass('no-js');


/* ---------------------------------------------------------------------

 # JS PLUGINS

--------------------------------------------------------------------- */

/* --------------------------------------------------
 ## Ekko lightbox init
-------------------------------------------------- */
if (jQuery().ekkoLightbox) {
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });
}

/* --------------------------------------------------
 ## Wow init
-------------------------------------------------- */
new WOW().init();

/* --------------------------------------------------
 ## Material init
-------------------------------------------------- */
$.material.init();



/*$('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    autoHeight:true
}); */



/* --------------------------------------------------
 ## Page Preloader
-------------------------------------------------- */    
function pagePreloader() {
    $(window).on('load', function() {
        var $preloader = $('#preloader'),
            $spinner = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut(800);
    });
}

pagePreloader();

/* --------------------------------------------------
 ## News Section Carousel
-------------------------------------------------- */
function newsCarousel() {
    $('#news-carousel').owlCarousel({
        loop:   false,
        margin: 30,
        stagePadding: 10,
        nav:    false,
        responsive:{
            0:{
                items: 1
            },
            992:{
                items: 2
            },
            1200:{
                items: 3
            }
        }
    });
}

newsCarousel();



/* --------------------------------------------------
 ## Gallery Post Format
-------------------------------------------------- */
function galleryPostFormat() {
    $('.post-format-gallery .owl-carousel').owlCarousel({
        items:      1,
        loop:       true,
        nav:        false,
        dots:       false,
    });

   owl = $('.post-format-gallery .owl-carousel').owlCarousel();
    $('.carouselNext').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.carouselPrev').click(function() {
        owl.trigger('prev.owl.carousel');
    });
}

galleryPostFormat();

/* --------------------------------------------------
 ## Video Post Format
-------------------------------------------------- */
function videoPostFormat() {
    $('.post-format-video').each(function(){
        var player = $(this).find('.player');
            src = player.data('background-video'),
            img = player.data('fallback-image'),
            section = player.parent('.video-wrap');
        if( !device.tablet() && !device.mobile() ) {
            player.mb_YTPlayer({
                videoURL    : src,
                containment : section,
                autoPlay    : true, 
                mute        : true, 
                startAt     : 0, 
                opacity     : 1,
                showControls: true
            });
        } else {
            player.addClass('fallback-image').css('background-image','url("'+img+'")');
        }
    });
}

videoPostFormat();

/* --------------------------------------------------
 ## Video Background
-------------------------------------------------- */
function videoBg() {
    $('.bg-video').each(function(){
        var player = $(this).find('.player');
            src = player.data('background-video'),
            img = player.data('fallback-image'),
            section = player.parent('.bg-video'),
            icon = section.find('.play-icon');
       if( !device.tablet() && !device.mobile() ) {
            player.mb_YTPlayer({
                videoURL    : src,
                containment : section,
                autoPlay    : true, 
                mute        : true, 
                startAt     : 0, 
                opacity     : 0.3
            });
        } else {
            section.addClass('fallback-image').css('background-image','url("'+img+'")');
            icon.text('play_arrow').wrap('<a class="btn btn-fab" href="'+src+'" target="_blank"></a>');
        }
    });
}

videoBg();

/* --------------------------------------------------
 ## Image Background
-------------------------------------------------- */
function imageBg() {
    $('.bg-image').each(function(){
        var src = $(this).data('bg-image'),
            pos = $(this).data('bg-position');
        $(this).css('background-image','url("'+src+'")');
        $(this).css('background-position',pos);
    });
}

imageBg();

/* --------------------------------------------------
 ## Navigation
-------------------------------------------------- */
function onepageNav() {
    var $body     = $(document.body),
        navHeight = $('.navbar').outerHeight(true);
    $body.scrollspy({
        target: '.navbar',
        offset: navHeight
    });
    $('.navbar-menu a[href*="#"]:not([href="#"]), .anchor-link').click(function() {
        $('.navbar-menu').removeClass('in');
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                scrollTop: target.offset().top -navHeight+21
                }, 1000);
                return false;
            }
        }
    });
}

onepageNav();

/* --------------------------------------------------
 ## Back link
-------------------------------------------------- */
function backLink() {
    $('.back-link').click(function(){
        parent.history.back();
        return false;
    });
}

backLink();

/* --------------------------------------------------
 ## Search overlay
-------------------------------------------------- */
function searchOverlay(){
    $('.search-toggle').click(function(){
        $('.search-overlay, #searchForm').removeClass('hidden').addClass('animated zoomIn');
        return false;
    });
    $('.search-overlay .closer').click(function(){
        $('.search-overlay, #searchForm').addClass('animated zoomOut');
        setTimeout(function(){
            $('.search-overlay, #searchForm').removeClass('animated zoomIn zoomOut').addClass('hidden');
        },200);
    });
}

searchOverlay();

/* --------------------------------------------------
 ## Scrolltop
-------------------------------------------------- */
function scrollTop() {
    var scrollTopBtn = $('#scrollTop');
    $(window).on('load resize scroll', function() {
        if( $(this).scrollTop() > 900 ) {
            scrollTopBtn.addClass('active');
        } else {
            scrollTopBtn.removeClass('active');
        }
    }); 
    scrollTopBtn.click(function(){
        $(this).removeClass('active');
        $('body,html').animate({ 
            scrollTop: 0 
        }, 800);
        $('.navbar-nav li').removeClass('active');
        return false;
    });
}

scrollTop();

/* --------------------------------------------------
 ## Navbar Alt
-------------------------------------------------- */
function navbarAlt() {
    var navbar = $('#navbar');
    if( navbar.hasClass('navbar-fixed-top') ) {
        $(window).on('load resize scroll', function () {
            if( $(this).scrollTop() > 10 ) {
                navbar.addClass('navbar-alt');
            } else {
                navbar.removeClass('navbar-alt');
            }
        });
    }
}

navbarAlt();

/* --------------------------------------------------
 ## Navbar Toggle
-------------------------------------------------- */
function sidenavToggle() {
    $('.navbar-toggle').click(function(){
        $('.navbar-sider').addClass('is-open');
        $('body').css('overflow','hidden');
        $('.sidenav-overlay').fadeIn(400);
        $('.navbar-menu a').click(function(){
            $('.navbar-sider').removeClass('is-open');
            $('body').css('overflow','scroll');
            $('.sidenav-overlay').fadeOut(400); 
        });
        $('.sidenav-overlay').click(function(){
            $('.navbar-sider').removeClass('is-open');
            $('body').css('overflow','scroll');
            $(this).fadeOut(400);
        }); 
    });
    
}

sidenavToggle();

/* --------------------------------------------------
 ## Card Reveal
-------------------------------------------------- */
function cardReveal() {
    $('.card.reveal').each(function(){
        var trigger = $(this).find('.activator'),
            closer  = $(this).find('.closer'),
            content = $(this).find('.card-reveal');
        trigger.click(function(){
            content.addClass('active in');
            return false;
        });
        closer.click(function(){
            content.removeClass('active in');
            return false;
        });
    });
}

cardReveal();

/* --------------------------------------------------
 ## Portfolio Gallery
-------------------------------------------------- */
function portfolioGallery() {
    var $works = $('.portfolio-grid').isotope({
      itemSelector: '.portfolio-item'
    });
    $('.filter-button-group .btn').click( function(){
        $('.filter-button-group .btn').removeClass('btn-raised btn-primary');
        $(this).addClass('btn-raised btn-primary');
      var filterValue = $(this).attr('data-filter');
      $works.isotope({ filter: filterValue });
    });
}

portfolioGallery();



});
})(jQuery);