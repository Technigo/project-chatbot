//just putting this comment here to mark this as the file we edited together!

// All the DOM selectors stored as short variables
// const chat = document.getElementById('chat')
const handleNameInput = document.getElementById('name-input')
const sendBtn = document.getElementById('send-btn')
const nameForm = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
let questionNumber = 1
// Global variables, if you need any, declared here
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log(showMessage)
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
  console.log('questionNumber', questionNumber)
  if (questionNumber === 1) {
    showMessage(message)
    handleNameInput.value = ''
    setTimeout(() => drinks(message), 1000)
  } else if (questionNumber === 2) {
    showMessage(message, 'user')
    setTimeout(() => drinkChoices(message), 1000)
  } else (questionNumber === 3)
    //showMessage(message)
    //setTimeout(() => fika(message), 1000)
  }
// Starts here
const greeting = () => {
  questionNumber = 1
  showMessage(`Hello, welcome to the café! What's your name?`, 'bot')
}
const drinks = (event) => {
  questionNumber = 2
  let inputedName = handleNameInput.value;
  handleNameInput.value ='';
  showMessage(`Hello ${inputedName}! What would you like to drink?`, 'bot');
  drinkButtons();
};
// Set up your eventlisteners here
nameForm.addEventListener('submit', conversation);
const drinkButtons = () => {
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
setTimeout(drinks, 1000);
}
const drinkChoices = (type) => {
  questionNumber = 3
  showMessage(`Great choice! You selected ${type}, please choose your preference`, 'bot')
  if (type === 'coffee') {
    inputWrapper.innerHTML = `
      <select id="coffeeChoices">
        <option value="" selected disabled>:point_down: Select your coffee...</option>
        <option value="black">Black</option>
        <option value="white">With milk</option>
        <option value="chaiLatte">chai latte</option>
      </select>
    `
    const coffee = document.getElementById('coffeeChoices')
    coffee.addEventListener('change', () => theEnd('coffee'));
  } else if (type === 'tea') {
    inputWrapper.innerHTML = `
      <select id="teaChoices">
        <option value="" selected disabled>:point_down: Select your tea...</option>
        <option value="blackTea">Black Tea</option>
        <option value="redTea">Red Tea</option>
        <option value="whiteTea">white Tea</option>
      </select>
    `
    const tea = document.getElementById('teaChoices')
    tea.addEventListener('change', () => theEnd('tea'));
  } else {
    inputWrapper.innerHTML = `
      <select id="juiceChoices">
        <option value="" selected disabled>:point_down: Select juice...</option>
        <option value="orange">Orange Juice</option>
        <option value="apple">Apple Juice</option>
        <option value="carrot">Carrot Juice</option>
      </select>
    `
    const juice = document.getElementById('juiceChoices')
    juice.addEventListener('change', () => theEnd('juice'));
  }
}
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)




