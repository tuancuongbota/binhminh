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
 function isotopeArrange() {
    $(".grid-layout > .isotope").find("audio, video").each(function (index) {
       $(this)[0].play();
       $(this)[0].pause()
    })
 }
 if ($(".grid-layout > .isotope").length) {
    $(".grid-layout > .isotope").each(function () {
       var c_elem = $(this);
       var parent_width = c_elem.width();
       var gutter_size = c_elem.data("gutter");
       var grid_cols = c_elem.data("cols");
       var layoutmode = c_elem.is('[data-layout]') ? c_elem.data("layout") : '';
       layoutmode = layoutmode ? layoutmode : 'masonry';
       if ($(window).width() < 768) grid_cols = 1;
       var net_width = Math.floor((parent_width - (gutter_size * (grid_cols - 1))) / grid_cols);
       c_elem.find("article").css({
          'width': net_width + 'px',
          'margin-bottom': gutter_size + 'px'
       });
       c_elem.find(".owl-carousel").each(function () {
          factrieOwlSettings($(this))
       });
       c_elem.find("audio").each(function (index) {});
       c_elem.find("video").each(function (index) {
          $(this).attr("src", $(this).find("source").attr("src"));
          $(this).css({
             'height': '200px'
          })
       });
       var filter = "*";
       var isot_parent = c_elem.parent(".grid-layout");
       if ($(isot_parent).attr("data-filter-stat") == 0) {
          filter = $(isot_parent).attr("data-first-cat") ? "." + $(isot_parent).attr("data-first-cat") : '*'
       }
       c_elem.imagesLoaded(function () {
          c_elem.isotope({
             itemSelector: 'article',
             layoutMode: layoutmode,
             filter: filter,
             masonry: {
                gutter: gutter_size
             },
             fitRows: {
                gutter: gutter_size
             }
          })
       });
       c_elem.children("article").addClass("grid-visible");
       if ($(".portfolio-filter").length) {
          $(".portfolio-filter-item").on('click', function () {
             $(this).parents("ul.nav").find("li").removeClass("active");
             $(this).parent("li").addClass("active");
             var filterValue = $(this).attr("data-filter");
             c_elem = $(this).parents(".portfolio-wrapper").find(".grid-layout .isotope");
             c_elem.isotope({
                filter: filterValue
             });
             return !1
          })
       }
       $(window).resize(function () {
          setTimeout(function () {
             grid_cols = c_elem.data("cols");
             if ($(window).width() < 768) grid_cols = 1;
             var parent_width = c_elem.width();
             net_width = Math.floor((parent_width - (gutter_size * (grid_cols - 1))) / grid_cols);
             c_elem.find("article").css({
                'width': net_width + 'px'
             });
             c_elem.imagesLoaded(function () {
                var $isot = c_elem.isotope({
                   itemSelector: 'article',
                   masonry: {
                      gutter: gutter_size
                   }
                });
                $isot.on('arrangeComplete', isotopeArrange)
             })
          }, 200)
       });
    })
 }
});