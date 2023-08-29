// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const inputForm = document.getElementById("input-form");
const button = document.getElementsByTagName("button");

// If you need any global variables that you can use across different functions, declare them here:


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
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // Make the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Greeting function from the bot
const greetUser = () => {
  // call the function showMessage with the argument "Hello there! What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there! What's your name?", "bot");
}

// When website loaded, chatbot asks first question. Greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);

// Add event listener to input form to handle name input
inputForm.addEventListener("submit", (event) => {
  // Prevent form submission
  event.preventDefault();
  
  // Get user input
  const nameInput = document.getElementById("name-input");
  const userName = nameInput.value;

  // Display the user's name
  showMessage(`${userName}`, "user");

  // Clear input field
  nameInput.value = "";
  
  // After one second, show the next question by invoking the next function, passing the name into it to have access to the user's name so it appears in the next question from the bot
  setTimeout(() => questionAboutFlavour(userName), 1000);
})

// Bot shows general options upon receiving user's name
const questionAboutFlavour = (userName) => {
  showMessage(`Time to treat you some icecream, ${userName}. Which flavour would you like to test today?`, "bot");
  inputWrapper.innerHTML += `
    <div class="flavours">
      <button id="chocolate">Chocolate</button>
      <button id="strawberry">Strawberry</button>
      <button id="vanilla">Vanilla</button>
    </div>`;

  // Display only buttons for flavours, no input field
  const flavours = document.querySelector("flavours");
  inputForm.style.display = "none"; //why not working???
  flavours.style.width = "100%";
  flavours.style.display = "flex";
  //flavours.style.justify-content = "center";

}


