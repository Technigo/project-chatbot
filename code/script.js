// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('inputWrapper')
const form =document.getElementById('feeling-form')
const feelingInput = document.getElementById('feeling-input')
const sendBtn = document.getElementById('send')


// Global variables, if you need any, declared here


// Functions declared here

let questionNumber = 1

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    //console.log('chatbot')
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

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => handleFeelingAnswer(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => handleQuoteChoice(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showDishSize(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => showPrice(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}


// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`Hi! How you doing?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleFeelingQuestion = (event) => {
  event.preventDefault()
  console.log('feeling question invoked', feelingInput.value)
  name = feelingInput
  userReply(`${feelingInput.value}`, 'user') 
 }

const handleFeelingAnswer = (message) => {
  questionNumber++
  botReply(`OK, I understand, choose a quote`, 'bot') 

  inputWrapper.innerHTML = `
    <button id="realityCheckBtn">Reality check</button>
    <button id="pickMeUpBtn">Pick-me-up</button>
    <button id="lifeAdviceBtn">Life Advice</button>
  `

  document
    .getElementById('realityCheckBtn')
    .addEventListener('click', () => nextQuestion('a reality check'))
  document
    .getElementById('pickMeUpBtn')
    .addEventListener('click', () => nextQuestion('a pick-me-up'))
  document
    .getElementById('lifeAdviceBtn')
    .addEventListener('click', () => nextQuestion('a life advice'))
}

const handleQuoteChoice  = (type) => {
  questionNumber++
  botReply(`Oh, so you want ${type}? In what area?`)

  if (type === 'realityCheck') {
    inputWrapper.innerHTML = `
    <button id="covid">Covid</button>
    <button id="sleepDeprivation">Lack of sleep</button>
    <button id="rollerCoaster">Emotional Rollercoaster</button>
    `
    
  } else if (type === 'pickMeUp') {
    inputWrapper.innerHTML = `
    <button id="pepTalk">Peptalk</button>
    <button id="funnyJoke"Funny joke</button>
    <button id="meme">Meme</button>
    `
  } else {
    inputWrapper.innerHTML = `
    <button id="love">Love</button>
    <button id="career">Career</button>
    `
  document
    .getElementById('covidBtn')
    .addEventListener('click', () => nextQuestion('I choose a reality check about Covid'))
  document
    .getElementById('sleepDeprivationBtn')
    .addEventListener('click', () => nextQuestion('I choose a reality check about sleep deprivation'))
  document
    .getElementById('rollerCoasterBtn')
    .addEventListener('click', () => nextQuestion('I choose a reality check about this emotional rollercoaster'))
  document
    .getElementById('pepTalkBtn')
    .addEventListener('click', () => nextQuestion('I choose a pick-me-up about peptalk'))
  document
    .getElementById('funnyJokeBtn')
    .addEventListener('click', () => nextQuestion('I choose a pick-me-up about funny joke'))
  document
    .getElementById('memeBtn')
    .addEventListener('click', () => nextQuestion('I choose a meme as a pick-me-up'))
  document
    .getElementById('loveBtn')
    .addEventListener('click', () => nextQuestion('I choose life advice about love'))
  document
    .getElementById('careerBtn')
    .addEventListener('click', () => nextQuestion('I choose life advice about career'))
 
  }

}

// Set up your eventlisteners here
form.addEventListener ('submit', handleFeelingQuestion)
form.addEventListener ('submit', handleFeelingAnswer)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)
