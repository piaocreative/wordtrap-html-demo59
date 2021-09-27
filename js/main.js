$( document ).ready( function() {

  $('.banners').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false
        }
      },
    ]
  });

  $(".banner-prev").click(function(e) {
    e.preventDefault();
    $('.banners').slick('slickPrev');
  })
  
  $(".banner-next").click(function(e) {
    e.preventDefault();
    $('.banners').slick('slickNext');
  })

});