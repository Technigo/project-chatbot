// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputValue = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')

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
  showMessage(`Hey! I'm your virtual bartender. What's your name?`, 'bot') 
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleNameInput = (event) => {
  event.preventDefault() //prevents the page from refreshing
  const name = inputValue.value  //input from user gets stored in name
  showMessage(name, 'user') //shows the msg the user typed in
  inputValue.value = '' //clears form

  if (name === ""){ //If no user name
    setTimeout(() => showMessage(`That's rude! Please give me your name.`, 'bot'), 1000)
  }
  else{ //If user puts in name... continue...
    setTimeout(() => showMessage(`Hey ${name}!`, 'bot'), 1000) //bot says Hey to 'name'
    setTimeout(() => drinkMenu(), 2000) // continues to drinkMenu
  }
}


// Set up your eventlisteners here

form.addEventListener('submit', handleNameInput) //listens to submit button, goes to handleNameInput func.


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greeting, 1000)