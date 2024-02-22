    // Получаем элементы бургер-меню и элементы меню
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');

    // Обработчик клика по бургер-меню
    burgerMenu.addEventListener('click', () => {
        // Переключаем класс 'active' для бургер-меню и элементов меню
        burgerMenu.classList.toggle('active');
        menu.classList.toggle('active');
    });