// DOM selectors 
const chat = document.getElementById("chat");
const nameInput = document.getElementById("name-input"); // Input field for name 
const sendButton = document.getElementById("send-btn"); // This is the send button
let userName = "";
let askingForTreat = false; // To keep track if we are asking user for treat
let askingForBeverage = false; // To keep track if we are asking user for beverage
let userChoosingBeverage = false; // To keep track of the beverage choice

// Declare global variables - to store the treat and beverage 
let treat = ""; // This is the global variable to store choice of treat 
let beverage = ""; // This is the global variable to store choice of beverage

// This is the function to display messages
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  // Scroll to the latest message
  chat.scrollTop = chat.scrollHeight;
};

// A function to start the conversation - Greet user 
const greetUser = () => {
  showMessage("Hello there! Welcome to Sherry's Treat-bot! <br><br> What is your name?", 'bot');
};

// Process the user's name input
const processNameInput = (input) => {
  if (input) {
    userName = input; // Save the user's name
    showMessage(userName, "user"); // Show the user's message
    nameInput.value = ""; // Clear the input field

    // Ask the user what treat they want after greeting
    setTimeout(() => {
      showMessage(`Hi ${userName}! What would you like to order as your treat? <br><br>1. Victoria Sponge Cake <br><br>2. Apple Crumble with Sherry's homemade custard <br><br>3. Sticky Toffee Pudding <br><br>4. Eton's Mess`, "bot");
      askingForTreat = true; // Now the bot is asking for choice of treat
    }, 1000); // Delay of 1 second
  }
};

// Handle the choice of treat
const handleTreatChoice = (choice) => {
  if (choice === "1") {
    treat = "Victoria Sponge Cake";
  } else if (choice === "2") {
    treat = "Apple Crumble with Sherry's homemade Custard";
  } else if (choice === "3") {
    treat = "Sticky Toffee Pudding";
  } else if (choice === "4") {
    treat = "Eton's Mess";
  } else {
    showMessage("Sorry, I didn't understand your choice. Please choose 1, 2, 3, or 4.", 'bot');
    return;
  }

  // If the user chooses a valid option, ask for a beverage
  setTimeout(() => {
    showMessage(`You've chosen the delicious ${treat}. <br><br> ${userName}, would you like to order a hot beverage to go with your treat? <br><br>1. Yes <br>2. No`, 'bot');
    askingForTreat = false;
    askingForBeverage = true;
  }, 1000); // Delay of 1 second
};

// Handle choice of beverage 
const handleBeverageChoice = (beverageChoice) => {
  if (beverageChoice === "1") {
    showMessage("Great! What would you like to drink? <br><br>1. Earl Grey Tea <br>2. Latte <br>3. Hot Chocolate <br>4. Coffee", 'bot');
    askingForBeverage = false;
    userChoosingBeverage = true;
  } else if (beverageChoice === "2") {
    showMessage("No problem! <br><br>Your treat is being prepared and will be ready for you in 15 minutes. Enjoy!", 'bot');
    askingForBeverage = false;
  } else {
    showMessage("Sorry, I didn't understand that. Please choose 1 or 2.", 'bot');
  }
};

// Handle specific choice of beverage 
const handleSpecificBeverageChoice = (choice) => {
  if (choice === "1") {
    beverage = "Earl Grey Tea";
  } else if (choice === "2") {
    beverage = "Latte";
  } else if (choice === "3") {
    beverage = "Hot Chocolate";
  } else if (choice === "4") {
    beverage = "Coffee";
  } else {
    showMessage("Sorry, I didn't understand that. Please choose 1, 2, 3, or 4.", 'bot');
    return;
  }

  // Show summary of what the user has ordered
  showMessage(`You've chosen: ${treat} and ${beverage}! <br><br> Your order is being prepared and will be ready for you in 15 minutes.`, 'bot');
  userChoosingBeverage = false;
};

// What happens when the user inputs an answer or choice
const handleUserInput = (event) => {
  event.preventDefault();
  const input = nameInput.value; // Get input from the user
  nameInput.value = ""; // Clear the input field

  if (!askingForTreat && !askingForBeverage && !userChoosingBeverage) {
    processNameInput(input);
  } else if (askingForTreat) {
    handleTreatChoice(input);
  } else if (askingForBeverage) {
    handleBeverageChoice(input);
  } else if (userChoosingBeverage) {
    handleSpecificBeverageChoice(input);
  }
};

// Attached event listener to the send button
sendButton.addEventListener("click", handleUserInput);

// This means the greeting function will be called one second after the website is loaded
setTimeout(greetUser, 1000);
