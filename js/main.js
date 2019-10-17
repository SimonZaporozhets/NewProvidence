$(document).ready(function(){
      
    // Кнопка "наверх"
    
     var btn = $('.scroll-btn');

      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
      });

      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });
    
    
//      carousel
    
    $('.slider-content').slick({
        nextArrow: $('.next-arrow'),
        prevArrow: $('.prev-arrow'),
        initialSlide: 1,
        asNavFor: '.slider-images',
        speed: 300,
        dots: false,
        infinite: true,
        edgeFriction: 0.25
        
    });
    
    $('.slider-images').slick({
        infinite: true,
        dots: false,
        speed: 300,
        arrows: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0px',
        edgeFriction: 0.25,
        asNavFor: '.slider-content',
        initialSlide: 1,
        responsive: [
                            {
                              breakpoint: 576,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                              }
                            }

                          ]
    });
    
    
//    burger menu 
        $('.burger-menu-icon').click(function(e) {
              $('.burger-menu').toggleClass('show-menu');

              e.preventDefault();
            });
        $('.close-menu').click(function(e) {
              $('.burger-menu').toggleClass('show-menu');

              e.preventDefault();
            });

});