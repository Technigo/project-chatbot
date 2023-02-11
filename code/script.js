const chat = document.getElementById("chat");
const form = document.getElementById("form");
const nameGreeting = document.getElementById("name-greeting");
const inputWrapper = document.getElementById("input-wrapper");

// Creating form elements:
const typeOfFoodHtml = () => {
  inputWrapper.innerHTML = `
  <button id="donut" value="Donut" type="button"> Donut </button>
  <button id="croissant"  value="Croissant"> Croissant </button>
  <button id="sponge-cake"  value="Sponge Cake"> Sponge Cake </button>
  `;
};

const typeOfFlavourHtml = (flavour) => {
  if (flavour === "donut") {
    inputWrapper.innerHTML = `
  <select name="flavours" id="flavours">
  <option> Select a flavour...</option>
  <option id="choco">Chocolate</option>
  <option id="vanilla">Vanilla</option>
  <option id="oreo">Oreo</option>
</select>
  `;
  } else if (flavour === "croissant") {
    inputWrapper.innerHTML = `
  <select name="flavours" id="flavours">
  <option> Select a flavour...</option>
  <option id="pistachio">Pistachio</option>
  <option id="nutella">Nutella</option>
  <option id="cream">Cream</option>
</select>
  `;
  } else if (flavour === "sponge-cake") {
    inputWrapper.innerHTML = `
  <select name="flavours" id="flavours" required>
  <option> Select a flavour...</option>
  <option id="orange">Orange sauce</option>
  <option id="banana">Banana</option>
  <option id="pear">Pear</option>
</select>
  `;
  }
};

const shippingMethodHtml = () => {
  console.log("shipping method");
  inputWrapper.innerHTML = `
  <button id="delivery" value="Delivery" type="button"> Delivery </button>
  <button id="pickup"  value="Pickup" type="button"> Pickup </button>
  `;
};

const deliveryAddress = () => {
  console.log("delivery address");
  inputWrapper.innerHTML = `
  <input id="delivery-address-text" type="text" required />
  <button id="delivery-address-btn" type="button">Send</button>
  `;
};

const orderConfirmationHtml = () => {
  inputWrapper.innerHTML = `
  <button id="confirm" value="Confirm" type="button"> Confirm </button>
  <button id="cancel"  value="Cancel" type="button"> Cancel </button>
  `;
};

// Creating chat bubble for bot & user:
const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.jpg" alt="User" />  
      </section>
    `;
    audio("assets/chat-ping.mp3");
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.jpg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
    audio("assets/chat-ping.mp3");
  }

  chat.scrollTop = chat.scrollHeight;
};
// audio
const audio = (url) => {
  const sound = new Audio(url);
  sound.play();
};
// validation
const validationAddress = (userAddress) => {
  if (userAddress === "") {
    setTimeout(
      () => showMessage("Ops! Please fill out the field!", "bot"),
      1000
    );
    audio("assets/Error-sound.mp3");
  } else {
    setTimeout(() => showMessage(userAddress, "user"), 500);
    setTimeout((inputWrapper.innerHTML = ``), 1000);
    setTimeout(() => showMessage("Please confirm your order!", "bot"), 1000);
    setTimeout(orderConfirmationHtml, 1500);
  }
};
const validationName = (userName) => {
  if (userName === "") {
    setTimeout(
      () => showMessage("Ops! Please fill out the field!", "bot"),
      1000
    );
    audio("assets/Error-sound.mp3");
  } else {
    showMessage(userName, "user");
    userName = "";
    setTimeout(
      () =>
        showMessage(
          `Nice to meet you ${userName}! What type of pastry would you like to order?`,
          "bot"
        ),
      1000
    );
    setTimeout(typeOfFoodHtml, 2000);
  }
};

// Greeting:
const greetUser = () => {
  showMessage("Hello there, What's your name?", "bot");
};
setTimeout(greetUser, 1000);

//Next steps:
const eventHandler = (e) => {
  e.preventDefault();
  const selectedValue = e.target;
  console.log(selectedValue);

  switch (selectedValue.id) {
    // Step1
    case "send-btn":
      validationName(nameGreeting.value);
      break;

    // Step2
    case "donut":
    case "croissant":
    case "sponge-cake":
      setTimeout(() => showMessage(selectedValue.value, "user"), 1000);
      inputWrapper.innerHTML = ``;
      setTimeout(() => showMessage("Select a flavour!", "bot"), 1500);
      setTimeout(() => typeOfFlavourHtml(selectedValue.id), 2000);
      break;

    // Step3
    case "flavours":
      document.getElementById("flavours").addEventListener("change", () => {
        setTimeout(() => showMessage(selectedValue.value, "user"), 1000);
        inputWrapper.innerHTML = ``;
        setTimeout(
          () =>
            showMessage(
              `Would you like to pick up your pastry in our shop or have it delivered to you?`,
              "bot"
            ),
          1500
        );
        setTimeout(() => shippingMethodHtml(), 1500);
      });
      break;

    // Step4a
    case "delivery":
      setTimeout(() => showMessage(selectedValue.value, "user"), 1000);
      inputWrapper.innerHTML = ``;
      setTimeout(
        () =>
          showMessage(
            "Amazing! I will just need your delivery address!",
            "bot"
          ),
        1000
      );
      setTimeout(deliveryAddress, 1000);
      break;
    // Step4a - sub step
    case "delivery-address-btn":
      const userAddress = document.getElementById("delivery-address-text");
      validationAddress(userAddress.value);
      console.log(userAddress.value);
      break;
    //Step4b
    case "pickup":
      setTimeout(() => showMessage(selectedValue.value, "user"), 1000);
      inputWrapper.innerHTML = ``;
      setTimeout(
        () =>
          showMessage(
            "You are welcome to pick up your order at our shop in Stockholm!",
            "bot"
          ),
        1000
      );
      setTimeout(
        () => showMessage("Now please confirm your order!", "bot"),
        1500
      );
      setTimeout(orderConfirmationHtml, 1000);
      break;

    // Step5
    case "confirm":
      setTimeout(() => showMessage(`Thank you for your order!`, "bot"), 1000);
      inputWrapper.innerHTML = ``;
      break;

    case "cancel":
      setTimeout(
        () =>
          showMessage(
            "I am sorry that you have changed your mind! You are welcome back any time!",
            "bot"
          ),
        1000
      );
      inputWrapper.innerHTML = ``;
      break;
  }
};

//Click event:
form.addEventListener("click", eventHandler);
