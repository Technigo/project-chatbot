// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const form = document.getElementById('name');
// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment
const handleNameInput = (event) => {
  //this function handles the input of the user's name.
  event.preventDefault(); // This allows the next function to start after user inputs their name, instead of restarting the chat.
  // Store the value in a variable so we can access it after we
  // clear it from the input
  const name = nameInput.value; //This function stores the users name and displays the name from the user on the right.
  showMessage(name, 'user')
  nameInput.value = ''

  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.
  setTimeout(() => welcomeMessage(name), 1000)
}
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
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hi, I'm BeautyBot, What's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const welcomeMessage = (userName) => {
  //Take the username

  if (userName == '') {
    //If text input is blank, the showMessage will appear to ask user to write their name
    showMessage(`Name must be filled out!`, 'bot')
    return false;
  } else {
    //If user types their name the message below will appear.
    showMessage(`Hello ${userName}, welcome! Here at Technigo Beauty we love making our customers feel amazing. Let's dig into the world of beauty!`, 'bot')
  }
  setTimeout(() => beautyOptions(userName), 1000);
}

const beautyOptions = (userName) => {
  //this asks the user to pick a treatment. The users name is also included in the message
  showMessage(`Now ${userName}, which beautytreatment would you like today?✨`, 'bot')
  //these ar choice-buttons
  inputWrapper.innerHTML = ` 
    <button id="nailsBtn">Nails</button>
    <button id="hairBtn">Hair</button>
    <button id="lashesBtn">Lashes</button>
  `;

  document.getElementById('nailsBtn').addEventListener('click', nailsChoice)
  document.getElementById('hairBtn').addEventListener('click', hairChoice)
  document.getElementById('lashesBtn').addEventListener('click', lashesChoice)

}


// Define your choice functions
const nailsChoice = () => {
  showMessage("I would like to get my nails done", 'user');
  setTimeout(() => pickNails(), 2000)
}

const hairChoice = () => {
  showMessage("I would like to get my hair done", 'user');
  setTimeout(() => pickHair(), 2000)
}

const lashesChoice = () => {
  showMessage("I would like to get my lashes done", 'user');
  setTimeout(() => pickLashes(), 2000)
}

const pickNails = () => {
  showMessage(`Wow nice! We love getting our nails done. A nailtreatment cost $50, would you like to confirm?`, `bot`);

  inputWrapper.innerHTML = ` 
  <button id="yesBtn">Yes</button>
  <button id="noBtn">No</button>
`;

  document.getElementById('yesBtn').addEventListener('click', yesConfirm)
  document.getElementById('noBtn').addEventListener('click', noConfirm)

}

const pickHair = () => {
  showMessage(`Great choice! A full hairtreatment cost $80, would you like to confirm?`, `bot`);

  inputWrapper.innerHTML = ` 
  <button id="yesBtn">Yes</button>
  <button id="noBtn">No</button>
`;

  document.getElementById('yesBtn').addEventListener('click', yesConfirm)
  document.getElementById('noBtn').addEventListener('click', noConfirm)

}

const pickLashes = () => {
  showMessage(`Fresh lashes is amazing! A lashtreatment cost $55, would you like to confirm?`, `bot`);

  inputWrapper.innerHTML = ` 
  <button id="yesBtn">Yes</button>
  <button id="noBtn">No</button>
`;

  document.getElementById('yesBtn').addEventListener('click', yesConfirm)
  document.getElementById('noBtn').addEventListener('click', noConfirm)

}

//confirmation functions
const yesConfirm = () => {
  showMessage("Yes, I would like to confirm my booking.", 'user');
  setTimeout(() => thankYou(), 2000)
}

const noConfirm = () => {
  showMessage("No, I do not want to confirm my booking.", 'user');
  setTimeout(() => goodBye(), 2000)
}

//thank-you and good-bye functions after the user confirms
const thankYou = () => {
  showMessage(
    `Thank you for confirming your booking. We look forward to seeing you!`,
    'bot'
  );
  inputWrapper.innerHTML = ``;
};

const goodBye = () => {
  showMessage(
    `Thats ok, please don't hesitate to come back anytime you'd like to book a beautytreatment. Good bye!`,
    'bot'
  );
  inputWrapper.innerHTML = ``;
};


// Set up your eventlisteners here

document
  .getElementById('name-form')
  .addEventListener('submit', handleNameInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)
