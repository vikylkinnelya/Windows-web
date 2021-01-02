import checkNumInp from './checkNumInp';


const changeModalState = (state) => {
    //элементы через кот получаем данные со стр
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInp('#width'); //только цифры
    checkNumInp('#height');

    function bindActionToElem(event, elem, prop) { //на опр эл навязываем опр обр события и записывает результат
        elem.forEach((item, idx) => {
            item.addEventListener(event, () => { // кликаем на опр изобр
                switch (item.nodeName) {
                    case 'SPAN': //в картинку
                        state[prop] = idx; //в обьект запис его номер
                        break;
                    case 'INPUT': // в форму
                        if (item.getAttribute('type') === 'checkbox') {
                            idx === 0 ? state[prop] = 'cold' : state[prop] = 'heat';
                            elem.forEach((box, i) => { //для всех галочек
                                box.checked = false; // снимаем галочки со всех чекбоксов
                                if (idx == i) {
                                    box.checked = true; //оставляем на кликнутом
                                }
                            });
                        } else {
                            state[prop] = item.value; //берем значение инпута
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
            });
        });
    }

    bindActionToElem('click', windowForm, 'form');
    bindActionToElem('input', windowWidth, 'width');
    bindActionToElem('input', windowHeight, 'height');
    bindActionToElem('change', windowType, 'type');
    bindActionToElem('change', windowProfile, 'profile');






};

export default changeModalState;