// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputField = document.getElementById('name-input');
const sendBtn = document.getElementById('send-btn');

// FUNCTIONS are declared below

// Function to clear the input field
// Since the input field needs to be cleared after every input I created a function for this.
const clearInputField = () => {
  inputField.value = "";
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
   // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log('Message is:', message);
    console.log('Sender is:', sender);
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
    console.log('Message is:', message);
    console.log('Sender is:', sender);
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

// Function to greet the user
// The function showMessage is called with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
const greetUser = () => {
  showMessage("Hi, what's your name?", 'bot')
}

// Function for the name input from the user
const handleNameInput = (event) => {
  event.preventDefault();

  // the dot . means that we're accessing an attribute/method of the variable left of the dot.
  // Here we are accessing the value that exists in the input element with the id "name-input". 
  const name = inputField.value;

  // If the function that is being called was defined with parameters, like showMessage = (message, sender), they need to be added when said function is called/used.
  // the showMessage function is called and passes on the arguments name (which is the value of the input field) and the sender (which depends on the if statement).
  showMessage(name, "user");

  //Function that clears the input field.
  clearInputField();

  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want to use it in the next question from the bot.
  // To pass parameter values to a function, that is itself passed as a parameter to another function, use an "anonymous function" () => {}
  // Meaning, when a function is a parameter and needs a parameter itself, you need to use an anonymous function
  setTimeout(() => handleFoodOptions(name), 1000);
};

// EVENTLISTENERS

sendBtn.addEventListener('click', handleNameInput);

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 100)
