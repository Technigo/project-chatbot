// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWraper = document.getElementById('input-wrapper')
let userName = ""

// Global variables, if you need any, declared here

// Functions declared here

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
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

//Question 1

const handleResponse = () => {
  let userName = document.getElementById('name-input').value;
  showMessage(`Nice to meet you ${userName}!`, 'bot')
   
}

const moodOptions = () => {
  const options = document.getElementById('name-input').value;
  showMessage(`How are you feeling today${userName}?`, 'bot')
  inputWraper.innerHTML = `
    <button id="option1">happy</button>
    <button id="option2">sad</button>
    <button id="option3">angry</button>
    `
    document.getElementById("option1").addEventListener("click", () => {
      showMessage("I see you are feeling happy!", "bot")
      setTimeout (() => inputWrapper.innerHTML=`
    <button id="Happy">Happy</button>
    <button id="thesun">Here comes the sun</button>
    <button id="shinypeople">Shiny happy people</button>
    `, 1000)
    })

    document.getElementById("option2").addEventListener("click", () => {
      showMessage("I see that you are sad today.", "bot")
      setTimeout (() => inputWrapper.innerHTML=`
    <button id="dontworry">Don't worry, be happy</button>
    <button id="someone">Someone like you</button>
    <button id="heyjude">Hey Jude</button>
    `, 1000)
    })

    document.getElementById("option3").addEventListener("click", () => {
      showMessage("I see that you are angry today", "bot")
      setTimeout (() => inputWrapper.innerHTML=`
    <button id="intheend">In the end</button>
    <button id="basketcase">Basket case</button>
    <button id="breakstuff">Break stuff</button>
    `, 1000)
    })
    
}

// Set up your eventlisteners here
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.getElementById('name-input').value;
  showMessage(value, 'user')
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  showMessage(value, 'bot')
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = document.getElementById('name-input').value;
  setTimeout (() => handleResponse(value, 'bot'), 1000)
  setTimeout (() => moodOptions(value, 'bot'), 2000)
});



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
