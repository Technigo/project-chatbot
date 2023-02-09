/// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const input = document.getElementById('name-input')
const form = document.getElementById('name-form')
const submit = document.getElementById('submit')
const inputWrapper = document.getElementById('input-wrapper')
const links1 = document.getElementById('link-area1')

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
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
        <img src="assets/my-bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleInput = (event) => { // at submit this function will be invoked
  event.preventDefault() // prevents website refresh at submit
  const message = input.value // input value will be stored in the const name 
  showMessage(`${message}`, 'user') // users answer 
  input.value = ''
  setTimeout(() => question1(message), 1000)
}


const question1 = (message) => {
  showMessage(`Nice to meet you ${message}! Do you have eco-anxiety?`, 'bot')
  //3 ALTERNATIVES: YES - NO - MAYBE
  inputWrapper.innerHTML = 
  `<div id="optionBtns">
  <button id="yesBtn" type="submit" value="Yes">Yes</button>
  <button id="noBtn" type="submit" value="No">No</button>
  <button id="maybeBtn" type="submit" value="Maybe">Maybe</button></div>`

  document
    .getElementById('yesBtn')
    .addEventListener('click', () => question2('yes'))
  document
    .getElementById('noBtn')
    .addEventListener('click', () => question2('no'))
  document
    .getElementById('maybeBtn')
    .addEventListener('click', () => question2('maybe'))
  }

// Set up your eventlisteners here

form.addEventListener('submit', handleInput)

// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
