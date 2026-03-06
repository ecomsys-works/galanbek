export function initCardCounterTeleport({ breakpoint } = {}) {
  breakpoint = breakpoint || 768;

  const cards = document.querySelectorAll('.cart-card');
  if (!cards.length) return;

  const teleportCounter = (card) => {
    const counter = card.querySelector('.cart-card__counter');
    const desktopContainer = card.querySelector('.cart-counter--desktop');
    const mobileContainer = card.querySelector('.cart-counter--mobile');

    if (!counter || !desktopContainer || !mobileContainer) return;

    if (window.innerWidth >= breakpoint) {
      if (desktopContainer !== counter.parentNode) {
        desktopContainer.appendChild(counter);
      }
    } else {
      if (mobileContainer !== counter.parentNode) {
        mobileContainer.appendChild(counter);
      }
    }
  };

  const updateAllCounters = () => cards.forEach(card => teleportCounter(card));

  updateAllCounters();

  window.addEventListener('resize', updateAllCounters);
}