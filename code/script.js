// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const nameForm = document.getElementById("name-form")

const nameInput = document.getElementById("name-input");
const sendButton = document.getElementById("send-btn");

// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  console.log(`MESSAGE: ${message}`, `SENDER: ${sender}`);
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === "user") {
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
  showMessage("Hello, Happy Fat Tuesday! What's your name?", "bot");
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
};

// a function to get the users name and showing the name written by the user in the chat.
const handleNameInput = () => {
  const name = nameInput.value;
  showMessage(name, "user");
  nameInput.value = "";

  setTimeout(() => {
    showMessage(
      `Hello ${name}, what kind of semla would you like to order?`,
      "bot"
    );
  }, 1000);


  setTimeout(whatkindofSemla, 1000)
  
};

// Eventlisteners goes here 👇

// When clicking on the "send button" preventing the website to reload and calling the "handleNameInput function"
sendButton.addEventListener("click", (event) => {
  // preventa att sidan laddas om
  event.preventDefault();
  handleNameInput();
});

// Second question: What kind of semla would you like?
const whatkindofSemla = () => {
  // Hide input field using display none
  nameInput.style.display = "none";
  sendButton.style.display = "none";
  nameForm.style.display = "none";
  // SKapa knappar till fråga nummer 2
  // Hämta form id
  // skapa tre radio buttons
  // <label for=""></label>
  // <input type="radio" name="" id="">
  nameForm.innerHTML += `
  
  <input type="radio" name="semla_choice" id="regular" value="regular"/><label>Regular</label>
  <input type="radio" name="semla_choice" id="gluten" value="gluten"/><label>Gluten</label>
  <input type="radio" name="semla_choice" id="lactose" value="lactose"/><label>Lactose</label>

  `

};

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
