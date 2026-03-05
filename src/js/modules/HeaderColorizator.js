export function headerColorizator(options = {}) {
  const pag = options?.page || 'politico-page';
  const color = options.color || '#f4f4f4';
  const sb = options.startBreakpoint ? Number(options.startBreakpoint) : 0;
  const eb = options.endBreakpoint ? Number(options.endBreakpoint) : 768;

  // Находим контейнер с айдишником страницы
  const page = document.getElementById(pag);
  if (!page) return; // если такой страницы нет — выходим

  // Находим элемент хлебных крошек
  const breadcrumbs = document.querySelector('.header');
  if (!breadcrumbs) return; // если нет хлебных крошек — выходим

  // Функция проверки ширины окна и установки цвета
  const updateBackground = () => {
    if (window.innerWidth > sb && window.innerWidth < eb) {
      breadcrumbs.style.backgroundColor = color;
    } else {
      breadcrumbs.style.backgroundColor = ''; // сброс если вне диапазона
    }
  };

  // Запускаем сразу
  updateBackground();

  // Ставим обработчик на ресайз
  window.addEventListener('resize', updateBackground);
}