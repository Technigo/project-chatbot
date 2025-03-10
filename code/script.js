// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')

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
  showMessage("Hello and welcome to the café-bot, what's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
}

const foodOptionsForm4 = document.getElementById("optionForm4")
foodOptionsForm4.style.display = "none"

const foodOptionsForm3 = document.getElementById("optionForm3")
foodOptionsForm3.style.display = "none"

const foodOptionsForm2 = document.getElementById("optionForm2")
foodOptionsForm2.style.display = "none"

const foodOptionsForm = document.getElementById("optionForm")
foodOptionsForm.style.display = "none"
const inputForm = document.getElementById("name-form")

const foodOptions = (name) => {
  showMessage(`Nice to meet you ${name}. What would you like to order?`, "bot")
  foodOptionsForm.style.display = "block"
  inputForm.style.display = "none"
}

const beverageOptions = () => {
  showMessage("what kind of beverage would you like?", "bot")
  foodOptionsForm2.style.display = "block"
  foodOptionsForm.style.display = "none"
  inputForm.style.display = "none"
}

const pastryOptions = () => {
  showMessage("what kind of pastry would you like?", "bot")
  foodOptionsForm3.style.display = "block"
  foodOptionsForm.style.display = "none"
  inputForm.style.display = "none"
}

const cakeOptions = () => {
  showMessage("what kind of cake would you like?", "bot")
  foodOptionsForm4.style.display = "block"
  foodOptionsForm.style.display = "none"
  inputForm.style.display = "none"
}

const hideOptions = () => {
  showMessage("Thank you for your order, your order will arrive soon.", "bot")
  foodOptionsForm4.style.display = "none"
  foodOptionsForm3.style.display = "none"
  foodOptionsForm2.style.display = "none"
}


// Eventlisteners goes here 👇

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)

const button = document.getElementById("send-btn")

const nameInput = document.getElementById("name-input")

button.onclick = (event) => {
  event.preventDefault()
  const name = nameInput.value
  showMessage(name, "user")
  nameInput.value = ""
  setTimeout(() => foodOptions(name), 1000)
}

const beverageButton = document.getElementById("beverage-btn")

beverageButton.onclick = (event) => {
  event.preventDefault()
  showMessage("Beverage", "user")
  beverageOptions()
}

const pastryButton = document.getElementById("pastry-btn")

pastryButton.onclick = (event) => {
  event.preventDefault()
  showMessage("Pastry", "user")
  pastryOptions()
}

const cakeButton = document.getElementById("cake-btn")

cakeButton.onclick = (event) => {
  event.preventDefault()
  showMessage("Cake", "user")
  cakeOptions()
}

/*what type of beverage*/ 


const coffeeButton = document.getElementById("coffee-btn")

coffeeButton.onclick = (event) => {
  event.preventDefault()
  showMessage("Coffee", "user")
  hideOptions()
}

const teaButton = document.getElementById("tea-btn")

teaButton.onclick = (event) => {
  event.preventDefault()
  showMessage("Tea", "user")
  hideOptions()
}

const chocolateButton = document.getElementById("chocolate-btn")

chocolateButton.onclick = (event) => {
  event.preventDefault()
  showMessage("Chocolate", "user")
  hideOptions()
}

/*what type of pastry*/

const cinnamonButton = document.getElementById("cinnamon-btn")

cinnamonButton.onclick = (event) => {
  event.preventDefault()
  showMessage("Cinnamon roll", "user")
  hideOptions()
}

const danishButton = document.getElementById("danish-btn")

danishButton.onclick = (event) => {
  event.preventDefault()
  showMessage("Danish pastry", "user")
  hideOptions()
}

const chocolateBallButton = document.getElementById("chocolateBall-btn")

chocolateBallButton.onclick = (event) => {
  event.preventDefault()
  showMessage("Chocolate ball", "user")
  hideOptions()
}

/*what type of cake*/

const princessButton = document.getElementById("princess-btn")

princessButton.onclick = (event) => {
  event.preventDefault()
  showMessage("Princess cake", "user")
  hideOptions()
}

const almondButton = document.getElementById("almond-btn")

almondButton.onclick = (event) => {
  event.preventDefault()
  showMessage("Almond cake", "user")
  hideOptions()
}

const chocolateCakeButton = document.getElementById("chocolateCake-btn")

chocolateCakeButton.onclick = (event) => {
  event.preventDefault()
  showMessage("Chocolate cake", "user")
  hideOptions()
}

