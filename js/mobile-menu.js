//Mobile menu
$('.menu__btn').click(function() {
  $('.mobile--menu').addClass('mobile--opened');
});

$('.mobile__close').click(function() {
  $('.mobile').removeClass('mobile--opened');
});

$('.mobile__nav-btn').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('mobile__nav-btn--up');
});

$('.nav__close').click(function() {
  $('.mobile').removeClass('mobile--opened');
});
