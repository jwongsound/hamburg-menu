const menu = document.querySelector('#menu')
const menuButton = document.querySelector('#menu-button')
menuButton.addEventListener('click', function(){
    menu.className = "menu-open"
})
const closeMenu = document.querySelector('#closed')
closeMenu.addEventListener('click', function(){
    menu.className = "menu-closed"
})
