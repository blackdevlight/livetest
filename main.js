const menuBtn = document.getElementById('menubtn');
const showMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    if (showMenu.classList.contains('show')) {
        menuBtn.src = 'assets/images/menu.svg';
    } else {
        menuBtn.src = 'assets/images/cancel.svg';
    }
    showMenu.classList.toggle('show');
});