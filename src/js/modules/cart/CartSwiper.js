// CartAdditionalSwiper.js
export function cartSwiper() {
  const additionalSwiper = new Swiper('.cart-additional__slider', {
    slidesPerView: 2,
    spaceBetween: 20,

    navigation: {
      nextEl: '.cart-additional__arrow--next',
      prevEl: '.cart-additional__arrow--prev',
    },

    breakpoints: {
      0: { // мобилка
        slidesPerView: 1,
        spaceBetween: 15,
        grid: { rows: 2, fill: 'row' }
      },
      620: { // планшет
        slidesPerView: 1.75,
        spaceBetween: 20,
        grid: { rows: 1 }
      },
      768: { // десктоп
        slidesPerView: 2,
        spaceBetween: 20,
        grid: { rows: 1 }
      }
    }
  });

  return additionalSwiper;
}