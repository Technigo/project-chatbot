// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

// function for talk bubble
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the  case it inserts an html senction inside the chat with the posted message
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
    // checks if sender is bot or user. ("bot", "user")
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
  // scrolls chat to the latest input
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
const greetUser = () => {
  showMessage("Hello there, What's your name?", "bot");
};

// Set up your eventlisteners here

//the users respons and bot-respons
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
// Add code here to progress the app to the next question

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
//setTimeout(functionName, timeToWaitInMilliSeconds);
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500);
