// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const iceCream = document.getElementById("ice-cream");
const softIceCream = document.getElementById("soft-ice-cream");
const form = document.getElementById("form");

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
    console.log("bot");
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
  showMessage("Welcome to The Ice Cream Shop! Let me take your order.", "bot");
  showMessage("Would you like:", "bot");
  // Just to check it out, change 'bot' to 'user' here 👆
};

/*
form.onsubmit = (event) => {
  event.preventDefault();
  if (softIceCream.clicked == true) {
    showMessage("Soft Ice Cream", "user");
    console.log("Soft!");
  } else if (iceCream.clicked == true) {
    showMessage("Ice Cream", "user");
    console.log("Ice!");
  }
};
*/

// Set up your eventlisteners here
softIceCream.addEventListener('click', (event) => {
  event.preventDefault();
  showMessage("Soft Ice Cream", "user");
});

iceCream.addEventListener('click', (event) => {
  event.preventDefault();
  showMessage("Ice Cream", "user");
});

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
