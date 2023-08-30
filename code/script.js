// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const inputForm = document.getElementById("input-form");
const sendButton = document.querySelector("send-btn");
const nameInput = document.getElementById("name-input");

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
  // Make the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

//------------QUESTION 1-------------
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
  const userName = nameInput.value;

  // Display the user's name
  showMessage(`${userName}`, "user");

  // Clear input field after a message has been sent
  nameInput.value = "";
  
  // After one second, show the next question about flavours by invoking the next function, passing the user's name into it so it appears in the next question from the bot
  setTimeout(() => questionAboutFlavour(userName), 1000);
})

//------------QUESTION 2-------------
// Bot shows flavour options upon receiving user's name
const questionAboutFlavour = (userName) => {
  showMessage(`Time to treat you some icecream, ${userName}. Which flavour would you like to test today?`, "bot");

  // Remove the input field and send button
  inputForm.remove();  
  
  // Change from input field to buttons
  inputWrapper.innerHTML += `
    <button id="chocolate" value="Chocolate flavour">Chocolate</button>
    <button id="strawberry" value="Strawberry flavour">Strawberry</button>
    <button id="vanilla" value="Vanilla flavour">Vanilla</button>
    `;
  
  // Store the buttons in variables
  const chocolateButton = document.getElementById("chocolate");
  const strawberryButton = document.getElementById("strawberry");
  const vanillaButton = document.getElementById("vanilla");

  // Function to clear the buttons and move to the next question
  const moveToScoopQuestion = () => {
    chocolateButton.remove();
    strawberryButton.remove();
    vanillaButton.remove();
    setTimeout(() => questionAboutNumberOfScoops(), 1000);
  };

  // Add event listener to click on buttons so bot shows confirmation message
  chocolateButton.addEventListener("click", () => {
    showMessage(`${chocolateButton.value} is a great choice!`, "bot");
    moveToScoopQuestion();
  });

  strawberryButton.addEventListener("click", () => {
    showMessage(`${strawberryButton.value} is a great choice!`, "bot");
    moveToScoopQuestion();
  });

  vanillaButton.addEventListener("click", () => {
    showMessage(`${vanillaButton.value} is a great choice!`, "bot");
    moveToScoopQuestion();
  });
}

//------------QUESTION 3-------------
// Bot shows options for the number of scoops upon receiving user's choice of flavour
const questionAboutNumberOfScoops = () => {
  showMessage(`How many scoops would you like to have?`, "bot");

  // Change from buttons to drop-down list
  inputWrapper.innerHTML += `
    <select name="scoops" id="scoops">
      <option value="select-one" selected disabled>Select one option...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    `;
  
  // Store user's choice in a variable
  // const selectedNumberOfScoops = document.getElementsByTagName("option");
  // const scoops = document.getElementById("scoops");

  // // Add event listener to change of the option in the drop-down list
  // for (i = 0; i < selectedNumberOfScoops.length; i++) {
  //   scoops.addEventListener("change", () => {
  //     showMessage(`${selectedNumberOfScoops[i].value} scoop(s), got it!`);
  //   });
  // }
}