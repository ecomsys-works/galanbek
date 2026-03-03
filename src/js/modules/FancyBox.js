// initFancy({
//     dataAttr: '[data-fancybox="product-gallery"]'
// })
export function initFancy(options) {
    const dataAttr = options?.dataAttr || '[data-fancybox="product-gallery"]';

    if (typeof Fancybox === 'undefined') {
        console.log('Fancy Box CDN script is not connected after site footer!');
        return;
    }

    const fancyEntity = Fancybox.bind(dataAttr, {
        animated: true,
        showClass: "fancybox-fadeIn",
        hideClass: "fancybox-fadeOut",

        Toolbar: {
            display: [
                { id: "counter", position: "center" },
                "zoom",
                "fullscreen",
                "close"
            ]
        },

        Thumbs: {
            autoStart: true
        }
    });

    return fancyEntity;
}