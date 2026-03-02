/* ------------------------------------------------------------------------------------------------------------------------------
Helpers import
--------------------------------------------------------------------------------------------------------------------------------*/
import { BaseHelpers } from "./helpers/base-helpers";
BaseHelpers.addLoadedClass();
BaseHelpers.calcScrollbarWidth();
BaseHelpers.addTouchClass();


/* ------------------------------------------------------------------------------------------------------------------------------
Modules import
--------------------------------------------------------------------------------------------------------------------------------*/
import { initDesktopMenu } from "./modules/DesktopMenu";
import { initOffcanvasMenu } from "./modules/OffcanvasMenu";
import { initSearchForm } from "./modules/SearchForm";

import { initMapOverlayDesktop } from "./modules/map/MapOverlayDesktop.js";
import { initMapOverlayMobile } from "./modules/map/MapOverlayMobile.js";

import { initNewProductsSlider } from "./modules/NewProductsSlider";
import { initFilterCanvas } from "./modules/filter/FilterCanvas.js";
import { breadcrumbsColorizator } from "./modules/BreadcrumbsColorizator";

import { initFilterSidebarAccordion } from "./modules/filter/FilterSidebarAccordion.js";
import { initFilterCanvasAccordion } from "./modules/filter/FilterCanvasAccordion.js";

import { initSortMobileCanvas } from "./modules/filter/SortMobileCanvas.js";
import { initSortDesktopCore } from "./modules/SortDesktopCore";


import { initPriceSliders } from './modules/PriceSlider.js';
// import { useSidebarScrollSync } from "./hooks/useSidebarScroll.js";


const home = document.getElementById('home-page');
const catalog = document.getElementById('catalog-page');
const catalogCategories = document.getElementById('catalog-categories-page');
const catalogProducts = document.getElementById('catalog-products-page');

document.addEventListener('DOMContentLoaded', () => {

    initDesktopMenu();
    initOffcanvasMenu();
    initSearchForm();

    // если home тогда эти скрипты:
    if (home) {
        initNewProductsSlider();
        initMapOverlayDesktop();
        initMapOverlayMobile();
    }

    // если catalog-products тогда эти:
    if (catalogProducts) {
        breadcrumbsColorizator({
            col: '#ffffff',        // цвет фона
            startBreakpoint: 576,  // min-width
            endBreakpoint: 992     // max-width
        });
        initFilterCanvas();
        initFilterSidebarAccordion();
        // useSidebarScrollSync();

        initSortDesktopCore({ selectId: 'sortCatalog', dropdownClass: 'default' });
        initSortDesktopCore({ selectId: 'sortTypes', dropdownClass: 'short' });

        initSortMobileCanvas({
            selectId: 'sortCatalog',
            canvasId: 'filterCanvas'
        });

        initPriceSliders({
            sliderId: "price-slider-c",
            rangeMin: 68390,
            rangeMax: 140990,
            startMin: 68390,
            startMax: 140990,
            step: 500
        });

        initPriceSliders({
            sliderId: "price-slider-s",
            rangeMin: 68390,
            rangeMax: 140990,
            startMin: 68390,
            startMax: 140990,
            step: 500
        });

        initFilterCanvasAccordion();

    }

})

