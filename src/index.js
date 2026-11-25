const menuBtn = document.getElementById('menuBtn')
const myMenu = document.getElementById('myMenu')
const myList = document.getElementById('myList')
const myLinksCollection = document.getElementsByClassName('myLinks')
const dayInfo = document.getElementById('day')
const temperatureInfo = document.getElementById('temperature')
const climateInfo = document.getElementById('climate')
const backgroundVideo = document.getElementById('forestVideo')

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


const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

const dateToday = new Date()
const dateDay = dateToday.getDay()

const currentDay = weekDays[dateDay]

dayInfo.innerText = currentDay

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const currentTemperature = randomNumber(15, 35)
temperatureInfo.innerText = `${currentTemperature}º C`

const itsRaining = currentTemperature <= 19

if (itsRaining) {
    climateInfo.innerText = '🌧️'
    backgroundVideo.src = './img/video_chuva.mp4'
    backgroundVideo.load()
} 