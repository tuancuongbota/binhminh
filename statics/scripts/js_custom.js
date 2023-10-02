$(document).ready(function(){
      AOS.init({
         startEvent: 'load',
         easing: 'ease-out-back',
         duration: 1800,
         once: true,
         disable: 'mobile'
      });
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
   if ($(".logo-slider").length) {
    var swiperlogo = new Swiper('.logo-slider', {
        slidesPerView: 5,
        grabCursor: true,
        roundLengths: true,
        slideToClickedSlide: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.logo-slider .swiper-button-next',
            prevEl: '.logo-slider .swiper-button-prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20
            }
        }
    });
if ($(".news-slider").length) {
   var swipernews = new Swiper('.news-slider', {
       slidesPerView: 3,
       grabCursor: true,
       roundLengths: true,
       slideToClickedSlide: false,
       autoplay: {
           delay: 3000,
           disableOnInteraction: false,
       },
       loop: true,
       speed: 1000,
       spaceBetween: 0,
       pagination: false,
       navigation: {
           nextEl: '.news-slider .swiper-button-next',
           prevEl: '.news-slider .swiper-button-prev',
       },
       breakpoints: {
           300: {
               slidesPerView: 1
           },
           500: {
               slidesPerView: 2
           },
           640: {
               slidesPerView: 2
           },
           768: {
               slidesPerView: 2
           },
           991: {
               slidesPerView: 2
           },
           1200: {
               slidesPerView: 3
           }
       }
   });
}
 if ($(".odometer").length) {
   $('.odometer').counterUp({ delay: 20, time: 2000 });
 }
 if($('.slick-tab-product').length){
   $('.slick-tab-product').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      infinite: true,
      rows:2,
      responsive: [
         {
               breakpoint: 992,
               settings: {
                  slidesToShow: 3,
               }
         },
         {
               breakpoint: 768,
               settings: {
                  slidesToShow: 2,
               }
         },
      ]
   });
 }
 if($('.history_slider').length){
   $('.history_slider').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       fade: true,
       infinite: true,
       asNavFor: '.history_slider_date',
       cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
       speed: 1000,
       responsive: [
           {
               breakpoint: 992,
               settings: {
                   adaptiveHeight: true
               }
           },
       ]
   });
   $('.history_slider_date').slick({
       slidesToShow: 4,
       slidesToScroll: 1,
       asNavFor: '.history_slider',
       dots: false,
       arrows: false,
       focusOnSelect: true,
       infinite: true,
       responsive: [
           {
               breakpoint: 992,
               settings: {
                   slidesToShow: 3,
               }
           },
           {
               breakpoint: 768,
               settings: {
                   slidesToShow: 2,
               }
           },
       ]
   });
}

backtotop();
fxheader();

if ($(".product-tab").length) {
   $('.product-tab ul li').click(function(){
      activeTab(this);
      return false;
   });
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
    if ($(".bota_header_search_mb").length) {
        $('.bota_header_search_mb').on('click', function(){
            $('.bota_search').toggleClass('active');
        });
    }
    if ($(".product-thumbs-slider").length) {
      var thumberslider = new Swiper('.product-thumbs-slider', {
         spaceBetween: 0,
         lazy: true,
         hashNavigation: true,
         pagination: {
            el: ".swiper-pagination",
          },
      });
   }
   if ($("#lightgallery").length) {
      $("#lightgallery").lightGallery({
         thumbnail: false
      }); 
   }
   if ($(".bota_job_empoyer_remore").length) {
      $('.bota_job_empoyer_remore .read-more').each(function () {
         $(this).click(function (e) {
            e.preventDefault();
            $(this).closest('.bota_job_empoyer_des').addClass("active");
         });
      });
      $('.bota_job_empoyer_remore .read-less').each(function () {
         $(this).click(function (e) {
            e.preventDefault();
            $(this).closest('.bota_job_empoyer_des').removeClass("active");
         });
      });
      checkHeight();
   }
   
});
function activeTab(obj){
   $('.product-tab ul li').removeClass('active');
   $(obj).addClass('active');
   var id = $(obj).attr('data-tab');
   $('.tab-content').removeClass('active');
   $(id).addClass('active');
}
function fxheader() {
    $(window).on('scroll', function () {
    var sticky = $('.bota_header'),
    scroll = $(window).scrollTop();
    if (scroll >= 300) sticky.addClass('fixed-header');
    else sticky.removeClass('fixed-header');
    });
};

function backtotop() { 
	$(window).scroll(function() {
		$(this).scrollTop() > 200 ? $('.back-to-top').addClass('show') : $('.back-to-top').removeClass('show')
	});
	$('.back-to-top').click(function() {
		return $("body,html").animate({
			scrollTop: 0
		}, 800), !1
});
} window.backtotop=backtotop;

function isotopeArrange() {
    $(".grid-layout > .isotope").find("audio, video").each(function (index) {
       $(this)[0].play();
       $(this)[0].pause()
    })
 }
 function checkHeight() {
   var h1 = $(".bota_job_info_employer .bota_job_empoyer_text").height();
   if (h1 > 215) {
      $(".bota_job_info_employer .bota_job_empoyer_des").addClass("more-less");
   }
}
$(window).resize(function () {
   checkHeight();
});