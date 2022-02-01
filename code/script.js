// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper')
const sendBtn = document.getElementById('send-btn');
const input = document.getElementById('name-input');

// Global variables, if you need any, declared here
let questionNumber = 1

// Functions declared here
const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log(); //Move this to line 12/13?
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === 'bot') {
    console.log();
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
};

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => showCakes(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showMenu(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showDishSize(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => showPrice(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}



// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`Welcome, what's your name?`);
  // Just to check it out, change 'bot' to 'user' here 👆
};

const showCakes = (msg) => {
  questionNumber++
  botReply(`What cake would you like ${msg}`);
  inputWrapper.innerHTML = `
  <button id="chocolate">Chocolate</button>
  <button id="vanilla">Vanilla</button>
  <button id="fruits">Fruits</fruits>
  `
};







// Set up your eventlisteners here

sendBtn.addEventListener('click', () =>
  nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})




// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);



document.getElementById('name-form').onsubmit = event => {
  event.preventDefault()
}

