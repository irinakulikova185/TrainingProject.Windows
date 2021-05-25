'use strict'
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {};
    const deadline = '2021-12-12'
    changeModalState(modalState);
    modals(modalState);
    tabs('.glazing_slider', '.glazing_block > a', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click > a', '.decoration_content > div > div', 'after_click' );
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', deadline);
    images();
})