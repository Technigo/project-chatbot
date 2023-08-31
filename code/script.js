// Variables that point to selected DOM elements
const chat = document.getElementById("chat");

// If you need any global variables that you can use across different functions, declare them here:
const nameInput = document.getElementById("name-input");
const nameInputWrapper = document.getElementById("input-wrapper");
const sodaChoiceWrapper = document.getElementById("soda-choice");
const subChoiceWrapper = document.getElementById("sub-choice");
const sodaSizeWrapper = document.getElementById("soda-size");
const orderConfirmationWrapper = document.getElementById("orderConfirmation");

let sodaChoice = "";

// Declare your functions after this comment
const submitName = (submitEvent) => {
  submitEvent.preventDefault();

  setTimeout(() => {
    if (nameInput.value === "") {
      showMessage(`I´m a poor robot and I can´t make drinks for anyone who doesn´t have a name. Please enter a name.`, "bot");
    } else {
      showMessage(`Hello ${nameInput.value}! What would you like to drink today? `, "bot");

      showMessage(nameInput.value, "user");

      nameInput.value = "";

      nameInputWrapper.style.display = "none";
      sodaChoiceWrapper.style.display = "block";
    }
  }, 500);
}

const makeSodaChoice = (soda) => {
  sodaChoice = soda;
  showMessage(soda, "user");

  setTimeout(() => {
    showMessage(`Great choice! You are craving ${soda}! Would you like regular or zero ${soda}?`, "bot");

    sodaChoiceWrapper.style.display = "none";
    subChoiceWrapper.style.display = "block";
  }, 500);
}

const makeSubChoice = (subChoice) => {
  showMessage(subChoice, "user");

  setTimeout(() => {
    showMessage(`You have chosen ${subChoice}. What size would you like - small, medium or large?`, "bot");

    subChoiceWrapper.style.display = "none";
    sodaSizeWrapper.style.display = "block";
  }, 500);
}

const makeSizeChoice = (size) => {
  showMessage(size, "user");

  setTimeout(() => {
    showMessage(`You have chosen ${size}. Are you sure you want to order?`, "bot");

    sodaSizeWrapper.style.display = "none";
    orderConfirmationWrapper.style.display = "block";
  }, 500);
}

const orderConfirmation = (confirmationMessage) => {
  showMessage(confirmationMessage, "user");

  setTimeout(() => {
    if (confirmationMessage === "Yes") {
      showMessage(`Great, we will prepare your ${sodaChoice}!`, "bot");
    } else {
      showMessage(`No problem, hope you will come back and order another time!`, "bot");
    }
    orderConfirmationWrapper.style.display = "none";
  }, 500);
}


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there soda lover, what's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500)
