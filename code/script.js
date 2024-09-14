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

//6. Confirm order
const confirmOrder = (userConfirmation) => {
  if (userConfirmation === "Yes") {
    showMessage(`Yes, please!`, 'user')
    setTimeout(() => {
      showMessage(`You are in for a treat. One ${finalOrder} is on the way!`, 'bot')
      clearButtons() //Clear the input field when conversation is over
    }, 1000)
  }
  else { //the only other option is no
    showMessage(`No, thank you.`, 'user')
    setTimeout(() => {
      showMessage(`No worries. If you change your mind, please come back again. Bye for now!`, 'bot')
      clearButtons()
    }, 1000)
  }
}

//5. Get age
const setPortionSize = (size) => {
  let portionSize = size
  let cost
  if (portionSize === "child") {
    cost = "8.95"
  }
  else {
    cost = "14.95"
  }
  showMessage(`${size}`, 'user')
  setTimeout(() => {
    showMessage(`One ${portionSize} size ${finalOrder} costs $${cost}. Would you like to confirm this order?`, 'bot')
    inputWrapper.innerHTML = `
      <button id="yes">Yes, please!</button>
      <button id="no">No, thank you.</button>
    `
    document.getElementById('yes').addEventListener("click", () => confirmOrder('Yes'))
    document.getElementById('no').addEventListener("click", () => confirmOrder('No'))

  }, 1000)
}


//4. Set final order
const setFinalOrder = (order) => {
  finalOrder = order;
  showMessage(`${finalOrder}`, 'user');
  setTimeout(() => {
    showMessage(`Great choice! You have selected ${finalOrder}. Will this order be for a child or an adult?`, 'bot')
    inputWrapper.innerHTML = `
      <button id="child">🧒🏻 Child</button>
      <button id="adult">🧑🏻 Adult</button>
    `
    document.getElementById('child').addEventListener("click", () => setPortionSize('child'));
    document.getElementById('adult').addEventListener("click", () => setPortionSize('adult'));
  }, 1000);
}

//3. Take subfood order
const getSubfood = (foodOrder) => {
  if (foodOrder === "pizza") {
    showMessage("🍕 Pizza", 'user')
    setTimeout(() => {
      showMessage("What kind of pizza would you like?", 'bot')
      inputWrapper.innerHTML = `
          <button id="pepporoni">🍖 Pepporoni</button>
          <button id="cheese">🧀 Cheese</button>
          <button id="margherita">🍅 Margherita</button>
        `
      document.getElementById('pepporoni').addEventListener("click", () => setFinalOrder('🍖 Pepporoni Pizza'))
      document.getElementById('cheese').addEventListener("click", () => setFinalOrder('🧀 Cheese Pizza'))
      document.getElementById('margherita').addEventListener("click", () => setFinalOrder('🍅 Margherita Pizza'))
    }, 1000)
  } else if (foodOrder === "pasta") {
    showMessage("🍝 Pasta", 'user')
    setTimeout(() => {
      showMessage("What kind of pasta would you like?", 'bot')
      inputWrapper.innerHTML = `
          <button id="spaghetti-bolognese">🍝 Spaghetti Bolognese</button>
          <button id="fettuccine-alfredo">🧈 Fettuccine Alfredo</button>
          <button id="lasagna">🍅 Lasagna</button>
        `
      document.getElementById('spaghetti-bolognese').addEventListener("click", () => setFinalOrder('🍝 Spaghetti Bolognese'))
      document.getElementById('fettuccine-alfredo').addEventListener("click", () => setFinalOrder('🧈 Fettucine Alfredo'))
      document.getElementById('lasagna').addEventListener("click", () => setFinalOrder('🍅 Lasagna'))
        ;
    }, 1000)
  } else { //foodOrder has to be salad
    showMessage("🥗 Salad", 'user')
    setTimeout(() => {
      showMessage("What kind of salad would you like?", 'bot')
      inputWrapper.innerHTML = `
          <button id="caesar">🥬 Caesar</button>
          <button id="greek">🥒 Greek</button>
          <button id="caprese">🍅 Caprese</button>
        `
      document.getElementById('caesar').addEventListener("click", () => setFinalOrder('🥬 Caesar Salad'))
      document.getElementById('greek').addEventListener("click", () => setFinalOrder('🥒 Greek Salad'))
      document.getElementById('caprese').addEventListener("click", () => setFinalOrder('🍅 Caprese Salad'))
        ;
    }, 1000)
  }
}
//4. Comment on user's favorite animal and ask about weather
const getWeather = (userAnimal) => {

}

let colorValue = ""
//Function to update button colors
const updateButtonColors = (colorValue) => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.style.backgroundColor = colorValue;
  });
}

//3. Find out user's favorite animal using buttons
const getAnimal = (userColor, colorValue) => {
  showMessage(`${userColor}`, 'user')
  setTimeout(() => {
    showMessage(`${userColor} is a great color! ${userColor} is my favorite color too. What is your favorite animal?`, 'bot')
    inputWrapper.innerHTML = `
      <button id="cat">😸 Cat</button>
      <button id="dog">🐕 Dog</button>
      <button id="bear">🐻 Bear</button>
      <button id="pig">🐷 Pig</button>
      <button id="monkey">🐒 Monkey</button>
    `
    updateButtonColors(colorValue)
  }, 1000)

  document.getElementById('cat').addEventListener("click", () => askWeather('Cats'))
  document.getElementById('dog').addEventListener("click", () => askWeather('Dogs'))
  document.getElementById('bear').addEventListener("click", () => askWeather('Bears'))
  document.getElementById('pig').addEventListener("click", () => askWeather('Pigs'))
  document.getElementById('monkey').addEventListener("click", () => askWeather('Monkeys'))
}

//2. Find out user's favorite color using buttons
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
  document.getElementById('red').addEventListener("click", () => getAnimal('Red', 'red'))
  document.getElementById('blue').addEventListener("click", () => getAnimal('Blue', 'blue'))
  document.getElementById('yellow').addEventListener("click", () => getAnimal('Yellow', 'yellow'))
  document.getElementById('purple').addEventListener("click", () => getAnimal('Purple', 'purple'))
  document.getElementById('green').addEventListener("click", () => getAnimal('Green', 'green'))
  document.getElementById('pink').addEventListener("click", () => getAnimal('Pink', 'pink'))
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