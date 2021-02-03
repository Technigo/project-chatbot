// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form')
let step = 1;

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('I am a user')
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log('I am a robot')
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

  // Let's clear user input value every time after sending message
  document.getElementById('name-input').value = "";
}

// Starts here
const greeting = () => {
  showMessage(`Hello! Would you like to order coffee?`, 'bot')
  console.log('Greeting from bot')
  // Just to check it out, change 'bot' to 'user' here 👆

}

// Set up your eventlisteners here
nameForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = document.getElementById("name-input").value;
  
  showMessage(value, "user")

  if (step === 1) {

    if(value === 'yes') {
      showMessage('Would you like a latte or cappuccino?', 'bot');
      step ++
    } else {
      showMessage('Ok, see you another time!', 'bot');
    }
  } else if (step === 2) {
      if(value === 'latte' || value === 'cappuccino') {
        showMessage('Great, short or tall?', 'bot');
        step ++
      } else {
        showMessage('Sorry, I do not understand.', 'bot');
      }
  } else if (step === 3) {
      if(value === 'short') {
        showMessage('That will be 20 kronors', 'bot');
        step ++
      } else if (value === 'tall'){
        showMessage('That will be 30 kronors', 'bot');
        step ++
      } else {
        showMessage('Sorry, I can only prepare short or tall', 'bot');
      } 
  } else if (step === 4) {
      showMessage('Thank you. Have a good day!', 'bot');
  }
  
});


// }

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)
setTimeout(showMessage, 1000)