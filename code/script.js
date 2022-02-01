// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')

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

const nextQuestion=(message)=>{
  if (questionNumber === 1) {
    userReply (message)
    setTimeout(()=> deliveryAddress (message), 1000)
  }

  else if (questionNumber === 2) {
    userReply(message)
    input.value =''
    setTimeout(()=> deliveryPerson (message), 1000)
  }
}

// Starts here
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


const deliveryAddress = ()=> {
  questionNumber++
  botReply(`What is the delivery address?`)
}

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
/*
const card = ()=> {
  questionNumber++
  botReply(`Would you like to add a card with your flowers?`)
  inputWrapper.innerHTML=
  `<button id="cardYesBtn">Yes</button>
  <button id="cardNoBtn">No</button>`

  If they say No it doesnt go to the next question, it goes two questions ahead

  document
  .getElementById('cardYesBtn')
  .addEventListener('click', () => nextQuestion('Yes'))
document
  .getElementById('cardNoBtn')
  .addEventListener('click', () => nextQuestion('No'))
}
*/

// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)