// All the DOM selectors stored as short variables
const chat = document.getElementById("chat");
const nameInput = document.getElementById("name-input");
const submitBtn = document.getElementById("btn");
const inputWrapper = document.getElementById("input-wrapper");

//[updated] 'name' is reserved as global variable? instead 'name' -> 'username'
let username;
// Global variables, if you need any, declared here

// Functions declared here

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
    console.log("hello bot!");
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

// Starts here
const greeting = () => {
  showMessage(`Hello there, What a lovely day🍎 What is your name?`, "bot");
  // Just to check it out, change 'bot' to 'user' here 👆
};

//[updated] function name updated from handleNameInput to getUsername
const getUsername = (event) => {
  event.preventDefault();
  username = nameInput.value; //[updated] assigned username global variable here
  showMessage(username, "user");

  //[updated] if username is empty (null), ask name again
  if (!username) {
    setTimeout(greeting, 1000);
  } else {
    setTimeout(showFoodOptions, 1000);
  }
  nameInput.value = "";
};

// Set up your eventlisteners here
submitBtn.addEventListener("click", getUsername);
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);

//Changed the order so it gets more orginized :) -> great!! super good to read
const showFoodOptions = () => {
  showMessage(`Hello, ${username}! What do you want to eat today? `, "bot");
  //3 options in buttons
  setTimeout(showButtons, 1000); //[updated] setTimeoug
};

const showButtons = () => {
  inputWrapper.innerHTML = `
    <button id="pizzaBtn">Pizza</button>
    <button id="pastaBtn">Pasta</button>
    <button id="saladBtn">Salad</button>
  `;
  document.getElementById("pizzaBtn").addEventListener("click", () => {
    showMessage(`I would like 🍕 pizza please`, "user"); //cute with icons!
    setTimeout(() => {
      foodOptions("pizza");
    }, 1000); //[updated] setTimeout
  });
  document.getElementById("pastaBtn").addEventListener("click", () => {
    showMessage(`I would like 🍝 pasta please`, "user");
    setTimeout(() => {
      foodOptions("pasta");
    }, 1000); //[updated] setTimeout
  });
  document.getElementById("saladBtn").addEventListener("click", () => {
    showMessage(`I would like 🥬 salad please`, "user");
    setTimeout(() => {
      foodOptions("salad");
    }, 1000); //[updated] setTimeout
  });
};

const foodOptions = (menu) => {
  if (menu === "pizza") {
    inputWrapper.innerHTML = `
    <select id="select">
    <option value="" selected disabled>🍕 Select a pizza...</option> 
      <option value="Hawaii">Hawaii</option>
      <option value="Neapolitan">Neapolitan</option>
      <option value="Margarita">Margarita</option>
      </select>`;
    showMessage("Which pizza do you want?", "bot");
  } else if (menu === "pasta") {
    inputWrapper.innerHTML = `
    <select id="select">
    <option value="" selected disabled>🍝 Select a pasta...</option>
      <option value="Ravioli">Ravioli pasta</option>
      <option value="Carbonara">Carbonara pasata</option>
      <option value="Spaghetti">Spaghetti</option>
      </select>`;
    showMessage("which pasta do you want?", "bot");
  } else {
    inputWrapper.innerHTML = `
    <select id="select">
    <option value="" selected disabled>🥬 Select a salad...</option>
      <option value="Broccoli">Broccoli salad</option>
      <option value="Ceaser">Ceaser salad</option>
      <option value="Leafgreen">Leafgreen salad</option>
      </select>`;
    showMessage("which salad do you want?", "bot");
  }
  const select = document.getElementById("select");
  select.addEventListener("change", () => {
    let dish = select.value;
    showMessage(`I would like ${dish} please`, "user");
    setTimeout(() => {
      confirmation(select.value);
    }, 1000); //[updated] setTimeout
  });
};

const confirmation = (dish) => {
  inputWrapper.innerHTML = `
   <button id="yes">Yes!</button>
   <button id="no">No</button>
  `;
  showMessage(`Would you like to order ${dish}?`, "bot");

  const yesBtn = document.getElementById("yes");
  yesBtn.addEventListener("click", () => {
    showMessage(`Yes`, "user");
    setTimeout(() => {
      showPrice(dish);
    }, 1000); //[updated] setTimeout
  });

  const noBtn = document.getElementById("no");
  noBtn.addEventListener("click", () => {
    showMessage(`No`, "user");
    setTimeout(() => {
      restartPage("😭", "Restart the order");
    }, 1000); //[updated] make seperate function 'restart page' so we can use it again, and added setTimeout
  });
};

//[updated] added restartPaged function
const restartPage = (botMessage, buttonMessage) => {
  inputWrapper.innerHTML = `
  <button id="restart">${buttonMessage}</button>
   `;
  showMessage(botMessage, "bot");

  document.getElementById("restart").addEventListener("click", () => {
    window.location.reload(); //great!!
  });
};

const showPrice = (dish) => {
  inputWrapper.innerHTML = `
  <button id="yes">Yes!</button>
  <button id="no">No</button>
 `;
  showMessage(
    `${dish} will cost 100kr. Would you like to place this order?`,
    "bot"
  );

  const yesBtn = document.getElementById("yes");
  yesBtn.addEventListener("click", () => {
    showMessage("Yes!", "user");
    setTimeout(() => {
      showAdditionalRequest(dish);
      // restartPage("Thank you for your order!", "Make another order");
    }, 1000); //[updated] setTimeout, restartPage
  });

  const noBtn = document.getElementById("no");
  noBtn.addEventListener("click", () => {
    showMessage("No", "user");
    setTimeout(() => {
      restartPage("Ooops, bye", "Restart the order");
    }, 1000); //[updated] make seperate function 'restart page' so we can use it again, and added setTimeout
  });
};

//[added] showAdditionalRequest order -> ask allergy
const showAdditionalRequest = (menu) => {
  inputWrapper.innerHTML = `
    <form id="name-form">
      <input id="messageInput" type="text"  />
      <button id="submitMessage" class="send-btn" type="submit">Send</button>
    </form>
  `;
  showMessage("Do you have special request? (eg. food allergy)", "bot");
  const submitMessage = document.querySelector("#submitMessage");
  submitMessage.addEventListener("click", (e) => {
    e.preventDefault();
    const messageInput = document.getElementById("messageInput");
    showMessage(messageInput.value, "user");
    nameInput.value = "";

    setTimeout(() => {
      restartPage(
        `Thank you for your order ${username}. Your ${menu} is on the way!`,
        "Make another order"
      );
    }, 1000);
  });
};