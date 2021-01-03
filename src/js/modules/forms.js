import checkNumInp from './checkNumInp';

const forms = (state) => {

    const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input'); //чтобы потом очистить инпуты

    checkNumInp('input[name = "user_phone"');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся.',
        fail: 'Что-то пошло не так.',
    };

    const postData = async (url, data) => { //отвеч за отпр запроса
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, { //post запрос асинхронный, но для синхр исп as aw
            method: "POST",
            body: data
        });
        return await res.text();
    }; //ели несколько запр, созд отд папку для рызных запросов

    const clearInputs = (() => { //очищение всех инпутов
        input.forEach(el => {
            el.value = '';
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', (ev) => {
            ev.preventDefault(); //без перезагрузки страницы

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage); //добавляем оповещение в блок родительской формы

            const formData = new FormData(item); //собираем все данные из формы
            if (item.getAttribute('data-calc') === 'end') { //если в форму калькулятора чтото передалось
                for (let key in state) { //дополняем дата данными из обьекта стейт формы калькулятора,
                    formData.append(key, state[key]);
                }
            }
            postData('assets/server.php', formData) // отпр запрос на сервер
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.fail)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                    setTimeout(() => { //закрыть модалку
                        if (ev.path.splice(-6, 1)[0].classList.contains('popup_dialog')) { //если это модалка
                            ev.path.splice(-5, 1)[0].style.display = 'none'; //закрывается модальное окно
                            document.body.classList.remove('modal-open');
                        }
                    }, 3000);
                });
        });
    });
};

export default forms;