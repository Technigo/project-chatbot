// DOM selectors (variables that point to selected DOM elements) goes here 👇

const chat = document.getElementById("chat");
const helpButton = document.getElementById("helpButton");
const nameForm = document.getElementById("name-form")

// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
   // The if statement checks if the sender is the user and if that's the case it inserts
   // an HTML section inside the chat with the posted message from the user
   if (sender === "user") {
      console.log(`The sender is:`, sender);
      chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
      // The else if statement checks if the sender is the bot and if that's the case it inserts
      // an HTML section inside the chat with the posted message from the bot
   } else if (sender === "bot") {
      console.log(`The sender is: ${sender}`);
      chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
   }

   // This little thing makes the chat scroll to the last message when there are too many to
   // be shown in the chat box
   chat.scrollTop = chat.scrollHeight;
};

// A function to start the conversation

const greetUser = () => {
   // Here we call the function showMessage, that we declared earlier with the argument:
   // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("Welcome to PlantBot. My name is Palm! What's your name?", "bot");
  helpButton.remove()
  getUserName()
};

const getUserName = () => {
  nameForm.innerHTML = `<input id="name-input" type="text"/>
  <button class="send-btn" id="sendButton" type="button">Send
  </button>`
  const sendButton = document.getElementById("sendButton")
  const nameInput = document.getElementById("name-input")
  sendButton.addEventListener("click", () => returnUserName(nameInput))
}

const returnUserName = (userName) => {
  console.log(userName.value)
showMessage(`My name is ${userName.value}`, "user")
}



// Eventlisteners goes here 👇
helpButton.addEventListener("click", greetUser);






// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.
//setTimeout(greetUser, 1000);
