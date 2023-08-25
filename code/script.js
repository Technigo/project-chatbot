// Start here
// const { name } = require("ejs");
// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const btn = document.querySelector("button");
const nameInput = document.getElementById("name-input");
const form = document.getElementById("name-form");
// console.log(form[1]);

// Step 1 and Step 2
// When website loaded, chatbot asks first question.
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (msg, sender) => {
  console.log("MESSAGE IS:", msg);
  console.log("SENDER IS:", sender);
  if (sender === "bot") {
    chat.innerHTML += `<section class="bot-msg">
    <img src="assets/bot.png" alt="chat bot"/>
    <div class="bubble bot-bubble">
      <p>${msg}</p>
    </div>
    </section>
    `;
  } else if (sender === "user") {
    chat.innerHTML += `<section class="user-msg">
  <div class="bubble user-bubble">
    <p>${msg}</p>
  </div>
  <img src="assets/user.png" alt="user bot"/>
  </section>`;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};
const greetUser = () => {
  // console.log(`Welcome Stranger!`);
  showMessage(`Hello there, What's your name?`, `bot`);
  // show message.the message should be from the bot
};
setTimeout(greetUser, 1000);
// greetUser()

// Step 3
//Add EventListener, when user click the button, then show user's message
btn.addEventListener("click", function (event) {
  event.preventDefault();
  const userName = nameInput.value;
  showMessage(`${userName}`, `user`);
  nameInput.value = "";
  // Show the next message
  const showFoodOption = () => {
    showMessage(
      `Nice to meet you ${userName}! 😁 What type of food would you like to order?`,
      `bot`
    );
  };
  setTimeout(showFoodOption, 1000);
  const createFoodButton = () => {
    form.innerHTML = `
    <button id="pizza" type="submit">Pizza</button>
    <button id="pasta" type="submit">Pasta</button>
    <button id="salad" type="submit">Salad</button>
    `;
  };
  setTimeout(createFoodButton, 1000);
});

// Step 4
// Add FoodOption Button

// // If you need any global variables that you can use across different functions, declare them here:

//   // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
//   chat.scrollTop = chat.scrollHeight
// }

// // But if we want to add a little delay to it, we can wrap it in a setTimeout:
// // setTimeout(functionName, timeToWaitInMilliSeconds)
