// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const sendButton = document.getElementById("send-btn");
const nameFormChildren = nameForm.querySelectorAll("*");
const inputWrapper = document.getElementById("input-wrapper");
// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  console.log(`MESSAGE: ${message}`, `SENDER: ${sender}`);
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
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

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// A function to start the conversation
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("Hello, Happy Fat Tuesday! What's your name?", "bot");
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
};

// a function to get the users name and showing the name written by the user in the chat.
const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  showMessage(name, "user");
  nameInput.value = "";

  setTimeout(() => {
    showMessage(
      `Hello ${name}, what kind of semla would you like to order?`,
      "bot"
    );
  }, 1000);

  setTimeout(whatkindofSemla, 1000);
};

// Second question: What kind of semla would you like?
const whatkindofSemla = (event) => {
  // Hide input field using display none
  nameFormChildren.forEach((child) => {
    // Här körs loopen. DDär har du tillgång till child, inte utanför loopen.
    child.style.display = "none";
  });

  // Create radiobuttons
  nameForm.innerHTML += `
  
  <input type="radio" name="semla_choice" id="regular" value="regular"/><label>Regular</label>
  <input type="radio" name="semla_choice" id="gluten" value="gluten"/><label>Gluten free</label>
  <input type="radio" name="semla_choice" id="lactose" value="lactose"/><label>Lactose free</label>

  `;

  // We store all radio btns in a variabel.
  const radioButtons = document.querySelectorAll('input[name="semla_choice"]');

  // Loop through all buttons and add event listener to each button
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("click", (event) => {
      if (radioButton.value === "regular") {
        showMessage(
          radioButton.value,
          "user"
        );
        setTimeout(() => {
          showMessage(
            `Nice choice! You chose a ${radioButton.value} semla.\n Please chose what flavour you want`,
          "bot"
          );
        }, 1000);
      } else {
        showMessage(
          radioButton.value,
          "user"
        );
        setTimeout(() => {
          showMessage(
            `Nice choice! You chose a ${radioButton.value} free semla.\n Please chose what flavour you want`,
          "bot"
          );
        }, 1000);
      }
      setTimeout(subtypesSelection, 1000);
      
    });
  });
  
  //Tillfälligt test!// vill att klick på radiobutton öppnar nästa funktion nedanför men lyckades inte med det så satt en set timeout på 4 sekunder för att man ska hinna välja ett alternativ innan nästa funktion startar...
//  setTimeout(() => subtypesSelection(), 4000);

};


//TEST SUBKATEGORIER//

// knappar till olika subalternativ //
const subtypesSelection = () => {
  inputWrapper.innerHTML = `
  <button id="blueberry" type="submit" class="choice-btn">Blueberry</button>
  <button id="vanilla" type="submit" class="choice-btn">Vanilla</button>
  <button id="chocolate" type="submit" class="choice-btn">Chocolate</button>
`
  // addeventlistner som genererar botmeddelande med vald smak på semla vid klick //
  document.getElementById("blueberry").addEventListener("click", blueberryChoice);  
  document.getElementById("vanilla").addEventListener("click", vanillaChoice);
  document.getElementById("chocolate").addEventListener("click", chocolateChoice)

}

const blueberryChoice = () => {
  showMessage("Blueberry", "user");
  setTimeout(() => {
    showMessage(
      "Yummy, blueberry is a great choice!",
    "bot"
    );
  }, 1000);
};

const vanillaChoice = () => {
  showMessage("Vanilla", "user");
  setTimeout(() => {
    showMessage(
      "yummy vanilla!",
    "bot"
    );
  }, 1000);
 
};

const chocolateChoice = () => {
  showMessage("Chocolate", "user");
  setTimeout(() => {
    showMessage(
      "Chocolate can never go wrong!",
    "bot"
    );
  }, 1000);
};




// Eventlisteners goes here 👇

// Add listener to the form
nameForm.addEventListener("submit", handleNameInput);

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
