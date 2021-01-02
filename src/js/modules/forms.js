import checkNumInp from './checkNumInp';

const forms = () => {

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
                });
        });
    });

};

export default forms;