// Function that generates a button with specific text and click handler
const createButton = (text, clickHandler) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", clickHandler);
  return button;
};

// DOM selectors
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");

// Function to display messages with delay
const showMessageWithDelay = (message, sender, delay) => {
  setTimeout(() => {
    showMessage(message, sender);
  }, delay);
};

// Chat bubble
const showMessage = (message, sender) => {
  if (sender === "user") {
    console.log("Message sent by user:", message);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/dateuser.png" alt="User" />  
      </section>
    `;
  } else if (sender === "bot") {
    console.log("Message sent by bot:", message);
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/datebot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  chat.scrollTop = chat.scrollHeight;
};

// Greeting
const greetUser = () => {
  showMessageWithDelay(
    "👋 Hey there! I'm DateBot, here to spark magic in your dates. Let's plan something unforgettable together! To whom am I speaking with? Please enter your name below.",
    "bot",
    1000
  );

  // Input field for name
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "nameInput");
  nameInput.setAttribute("placeholder", "Enter your name");
  inputWrapper.appendChild(nameInput);

  // Submit-button
  const submitButton = createButton("Submit", () => {
    const userName = document.getElementById("nameInput").value.trim();
    if (userName !== "") {
      askPreference(userName); // Pass userName to askPreference
    } else {
      showMessageWithDelay("Please enter your name.", "bot", 1000);
    }
  });

  inputWrapper.appendChild(submitButton);
};

// Function that asks user to choose between personalized or random date suggestions
const askPreference = (userName) => {
  const botMessage = `Nice to meet you, ${userName}! Let's plan something unforgettable together! ✨`;
  showMessageWithDelay(botMessage, "bot", 1000);
  inputWrapper.innerHTML = "";
  inputWrapper.appendChild(
    createButton("Personalized", () => {
      showMessageWithDelay("Personalized! ✨", "user", 1000);
      askSetting("Personalized");
    })
  );
  inputWrapper.appendChild(createButton("Randomize", () => handleRandom()));
};

// Function that asks user to choose setting, indoor or outdoor
const askSetting = (setting) => {
  showMessageWithDelay(
    `Great! Let's plan a personalized date. Do you prefer an indoor or outdoor setting for your date? 🏠🌳`,
    "bot",
    1000
  );
  inputWrapper.innerHTML = "";
  inputWrapper.appendChild(
    createButton("Indoor", () => {
      showMessageWithDelay("Indoor! ✨", "user", 1000);
      askBudget("Indoor");
    })
  );
  inputWrapper.appendChild(
    createButton("Outdoor", () => {
      showMessageWithDelay("Outdoor! ✨", "user", 1000);
      askBudget("Outdoor");
    })
  );
};

// Function that asks user to choose budget option
const askBudget = (setting) => {
  const botMessage = `Great! ${setting} it is. What's your budget range for the date?`;
  showMessageWithDelay(botMessage, "bot", 1000);
  inputWrapper.innerHTML = "";
  ["Low", "Moderate", "High"].forEach((budgetLevel) => {
    inputWrapper.appendChild(
      createButton(budgetLevel, () => handleBudget(budgetLevel, setting))
    );
  });
};

// Date ideas array
const dateIdeas = [
  {
    setting: "Outdoor",
    budget: "Low",
    idea: "Picnic in a Park 🧺🌷",
  },
  {
    setting: "Outdoor",
    budget: "Moderate",
    idea: "Spend the day at the beach or by the lake 🏖️",
  },
  {
    setting: "Outdoor",
    budget: "High",
    idea: "Spend the day at a theme park 🎢🎪",
  },
  {
    setting: "Indoor",
    budget: "Low",
    idea: "Have a movie night at home 🎥🍿",
  },
  {
    setting: "Indoor",
    budget: "Moderate",
    idea: "Try a new restaurant 🍽️👨‍🍳",
  },
  {
    setting: "Indoor",
    budget: "High",
    idea: "Attend a live concert 🎫🎶",
  },
];

// Function that presents the date idea based on user's choice of setting and budget level
const getDateIdea = (setting, budgetLevel) => {
  const matchingIdeas = dateIdeas.filter(
    (idea) => idea.setting === setting && idea.budget === budgetLevel
  );

  if (matchingIdeas.length > 0) {
    const randomIndex = Math.floor(Math.random() * matchingIdeas.length);
    const selectedIdea = matchingIdeas[randomIndex].idea;
    showMessageWithDelay(
      `Based on your input <span style="color: #000000; font-weight: bold;">${selectedIdea}</span> would be the perfect date for you!`,
      "bot",
      1000
    );
  }
};

// Function that randomizes a date idea from the date ideas array
const handleRandom = () => {
  showMessageWithDelay("Randomize! ✨", "user", 1000);

  const randomIndex = Math.floor(Math.random() * dateIdeas.length);
  const randomDateIdea = dateIdeas[randomIndex].idea;
  showMessageWithDelay(
    `How about <span style="color: #000000; font-weight: bold;">${randomDateIdea}</span>?`,
    "bot",
    2000
  );
};

// Function that handles the budget level selection
const handleBudget = (budgetLevel, setting) => {
  showMessageWithDelay(`${budgetLevel}! 💰`, "user", 1000);
  getDateIdea(setting, budgetLevel);

  const restartButton = createButton(
    "Not happy with the result? Try again!",
    () => {
      showMessageWithDelay("Restarting... ⌛️", "user", 1000);

      restartButton.remove();

      setTimeout(() => {
        chat.innerHTML = "";
        greetUser();
      }, 1000);
    }
  );

  inputWrapper.innerHTML = "";
  inputWrapper.appendChild(restartButton);
};

greetUser();
