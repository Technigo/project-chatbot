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

// showFoodOptions
// handleFoodOption
// showDishSize
// showPrice

// A function to start the conversation
const greetUser = () => {
	showMessage("Hello there, what's your name?", "bot");
};

const showFoodOptions = (name) => {
	//part1 Show the conversation bubble
	showMessage(`Hi, ${name}. What would you like to order?`, "bot");

	//part2 Show the food options
	inputWrapper.innerHTML = `
	<button id="pizzaBtn">Pizza</button>
	<button id="pastaBtn">Pasta</button>
	<button id="saladBtn">Salad</button>
	`;
};

function handleFoodOption() {
	const divFoodOptions = document.getElementById("foodOptions");
	divFoodOptions.innerHTML = `
  <p>Choose your piza:</p>
  <button id="pepperoniBtn">Pepperoni</button>
	<button id="funghiBtn">Funghi</button>`;
}

// const handleFoodOption = (event) => {
// 	const food = document.getElementById("pizzaBtn").value;
// 	console.log(food);
// };

// Eventlisteners goes here 👇
nameBtn.addEventListener("click", handleNameInput);
document.getElementById("pizzaBtn").addEventListener("click", handleFoodOption);
// document.getElementById("pastaBtn").addEventListener("click");
// document.getElementById("saladBtn").addEventListener("click");

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
setTimeout(greetUser, 1000);
