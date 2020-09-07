//Popular slider
var breakpoint2 = window.matchMedia('(min-width: 1200px)');
var newsSwiper2;
var breakpointChecker2 = function() {
  if (breakpoint2.matches === true) {
    if (newsSwiper2 !== undefined) newsSwiper2.destroy(true, true);
    return;
    } else if (breakpoint2.matches === false) {
      return enableSwiper2();
    }
};

var enableSwiper2 = function() {
  newsSwiper2 = new Swiper ('.popular__slider', {
    pagination: {
      el: '.popular__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.popular__next',
      prevEl: '.popular__prev',
    },
    simulateTouch: false,
    preventClicks: false,
    preventClicksPropagation: false,
    spaceBetween: 30,
    slidesPerView: 4,
      breakpoints: {
        1022: {
          slidesPerView: 3,
        },
        766: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1,
        }
      }
  })
};

breakpoint2.addListener(breakpointChecker2);
breakpointChecker2();