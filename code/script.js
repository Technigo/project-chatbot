// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
let userAnswer = document.getElementById('name-input')
const nameForm = document.getElementById('name-form')
const value = document.getElementById('name-input')
// Global variables, if you need any, declared here

// Functions declared here
const beerQuestion = () => {
  if (value === "ipa") {
    showMessage(value, 'user')
    showMessage('Yummy', "bot") 
  } else if (value === "lager") {
    showMessage (value, 'user')
    showMessage('Great choice!', "bot")
  } else if (value === "stout") {
    showMessage (value, 'user')
    showMessage ('Coming right up', "bot")
  } else { 
    showMessage (value,'user')
    showMessage ('Sorry, we are out of that', "bot")
  }
}

const wineQuestion = () => {
  if (value === "meat") {
    showMessage(value, 'user')
    showMessage('I suggest you get a bottle of red wine!', "bot") 
  } else if (value === "fish") {
    showMessage (value, 'user')
    showMessage('Get some white wine!', "bot")
  } else if (value === "vegetarian") {
    showMessage (value, 'user')
    showMessage ('Rose will go great with that!', "bot")
  } else { 
    showMessage (value,'user')
    showMessage ('Sorry, we are out of that', "bot")
  }
}

const bubblesQuestion = () => {
  if (value === "cava") {
    showMessage(value, 'user')
    showMessage("I'll get you a bottle straight away!", "bot") 
    console.log(value);
  } else if (value === "Prosecco") {
    showMessage (value, 'user')
    showMessage('Yumm italian!', "bot")
  } else if (value === "champagne") {
    showMessage (value, 'user')
    showMessage ('What a celebration!', "bot")
  } else { 
    showMessage (value,'user')
    showMessage ('Sorry, we are out of that', "bot")
  }
}

const clearInput = () => {
  const clearText = document.getElementById("name-form");
  clearText.reset();
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log("Hej!")
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
    console.log(sender);
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hello there, what do you fancy today? Beer, Wine or Bubbles?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

nameForm.addEventListener("submit", (event)=> {
  event.preventDefault();
  
   // Assign input value to variable
   const value = document.getElementById('name-input').value;
      if (value === "beer") {
      clearInput()
      showMessage(value, 'user')
      showMessage('What do you prefer: IPA, Lager or Stout?', "bot")
      beerQuestion();
    } else if (value === "wine") {
      clearInput()
      showMessage(value, 'user')
      showMessage('What are you eating: meat, fish or vegetarian?', 'bot')
      wineQuestion();
    } else if (value === "bubbles") {
      clearInput()
      showMessage(value, 'user')
      showMessage('What do you prefer: Cava, Prosecco or Champagne?', 'bot')
      bubblesQuestion();
    } else {
      clearInput()
      showMessage(value, 'user')
      showMessage("We don't sell that!", 'bot')
    }    
  });
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)

// delete input after sent
// add more (nested?) questions