// DOM selectors👇
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("name-form");
  const nameInput = document.getElementById("name-input");
  const chat = document.getElementById("chat");
  let inputWrapper = document.getElementById("inputWrapper");

  // Function to handle the name input
  const handleNameInput = (event) => {
    event.preventDefault();
    const name = nameInput.value;
    showMessage(name, "user");
    nameInput.value = "";
    setTimeout(() => askForFood(name), 1000); // Ask for food choice
  };

  // Function to ask for food options with buttons
  const askForFood = (name) => {
    showMessage(`Nice to meet you ${name}, what would you like to order today?`, "bot");

    inputWrapper.innerHTML = `
      <button id="pizzaBtn">Pizza</button>
      <button id="pastaBtn">Pasta</button>
      <button id="saladBtn">Salad</button>
    `;

    document.getElementById("pizzaBtn").addEventListener("click", () => handleFoodChoice("Pizza"));
    document.getElementById("pastaBtn").addEventListener("click", () => handleFoodChoice("Pasta"));
    document.getElementById("saladBtn").addEventListener("click", () => handleFoodChoice("Salad"));
  };

  // Function to handle the food choice and show specific options based on food type
  const handleFoodChoice = (food) => {
    showMessage(`You've selected ${food}. Please choose an option:`, "bot");

    let options = "";
    if (food === "Pizza") {
      options = `
        <select id="foodOptions">
          <option value="Margherita">Margherita</option>
          <option value="Pepperoni">Pepperoni</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>
      `;
    } else if (food === "Pasta") {
      options = `
        <select id="foodOptions">
          <option value="Carbonara">Carbonara</option>
          <option value="Bolognese">Bolognese</option>
          <option value="Alfredo">Alfredo</option>
        </select>
      `;
    } else if (food === "Salad") {
      options = `
        <select id="foodOptions">
          <option value="Caesar Salad">Caesar Salad</option>
          <option value="Greek Salad">Greek Salad</option>
          <option value="Goat Cheese Salad">Goat Cheese Salad</option>
        </select>
      `;
    }

    inputWrapper.innerHTML = `${options} <button id="selectOptionBtn">Select</button>`;

    document.getElementById("selectOptionBtn").addEventListener("click", () => {
      const selectedFoodOption = document.getElementById("foodOptions").value;
      showMessage(`You've chosen ${selectedFoodOption}.`, "user");
      setTimeout(() => askForSize(selectedFoodOption, food), 1000); // Pass food type and option to ask for size
    });
  };

  // Function to ask for the size of the selected food
  const askForSize = (selectedFoodOption, foodType) => {
    showMessage(`What size would you like for your ${selectedFoodOption}?`, "bot");

    inputWrapper.innerHTML = `
      <button id="adultSizeBtn">Adult Size</button>
      <button id="childSizeBtn">Child Size</button>
    `;

    document.getElementById("adultSizeBtn").addEventListener("click", () => handleFoodSize(selectedFoodOption, foodType, "Adult"));
    document.getElementById("childSizeBtn").addEventListener("click", () => handleFoodSize(selectedFoodOption, foodType, "Child"));
  };

  // Function to handle the size selection and confirm the order
  const handleFoodSize = (selectedFoodOption, foodType, size) => {
    showMessage(`You've selected ${size} size for your ${selectedFoodOption}.`, "user");
    setTimeout(() => confirmOrder(selectedFoodOption, foodType, size), 1000);
  };

  // Function to confirm the order and show the final message
  const confirmOrder = (selectedFoodOption, foodType, size) => {
    let price = 0;

    if (foodType === "Pizza") {
      price = size === "Adult" ? 150 : 100;
    } else if (foodType === "Pasta") {
      price = size === "Adult" ? 130 : 80;
    } else if (foodType === "Salad") {
      price = size === "Adult" ? 120 : 70;
    }

    showMessage(`Thank you! Your ${size} ${selectedFoodOption} will be ready in 15 minutes. The price is ${price} SEK. Please pay upon arrival! 😋`, "bot");

    inputWrapper.innerHTML = ""; // Clear inputWrapper for no further input
  };

  // Function to show messages in the chat
  const showMessage = (message, sender) => {
    if (sender === "user") {
      chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />
      </section>
      `;
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

    chat.scrollTop = chat.scrollHeight;
  };

  // Function to start the conversation
  const greetUser = () => {
    showMessage("Hello there!<br>Welcome to Elina's Pizzeria!<br>What's your name?", "bot");
  };

  // Event listeners go here
  form.addEventListener("submit", handleNameInput);

  // Start the bot with a delay when the page loads
  setTimeout(greetUser, 1000);
});
