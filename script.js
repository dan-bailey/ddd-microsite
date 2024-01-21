const navbutton = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

function navToggle() {
  navbutton.classList.toggle('open')
  menu.classList.toggle('hidden')
} 

navbutton.addEventListener('click', navToggle)
