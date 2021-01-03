const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClockOverlay = true) {
        //closeClockOverlay можно ли кликать на подложку
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        trigger.forEach(el => { // для всех кнопок
            el.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(el => {
                    el.style.display = 'none'; //скрываем все модальные окна при откр нового
                });

                modal.style.display = 'block'; //показываем нужное модал окно
                document.body.style.overflow = 'hidden';
                //document.body.classList.add('modal-open'); //стиль для отключения прокрутки
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => { //при клике на крестик
            windows.forEach(el => {
                el.style.display = 'none'; //скрываем все модальные окна при откр нового
            });

            modal.style.display = 'none'; //скрываем конкретное окно
            document.body.style.overflow = '';
            //document.body.classList.remove('modal-open');
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => { //при клике на подложку
            if (e.target === modal && closeClockOverlay) {
                
                windows.forEach(el => {
                    el.style.display = 'none'; //скрываем все модальные окна при откр нового
                });
                
                modal.style.display = 'none'; //закрывается модальное окно
                document.body.style.overflow = '';
                //document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`;
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow='hidden';
        }, time);

    }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc .popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile .popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 60000);
};

export default modals;