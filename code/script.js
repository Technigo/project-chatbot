// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const sendBtn = document.getElementById('send-btn')
const nameForm = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
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

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hi! I can help you find the perfect gift for anyone. <br><br>Please start by telling me your name.", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)

askForGender = (name) => {
  showMessage(`Nice to meet you ${name}! <br><br> Are you looking for a gift for a gentleman or a lady?`, "bot")
  nameForm.remove()
  inputWrapper.innerHTML =  `<button class="send-btn" id="pizza">👩‍🦰</button>
  <button class="send-btn" id="pizza">🧔</button>`
  console.log(inputWrapper.innerHTML)
}

const handleNameInput = (event) => { 
  event.preventDefault(); 
  const name = nameInput.value
  console.log(name)
  showMessage(name, "user")
  //nameForm.reset()
  nameInput.value = ""; 


  setTimeout(() => askForGender(name), 1000);
}

nameForm.addEventListener ('submit', handleNameInput)

