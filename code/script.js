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
  <option>👇 Select a flavour...</option>
  <option id="choco">Chocolate</option>
  <option id="vanilla">Vanilla</option>
  <option id="oreo">Oreo</option>
</select>
  `;
  } else if (flavour === "croissant") {
    inputWrapper.innerHTML = `
  <select name="flavours" id="flavours">
  <option>👇 Select a flavour...</option>
  <option id="pistachio">Pistachio</option>
  <option id="nutella">Nutella</option>
  <option id="cream">Cream</option>
</select>
  `;
  } else if (flavour === "sponge-cake") {
    inputWrapper.innerHTML = `
  <select name="flavours" id="flavours">
  <option>👇 Select a flavour...</option>
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
  <input id="delivery-address-text" type="text" />
  <button id="delivery-address-btn" type="button">Send</button>
  `;
};

const orderConfirmationHtml = () => {
  inputWrapper.innerHTML = `
  <button id="confirm" value="Confirm" type="button"> Confirm </button>
  <button id="cancel"  value="Cancel" type="button"> Cancel </button>
  `;
};

// This function will add a chat bubble in the correct place based on who the sender is
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

  chat.scrollTop = chat.scrollHeight;
};

// Greeting - Question 1:
const greetUser = () => {
  showMessage("Hello there, What's your name?", "bot");
};
setTimeout(greetUser, 1000);

//Next Questions:
const eventHandler = (e) => {
  e.preventDefault();
  const selectedValue = e.target;
  console.log(selectedValue);

  //Question 2:
  if (selectedValue.id === "send-btn") {
    showMessage(nameGreeting.value, "user");
    nameGreeting.value = "";
    setTimeout(
      () =>
        showMessage(
          `Nice to meet you ${nameGreeting.value}! What type of pastry would you like to order?`,
          "bot"
        ),
      1000
    );
    setTimeout(typeOfFoodHtml, 2000);
  }

  // Question 3:
  else if (
    selectedValue.id === "donut" ||
    selectedValue.id === "croissant" ||
    selectedValue.id === "sponge-cake"
  ) {
    setTimeout(() => showMessage(selectedValue.value, "user"), 1000);
    inputWrapper.innerHTML = ``;
    setTimeout(() => showMessage("Select a flavour!", "bot"), 1500);
    setTimeout(() => typeOfFlavourHtml(selectedValue.id), 2000);
  }

  //Question 4:
  else if (selectedValue.id === "flavours") {
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
  }

  //Question 5:
  else if (selectedValue.id === "delivery" || selectedValue.id === "pickup") {
    setTimeout(() => showMessage(selectedValue.value, "user"), 1000);
    inputWrapper.innerHTML = ``;
    if (selectedValue.id === "delivery") {
      setTimeout(
        () =>
          showMessage(
            "Amazing! I will just need your delivery address!",
            "bot"
          ),
        1000
      );
      setTimeout(deliveryAddress, 1000);
    }

    //Question 6:
    else {
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
    }
  }

  //Question 7:
  else if (selectedValue.id === "delivery-address-btn") {
    const userAddress = document.getElementById("delivery-address-text");
    setTimeout(() => showMessage(userAddress.value, "user"), 1000);
    inputWrapper.innerHTML = ``;
    setTimeout(() => showMessage("Please confirm your order!", "bot"), 1000);
    setTimeout(orderConfirmationHtml, 1500);
  }

  //Last message
  else if (selectedValue.id === "confirm" || selectedValue.id === "cancel") {
    if (selectedValue.id === "confirm") {
      setTimeout(() => showMessage(`Thank you for your order!`, "bot"), 1000);
      inputWrapper.innerHTML = ``;
    } else {
      setTimeout(() => showMessage("See you at another time!", "bot"), 1000);
      inputWrapper.innerHTML = ``;
    }
  }
};

//Click event:
form.addEventListener("click", eventHandler);
