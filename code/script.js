// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('name-input')
const sendBtn = document.getElementById('send')
const form = document.getElementById('name-form')

// Global variables, if you need any, declared here
let questionNumber = 1

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
    console.log("user is speaking")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log("bot is speaking")
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

//This function will check the questionNumber and what function call after that
const nextQuestion = (message) => {
  if (questionNumber === 1) {
    userReply (message)
    setTimeout(()=> deliveryAddress (message), 1000)
  }

  else if (questionNumber === 2) {
    userReply(message)
    setTimeout(()=> deliveryPerson (message), 1000)
  }

  else if (questionNumber === 3) {
    userReply(message)
    setTimeout(()=> card (message), 1000)
  }

  else if (questionNumber === 4) {
    userReply(message)
    setTimeout(()=> cardGreeting (message), 1000)
  }

  else if (questionNumber === 5) {
    userReply(message)
    setTimeout(()=> deliveryTime (message), 1000)
  }

  else if (questionNumber === 6) {
    userReply(message)
    setTimeout(()=> finalMessage (message), 1000)
  }
}

// Question number 1
const greeting = () => {
  questionNumber=1
  showMessage(`Hello there! Tomorrows options are tulips, roses and lilies`, 'bot')

inputWrapper.innerHTML=
`<button id="tulipsBtn">Tulips</button>
<button id="rosesBtn">Roses</button>
<button id="liliesBtn">Lilies</button>`

// Set up your eventlisteners here
document
    .getElementById('tulipsBtn')
    .addEventListener('click', () => nextQuestion('Tulips'))
document
    .getElementById('rosesBtn')
    .addEventListener('click', () => nextQuestion('Roses'))
document
    .getElementById('liliesBtn')
    .addEventListener('click', () => nextQuestion('Lilies'))
}

// Question number 2
const deliveryAddress = ()=> {
  questionNumber++
  botReply(`What is the delivery address?`)

  inputWrapper.innerHTML=
  `<input id="inputField" type="text"/>
  <button id="sendBtn" class="send-btn" type="submit">Send</button>
  `
  document.getElementById('sendBtn').addEventListener('click', () => nextQuestion(inputField.value))
}

// Question number 3
const deliveryPerson = ()=> {
  questionNumber++
  botReply(`Are the flowers for yourself or someone else?`)

  inputWrapper.innerHTML=
`<button id="myselfBtn">Myself</button>
<button id="someoneElseBtn">Someone Else</button>`

document
    .getElementById('myselfBtn')
    .addEventListener('click', () => nextQuestion('myself'))
document
    .getElementById('someoneElseBtn')
    .addEventListener('click', () => nextQuestion('someoneElse'))
}
/*Trying the if else function 
  
  */

// Question number 4
const card = () => {
  questionNumber++
  botReply(`Would you like to add a card with your flowers?`)
  inputWrapper.innerHTML=
  `<button id="cardYesBtn">Yes</button>
  <button id="cardNoBtn">No</button>`

document
  .getElementById('cardYesBtn')
  .addEventListener('click', () => nextQuestion('Yes'))
document
  .getElementById('cardNoBtn')
  .addEventListener('click', () => nextQuestion('No')) 
}

// Question number 5
const cardGreeting = () => {
  questionNumber++
  botReply (`Type your greeting here, for example ''Happy Birthday Lisa''`)
  inputWrapper.innerHTML=
  `<input id="inputField" type="text"/>
  <button id="sendBtn" class="send-btn" type="submit">Send</button>`
  document.getElementById('sendBtn').addEventListener('click', () => nextQuestion(inputField.value))
}

// Question number 6
const deliveryTime = () => {
  questionNumber++
  botReply (`What time would you like your delivery?`)
  inputWrapper.innerHTML=
  `<select id="deliveryTime">
    <option value="" selected disabled>👇 Select a delivery time...</option>
    <option value="10-12PM">10-12PM</option>
    <option value="12-2PM">12-2PM</option>
    <option value="2-4PM">2-4PM</option>
    <option value="4-6PM">4-6PM</option>
  </select>`

  const select = document.getElementById('deliveryTime')
  select.addEventListener('change', () => nextQuestion(select.value))
}

// Question number 7 *THIS IS NOT FINISHED
 // const finalMessage = (Question 7) => {}
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)