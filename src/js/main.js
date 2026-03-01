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
import { initDesktopMenu } from "./modules/initDesktopMenu";
import { initOffcanvasMenu } from "./modules/initOffcanvasMenu";
import { initSearchForm } from "./modules/initSearchForm";

import { initMapOverlayDesktop } from "./modules/initMapOverlayDesktop";
import { initMapOverlayMobile } from "./modules/initMapOverlayMobile";

import { initNewProductsSlider } from "./modules/initNewProductsSlider";

document.addEventListener('DOMContentLoaded', () => {
    initDesktopMenu();
    initOffcanvasMenu();
    initSearchForm();
    initNewProductsSlider();

    initMapOverlayDesktop();
    initMapOverlayMobile();

})

