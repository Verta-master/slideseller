//Menu
$('.menu__btn').click(function() {
  event.preventDefault();
  $('.nav').slideDown();
});

$('.nav__close').click(function() {
  $('.nav').slideUp();
});

if (window.innerWidth < 1200) {
  $('.nav__close-back').click(function() {
    $('.nav__columns').removeClass('nav__columns--opened');
    $('.nav__point').removeClass('nav__point--opened');
    $('.nav__close').removeClass('nav__close--hide');
    $(this).removeClass('nav__close-back--show');
  });
} else {
  $('.nav__close-back').click(function() {
    $('.nav').slideUp();
  });
}

$('.nav__mobile').click(function() {
  $('.nav__columns').addClass('nav__columns--opened');
  $(this).next().addClass('nav__point--opened');
  $('.nav__close-back').addClass('nav__close-back--show');
  $('.nav__close').addClass('nav__close--hide');
});

// Scrollbar 
  $('.modal__wrap').niceScroll();
  $('.nav__wrap .wrapper').niceScroll();
  $('.nav__sublist').niceScroll();
