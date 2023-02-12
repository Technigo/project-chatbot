// Variables that point to selected DOM elements 
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send');

// If you need any global variables that you can use across different functions, declare them here:
let questionNumber = 1

// Declare your functions after this comment
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    console.log("User")
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
    console.log("Bot")
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
}

const showBotReply = (message) => {
  showMessage(message, 'bot')
}

const showUserReply = (message) => {
  showMessage(message, 'user')
}

// Flow of question functions
const nextQuestion = (message) => {

  if (questionNumber === 1) {
    showUserReply(message)
    setTimeout(() => showBeverageTypes(message), 1000)
  } else if (questionNumber === 2) {
    showUserReply(message)
    setTimeout(() => showFlavors(message), 1000)
  } else if (questionNumber === 3) {
    showUserReply(message)
    setTimeout(() => showFikaBread(message), 1000)
  } else if (questionNumber === 4) {
    showUserReply(message)
    setTimeout(() => showPaymentOptions(message), 1000)
  } else {
    showUserReply(message)
    setTimeout(goodbye, 1000)
  }
} 

// Starts here

  // Here we call the function showMessage, that we declared earlier with the argument "Hello there, what's your name?" for message, and the argument "bot" for sender
  const greetUser = () => {
  questionNumber = 1
  showBotReply("Hello! I'm the Fika Bot. What's your name?");
}

  sendBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const userName = userInput.value // Store the value in a variable so I can access it after we clear it from the input
    showUserReply(`${userName}`);
    userInput.value = '' // Clears the input field
  
    // Here I call the function where I present the dishes to choose from. I will also !! PASS THE userName !!
    // After 1 second, show the next question by invoking the next function.
	  // passing the name into it to have access to the user's name if we want
	  // to use it in the next question from the bot.
    setTimeout(() => showBeverageTypes(userName), 1000) 
})


// A function that shows food types
const showBeverageTypes = (message) => {
  console.log("Question number", questionNumber)
  questionNumber = 2
  showBotReply(
    `Welcome ${message}. Would you like to order something to drink?`
  )

  inputWrapper.innerHTML = `
    <button id="coffeeBtn">Coffee</button>
    <button id="teaBtn">Tea</button>
    <button id="juiceBtn">Juice</button>
  `

  document.getElementById('coffeeBtn').addEventListener('click', () => nextQuestion('coffee'))
  document.getElementById('teaBtn').addEventListener('click', () => nextQuestion('tea'))
  document.getElementById('juiceBtn').addEventListener('click', () => nextQuestion('juice'))
}


const showFlavors = (type) => {
  console.log("Question number", questionNumber)
  questionNumber = 3

  showBotReply(
    `Great choice. What kind of ${type} would you like?`
  )

  if (type === 'coffee') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>⬇ Select your coffee...</option>
        <option value="espresso">Espresso</option>
        <option value="cappuccino">Cappuccino</option>
        <option value="latte">Latte</option>
      </select>
    `
  } else if (type === 'tea') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>⬇ Select your tea...</option>
        <option value="earlgrey">Earl Grey</option>
        <option value="rooibos">Rooibos</option>
        <option value="herbal">Herbal</option>
      </select>
    `
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>⬇ Select a juice...</option>
        <option value="orange juice">Orange juice</option>
        <option value="apple juice">Apple juice</option>
        <option value="carrot juice">Carrot juice</option>
      </select>
    `
  }
  
  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}

const showFikaBread = (beverage) => {
  console.log("Question number", questionNumber)
  questionNumber = 4

  showBotReply(`One ${beverage} coming up! What would you like to have with it?`)

  inputWrapper.innerHTML = `
    <button id="cherry-pie">Cherry pie</button>
    <button id="cinnamon-bun">Cinnamon bun</button>
    <button id="brownie">Brownie</button>
  `

  document.getElementById('cherry-pie').addEventListener('click', () => nextQuestion('Cherry pie'))
  document.getElementById('cinnamon-bun').addEventListener('click', () => nextQuestion('Cinnamon bun'))
  document.getElementById('brownie').addEventListener('click', () => nextQuestion('Brownie'))
}

const showPaymentOptions = (cake) => {
  console.log("Question number", questionNumber)
  questionNumber = 5

  
  showBotReply(
    `Great! ${cake} is my favourite. That'll be 99 kr. Do you wanna pay with card or cash?`
  )


  inputWrapper.innerHTML = `
    <button id="card">Card</button>
    <button id="cash">Cash</button>
  `

  document.getElementById('card').addEventListener('click', () => nextQuestion('Card'))
  document.getElementById('cash').addEventListener('click', () => nextQuestion('Cash'))

  

}


const goodbye = () => {

  showBotReply(`Thank you, your order will be ready soon. Find a cozy place to sit and we'll bring you your fika!`)
  inputWrapper.innerHTML = ``
}


// Set up your eventlisteners here. Don't understand why they should be down here?


  
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
// Why is this at the bottom of the page?
setTimeout(greetUser, 1000);
