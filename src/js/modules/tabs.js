const tabs = (headSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    //один обработчик события на общий блок
    //дальше шапка отслеживает куда именно
    //опр индекс кликнутого 
    // в завти от индекса показать опр контент

    const header = document.querySelector(headSelector),
        tab = header.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    const showTabCont = (i = 0) => { //по умолчанию
        content[i].style.display = display; //показывает конкретный, кот передается из обработчика событий
        tab[i].classList.add(activeClass); // подсвечивает активный таб
    };

    const hideTabCont = () => {
        content.forEach(el => {
            el.style.display = 'none'; //убирает неакт контент
        });
        tab.forEach(el => {
            el.classList.remove(activeClass); //убирает класс активн у ненужных табов
        });
    };
    hideTabCont();
    showTabCont();

    header.addEventListener('click', (ev) => {
        const target = ev.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, '')) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
            //если кликнули кудато кто внутри нужного эл
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    //если искомый равен перебираемому, запоминаем его индекс
                    hideTabCont();
                    showTabCont(i);
                }
            });
        }
    });
};

export default tabs;