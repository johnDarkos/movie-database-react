
/**
 * 
 * @param {function} func 
 * @param {number} delay 
 * @param {...any} args 
 * @returns {function} 
 * @description Функция debounce для задержки выполнения функции
 */

const debounce = (func, delay) => {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

export default debounce;