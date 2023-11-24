import ScrollSuave from './modules/scroll-suave.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tab-nav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';

const scrollSuave = new ScrollSuave('.js-menu a[href^="#"]');
scrollSuave.init();

initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFetchBitcoin();
initFuncionamento();
initFetchAnimais();
