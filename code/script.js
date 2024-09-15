// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const startBtn = document.getElementById('start-btn')
const enterName = document.getElementById('input-wrapper')
const nameInput = document.getElementById("name-input")
const nameForm = document.getElementById('name-form')
const coffeeShopContainer = document.getElementById('coffeeShopContainer')

//Variables that will be used in the confirmation

let userName = ''
let coffeeChoice = ''
let sizeChoice = ''
let coffeeShop = ''

// Functions go here 👇

// Handle user name input
const handleNameInput = (event) => {
  event.preventDefault()

  userName = nameInput.value
  showMessage(userName, "user")
  nameInput.value = "" 

  setTimeout(() => selectCoffee(userName), 1000) //Move on to Select coffee
}

//Start conversation

const startChat = () => {
  console.log ("clicked start conversation button")
  greetUser() 
} 

const showMessage = (message, sender) => {
  // Posted message from the user
  if (sender === 'user') {
    console.log(`Sender is user`)
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // Posted message from the bot
  } else if (sender === 'bot') {
    console.log(`Sender is bot`)
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // Scroll to the last message when chat is too long
  chat.scrollTop = chat.scrollHeight
}

// A function to start the conversation

const greetUser = () => {
  console.log("Hello there fellow...")
  showMessage("Hello there fellow Java Junkie! What's your name?", 'bot')
}

// ****** Event listeners go here 👇 *******
document.addEventListener("DOMContentLoaded", () => {
  // This line waits for the entire HTML document to fully load before running the enclosed JavaScript code....

  // Click Start conversation button
  startBtn.addEventListener("click", () => {
    startChat()
    startBtn.classList.add("hidden") // Hide start button
  })

  // Click Submit button to trigger welcome userName message
  nameForm.addEventListener("submit", handleNameInput)
});

// Coffee choice

const selectCoffee = (userName) => {
  console.log("Select your drink")
  showMessage(`Nice to meet you, ${userName}. Please start your order by selecting your coffee. Here are your options: Pumpkin Spice Latte, Espresso, Cappuccino, or Americano.`, 'bot')
  
  nameForm.removeEventListener("submit", handleNameInput) // Remove Event listener for Name
  nameForm.addEventListener("submit", handleCoffeeInput) // Add Event listener for Coffee choice
}

// Handle Coffee choice input

const handleCoffeeInput = (event) => {
  event.preventDefault()
  coffeeChoice = nameInput.value.toLowerCase()

  if (coffeeChoice === "pumpkin spice latte") {
    showMessage("Ah, pumpkin spice latte! Perfect choice", 'bot')
  } else if (coffeeChoice === "espresso") {
    showMessage("An Espresso coming up! Excellent choice", 'bot')
  } else if (coffeeChoice === "cappuccino") {
    showMessage("Cappuccino it is! Creamy and delicious", 'bot')
  } else if (coffeeChoice === "americano") {
    showMessage("A classic Americano for you", 'bot')
  } else {
    showMessage(`${coffeeChoice} sounds great, but we don't have that option right now!`, 'bot')
  }
  nameInput.value = ""

  setTimeout(askForSize, 500) // Move on to Ask for size
}

// Coffee size
const askForSize = () => {
  showMessage("What size would you like?", 'bot')
  // Add two buttons
  chat.innerHTML += `
    <section class="bot-msg">
      <button id="regularBtn" class="size-btn">Regular</button>
      <button id="smallBtn" class="size-btn">Small</button>
    </section>
  `
  document.getElementById("regularBtn").addEventListener("click", () => handleSizeChoice("Regular"))
  document.getElementById("smallBtn").addEventListener("click", () => handleSizeChoice("Small"))
}

// Handle coffee size input
const handleSizeChoice = (size) => {
  sizeChoice = size
  showMessage(`You selected ${size} size!`, 'user')
    
  document.getElementById("regularBtn").remove()
  document.getElementById("smallBtn").remove()
    
  showMessage("Great choice! Your coffee is almost on the way.", 'bot')

  setTimeout(handleCoffeeShopInput, 500) // Move on to Coffee shop question
}

// Coffee Shop

const handleCoffeeShopInput = () => {
  setTimeout(() => {
    coffeeShopContainer.innerHTML = `
      <button id="stockholmBtn" class="Btns">Stockholm</button>
      <button id="gothenburgBtn" class="Btns">Gothenburg</button>
      <button id="kirunaBtn" class="Btns">Kiruna</button>
      <button id="falunBtn" class="Btns">Falun</button>
    `

    // Handle Coffee shop input 
    document.getElementById("stockholmBtn").addEventListener("click", () => userAnswer("Stockholm"))
    document.getElementById("gothenburgBtn").addEventListener("click", () => userAnswer("Gothenburg"))
    document.getElementById("kirunaBtn").addEventListener("click", () => userAnswer("Kiruna"))
    document.getElementById("falunBtn").addEventListener("click", () => userAnswer("Falun"))
  }, 1000)
}

const userAnswer = (selectedCoffeeShop) => {
  coffeeShop = selectedCoffeeShop
  showMessage(`You have selected ${coffeeShop}. Great choice!`, 'bot')
  coffeeShopContainer.innerHTML = ""
  setTimeout(showSummary, 1000) // Move on to summary
}

const showSummary = () => {
  showMessage(`Thank you, ${userName}, for your order of ${coffeeChoice} (${sizeChoice} size), which you will pick up at Coffee JoE in ${coffeeShop}.`, 'bot')
}

