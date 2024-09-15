// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const nameForm = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')

// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {

  console.log("sender: ", sender)
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

const handleNameInput = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we
  // clear it from the input
  const name = nameInput.value.trim()

  if (name !== "") {
    showMessage(name, "user")
    nameInput.value = ""
    showFoodOptions(name)
  } else {
    showMessage('Please enter a valid name.', 'bot')
  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.
 }
} 
// Eventlisteners goes here 👇
//First menu option
const showFoodOptions = (name) =>  {
  showMessage(`hello ${name}! what would you like to order?`,'bot')
  inputWrapper.innerHTML = `
    <button id="tacosButton">Tacos</button>
    <button id="pizzaButton">Pizza</button>
    <button id="pastaButton">Pasta</button>
  `
//Here we listen for the event/click that selects the food 
  document.getElementById('tacosButton').addEventListener('click', () => handleFoodSelection('Tacos'))
  document.getElementById('pizzaButton').addEventListener('click', () => handleFoodSelection('Pizza'))
  document.getElementById('pastaButton').addEventListener('click', () => handleFoodSelection('Pasta'))
}

//Return message telling which food was selected 
//Call the function askForDrink
const handleFoodSelection = (food) => {
  showMessage(`I would like to have ${food}! thanks 🥰`, 'user')
  askForDrink()
}

const askForDrink = () => {
  showMessage("amazing! would you like a drink with that?", 'bot')
  inputWrapper.innerHTML = `
    <button id="yesButton">Yes</button>
    <button id="noButton">No</button>
  `

  document.getElementById('yesButton').addEventListener('click', () => handleDrinkSelection(true))
  document.getElementById('noButton').addEventListener('click', () => handleDrinkSelection(false))
}

const handleDrinkSelection = (wantsDrink) => {
  if (wantsDrink) {
    showMessage("Yes, I would like a drink.", 'user')
    setTimeout(() => showDrinkOptions(), 1000)
  } else {
    showMessage("No, thanks.", 'user')
    setTimeout(() => askForDessert(), 1000)
  }
}

//A dropdown is presented to select the type of drink.
const showDrinkOptions = () => {
  showMessage("What drink would you like?", 'bot')
  inputWrapper.innerHTML = `
    <select id="drinkSelect">
      <option value="" disabled selected>Select a drink</option>
      <option value="Coke">Coke</option>
      <option value="Sprite">Sprite</option>
      <option value="Water">Water</option>
    </select>
    <button id="selectDrinkButton">Confirm</button>
  `
//Conditional Checks: The bot uses if...else statements to handle different responses
  document.getElementById('selectDrinkButton').addEventListener('click', () => {
    const selectedDrink = document.getElementById('drinkSelect').value
    if (selectedDrink) {
      showMessage(`I'll have a ${selectedDrink}.`, 'user')
      setTimeout(() => askForDessert(), 1000)
    } else {
      showMessage("Please select a drink.", 'bot')
    }
  })
}

const askForDessert = () => {
  showMessage("Would you like some dessert?", 'bot')
  inputWrapper.innerHTML = `
    <button id="dessertYesButton">Yes</button>
    <button id="dessertNoButton">No</button>
  `

  document.getElementById('dessertYesButton').addEventListener('click', () => handleDessertSelection(true))
  document.getElementById('dessertNoButton').addEventListener('click', () => handleDessertSelection(false))
}

const handleDessertSelection = (wantsDessert) => {
  if (wantsDessert) {
    showMessage("Yes, I would love some dessert!", 'user')
    setTimeout(() => showFinalMessage(), 1000)
  } else {
    showMessage("No, I'm good.", 'user')
    setTimeout(() => showFinalMessage(), 1000)
  }
}

const showFinalMessage = () => {
  showMessage("Thank you for your order! It will be ready soon. Have a great day!", 'bot')
  inputWrapper.innerHTML = "" // Clear the input wrapper
}

nameForm.addEventListener('submit', () => handleNameInput(event))

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greetUser, 200)
