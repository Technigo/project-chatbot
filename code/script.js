// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper')
const inputForm = document.getElementById('input-form')
const nameInput = document.getElementById('name-input')
const sendBtn = document.getElementById('send-btn')

// Global variable
let msgNotificationAudio = new Audio('./assets/notification.mp3');
msgNotificationAudio.volume = 0.1;


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
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
 msgNotificationAudio.play();


// This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}


// Greeting + Question to user from bot
const greetUser = () => {
showMessage("Hey Happy Cloud! What shall I call you?", 'bot');
}


// Answer from user + respond from bot
const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value
  showMessage(`Call me ${name}`, 'user');
  setTimeout(
    () => showMessage(`Hello ${name} ! You choose- Wind or degrees?`, 'bot'), 1000);
  nameInput.value = ''

setTimeout((createWindAndDegreeButtons), 2000);
  }

//Functions to create HTML elements:
//wind and degree buttons for user to see and click theire choice
const createWindAndDegreeButtons = () => {
    inputWrapper.innerHTML =`
    <button id="windBtn">Wind</button>
    <button id="degreeBtn">Degrees</button>`

  
// Respons from bot with two different buttons and option to user
    document
    .getElementById('windBtn')
    .addEventListener('click', () => {
      showMessage('Good winds, get ready for jumping!', 'bot')
      createNewInput()  
    })

   document
    .getElementById('degreeBtn')
    .addEventListener('click', () => {
      showMessage('A bit chilly so buckle up for your jump!', 'bot')
      createNewInput()
    }) 
  }

// Bot message with question for further help to user
    const createNewInput = () => {
      inputWrapper.innerHTML =`
      <button id="newBtn">Click OK</button>`
  
    document
    .getElementById('newBtn')
    .addEventListener('click', () => {
      setTimeout(() => showMessage('Remember fly safe! 🪂', 'bot'), 1000); 
      })
    }


greetUser();


// Set up your eventlisteners here
sendBtn.addEventListener('click', handleNameInput);
//this is the click event when you click on either of the buttons (wind or degree) and it will print the user's answer and show the next bot question
inputWrapper.addEventListener("click", function (e) {
const selectedValue = e.target;
  if (
    selectedValue.id === "wind" ||
    selectedValue.id === "degree" 
  ) {
    setTimeout(() => showMessage(selectedValue.value, "user"), 500);
    setTimeout(() => showMessage("Add your next bot question here", "bot"), 1500);
  }})

msgNotificationAudio.play();

// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.