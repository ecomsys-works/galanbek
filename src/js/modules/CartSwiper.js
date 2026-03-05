export function cartSwiper() {
    const additionalSwiper = new Swiper('.cart-additional__slider', {

        slidesPerView: 2,
        spaceBetween: 20,

        breakpoints: {

            // мобилка
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
                grid: {
                    rows: 2,
                    fill: 'row'
                }
            },

            // планшет
            620: {
                slidesPerView: 1.75,
                spaceBetween: 20,
                grid: {
                    rows: 1
                }
            },

            // десктоп
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
                grid: {
                    rows: 1
                }
            }

        }

    });
    return additionalSwiper;
}