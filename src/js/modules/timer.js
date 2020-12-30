const timer = (id, deadline) => {
    
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`; //добавляется 0 если число однозначное
        } else {
            return num;
        }
    }

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - new Date(),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector), //вводится при вызове функции
            days = timer.querySelector('#days'), // # for searching айди
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock(); //для того, чтобы часы обновлялись сразу после обновления странцы без перескока

        function updateClock() {
            const t = getTimeRemaining(endtime); //обьект со всеми временами 
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            stopClock();

            function stopClock() {
                if (t.total <= 0) { //если сегодняшняя дата больше дедлайна
                    clearInterval(timeInterval); //интервал очищается дедлайн не считается
                }
            }
        }
    }
    setClock(id, deadline);
};

export default timer;