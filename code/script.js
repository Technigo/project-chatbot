console.log(`let's chat`)

// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat');
const nameForm
  = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');


// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === 'bot') {
    console.log('bot says:', message)
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
};

// A function to save the user's name and respond
const saveNameAndRespond = (name) => {
  // Save the name to local storage for future use
  localStorage.setItem('userName', name);


  // Convert the name to uppercase
  const capitalizedName = name.toUpperCase();

  // Respond to the user with their name
  showMessage(`Hello ${capitalizedName}! Do you have a question for me?`, 'bot');
};

// Event listeners
// Flag to track if the bot has asked for the name
let hasAskedName = false;
nameForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const userName = nameInput.value;
  nameInput.value = '';

  // Display the user's message
  showMessage(userName, 'user');

  // Check if the bot has already asked for the // Check if the bot has already asked for the name
  if (hasAskedName) {
    // If yes, validate the question
    if (userName.endsWith('?')) {
      // If the question is valid, respond
      showMessage(generateMagic8BallResponse(userName), 'bot');
    } else {
      // If not, prompt the user to ask a question
      showMessage("Please ask your question in the form of a question (e.g., \"Will it rain tomorrow?\").", 'bot');
    }
  } else {
    // If not, save the name and respond with the greeting
    saveNameAndRespond(userName);
    hasAskedName = true;
  }

});

// This little thing makes the chat scroll to the last message when there are too many to
// be shown in the chat box
chat.scrollTop = chat.scrollHeight


// A function to start the conversation
const greetUser = () => {

  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, what's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
}


const magic8BallResponses = [
  "Yes, definitely.",
  "It is certain.",
  "Without a doubt.",
  "Yes.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Signs point to yes.",
  "Yes, indeed.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Concentrate and ask again.",
  "Cannot predict now.",
  "Don't count on it.",
  "No.",
  "Absolutely not.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

function generateMagic8BallResponse() {
  const randomIndex = Math.floor(Math.random() * magic8BallResponses.length);
  return magic8BallResponses[randomIndex];
}


// Eventlisteners goes here 👇

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 2000)
