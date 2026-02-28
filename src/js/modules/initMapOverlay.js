export function initMapOverlay() {
    const mapBox = document.querySelector(".map__box");
    let timer = null;

    mapBox.addEventListener("mouseenter", () => {
        timer = setTimeout(() => {
            mapBox.classList.add("is-active");
        }, 1000);
    });

    mapBox.addEventListener("mouseleave", () => {
        clearTimeout(timer);
        mapBox.classList.remove("is-active");
    });
}