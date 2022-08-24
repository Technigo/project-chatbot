// Variables that point to selected DOM elements
const chat = document.querySelector("#chat");
const inputWrapper = document.querySelector("#input-wrapper");
const nameInput = document.querySelector("#name-input");
const nameForm = document.querySelector("#name-form");
// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    console.log("user som skriver");
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
    console.log("bot som skriver");

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
  showMessage("Hello and welcome to the Coffee by D&P! What's your name?", "bot");
  console.log("bot som skriver"); //can be omitted
};

const handleInput = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let answerName = nameInput.value;
  showMessage(`Hi! I am ${answerName}.`, "user"); //calling on function
  nameInput.value = ""; //erases the answer field
  setTimeout(() => question1(answerName), 1000);
};

const question1 = (answerName) => {
  showMessage(`Hello ${answerName}! What kind of coffee would you like to order?`, "bot");
  console.log("bot som skriver"); //can be omitted
};

const handleInput2 = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let answerName2 = coffeeInput.value;
  showMessage(`Hi! I am ${answerName2}.`, "user"); //calling on function
  coffeeInput.value = ""; //erases the answer field
  setTimeout(() => question2(answerName2), 1000);
};

const question2 = (answerName2) => {
  showMessage(`I would love to have some ${answerName2}!`, "user");
  console.log("bot som skriver"); //can be omitted
};


// Set up your eventlisteners here
nameForm.addEventListener("submit", handleInput);
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greeting, 1500);
