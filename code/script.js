// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const input = document.getElementById("name-input");
const form = document.getElementById("name-form");
// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === "user") {
    console.log("Message handled by user:", message);
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
    console.log("Message handled by bot:", message);
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
  showMessage("Hello there, what´s your name?", "bot");
};

// Eventlisteners goes here 👇
const handleNameInput = (event) => {
  event.preventDefault();
  // Store the value in a variable so we can access it after we
  // clear it from the input
  const name = input.value;
  showMessage(name, "user");
  input.value = "";
  showMessage(`Welcome ${name}`, "bot");
  //tar bort så att inte boten frågar igen om namn
  event.target.removeEventListener("submit", handleNameInput);
  setTimeout(askAge, 1000);
};
//att den frågar om namnet o går vidare till nästa
function askName() {
  form.addEventListener("submit", handleNameInput);
}
// event.target.removeEventListener("submit", handleNameInput);
// After 1 second, show the next question by invoking the next function.
// passing the name into it to have access to the user's name if we want
// to use it in the next question from the bot.
// const askNextQuestion = () => {
// };
const handleAgeInput = (event) => {
  event.preventDefault();
  const age = input.value;
  showMessage(`${age}`, "user");
  input.value = "";
  setTimeout(askGender, 1000);
};
function askAge() {
  showMessage(`how old are you?`, "bot");
  form.addEventListener("submit", handleAgeInput);
}

const handleGenderInput = (event) => {
  event.preventDefault();
  const gender = input.value;
  showMessage(`${gender}`, "user");
  input.value = "";
};
function askGender() {
  showMessage(`what's your gender?`, "bot");
  form.addEventListener("submit", handleGenderInput);
}

// Händelselyssnare för inmatningsformuläret för ålder

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.
setTimeout(2000);
setTimeout(greetUser, 600);

askName();
