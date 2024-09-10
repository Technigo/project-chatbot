// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const nameInput = document.getElementById("name-input");
const form = document.getElementById("name-form");
const submit = document.getElementById("send");
//const main = document.getElementById("main");
const inputWrapper = document.getElementById("input-wrapper");

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
        <img src="assets/user1.png" alt="User" />  
      </section>
    `;
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === "bot") {
    // add a console.log here to see when it's being logged and not

    console.log("Bot message is being shown:", message); // This will log when the bot sends a message
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot1.png" alt="Bot" />
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
const greeting = () => {
  showMessage(`Welcome to the Holliday bot, what's your name?`, "bot");
  // Just to check it out, change 'bot' to 'user' here 👆

  //---- First intention ----//
};
const handleNameInput = (event) => {
  // at submit this function will be invoked
  event.preventDefault(); // prevents website refresh at submit

  const name = nameInput.value; // input value will be stored in the const name
  console.log(name);

  showMessage(`${name}`, "user"); // users answer
  nameInput.value = ""; // clearing name input setting it to an empty string

  setTimeout(() => complimentOptions(name), 1000); // passing the arguments to complimentOptions function with 1s delay
};

//---- Second intention ----//
const complimentOptions = (name) => {
  showMessage(
    `Nice to meet you ${name}! What's your mood for the next trip? `,
    "bot"
  ); //sends second message from bot

  inputWrapper.innerHTML =
    // add Yes No button
    `<button id="yesBtn" type="submit">Yes</button>
  <button id="noBtn" type="submit">No</button>`;

  document.getElementById("yesBtn").addEventListener("click", () => {
    showMessage("I would love to get a compliment", "user");
  });

  document.getElementById("noBtn").addEventListener("click", () => {
    showMessage("No thank you, goodbye", "user");
  });
};

//---interaction 3------//

// Set up your eventlisteners here

form.addEventListener("submit", handleNameInput);

// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
