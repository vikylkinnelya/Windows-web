const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelector('#width'),
        windowHeight = document.querySelector('#height'),
        windowType = document.querySelector('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');
        
    windowForm.forEach((el, idx) => {
        el.addEventListener('click', () => { // кликаем на опр изобр
            state.form = idx; //в обьект запис его номер
        });
    });
};

export default changeModalState;