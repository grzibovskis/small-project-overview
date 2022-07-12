const closedMenu = document.querySelector('.closed')
const openMenu = document.querySelector('.open')

closedMenu.addEventListener('click', () => {
    if(openMenu.classList.contains('open')) {
        openMenu.classList.add('active');
        closedMenu.classList.remove('active');
    }
});

openMenu.addEventListener('click', () => {
    if(closedMenu.classList.contains('closed')) {
        closedMenu.classList.add('active');
        openMenu.classList.remove('active');
    }
});