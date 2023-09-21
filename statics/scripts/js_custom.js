$(document).ready(function(){
    if ($(".home-slider").length) {
     var swiper = new Swiper('.home-slider', {
         autoplay: {
             delay: 3000,
             disableOnInteraction: false,
         },
         loop: true,
         speed: 1000,
         pagination: {
             el: '.home-slider .swiper-pagination',
             clickable: true,
         },
         navigation: {
             nextEl: '.home-slider .swiper-button-next',
             prevEl: '.home-slider .swiper-button-prev',
         },
     });
 }
});