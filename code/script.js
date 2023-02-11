// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')

let insultNumber = 1


// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

const botReply = (message) => {
  showMessage(message, 'bot')
}

const userReply = (message) => {
  showMessage(message, 'user')
}
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("hello not world")
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
    console.log("hello world")
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
  chat.scrollTop = chat.scrollHeight;
}

const nextInsult = (message) => {
  console.log('insultNumber', insultNumber)
}

if(insultNumber === 1) {
  userReply(message)
  input.value = ''
  setTimeout(() => showYesNo (message), 25)
}

// Starts here
const greetUser = () => {

  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("What's your stupid freakin' name???", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

const showYesNo = ( => {
  insultNumber = ++
  showMessage(`${message}? That's a lame name, dude. Did your mommy and daddy choose that for you?`, 'bot')
})

  inputWrapper.innerHTML = `
  <button id="yesBtn">Yes</button>
  <button id="noBtn">No</button>
  `
  document
    .getElementById('yesBtn')
    .addEventListener('click', () => nextInsult 'Yes')
  document
    .getElementById('noBtn')
    .addEventListener('click', () => nextInsult 'No')











setTimeout(greetUser, 25);
// Set up your eventlisteners here
sendBtn.addEventListener('click', () => nextInsult(input.value))
input.addEventListener('keypress', event) => {
  if (event.key === 'Enter' && input.value) nextInsult(input.value)
}
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.


