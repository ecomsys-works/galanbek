// CartFormValidation.js
export function initCartFormValidation({ 
  formSelector = '.cart-modal__form',
  parentSelector = '.input-validation',
  inputSelector = 'input[type="text"], input[type="tel"]' 
} = {}) {

  const form = document.querySelector(formSelector);
  if (!form) return console.warn('Форма не найдена для валидации');

  const inputs = Array.from(form.querySelectorAll(inputSelector));
  if (!inputs.length) return;

  const errorClass = 'input-error';

  // ---------- Обработка сабмита ----------
  form.addEventListener('submit', (e) => {
    let hasError = false;

    inputs.forEach(input => {
      const parent = input.closest(parentSelector);
      if (!parent) return;

      if (!input.value.trim()) {
        parent.classList.add(errorClass); // добавляем класс родителю
        hasError = true;
      }
    });

    if (hasError) {
      e.preventDefault(); // блокируем сабмит, если есть пустые поля
    }
  });

  // ---------- Снятие ошибки при вводе ----------
  inputs.forEach(input => {
    const parent = input.closest(parentSelector);
    if (!parent) return;

    input.addEventListener('input', () => {
      if (input.value.trim()) {
        parent.classList.remove(errorClass); // снимаем класс с родителя
      }
    });
  });
}