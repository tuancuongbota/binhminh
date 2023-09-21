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
 if ($(".bota_factory").length) {
 $(window).scroll(function() {
    var scroll_top =  $(window).scrollTop(),
        window_h = $(window).height();
        offset_funfact = $('.bota_factory .odometer').offset().top;
        hehe = offset_funfact - window_h - 200;
        $('.bota_factory .odometer').each(function() {
          var $this = $(this),
              countTo = $this.attr('data-count');
          
          $({ countNum: $this.text()}).animate({
            countNum: countTo
          },

          {
            duration: 1500,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }

          });  
          
        });
    });
 }
});