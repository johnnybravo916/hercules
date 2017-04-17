//CUSTOM FUNCTIONS
//HEIGHT
if ($( ".jsHeight" ).length > 0) { 
  var fullHeight = $(window).height();
  $('.jsHeight').css("min-height",fullHeight);  
}     
//FIXED HEADER
  $(window).scroll(function() {    
    var fullHeight = $(window).height();
    var scroll = $(window).scrollTop();
    if(scroll >= 300) {
        $(".header-desktop").addClass("jsMinMenu");
    } else {
        $(".header-desktop").removeClass("jsMinMenu");
    }
  });
//FLEXSLIDER 
if ($( ".slider-carousel" ).length > 0) { 
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
//FANCYBOX 
if ($('.fancybox').length > 0){
  $('.fancybox').fancybox({});
}