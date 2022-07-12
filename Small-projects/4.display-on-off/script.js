const closedMenu = document.querySelector('.closed-menu')
const menu = document.querySelector('.menu')

closedMenu.addEventListener('click', () => {
    if (menu.style.display === 'none'){
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none'
    }
})




const btn = document.querySelector('.closed-menu2')

btn.addEventListener('click', () => {
    console.log("button");
})


