$(document).ready(function() {
    $(".icon-search").on("click", function (e) {
        e.stopPropagation();
        $(".search-input").css({width: "200px", opacity: "1", "z-index": "1"});
    });
    
    $(".search-close").on("click", function (e) {
        e.stopPropagation();
        $(".search-input").css({width: "0", opacity: "0",  "z-index": "-1"});
    });
    
    $(".category").hover( function (e) {
        e.stopPropagation();
        $(".category-submenu").css({display: "block"});
    },
    function (e) {
        e.stopPropagation();
        $(".category-submenu").css({display: "none"});
    });
    
    $(".category1").hover( function (e) {
        
        $(".category1-sub").css({display: "block"});
    },
    function (e) {
        
        $(".category1-sub").css({display: "none"});
    });
    
    $(".category2").hover( function (e) {
        
        $(".category2-sub").css({display: "block"});
    },
    function (e) {
        
        $(".category2-sub").css({display: "none"});
    });
    
    var swiper = new Swiper('.tea-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });
    
    var swiper2 = new Swiper('.feedbacks-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 25,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
    
    var swiper3 = new Swiper('.partners-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
    
    $('.btn-morning').click(swiper,function(e){
        e.preventDefault();
        swiper.slideTo(0);
    });
    $('.btn-day').click(swiper,function(e){
        e.preventDefault();
        swiper.slideTo(1);
    });
    $('.btn-evening').click(swiper,function(e){
        e.preventDefault();
        swiper.slideTo(2);
    });
    $('.btn-night').click(swiper,function(e){
        e.preventDefault();
        swiper.slideTo(3);
    });
    
    (function($){
        $.fn.superToggle = function(slideToggleSelector, clbOpen, clbHide){
            return $(this).each(function(){
                $(this).on('click', function(){
                    if($(this).hasClass('open')) {
                        $(this).removeClass('open');
                        $(this).parent().removeClass('open');
                        var elem = $(this).find(slideToggleSelector);
                        $(elem).slideToggle();
                        clbHide && clbHide.call(this);
                    } else {
                        $(this).addClass('open');
                        $(this).parent().addClass('open');
                        var elem = $(this).find(slideToggleSelector);
                        $(elem).slideToggle();
                        clbOpen && clbOpen.call(this);
                    }
                });
            })
        }
    })(jQuery);
    
    $('[data-toggle-action]').each(function(){
        $(this).superToggle($(this).data('toggle-action'));
    });
});
