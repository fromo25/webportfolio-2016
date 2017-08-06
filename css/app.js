$(document).ready(function() {

  function menu() {
    $('.icon-open').click(function() {
    $(this).hide();
    $('.icon-close').show();
    $('.mobile-menu').animate({
      top: "45px"
    }, 200);
    $('main').animate({
      top: "150px"
    }, 200);
  })
  $('.icon-close').click(function() {
    $(this).hide();
    $('.icon-open').show();
    $('.mobile-menu').animate({
      top: "-110px"
    }, 200);
    $('main').animate({
      top: "0px"
    }, 200);
  }) 
  };

  var x = document.title;

  function intro() {
    if(x === "Fidel Romo - Portfolio"){
      setTimeout(function() {
        $('.logo-section').fadeOut();
      }, 5000);
      setTimeout(function() {
        window.location.href='graphic.html'
      }, 5500);
    }
  };

  intro();
  menu();

});