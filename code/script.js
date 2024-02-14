// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const nameInput = document.getElementById("name-input")
const submitButton = document.getElementById("submit-button")
const inputWrapper = document.getElementById("input-wrapper")
const coldWeather = document.getElementById("coldWeather")
const warmWeather = document.getElementById("warmWeather")
const hotWeather = document.getElementById("hotWeather")

// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === 'user') {
    console.log(`${message}`)
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `

    //+= means add to it only = would exchange everything. Here we only always want to add things

    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === 'bot') {
    console.log(`${message}`)
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight
  console.log(`${message}`)
}

// A function to start the conversation
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, what's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
}

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1500)

// Eventlisteners goes here 👇

let nameUser =""

const handleNameInput = (event) => {
  event.preventDefault()
  nameUser = nameInput.value
  showMessage(nameUser, 'user')
  nameInput.value = ""
  setTimeout(() => weatherType(), 1000)
}

//Remember put the setTimeout into the function before the one that should be called afterwards. 

submitButton.addEventListener("click", handleNameInput)


const weatherType = () => {
  showMessage(`Hi and welcome ${nameUser}, what type of weather do you like?`, 'bot')
  inputWrapper.innerHTML = `
  <button id="coldWeather" type="button">Cold Weather</button>
  <button id="warmWeather" type="button">Warm Weather</button>
  <button id="hotWeather" type="button">Hot Weather</button>`
}
console.log(weatherType)

const weatherInput = () => {
  if (weatherType === 'coldWeather')
  showMessage(weatherType, 'user')
  else if (weatherType === 'warmWeather')
  showMessage(weatherType, 'user')
  else if (weatherType === 'hotWeather')
  showMessage(weatherType, 'user')
}

coldWeather.addEventListener("click", weatherInput)
warmWeather.addEventListener("click", weatherInput)
hotWeather.addEventListener("click", weatherInput)

