(function() {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active')
        } else {
            header.classList.remove('header_active')
        }
    };
}());

//Burger 

(function() {
    const burgerItem = document.querySelector('.burger')
    const openItem = document.querySelector('.header_nav')
    const closeItem = document.querySelector('.header_nav-close')
    burgerItem.addEventListener('click', () => {
        openItem.classList.add('header_nav_active')
    })
    closeItem.addEventListener('click', () => {
        openItem.classList.remove('header_nav_active')
    })

}());