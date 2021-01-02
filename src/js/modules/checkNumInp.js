const checkNumInp = (selector) => {
    const numInput = document.querySelectorAll(selector);
    
    numInput.forEach(el => {
        el.addEventListener('input', () => {
            el.value = el.value.replace(/\D/, ''); //не число превр в пустую строку
        });
    });
};

export default checkNumInp;