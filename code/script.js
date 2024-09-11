
// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const form = document.getElementById('name-form');

// Functions goes here 👇
// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts an HTML section inside the chat with the posted message from the user
  if (sender === 'user') {
    console.log("message from user")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // The else if statement checks if the sender is the bot and if that's the case it inserts an HTML section inside the chat with the posted message from the bot
  } else if (sender === 'bot') {
    console.log("message from bot")
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

// A function to start the conversation
const greetUser = () => {
  showMessage("Hello there, what's your name?", 'bot')

}

const handleNameInput = (event) => {
  //this default does something
  event.preventDefault();
  //This stores the name for the session 
  sessionStorage.setItem('username', name);
  //This connects with the html and collects the input value for name in form
  const name = nameInput.value;
  //This shows the message in the chatbubble 
  showMessage(name, "user");
  //This clears the input field... somehow?
  nameInput.value = "";

  // After 1 second, show the next question by invoking the next function.
  // passing the name into it to have access to the user's name if we want
  // to use it in the next question from the bot.
  setTimeout(() => showMovieGenreOptions(name), 1000);
};

//this stores the username 
const storedName = sessionStorage.getItem('username');

if (storedName) {
  showMessage(storedName, 'user');
  setTimeout(() => showMovieGenreOptions(storedName), 1000);
  // Continue with the flow using the storedName
}

//eventlistener to ensure the answer is submitted when button is clicked
if (form) {
  form.addEventListener('submit', handleNameInput);
} else {
  console.error('Form element not found');
}
// Here we invoke the first function to get the chatbot to ask the first question when the website is loaded. Normally we invoke functions like this:

setTimeout(greetUser, 1000)

const greetBot = () => {

}

