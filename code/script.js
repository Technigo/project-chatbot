// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const input = document.getElementById("name-input");
const sendButton = document.getElementById("send-btn");
const inputWrapper = document.getElementById("input-wrapper");
// Global variables, if you need any, declared here

const greetingMessage = `Hello there, What's your name?`;

// Functions declared here

const form = document.getElementById("name-form")
 form.addEventListener("submit", (event) => {
    event.preventDefault()
    let userName = input.value
    showMessage(userName, "user")
    input.value = '';
    setTimeout(questionAge(userName), 1000)
  })

const questionAge = (name) => {
  showMessage(`Hello ${name}! How old are you?`,"bot")
  inputWrapper.innerHTML = ''
  let button1 = document.createElement('button')
  button1.innerHTML = '18'
  inputWrapper.appendChild(button1)
}



// const form = document.getElementById("name-form");
// form.addEventListener("submit", handleNameInput);

// const handleNameInput = (event) => {
//   event.preventDefault();
//   let userName = input.value;
//   showMessage(userName, "user");
//   input.value = '';
// };




// const handleNameInput = (event) => {
//   event.preventDefault()
//   // Store the value in a variable so we can access it after we 
// 	// clear it from the input
//   const name = nameInput.value
//   showMessage(name, 'user')
//   nameInput.value = ''
// }

// sendButton.addEventListener("click", function () {
  
// })

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log(sender);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log(sender);
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
  showMessage(greetingMessage, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greeting, 0)



// function to change the background color into a random color
let values = [];
function makeColors () {
  
  for (let i = 0; i < 3; i++) {
    values.push(Math.floor(Math.random() * (256 - 0) + 0))
  }
}
// makeColors();
// document.getElementsByTagName("body")[0].style.backgroundColor = `rgb(${values[0]}, ${values[1]}, ${values[2]})`;