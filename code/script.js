// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const userInput = document.getElementById('user-input');
const userForm = document.getElementById('user-form');
const sendBtn = document.getElementById('sendBtn');
const inputWrapper = document.getElementById('input-wrapper');

// If you need any global variables that you can use across different functions, declare them here:


// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
  console.log("User greeted successfully");
}
setTimeout(greetUser, 500);

// Set up your eventlisteners here
const handleNameInput = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = ''

  // After 1 second, show the next question by invoking the next function.
	// passing the name into it to have access to the user's name if we want
	// to use it in the next question from the bot.
  setTimeout(() => showFoodOptions(name), 1000)
}

//Buttons with different food options for user to select from


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

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

