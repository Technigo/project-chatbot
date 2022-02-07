// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')
const form = document.getElementById('form')

// Global variables, if you need any, declared here

let questionNumber = 1

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}


// Functions declared here

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
    setTimeout(() => showTattooStyles(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showDesigns(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showPlacement(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => showPrice(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}


// Starts here

//QUESTION 1
const greeting = () => {
  questionNumber = 1
  showMessage(`Hi, let's start with your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

form.addEventListener('submit', (bajskorv) => {
  bajskorv.preventDefault()
  nextQuestion(input.value)
 })


//QUESTION 2

const showTattooStyles = (msg) => {
  questionNumber = 2
  botReply(
    `Welcome, ${msg}. What tattoo style are you looking to get?`
  )

  inputWrapper.innerHTML = `
    <button id="osBtn">Old school</button>
    <button id="bwBtn">Black and grey</button>
    <button id="rlsmBtn">Realism</button>
  `

  document
    .getElementById('osBtn')
    .addEventListener('click', () => nextQuestion('oldschool'))
  document
    .getElementById('bwBtn')
    .addEventListener('click', () => nextQuestion('blackandgrey'))
  document
    .getElementById('rlsmBtn')
    .addEventListener('click', () => nextQuestion('realism'))
}

//QUESTION 3

const showDesigns = (type) => {
  questionNumber = 3

  botReply(
    `Excellent choice, let's get you a ${type}-type tattoo. What design will that be?`
  )

  if (type === 'oldschool') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select a design...</option>
        <option value="rose">Rose</option>
        <option value="skull">Skull</option>
        <option value="anchor">Anchor</option>
      </select>
    `
  } else if (type === 'blackandgrey') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select a design...</option>
        <option value="portrait">Portrait</option>
        <option value="animal">Animal</option>
        <option value="flowers">Flowers</option>
      </select>
    `
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select a design...</option>
        <option value="Superhero/villain">Superhero/villain</option>
        <option value="religious">Religious</option>
        <option value="mythology">Mythology</option>
      </select>
    `
  }
  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}

//QUESTION 4

const showPlacement = (design) => {
  questionNumber = 4

  botReply(`One ${design} coming up! Will that be on your arm or leg?`)

  inputWrapper.innerHTML = `
    <button id="arm">💪</button>
    <button id="leg">🦵</button>
  `

  document
    .getElementById('arm')
    .addEventListener('click', () => nextQuestion('arm'))
  document
    .getElementById('leg')
    .addEventListener('click', () => nextQuestion('leg'))
}


//QUESTION 5
const showPrice = (placement) => {
  questionNumber = 5

  let price
  if (placement === 'arm') {
    price = '€150'
  } else {
    price = '€200'
  }

  botReply(
    `We'll get your ${placement} decorated in no time. That'll be ${price}. Are you ready to confirm your appointment?`
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


//QUESTION 2
const thankYou = () => {
  botReply(`Thank you for your booking!`)
  inputWrapper.innerHTML = ``
}



// Set up your eventlisteners here



sendBtn.addEventListener('click', () => nextQuestion(input.value))


input.addEventListener('keypress', (event) => {
  event.preventDefault()
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
