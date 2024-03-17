// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const nameForm = document.getElementById("name-form");
const sendButton = document.getElementById("send-btn");
const nameInput = document.getElementById("name-input");

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
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
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

const botResponse = (msg) => {
  showMessage(msg, "bot");
};

// Starts here
const userResponse = (msg) => {
  showMessage(msg, "user");
};

const greetUser = () => {
  showMessage("Hello there, What's your name?", "bot");
};

// When website loaded, chatbot asks first question.
setTimeout(greetUser, 1000);

// Add event listener to the form
nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = nameInput.value.trim();
  showMessage(`Hello! I am ${userName}.`, "user");
  nameInput.value = "";
  setTimeout(() => questionAboutPizza(userName), 1000);
});

// Bot shows flavour options upon receiving user's name
const questionAboutPizza = (userName) => {
  botResponse(
    `Welcome, what kind of pizza would you like to order, ${userName}?`
  );
  inputWrapper.innerHTML += `
    <button id="margaritapizza" value="margarita-pizza">maragita</button>
    <button id="chickenpizza" value="chicken-pizza">chicken pizza</button>
    <button id="kebabpizza" value="kebab-pizza">kebab-pizza</button>
  `;
  const maragritaButton = document.getElementById("margaritapizza");
  const chickenButton = document.getElementById("chickenpizza");
  const kebabButton = document.getElementById("kebabpizza");

  const moveToDrinks = () => {
    maragritaButton.remove();
    chickenButton.remove();
    kebabButton.remove();
    setTimeout(() => questionAboutDrinksChoice(), 1000);
  };

  const pizzaConfirmation = (button) => {
    button.addEventListener("click", () => {
      userResponse(`I would love to have ${button.value}!`);
      setTimeout(
        () => botResponse(`${button.value} is a really great choice!`),
        1000
      );
      moveToDrinks();
    });
  };

  pizzaConfirmation(maragritaButton);
  pizzaConfirmation(chickenButton);
  pizzaConfirmation(kebabButton);
};

// Bot shows options for the number of scoops upon receiving user's choice of flavour
const questionAboutDrinksChoice = () => {
  botResponse("What would you like to drink with your pizza?");
  inputWrapper.innerHTML += `
    <select name="drinks" id="drinks">
      <option value="drinks" selected disabled>Select one option...</option>
      <option value="cola">Cola</option>
      <option value="Fanta">Fanta</option>
      <option value="Sprite">Sprite</option>
    </select>
  `;
  const drinks = document.getElementById("drinks");
  drinks.addEventListener("change", () => {
    userResponse(`${drinks.value} drink please!`);
    setTimeout(() => botResponse(`${drinks.value}, got it!`), 1000);
    drinks.remove();
    setTimeout(() => questionAboutSide(), 1000);
  });
};

const questionAboutSide = () => {
  botResponse("What sides would you like to order with your Pizza");
  inputWrapper.innerHTML += `
    <button id="fries" value="fries">fries</button>
    <button id="salad" value="salad">salad</button>
    <button id="sweet-potatoes" value="sweet potatoes">sweet potatoes</button>
  `;
  const friesButton = document.getElementById("fries");
  const saladButton = document.getElementById("salad");
  const sweetpotatoesButton = document.getElementById("sweet-potatoes");

  const moveToConfirmation = () => {
    friesButton.remove();
    saladButton.remove();
    sweetpotatoesButton.remove();
    setTimeout(() => questionAboutConfirmation(), 1000);
  };

  const sidesConfirmation = (button) => {
    button.addEventListener("click", () => {
      userResponse(`${button.value} please. I would like that!`);
      setTimeout(() => botResponse(`${button.value} it is!`), 1000);
      moveToConfirmation();
    });
  };

  sidesConfirmation(friesButton);
  sidesConfirmation(saladButton);
  sidesConfirmation(sweetpotatoesButton);
};

// Bot asks for final confirmation of the whole order
const questionAboutConfirmation = () => {
  botResponse("Great! Would you like to confirm your order?");
  inputWrapper.innerHTML += `
    <button id="yes" value="Yes">Yes</button>
    <button id="no" value="No">No</button>
  `;
  const yesButton = document.getElementById("yes");
  const noButton = document.getElementById("no");

  const reloadSite = (timeoutPeriod) => {
    setTimeout("location.reload(true);", timeoutPeriod);
  };

  yesButton.addEventListener("click", () => {
    userResponse(`${yesButton.value} please! Can't wait!`);
    setTimeout(
      () =>
        botResponse(
          "Thank you. Your pizza order is being prepared. Have a great day!"
        ),
      1000
    );
    yesButton.remove();
    noButton.remove();
    reloadSite(3000);
  });

  noButton.addEventListener("click", () => {
    userResponse(`${noButton.value}, sorry. I changed my mind.`);
    setTimeout(
      () => botResponse("No problem. Go back and order any time!"),
      1000
    );
    yesButton.remove();
    noButton.remove();
    reloadSite(3000);
  });
};
