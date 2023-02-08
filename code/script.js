// Variables that point to selected DOM elements 
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const input = document.getElementById('answer-input');
const sendBtn = document.getElementById('send');

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

const botReply = (message) => {
  showMessage(msg, 'bot')
}

const userReply = (message) => {
  showMessage(msg, 'user')
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
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
    console.log("Yay")
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
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier 
  // with the argument "Hello there, What's your name?" for message, 
  // and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here


  
// Initial button click, here I should get the name entered
sendBtn.addEventListener('click', (event) => {
  event.preventDefault()

  // Store the value in a variable so I can access it after we 
  // clear it from the input
  let userName = input.value
  showMessage(`${userName}`, 'user');

  // Clears the input field
  input.value = ''
  //Here I call the function where I present the dishes to choose from. I will also pass the userName
  setTimeout(() => whatKindOfDish(userName), 1000)
})



  // After 1 second, show the next question by invoking the next function.
	// passing the name into it to have access to the user's name if we want
	// to use it in the next question from the bot.
  setTimeout(() => showFoodOptions(userName), 1000)


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1500);
