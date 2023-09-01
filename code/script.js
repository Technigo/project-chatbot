// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const animalButtons = document.createElement("div");

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

// function for talk bubble
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the  case it inserts an html senction inside the chat with the posted message
  //if changing ${} in <p> will the word message be treated as a string and the content ${message} will not be desplayd

  if (sender === "user") {
    console.log(`The users message: ${message}`);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // checks if sender is bot or user. ("bot", "user")
  } else if (sender === "bot") {
    console.log(`The bots message: ${message}`);
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // scrolls chat to the latest input
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
const greetUser = () => {
  showMessage("Hello there, What's your name?", "bot");
};

// Set up your eventlisteners here

//the users respons and bot-respons
const handleUserResponse = (message) => {
  showMessage(message, "user");
  const userName = nameInput.value;
  setTimeout(() => {
    showMessage(`Nice to meet you ${userName}.`, "bot");
    showMessage(
      `Which one of these unusual animals would you like to learn more about?`,
      "bot"
    );

    // Create buttons dynamically with text information
    animalButtons.innerHTML = `
      <button type="button" id="option1">Axolotl</button>
      <button type="button" id="option2">Narwhal</button>
      <button type="button" id="option3">Aye-Aye</button>
    `;

    // Add event listeners to the buttons
    const option1Button = animalButtons.querySelector("#option1");
    option1Button.addEventListener("click", () => {
      handleButtonClick("Animal 1"); // Call the function with the selected animal name
    });

    const option2Button = animalButtons.querySelector("#option2");
    option2Button.addEventListener("click", () => {
      handleButtonClick("Animal 2"); // Call the function with the selected animal name
    });

    const option3Button = animalButtons.querySelector("#option3");
    option3Button.addEventListener("click", () => {
      handleButtonClick("Animal 3"); // Call the function with the selected animal name
    });

    chat.appendChild(animalButtons);
  }, 1000);
};

nameForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userName = nameInput.value;
  handleUserResponse(`My name is ${userName}`);
  nameInput.value = "";
});

const handleButtonClick = (animalName) => {
  if (animalName === "Animal 1") {
    showMessage(
      "Axolotl (Ambystoma mexicanum): Also known as the Mexican walking fish, the axolotl is a type of salamander that retains its aquatic juvenile form throughout its life. It's famous for its regenerative abilities and unique appearance, with feathery external gills and a cute smile-like expression.",
      "bot"
    );
  } else if (animalName === "Animal 2") {
    showMessage(
      "Narwhal (Monodon monoceros): The narwhal is often referred to as the unicorn of the sea due to its long, spiral tusk that can grow up to 10 feet in length. It's a medium-sized toothed whale native to Arctic waters and is known for its distinctive and fascinating tusk.",
      "bot"
    );
  } else if (animalName === "Animal 3") {
    showMessage(
      "Aye-Aye (Daubentonia madagascariensis): The aye-aye is a nocturnal lemur found in Madagascar. It's known for its unusually long finger that it uses to tap on tree trunks and extract insects. It's considered a symbol of bad luck in some parts of Madagascar's culture due to its unusual appearance.",
      "bot"
    );
  } else {
    showMessage("Invalid selection.", "bot");
  }
};

// Add event listeners to the buttons
//

// Add code here to progress the app to the next question

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
//setTimeout(functionName, timeToWaitInMilliSeconds);
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500);
