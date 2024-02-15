// TEST updating only branch

// Global variables
let userName = ""
let mainFoodChoice = ""
let foodSubtype = ""
let partySize = "10"
let orderValue 
let onePizzaPrice = 15
let oneSaladPrice = 18
let onePastaPrice = 12
let confirmPrice = ""

// ------------------------------------------------
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
const subtypeDiv = document.createElement("div")

// PIZZA
const italianButton = document.createElement("button")
const hawaiiButton = document.createElement("button")
const veganButton = document.createElement("button")


// PASTA
const carbonaraButton = document.createElement("button")
const bolognaiseButton = document.createElement("button")
const lasagneButton = document.createElement("button")

// SALAD
const caesarButton = document.createElement("button")
const capreseButton = document.createElement("button")
const greekButton = document.createElement("button")
// Party
const partyLabel = document.createElement("label")
const partyInput = document.createElement("input")
const partyButton = document.createElement("button")
const partyForm = document.createElement("form")

//user confirm
/*const confirmDiv = document.getElementById("button-form")*/
const yesButton = document.getElementById("yes")
const noButton = document.getElementById("no")
// const confirmDiv = document.createElement("div")
// const yesButton = document.createElement("button")
// const noButton = document.createElement("button")


// ------------------------------------------------
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

// function to save name and send to showMessage, and move on
const submitName = (event) => {
  event.preventDefault() // prevents submit from clearing and starting over??
  userName = nameInput.value
  nameInput.value = ""
  showMessage(userName, "user")
  setTimeout(() => chooseFood(), 1000) // Go to next step, chooseFood
}

// function to ask for food choice and send to displayFood
const chooseFood = () => {
  showMessage(`What kind of food would you like us to serve, ${userName}?`, "bot")
  displayFood();
}

// Function to show food choices
const displayFood = () => {
  // Display buttons
  pizzaButton.textContent = "Pizza" // Adds text in button
  pastaButton.textContent = "Pasta"
  saladButton.textContent = "Salad"

  foodDiv.append(pizzaButton, pastaButton, saladButton) // Places buttons in foodDiv
  inputWrapper.replaceChild(foodDiv, nameForm) // Replaces the nameForm with the new foodDiv
  console.log("Showing food buttons")
}

// User clicks a button with event listener
// One of following select functions will continue

// IF PIZZA
const selectPizza = () => {
  mainFoodChoice = "Pizza"
  console.log("Main food: ", mainFoodChoice)
  showMessage(`${mainFoodChoice}`, "user")
  setTimeout(() => {
    showMessage(`Ok! What kind of ${mainFoodChoice}?`, "bot")
    displayPizzaSubtypes() // Go to next step
  }, 1000)
}

const displayPizzaSubtypes = () => {
  // Display buttons
  italianButton.textContent = "Italian Pizza"
  hawaiiButton.textContent = "Hawaii Pizza"
  veganButton.textContent = "Vegan Pizza"

  subtypeDiv.append(italianButton, hawaiiButton, veganButton)
  inputWrapper.replaceChild(subtypeDiv, foodDiv)
  console.log("Showing pizza buttons")
}

// IF PASTA
const selectPasta = () => {
  mainFoodChoice = "Pasta"
  console.log("Main food: ", mainFoodChoice)
  showMessage(`${mainFoodChoice}`, "user")
  setTimeout(() => {
    showMessage(`Ok! What kind of ${mainFoodChoice}?`, "bot")
    displayPastaSubtypes() // Go to next step
  }, 1000)
}
const displayPastaSubtypes = () => {
  // Display buttons
  carbonaraButton.textContent = "Pasta Carbonara"
  bolognaiseButton.textContent = "Spaghetti Bolognaise"
  lasagneButton.textContent = "Vegetarian Lasagne"

  subtypeDiv.append(carbonaraButton, bolognaiseButton, lasagneButton)
  inputWrapper.replaceChild(subtypeDiv, foodDiv)
  console.log("Showing pasta buttons")
}
// IF SALAD
const selectSalad = () => {
  mainFoodChoice = "Salad"
  console.log("Main food: ", mainFoodChoice)
  showMessage(`${mainFoodChoice}`, "user")
  setTimeout(() => {
    showMessage(`Ok! What kind of ${mainFoodChoice}?`, "bot")
    displaySaladSubtypes() // Go to next step
  }, 1000)
}

// displaySaladSubtypes
const displaySaladSubtypes = () => {
  caesarButton.textContent = "Caesar Salad"
  capreseButton.textContent = "Caprese Salad"
  greekButton.textContent = "Greek Salad"

  subtypeDiv.append(caesarButton, capreseButton,greekButton)
  inputWrapper.replaceChild(subtypeDiv, foodDiv)
}

// save Subtype and send to showMessage, and move on (foodSubtype = subtype? can we just use subtype?)
const submitSubtype = (subtype) => {
  foodSubtype = subtype
  console.log("Subtype:", foodSubtype, typeof (foodSubtype))
  showMessage(foodSubtype, "user")
  setTimeout(() => {
    showMessage(`Good choice! Our ${foodSubtype} is submlime.`, "bot")
  }, 1000)
  selectParty()// Go to next step
}

// Get party size to calculate prize
const selectParty = () => {
  console.log(`Party!🥳`)
  setTimeout(() => {
    showMessage(`How many people are in your party? 🥳`, "bot")
    displayPartyInput() // Go to next step
  }, 1000)
}


const displayPartyInput = () => {
  // Display buttons
  partyInput.type = "range"
  partyInput.id = "party-input"
  partyInput.value = "10"
  partyInput.max = "50"
  partyLabel.textContent = `Party size: ${partySize}`
  partyLabel.htmlFor = "party-input"
  partyButton.type = "submit"
  partyButton.textContent = "Send"

  partyForm.append(partyLabel, partyInput, partyButton)
  inputWrapper.replaceChild(partyForm, subtypeDiv)
  console.log("Showing party input and waiting...")
}

const submitPartysize = (event) => {
  event.preventDefault()
  console.log("Partysize:", partySize)
  showMessage(partySize, "user")
  calculateOrderValue()
}

const calculateOrderValue = () => {
  console.log(`Calculate order value for ${partySize} people...`)
  setTimeout(() => {cost()},2000)
}

const cost = () => {
  inputWrapper.removeChild(partyForm)
  if (mainFoodChoice === "Pizza"){
    orderValue = partySize * onePizzaPrice
    showMessage(`You have ordered ${partySize} ${foodSubtype}, here is your bill: ${orderValue} €. Is that ok?`, "bot")
  } else if (mainFoodChoice === "Pasta"){
    orderValue = partySize *onePastaPrice
    showMessage(`You have ordered ${partySize} ${foodSubtype}, here is your bill: ${orderValue} €. Is that ok?`, "bot")
  }else if(mainFoodChoice === "Salad"){
    orderValue = partySize * oneSaladPrice
    showMessage(`You have ordered ${partySize} ${foodSubtype}, here is your bill: ${orderValue} €. Is that ok?`, "bot")
  }

  userConfirm()
}
//////////!!!!!! button doesn't work!!!/////
const userConfirm = () => {
  /*yesButton.textConten = "yes"
  noButton.textContent = "no"

  confirmDiv.append(yesButton, noButton)*/
  inputWrapper.innerHTML=
  `<div id="button-form">
    <button id="yes" type="Submit">Yes</button>
    <button id="no" type="Submib">No</button>
  </div>`

  document.getElementById("yes").addEventListener("click", () =>  {
    confirmPrice = "Yes"
    showMessage(`Yes`, "user")
  })
  document.getElementById("no").addEventListener("click", () => {
    confirmPrice = "No"
    showMessage(`No`, "user")
  })
}

/*const finalConfirm = (answer) => {

  if (answer === "yes") {
    confirmPrice = "Yes"
    showMessage(`Yes`, "user")
    console.log(answer)
    } else {
      confirmPrice = "No"
      showMessage(`No`, "user")
      console.log(answer)
  // finalConfirm()
  }
}*/




  




// ------------------------------------------------
// Eventlisteners goes here 👇

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)

// Name
nameButton.addEventListener("click", submitName) // Event listener for submit button in form

// Food
pizzaButton.addEventListener("click", selectPizza) // 
pastaButton.addEventListener("click", selectPasta) // 
saladButton.addEventListener("click", selectSalad) // 

// Pizza
italianButton.addEventListener("click", () => submitSubtype(italianButton.textContent)) // 
hawaiiButton.addEventListener("click", () => submitSubtype(hawaiiButton.textContent)) // 
veganButton.addEventListener("click", () => submitSubtype(veganButton.textContent)) // 

// Pasta
carbonaraButton.addEventListener("click", () => submitSubtype(carbonaraButton.textContent)) // 
bolognaiseButton.addEventListener("click", () => submitSubtype(bolognaiseButton.textContent)) // 
lasagneButton.addEventListener("click", () => submitSubtype(lasagneButton.textContent)) // 

// Salad
caesarButton.addEventListener("click", () => submitSubtype(caesarButton.textContent))
capreseButton.addEventListener("click", () => submitSubtype(capreseButton.textContent))
greekButton.addEventListener("click", () => submitSubtype(capreseButton.textContent))

// Party
partyInput.addEventListener("input", () => {
  partySize = partyInput.value // Update variable partySize
  partyLabel.textContent = `Party size: ${partySize}` // Update input label
})
partyButton.addEventListener("click", submitPartysize)

// Confirm price
// yesButton.addEventListener("click", () => finalConfirm("yes"))
// noButton.addEventListener("click", () => finalConfirm("no"))


// ---------------------------------
/* OVERVIEW OF FUNCTIONS / FLOW
-->  greetUser 
Show greeting and ask for userName

submitName 
--> save name and send to showMessage,
calls next step

--> chooseFood 
ask for food choice, 
calls next step

--> displayFood 
changes to buttons with food alternatives

--> selectPizza || selectPasta || selectSalad 
logs mainFoodChoice and sends to showMessage
call next step display

--> displayPizzaSubtypes || displayPastaSubtypes || displaySaladSubtypes
change to buttons with subtypes correspondning to main choice,

--> selectSubtype
Logs subtype choice and sends to showMessage,
calls next step

--> selectParty


*/


