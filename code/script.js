// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const userInput = document.getElementById("name-input");
const form = document.getElementById("name-form");

// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
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
  showMessage("Hey you, what's your name?", "bot");
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
};

function showFoodOptions() {
  showMessage("What would you like to eat? Pizza, Burger, or Salad?", "bot");
}

function handleFoodChoice(choice) {
  showMessage(
    `Great choice! ${choice} it is. What would you like to drink?`,
    "bot"
  );
}

function handleDrinkChoice(choice) {
  showMessage(`Excellent! I'll get you a ${choice} right away.`, "bot");
  // You could end the conversation here or continue with more questions
}

let numberOfFormSubmits = 0; // first the

// Function to handle the form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  showMessage(userInput.value, "user"); // set message to input message // Clear the input field after submission

  numberOfFormSubmits++; //counts how many times this function is used to prompt next message
  console.log(numberOfFormSubmits);

  switch (numberOfFormSubmits) {
    case 1:
      showMessage(`Nice to meet you, ${userInput.value}`, "bot");
      userInput.value = "";
      setTimeout(() => showFoodOptions(), 1000);
      break;
    case 2:
      showMessage(`${userInput.value} is a great choice!`);
      break;
    default:
      console.log("hej default switch");
  }
}

// Eventlisteners goes here 👇
form.addEventListener("submit", (event) => handleSubmit(event, "greetUser"));

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
