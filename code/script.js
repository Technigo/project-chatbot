// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('answer-input')
const form = document.getElementById('form')

// If you need any global variables that you can use across different functions, declare them here:
let questionNr = 1

// Declare your functions after this comment
const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {

// Sound effect
const messageSound = () => {
  let audio = new Audio("assets/tweet-416.mp3")
  audio.volume = 0.1;
  audio.play();
}

// the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
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
// Handles sound effect
  messageSound();
}

// How the bot acts when user responds
form.addEventListener("submit", (event) => {
  event.preventDefault()
  nextQuestion(input.value)
  input.value=""})

//This function makes the bot continue the conversation
 // After 1 second, show the next question by invoking the next function.
 // passing the input into it to have access to the user's answer if we want
 // to use it in the next question from the bot.
const nextQuestion = (message) => {
  console.log('questionNr', questionNr)

  if (questionNr === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => ShowCuisineTypes(message), 1000)
  } else if (questionNr === 2) {
    userReply(message)
    setTimeout(() => showOptions(message), 1000)
  } else if (questionNr === 3) {
    userReply(message)
    setTimeout(() => happyChoice(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}

// CHAT BOT STARTS HERE // CHAT BOT STARTS HERE // CHAT BOT STARTS HERE //

 // GREETING //
const greetUser = () => {
  questionNr = 1
  botReply(`Hello there, what's your name?😄`)
}
// When website loaded, chatbot starts with greeting.
// This means the greeting function will be called 1,5 second after the website is loaded.
setTimeout(greetUser, 1500)

 // FIRST QUESTION //
const ShowCuisineTypes = (msg) => {
  questionNr++
  botReply(`Nice too meet you ${msg}! What type of cuisine would you like to explore?`)

 // Gives the user 3 buttons to choose cuisine
  inputWrapper.innerHTML = `
  <button id="italianBtn">Italian</button>
  <button id="asianBtn">Asian</button>
  <button id="middleEasternBtn">Middle Eastern</button>
  `
 // When user clicks button "x" pass along the answer to conversation-function "nextQuestion" 
  document
    .getElementById('italianBtn')
    .addEventListener('click', () => nextQuestion('Italian'))
  document
    .getElementById('asianBtn')
    .addEventListener('click', () => nextQuestion('Asian'))
  document
    .getElementById('middleEasternBtn')
    .addEventListener('click', () => nextQuestion('Middle Eastern'))
}
// SECOND QUESTION //
const showOptions = (type) => {
  questionNr++
  botReply(`Oh so you're in the mood for ${type}? Yum..🤤`)
  botReply(`Select a place from the options!`)
// Depending on what cuisine type show different select list
  if (type === 'Italian') {
    inputWrapper.innerHTML = `
    <select id="select">
     <option value="" selected disabled>👇 Select a restaurant.. 👇</option>
     <option value="La Nonna">La Nonna</option>
     <option value="OLLI">OLLI</option>
     <option value="Capricci">Capricci</option>
    </select>
    `
  } else if (type === 'Asian') {
    inputWrapper.innerHTML = `
    <select id="select">
     <option value="" selected disabled>👇 Select a restaurant.. 👇</option>
     <option value="Surfers">Surfers</option>
     <option value="APO">APO: Asian Post Office</option>
     <option value="Sin ramen">Sin ramen</option>
    </select>
    `
  } else {
    inputWrapper.innerHTML = `
    <select id="select">
     <option value="" selected disabled>👇 Select a restaurant.. 👇</option>
     <option value="MOAS">M.O.A.S: Meat On A Stick</option>
     <option value="Tabbouli">Tabbouli</option>
     <option value="Babel Deli">Babel Deli</option>
    </select>
    `
  }
 // When user select option pass along the answer to conversation-function "nextQuestion" 
  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}
// THIRD QUESTION //
const happyChoice = (choice) => {
  questionNr++
  botReply(`You're in for a treat😍 Are you happy with your choice?`)
  // Gives the user 2 buttons to choose yes/no
  inputWrapper.innerHTML = `
    <button id="restart">NO</button>
    <button id="confirm">YES</button>
  `
  // When user chooses NO, restart the bot
  document
  .getElementById('restart')
  .addEventListener('click', () => {
    location.reload()
    return false
  })
  // When user chooses YES, pass along the answer to conversation-function "nextQuestion" 
  document
    .getElementById('confirm')
    .addEventListener('click', () => nextQuestion('Yes!'))
}
// LAST MESSAGE //
const thankYou = () => {
  botReply(`Thank you for using TheGuide! Feel free to come back and explore more👋`)
  inputWrapper.innerHTML = ``
}