const bubbleAudio = new Audio();
bubbleAudio.src = "./assets/bubble-sound.wav";

const robotAudio = new Audio();
robotAudio.src = "./assets/robot-sound.wav";

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
  } else if (sender === "bot") {
    robotAudio.play();

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

setTimeout(greetUser, 1000);

const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  showMessage(name, "user");
  nameInput.value = "";
  setTimeout(() => showFoodOptions(name), 1000);
};

nameBtn.addEventListener("click", handleNameInput);
nameBtn.addEventListener("click", () => {
  bubbleAudio.play();
});

//Main Food Options
const showFoodOptions = (name) => {
  //part1 Show the conversation bubble
  showMessage(`Hi, ${name}`, "bot");

  //part2 Show the food options
  inputWrapper.innerHTML = `
	<button id="pizzaBtn" value="pizza" onclick="bubbleAudio.play()" >Pizza</button>
	<button id="pastaBtn" value="pasta" onclick="bubbleAudio.play()">Pasta</button>
	<button id="saladBtn" value="salad" onclick="bubbleAudio.play()">Salad</button>
	`;

  const pizzaBtn = document.getElementById("pizzaBtn");
  const pastaBtn = document.getElementById("pastaBtn");
  const saladBtn = document.getElementById("saladBtn");

  pizzaBtn.addEventListener("click", handleFoodOptions);
  pastaBtn.addEventListener("click", handleFoodOptions);
  saladBtn.addEventListener("click", handleFoodOptions);
};

//Sub Food Options
const handleFoodOptions = (event) => {
  event.preventDefault();

  //part1 Define the sub menu
  const pizzaMenu = () => {
    inputWrapper.innerHTML = `
                <select id="select" onchange="bubbleAudio.play()">
                    <option value="" disabled selected>--SELECT ONE ITEM--</option>
                    <option value="margherita" name="pizza-Margherita" id="margherita">Margherita</option>
                    <option value="funghi" name="pizza-Funghi" id="funghi">Funghi</option>
                    <option value="pepperoni" name="pizza-Pepperoni" id="pepperoni">Pepperoni</option>
                </select>
            `;
  };

  const pastaMenu = () => {
    inputWrapper.innerHTML = `
        <select id="select" onchange="bubbleAudio.play()">
        <option value="" disabled selected>--SELECT ONE ITEM--</option>
        <option value="carbonara" name="Spaghetti-Carbonara" id="carbonara">Spaghetti Carbonara</option>
        <option value="pesto" name="Fussili-Pesto" id="pesto">Fussili Pesto</option>
        <option value="bolognese" name="Spaghetti-Bolognese" id="bolognese">Spaghetti Bolognese</option>
    </select>
	`;
  };

  const saladMenu = () => {
    inputWrapper.innerHTML = `
        <select id="select" onchange="bubbleAudio.play()">
        <option value="" disabled selected>--SELECT ONE ITEM--</option>
        <option value="ceaser" name="Ceaser-Salad" id="ceaser">Ceaser Salad</option>
        <option value="chef" name="Chef-Salad" id="chef">Chef Salad</option>
        <option value="greek" name="Greek-Salad" id="greek">Greek Salad</option>
    </select>
	`;
  };

  //part2 Check which button did user click
  const userMainOption = event.target.value;
  let mainFood;

  switch (userMainOption) {
    case "pizza":
      mainFood = "pizza";
      setTimeout(pizzaMenu, 1000);
      break;

    case "pasta":
      mainFood = "pasta";
      setTimeout(pastaMenu, 1000);
      break;

    case "salad":
      mainFood = "salad";
      setTimeout(saladMenu, 1000);
      break;

    default:
      showMessage(`Something seems to be wrong!`, "bot");
      break;
  }

  console.log(mainFood);

  //part3 Show the conversation bubble
  showMessage(`${mainFood}`, `user`);
  const confirmMainFood = () => {
    showMessage(`You ordered ${mainFood}! Choose one from our menu.`, `bot`);
  };
  setTimeout(confirmMainFood, 1000);
};

//
//
//From selecting sub food to
//asking for the size of the menu + showing the size option
const subFood = document.getElementById("select");

console.log(select.value);

//
//
//
//Choosing the size of the food
//+bot's responce
//+ cofirmation button
const userConfirm = () => {
  //part1 show what the user chose in the conversation bubble
  showMessage(`size-value`, `user`);

  //part2 the bot replys and show yes/no buttons
  setTimeout(() => {
    showMessage(
      `One ? sized meal will be prepared for you! That will be €. Are you sure you want to order this?`,
      `user`
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
          `Thank you for your order! Your meal will be delivered in 40mins`,
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
};
