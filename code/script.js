// All the DOM selectors stored as short variables
const chat = document.getElementById("chat");
const userInput = document.getElementById("userInput");

// Global variables, if you need any, declared here
const inputHTMLName = `
  <input class="input__text" id="inputText" type="text" />
  <button class="input__button" type="submit">Send</button>
`;
const inputHTMLBtnGroup = `
  <button class="input__button" type="submit">Yes</button>
  <button class="input__button" type="submit">No</button>
`;

// Functions declared here
const changeInput = (type) => {
  switch (type) {
    case "name":
      userInput.innerHTML = inputHTMLName;
      break;

    default:
      userInput.innerHTML = ``;
      break;
  }
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === "user") {
    console.log("user sent a message");
    chat.innerHTML += `
    <section class="message__user">
      <div class="bubble bubble__user">
        <p class="message__text">${message}</p>
      </div>
      <img src="assets/user.png" alt="User" />  
    </section>
    `;
  } else if (sender === "bot") {
    console.log("bot sent a message");
    chat.innerHTML += `
      <section class="message__bot">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bubble__bot">
          <p class="message__text">${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
const greeting = () => {
  showMessage(`Hello adventurer! Welcome to the dungeon…`, "bot");
  setTimeout(() => {
    showMessage("Prey tell, what is your name?", "bot");
    changeInput("name");
  }, 1500);
};

// Set up your eventlisteners here
userInput.addEventListener("submit", (event) => {
  event.preventDefault();

  // This clears the user input wrapper from any actions
  changeInput();

  console.log(event);
});

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 800);
