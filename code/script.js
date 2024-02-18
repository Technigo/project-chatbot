// DOM selectors
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");

// Functions 👇 //
// Chat bubble //
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

// Greeting //
const greetUser = () => {
  showMessage(
    "👋 Hey there! I'm DateBot, here to spark magic in your dates. Let's plan something unforgettable together! ✨",
    "bot"
  );

  // Function that generates a button with specific text and click handler //
  const createButton = (text, clickHandler) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", clickHandler);
    return button;
  };

   // Let's start!-button //
   const button = createButton("Let's Start", () => {
    showMessage("Let's Start! 🥳", "user");
    askPreference();
  });

  // Function that asks user to choose between personalized or random date suggestions //
  // Adds a button for each option. After selection, it proceeds accordingly //
  const askPreference = () => {
    const botMessage =
      "Would you prefer a personalized date suggestion or should we let fate decide with a random date suggestion? 🪄";
    showMessage(botMessage, "bot");
    inputWrapper.innerHTML = "";
    inputWrapper.appendChild(
      createButton("Personalized", () => {
        showMessage("Personalized! ✨", "user");
        askSetting("Personalized");
      })
    );
    inputWrapper.appendChild(createButton("Randomize", () => handleRandom()));
  };

  // Function that asks user to choose setting, indoor or outdoor //
  // Adds a button for each option. After selection, it proceeds accordingly //
  const askSetting = (setting) => {
    showMessage(
      `Great! Let's plan a personalized date. Do you prefer an indoor or outdoor setting for your date? 🏠🌳`,
      "bot"
    );
    inputWrapper.innerHTML = "";
    inputWrapper.appendChild(
      createButton("Indoor", () => {
        showMessage("Indoor! ✨", "user");
        askBudget("Indoor");
      })
    );
    inputWrapper.appendChild(
      createButton("Outdoor", () => {
        showMessage("Outdoor! ✨", "user");
        askBudget("Outdoor");
      })
    );
  };

  // Function that asks user to choose budget option //
  // Adds a button for each option. After selection, it proceeds accordingly //
  const askBudget = (setting) => {
    const botMessage = `Great! ${setting} it is. What's your budget range for the date?`;
    showMessage(botMessage, "bot");
    inputWrapper.innerHTML = "";
    ["Low", "Moderate", "High"].forEach((budgetLevel) => {
      inputWrapper.appendChild(
        createButton(budgetLevel, () => handleBudget(budgetLevel, setting))
      );
    });
  };

  // Date ideas array //
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

  // Function that presents the date idea based on user's choice of setting and budget level //
  const getDateIdea = (setting, budgetLevel) => {
    const matchingIdeas = dateIdeas.filter(
      (idea) => idea.setting === setting && idea.budget === budgetLevel
    );

    if (matchingIdeas.length > 0) {
      const randomIndex = Math.floor(Math.random() * matchingIdeas.length);
      const selectedIdea = matchingIdeas[randomIndex].idea;
      showMessage(
        `Based on your input <span style="color: #000000; font-weight: bold;">${selectedIdea}</span> would be the perfect date for you!`,
        "bot"
      );
    }
  };

  // Function that randomizes a date idea from the date ideas array //
  const handleRandom = () => {
    showMessage("Randomize! ✨", "user");

    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const randomDateIdea = dateIdeas[randomIndex].idea;
    showMessage(
      `How about <span style="color: #000000; font-weight: bold;">${randomDateIdea}</span>?`,
      "bot"
    );
  };

  // Function that handles the budget level selection //
  const handleBudget = (budgetLevel, setting) => {
    showMessage(`${budgetLevel}! 💰`, "user");
    getDateIdea(setting, budgetLevel);

    // Button for restarting //
    const restartButton = createButton(
      "Not happy with the result? Try again!",
      () => {
        showMessage("Restarting... ⌛️", "user");
        setTimeout(() => {
          // Clear chat and restart the process
          chat.innerHTML = "";
          greetUser();
        }, 1000);
      }
    );

    inputWrapper.innerHTML = "";
    inputWrapper.appendChild(restartButton);
  };

  inputWrapper.innerHTML = "";
  inputWrapper.appendChild(button);
};

setTimeout(greetUser, 1000);
