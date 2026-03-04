export function handleForm(options = {}) {
  const {
    id = 'productForm',
    log = false
  } = options;

  const form = document.getElementById(id);
  if (!form) {
    console.warn('Форма не найдена:', id);
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (log) {
      console.log('--- RAW FormData ---');
      for (let [key, value] of formData.entries()) {
        console.log(key + ':', value);
      }

      console.log('Object:', data);
    }
  });
}