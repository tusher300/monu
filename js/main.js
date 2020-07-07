$(document).ready(function(){
    
  $('#mobile-menu').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'
});




    $('.slider-active').slick({
        infinite: true,
        arrows: false,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    $('.testimonial-active').slick({
        infinite: true,
        arrows: false,
        autoplay:true,
        dots:true,
        autoplaySpeed:3000,
        slidesToShow: 1,
        slidesToScroll: 1
      });
      $('.brand-active').slick({
        infinite: true,
        arrows: false,
        autoplay:true,
        dots:false,
        autoplaySpeed:3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 321,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

    
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})