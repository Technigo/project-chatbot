// (Pseudo code) Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input') 
const sendBtn = document.getElementById('send')

let questionNumber = 1

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

// This function will add a chat bubble in the correct place based on who the sender is(two arguments handled w conditionals)
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
    chat.scrollTop = chat.scrollHeight;
}

const nextQuestion = (message) => {
  //console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => showServingOptions(message), 800)
  } else if (questionNumber === 2){
    userReply(message)
    setTimeout(() => showTypes(message), 800)
  } else if (questionNumber === 3){
    userReply(message)
    setTimeout(() => showSizes(message), 800)
  } else if (questionNumber === 4){
    userReply(message)
    setTimeout(() => showServingTopping(message), 800)
  } else if (questionNumber === 5){
    userReply(message)
    setTimeout(() => showToppingOptions(message), 800)
  } else if (questionNumber === 6){
    userReply(message)
    setTimeout(() => showPlaceOrder(message), 800)
  } else {
    userReply(message)
    setTimeout(thankYou, 800)
  }
}

// When the website has loaded (function)
const greetUser = () => {
  questionNumber = 1
  botReply(`Welcome to the &#127846 shop! What's your name?`)
}

const showServingOptions = (msg) => {
  questionNumber++
  botReply(
    `We are glad to serve you ${msg}. Would you like your ice-cream in a Cup or Cone?`
  )

  inputWrapper.innerHTML = `
    <button id="cupBtn">&#127848</button>
    <button id="coneBtn">&#127846</button>
  `
  document
    .getElementById('cupBtn')
    .addEventListener('click', () => nextQuestion ('Cup'))
  document
    .getElementById('coneBtn')
    .addEventListener('click', () => nextQuestion('Cone'))
}

const showTypes = (type) => {
  questionNumber++

  botReply(
    `Lovely! ${type} it is! What kind of ice-cream would you like?`
  )

  inputWrapper.innerHTML = `
  <button id="softServeBtn">Soft serve</button>
  <button id="scoopBtn">Scoop</button>
`
  document
    .getElementById('softServeBtn')
    .addEventListener('click', () => nextQuestion('Soft serve'))
  document
    .getElementById('scoopBtn')
    .addEventListener('click', () => nextQuestion('Scoop'))  
}

const showSizes = (type) => {
  questionNumber++

  botReply(
    `${type}, so yummy! Choose what size you would like:`
  ) 

  if (type === 'Soft serve') {
    inputWrapper.innerHTML =`
      <select id="select">
        <option value=""selected disabled>Select a size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="grande">Grande</option>
      </select>
    `
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value=""selected disabled>Number of scoops</option>
        <option value="1 scoop">1 scoop</option>
        <option value="2 scoops">2 scoops</option>
        <option value="3 scoops">3 scoops</option>
      </select>
    `
  }
  
  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}

  const showServingTopping = (type) => {
    questionNumber++

    botReply(`Would you like to pimp your ${type} ice-cream with a topping?`)
  
  inputWrapper.innerHTML = `
    <button id="yesBtn">Yes</button>
    <button id="noBtn">No</button>
  `
  document
    .getElementById('yesBtn')
    .addEventListener('click', () => nextQuestion('Yes'))
  document
    .getElementById('noBtn')
    .addEventListener('click', () => nextQuestion('No'))
}

const showToppingOptions = (type) => {
  questionNumber++

  botReply (`Good call ${type}! Which topping would you like?`)
    
  if (type === 'Yes') {
    inputWrapper.innerHTML =`
      <select id="select">
        <option value=""selected disabled>Select a topping</option>
        <option value="fresh strawberries">Fresh strawberries</option>
        <option value="chocolate sauce">Chocolate sauce</option>
        <option value="rainbow sprinkles">Rainbow sprinkles</option>
        <option value="whipped cream">Whipped cream</option>
      </select>
    `
  } else {
    inputWrapper.innerHTML =`
    <select id="select">
        <option value=""selected disabled>No topping for me</option>
      </select>
    `
  }
  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value)) 
}

const showPlaceOrder = () => {
    questionNumber++
    botReply(`Would you like to place your order?`)
  
    inputWrapper.innerHTML = `
    <button id="confirm">Yes</button>
    <button id="restart">No</button>
  `
    document
      .getElementById('confirm')
      .addEventListener('click', () => nextQuestion('Yes!'))
    document
      .getElementById('restart')
      .addEventListener('click', () => nextQuestion('No'))
  }

  const thankYou = () => {
  botReply(
    `Thank you for your order! Pls pay at the cashier.`)
    inputWrapper.innerHTML=``
  }
  
  sendBtn.addEventListener('click', () => nextQuestion(input.value))
  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && input.value) nextQuestion(input.value)
  })
  
// If yes, "Thank you for your order!"
// If no the chat will be deleted. 


// If you need any global variables that you can use across different functions, declare them here:
// Declare your functions after this comment

// When website loaded, chatbot asks first question.
setTimeout(greetUser, 800);
