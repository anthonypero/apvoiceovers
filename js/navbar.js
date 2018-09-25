// Navbar Functionality

$(window).ready(function() {

  $('#navClick').click(function() {

    if ($(this).scrollTop() < 300) {
        $('#navbar').removeClass("navbar-hidden");
    }

    $('#navClick').toggleClass("unclicked");
    $('#navClick').toggleClass("clicked");
    $('.main-navigation').toggleClass("menu-hidden");
    $('.main-navigation').toggleClass("menu-not-hidden");

  });
});

// $('*').click(function() {
//   if ($('.main-navigation').hasClass("menu-not-hidden")) {
//     $('.main-navigation').toggleClass("menu-hidden");
//     $('.main-navigation').toggleClass("menu-not-hidden");
//   }
//
// });

// Desktop Navbar

$(window).scroll(function() {

    if ($(this).scrollTop() > 300){
        $('#navbar').removeClass("navbar-hidden");
    }
    else{
        $('#navbar').addClass("navbar-hidden");
    }

    if ($(this).scrollTop() > 0){
      $('#navbar').addClass("fixed");
    }
    else{
        $('#navbar').removeClass("fixed");
    }
});

// Mobile navbar


// LightSlider

// Adjusts the ID of the lightslider based on viewport size to set the number of items in the carosel

$(window).ready(function(){
    var win = $(this);
    if (win.width() > 1999) {

      $('#light-slider').attr("id", "light-slider-xl");

    }
    else if (win.width() > 1599) {

      $('#light-slider').attr("id", "light-slider-hd");

    }
    else if (win.width() > 1199) {

      $('#light-slider').attr("id", "light-slider-sd");

    }
    else if (win.width() > 799) {

      $('#light-slider').attr("id", "light-slider-tl");

    }
    else if (win.width() > 499) {

      $('#light-slider').attr("id", "light-slider-tp");

    }
    else {
      $('#light-slider').attr("id", "light-slider-ph");
    }

});
