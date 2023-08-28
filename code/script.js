// VARIABLES THAT POINT TO SELECTED DOM ELEMENTS
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const submitBtn = document.getElementById('submit-btn');
const inputField = document.getElementById('name-input');


// GLOBAL VARIABLES
let userAnswer = ""; // stores users answer in a variable globally for use anywhere

// FUNCTIONS
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

const sayHello = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, I'm the Movie-tips Bot. What's your name?", 'bot')
};

const greetUserByName = () => {
  showMessage(`It's nice to meet you ${userAnswer}! Would you like a movie recommendation for tonight 😃?`, 'bot');
  inputField.remove();
  submitBtn.remove();
  form.innerHTML += `
      <button id="submit-btn" class="send-btn answer-btn" type="submit" value="yes">Yes please 😍</button>
      <button id="submit-btn" class="send-btn answer-btn" type="submit" value="no">No 👎</button>
    `
};

// "clickingPreventsDefault" prevents the default form from submitting
// Function to send the form. It runs the function showMessage, so that whatever the user has typed is shown in the user part of the bot. 
const submitForm = (clickingPreventsDefault) => {
  clickingPreventsDefault.preventDefault();
  // gets the text (value) written in the input field and stores it in a the global variable userAnswer
  userAnswer = inputField.value;
  showMessage(`${userAnswer}`, 'user');
  setTimeout(() => greetUserByName(), 850)
  // clears the inputfield after enter is pressed or the submit button has been clicked
  inputField.value = "";
};

/*if (formWasSubmitted === true) {
  showMessage('Welcome! Would you like some movie recommendations?', 'bot');
}*/


// EVENT LISTENERS
submitBtn.addEventListener("click", submitForm);


// MISC
// The greeting function will be called one second after the website is loaded.
setTimeout(sayHello, 1000);