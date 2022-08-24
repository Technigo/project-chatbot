// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const submitButton = document.querySelector(".send-btn");
const inputField = document.querySelector("#name-input");
const inputWrapper = document.querySelector(".input-wrapper");
const buttonWrapper = document.querySelector("#button-wrapper");
let itemButton = document.querySelectorAll(".answer-button");
const reusableButtons = document.querySelector("#reusable-buttons");

// If you need any global variables that you can use across different functions, declare them here:
let heroName;
let heroHp = 2 // 2 is the nuber HP you start with
const heroInventory = [];



// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
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
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello adventurer, what is your name?", 'bot');
}
setTimeout(greeting, 1);

// MATBOTEN

let questionNumber = 1

// Creating functions for the but and hero to converse. We will use these function many times.
const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const heroReply = (msg) => {
  showMessage(msg, 'user')
  console.log (msg);
}

//This is a function to preogress the conversation and makes sure that messages are not repeated. 
const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    heroReply(message)
    input.value = ''
    setTimeout(() => showItems(message), 1000)
  } else if (questionNumber === 2) {
    heroReply(message)
    setTimeout(() => showPepp(message), 1000)
  } else if (questionNumber === 3) {
    heroReply(message)
    setTimeout(() => showRoad(message), 1000)
  } else if (questionNumber === 4) {
    heroReply(message)
    setTimeout(() => showMethod(message), 1000)
  } else {
    heroReply(message)
    setTimeout(thankYou, 1000)
  }
}

// Starts here

const showItems = (msg) => {
  questionNumber++
  botReply(
    `${msg}, you are about to embark on an adventure! Choose one item below to aid you on you quest. 
    I advise you to choose wisely!`
  )}

  inputWrapper.innerHTML = `
    <button id="item1">1</button>
    <button id="item2">2</button>
    <button id="item3">3</button>
  `

  document
    .getElementById('item1')
    .addEventListener('click', () => nextQuestion('pizza'))
  document
    .getElementById('item2')
    .addEventListener('click', () => nextQuestion('pasta'))
  document
    .getElementById('item3')
    .addEventListener('click', () => nextQuestion('salad'))


const showMenu = (type) => {
  questionNumber++

  botReply(
    `Oh so you're in the mood for ${type}? Great choice. Select something from the menu!`
  )

  if (type === 'pizza') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select a pizza...</option>
        <option value="margerita">Margerita</option>
        <option value="vesuvio">Vesuvio</option>
        <option value="peperoni">Peperoni</option>
      </select>
    `
  } else if (type === 'pasta') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select a pasta...</option>
        <option value="Carbonara">Pasta Carbonara</option>
        <option value="Pomodoro">Pasta Pomodoro</option>
        <option value="Frutti di Mare">Frutti di Mare</option>
      </select>
    `
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select a salad...</option>
        <option value="Greek Salad">Greek Salad</option>
        <option value="Caesar Salad">Caesar Salad</option>
        <option value="Chicken Salad">Chicken Salad</option>
      </select>
    `
  }

  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}

const showDishSize = (dish) => {
  questionNumber++

  botReply(`One ${dish} coming up! Will that be for an adult or a child?`)

  inputWrapper.innerHTML = `
    <button id="adult">👨🏽‍🦳</button>
    <button id="child">🧒🏽</button>
  `

  document
    .getElementById('adult')
    .addEventListener('click', () => nextQuestion('adult'))
  document
    .getElementById('child')
    .addEventListener('click', () => nextQuestion('child'))
}

const showPrice = (size) => {
  questionNumber++

  let price
  if (size === 'adult') {
    price = '€15'
  } else {
    price = '€10'
  }

  botReply(
    `One ${size} sized dish will be prepared for you. That'll be ${price}. 
    Are you sure you want to order this?`
  )

  inputWrapper.innerHTML = `
    <button id="restart">NO</button>
    <button id="confirm">YES</button>
  `

  document.getElementById('restart').addEventListener('click', () => {
    location.reload()
    return false
  })
  document
    .getElementById('confirm')
    .addEventListener('click', () => nextQuestion('Yes!'))
}

const thankYou = () => {
  botReply(`Thank you for your order! See you soon 👋🏼`)
  inputWrapper.innerHTML = ``
}

sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})

// When website loaded, chatbot asks first question. 
setTimeout(greeting, 1000)
