// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const input = document.getElementById('input');
const sendBtn = document.getElementById('send')

// If you need any global variables that you can use across different functions, declare them here:
let questionNumber = 1

// Declare your functions after this comment
const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="./images/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="./images/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}
const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)
    if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => showFoodTypes(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showRecipe (message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showRecipe(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}
// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`Howdy hungry human! What's your name?`)
}

const showFoodTypes = (msg) => {
  questionNumber++
  botReply(`Nice to meet you ${msg}! What kind of recipe are you looking for?`)

  inputWrapper.innerHTML = `
  <button id="pastaBtn">Pasta</button>
  <button id="texmexBtn">TexMex</button>
  <button id="pizzaBtn">Pizza</button>
  <button id="vegBtn">Vegetarian</button>
  ` 
  document
  .getElementById('pastaBtn')
  .addEventListener('click', () => nextQuestion ('Pasta'))
  document
  .getElementById('texmexBtn')
  .addEventListener('click', () => nextQuestion ('TexMex'))
  document
  .getElementById('pizzaBtn')
  .addEventListener('click', () => nextQuestion ('Pizza'))
  document
  .getElementById('vegBtn')
  .addEventListener('click', () => nextQuestion ('Vegetarian'))
}

const showRecipe = (food) => {
  questionNumber++
  
  if (food === 'Pasta') {
    botReply(`Pasta, huh? Molto bene!`)
    inputWrapper.innerHTML = `
    <form id="form">
      <input type="image" src="./images/bot.png" alt= "Pasta" width= "48px" height= "48px"></input>
      <input type="image" src="./images/bot.png" alt= "Pasta" width= "48px" height= "48px"></input>
      <input type="image" src="./images/bot.png" alt= "Pasta" width= "48px" height= "48px"></input>
    </form>
  `
  } else if (food === 'TexMex') {
    botReply(`TexMex, huh? Muy picante!`)
    inputWrapper.innerHTML = `
    <form id="form">
      <input type="image" src="./images/bot.png" alt= "Pasta" width= "48px" height= "48px"></input>
      <input type="image" src="./images/bot.png" alt= "Pasta" width= "48px" height= "48px"></input>
      <input type="image" src="./images/bot.png" alt= "Pasta" width= "48px" height= "48px"></input>
    </form>
    `
  } else if (food === 'Pizza') {
    botReply(`Pizza, huh? Buon appetito!`)
    inputWrapper.innerHTML = `
    <form id="form">
      <input type="image" src="./images/bot.png" alt= "Pasta" width= "48px" height= "48px"></input>
      <input type="image" src="./images/bot.png" alt= "Pasta" width= "48px" height= "48px"></input>
      <input type="image" src="./images/bot.png" alt= "Pasta" width= "48px" height= "48px"></input>
    </form>
    `
  }  else {
    botReply(`In a veggie mood? Sounds good!`)
    inputWrapper.innerHTML = `
    <form id="form">
      <input type="image" src="./images/bot.png" alt= "Pasta" width= "48px" height= "48px"></input>
      <input type="image" src="./images/bot.png" alt= "Pasta" width= "48px" height= "48px"></input>
      <input type="image" src="./images/bot.png" alt= "Pasta" width= "48px" height= "48px"></input>
    </form>
    `
  }
  const form = document.getElementById('form')
  form.addEventListener('change', () => thankYou)
}

const thankYou = () => {
  botReply(`Thank you for choosing Kiss the Cook-bot! Enjoy your meal!`)
}
// Set up your eventlisteners here}
sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})
// When website loaded, chatbot asks first question.
setTimeout(greeting, 1000);
