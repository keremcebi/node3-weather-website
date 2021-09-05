console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')

const getWeather = (location) => {

    messageTwo.textContent = 'Loading...'
    fetch('http://localhost:3000/weather?address=' + location + ')').then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = ''
                messageTwo.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast

            }
        })
    })
}


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    if (location) {
        getWeather(location)
    } else {
        messageOne.textContent = 'Please enter a location.'
    }

})