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
  let audio = new Audio("https://notificationsounds.com/storage/sounds/file-sounds-1233-elegant.mp3")
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
 messageSound();
}

//This function makes the bot continue the conversation
 // After 1 second, show the next question by invoking the next function.
 // passing the name into it to have access to the user's name if we want
 // to use it in the next question from the bot.
const nextQuestion = (message) => {
  console.log('questionNr', questionNr)

  if (questionNr === 1) {
    userReply(message)
    setTimeout(() => showCuisineTypes(message), 1000)
  } else if (questionNr === 2) {
    userReply(message)
    setTimeout(() => showRestaurant(message), 1000)
  
  //} else if (questionNr === 3) {
  //  userReply(message)
  //  setTimeout(() => showAddress(message), 1000)

  } else if (questionNr === 3) {
    userReply(message)
    setTimeout(() => happyChoice(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}

// Starts here
 //Greeting and questions
const greetUser = () => {
  questionNr = 1
  botReply(`Hello there, what's your name?😄`)
}

const showCuisineTypes = (msg) => {
  questionNr++
  botReply(`Nice to meet you ${msg}! What type of cuisine would you like to explore?`)

  inputWrapper.innerHTML = `
  <button id="italianBtn">Italian</button>
  <button id="asianBtn">Asian</button>
  <button id="middleEasternBtn">Middle Eastern</button>
  `
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

const showRestaurant = (type) => {
  questionNr++
  botReply(`Oh so you're in the mood for ${type}? Yum..🤤`)
  botReply(`Select a place from the options!`)

  if (type === 'Italian') {
    inputWrapper.innerHTML = `
    <select id="select-">
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
     <option value="MOAS">MOAS: Meat On A Stick</option>
     <option value="Tabbouli">Tabbouli</option>
     <option value="Babel Deli">Babel Deli</option>
    </select>
    `
  }
  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))

//  const allSelects = document.querySelectorAll(".select");
//  allSelects.forEach(select => select.addEventListener('change', (event) => {
//    nextQuestion(event.target.value)
//  }))

}

//  Depending on which restaurant they choose give a different adress
//const showAddress = (selectedRestaurant) => {
//  questionNr++

//  let address;
//  if (selectedRestaurant === "lanonna") {
//    address = "Fleminggatan 45, 112 32 Stockholm"
//  } else if (selectedRestaurant === "olli") {
//    address = "Jakobsbergsgatan 21, 111 44 Stockholm"
//  } else if (selectedRestaurant === "capricci") {
//    address = "Hornstulls strand 4, 117 39 Stockholm"

//  } else if (selectedRestaurant === "surfers") {
//    address = "Norrlandsgatan 24, 111 43 Stockholm"
//  } else if (selectedRestaurant === "apo") {
//    address = "Regeringsgatan 66, 111 39 Stockholm"
//  } else if (selectedRestaurant === "sinramen") {
//    address = "Jakobsbergsgatan 23, 111 44 Stockholm"
  
//  } else if (selectedRestaurant === "moas"){
//    address = "Roslagsgatan 6, 113 55 Stockholm"
//  } else if (selectedRestaurant === "tabbouli"){
//    address = "Tavastgatan 22, 118 24 Stockholm"
//  } else  {
//    address = "Kungstensgatan 33, 113 57 Stockholm"
//  }
  
// alert(`You're in for a treat! The restaurant is located at ${address}`)
//}


////////////////////

const happyChoice = (choice) => {
  questionNr++
  botReply(`You're in for a treat😍 Are you happy with your choice?`)

  inputWrapper.innerHTML = `
    <button id="restart">NO</button>
    <button id="confirm">YES</button>
  `
  document
  .getElementById('restart')
  .addEventListener('click', () => {
    location.reload()
    return false
  })
  document
    .getElementById('confirm')
    .addEventListener('click', () => nextQuestion('Yes!'))
}

const thankYou = () => {
  botReply(`Thank you for using TheGuide! Feel free to come back and explore more👋`)
  inputWrapper.innerHTML = ``
}

// How the bot acts when user responds
form.addEventListener("submit", (event) => {
  event.preventDefault()
  nextQuestion(input.value)
  input.value=""})

// When website loaded, chatbot asks first question.
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1500)