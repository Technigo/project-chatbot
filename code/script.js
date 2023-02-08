// Variables that point to selected DOM elements 
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const input = document.getElementById('answer-input');
const sendBtn = document.getElementById('send');

let questionNr = 1

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

const botReply = (message) => {
  showMessage(msg, 'bot');
}

const userReply = (message) => {
  showMessage(msg, 'user');
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {

  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user1.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log("Yay")
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
  chat.scrollTop = chat.scrollHeight;
}

//This function makes the bot continue the conversation
 // After 1 second, show the next question by invoking the next function.
 // passing the name into it to have access to the user's name if we want
 // to use it in the next question from the bot.
const nextQuestion = (message) => {
  console.log('questionNr', questionNr)

  if (questionNr === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => ShowCuisineTypes(message), 1000)
  } else if (questionNr === 2) {
    userReply(message)
    setTimeout(() => ShowOptions(message), 1000)
  } else if (questionNr === 3){
    userReply(message)
    setTimeout(() => HapyChoice(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}

// Starts here
 //Greeting and questions
const greetUser = () => {
  questionNr = 1
  botReply("Hello there, what's your name?")
}

const ShowCuisineTypes = (msg) => {
  questionNr++
  botReply(`Nice too meet you ${msg}! What type of cuisine would you like to explore?`)

  inputWrapper.innerHTML = `
  <button id="italianBtn">Italian</button>
  <button id="asianBtn">Asian</button>
  <button id="middleEasternBtn">Middle Eastern</button>
  `
// Set up your eventlisteners here
  document
  .getElementById(italianBtn);
  .addEventListener('click', () => nextQuestion('italian'));
  document
  .getElementById(asianBtn);
  .addEventListener('click', () => nextQuestion('asian'));
  document
  .getElementById(middleEasternBtn);
  .addEventListener('click', () => nextQuestion('middleeastern'));
}

const ShowOptions = (type) => {
  questionNr++
  botReply(`Oh so you're in the mood for ${type}? Great choice. Select a place from the options!`);

  if (type === 'italian') {
    inputWrapper.innerHTML = `
    <select id="select">
     <option value="" selected disabled>👇 Select a restaurant..</option>
     <option value="lanonna1">La Nonna</option>
     <option value="olli">OLLI</option>
     <option value="capricci">Capricci/option>
    </select>
    `
  } else if (type === 'asian') {
    inputWrapper.innerHTML = `
    <select id="select">
    <option value="" selected disabled>👇 Select a restaurant..</option>
     <option value="surfers">Surfers</option>
     <option value="apo">APO</option>
     <option value="sinramen">Sin ramen</option>
    </select>
    `
  } else  {
    inputWrapper.innerHTML = `
    <select id="select">
    <option value="" selected disabled>👇 Select a restaurant..</option>
     <option value="moas">MOAS</option>
     <option value="tabbouli">Tabbouli</option>
     <option value="babeldeli">Babel Deli</option>
    </select>
    `
  }
  
  const select = document.getElementById('select');
  select.addEventListener('change', () => nextQuestion(select.value));
}

const HapyChoice = (choice) => {
  questionNr++
  botReply(`Nice! Are you happy with your choice?`)

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
  botReply(`Thank you for using TheGuide! See you soon!`)
  inputWrapper.innerHTML = ``
}
  
// How the bot acts when user clicks on button or responds
sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})




// When website loaded, chatbot asks first question.
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1500);
