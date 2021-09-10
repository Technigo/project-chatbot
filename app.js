//just putting this comment here to mark this as the file we edited together!

// All the DOM selectors stored as short variables
// const chat = document.getElementById('chat')
const handleNameInput = document.getElementById('name-input')
const sendBtn = document.getElementById('send-btn')
const nameForm = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')

let questionNumber = 1


const userSound = document.getElementById('clickUser'); 


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    userSound();
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


const conversation = (message) => {
  if (questionNumber === 1) {
    setTimeout(() => greeting(message, 'bot'), 1000)
    console.log('nr:1');

  } else if (questionNumber === 2) {
    console.log('nr:2')
    showMessage(message, 'user')
    handleNameInput.value = ''
    setTimeout(() => drinks(message, 'user'), 1000)

  } else if (questionNumber === 3) {
    console.log('nr:3')
    showMessage(message, 'user')
    setTimeout(() => drinkChoices(message), 1000)

  } else (questionNumber === 4)
  console.log('nr:4')
}


// Starts here
const greeting = () => {
  questionNumber = 1
  showMessage(`Welcome to the café! What's your name?`, 'bot')
}

const drinks = () => {
  questionNumber = 2
  let inputedName = handleNameInput.value;
  handleNameInput.value ='';
  showMessage(`${inputedName}`, 'user');

  setTimeout(function() {
    showMessage(`Hello ${inputedName}! What would you like to drink?`, 'bot');
  }, 500);

  drinkButtons();
}


nameForm.addEventListener('submit', drinks);




const drinkButtons = () => {
  questionNumber = 3

  inputWrapper.innerHTML = `
  <button id="coffeeBtn">Coffee</button>
  <button id="teaBtn">Tea</button>
  <button id="juiceBtn">Juice</button>
`
  document.getElementById('coffeeBtn')
    .addEventListener('click', () => conversation('coffee'))
  document.getElementById('teaBtn')
    .addEventListener('click', () => conversation('tea'))
  document.getElementById('juiceBtn')
    .addEventListener('click', () => conversation('juice'))
}


const drinkChoices = (type) => {
  questionNumber = 3
  showMessage(`Great choice! You selected ${type}, please choose your preference`, 'bot')
  if (type === 'coffee') {
    inputWrapper.innerHTML = `
      <select id="coffeeChoices">
        <option value="" selected disabled>👇 Select your coffee...</option>
        <option value="Black">Black</option>
        <option value="With milk">With milk</option>
        <option value="Chai latte">Chai latte</option>
      </select>
    `
    const coffee = document.getElementById('coffeeChoices')
    coffee.addEventListener('change', () => theEnd(coffee.value));
  } else if (type === 'tea') {
    inputWrapper.innerHTML = `
      <select id="teaChoices">
        <option value="" selected disabled>👇 Select your tea...</option>
        <option value="Black Tea">Black Tea</option>
        <option value="Red Tea">Red Tea</option>
        <option value="White Tea">white Tea</option>
      </select>
    `
    const tea = document.getElementById('teaChoices')
    tea.addEventListener('change', () => theEnd(tea.value));
  } else {
    inputWrapper.innerHTML = `
      <select id="juiceChoices">
        <option value="" selected disabled>👇 Select juice...</option>
        <option value="Orange Juice">Orange Juice</option>
        <option value="Apple Juice">Apple Juice</option>
        <option value="Carrot Juice">Carrot Juice</option>
      </select>
    `
    const juice = document.getElementById('juiceChoices')
    juice.addEventListener('change', () => theEnd(juice.value));
  }
}

const theEnd = (message) => {
  questionNumber = 4
  showMessage(message, 'user')
  showMessage(`Thank you for your order: ${message}!`, 'bot')
  inputWrapper.innerHTML = ``
}

setTimeout(conversation, 500)




