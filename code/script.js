// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const input = document.getElementById('name-input') //trying to figure this out
const form = document.getElementById('name-form')
const submit = document.getElementById('submit')
const inputWrapper = document.getElementById('input-wrapper')

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment
const botReply = (msg) => {
  showMessage(msg, "bot");
};

const userReply = (msg) => {
  showMessage(msg, "user");
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("User is saying something")
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
    console.log("Bot is asking something")
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
  // call funtion showMessage, it is declared earlier with  argument 
  //"Hello there, What's your name?" for message, and the argument "bot" for sender

const greetUser = () => {
  botReply("Hi pretty, what's your name?");
}

const handleInput = (event) => { // when submiting this will be used
  event.preventDefault() // prevents chat from refreshing when submitting
  const msg = input.value // input value shall be stored in the const name 
  userReply(`${msg}`) // users answer 
  input.value = ''
  setTimeout(() => question1(msg), 500)
}

const question1 = (msg) => {
  botReply(`Nice to meet you ${msg}! How are you feeling today?`)
  //answer choices
  inputWrapper.innerHTML = `<div id="optionBtns">
    <button id="greatBtn" type="submit">🤩</button>
    <button id="okBtn" type="submit">😬</button>
    <button id="mehBtn" type="submit">🫠</button></div>`;

  document
    .getElementById("greatBtn")
    .addEventListener("click", () => question2("great"));
  document
    .getElementById("okBtn")
    .addEventListener("click", () => question2("okey"));
  document
    .getElementById("mehBtn")
    .addEventListener("click", () => question2("meh"));
};

  //answer of sort
const question2 = (userAnswer) => {
  if (userAnswer === "great") {
    userReply(userAnswer);
    setTimeout(() => botReply(`I'm happy for you!`), 1000);

  } else if (userAnswer === "okey") {
    setTimeout(() => botReply(`Do you wanna hear something funny to birghten your day?`), 1000);
  } else {}
}  


// Set up your eventlisteners here

form.addEventListener('submit', handleInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500);

