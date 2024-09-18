//Global LET variables that will be used in the confirmation

let userName = ''
let coffeeChoice = ''
let sizeChoice = ''
let coffeeShop = ''

// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const startButton = document.getElementById('start-button')
const inputWrapper = document.getElementById('input-wrapper')
const userInput = document.getElementById("user-input")
const nameForm = document.getElementById('name-form')


// Functions go here 👇

// 10. Handle summary 

const showSummary = () => {
  showMessage(`Thank you, ${userName}, for your order of ${coffeeChoice} (${sizeChoice} size), which you will pick up at Coffee JoE in ${coffeeShop}.`, 'bot')

  //Remove input field after Confirmation

  document.getElementById('name-form').remove()
}
// 9. Handle Coffeeshop input
const userAnswer = (selectCoffeeShop) => {
  coffeeShop = selectCoffeeShop
  showMessage(` Coffee JoE in ${coffeeShop}`, 'user')
  showMessage(`You have selected ${coffeeShop}`, 'bot')

  //Delete Coffeeshop buttons 
  document.getElementById("stockholm").remove();
  document.getElementById("gothenburg").remove();
  document.getElementById("kiruna").remove();
  document.getElementById("falun").remove();
  setTimeout(showSummary, 1000); // Move on to Summary
}

// 8. Select Coffee Shop
const handleCoffeeShopInput = () => {
  inputWrapper.classList.add("hidden")
  showMessage("Where would you like to pick up your coffee?", 'bot')
  chat.innerHTML += `
    <button id="stockholm" class="buttons">Stockholm</button>
    <button id="gothenburg" class="buttons">Gothenburg</button>
    <button id="kiruna" class="buttons">Kiruna</button>
    <button id="falun" class="buttons">Falun</button>
    `
  document.getElementById('stockholm').addEventListener("click", () => userAnswer('Stockholm'))
  document.getElementById('gothenburg').addEventListener("click", () => userAnswer('Gothenburg'))
  document.getElementById('kiruna').addEventListener("click", () => userAnswer('Kiruna'))
  document.getElementById('falun').addEventListener("click", () => userAnswer('Falun'))
}

// 7. Handle coffee size input
const handleSizeChoice = (size) => {
  sizeChoice = size
  showMessage(`I select ${size} size!`, 'user')
    
  document.getElementById("regularButton").remove()
  document.getElementById("smallButton").remove()
    
  showMessage("Great choice! Your coffee is almost on the way.", 'bot')

  setTimeout(handleCoffeeShopInput, 500) // Move on to Coffee shop question
}

// 6. Coffee size
const askForSize = () => {
  inputWrapper.classList.add("hidden")
  showMessage("What size would you like?", 'bot')
  // Add two buttons
  chat.innerHTML += `
    <section class="bot-msg">
      <button id="regularButton" class="size-button">Regular</button>
      <button id="smallButton" class="size-button">Small</button>
    </section>
  `
  document.getElementById("regularButton").addEventListener("click", () => handleSizeChoice("Regular"))
  document.getElementById("smallButton").addEventListener("click", () => handleSizeChoice("Small"))
}
// 5. Handle Coffee choice input

const handleCoffeeInput = (coffeeChoice) => {
  coffeeChoice = coffeeChoice // Update the global variable
  if (coffeeChoice === "Pumpkin Spice Latte") {
    showMessage(`${coffeeChoice}, please.`, 'user')
    showMessage("Ah, Pumpkin Spice Latte! Perfect choice", 'bot')
  } else if (coffeeChoice === "Espresso") {
    showMessage(`${coffeeChoice}, please.`, 'user')
    showMessage("An Espresso coming up! Excellent choice", 'bot')
  } else if (coffeeChoice === "Cappuccino") {
    showMessage(`${coffeeChoice}, please.`, 'user')
    showMessage("Cappuccino it is! Creamy and delicious", 'bot')
  } else if (coffeeChoice === "Americano") {
    showMessage(`${coffeeChoice}, please.`, 'user')
    showMessage("A classic Americano for you", 'bot')
  } else {
    showMessage(`${coffeeChoice}, please.`, 'user')
    showMessage(`${coffeeChoice} sounds great, but we don't have that option right now!`, 'bot')
    return 
  }
  
  //showMessage(`I would like to order a ${coffeeChoice}, please.`, 'user')  

  setTimeout(askForSize, 500) // Move on to Ask for size
}

// 4. Select Coffee

const selectCoffee = () => {
  inputWrapper.classList.add("hidden")
  showMessage(`Nice to meet you, ${userName}. Please start your order by selecting your coffee. Here are your options:`, 'bot')
    chat.innerHTML += `
      <section class="bot-msg">
        <button id="pumpkin" class="coffee-button">Pumpkin Spice Latte</button>
        <button id="cappuccino" class="coffee-button">Cappuccino</button>
        <button id="americano" class="coffee-button">Americano</button>
        <button id="espresso" class="coffee-button">Espresso</button>
        </section>
    `
  document.getElementById("pumpkin").addEventListener("click", () => handleCoffeeInput("Pumpkin Spice Latte"))
  document.getElementById("cappuccino").addEventListener("click", () => handleCoffeeInput("Cappuccino"))
  document.getElementById("americano").addEventListener("click", () => handleCoffeeInput("Americano"))
  document.getElementById("espresso").addEventListener("click", () => handleCoffeeInput("Espresso"))
  
  nameForm.removeEventListener("submit", handleUserInput) // Remove Event listener for Name
}

// 3. Handle user name input
const handleUserInput = (event) => {
  event.preventDefault()

  userName = userInput.value
  showMessage(userName, "user")
  userInput.value = "" // Clear input field

  document.getElementById('input-wrapper').remove()

  setTimeout(selectCoffee, 1000) // Move on to Select coffee
}

// Funtion to show messages from bot and user 
const showMessage = (message, sender) => {
  // Posted message from the user
  if (sender === 'user') {
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

startButton.addEventListener("click", () => {
  startChat()
  document.getElementById('name-form').addEventListener("submit", handleUserInput)
})

// 2. Greet user

const greetUser = () => {
  showMessage("Hello there fellow Java Junkie! What's your name?", 'bot')
}

//1. Click Start Conversation button
const startChat = () => {
  greetUser()
  startButton.classList.add("hidden") // Hide start button when clicked
}