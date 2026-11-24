const menuBtn = document.getElementById('menuBtn')
const myMenu = document.getElementById('myMenu')
const myList = document.getElementById('myList')
const myLinksCollection = document.getElementsByClassName('myLinks')

menuBtn.addEventListener('click', () => {
    myMenu.classList.remove('opacity-0')
    myMenu.classList.remove('pointer-events-none')
    myMenu.classList.add('opacity-100')
    myMenu.classList.add('pointer-events-auto')
})

document.addEventListener('pointerdown', (ev) => {
    if (!myList.contains(ev.target)) {
        myMenu.classList.remove('opacity-100')
        myMenu.classList.remove('pointer-events-auto')
        myMenu.classList.add('opacity-0')
        myMenu.classList.add('pointer-events-none')
    }
})

const myLinks = [...myLinksCollection]

myLinks.forEach((myLink) => {
    myLink.addEventListener('click', () => {
        myMenu.classList.remove('opacity-100')
        myMenu.classList.remove('pointer-events-auto')
        myMenu.classList.add('opacity-0')
        myMenu.classList.add('pointer-events-none')
    })
})

