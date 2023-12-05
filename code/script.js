// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const userInput = document.getElementById('user-input')
const submitButton = document.getElementById('send-button')
const messageLabel = document.getElementById('name-label')

// If you need any global variables that you can use across different functions, declare them here:
let nameRecieved = false
let userName = ''
let foodType = ''
let actualDish = ''
let adultVsChild = ''
const timeOut = 1000

let adultPrice = 10
let childPrice = 5

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
    chat.scrollTop = chat.scrollHeight
  } else if (sender === 'bot') {
    
    const thinking = document.createElement('section')
    thinking.innerHTML = `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>...</p>
        </div>
      </section>
    `
    chat.appendChild(thinking)
    chat.scrollTop = chat.scrollHeight

    setTimeout(() => {
    chat.removeChild(thinking)
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
    chat.scrollTop = chat.scrollHeight
    }, timeOut)
  } 

}

const nextQuestion = () => {
  currentFunc += 1
  functionArray[currentFunc]()
}

const greetUser = () => {
  showMessage("Hello there, What's your name?", 'bot')
}

const handleNameInput = () => {

  const userName = userInput.value

  if (userName && !nameRecieved) {
    showMessage(userName, 'user')
    nameRecieved = true

    inputWrapper.innerHTML = ''

    showMessage(`Welcome to the Pizzeria ${userName}`, 'bot')
    currentFunc+=1
    nextQuestion()
  } else if (!nameRecieved) {
    showMessage("I'm still waiting for your answer...", 'bot')
  }
}

const showFoodTypeOrder = () => {
  inputWrapper.innerHTML = `
  <button id="pizza-button">Pizza</button>
  <button id="pasta-button">Pasta</button>
  <button id="salad-button">Salad</button>
  `
  setTimeout(() => showMessage(`What type of food would you like to order ${userName}?`, 'bot'), timeOut)

  document.getElementById('pizza-button').addEventListener('click', () =>{
    foodType = 'Pizza'
    showMessage('Pizza', 'user')
    nextQuestion()
  })
  document.getElementById('pasta-button').addEventListener('click', () => {
    foodType = 'Pasta'
    showMessage('Pasta', 'user')
    nextQuestion()
  })
  document.getElementById('salad-button').addEventListener('click', () => {
    foodType = 'Salad'
    showMessage('Salad', 'user')
    nextQuestion()
  })
}

const subMenuChoice = () => {
  showMessage(`Good choice to order ${foodType}, what kind of ${foodType.toLowerCase()} would you like?`, 'bot')
  inputWrapper.innerHTML = ``

  switch (foodType) {
    case 'Pizza':
      inputWrapper.innerHTML = `
      <select id="dish-select" class="dish-select">
        <option value="">👇🏼 Select a pizza: </option>
        <option value="Vesuvio">Vesuvio</option>
        <option value="Capricciosa">Capricciosa</option>
        <option value="Hawaii">Hawaii</option>
      </select>
      `
      break
    case 'Pasta':
      inputWrapper.innerHTML = `
      <select id="dish-select" class="dish-select">
        <option value="">👇🏼 Select a pasta:</option>
        <option value="Pasta Carbonara">Pasta Carbonara</option>
        <option value="Spaghetti Bolognese">Spaghetti Bolognese</option>
        <option value="Spaghetti alle Vongole">Spaghetti alle Vongole</option>
      </select>
      `
      break
    case 'Salad':
      inputWrapper.innerHTML = `
      <select id="dish-select" class="dish-select">
        <option value="">👇🏼 Select a salad:</option>
        <option value="Greek salad">Greek salad</option>
        <option value="Chicken salad">Chicken salad</option>
        <option value="Korean noodle salad">Korean noodle salad</option>
      </select>
      `
      break
  }

  const dishSelection = document.getElementById('dish-select')
  dishSelection.addEventListener('change', () => {
    actualDish = dishSelection.value
    showMessage(actualDish, 'user')
    inputWrapper.innerHTML = ''
    nextQuestion()
  })
}

const adultOrChild = () => {
  showMessage(`Perfect, we will prepare ${actualDish} for you. Do you want adult or child-size of your portion?`, 'bot')

  inputWrapper.innerHTML = `
  <button id="child">👶🏻</button>
  <button id="adult">👵🏼</button>
  `

  document.getElementById('child').addEventListener('click', () => {
    adultVsChild = 'child'
    showMessage(adultVsChild, 'user')
    nextQuestion()
  })
  document.getElementById('adult').addEventListener('click', () => {
    adultVsChild = 'adult'
    showMessage(adultVsChild, 'user')
    nextQuestion()
  })
}

const orderSummary = () => {
  showMessage(`Ok, we will prepare ${actualDish} for you in ${adultVsChild}-size. That will land on $ ${adultVsChild === 'child' ? childPrice : adultPrice}. Press yes to confirm:`, 'bot')

  inputWrapper.innerHTML = `
  <button id="confirm-yes">Yes</button>
  <button id="confirm-no">No</button>
  `

  document.getElementById('confirm-yes').addEventListener('click', () => {
    inputWrapper.innerHTML = ``
    showMessage('Yes', 'user')
    showMessage('Thank you for your order! You will soon get a delicious meal 🍲', 'bot')
  })
  document.getElementById('confirm-no').addEventListener('click', () => {
    inputWrapper.innerHTML = ``
    showMessage('No', 'user')
    showMessage("We are so sorry that you no longer wish to order a meal. Come back another time 🤙🏼", 'bot')
  })

}

// Set up your eventlisteners here
submitButton.addEventListener('click', handleNameInput)
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleNameInput()
  }
})

const functionArray = [
  greetUser,
  handleNameInput,
  showFoodTypeOrder,
  subMenuChoice,
  adultOrChild,
  orderSummary
]
let currentFunc = -1

// When website loaded, chatbot asks first question. With a little delay of 1000 ms.
// We have wraped it in a setTimeout:
nextQuestion()
