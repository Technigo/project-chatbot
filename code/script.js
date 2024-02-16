// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
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

// A function to get the users name and showing the name written by the user in the chat
const handleNameInput = (event) => {
  event.preventDefault();

  const name = nameInput.value;

  if(name === "") {
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

  // We store all radio btns in a variabel
  const radioButtons = document.querySelectorAll('input[name="semla_choice"]');

  // Loop through all buttons and add event listener to each button
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("click", () => {
      if (radioButton.value === "regular") {
        showMessage(
          `I choose ${radioButton.value}`,
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
          `I choose ${radioButton.value} free`,
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

};

// Buttons for the subchoices //
const subtypesSelection = () => {
  inputWrapper.innerHTML = `
  <button id="blueberry" type="submit" class="choice-btn">Blueberry</button>
  <button id="vanilla" type="submit" class="choice-btn">Vanilla</button>
  <button id="chocolate" type="submit" class="choice-btn">Chocolate</button>
`
  // addeventlistner that generates a bot message with the chosen subchoice by click //
  document.getElementById("blueberry").addEventListener("click", blueberryChoice);  
  document.getElementById("vanilla").addEventListener("click", vanillaChoice);
  document.getElementById("chocolate").addEventListener("click", chocolateChoice)

}

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
    showMessage(
      "yummy vanilla!\nWould you like a coffee with that?",
    "bot"
    );
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


//Coffee buttons 

const coffeChoice = () => {
 let choice = "";

  inputWrapper.innerHTML = `
  <button type="submit" id="yes" class="coffeChoiceBtn">Yes</button>
  <button type="submit" id="no" class="coffeChoiceBtn">No</button>
  `

  document.getElementById('yes').addEventListener('click', () => {
    showMessage("Yes, please!", "user");
    choice = "Yes";
    setPrice(choice);
  })

  document.getElementById('no').addEventListener('click', () => {
    showMessage("No, thank you!", "user");
    choice = "No";
    setPrice(choice);
  })

  // Lyssna på alla input fält 
  // const coffeChoices = document.querySelectorAll('input[name="coffeChoice"]');
  // coffeChoices.forEach(choice => {
  //   choice.addEventListener("change", () => {
  //     if(choice.value === 'yes') {
  //       console.log(choice.value);
  //     } else {
  //       console.log('test');
  //     }
  //   })
  // })

}

const setPrice = (choice) => {

  if  (choice === "Yes") { 
  showMessage ("Great, the total price will be 10$!, do you want to confirm this order?", "bot");
 }  else if (choice === "No") { 
  showMessage ("Ok no coffee! the total price will be 6$, do you want to confirm this order?", "bot")
}
setTimeout(orderConfirmation, 1000)
} 



const orderConfirmation = () => {

  inputWrapper.innerHTML = `
  <button type="submit" id="yes" class="orderConfirmationBtn">Yes</button>
  <button type="submit" id="no" class="orderConfirmationBtn">No</button>`

  const yesButton = document.getElementById('yes')
  const noButton = document.getElementById('no')

  const hideButtons = document.querySelectorAll(".orderConfirmationBtn");

  yesButton.addEventListener('click', () => {

    hideButtons.forEach((button) => {
      button.style.display = "none";
    });
    showMessage("We will prepare your order, thank you for using the Semel Bot", "bot")
   
  })
  noButton.addEventListener('click', () => {
    hideButtons.forEach((button) => {
      button.style.display = "none";
    })
    showMessage("Ok, sorry to see you go.", "bot");
  })
}


// Eventlisteners goes here 👇

// Add listener to the form
nameForm.addEventListener("submit", handleNameInput);
// Greet the user
setTimeout(greetUser, 1000);
