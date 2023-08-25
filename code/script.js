// Start here
// Variables that point to selected DOM elements
const chat = document.getElementById("chat");

//  When website loaded, chatbot asks first question.
const greetUser = () => {
  // console.log(`Welcome Stranger!`);
  showMessage("Hello there, What's your name?", "bot");
  // show message.the message should be from the bot
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (msg, sender) => {
  // console.log("MESSAGE IS:", msg);
  // console.log("SENDER IS:", sender);
  if (sender === "user") {
    chat.innerHTML += `<section class="user-msg">
  <div class="bubble user-bubble">
    <p>${msg}</p>
  </div>
  <img src="assets/user.png" alt="user bot"/>
  </section>`;
  } else if (sender === "bot") {
    chat.innerHTML += `<section class="bot-msg">
    <img src="assets/bot.png" alt="chat bot"/>
    <div class="bubble bot-bubble">
      <p>${msg}</p>
    </div>
    </section>
    `;
  }
};

setTimeout(greetUser, 1000);
// greetUser()

// Step 1

// a function that takes care of displaying the message
// // If you need any global variables that you can use across different functions, declare them here:

// // Declare your functions after this comment

//   // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
//   chat.scrollTop = chat.scrollHeight
// }

//   // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
//   showMessage("Hello there, What's your name?", 'bot')
//   // Just to check it out, change 'bot' to 'user' here 👆
// }

// // Set up your eventlisteners here

// normally we would invoke a function like this:

// // But if we want to add a little delay to it, we can wrap it in a setTimeout:
// // setTimeout(functionName, timeToWaitInMilliSeconds)
// // This means the greeting function will be called one second after the website is loaded.
