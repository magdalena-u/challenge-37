const menu = document.querySelector('.main_nav');
const navCont = document.querySelector('.nav_content');

const openMenu = () => {
    navCont.classList.toggle('active');
}

menu.addEventListener('click', openMenu);

