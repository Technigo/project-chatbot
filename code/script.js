// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const sendBtn = document.getElementById('send-btn')
const inputField = document.getElementById('input-field')

// Global variables, if you need any, declared here
let questionNumber = 1
let userName = ''
let type = ''
let icing = ''
let colour = ''
let size = ''
let receivedInput = true // double click: variable for preventing double click

// Functions declared here
const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log() //Move this to line 12/13?
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user1.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log()
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot1.png" alt="Bot" />
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

  if (receivedInput == true) { // double click: prevent double click
    receivedInput = false // double click: prevent double click
    if (questionNumber === 1) {
      userName = message
      if (userName == '') {
        userReply(`I don't want to say my name`)
      } else {
        userReply(`I'm ${userName}`)
      }
      inputField.value = ''
      setTimeout(() => showCakes(message), 1000)
    } else if (questionNumber === 2) {
      type = message
      userReply(message)
      setTimeout(() => showIcing(message), 1000)
    } else if (questionNumber === 3) {
      icing = message
      userReply(message)
      if (message === "without icing") {
        questionNumber++
        setTimeout(() => showSize(message), 1000)
      } else {
        setTimeout(() => showColour(message), 1000)
      }
    } else if (questionNumber === 4) {
      colour = message
      userReply(message)
      setTimeout(() => showSize(message), 1000)
    } else if (questionNumber === 5) {
      size = message
      userReply(message)
      setTimeout(() => showOrder(message), 1000)
    } else {
      userReply(message)
      setTimeout(() => thankYou(size, icing), 1000)
    }
  }
}



// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`Welcome at Bakery E&N!<br/>What's your name?`)
  // Just to check it out, change 'bot' to 'user' here 👆
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
  receivedInput = true // double click: re-enable clicking on button for this question
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
  receivedInput = true // double click: re-enable clicking on button for this question
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
  receivedInput = true // double click: re-enable clicking on button for this question
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
  inputWrapper.innerHTML =
    // button option commented out
    //   `
    // <button id="4Btn">4 pieces</button>
    // <button id="8Btn">8 pieces</button>
    // <button id="12Btn">12 pieces</button>
    // <button id="16Btn">16 pieces</button>
    // `
    // receivedInput = true // double click: re-enable clicking on button for this question
    // document.getElementById('4Btn').addEventListener('click', () => nextQuestion('4 pieces'))
    // document.getElementById('8Btn').addEventListener('click', () => nextQuestion('8 pieces'))
    // document.getElementById('12Btn').addEventListener('click', () => nextQuestion('12 pieces'))
    // document.getElementById('16Btn').addEventListener('click', () => nextQuestion('16 pieces'))

    `
  <select id="select">
    <option value="" selected disabled>Select the number of pieces <span role="img" aria-label="curved downwards arrow">&#x21B4</span></option>
    <option value="4 pieces">4 pieces</option>
    <option value="8 pieces">8 pieces</option>
    <option value="12 pieces">12 pieces</option>
    <option value="16 pieces">16 pieces</option>
  </select>
  `
  const select = document.getElementById('select')
  receivedInput = true // double click: re-enable clicking on button for this question
  select.addEventListener('change', () => nextQuestion(select.value))

}

const showOrder = () => {
  questionNumber++
  let icingString = '' // variable for the recap of the order
  if (colour !== '') {
    icingString = ' with ' + colour + ' icing'
  }
  botReply(`Are you sure that you want to order a ${size} ${type} cake${icingString}?`)
  inputWrapper.innerHTML = `
  <button id="yesBtn">Yes, I confirm!</button>
  <button id="noBtn">No, start over!</button>
  `
  receivedInput = true // double click: re-enable clicking on button for this question
  document.getElementById('noBtn').addEventListener('click', () => {
    location.reload()
    return false
  })
  receivedInput = true // double click: re-enable clicking on button for this question
  document.getElementById('yesBtn').addEventListener('click', () => nextQuestion('Yes!'))
}

const thankYou = (size, icing) => {
  let price = ''
  if (size === "4 pieces") {
    price = 10
  } else if (size === "8 pieces") {
    price = 20
  } else if (size === "12 pieces") {
    price = 30
  } else {
    price = 40
  }
  if (icing === "with icing") {
    price += 5
  }

  new Audio ("./assets/confirmed.wav").play()
  botReply(`Thanks you for your order! It will be ${price} €, please <a href="mailto:help@bakery.com"><strong>contact Bakery E&N</strong></a> for your payment.`)
  inputWrapper.innerHTML = ``

}

// Set up your eventlisteners here

sendBtn.addEventListener('click', () => {
  nextQuestion(inputField.value)
  // Disable button & input on Enter
})

// maybe this part is not useful? seems to work without
// inputField.addEventListener('keypress', (event) => {
//   if (event.key === 'Enter' && inputField.value) {
//     nextQuestion(inputField.value)
//     // Disable button & input on Enter
//   }
// })




// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)



document.getElementById('name-form').onsubmit = event => {
  event.preventDefault()
}