$(document).ready(function(){
   $('header.menuBar .content nav').meanmenu({
      meanScreenWidth:"768",
      meanMenuClose:"X",
      meanMenuOpen:"<span></span><span></span><span></span>" ,
      meanMenuCloseSize:"20px",
   });

   $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive:{
         0:{
            dots:true,
            nav:false,
         },
         769:{
            nav:true,
            dots:false,
         }
      }
   });
   
 });