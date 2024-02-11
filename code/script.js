// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const nameBtn = document.querySelector(".send-btn");
const nameInput = document.getElementById("name-input");
const inputWrapper = document.getElementById("input-wrapper");

// Functions goes here 👇
const handleNameInput = (event) => {
	event.preventDefault();
	const name = nameInput.value;
	showMessage(name, "user");
	nameInput.value = "";
	setTimeout(() => showFoodOptions(name), 1000);
};

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
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
		console.log(message);
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
	showMessage("Hello there, what's your name?", "bot");
};

const showFoodOptions = (name) => {
	//part1 Show the conversation bubble
	showMessage(`Hi, ${name}`, "bot");

	//part2 Show the food options
	inputWrapper.innerHTML = `
	<button id="pizzaBtn">Pizza</button>
	<button id="pastaBtn">Pasta</button>
	<button id="saladBtn">Salad</button>
	`;
};

// Eventlisteners goes here 👇
nameBtn.addEventListener("click", handleNameInput);

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
