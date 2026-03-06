// CartSelectAll.js
export function initCartSelectAll({ selectAllSelector = '.cart-check__input[name="cart-all"]', cardCheckboxSelector = '.cart-card__wrapper .cart-check__input[name="cart-check"]' } = {}) {
  const selectAllCheckbox = document.querySelector(selectAllSelector);
  if (!selectAllCheckbox) return console.warn('Checkbox "Выбрать все" не найден');

  // Получаем все чекбоксы карточек
  const cardCheckboxes = Array.from(document.querySelectorAll(cardCheckboxSelector));
  if (!cardCheckboxes.length) return;

  // ---------- Обработка клика на "Выбрать все" ----------
  selectAllCheckbox.addEventListener('change', () => {
    const isChecked = selectAllCheckbox.checked;

    cardCheckboxes.forEach(cb => {
      cb.checked = isChecked;

      // Можно триггерить событие change, если карточки слушают
      cb.dispatchEvent(new Event('change'));
    });
  });

  // ---------- Обновление состояния "Выбрать все" если вручную кликают чекбоксы ----------
  cardCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const allChecked = cardCheckboxes.every(ch => ch.checked);
      selectAllCheckbox.checked = allChecked;
    });
  });
}