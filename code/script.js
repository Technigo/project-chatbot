document.addEventListener('DOMContentLoaded', () => {

// Variables that point to selected DOM elements
const chatSection = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment
const botReply = (message) => {
  showMessage(message, 'bot');
}

const userReply = (message) => {
  showMessage(message, 'user');
}

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
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
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
}

// Question 1: bot asks for name.

const greeting = () => {
  botReply("Hello there, what's your name?");
}

//Answer from the user
nameForm.addEventListener('submit', (event) => {
  event.preventDefault();
     const name = nameInput.value
    userReply(`My name is ${name}`);
    setTimeout(() => whatsTheIssue(), 1000);
})

// Question 2: //Second question from the bot, where there will be one written question and then three buttons.
const whatsTheIssue = () => {
botReply('Nice to meet you, what do you have problems with?');
inputWrapper.innerHTML = `
        <button id="headache" class="body-buttons"> My head hurts </button>
        <button id="anxiety" class="body-buttons"> I have anxiety </button>
        <button id="brokenArm" class="body-buttons"> My arm is broken </button>
        `
        document.getElementById('headache').addEventListener('click', () => {
          userReply('Help me with my headache')
          inputWrapper.innerHTML = ''
          setTimeout(() => booking('headache'), 1000)
         })
      
         document.getElementById('anxiety').addEventListener('click', () => {
          userReply('Help me with anxiety')
          inputWrapper.innerHTML = ''
          setTimeout(() => booking('anxiety'), 1000)
         })
        
         document.getElementById('brokenArm').addEventListener('click', () => {
          userReply('Help me with my broken arm')
          inputWrapper.innerHTML = ''
          setTimeout(() => booking('brokenArm'), 1000)
         })     
      }

const booking = (selection) => {
    if (selection === 'headache') {
      botReply("Oh no! 🤕 I'll book you a doctor who will help you with your headache.")
    } 
    
    else if (selection === 'anxiety') {
      botReply("Take a deep breath ❤️ a therapist will call you in a couple of minutes.")
    } 
    
    else {
      botReply("I'm afraid we can't help you with broken bones 👩‍🦽 please go to the emergency.")
    }
  }


// Set up your eventlisteners here

chatSection.addEventListener('submit', ()=> {
});
chatSection.onsubmit = ()=> {
}

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
})