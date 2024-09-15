// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const sendButton = document.getElementById('send-button')
const inputWrapper = document.getElementById('input-wrapper')

let userName = ""
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

let currentMood = ""
let currentWeather = ""
let currentTime = ""

// const getActivity = (mood, weather, time) => {
//   if (mood === "calm" && weather === "sunny" && time === "short") {
//     showMessage(`How about coloring or doing a simple puzzle?`, 'bot')
//     inputWrapper.innerHTML = `
//     <button id="coloring">🎨 Coloring sounds perfect!</button>
//     <button id="puzzle">🧩 Doing a puzzle would be fun!</button>
//     `
//     document.getElementById('coloring').addEventListener("click", () => {
//       showMessage(``, 'user')
//       setTimeout()
//     })

//   }

// }

//6. Comment on user's answer for weather and ask how much time they have for an activity
const getTime = () => {
  showMessage(`OK, good to know. How much time do you have to spare?`, 'bot')
  inputWrapper.innerHTML = `
    <button id="short">Not much, less than 30 minutes.</button>
    <button id="long">Quite a lot, at least 30 minutes.</button>
    `
  document.getElementById('short').addEventListener("click", () => {
    currentTime = "short"
    showMessage(`Not much, less than 30 minutes.`, 'user')
    setTimeout(() => getActivity(currentMood), 1000)
  })
  document.getElementById('long').addEventListener("click", () => {
    currentTime = "long"
    showMessage(`Quite a lot, at least 30 minutes.`, 'user')
    setTimeout(() => getActivity(currentMood), 1000)
  })
}

//5. Comment on user's mood and ask about the weather
const getWeather = () => {
  showMessage(`OK, we will think of something that best suits your mood. What is the weather like?`, 'bot')
  inputWrapper.innerHTML = `
    <button id="sunny">☀️ Perfect weather to be outdoors!</button>
    <button id="rainy">⛈️ Not so nice outside, I'd rather be indoors.</button>
    `
  document.getElementById('sunny').addEventListener("click", () => {
    currentWeather = "sunny"
    showMessage(`☀️ Perfect weather to be outdoors!`, 'user')
    setTimeout(getTime, 1000)
  })
  document.getElementById('rainy').addEventListener("click", () => {
    currentWeather = "rainy"
    showMessage(`⛈️ Not so nice outside, I'd rather be indoors.`, 'user')
    setTimeout(getTime, 1000)
  })
}

//4. Comment on user's favorite animal and ask about mood
const getMood = (userAnimal) => {
  showMessage(`${userAnimal}`, 'user')
  setTimeout(() => {
    showMessage(`Wow, we really have a lot in common! ${userAnimal} is also my favorite. Now, what kind of activity are you in the mood for today?`, 'bot')
    inputWrapper.innerHTML = `
    <button id="calm">🧘🏻 I'm in the mood for something calm.</button>
    <button id="active">⛰️ I have a lot of energy to burn off!</button>
    `
    document.getElementById('calm').addEventListener("click", () => {
      currentMood = "calm"
      showMessage(`I'm in the mood for something calm.`, 'user')
      setTimeout(getWeather, 1000)
    })
    document.getElementById('active').addEventListener("click", () => {
      currentMood = "active"
      showMessage(`I have a lot of energy to burn off!`, 'user')
      setTimeout(getWeather, 1000)
    })
  }, 1000)
}

//3. Find out user's favorite animal using buttons
const getAnimal = (userColor, colorValue) => {
  showMessage(`${userColor}`, 'user')
  setTimeout(() => {
    showMessage(`How cool! ${userColor} just so happens to be my favorite color too! What is your favorite animal?`, 'bot')
    inputWrapper.innerHTML = `
      <button id="cat">😸 Cat</button>
      <button id="dog">🐕 Dog</button>
      <button id="bear">🐻 Bear</button>
      <button id="monkey">🐒 Monkey</button>
      <button id="pig">🐷 Pig</button>
      <button id="lion">🦁 Lion</button>
      `
    document.getElementById('cat').addEventListener("click", () => getMood('Cat'))
    document.getElementById('dog').addEventListener("click", () => getMood('Dog'))
    document.getElementById('bear').addEventListener("click", () => getMood('Bear'))
    document.getElementById('monkey').addEventListener("click", () => getMood('Monkey'))
    document.getElementById('pig').addEventListener("click", () => getMood('Pig'))
    document.getElementById('lion').addEventListener("click", () => getMood('Lion'))
  }, 1000)
}

// Change color scheme
const changeColorScheme = (scheme) => {
  document.body.className = scheme
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