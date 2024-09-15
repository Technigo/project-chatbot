document.addEventListener('DOMContentLoaded', () => {
  // DOM selectors
  const chat = document.getElementById('chat');
  const nameInput = document.getElementById('name-input'); // The input field for the name
  const sendButton = document.getElementById('send-btn'); // The send button
  let userName = "";
  let isAskingForDrink = false; // To track whether we're asking for a drink
  let isAskingForFood = false; // To track whether we're asking for food
  let isChoosingDish = false; // To track whether we're asking for a specific dish

  // Declare global variables to store the chosen drink and food
  let drink = ""; // Global variable to store drink choice
  let food = "";  // Global variable to store food choice

  // A function to display a message
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

    // Auto scroll to the latest message
    chat.scrollTop = chat.scrollHeight;
  };

  // Greet the user
  const greetUser = () => {
    showMessage("Welcome to Jonas Cafe! What's your name?", 'bot');
  };

  // Handle the name input
  const handleNameInput = (input) => {
    // Check if input is not empty
    if (input) {
      userName = input; // Save the user's name
      showMessage(userName, 'user'); // Show the user's message
      nameInput.value = ""; // Clear the input field

      // Bot responds after 1 second
      setTimeout(() => {
        showMessage(`Hi, ${userName}! What would you like to order today?<br><br>1. Black Coffee <br>2. Latte <br>3. Tea <br>4. Soft Drink`, 'bot');
        isAskingForDrink = true; // Now we are asking for a drink choice
      }, 1000);
    }
  };

  // Handle drink choice
  const handleDrinkChoice = (choice) => {
    if (choice === "1") {
      drink = "Black Coffee";
    } else if (choice === "2") {
      drink = "Latte";
    } else if (choice === "3") {
      drink = "Tea";
    } else if (choice === "4") {
      drink = "Soft Drink";
    } else {
      // Handle invalid input but keep waiting for a valid choice
      showMessage("Sorry, I didn't understand that. Please choose 1, 2, 3, or 4.", 'bot');
      return; // Keep asking for a valid drink choice
    }

    // If the user chose a valid option, show the drink message and ask if they want food
    showMessage(`You chose ${drink}.<br><br>Would you like to order some food as well, ${userName}?<br><br>1. Yes <br>2. No`, 'bot');

    // Now waiting for food choice
    isAskingForDrink = false; // Reset drink flag
    isAskingForFood = true; // Now we're asking for food
  };

  // Handle food choice
  const handleFoodChoice = (foodchoice) => {
    if (foodchoice === "1") {
      showMessage("Great! What would you like to eat?<br><br>1. Tacos <br>2. Cesar Salad <br>3. Tuna Sandwich <br>4. Pasta Carbonara", 'bot');

      isAskingForFood = false; // Stop asking for Yes/No
      isChoosingDish = true; // Now waiting for dish choice
      return;
    } else if (foodchoice === "2") {
      showMessage("No problem, enjoy your drink!😍", 'bot');
      isAskingForFood = false; // Stop asking for food
      return; // Exit if user doesn't want to eat
    } else {
      showMessage("Sorry, I didn't understand that. Please choose 1 or 2.", 'bot');
      return; // Exit and wait for a valid choice
    }
  };

  // Handle specific dish choice
  const handleDishChoice = (dishChoice) => {
    if (dishChoice === "1") {
      food = "Tacos";
    }
    // User chooses Cesar Salad
    else if (dishChoice === "2") {
      food = "Cesar Salad";
    }
    // User chooses Tuna Sandwich
    else if (dishChoice === "3") {
      food = "Tuna Sandwich";
    }
    // User chooses Pasta Carbonara
    else if (dishChoice === "4") {
      food = "Pasta Carbonara";
    }
    // Handle invalid choice
    else {
      showMessage("Sorry, I didn't understand that. Please choose 1, 2, 3, or 4.", 'bot');
      return; // Wait for a valid dish choice
    }

    // Show summary of the user's order
    showMessage(`You have chosen:<br> ${food} and ${drink}! What a fantastic combo😂!<br><br> Your order will be deliverd in 15 min, enjoy🥳`, 'bot');
    isChoosingDish = false; // Stop asking for dishes after valid choice
  };

  // Example of how you might handle user input based on the phase of the conversation
  const handleUserInput = (event) => {
    event.preventDefault();
    const input = nameInput.value; // Get input from user
    nameInput.value = ""; // Clear input field

    if (!isAskingForDrink && !isAskingForFood && !isChoosingDish) {
      // Handle name input
      handleNameInput(input);
    } else if (isAskingForDrink) {
      // Handle drink choice input
      handleDrinkChoice(input);
    } else if (isAskingForFood) {
      // Handle yes/no food choice input
      handleFoodChoice(input);
    } else if (isChoosingDish) {
      // Handle specific dish choice input
      handleDishChoice(input);
    }
  };

  // Attach event listener to the send button
  sendButton.addEventListener('click', handleUserInput);

  // Start the conversation after 1 second
  setTimeout(greetUser, 1000); // Start with greeting
});
