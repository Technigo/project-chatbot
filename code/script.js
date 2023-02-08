// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const nameInput = document.querySelector("#name-input");
const nameForm = document.querySelector("#name-form");
const inputWrapper = document.querySelector("#input-wrapper");

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
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello and welcome, What's your name?", "bot");
  showMessage("Don't be shy!", "bot");

  // Just to check it out, change 'bot' to 'user' here 👆
};

const handleInput = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let userName = nameInput.value;
  showMessage(`${userName}`, "user");
  showMessage(`Hey ${userName}`, "bot");
  console.log("Handle input name given");
  nameInput.value = ""; //erases the answer field
  showMessage(`...`, "bot");
  setTimeout(() => question1(userName), 1000);
};

const question1 = (userName) => {
  showMessage(`So ${userName}! How are you today?`, "bot");
  nameForm.removeEventListener("submit", handleInput);
  nameForm.addEventListener("submit", handleInput2);
  // console.log("user mood asking from bot"); //can be omitted
  // nameForm.removeEventListener("submit", handleInput);
  // nameForm.addEventListener("submit", handleInput2);
  // setTimeout(() => question2(userName), 1000);
};

const handleInput2 = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let moodAnswer = nameInput.value;
  showMessage(`${moodAnswer}`, "user"); //calling on function
  console.log("User answering his mood"); //can be omitted
  nameInput.value = ""; //erases the answer field
  if (moodAnswer == "good" || "I feel great" || "great") {
    showMessage(`That's great to hear`, "bot");
    showMessage(
      `So I'm assuming you're here to make your day even better. What would you like to order?`,
      "bot"
    );
    inputWrapper.innerHTML = `
      <button id="motivationBtn">Matcha!</button>
      <button id="encouragementBtn">Taro!</button>
      <button id="encouragementBtn">Thai tea!</button>
      `;
  } else if (moodAnswer == "not good" || "not so good") {
    showMessage(
      `Sorry to hear that but I think we might just have the right thing to cheer you up!`,
      "bot"
    );
    inputWrapper.innerHTML = `
      <button id="motivationBtn">Motivation of course!</button>
      <button id="encouragementBtn">Definately encourgement!</button>
      `;
  }
  // setTimeout(() => question2(), 500);
};

// Set up your eventlisteners here
nameForm.addEventListener("submit", handleInput);
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
