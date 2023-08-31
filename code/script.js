// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const sendBtn = document.getElementsByClassName('send-btn')
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

    //console.log("Current message:", message);

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
//Conversation starts here. First greet from bot 

const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there happy developer, what's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}


// Set up your eventlisteners here
//When name is input by user with local function and connected to global function.
const handleNameInput = event => {
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";
  showMessage(`${userName}`, "user");
  setTimeout(reply, 1500);
  userName.remove();
}

nameForm.addEventListener("submit", handleNameInput);

const reply = () => {
  showMessage(`I think you need a riddle to relax your mind ${userName}. Choose a riddle by clicking on one of them below:`, 'bot');

  {
    nameForm.innerHTML = `
      <button class="options" id="oneBtn">One</button>
      <button class="options" id="twoBtn">Two</button>
    `;

    document.getElementById('oneBtn')
      .addEventListener('click', () => riddleOption('one'))


    document.getElementById('twoBtn')
      .addEventListener('click', () => riddleOption('two'))

  }

  const riddleOption = option => {
    if (option === "one") {
      showMessage('eget-komihåg: riddle 1: I am used for styling, look and feel. Colors, layout, make it real. In files separate, my rules align, Junior dev, what am I, in web design?', 'bot')
    }
    else if (option === "two") {
      showMessage('eget-komihåg: riddle 2 I bring interactivity, make things fun, With functions and events, the job has begun. In the browser realm, where actions play smart,Junior dev, can you name this part?', 'bot')
    }
  }
}

// Store the value in a variable so we can access it after we
// clear it from the input


// After 1 second, show the next question by invoking the next function.
// passing the name into it to have access to the user's name if we want
// to use it in the next question from the bot.


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1500)
setTimeout(reply, 1500)
setTimeout(riddleOption, 1500)
