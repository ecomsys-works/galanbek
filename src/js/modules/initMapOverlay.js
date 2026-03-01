export function initMapOverlay() {
    const mapBox = document.querySelector(".map__box");
    const overlay = document.querySelector(".map__overlay");

    if (!mapBox || !overlay) return;

    let timer = null;

    // Проверяем, есть ли hover (десктоп)
    const isDesktop = window.matchMedia("(hover: hover)").matches;

    /* ================= DESKTOP ================= */
    if (isDesktop) {
        mapBox.addEventListener("mouseenter", () => {
            timer = setTimeout(() => {
                mapBox.classList.add("is-active");
            }, 1000);
        });

        mapBox.addEventListener("mouseleave", () => {
            clearTimeout(timer);
            mapBox.classList.remove("is-active");
        });

        return;
    }

    /* ================= MOBILE ================= */

    const activateMap = () => {
        mapBox.classList.add("is-active");

        clearTimeout(timer);
        timer = setTimeout(() => {
            deactivateMap();
        }, 5000); // через 5 сек отключаем
    };

    const deactivateMap = () => {
        mapBox.classList.remove("is-active");
    };

    // Тап по оверлею
    overlay.addEventListener("click", (e) => {
        e.stopPropagation();
        activateMap();
    });

    // Тап вне карты — закрываем
    document.addEventListener("click", (e) => {
        if (!mapBox.contains(e.target)) {
            deactivateMap();
        }
    });
}