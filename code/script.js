// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')

// Global variables, if you need any, declared here
const pizzaChoice = `
  <select id='select'>
    <option value='' selected disabled>Click here to choose pizza</option>
    <option value='Margarita'>Margarita</option>
    <option value='Hawaii'>Hawaii</option>
    <option value='Calzone'>Calzone</option>
  </select>
`

const pastaChoice = `
  <select id='select'>
    <option value='' selected disabled>Click here to choose Pasta</option>
    <option value='Carbonara'>Carbonara</option>
    <option value='Bolognese'>Bolognese</option>
    <option value='Frutti di mare'>Frutti Di Mare</option>
  </select>
`

const salladChoice = `
  <select id='select'>
    <option value='' selected disabled>Click here to choose Salad</option>
    <option value='Cesar'>Cesar</option>
    <option value='Shrimp'>Shrimp</option>
    <option value='Tuna'>Tuna</option>
  </select>
`

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
  chat.scrollTop = chat.scrollHeight
}
// Functions declared here
//Question 5
const drinkChoice = () => {

}
//Question 4
const askForAmount = (selectedFood) => {
  showMessage(`How many ${selectedFood} do you want?`, 'bot')
  const foodAmount = nameInput.value
  showMessage(foodAmount, 'user')
  nameForm.addEventListener('submit', drinkChoice)


} 

// Question 3
const askFoodChoice = foodChoice => {
  showMessage(`${foodChoice} sounds good! What kind of ${foodChoice} do you want?`, 'bot')


if (foodChoice === 'pizza') {
  inputWrapper.innerHTML = pizzaChoice
} else if (foodChoice === 'pasta') {
  inputWrapper.innerHTML = pastaChoice
} else {
  inputWrapper.innerHTML = salladChoice
}
const selectedFood = document.getElementById('select')
selectedFood.addEventListener('change', () => {
showMessage(selectedFood.value, 'user')
inputWrapper.innerHTML=''
setTimeout(() => askForAmount(selectedFood.value), 1000)
}) 

}
// Question 2
const handleFoodInput = () => {
  inputWrapper.innerHTML = `
  <button id="Pizza-button">Pizza</button>
  <button id="Pasta-button">Pasta</button>
  <button id="Salad-button">Salad</button>
  `
  document
  .getElementById('Pizza-button')
  .addEventListener('click',() => {
   showMessage('I want pizza', 'user')
   inputWrapper.innerHTML = '' 
   setTimeout(() => askFoodChoice('pizza'), 1000)
  })

  document
  .getElementById('Pasta-button')
  .addEventListener('click',() => {
   showMessage('I want pasta', 'user')
   inputWrapper.innerHTML = '' 
   setTimeout(() => askFoodChoice('pasta'), 1000) 
  })

  document
  .getElementById('Salad-button')
  .addEventListener('click',() => {
   showMessage('I want Salad', 'user') 
   inputWrapper.innerHTML = '' 
   setTimeout(() => askFoodChoice('sallad'), 1000)
  })
} 

// Question 1
const handleNameInput = (event) => {
  event.preventDefault()
  const userName = nameInput.value
  showMessage(userName, 'user')
  nameInput.value = ''
  setTimeout (() => showMessage(`Nice to meet you ${userName}! I hope you're hungry`, 'bot'), 1000 )
  setTimeout (() => handleFoodInput(userName), 2000)
}

// This function will add a chat bubble in the correct place based on who the sender is

  
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
 


// Starts here
const greeting = () => {
  showMessage(`Hello, what's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

nameForm.addEventListener('submit', handleNameInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
// setTimeout(() => handleFoodInput, 1000)
