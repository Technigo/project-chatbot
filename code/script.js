// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const nameFormChildren = nameForm.querySelectorAll("*");
const inputWrapper = document.getElementById("input-wrapper");

// Functions:
// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user_bot.png" alt="User" />  
      </section>
    `;
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/semla_bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// A function to start the conversation, first question:
const greetUser = () => {
  showMessage("Hello, Happy Fat Tuesday! What's your name?", "bot");
};

// A function to get the users name and showing the name written by the user in the chat
const handleNameInput = (event) => {
  event.preventDefault();

  const name = nameInput.value;

  if (name === "") {
    // Message to user: Please fill in your name
    nameInput.placeholder = "Please fill in your name";
  } else {
    showMessage(name, "user");
    nameInput.value = "";

    setTimeout(() => {
      showMessage(
        `Hello ${name}, what kind of semla would you like to order?`,
        "bot"
      );
    }, 1000);

    setTimeout(whatkindofSemla, 1000);
  }
};

// Second question: What kind of semla would you like?
const whatkindofSemla = () => {
  nameFormChildren.forEach((child) => {
    child.style.display = "none";
  });

  // Create radiobuttons for question 1
  nameForm.innerHTML += `
  <input type="radio" name="semla_choice" id="regular" value="regular"/><label>Regular</label>
  <input type="radio" name="semla_choice" id="gluten" value="gluten"/><label>Gluten free</label>
  <input type="radio" name="semla_choice" id="lactose" value="lactose"/><label>Lactose free</label>
 `;

  // We store all radio btns in a variabel
  const radioButtons = document.querySelectorAll('input[name="semla_choice"]');

  // Loop through all buttons and add event listener to each button
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("click", () => {
      if (radioButton.value === "regular") {
        showMessage(`I choose ${radioButton.value}`, "user");
        setTimeout(() => {
          showMessage(
            `Nice choice! You chose a ${radioButton.value} semla.\n Please choose what flavour you want`,
            "bot"
          );
        }, 1000);
      } else {
        showMessage(`I choose ${radioButton.value} free`, "user");
        setTimeout(() => {
          showMessage(
            `Nice choice! You chose a ${radioButton.value} free semla.\n Please choose what flavour you want`,
            "bot"
          );
        }, 1000);
      }
      setTimeout(subtypesSelection, 1000);
    });
  });
};

// Buttons for question 1
const subtypesSelection = () => {
  inputWrapper.innerHTML = `
  <button id="blueberry" type="submit" class="choice-btn">Blueberry</button>
  <button id="vanilla" type="submit" class="choice-btn">Vanilla</button>
  <button id="chocolate" type="submit" class="choice-btn">Chocolate</button>
`;
  // addeventlistner that generates a bot message with the chosen subchoice
  document
    .getElementById("blueberry")
    .addEventListener("click", blueberryChoice);
  document.getElementById("vanilla").addEventListener("click", vanillaChoice);
  document
    .getElementById("chocolate")
    .addEventListener("click", chocolateChoice);
};

const blueberryChoice = () => {
  showMessage("Blueberry", "user");
  setTimeout(() => {
    showMessage(
      "Yummy, blueberry is a great choice!\nWould you like a coffee with that?",
      "bot"
    );
  }, 1000);
  setTimeout(coffeChoice, 1000);
};

const vanillaChoice = () => {
  showMessage("Vanilla", "user");
  setTimeout(() => {
    showMessage("Yummy vanilla!\nWould you like a coffee with that?", "bot");
  }, 1000);
  setTimeout(coffeChoice, 1000);
};

const chocolateChoice = () => {
  showMessage("Chocolate", "user");
  setTimeout(() => {
    showMessage(
      "Chocolate can never go wrong!\nWould you like a coffee with that?",
      "bot"
    );
  }, 1000);
  setTimeout(coffeChoice, 1000);
};

//Coffee buttons for question 3
const coffeChoice = () => {
  let choice = "";

  inputWrapper.innerHTML = `
  <button type="submit" id="yes" class="coffeChoiceBtn">Yes</button>
  <button type="submit" id="no" class="coffeChoiceBtn">No</button>
  `;

  document.getElementById("yes").addEventListener("click", () => {
    showMessage("Yes, please!", "user");
    choice = "Yes";
    setPrice(choice);
  });

  document.getElementById("no").addEventListener("click", () => {
    showMessage("No, thank you!", "user");
    choice = "No";
    setPrice(choice);
  });
};

const setPrice = (choice) => {
  if (choice === "Yes") {
    showMessage(
      "Great! The total price will be 10$, do you want to confirm this order?",
      "bot"
    );
  } else if (choice === "No") {
    showMessage(
      "Ok, no coffee! The total price will be 6$, do you want to confirm this order?",
      "bot"
    );
  }
  setTimeout(orderConfirmation, 1000);
};

//confirmation message + price
const orderConfirmation = () => {
  inputWrapper.innerHTML = `
  <button type="submit" id="yes" class="orderConfirmationBtn">Confirm</button>
  <button type="submit" id="no" class="orderConfirmationBtn">Exit</button>`;

  const yesButton = document.getElementById("yes");
  const noButton = document.getElementById("no");
  const sound = document.getElementById("submitSound");

  yesButton.addEventListener("click", () => {
    showMessage("Confirm order", "user");
    setTimeout(() => {
      yesButton.style.display = "none";
      noButton.style.display = "none";
      showMessage(
        "We will prepare your order ☕️ Thank you for using the Semel Bot!",
        "bot"
      );
      sound.play();
    }, 1000);
  });

  noButton.addEventListener("click", () => {
    showMessage("Exit", "user");
    setTimeout(() => {
      yesButton.style.display = "none";
      noButton.style.display = "none";
      showMessage("Ok, sorry to see you go.", "bot");
      sound.play();
    }, 1000);
  });
};

// Eventlisteners:
// Add listener to form
nameForm.addEventListener("submit", handleNameInput);
// Greet the user
setTimeout(greetUser, 1000);
