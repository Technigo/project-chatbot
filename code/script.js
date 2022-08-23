// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input')
const submitBtn = document.getElementById('send-btn')     // we created the variables to work with it.
const nameForm = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')


// If you need any global variables that you can use across different functions, declare them here:


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
    console.log("Hello world")
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
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hi, My name is Alex and I'm redy to help you. What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleNameInput = (event) => {      // Here we creat a function to avoid the submit when we click or press the button sumbit.
  event.preventDefault()                  // .preventDefault() avoits the refresh the page.
  const name = nameInput.value            // we create a new variable with the typed message in the input bar to use for the chatbot.
  showMessage(name, 'user')               // here calls the function showMessage() to see what was typed before.
  nameInput.value = ''                    // converts the info of nameInput.value to a stirng.
  setTimeout(() => showMessage(`Welcome ${name}. Want to talk about you price, or have some problem?`, 'bot'), 750)
};

// Set up your eventlisteners here

nameForm.addEventListener('submit', handleNameInput);

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
