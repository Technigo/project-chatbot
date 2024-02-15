// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const submitButton = document.getElementById('send-btn')
const nameInput = document.getElementById('name-input')
const nameForm = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')



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
        <img src="assets/user2.png" alt="User" />  
      </section>
    `
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot2.png" alt="Bot" />
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
  showMessage(`Hello there, what's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
}

// Eventlisteners goes here 👇


// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)



const handleNameInput = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we
  // clear it from the input
  const name = nameInput.value
  showMessage(`I'm ${name}`, 'user')
  nameInput.value = ""
  setTimeout(() => firstChoice(name), 1000);
  nameForm.remove()

  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.


}

submitButton.onclick = handleNameInput

let choice

const firstChoice = (name) => {
  showMessage(`So ${name} what would you like to order?`, "bot")
  inputWrapper.innerHTML = `<form id ="order-option">
  <div class="categories">
  <button class="order-btn" id="coffee" type="submit">Coffee</button>
  <button class="order-btn" id="bread" type="submit">Bread</button>
  <button class="order-btn" id="pastry" type="submit">Pastry</button></div></form>`
  const orderOption = document.getElementById('order-option')
  document.getElementById("coffee").addEventListener("click", (handleFirstChoice) => {
    //added prevent default
    handleFirstChoice.preventDefault()
    choice = "coffee"
    console.log(choice)
    showMessage("I would like a coffee, please!", "user")
    setTimeout(() => handleSecondChoice(choice), 1000)
    orderOption.remove()
  })
  document.getElementById("bread").addEventListener("click", (handleFirstChoice) => {
    //added prevent default
    handleFirstChoice.preventDefault()
    choice = "bread"
    console.log(choice)
    showMessage("I would like some bread, please!", "user")
    setTimeout(() => handleSecondChoice(choice), 1000)
    orderOption.remove()
  })
  document.getElementById("pastry").addEventListener("click", (handleFirstChoice) => {
    //added prevent default
    handleFirstChoice.preventDefault()
    choice = "pastry"
    console.log(choice)
    showMessage("I would like a pastry, please!", "user")
    setTimeout(() => handleSecondChoice(choice), 1000)
    orderOption.remove()
  })
}
let subChoice

const handleSecondChoice = (choice) => {
  showMessage(`One ${choice} coming up, what kind of ${choice} would you like?`, "bot")
  if (choice === "coffee") {
    inputWrapper.innerHTML += `<form id ="sub-categories">
    <div class="sub-categories">
    <button class="order-btn" id="filter" type="submit">Filter Coffee</button>
    <button class="order-btn" id="espresso" type="submit">Espresso</button>
    <button class="order-btn" id="flat" type="submit">Flat White</button></div></form>`
    const subCategories = document.getElementById('sub-categories')
    document.getElementById("filter").addEventListener("click", (handleSecondChoice) => {
      handleSecondChoice.preventDefault()
      subChoice = "filter coffee"
      console.log(subChoice)
      showMessage("I would like a filter coffee, please!", "user")
      setTimeout(() => handleThirdChoice(subChoice), 1000)
      subCategories.remove()
    })
    document.getElementById("espresso").addEventListener("click", (handleSecondChoice) => {
      handleSecondChoice.preventDefault()
      subChoice = "espresso"
      console.log(subChoice)
      showMessage("I would like an espresso, please!", "user")
      setTimeout(() => handleThirdChoice(subChoice), 1000)
      subCategories.remove()
    })
    document.getElementById("flat").addEventListener("click", (handleSecondChoice) => {
      handleSecondChoice.preventDefault()
      subChoice = "flat white"
      console.log(subChoice)
      showMessage("I would like a flat white, please!", "user")
      setTimeout(() => handleThirdChoice(subChoice), 1000)
      subCategories.remove()
    })
  } else if (choice === "bread") {
    inputWrapper.innerHTML += `<form id ="sub-categories">
    <div class="sub-categories">
    <button class="order-btn" id="baguette" type="submit">Baguette</button>
    <button class="order-btn" id="sourdough" type="submit">Sourdough</button>
    <button class="order-btn" id="rye" type="submit">Rye Bread</button></div></form>`
    const subCategories = document.getElementById('sub-categories')
    document.getElementById("baguette").addEventListener("click", (handleSecondChoice) => {
      handleSecondChoice.preventDefault()
      subChoice = "baguette"
      console.log(subChoice)
      showMessage("I would like a baguette, please!", "user")
      setTimeout(() => handleThirdChoice(subChoice), 1000)
      subCategories.remove()
    })
    document.getElementById("sourdough").addEventListener("click", (handleSecondChoice) => {
      handleSecondChoice.preventDefault()
      subChoice = "sourdough bread"
      console.log(subChoice)
      showMessage("I would like sourdough bread, please!", "user")
      setTimeout(() => handleThirdChoice(subChoice), 1000)
      subCategories.remove()
    })
    document.getElementById("rye").addEventListener("click", (handleSecondChoice) => {
      handleSecondChoice.preventDefault()
      subChoice = "rye bread"
      console.log(subChoice)
      showMessage("I would like a rye bread, please!", "user")
      setTimeout(() => handleThirdChoice(subChoice), 1000)
      subCategories.remove()
    })
  } else if (choice === "pastry") {
    inputWrapper.innerHTML += `<form id ="sub-categories">
    <div class="sub-categories">
    <button class="order-btn" id="semla" type="submit">Semla</button>
    <button class="order-btn" id="cinnamon" type="submit">Cinnamon Bun</button>
    <button class="order-btn" id="brownie" type="submit">Brownie</button></div></form>`
    const subCategories = document.getElementById('sub-categories')
    document.getElementById("semla").addEventListener("click", (handleSecondChoice) => {
      handleSecondChoice.preventDefault()
      subChoice = "semla"
      console.log(subChoice)
      showMessage("I would like a semla, please!", "user")
      setTimeout(() => handleThirdChoice(subChoice), 1000)
      subCategories.remove()
    })
    document.getElementById("cinnamon").addEventListener("click", (handleSecondChoice) => {
      handleSecondChoice.preventDefault()
      subChoice = "cinnamon bun"
      console.log(subChoice)
      showMessage("I would like cinnamon bun, please!", "user")
      setTimeout(() => handleThirdChoice(subChoice), 1000)
      subCategories.remove()
    })
    document.getElementById("brownie").addEventListener("click", (handleSecondChoice) => {
      handleSecondChoice.preventDefault()
      subChoice = "brownie"
      console.log(subChoice)
      showMessage("I would like a brownie, please!", "user")
      setTimeout(() => handleThirdChoice(subChoice), 1000)
      subCategories.remove()
    })
  }
}

const handleThirdChoice = (subChoice) => {
  showMessage(`How many ${subChoice}s would you like?`, "bot")
  inputWrapper.innerHTML += ` <form id="number-form">
  <input id="number-input" type="text" />
  <button class="send-btn" id="amount-btn" type="submit">Send</button></form>`
  //härifrån buggar det
  const numberInput = document.getElementById("number-input")
 document.getElementById("amount-btn").addEventListener("click", () => {
  handleThirdChoice.preventDefault()
  const orderAmount = numberInput.value
  numberInput.value = ""
  showMessage(`I would like to order ${orderAmount} ${subChoice}s`, 'user')
  }
)}
