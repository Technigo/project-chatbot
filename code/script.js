// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const animalButtons = document.createElement("div");

// If you need any global variables that you can use across different functions, declare them here:
let conversationStarted = false;
// Declare your functions after this comment

// function for talk bubble
const showMessage = (message, sender) => {
  //if changing ${} in <p> will the word message be treated as a string and the content ${message} will not be desplayd
  if (sender === "user") {
    console.log(`The users message: ${message}`);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/icons8-snail-94.png" alt="User"" />
      </section>
    `;

    // checks if sender is bot or user. ("bot", "user")
  } else if (sender === "bot") {
    console.log(`The bots message: ${message}`);
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/icons8-cat-94.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // scrolls chat to the latest input
  chat.scrollTop = chat.scrollHeight;
};

const greetUser = () => {
  showMessage("Hello there, What's your name?", "bot");
};

// Set up your eventlisteners here
nameForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userName = nameInput.value;
  handleUserResponse(`My name is ${userName}`);
  nameInput.value = "";
});
//the users respons and bot-respons
const handleUserResponse = (message) => {
  showMessage(message, "user");
  const userName = nameInput.value;
  setTimeout(() => {
    showMessage(`Nice to meet you ${userName}.`, "bot");
    presentAnimalOptions();
  }, 1000);
};

// Function to present the animal options to the user again
const presentAnimalOptions = () => {
  // Create buttons dynamically with text information
  animalButtons.innerHTML = `
    <button type="button" id="option1">Axolotl</button>
    <button type="button" id="option2">Narwhal</button>
    <button type="button" id="option3">Aye-Aye</button>
  `;

  // Add event listeners to the buttons
  const option1Button = animalButtons.querySelector("#option1");
  option1Button.addEventListener("click", () => {
    handleButtonClick("Animal 1");
  });

  const option2Button = animalButtons.querySelector("#option2");
  option2Button.addEventListener("click", () => {
    handleButtonClick("Animal 2");
  });

  const option3Button = animalButtons.querySelector("#option3");
  option3Button.addEventListener("click", () => {
    handleButtonClick("Animal 3");
  });
  showMessage(
    "Which one of these unusual animals would you like to learn more about?",
    "bot"
  );

  chat.appendChild(animalButtons);
};

const handleButtonClick = (animalName) => {
  if (animalName === "Animal 1") {
    setTimeout(() => {
      showMessage(
        "Axolotl (Ambystoma mexicanum): Also known as the Mexican walking fish, the axolotl is a type of salamander that retains its aquatic juvenile form throughout its life. It's famous for its regenerative abilities and unique appearance, with feathery external gills and a cute smile-like expression.",
        "bot"
      );
    }, 500);
  } else if (animalName === "Animal 2") {
    setTimeout(() => {
      showMessage(
        "Narwhal (Monodon monoceros): The narwhal is often referred to as the unicorn of the sea due to its long, spiral tusk that can grow up to 10 feet in length. It's a medium-sized toothed whale native to Arctic waters and is known for its distinctive and fascinating tusk.",
        "bot"
      );
    }, 500);
  } else if (animalName === "Animal 3") {
    setTimeout(() => {
      showMessage(
        "Aye-Aye (Daubentonia madagascariensis): The aye-aye is a nocturnal lemur found in Madagascar. It's known for its unusually long finger that it uses to tap on tree trunks and extract insects. It's considered a symbol of bad luck in some parts of Madagascar's culture due to its unusual appearance.",
        "bot"
      );
    }, 500);
  } else {
    setTimeout(() => {
      showMessage(
        "That's not a valid answer. Please select one of the options.",
        "bot"
      );
    }, 500);
  }

  // Ask if the user wants to know about the other animals
  setTimeout(() => {
    showMessage("Do you want to know about the other animals as well?", "bot");

    // Create buttons dynamically for the user to choose.
    animalButtons.innerHTML = `
      <button type="button" id="yes">Yes</button>
      <button type="button" id="no">No</button>
    `;

    // Add event listeners to the new buttons
    const yesButton = animalButtons.querySelector("#yes");
    yesButton.addEventListener("click", () => {
      // Handle user's "Yes" choice
      showMessage("Okey, sure!", "bot");
      // Call a function to present the animal options again
      presentAnimalOptions();
    });

    const noButton = animalButtons.querySelector("#no");
    noButton.addEventListener("click", () => {
      // Handle user's "No" choice
      showMessage("Alright! have a nice day!", "bot");
    });

    chat.appendChild(animalButtons);
  }, 1000);
};

// Show the options again

// Ask if the user wants to know about the other animals

// Call greetUser to start the conversation
//greetUser();

// Add code here to progress the app to the next question

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
//setTimeout(functionName, timeToWaitInMilliSeconds);
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500);
