// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('name-input')
const sendBtn = document.getElementById('send')

// If you need any global variables that you can use across different functions, declare them here:
let questionNumber = 1


// Declare your functions after this comment


// This function will add a chat bubble in the correct place based on who the sender is
  function showMessage(message, sender) {
    // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
    if (sender === 'user') {
      chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
      // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
    } else if (sender === 'bot') {
      chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
    }

    // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
    chat.scrollTop = chat.scrollHeight;
  }

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    showMessage(message)
    input.value = ''
    setTimeout(() => showFoodTypes(message), 1000)
  } else if (questionNumber ++) {
    showMessage(message)
    setTimeout(() => showMenu(message), 1000)
  } else if (questionNumber ++) {
    showMessage(message)
    setTimeout(() => showDishSize(message), 1000)
  } else if (questionNumber ++) {
    showMessage(message)
    setTimeout(() => showPrice(message), 1000)
  } else {
    showMessage(message)
    setTimeout(thankYou, 1000)
  }
} 


// Starts here
const greetUser = () => {
  questionNumber === 1
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}  
// Initial button click, here I should get the name entered
sendBtn.addEventListener('click', (event) => {
  event.preventDefault()

  // Store the value in a variable so I can access it after we 
  // clear it from the input
  let userName = input.value
  showMessage(`${userName}`, 'user');

  // Clears the input field
  input.value = ''
  //Here I call the function where I present the dishes to choose from. I will also pass the userName
  setTimeout(() => showFoodTypes(userName), 1000)
})

const showFoodTypes = (userName) => {
  questionNumber ++
  showMessage(
    `Nice to meet you ${userName}. What type of food would you like to order?`, 'bot' )

  inputWrapper.innerHTML = `
    <button id="pizzaBtn">Pizza</button>
    <button id="pastaBtn">Pasta</button>
    <button id="saladBtn">Salad</button>
  `

  document
    .getElementById('pizzaBtn')
    .addEventListener('click', () => nextQuestion('pizza'))
  document
    .getElementById('pastaBtn')
    .addEventListener('click', () => nextQuestion('pasta'))
  document
    .getElementById('saladBtn')
    .addEventListener('click', () => nextQuestion('salad'))
}

const showMenu = (type) => {
  questionNumber ++

  showMessage(
    `Oh so you're in the mood for ${type}? Great choice. Select something from the menu!`, 'bot')

  if (type === 'pizza') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select a pizza...</option>
        <option value="margerita">Margerita</option>
        <option value="vesuvio">Vesuvio</option>
        <option value="peperoni">Peperoni</option>
      </select>
    `
  } else if (type === 'pasta') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select a pasta...</option>
        <option value="Carbonara">Pasta Carbonara</option>
        <option value="Pomodoro">Pasta Pomodoro</option>
        <option value="Frutti di Mare">Frutti di Mare</option>
      </select>
    `
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select a salad...</option>
        <option value="Greek Salad">Greek Salad</option>
        <option value="Caesar Salad">Caesar Salad</option>
        <option value="Chicken Salad">Chicken Salad</option>
      </select>
    `
  }
  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}

const showDishSize = (dish) => {
  questionNumber ++

  showMessage(`One ${dish} coming up! Will that be for an adult or a child?`, 'bot')

  inputWrapper.innerHTML = `
    <button id="adult">👨🏽‍🦳</button>
    <button id="child">🧒🏽</button>
  `

  document
    .getElementById('adult')
    .addEventListener('click', () => nextQuestion('adult'))
  document
    .getElementById('child')
    .addEventListener('click', () => nextQuestion('child'))
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000); 

