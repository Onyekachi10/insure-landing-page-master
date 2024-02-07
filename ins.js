'use strict'

const ope = document.querySelector('.navbar-toggler')
const clos = document.querySelector('#navbarNav')
const nav = document.querySelector('.navbar-nav')

ope.addEventListener('click',openMenu())
clos.addEventListener('click', closeMenu())
function openMenu() {
    ope.style.display = 'none'
    clos.style.display = 'block'
    nav.style.display = 'block'
}

function closeMenu() {
    ope.style.display = 'block'
    clos.style.display = 'none'
    nav.style.display = 'none'
}