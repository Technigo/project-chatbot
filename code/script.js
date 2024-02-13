// Global variables
let userName = ""
let mainFoodChoice = ""

// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById("input-wrapper") // Select the input wrapper

// NAME
const nameButton = document.querySelector("button[class='send-btn']") // Select the submit button
const nameInput = document.getElementById("name-input") // Select the name input
const nameForm = document.getElementById("name-form")

// FOOD
const pizzaButton = document.createElement("button")
const pastaButton = document.createElement("button")
const saladButton = document.createElement("button")
const foodDiv = document.createElement("div")


//subtypeFood
const italianButton = document.createElement("button")
const hawaiiButton = document.createElement("button")
const veganButton = document.createElement("button")
const pizzaDiv = document.createElement("div")



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
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === 'bot') {
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
}

// A function to start the conversation
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, what's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
}

// function to save name and send to showMessage
const submitName = (event) => {
  event.preventDefault()
  userName = nameInput.value
  nameInput.value = ""
  showMessage(userName, "user")
  setTimeout(() => chooseFood(userName), 1000) // Go to next step, chooseFood
}

const chooseFood = (username) => {
  showMessage(`What would you like to eat ${username}?`, "bot")
  displayFood();
}

const displayFood = () => {
  // Display buttons
  foodDiv.append(pizzaButton, pastaButton, saladButton)
  pizzaButton.textContent = "Pizza"
  pastaButton.textContent = "Pasta"
  saladButton.textContent = "Salad"

  // Replace name form with food buttons
  inputWrapper.replaceChild(foodDiv, nameForm) 
}

// User clicks a button with event listener
// One of following select functions will continue

const selectPizza = () => {
  mainFoodChoice = "pizza"
  showMessage(`${mainFoodChoice}`, "user")
  setTimeout(() => showMessage(`You chose ${mainFoodChoice}`, "bot"), 1000)
  setTimeout(() => displayPizzaSubtypes(), 1000) // Go to next step
}

const displayPizzaSubtypes = () => {
  // Display buttons
  pizzaDiv.append(italianButton, hawaiiButton, veganButton)
  italianButton.textContent = "Italian Pizza"
  hawaiiButton.textContent = "Hawaii Pizza"
  veganButton.textContent = "Vegan Pizza"

  // Replace Food buttons with Pizza buttons
  inputWrapper.replaceChild(pizzaDiv, foodDiv)
}

const selectPasta = () => {
  mainFoodChoice = "Pasta"
  showMessage(`${mainFoodChoice}`, "user")
  setTimeout(() => showMessage(`You chose ${mainFoodChoice}`, "bot"), 1000)
  displayPastaSubtypes()
}

// displayPastaSubtypes

const selectSalad = () => {
  mainFoodChoice = "Salad"
  showMessage(`${mainFoodChoice}`, "user")
  setTimeout(() => showMessage(`You chose ${mainFoodChoice}`, "bot"), 1000)
  displaySaladSubtypes()
}

// displaySaladSubtypes

const selectParty = () => {
console.log(`Ask for party size with input type range`)
}

// Eventlisteners goes here 👇

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)

// Name
nameButton.addEventListener("click", submitName) // Event listener for submit button

// Food
pizzaButton.addEventListener("click", selectPizza) // 
pastaButton.addEventListener("click", selectPasta) // 
saladButton.addEventListener("click", selectSalad) // 

//Pizza
italianButton.addEventListener("click", () => selectParty()) // 
// hawaiiButton.addEventListener("click", ) // 
// veganButton.addEventListener("click", ) // 


// greetUser
// submitName
// chooseFood
// displayFood
// selectPizza || selectPasta || selectSalad
// displayPizzaSubtypes || displayPastaSubtypes || displaySaladSubtypes

