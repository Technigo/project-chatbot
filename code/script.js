// Variables that point to selected DOM elements
const chat = document.getElementById("chat");

const form = document.getElementById("name-input")
const inputWrapper = document.getElementById("input-wrapper")
const sendBtn = document.getElementById("submit")
// If you need any global variables that you can use across different functions, declare them here:

let username

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
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greetUser = (event) => { 
  showMessage("Do you need a vacation? Enter your name below to get started.", "bot");
  //event.preventDefault();
}

//Event listeners--Questions
 

const handleNameInput = (event) => {
  event.preventDefault(); //prevents refresh when user hits submit
  const userName = nameInput.value; //this will store the input value 
  //username === nameInput.value;
  showMessage("Hello" + userName + "please choose from the options below", "user");
  nameInput.value = ''; //clears name input to empty string
  setTimeout (() => showMessage(`Nice to meet you ${userName}!`, 'bot'), 1000 ) 


 nameInput.addEventListener('submit', handleNameInput)


  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.
  setTimeout(() => showFoodOptions(name), 1000);
}
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greetUser, 1000);
