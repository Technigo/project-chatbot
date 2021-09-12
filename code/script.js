// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper') 
const form = document.getElementById('name-form')
// const startButton = document.getElementById('start-btn')
const inputValue = document.getElementById('input-name')

// Global variables, if you need any, declared here
let currentQuestion = 0
// let weather = ""
let yourName = ""
let continent = ""


// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('the user is sending')

    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log('the bot is sending')

    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Welcome to the Travelbot! What's your name?`, 'bot')
}

const continentQuestion = () => {
  showMessage(`Hello ${yourName}! Which continent would you like to visit?`, 'bot')
  inputWrapper.innerHTML = /*html*/`
    <select id="select">
      <option disabled selected value="">Pick a continent</option>
      <option id="africa" value="Africa">Africa</option>
      <option id="europe" value="Europe">Europe</option>
      <option id="south-america" value="South America">South America</option>
      <option id="north-america" value="North America">North America</option>
      <option id="asia" value="Asia">Asia</option>
      <option id="antarctica" value="Antarctica">Antarctica</option>
      <option id="oceania" value="Oceania">Oceania</option>
   </select>
  `
  const select = document.getElementById('select')
  select.addEventListener('change', () => handleContinentQuestion(select.value))
}

const weatherQuestion = () => {
  showMessage('What weather do you prefer?', 'bot')
  inputWrapper.innerHTML = /*html*/ `
  <button id="sun" value="sun">Sunny</button>
  <button id="cloud" value="cloud">Cloudy</button>
  <button id="snow" value="snow">Snowy</button>
  `
  document
  .getElementById('sun')
  .addEventListener('click', () => handleWeatherQuestion('sunny'))
  document
  .getElementById('cloud')
  .addEventListener('click', () => handleWeatherQuestion('cloudy'))
  document
  .getElementById('snow')
  .addEventListener('click', () => handleWeatherQuestion('snowy'))
}


const bookQuestion = () => {
  showMessage(`Perfect! We have found a destination in ${continent} where the weather is always as you want. Would you like to book a ticket?`, 'bot')
  inputWrapper.innerHTML = /*html*/ `
  <button id="yes" value="yes">Hell yeah!</button>
  <button id="no" value="no">No, thanks.</button>
  `
  document
  .getElementById('yes')
  .addEventListener('click', () => handleBookQuestion('Hell yeah!'))
  document
  .getElementById('no')
  .addEventListener('click', () => handleBookQuestion('No, thanks.'))
}

const lastMessage = () => {
  if (book === 'yes'){
    showMessage(`Thank you ${yourName}! Your booking has been sent tou you`, 'bot')
  } else {
    showMessage(`Sorry to see you go, ${yourName}`, 'bot')
  }
}

const handleInput = (event1) => {
  event1.preventDefault()
  currentQuestion++
  console.log('our currentQuestion variable is:', currentQuestion)
  if (currentQuestion === 1) {
    handleNameQuestion()
  } else if (currentQuestion === 2) {
    handleContinentQuestion()
  } else if (currentQuestion === 3) {
    handleWeatherQuestion() 
  }
}

const handleNameQuestion = () => {
  yourName = inputValue.value
  console.log('the name is:', yourName)
  showMessage(`My name is ${yourName}`, 'user' )
  inputValue.value = ''
  setTimeout(continentQuestion, 1000)
}

const handleContinentQuestion = () => {
  continent = select.value
  console.log('the continent is:', continent)
  showMessage(`I would like to visit ${continent}`, 'user' )
  inputValue.value = ''
  setTimeout(weatherQuestion, 1000)
}

const handleWeatherQuestion = (weather) => {
  console.log(`The weather is`, weather)
  showMessage(`I like the weather to be ${weather}`, 'user' )
  inputValue.value = ``
  setTimeout(bookQuestion, 1000)
}

const handleBookQuestion = (book) => {
  console.log(book)
  showMessage(book, 'user' )
  inputValue.value = ``
  inputWrapper.innerHTML = ''
  setTimeout(lastMessage, 1000)
}







// Set up your eventlisteners here
// startButton.addEventListener('click', greeting)
form.addEventListener('submit', handleInput)


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)