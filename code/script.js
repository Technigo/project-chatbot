// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const input = document.getElementById("user-input");
const form = document.getElementById("workout-form");

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
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
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, I'm your personal trainer bot.", "bot");
};

const ageQuestion = () => {
  showMessage("Firstly, how old are you?", "bot");
};

const handleAgeInput = (event) => {
  event.preventDefault();
  // Store the value in a variable so we can access it after we
  // clear it from the input
  const age = input.value;
  showMessage(age, "user");
  input.value = "";
};

/* const ageReaction = (age) => {
  if (age >= 16) {
    console.log("age");
  } else {
    //do that
  }
}; */

// After 1 second, show the next question by invoking the next function.
// passing the name into it to have access to the user's name if we want
// to use it in the next question from the bot.

//setTimeout(() => showFoodOptions(name), 1000);

// Set up your eventlisteners here

form.addEventListener("submit", handleAgeInput);

// setTimeout(functionName, timeToWaitInMilliSeconds)
setTimeout(greeting, 1000);
setTimeout(ageQuestion, 2000);
