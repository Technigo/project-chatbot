// DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const sendBtn = document.getElementById('send-btn')
const inputField = document.getElementById('input-field')

// Global variables
let questionNumber = 1
let userName = ''
let type = ''
let icing = ''
let colour = ''
let size = ''
let receivedInput = true

// functions for the replies
const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

// function for the waiting bubbles
// not able for now to remove these bubbles when the message appears
const processingTime = () => {
  botReply(`...`)
}

// conditional to place the chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user1.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot1.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// conditionals to go from one question to the other
const nextQuestion = (message) => {
  // conditional to prevent double click
  if (receivedInput == true) {
    receivedInput = false
    if (questionNumber === 1) {
      userName = message
      // conditional to decide which answer should be displayed
      if (userName == '') {
        userReply(`I don't want to say my name`)
      } else {
        userReply(`I'm ${userName}`)
      }
      inputField.value = ''
      setTimeout(() => processingTime(message), 100)
      setTimeout(() => showCakes(message), 1000)
    } else if (questionNumber === 2) {
      type = message
      userReply(message)
      setTimeout(() => processingTime(message), 100)
      setTimeout(() => showIcing(message), 1000)
    } else if (questionNumber === 3) {
      icing = message
      userReply(message)
      // conditional to decide which question should be the next
      if (message === "without icing") {
        questionNumber++
        setTimeout(() => processingTime(message), 100)
        setTimeout(() => showSize(message), 1000)
      } else {
        setTimeout(() => processingTime(message), 100)
        setTimeout(() => showColour(message), 1000)
      }
    } else if (questionNumber === 4) {
      colour = message
      userReply(message)
      setTimeout(() => processingTime(message), 100)
      setTimeout(() => showSize(message), 1000)
    } else if (questionNumber === 5) {
      size = message
      userReply(message)
      setTimeout(() => processingTime(message), 100)
      setTimeout(() => showOrder(message), 1000)
    } else {
      userReply(message)
      setTimeout(() => processingTime(message), 100)
      setTimeout(() => thankYou(size, icing), 1000)
    }
  }
}

// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`Welcome at Bakery E&N!<br/>What's your name?`)
}

const showCakes = (msg) => {
  questionNumber++
  if (userName == '') {
    botReply(`What type of cake would you like, mysterious person?`)
  } else {
    botReply(`What type of cake would you like, ${msg}?`)
  }
  inputWrapper.innerHTML = `
  <button id="chocolateBtn">Chocolate</button>
  <button id="vanillaBtn">Vanilla</button>
  <button id="fruitBtn">Fruit</button>
  `
  receivedInput = true // re-enables clicking on button for this question
  document.getElementById('chocolateBtn').addEventListener('click', () => nextQuestion('chocolate'))
  document.getElementById('vanillaBtn').addEventListener('click', () => nextQuestion('vanilla'))
  document.getElementById('fruitBtn').addEventListener('click', () => nextQuestion('fruit'))
}

const showIcing = (msg) => {
  questionNumber++
  botReply(`A ${msg} cake, what a great choice! Do you want icing?<br/>(+ 5 €)`)
  inputWrapper.innerHTML = `
  <button id="yesBtn">Yes please!</button>
  <button id="noBtn">No, too sweet!</button>
  `
  receivedInput = true
  document.getElementById('yesBtn').addEventListener('click', () => nextQuestion('with icing'))
  document.getElementById('noBtn').addEventListener('click', () => nextQuestion('without icing'))
}

const showColour = () => {
  questionNumber++
  botReply(`Always better with icing! What colour?`)
  inputWrapper.innerHTML = `
  <button class="pink-btn" id="pinkBtn">Pink</button>
  <button class="green-btn" id="greenBtn">Green</button>
  <button class="yellow-btn" id="yellowBtn">Yellow</button>
  `
  receivedInput = true
  document.getElementById('pinkBtn').addEventListener('click', () => nextQuestion('pink'))
  document.getElementById('greenBtn').addEventListener('click', () => nextQuestion('green'))
  document.getElementById('yellowBtn').addEventListener('click', () => nextQuestion('yellow'))
}

const showSize = () => {
  console.log()
  questionNumber++
  if (userName == '') {
    botReply(`Noted, enigmatic human! What size do you want?`)
  } else {
    botReply(`Noted, ${userName}! What size do you want?`)
  }
  inputWrapper.innerHTML = `
  <select id="select">
    <option value="" selected disabled>Select the number of pieces <span role="img" aria-label="curved downwards arrow">&#x21B4</span></option>
    <option value="4 pieces">4 pieces</option>
    <option value="8 pieces">8 pieces</option>
    <option value="12 pieces">12 pieces</option>
    <option value="16 pieces">16 pieces</option>
  </select>
  `
  const select = document.getElementById('select')
  receivedInput = true
  select.addEventListener('change', () => nextQuestion(select.value))

  // button option commented out
  //   `
  // <button id="4Btn">4 pieces</button>
  // <button id="8Btn">8 pieces</button>
  // <button id="12Btn">12 pieces</button>
  // <button id="16Btn">16 pieces</button>
  // `
  // receivedInput = true
  // document.getElementById('4Btn').addEventListener('click', () => nextQuestion('4 pieces'))
  // document.getElementById('8Btn').addEventListener('click', () => nextQuestion('8 pieces'))
  // document.getElementById('12Btn').addEventListener('click', () => nextQuestion('12 pieces'))
  // document.getElementById('16Btn').addEventListener('click', () => nextQuestion('16 pieces'))
}

const showOrder = () => {
  questionNumber++
  // conditional for the recap of the order about with or without icing
  let icingString = ''
  if (colour !== '') {
    icingString = ' with ' + colour + ' icing'
  }
  botReply(`Are you sure that you want to order a ${size} ${type} cake${icingString}?`)
  inputWrapper.innerHTML = `
  <button id="yesBtn">Yes, I confirm!</button>
  <button id="noBtn">No, start over!</button>
  `
  receivedInput = true
  document.getElementById('noBtn').addEventListener('click', () => {
    location.reload()
    return false
  })
  receivedInput = true
  document.getElementById('yesBtn').addEventListener('click', () => {
    nextQuestion('I am!')
    new Audio("./assets/confirmed.wav").play() // sound effect playing at the end only when the user confirms
  })
}

const thankYou = (size, icing) => {
  let price = ''
  // conditional to set the price of the cake based on size
  if (size === "4 pieces") {
    price = 10
  } else if (size === "8 pieces") {
    price = 20
  } else if (size === "12 pieces") {
    price = 30
  } else {
    price = 40
  }
  // conditional to set the price of the cake based on with or without icing
  if (icing === "with icing") {
    price += 5
  }
  botReply(`Thanks you for your order! It will be ${price} €, please <a class="mailto" href="mailto:payment@bakery.com"><strong>contact Bakery E&N</strong></a> for your payment.`)
  inputWrapper.innerHTML = ``
}

// eventlistener
sendBtn.addEventListener('click', () => {
  nextQuestion(inputField.value)
})

// little delay before the greeting function is called after the website is loaded
setTimeout(greeting, 1000)

// prevents default reset of the form after being submitted
document.getElementById('name-form').onsubmit = event => {
  event.preventDefault()
}