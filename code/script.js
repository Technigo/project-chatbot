// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const startButton = document.getElementById("start-btn");
const mainChat = document.getElementById("main-chat");
const textInput = document.getElementById("text-input");
const sendButton = document.getElementById("send-btn");
const inputForm = document.getElementById("input-form");
const inputWrapper = document.getElementById("input-wrapper");

// If you need any global variables that you can use across different functions, declare them here:

var userName = "";

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
  botRunning = true;
  showMessage("Hello there! My name is EdBot. What should I call you?", "bot");

  inputForm.addEventListener("submit", (e) => {
    e.preventDefault;
    showMessage(textInput.value, "user");
    userName = textInput.value;
    textInput.value = "";
    setTimeout(showButtons, 1000);
  });
};

const showButtons = () => {
  showMessage(`Hello ${userName}! How are you?`, "bot");
  inputWrapper.innerHTML = `
  <button id="goodBtn" type="submit">Good</button>
  <button id="badBtn" type="submit">Bad</button>
`;

  document.getElementById("goodBtn").addEventListener("click", () => {
    showMessage("I'm good, thank you!", "user");
    setTimeout(askForSomething("good"), 1000);
  });

  document.getElementById("badBtn").addEventListener("click", () => {
    showMessage("I'm bad, thank you!", "user");
    setTimeout(askForSomething("bad"), 1000);
  });
};

const askForSomething = (mood) => {
  console.log(mood);

  showMessage(
    `${mood == "good" ? "Great" : "Sorry"} to hear that, ${userName}!`,
    "bot"
  );

  inputWrapper.innerHTML = `<form id="input-form" onsubmit="return false;">
  <label for="text-input">Input</label>
  <input id="text-input" type="text" />
  <button id="send-btn" type="submit">Send</button>
</form>`;
};

// // Set up your eventlisteners here
// startButton.addEventListener("click", () => {
//   mainChat.classList.remove("hidden");
//   startButton.classList.add("hidden");
// });

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
