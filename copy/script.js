// Variables that point to selected DOM elements
const chat = document.getElementById("chat");

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message

  //if changing ${} in <p> will the word message be treated as a string and the content ${message} will not be desplayd

  if (sender === "user") {
    console.log(`The users message: ${message}`);
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
    console.log(`The bots message: ${message}`);
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
  showMessage("Hello there, What's your name?", "bot");
  // Just to check it out, change 'bot' to 'user' here 👆
};

// Set up your eventlisteners here

nameForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the user's name from the input field
  const userName = nameInput.value;
  // Display the user's name as their message
  showMessage(`My name is ${userName}`, "user");
  console.log(showMessage);
  nameInput.value = "";

  showMessage(
    `Nice to meet you ${userName}. Wich animal whould you like to learn more about?`,
    "bot"
  );
  console.log(`wich animal`, "bot");
  setTimeout(() => (userName, 1000));
  // Add code here to progress the app to the next question
});

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
//setTimeout(functionName, timeToWaitInMilliSeconds);
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500);

const handleUserResponse = (message) => {
  showMessage(message, "user");
  const userName = nameInput.value; // Defines userName
  setTimeout(() => {
    showMessage(
      `Nice to meet you ${userName}. Which of this animals would you like to learn more about? `,
      "bot"
    );
  }, 500);
}; //sets timeout for the bots answer
nameForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userName = nameInput.value;
  handleUserResponse(`My name is ${userName}`);
  nameInput.value = "";
});
