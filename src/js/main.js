import './slider';
import modals from './modules/modals';
import timer from './modules/timer';
import images from './modules/images';
import forms from './modules/forms';
import tabs from './modules/tabs';



console.log(1);
window.addEventListener('DOMContentLoaded', () => {
    modals();
    timer('#timer', '2021-01-01');
    images();
    forms();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
   

});