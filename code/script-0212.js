const bubbleAudio = new Audio();
bubbleAudio.src = "./assets/bubble-sound.wav";

const robotAudio = new Audio();
robotAudio.src = "./assets/robot-sound.wav";
robotAudio.volume = 0.2;

// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const nameBtn = document.querySelector(".send-btn");
const nameInput = document.getElementById("name-input");
const inputWrapper = document.getElementById("input-wrapper");

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

  } else (sender === "bot") {
    robotAudio.play();
    robotAudio.volume = 0.2;
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
	/* This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box */
	chat.scrollTop = chat.scrollHeight;
};

//START OF THE ACTUAL CHAT
// Asking for name
const greetUser = () => {
	showMessage("Hello there, what's your name?", "bot");
};
setTimeout(greetUser, 1000);

const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  showMessage(name, "user");
  nameInput.value = "";
  setTimeout(() => showMainFood(name), 1000);
};

nameBtn.addEventListener("click", handleNameInput);
nameBtn.addEventListener("click", () => {
	bubbleAudio.play();
});


//
//
//
//Main Options
const showMainFood = (name) => {
  //part1 Show the conversation bubble
  showMessage(`Hi, ${name}. What would you like to order?`, "bot");

  //part2 Show the main options
  inputWrapper.innerHTML = `
	<button id="pizzaBtn" value="Pizza" onclick="bubbleAudio.play()" >Pizza</button>
	<button id="pastaBtn" value="Pasta" onclick="bubbleAudio.play()">Pasta</button>
	<button id="saladBtn" value="Salad" onclick="bubbleAudio.play()">Salad</button>
	`;

	const pizzaBtn = document.getElementById("pizzaBtn");
	const pastaBtn = document.getElementById("pastaBtn");
	const saladBtn = document.getElementById("saladBtn");


  pizzaBtn.addEventListener("click", showUserMainChoice);
  pastaBtn.addEventListener("click", showUserMainChoice);
  saladBtn.addEventListener("click", showUserMainChoice);

  pizzaBtn.addEventListener("click", (event) =>
    setTimeout(() => showSubOptions(event), 1000)
  );
  pastaBtn.addEventListener("click", (event) =>
    setTimeout(() => showSubOptions(event), 1000)
  );
  saladBtn.addEventListener("click", (event) =>
    setTimeout(() => showSubOptions(event), 1000)
  );
};

//
//
//
//Show user's main choice
const showUserMainChoice = (event) => {
  showMessage(`${event.target.value}`, `user`);
};

//
//
//
//Show bot's reply and sub options
const showSubOptions = (event) => {
  if (event.target.value === "Pizza") {
    inputWrapper.innerHTML = `
                <select id="select" onchange="bubbleAudio.play()">
                    <option value="" disabled selected>--SELECT ONE ITEM--</option>
                    <option value="Margherita" name="pizza-Margherita" id="margherita">Margherita</option>
                    <option value="Funghi" name="pizza-Funghi" id="funghi">Funghi</option>
                    <option value="Pepperoni" name="pizza-Pepperoni" id="pepperoni">Pepperoni</option>
                </select>
            `;

  } else if (event.target.value === "Pasta") {
    inputWrapper.innerHTML = `
            <select id="select" onchange="bubbleAudio.play()">
            <option value="" disabled selected>--SELECT ONE ITEM--</option>
            <option value="Spaghetti Carbonara" name="Spaghetti-Carbonara" id="carbonara">Spaghetti Carbonara</option>
            <option value="Fussili Pesto" name="Fussili-Pesto" id="pesto">Fussili Pesto</option>
            <option value="Spaghetti-Bolognese" name="Spaghetti-Bolognese" id="bolognese">Spaghetti Bolognese</option>
          </select>`;
  } else {
    inputWrapper.innerHTML = `
        <select id="select" onchange="bubbleAudio.play()">
        <option value="" disabled selected>--SELECT ONE ITEM--</option>
        <option value="Ceaser Salad" name="Ceaser-Salad" id="ceaser">Ceaser Salad</option>
        <option value="Chef Salad" name="Chef-Salad" id="chef">Chef Salad</option>
        <option value="Greek Salad" name="Greek-Salad" id="greek">Greek Salad</option>
    </select>
	`;

  }

  showMessage(
    `You ordered ${event.target.value}! Choose one from our menu.`,
    `bot`
  );

  const subOption = document.getElementById("select");

  subOption.addEventListener("change", showUserSubChoice);
  subOption.addEventListener("change", (event) =>
    setTimeout(() => showSizeOptions(event), 1000)
  );
};

const showUserSubChoice = (event) => {
  showMessage(`${event.target.value}`, `user`);
};

const showSizeOptions = (event) => {
  showMessage(
    `You ordered ${event.target.value}! Which size would you like to have?`,
    `bot`
  );

  inputWrapper.innerHTML = `
  <button id="bigBtn" value="Big" onclick="bubbleAudio.play()">Big</button>
  <button id="smallBtn" value="Small" onclick="bubbleAudio.play()">Small</button>
  `;

  const bigBtn = document.getElementById("bigBtn");
  const smallBtn = document.getElementById("smallBtn");

  bigBtn.addEventListener("click", userConfirm);
  smallBtn.addEventListener("click", userConfirm);
};
//
//
//
//Choosing the size of the food
//+bot's responce
//+ cofirmation button

const userConfirm = (event) => {
  //part1 show what the user chose in the conversation bubble
  showMessage(`${event.target.value}`, `user`);

  //part2 the bot replys and show yes/no buttons
  let price;
  if (event.target.value === "Big") {
    price = 15;
  } else {
    price = 10;
  }

  setTimeout(() => {
    showMessage(
      `One ${event.target.value} sized meal will be prepared for you! That will be ${price}€. Are you sure you want to order this?`,
      `bot`
    );
  }, 1000);

  inputWrapper.innerHTML = `
  
	<button id="yes" value="yes" onclick="bubbleAudio.play()">Yes</button>
	<button id="no" value="no" onclick="bubbleAudio.play()">No</button>
	`;

	//part3 add event listner to the yes/no buttons
	const yesBtn = document.getElementById("yes");
	const noBtn = document.getElementById("no");

	yesBtn.addEventListener("click", handleConfirm);
	noBtn.addEventListener("click", handleConfirm);
};

//
//
//create the functions for the yes/no buttons
const handleConfirm = (event) => {

  const usersConfirmationChoice = event.target.value;

  switch (usersConfirmationChoice) {
    case "yes":
      showMessage(`Yes!`, `user`);
      setTimeout(() => {
        showMessage(
          `Thank you for your order! Your meal will be delivered in 40mins.`,
          `bot`
        );
      }, 1000);
      break;

    case "no":
      showMessage(`No!`, `user`);
      setTimeout(() => {
        showMessage(
          `Alright. Thank you for your visit! See you next time!`,
          `bot`
        );
      }, 1000);
      break;

    default:
      setTimeout(() => {
        showMessage(
          `Hmm..something seems to be wrong. Please order again!`,
          `bot`
        );
      }, 1000);
      break;
  }

  //make the yes/no button disappear after the user clicked
  inputWrapper.innerHTML = "";
};
