// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const inputForm = document.getElementById("input-form");
const sendButton = document.querySelector("send-btn");
const nameInput = document.getElementById("name-input");

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

//Functions for bot response and user response
const botResponse = (msg) => {
  showMessage(msg, "bot");
}

const userResponse = (msg) => {
  showMessage(msg, "user");
}

//------------QUESTION 1-------------
// Greeting function from the bot
const greetUser = () => {
  // call the function for bot response the argument "Hello there! What's your name?" 
  botResponse("Hello there! What's your name?");
}

// When website loaded, chatbot asks first question. Greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);

// Add event listener to input form to handle name input
inputForm.addEventListener("submit", (event) => {
  // Prevents the form from actually submitting and refreshing the page
  event.preventDefault();
  
  // Get user input
  const userName = nameInput.value.trim();

  // Display the user's name
  userResponse(`Hello! I am ${userName}.`);

  // Clear the input after the user has sent the message
  nameInput.value = "";

  // Determine if the user put in a valid answer or not and create respective replies for bot
  if (userName === "") {
    setTimeout(botResponse("Sorry, looks like we missed your name there. Please try again."), 1000);
    userName = nameInput.value;
  } else if (userName.toLowerCase().includes("hello")) {
    setTimeout(botResponse("Hello again! Could I have your name please?"), 1000);
    userName = nameInput.value;
  } else if (userName.toLowerCase().includes("how are you")) {
    setTimeout(botResponse("Thanks for asking. I'm good. But could I have your name please?"), 1000);
    userName = nameInput.value;
  } else {
    setTimeout(botResponse(`Nice to meet you ${userName}!`), 1000);
  }

  // Clear the input again after the user has sent the message
  nameInput.value = "";
  
  // After one second, show the next question about flavours by invoking the next function, passing the user's name into it so it appears in the next question from the bot
  setTimeout(() => questionAboutFlavour(userName), 1000);
})

//------------QUESTION 2-------------
// Bot shows flavour options upon receiving user's name
const questionAboutFlavour = (userName) => {
  botResponse(`Time to treat yourself some icecream, ${userName}. Which flavour would you like to test today?`);

  // Remove the input field and send button
  inputForm.remove();  
  
  // Display buttons for flavours
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

  // Function to add event listener to click on buttons so user's choice is displayed and bot shows confirmation message
  const flavourConfirmation = (button) => {
    button.addEventListener("click", () => {
      userResponse(`I would love to have ${button.value}!`);
      setTimeout(botResponse(`${button.value} is a really great choice!`), 1000);
      moveToScoopQuestion();
    });
  }

  // Invoke the functions with buttons
  flavourConfirmation(chocolateButton);
  flavourConfirmation(strawberryButton);
  flavourConfirmation(vanillaButton);
}

//------------QUESTION 3-------------
// Bot shows options for the number of scoops upon receiving user's choice of flavour
const questionAboutNumberOfScoops = () => {
  botResponse("How many scoops would you like to have?");

  // Create drop-down list with options
  inputWrapper.innerHTML += `
    <select name="scoops" id="scoops">
      <option value="select-one" selected disabled>Select one option...</option>
      <option value="One">One</option>
      <option value="Two">Two</option>
      <option value="Three">Three</option>
    </select>
    `;
  
  // Store user's choice in a variable
  const scoops = document.getElementById("scoops");

  // Add event listener to change of the option in the drop-down list so user's choice is displayed and bot shows confirmation message
  scoops.addEventListener("change", () => {
    userResponse(`${scoops.value} scoop(s) please!`);
    setTimeout(botResponse(`${scoops.value} scoop(s), got it!`), 1000);
    
    // Clear the dropdown list and move to next question
    scoops.remove();
    setTimeout(() => questionAboutToppings(), 1000);
  });
}

//------------QUESTION 4-------------
// Bot shows options for toppings upon receiving user's answer about number of scoops
const questionAboutToppings = () => {
  botResponse("What about toppings? Would you like to add some?");

  // Create buttons for toppings
  inputWrapper.innerHTML += `
    <button id="sprinkles" value="Sprinkles">Sprinkles</button>
    <button id="sauce" value="Chocolate sauce">Chocolate sauce</button>
    <button id="fruit" value="Fresh fruit">Fresh fruit</button>
    `;
  
  // Store the buttons in variables
  const sprinklesButton = document.getElementById("sprinkles");
  const sauceButton = document.getElementById("sauce");
  const fruitButton = document.getElementById("fruit");

  // Function to clear the buttons and move to the next question
  const moveToLastQuestion = () => {
    sprinklesButton.remove();
    sauceButton.remove();
    fruitButton.remove();
    setTimeout(() => questionAboutConfirmation(), 1000);
  };

  // Function to add event listener to click on buttons so user's choice is displayed and bot shows confirmation message
  const toppingConfirmation = (button) => {
    button.addEventListener("click", () => {
      userResponse(`${button.value} please. That's my favourite!`);
      setTimeout(botResponse(`${button.value} it is!`, "bot"), 1000);
      moveToLastQuestion();
    });
  }

  // Invoke the functions with buttons
  toppingConfirmation(sprinklesButton);
  toppingConfirmation(sauceButton);
  toppingConfirmation(fruitButton);
}

//------------QUESTION 5-------------
// Bot asks for final confirmation of the whole order
const questionAboutConfirmation = () => {
  botResponse("Great! Would you like to confirm your order?");

  // Create buttons for toppings
  inputWrapper.innerHTML += `
    <button id="yes" value="Yes">Yes</button>
    <button id="no" value="No">No</button>
    `;
  
  // Store the buttons in variables
  const yesButton = document.getElementById("yes");
  const noButton = document.getElementById("no");
  
  // Reload the page after an amout of timeout
  const reloadSite = (timeoutPeriod) => {
    setTimeout("location.reload(true);", timeoutPeriod);
  }

  // Add event listener to the buttons so user's choice is displayed and bot shows confirmation message
  yesButton.addEventListener("click", () => {
    userResponse(`${yesButton.value} please! Can\'t wait!`);
    setTimeout(botResponse("Thank you. Your ice cream is being prepared. Have a great day!"), 1000);
    yesButton.remove();
    noButton.remove();
    reloadSite(3000);
  });

  noButton.addEventListener("click", () => {
    userResponse(`${noButton.value}, sorry. I changed my mind.`);
    setTimeout(botResponse("No problem. Go back and order any time!"), 1000);
    yesButton.remove();
    noButton.remove();
    reloadSite(3000);
  })
}

