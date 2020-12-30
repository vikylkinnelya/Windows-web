const images = () => {

    const imgPopup = document.createElement('div'),
        works = document.querySelector('.works'),
        bigImg = document.createElement('img');

    imgPopup.classList.add('popup'); //добавить класс модального окна изображению
    works.appendChild(imgPopup); //добавить в работы модальное окно


    imgPopup.style.justifyContent = 'center'; //по центру
    imgPopup.style.alignItems = 'center'; //по вертикали по центру 
    imgPopup.style.display = 'none'; //скрытый


    imgPopup.appendChild(bigImg); //добавить в модалку изображение


    works.addEventListener('click', (e) => {
        e.preventDefault(); // чтобы стр не обновлялась и не переходило по ссылке
        let target = e.target;
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.classList.add('modal-open'); //чтобы не прокручивалась страница
        }
        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
};

export default images;


//делегирование событий, привязка подложке
//создать модальное окно где будет открываться фото, использовать класс popup 
//создать имдж, который поместим в модальное окно и поменяем ему эсэрси 
//при клике на подложку модалка закр
//модальное окно рендерится внутр секции в кот работаем