// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const wrapper = document.getElementById('input-wrapper')
const nameSubmit = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')

// If you need any global variables that you can use across different functions, declare them here:
let userName = "";

// Declare your functions after this comment
// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage(`Why hello there, may i ask you your name?`, 'bot')
}

//Store the users name and pass it through showMessage function which posts message to user bubble
const handleNameInput = (event) => {
  event.preventDefault();
  // Store the value in a variable so we can access it after we
  // clear it from the input
  userName = nameInput.value;
  showMessage(`${userName}`, 'user');
  nameInput.value = "";

  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.
  setTimeout(hangout(userName), 1000);
};

const hangout = (userName) => {
  showMessage(`What are you up to today, ${userName}? Want to hang out?`, 'bot');
  wrapper.innerHTML = `
  <button id="no" type="submit" value="No">No, thank you</button>
  <button id="yes" type="submit" value="Yes">I'd love to!</button>
  `
}

const age = () => {
  if (userAge <= 18) {
    showMessage
  }
}


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("User is the sender.");
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
    console.log("Bot is the sender.");
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

// Set up your eventlisteners here
nameSubmit.addEventListener('submit', handleNameInput);
wrapper.addEventListener('submit', age);

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)
