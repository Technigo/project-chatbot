// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const sendButton = document.getElementById('send-button')
const inputWrapper = document.getElementById('input-wrapper')

let userName = ""
let finalOrder = ""
// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/userbubble.png" alt="User" />  
      </section>
    `
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/botbubble.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// A function to start the conversation
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("Hey there, little buddy! I am ActivityBot 🤖 I am here to help you find a fun activity. First, let's get to know each other. What's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
}

const clearButtons = () => {
  inputWrapper.innerHTML = ''
}

//4. Comment on user's favorite animal and ask about weather
const getWeather = (userAnimal) => {

}


// Change color scheme
const changeColorScheme = (scheme) => {
  document.body.className = scheme
}


//3. Find out user's favorite animal using buttons
const getAnimal = (userColor, colorValue) => {
  showMessage(`${userColor}`, 'user')
  setTimeout(() => {
    showMessage(`How cool! ${userColor} is my favorite color too! What is your favorite animal?`, 'bot')
    inputWrapper.innerHTML = `
      <button id="cat">😸 Cat</button>
      <button id="dog">🐕 Dog</button>
      <button id="bear">🐻 Bear</button>
      <button id="monkey">🐒 Monkey</button>
      `
  }, 1000)

  document.getElementById('cat').addEventListener("click", () => askWeather('Cats'))
  document.getElementById('dog').addEventListener("click", () => askWeather('Dogs'))
  document.getElementById('bear').addEventListener("click", () => askWeather('Bears'))
  document.getElementById('monkey').addEventListener("click", () => askWeather('Monkeys'))
}

//2. Find out user's favorite color and change color scheme based on selection. 
const getColor = () => {
  showMessage(`Nice to meet you, ${userName}! What is your favorite color?`, 'bot')
  inputWrapper.innerHTML = `
    <button id="red">🔴 Red</button>
    <button id="blue">🔵 Blue</button>
    <button id="yellow">🟡 Yellow</button>
    <button id="purple">🟣 Purple</button>
    <button id="green">🟢 Green</button>
    <button id="pink">🩷 Pink</button>
  `
  document.getElementById('red').addEventListener("click", () => {
    changeColorScheme('red-scheme')
    getAnimal('Red')
  })

  document.getElementById('blue').addEventListener("click", () => {
    changeColorScheme('blue-scheme')
    getAnimal('Blue')
  })
  document.getElementById('yellow').addEventListener("click", () => {
    changeColorScheme('yellow-scheme')
    getAnimal('Yellow')
  })
  document.getElementById('purple').addEventListener("click", () => {
    changeColorScheme('purple-scheme')
    getAnimal('Purple')
  })
  document.getElementById('green').addEventListener("click", () => {
    changeColorScheme('green-scheme')
    getAnimal('Green')
  })
  document.getElementById('pink').addEventListener("click", () => {
    changeColorScheme('pink-scheme')
    getAnimal('Pink')
  })
}

//1. Get user's name and trigger color function
const getUserName = (event) => {

  event.preventDefault() // Keeps chat history going
  userName = nameInput.value
  showMessage(`${userName}`, 'user')
  nameInput.value = '' // Clear the input field

  setTimeout(getColor, 1000)
}

// Eventlisteners goes here 👇
// Event listener for the form submission
sendButton.addEventListener("click", getUserName)

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greetUser, 1000)