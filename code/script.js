// DOM selectors (variables that point to selected DOM elements) goes here 👇
document.addEventListener("DOMContentLoaded", () => {

  // The form element
  const form = document.getElementById("name-form");
  // The input where the name is typed
  const nameInput = document.getElementById("name-input");
  // The chat container where messages are shown
  const chat = document.getElementById("chat");
  let inputWrapper = document.getElementById("inputWrapper");

  // Functions goes here 👇
  const handleNameInput = (event) => {
    event.preventDefault();
    // Store the value in a variable so we can access it after we
    // clear it from the input
    const name = nameInput.value;
    showMessage(name, "user");
    nameInput.value = "";

    // After 1 second, show the next question by invoking the next function.
    // passing the name into it to have access to the user's name if we want
    // to use it in the next question from the bot.
    setTimeout(() => showFoodOptions(name), 1000);
  };

  const showFoodOptions = (name) => {
    if ((name === "Pizza") || (name === "pizza")) {
      showMessage("You've ordered a Daily Surprise Pizza! It'll be ready for pick up in 15 minutes, pay upon arrival.<br> Adult size = 150SEK Child size = 100SEK 😋", "bot");
    } else if ((name === "Pasta") || (name === "pasta")) {
      showMessage("You've ordered a Daily Surprise Pasta! It'll be ready for pick up in 15 minutes, pay upon arrival.<br> Adult size = 130SEK Child size = 80SEK 😋", "bot");
    } else if ((name === "Salad") || (name === "salad")) {
      showMessage("You've ordered a Daily Surprise Salad! It'll be ready for pick up in 15 minutes, pay upon arrival.<br>Adult size = 120SEK Child size = 70SEK 😋", "bot");
    } else {
      showMessage(`Hello ${name}, what type of food would you like today?\nPlease write your option:\nPizza, \nPasta\n or Salad 🍽️`, "bot");
    }
  }

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
      console.log(`Welcome to the chat`);

      chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
    }

    // This little thing makes the chat scroll to the last message when there are too many to
    // be shown in the chat box
    chat.scrollTop = chat.scrollHeight
  }

  // A function to start the conversation
  const greetUser = () => {
    // Here we call the function showMessage, that we declared earlier with the argument:
    showMessage("Hello there, welcome to Elina's Pizzeria! What's your name?", "bot")
  }

  // Eventlisteners goes here 
  form.addEventListener("submit", handleNameInput);

  // Here we invoke the first function to get the chatbot to ask the first question when
  // the website is loaded. Normally we invoke functions like this: greeting()
  // To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
  // and pass along two arguments:
  // 1.) the function we want to delay, and 2.) the delay in milliseconds 
  // This means the greeting function will be called one second after the website is loaded.
  setTimeout(greetUser, 1000)
});