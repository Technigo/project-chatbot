// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')

let confirmation =''

const pizzaChoice = `
  <select class="food-select" id='select'>
    <option value='' selected disabled>Click here to choose pizza</option>
    <option value='Margarita'>Margarita</option>
    <option value='Hawaii'>Hawaii</option>
    <option value='Calzone'>Calzone</option>
  </select>
`

const pastaChoice = `
  <select class="food-select" id='select'>
    <option value='' selected disabled>Click here to choose Pasta</option>
    <option value='Carbonara'>Carbonara</option>
    <option value='Bolognese'>Bolognese</option>
    <option value='Frutti di mare'>Frutti Di Mare</option>
  </select>
`

const salladChoice = `
  <select class="food-select" id='select'>
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
        <img src="assets/Pizzabot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hello, what's your name?`, 'bot') 
}

setTimeout(greeting, 1000)

// Question 1
const handleNameInput = (event) => {
  event.preventDefault()
  const userName = nameInput.value
  showMessage(userName, 'user')
  nameInput.value = ''
  setTimeout (() => showMessage(`Nice to meet you ${userName}! I hope you're hungry`, 'bot'), 1000 )
  setTimeout(() => showMessage('What would you like to eat?', 'bot'), 2000)
  setTimeout (() => handleFoodInput(userName), 2000)
}

nameForm.addEventListener('submit', handleNameInput)

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
    confirmation += `So you want ${selectedFood.value} `
    inputWrapper.innerHTML=''
    setTimeout(() => askForAmount(selectedFood.value), 1000)
  }) 
}

//Question 4
const askForAmount = selectedFood => {
  showMessage(`How many ${selectedFood} do you want?`, 'bot')
  inputWrapper.innerHTML =`
    <form id="name-form">
      <input id="name-input" type="text" />
      <button class="send-btn" type="submit">
        Send
      </button>
    </form>
  `

  const foodForm = document.getElementById('name-form')
  const foodInput = document.getElementById('name-input')
 
  foodForm.addEventListener('submit', (event) => {
    event.preventDefault()  
    confirmation += `and you want ${foodInput.value} of them `
    showMessage(foodInput.value, 'user') 
    drinkChoice(foodInput.value)
  })
}

//Question 5
const drinkChoice = () => {
  setTimeout(() => showMessage('Do you want a drink with your order?', 'bot'), 1000)
  inputWrapper.innerHTML = `
    <button id="yes-button">Yes</button>
    <button id="no-button">No</button>
  ` 

  document
  .getElementById('yes-button')
  .addEventListener('click', () => {
    showMessage('Yes', 'user')
    inputWrapper.innerHTML = '' 
    setTimeout(() => drinkSelect('a'), 1000)
  }) 

  document
  .getElementById('no-button')
  .addEventListener('click', () => {
    showMessage('No', 'user')
    inputWrapper.innerHTML = '' 
    setTimeout(() => drinkSelect('no'), 1000)
  })
}

//Question 6
const drinkSelect = (drinkChoice) => {

  if (drinkChoice === 'a') {
    showMessage('Okey, you added a drink to your order', 'bot')
  } else {
    showMessage("Okey, you don't want a drink added to your order", 'bot')
  }

  confirmation += `and ${drinkChoice} drink is that correct?`
  setTimeout(() => askForConfirmation(drinkChoice), 1000)
}

//Summary
const askForConfirmation = () => {
  showMessage(confirmation, 'bot')

  inputWrapper.innerHTML = `
    <button id="yes-button">Yes</button>
    <button id="no-button">No</button>
  `
  document
  .getElementById('yes-button')
  .addEventListener('click', () => {
    showMessage('Yes', 'user')
    inputWrapper.innerHTML = '' 
    setTimeout(() => showMessage('Good, we will have your order ready in 20 minutes', 'bot'), 2000)
  })

  document
  .getElementById('no-button')
  .addEventListener('click', () => {
    showMessage('No', 'user')
    location.reload()
  })
}

