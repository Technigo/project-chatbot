// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const form = document.getElementById('name-form'); 
const button = document.getElementById('button');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');

// Global variables, if you need any, declared here
let currentQuestion = 0

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
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
  chat.scrollTop = chat.scrollHeight
}

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => showFoodTypes(message), 1000)
  } 
}


const handleNameInput = () => {
  currentQuestion ++ ; // fr nr 1
  console.log(currentQuestion)

  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = '';


  setTimeout( () => 
    showMessage(`Nice to meet you ${name} `, 'bot'), 1000);
  

  setTimeout(() => showFoodOptions(name), 2000)
  
  
}

const showFoodOptions = () => {
  currentQuestion++ ; // fråga nr 2
  console.log(currentQuestion)
  showMessage(`What would you like to order? `, 'bot')
  inputWrapper.innerHTML = `
  <button id="pizza-button">Pizza</button>
  `
 
  const pizzaButton = document.getElementById('pizza-button')

  pizzaButton.addEventListener('click', () => {
    // console.log("clicked pizza button")
    // handleNameInput()
    showMessage(`pizza`, 'user');
    setTimeout( () => 
    showMessage(`What type of pizza would you like to order?`, 'bot'), 1000);
    inputWrapper.innerHTML = `
    <select id="select">
    <option value="" selected disabled>👇 Select a pizza...</option>
    <option value="margerita">Margerita</option>
    <option value="vesuvio">Vesuvio</option>
    <option value="peperoni">Peperoni</option>
  </select>
  `
  })

}

const handlePizzaButton = () => {

}

// Starts here 

const greeting = () => {
  showMessage(`Hi, my name is Pizzatone! What's your name?`, 'bot');

}


// Set up your eventlisteners here
button.addEventListener('click', (e) => {
  e.preventDefault();
  handleNameInput()


})
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
// setTimeout(greeting, 1000)
setTimeout(greeting, 1000);
