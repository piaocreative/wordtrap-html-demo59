$( document ).ready( function() {

  $('.banners').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:true,
    prevArrow: $('.banner-prev'),
    nextArrow: $('.banner-next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          arrows:false,
        }
      },
    ]
  });

  $('.new-arrivals').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:true,
    prevArrow: $('.new-arrival-prev'),
    nextArrow: $('.new-arrival-next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          arrows:false,
        }
      },
    ]
  });

  $('.bestsellers').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:true,
    prevArrow: $('.bestseller-prev'),
    nextArrow: $('.bestseller-next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          arrows:false,
        }
      },
    ]
  });

  $('.collections').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:true,
    prevArrow: $('.collection-prev'),
    nextArrow: $('.collection-next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          arrows:false,
        }
      },
    ]
  });

  $('.posts').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:true,
    prevArrow: $('.post-prev'),
    nextArrow: $('.post-next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          arrows:false,
        }
      },
    ]
  });

  $('.about-slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:true,
    prevArrow: $('.about-slick-prev'),
    nextArrow: $('.about-slick-next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          arrows:false,
        }
      },
    ]
  });

  $('.top-product').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    arrows:true,
    prevArrow: $('.top-product-prev'),
    nextArrow: $('.top-product-next'),
    responsive: [
      {
        breakpoint: 1780,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows:false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows:false,
        }
      },
    ]
  });

  function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
      var endTime = new Date("29 Octorber 2021 9:56:00 GMT+01:00");			
        endTime = (Date.parse(endTime) / 1000);
  
        var now = new Date();
        now = (Date.parse(now) / 1000);
  
        var timeLeft = endTime - now;
  
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
  
        $("#days").html("<span>"+days+"</span>" + "<p>Days</p>");
        $("#hours").html("<span>"+hours+"</span>" + "<p>Hours</p>");
        $("#minutes").html("<span>"+minutes+"</span>" + "<p>Minutes</p>");
        $("#seconds").html("<span>"+seconds+"</span>" + "<p>Seconds</p>");		
  
    }

    setInterval(() => {
        makeTimer()
    }, 1000);

});