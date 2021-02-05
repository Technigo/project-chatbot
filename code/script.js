// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameForm = document.GetElementById('name-form');
const input = document.getElementById('input');
const sendBtn = document.get.ElementById('send-btn');


// Global variables, if you need any, declared here
let questionNumber = '';

//FUNKTIONS 
//Chat bot answer function:

const userMessage = (inputMessage) => {
    showMessage(inputMessage, 'bot');
}

//User answer function
const userMesssage = (inputMessage) => {
        showMessage(inputMessage, 'user');
    }

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
        if (sender === 'user') {
            chat.innerHTML += `
    ection class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />
      </section>
    `
        } else if (sender === 'bot') {
            chat.innerHTML += `
    ection class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
        }
        // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
        chat.scrollTop = chat.scrollHeight
// Starts here
        
// Just to check it out, change 'bot' to 'user' here 👆
        

// Set up your eventlisteners here
        

// When website loaded, chatbot asks first question.
        // normally we would invoke a function like this:
        // greeting()
        // But if we want to add a little delay to it, we can wrap it in a setTimeout:
        // setTimeout(functionName, timeToWaitInMilliSeconds)
        // This means the greeting function will be called one second after the website is loaded.
        setTimeout(greeting, 1000)        