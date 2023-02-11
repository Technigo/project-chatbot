// Variables that point to selected DOM elements
const chat = document.getElementById("chat");

// If you need any global variables that you can use across different functions, declare them here:
const nameForm = document.getElementById("name-form");
const inputWrapper = document.getElementById("input-wrapper");
const nameInput = document.getElementById("name-input");
const sendButton = document.querySelector(".send-btn");
const stew = document.getElementById("#stew");

let usersName, classChoice, questChoice, travelChoice;
let audio = new Audio("assets/audio.mp3");

const botIsWriting = () => {
  chat.innerHTML += "Bot is wrting...";
};

const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/knight.png" alt="User" />  
      </section>
    `;
    audio.play();
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/wizard.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
    audio.play();
  } else if (sender === "story") {
    chat.innerHTML += `
      <section class="story-msg">
        <img src="assets/smoke.png" alt="story" />
        <div class="bubble story-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
    audio.play();
  }
  // Makes the chat scroll to the last message
  chat.scrollTop = chat.scrollHeight;
};

const backgroundStory = () => {
  showMessage(
    "In a magical land far, far away, a figure arises from the shadows and walks into a tavern. His eyes are dark, and he walks up to the innkeeper. He calls the innkeeper to him and smiles like he is meeting an old friend...",
    "story"
  );
  showMessage("The innkeeper smiles back and says:", "story");
  setTimeout(greetUser, 1000);
};

const greetUser = () => {
  showMessage("Hello there, what's your name traveller?", "bot");
};

// Set up your eventlisteners here
sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  usersName = nameInput.value;
  if (usersName === "") {
    showMessage(
      "What did you say? I could not hear you. Please tell me your name, friend",
      "bot"
    );
  } else {
    showMessage(usersName, "user");
    setTimeout(() => askNextQuestion(), 1000);
  }
});

function askNextQuestion() {
  setTimeout(
    () =>
      showMessage(
        `${usersName}? I have heard that name before; what race are you?`,
        "bot"
      ),
    1000
  );
  nameForm.remove();
  /*  */
  setTimeout(() => showClassOptions(), 1000);
}

const showClassOptions = () => {
  inputWrapper.innerHTML += `
  <select id="class">
  <option value="human">Human</option>
  <option value="elf">Elf</option>
  <option value="dwarf">Dwarf</option>
  <option value="orc">Orc</option>
</select>

<button id="options-btn" type="send">Chose your class</button>
  `;
  const optionButton = document.getElementById("options-btn");
  const classSelect = document.getElementById("class");
  optionButton.addEventListener("click", (e) => {
    e.preventDefault();
    classChoice = classSelect.value;
    classSelect.remove();
    optionButton.remove();
    showMessage(`Im a brave ${classChoice}`, "user");

    setTimeout(() => {
      showMessage(
        `Oh! So you are the famous ${usersName} the adventuring ${classChoice}?? ...Interesting...`,
        "bot"
      );
      setTimeout(() => {
        showMessage(
          "...I might have an excellent adventure for you, and there might be a big reward...",
          "bot"
        );
        questPicker();
      }, 2000);
    }, 1000);
  });
};

const questPicker = () => {
  inputWrapper.innerHTML += `
  <button value="save-the-queen" id="quest-queen">Save the Queen</button>
  <button value="find-the-arc" id="quest-arc">Find the lost Arc</button>`;
  const questQueenButton = document.getElementById("quest-queen");
  const questArcButton = document.getElementById("quest-arc");
  questQueenButton.addEventListener("click", () => {
    questChoice = questQueenButton.value;
    questQueenButton.remove();
    questArcButton.remove();
    showMessage(`I want to save the queen`, "user");
    setTimeout(() => {
      showMessage(
        "Oh, thats a great adventure. The queen is in a castle far away",
        "bot"
      );
      setTimeout(() => {
        showMessage("Would you like me to teleport you there?", "bot");
        travelPicker();
      }, 1000);
    });
  });
  questArcButton.addEventListener("click", () => {
    questChoice = questArcButton.value;
    questQueenButton.remove();
    questArcButton.remove();
    showMessage(`I want to find the Arc`, "user");
    setTimeout(() => {
      showMessage(
        `Oh, the great Arc of Boromir! Great choice ${classChoice}. The Arc is deep in the lake of Do'rem`,
        "bot"
      );
      setTimeout(() => {
        showMessage("Would you like me to teleport you there?", "bot");
        travelPicker(), 2000;
      }, 2000);
    }, 1000);
  });
};

const travelPicker = () => {
  inputWrapper.innerHTML += `
  <button value="yes" id="quest-queen">Yes</button>
  <button value="no" id="quest-arc">No</button>`;
  const yesButton = document.getElementById("quest-queen");
  const noButton = document.getElementById("quest-arc");
  yesButton.addEventListener("click", () => {
    travelChoice = yesButton.value;
    yesButton.remove();
    noButton.remove();
    showMessage(`${travelChoice}, teleport me good sir!`, "user");
    endGame();
  });
  noButton.addEventListener("click", () => {
    travelChoice = noButton.value;
    yesButton.remove();
    noButton.remove();
    showMessage(`${travelChoice}...`, "user");
    endGame();
  });
};

const endGame = () => {
  setTimeout(() => {
    //Func
    if (questChoice === "save-the-queen" && travelChoice === "yes") {
      showMessage(
        `The magical innkeeper teleports ${usersName} to the foreign land of Terra'mara where the big castle lies. It's an impressive building with high walls. In front of the castle, an older woman meets you: The Queen. She thanks you for saving her, but she doesn't need to be saved. You walk all the way home. Where is a wizard when you need one?`,
        "story"
      );
      setTimeout(() => {
        showMessage("You lose the game...", "story");
      }, 2000);
    } else if (questChoice === "save-the-queen" && travelChoice === "no") {
      showMessage(
        `${usersName} say "hell no!" and decide to skip this andventure altogether and start a pigfarm`,
        "story"
      );
      setTimeout(() => {
        showMessage("You lose the game...", "story");
      }, 2000);
    } else if (questChoice === "find-the-arc" && travelChoice === "yes") {
      showMessage(
        `The wizard teleports you to the lake of Do'rem, where you find the Arc on the shoreline. Suddenly you are hit by an arrow and die a slow and painful death`,
        "story"
      );
      setTimeout(() => {
        showMessage("You lose the game...", "story");
      }, 2000);
    } else if (questChoice === "find-the-arc" && travelChoice === "no") {
      showMessage(
        `${usersName} say "hell no!" and decide to skip this andventure altogether and start a pigfarm`,
        "story"
      );
      setTimeout(() => {
        showMessage("You lose the game...", "story");
      }, 2000);
    }
  }, 1000);
};

setTimeout(() => backgroundStory(), 1000);
