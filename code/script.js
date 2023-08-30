// Variables that point to selected DOM elements
const chat = document.getElementById('chat')

// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    console.log(sender); //Step 1 - added to check value
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p> 
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log(sender); //Step 1 - added to check value, if we remove the ${} from line 29 it displays the word message
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

// Starts here - these are the bot's questions
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

//listen for when form is submitted (button or 'enter pressed)
logSubmit = (event) => {
  event.preventDefault();
  console.log(`Form Submitted! Timestamp: ${event.timeStamp}`); //to check eventlistener works
  // Store the value in a variable so we can access it after we
  // clear it from the input
  const nameSubmitted = document.getElementById("name-input")
  console.log(nameSubmitted.value)
  const name = nameSubmitted.value;
  showMessage(name, 'user');
  //nameInput.value = "";
}

//when form is submitted
const form = document.getElementById("name-form");
form.addEventListener("submit", logSubmit);

// When website loaded, chatbot asks first question.
setTimeout(greetUser, 1000) //Step 1 - played around with the value

  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.
  //setTimeout(() => QuestionTwo(name), 1000);

