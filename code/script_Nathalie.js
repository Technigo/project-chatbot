// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const nameBtn = document.querySelector(".send-btn");
const nameInput = document.getElementById("name-input");
const inputWrapper = document.getElementById("input-wrapper");

// Functions go here 👇
const handleNameInput = (event) => {
	event.preventDefault();
	const name = nameInput.value;
	showMessage(name, "user");
	nameInput.value = "";
	setTimeout(() => showFoodOptions(name), 1000);
};

const handleFoodOption = (event) => {
	const foodChoice = event.target.id;
	switch (foodChoice) {
		case "pizza":
			showMessage(`Please choose one of the pizza types in the menu.`, "bot");
			inputWrapper.innerHTML = `
                <select id="select">
                    <option value="" disabled selected>--SELECT ONE ITEM--</option>
                    <option value="margherita" name="Pizza Margherita">Margherita</option>
                    <option value="funghi" name="Pizza Funghi">Funghi</option>
                    <option value="pepperoni" name="Pizza Pepperoni">Pepperoni</option>
                </select>
            `;
			break;
		case "pasta":
			showMessage(`Please choose one of the pasta dishes in the menu.`, "bot");
			inputWrapper.innerHTML = `
                <select id="select">
                    <option value="" disabled selected>--SELECT ONE ITEM--</option>
                    <option value="carbonara" name="Spaghetti Carbonara">Spaghetti Carbonara</option>
                    <option value="pesto" name="Fussili Pesto">Fussili Pesto</option>
                    <option value="bolognese" name="Spaghetti Bolognese">Spaghetti Bolognese</option>
                </select>
            `;
			break;
		case "salad":
			showMessage(`Please choose one of the salads in the menu.`, "bot");
			inputWrapper.innerHTML = `
                <select id="select">
                    <option value="" disabled selected>--SELECT ONE ITEM--</option>
                    <option value="ceaser" name="Ceaser Salad">Ceaser Salad</option>
                    <option value="chef" name="Chef Salad">Chef Salad</option>
                    <option value="greek" name="Greek Salad">Greek Salad</option>
                </select>
            `;
			break;
	}
	console.log(foodChoice);

	// Event listener for select dropdown
	const select = document.getElementById("select");
	select.addEventListener("change", () => {
		showMessage(`I'd like ${select.name}`, "user");
	});
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

	chat.scrollTop = chat.scrollHeight;
};

// A function to start the conversation
const greetUser = () => {
	showMessage("Hello there, what's your name?", "bot");
};

const showFoodOptions = (name) => {
	// Show the conversation bubble
	showMessage(`Hi, ${name}! What would you like to order?`, "bot");

	// Show the food options
	inputWrapper.innerHTML = `
        <button id="pizza" class="foodBtn" type="button">Pizza</button>
        <button id="pasta" class="foodBtn" type="button">Pasta</button>
        <button id="salad" class="foodBtn" type="button">Salad</button>
    `;

	// Add event listeners to food buttons
	const foodButtons = document.querySelectorAll(".foodBtn");
	foodButtons.forEach((button) => {
		button.addEventListener("click", handleFoodOption);
	});
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
