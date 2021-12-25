// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const form = document.getElementById('name-form'); 
const button = document.getElementById('button');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');
// Global variables, if you need any, declared here
let currentQuestion = 1; 
// FUNCTIONS
// 4., 6., 8.
const nextQuestion = (message) => {
  if(currentQuestion === 1) {
    nameInput.value = ''
    setTimeout(() => showFoodOptions(message), 1000)

  } else if(currentQuestion === 2) {
    inputWrapper.innerHTML = ''
    showMessage(message, 'user')
    setTimeout(() => showMessage(`So you want to order ${message}?`, 'bot'), 1000)
    showPriceSushi() 

  } else if(currentQuestion === 3) {
    inputWrapper.innerHTML = ''
    showMessage(message, 'user')
    ending(message)
  } 
}
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += ` 
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="./assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += ` 
      <section class="bot-msg">
      <img src="./assets/sushi-roll-icon.jpeg" alt="">
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  chat.scrollTop = chat.scrollHeight
  }
}
//5.
const showFoodOptions = () => {
  currentQuestion++ // current question is 2
  setTimeout(() => showMessage(`What sushi would you like to order? `, 'bot'), 1000)
  inputWrapper.innerHTML = `
    <button id="small-sushi">8 pieces</button>
    <button id="big-sushi">12 pieces</button>
  `
  const smallSushi = document.getElementById('small-sushi')
  smallSushi.addEventListener('click', () => nextQuestion('8 pieces'))

  const bigSushi = document.getElementById('big-sushi')
  bigSushi.addEventListener('click', () => nextQuestion('12 pieces'))
}
// 7.
const showPriceSushi = () => {
  currentQuestion++// current question is 3
  inputWrapper.innerHTML = `
    <button id="yes">Yes</button>
    <button id="no">No</button>
  ` 
  const yesAnswer = document.getElementById('yes'); 
  yesAnswer.addEventListener('click', () => nextQuestion('yes'));

  const noAnswer = document.getElementById('no'); 
  noAnswer.addEventListener('click', () => nextQuestion('no'));
}
//3. The bot shows a response to the user 
const handleNameInput = () => {
  const name = nameInput.value
  showMessage(name, 'user')
  setTimeout(() => showMessage(`Nice to meet you ${name}`, 'bot'), 1000)
  nextQuestion()
}
// 1.Starts here 
const greeting = () => {
  showMessage(`Hi, my name is SushiBot! What's your name?`, 'bot'); // question nr 1
}
setTimeout(greeting, 1000)
// 9.
const ending = (message) => {
  if (message === 'yes') {
    showMessage('Thank you for your order', 'bot')
    setTimeout(() => location.reload(), 5000)
  } else  
    showMessage('Okey, see you later!', 'bot')
    setTimeout(() => location.reload(), 5000)
}
// EVENT LISTENERS 
// 2.When the user writes a name in the input and pushes the button the bot continues to the next step (3)
button.addEventListener('click', (e) => { 
e.preventDefault(); // this prevents the browser to reload
handleNameInput();
})
