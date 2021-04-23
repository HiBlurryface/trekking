// Catalog

$(function () {
  parameters = {
    duration: 500,
  }
  $(document).ready(function () {
    $("input#men").change(function () {
      if ($(this).prop('checked')) {
        $('.men1').slideDown(parameters);
      } else {
        $('.men1').slideUp(parameters);
      }
    });
  })
  $(document).ready(function () {
    $("input#women").change(function () {
      if ($(this).prop('checked')) {
        $('.women1').slideDown(parameters);
      } else {
        $('.women1').slideUp(parameters);
      }
    });
  })
  $(document).ready(function () {
    $("input#child").change(function () {
      if ($(this).prop('checked')) {
        $('.child1').slideDown(parameters);
      } else {
        $('.child1').slideUp(parameters);
      }
    });
  })
});

// Size

$(document).ready(function () {
  $('.size__open').click(function (event) {
    if ($(event.target).hasClass('active')) {
      $('.size__menu, .size__open').removeClass('active');
    } else {
      $('.size__menu, .size__open').removeClass('active');
      $(event.target).addClass('active');
      $(event.target).parent().find('.size__menu').addClass('active');
    }
  })
})

// Slider 

new Swiper('.catalog', {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  simulateTouch: false,
  breakpoints: {
    1441: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    690: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  }
});