// DOM selectors 👇
const chat = document.getElementById("chat");
const userInput = document.getElementById("name-input");
const form = document.getElementById("form");

// Function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender, isLoading = false) => {
  const messageClass = isLoading ? "loading-message" : "";
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
        <div class="bubble bot-bubble ${messageClass}">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  chat.scrollTop = chat.scrollHeight;
};

// Function to start the conversation
const greetUser = () => {
  showMessage("Hey you, what's your name?", "bot");
};

let numberOfFormSubmits = 0; // initializing the logic to trigger new messages in the form

// Function to handle the form submission
function handleSubmit(event) {
  event.preventDefault();
  numberOfFormSubmits++;

  switch (numberOfFormSubmits) {
    case 1: // Name input
      const name = userInput.value;
      showMessage(name, "user");
      showMessage(`Nice to meet you, ${name}`, "bot");
      userInput.value = "";

      setTimeout(() => {
        showMessage(
          "What would you like to eat? Pizza, Burger, or Salad?",
          "bot"
        );
        updateFormForFoodSelection();
      }, 1000);
      break;

    case 2: // Food selection
      const selectedFood = document.getElementById("food").value;
      showMessage(selectedFood, "user");
      showMessage(`${selectedFood} coming up!`, "bot");

      setTimeout(() => {
        showMessage("What would you like to drink?", "bot");
        updateFormForDrinkSelection();
      }, 1000);
      break;

    case 3: // Drink selection and order confirmation
      const selectedDrink = document.getElementById("drink").value;
      showMessage(selectedDrink, "user");
      showMessage(`${selectedDrink} is a great choice!`, "bot");

      setTimeout(() => {
        showMessage("Are you sure you want to order?", "bot");
        updateFormForOrderConfirmation(); // This function also triggers confirmation message
      }, 1000);
      break;

    // add more questions here
  }
}

function updateFormForFoodSelection() {
  form.innerHTML = `
    <label for="food">Select your food:</label>
    <select id="food" name="food" required>
      <option value="" disabled selected>Choose your food</option>
      <option value="Salad">Salad</option>
      <option value="Burger">Burger</option>
      <option value="Pasta">Pasta</option>
    </select>
    <button id="btn" class="send-btn" type="submit">Send</button>
  `;
}

function updateFormForDrinkSelection() {
  form.innerHTML = `
    <label for="drink">Select your drink:</label>
    <select id="drink" name="drink" required>
      <option value="" disabled selected>Choose your drink</option>
      <option value="Coca Cola">Coca Cola</option>
      <option value="Water">Water</option>
      <option value="Wine">Wine</option>
    </select>
    <button id="btn" class="send-btn" type="submit">Send</button>
  `;
}

function updateFormForOrderConfirmation() {
  form.innerHTML = `
    <button type="button" id="confirmation" onclick="orderConfirmation('Yes')">Yes</button>
    <button type="button" id="confirmation" onclick="orderConfirmation('No')">No</button>
  `;
}

function orderConfirmation(confirmation) {
  showMessage(confirmation, "user");

  if (confirmation === "Yes") {
    showMessage("Preparing your order", "bot", true);

    setTimeout(() => {
      const loadingMessage = document.querySelector(".loading-message");
      if (loadingMessage) {
        loadingMessage.classList.remove("loading-message");
        loadingMessage.querySelector("p").textContent =
          "Thanks for ordering! The food will be ready soon 🍽️";
      }
      clearForm();
    }, 3000);
  } else {
    setTimeout(() => {
      showMessage("Please come back another time!", "bot");
      clearForm();
    }, 1000);
  }
}

function clearForm() {
  form.innerHTML = "";
}

// Eventlisteners👇
form.addEventListener("submit", (event) => handleSubmit(event));

setTimeout(greetUser, 1000);
