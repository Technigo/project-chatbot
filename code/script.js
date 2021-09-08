// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const form = document.getElementById('name-form')
// const sendButton = document.getElementById('send')

// Global variables, if you need any, declared here
let questionStep = 1

// Functions declared here
// this is made not to type showMessage every time
const botAnswer = (inputMessage) => {
  showMessage(inputMessage, 'bot')
}

const userAnswer = (inputMessage) => {
  showMessage(inputMessage, 'user')
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    // Add a console log here and see when it's being logged and not :)

    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/paw-green.png" class="paw" alt="User" />  
      </section>
    `
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
  chat.scrollTop = chat.scrollHeight
}

const usersPet = (message) => {

  if (questionStep === 1) {
    userAnswer(message)
    setTimeout(() => petTypes(message), 1000)
  } else if (questionStep === 2) {
    userAnswer(message)
    setTimeout(() => petServices(message), 2000)
  } else if (questionStep === 3) {
    userAnswer(message)
    setTimeout(() => priceInformation(message), 1000)
  } else if (questionStep === 4) {
    userAnswer(message)
    setTimeout(() => petPayment(message), 1000)
  } else {
    userAnswer(message)
    setTimeout(petBye, 1000)
  }
}

// Starts here
const greeting = () => {
  questionStep = 1
  botAnswer(`Welcome to our salon! What's your name?`)
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
// 1st user answer
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = nameInput.value
  userAnswer(`My name is ${name}`)
  nameInput.value = ''
  setTimeout(() => petTypes(name), 1000)
})


const petTypes = (name) => {
  questionStep++
  botAnswer(`Nice to meet you ${name} :) What kind of pet needs our care?`)

  inputWrapper.innerHTML = `
  <button id= 'dogButton'>dog 🐶</button>
  <button id= 'catButton'>cat 🐱</button>
  `
  document.getElementById('dogButton').addEventListener('click', () => usersPet('dog'))
  document.getElementById('catButton').addEventListener('click', () => usersPet('cat'))

}

const petServices = (type) => {
  questionStep++
  botAnswer(`So you are a ${type} person :) Please select a service for your pet.`)

  inputWrapper.innerHTML = `
  <select id = 'select'>
    <option value='' selected disabled> Choose service </option>
    <option value='Bathing'>Bathing</option>
    <option value='Brushing'>Brushing</option>
    <option value='Nail trimming'>Nail trimming</option>
    <option value='Haircut'>Haircut</option>
    </select> 
    `
  const select = document.getElementById('select')
  select.addEventListener('change', () => usersPet(select.value))

  // inputWrapper.innerHTML = `
  //   <button id='firstService'>Bathing </button>
  //   <button id='secondService'>Brushing</button>
  //   <button id='thirdService'>Nail trimming</button>
  //   <button id='forthService'>Haircut</button>
  // `


  // document.getElementById('firstService').addEventListener('click', () => usersPet('Bathing'))
  // document.getElementById('secondService').addEventListener('click', () => usersPet('Brushing'))
  // document.getElementById('thirdService').addEventListener('click', () => usersPet('Nail trimming'))
  // document.getElementById('forthService').addEventListener('click', () => usersPet('Haircut'))
}

const priceInformation = (choice) => {
  questionStep++
  if (choice === 'bathing') {
    botAnswer(`So ${choice} is a great choice! That will cost 20$`);
  } else if (choice === 'brushing') {
    botAnswer(`Great, so you want ${choice}! That will cost 15$`);
  } else if (choice === 'nail trimming') {
    botAnswer(`Wow, luxirous choice! ${choice} will cost 13$`);
  } else {
    botAnswer(`Great choice! ${choice} will cost 25$`)
  }
  inputWrapper.innerHTML = `
  <button id='okButton'>OK</button>`

  document.getElementById('okButton').addEventListener('click', () => usersPet('OK'))
}

const petPayment = () => {
  questionStep++
  botAnswer(`Would you like to pay by cash or by card ? `);
  inputWrapper.innerHTML = `
      <button id = 'cashButton'>Cash</button >
      <button id='cardButton'>Card</button>`

  document.getElementById('cashButton').addEventListener('click', () => usersPet('Cash'))
  document.getElementById('cardButton').addEventListener('click', () => usersPet('Card'))
}

const petBye = () => {
  botAnswer(`Thank you for your booking! We are looking forward to meet you and your pet.`)
  botAnswer(`Have a nice day! 👋🏼`)
  inputWrapper.innerHTML = ``
}


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded. Tried to changed to 2000
setTimeout(greeting, 1000)