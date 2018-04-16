
(function(document, window, $){
   // The DOM is ready!

   // Main Image
   $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  });

  // navigator
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    draggable: true,
    centerMode: false,
    focusOnSelect: true,
    vertical: true
  });
})(document, window, jQuery);

