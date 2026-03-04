export function ProductCounter(options) {

    const form = document.getElementById(options?.id) || document.getElementById('productForm');
    if (!form) return;

    form.addEventListener('click', (e) => {

        const button = e.target.closest('[data-action]');
        if (!button) return;

        const input = form.querySelector('.product-info__quantity-input');
        if (!input) return;

        const action = button.dataset.action;

        if (action === 'plus') {
            input.value = +input.value + 1;
        }

        if (action === 'minus') {
            if (+input.value > 1) {
                input.value = +input.value - 1;
            }
        }
    });
}