const customName = document.getElementById('customname')
const randomize = document.querySelector('.randomize')
const story = document.querySelector('.story')

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length)
    return array[random]
}

const storyText = `Estavam 94 Fahrenheit lá fora, então :insertx: fui dar uma caminhada. Quando chegaram a :inserty:, ficaram olhando horrorizados por alguns momentos, depois :insertz:. Bob viu tudo, mas não ficou surpreso - :insertx: pesa 300 quilos e era um dia quente.`

const insertX = [
    "Willy, o Duende",
    "Paizão",
    "Papai Noel"
]

const insertY = [
    "a sopa dos pobres",
    "Disneylândia",
    "a Casa Branca"
]

const insertZ = [
    "combustão espontânea",
    "derreteu em uma poça na calçada",
    "se transformou em uma lesma e se arrastou para longe"
]

randomize.addEventListener('click', result)

function result() {
    const newStory = storyText
    const xItem = randomValueFromArray(insertX) 
    const yItem = randomValueFromArray(insertY)
    const zItem = randomValueFromArray(insertZ)
    if(customName.value !== '') {
        const name = customName.value
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300)
        const temperature = Math.round(94)
    }

    story.textContent = 
    story.style.visibility = 'visible'
}