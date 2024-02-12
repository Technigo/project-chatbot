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

//
//
//
//Main Food Options
const showFoodOptions = (name) => {
  //part1 Show the conversation bubble
  showMessage(`Hi, ${name}`, "bot");

  //part2 Show the food options
  inputWrapper.innerHTML = `
	<button id="pizzaBtn" value="pizza">Pizza</button>
	<button id="pastaBtn" value="pasta">Pasta</button>
	<button id="saladBtn" value="salad">Salad</button>
	`;

  const pizzaBtn = document.getElementById("pizzaBtn");
  const pastaBtn = document.getElementById("pastaBtn");
  const saladBtn = document.getElementById("saladBtn");

  pizzaBtn.addEventListener("click", handleFoodOptions);
  pastaBtn.addEventListener("click", handleFoodOptions);
  saladBtn.addEventListener("click", handleFoodOptions);
};

//
//
//
//Sub Food Options
const handleFoodOptions = (event) => {
  event.preventDefault();
  console.log(event.target.value);

  //part1 Define the sub menu
  const pizzaMenu = () => {
    inputWrapper.innerHTML = `
	  <button id="subBtn-1" value="napolitana">Napolitana</button>
	  <button id="subBtn-2" value="hawaian">Hawaian</button>
	  <button id="subBtn-3" value="pepperoni">Pepperoni</button>
	  `;
  };

  const pastaMenu = () => {
    inputWrapper.innerHTML = `
	<select name="pasta-menu" id="pasta-menu">
	  <option value="Spaghetti-Carbonara">Spaghetti Carbonara</option>
	  <option value="Fettuccine-Alfredo">Fettuccine Alfredo</option>
	  <option value="Cheesy-Tortellini">Cheesy Tortellini</option>
	</select>
	`;
  };

  const saladMenu = () => {
    inputWrapper.innerHTML = `
	<button id="subBtn-1" value="salad">Salad</button>
	`;
    //unfinished
  };

  //part2 Check which button did user click
  const userSubOption = event.target.value;
  let mainFood;

  switch (userSubOption) {
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

  //part3 Show the conversation bubble
  showMessage(`${mainFood}`, `user`);
  const confirmMainFood = () => {
    showMessage(`You ordered ${mainFood}! Choose one from our menu.`, `bot`);
  };
  setTimeout(confirmMainFood, 1000);
};
