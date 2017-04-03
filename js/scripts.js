//CUSTOM FUNCTIONS
//FLEXSLIDER
if ( $( ".slider-carousel" ).length > 0 ) { 
  $('.slider-carousel .flexslider').flexslider({
    animation: 'slide',
    slideshow: false,
    itemWidth: 300,
    itemMargin: 30,
    minItems: 1,
    maxItems: 4,  
    animationLoop: false,      
      start: function(slider){
        $('.slider-carousel .flexslider').removeClass('js-preloader');
      }
  });
}     