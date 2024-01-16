// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const submit = document.getElementsByClassName('submit');
const nameInput = document.getElementById('nameInput');

// If you need any global variables that you can use across different functions, declare them here:

let userName;
let drinkType;
let drinkChoice;
let milkType;
let userFeedback;

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/usercoffee.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/botcoffee.png" alt="Bot" />
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
  showMessage("Hello there. I'm Cuppa, your virtual coffee assistant. What might be your name?", 'bot');
}

// User tells their name to the bot
const userNameInput = event => {
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";

  if (!userName || !/^[a-zA-Z]+$/.test(userName)) {
    // Bot sends an error message if the name isn't valid
    showMessage("I didn't quite understand that. Please enter a valid name.", 'bot');
  } else {
    // User proceeds to the drink type options
    showMessage(`I'm ${userName}.`, "user");
    nameInput.value = "";
    setTimeout(() => drinkTypeOptions(userName), 2000);
  };
}

document.getElementById("nameForm").addEventListener("submit", userNameInput);

// Bot responds by welcoming the user to Hot Java Coffee and asks what the user would like to drink.
const drinkTypeOptions = () => {
  showMessage(`Well hello ${userName}! The warmest of welcomes to Hot Java Coffee.
  What are you in the mood for today?`, 'bot');
  // Buttons for the different drink choices
  inputWrapper.innerHTML = `
    <button id="caffeLatte">Caffe Latte</button>
    <button id="flatWhite">Flat White</button>
    <button id="cappuccino">Cappuccino</button>`

  document.getElementById("caffeLatte").addEventListener("click", () => {
    drinkType = "Caffe Latte";
    showMessage("I'd love a Caffe Latte!", 'user');
    setTimeout(milkOptions, 1500);
  });
  document.getElementById("flatWhite").addEventListener("click", () => {
    drinkType = "Flat White";
    showMessage("Flat White is my jam!", 'user');
    setTimeout(milkOptions, 1500);
  });
  document.getElementById("cappuccino").addEventListener("click", () => {
    drinkType = "Cappuccino";
    showMessage("I've never said 'no' to a Cappuccino!", 'user');
    setTimeout(milkOptions, 1500);
  });
}

// When the drink is chosen, the bot asks the user which milk they want for their drink.
const milkOptions = () => {
  showMessage(
    `A ${drinkType}? Lovely! What kind of milk would you like us to prepare it with?`,
    'bot');
  // Buttons for the different milk choices
  inputWrapper.innerHTML = `
      <button id="oatMilk">Oat milk</button>
      <button id="almondMilk">Almond milk</button>
      <button id="soyMilk">Soy milk</button>`

  document.getElementById("oatMilk").addEventListener("click", () => {
    milkType = "Oat milk";
    showMessage("Oat milk, please!", 'user');
    setTimeout(confirmMilk, 1500);
  });
  document.getElementById("almondMilk").addEventListener("click", () => {
    milkType = "Almond milk";
    showMessage("Almond milk, please!", 'user');
    setTimeout(confirmMilk, 1500);
  });
  document.getElementById("soyMilk").addEventListener("click", () => {
    milkType = "Soy milk";
    showMessage("Soy milk, please!", 'user');
    setTimeout(confirmMilk, 1500);
  });
}

// Bot confirms the choice of milk to the user
const confirmMilk = () => {
  showMessage(`You chose to have your drink with ${milkType}. Great choice!`, 'bot');
  setTimeout(sizeChoice, 2000);
}


// Bot asks the user which size of the drink they want
const sizeChoice = () => {
  showMessage(
    `Which drink size would you prefer today: big or small?`,
    'bot')
  // Buttons for the drink sizes
  inputWrapper.innerHTML = `
      <button id="bigDrink">Big</button>
      <button id="smallDrink">Small</button>`

  document.getElementById("bigDrink").addEventListener("click", () => {
    drinkSize = "Big";
    showMessage("Big! I need my caffeine.", 'user');
    setTimeout(confirmSize, 1500);
  });
  document.getElementById("smallDrink").addEventListener("click", () => {
    drinkSize = "Small";
    showMessage("Small. It's almost my bedtime...", 'user');
    setTimeout(confirmSize, 1500);
  });
}

// Bot confirms the user's choice of drink size
const confirmSize = () => {
  if (drinkSize === "Big") {
    showMessage("A big ol' cuppa coming right up!", 'bot');
    setTimeout(feedback, 2000);
  } else if (drinkSize === "Small") {
    showMessage("I understand! Let's make you just a small one then.", 'bot');
    setTimeout(feedback, 2000);
  } else {
    showMessage("Hmm, I believe that's not an option.", 'bot');
  }
}

// User is asked to give feedback of the bot
const feedback = () => {
  showMessage("Your drink will be ready shortly. While you wait, would you mind telling me how you liked our little interaction today?", 'bot');
  inputWrapper.innerHTML = `
    <button id="needsImproving">Needs improving...</button>
    <button id="wasOkay">It was okay, I guess.</button>
    <button id="lovely">I had a lovely time!</button>`

  document.getElementById("needsImproving").addEventListener("click", () => {
    userFeedback = "Needs improving...";
    showMessage(`${userFeedback}`, 'user');
    setTimeout(botResponse, 2000);
  });
  document.getElementById("wasOkay").addEventListener("click", () => {
    userFeedback = "It was okay, I guess.";
    showMessage(`${userFeedback}`, 'user');
    setTimeout(botResponse, 2000);
  });
  document.getElementById("lovely").addEventListener("click", () => {
    userFeedback = "I had a lovely time!";
    showMessage(`${userFeedback}`, 'user');
    setTimeout(botResponse, 2000);
  });
}

// Bot responds to the user's feedback
const botResponse = () => {
  if (userFeedback === "Needs improving...") {
    showMessage("Okay, I understand. I will keep trying my best!", 'bot');
    setTimeout(thankYou, 3000);
  } else if (userFeedback === "It was okay, I guess.") {
    showMessage("Fair enough. Maybe I can be extraordinary the next time!", 'bot');
    setTimeout(thankYou, 3000);
  } else if (userFeedback === "I had a lovely time!") {
    showMessage("Oh my, thanks! I'm blushing. I had a lovely time as well.", 'bot');
    setTimeout(thankYou, 3000);
  } else {
    showMessage(`Hmm, nothing to say?`, 'bot');
  }
}

// User is informed that the drink is ready and thanked for the interaction
const thankYou = () => {
  showMessage("Thank you so much for stopping by. Your drink is ready for pick-up. See you next time!", 'bot');
}


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greetUser, 1500);
