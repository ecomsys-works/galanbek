export function CartModal() {

    // === Элементы ===
    const cartModalOverlay = document.getElementById('cart-modal');
    const openCartBtn = document.getElementById('cart-btn'); // кнопка "Корзина"
    const closeCartBtn = cartModalOverlay.querySelector('.cart-modal__close');

    // открыть модалку
    openCartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cartModalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // чтобы скролл боди не мешал       
    });

    // закрыть модалку
    closeCartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cartModalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // закрыть при клике на overlay (не на модалку)
    cartModalOverlay.addEventListener('click', e => {
        if (e.target === cartModalOverlay) {
            cartModalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // counter +/-
    cartModalOverlay.querySelectorAll('.cart-card__wrapper').forEach(card => {
        const counter = card.querySelector('.cart-card__counter');
        const span = counter.querySelector('span');
        const btnPlus = counter.querySelector('button:first-child');
        const btnMinus = counter.querySelector('button:last-child');

        btnMinus.addEventListener('click', (e) => {
            e.preventDefault();
            let val = parseInt(span.textContent);
            if (val > 1) span.textContent = val - 1;
        });

        btnPlus.addEventListener('click', (e) => {
            e.preventDefault();
            let val = parseInt(span.textContent);
            span.textContent = val + 1;
        });

        // удалить товар
        card.querySelectorAll('.cart-card__remove').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();               
                card.remove();
                localStorage.clear('retailCart'); // удаляю все товары в корзине в сторе (а вообще нужно именно этот !! )
            });
        })
    });



    const allCartAdditional = document.querySelectorAll('[data-cart-additional]');

    allCartAdditional.forEach(el => {
        el.addEventListener('click', (event) => {
            event.preventDefault();      // отменяет стандартное поведение (если ссылка или кнопка)
            event.stopPropagation();     // останавливает всплытие события
            console.log('Нажали на дополнительный элемент');
        });
    });

}