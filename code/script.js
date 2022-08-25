// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const popup = document.getElementById("popup");

//Buttons:
const allButtons = document.getElementsByTagName("button");
const coneBtn = document.getElementById("cone-btn");
const cupBtn = document.getElementById("cup-btn");

// const form = document.getElementById("form");

// If you need any global variables that you can use across different functions, declare them here:

const customerOrder = {
  type: "",
  serving: "",
  flavors: [],
  sprinkles: "",
  phone: "",
  getReceipt: () => {},
};

// Declare your functions after this comment

// Disabling all buttons after first click
const disableBtnAfterClick = () => {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].disabled = true;
  }
};

//Question 2
const chooseIceCream = () => {
  const iceCreamBtn = document.getElementById("ice-cream-btn");
  const softIceCreamBtn = document.getElementById("soft-ice-cream-btn");

  iceCreamBtn.addEventListener("click", () => {
    customerOrder.typeOfIceCream = "Ice Cream";

    showMessage("Ice Cream", "user");
    disableBtnAfterClick();
    setTimeout(() => question3Flavors(), 1000);
  });

  softIceCreamBtn.addEventListener("click", () => {
    customerOrder.typeOfIceCream = "Soft Ice Cream";

    showMessage("Soft Ice Cream", "user");
    disableBtnAfterClick();
    setTimeout(() => question3Sprinkles(), 1000);
  });
};

//Question 3 – Sprinkles (Soft)
const chooseSprinkles = () => {
  const sprinkleNextBtn = document.getElementById("sprinkles-next");
  const sprinklesSelection = document.getElementById("sprinkles");

  sprinkleNextBtn.addEventListener("click", () => {
    customerOrder.sprinkles = sprinklesSelection.value;

    showMessage(`${sprinklesSelection.options[sprinklesSelection.selectedIndex].text}, please`, "user");
    disableBtnAfterClick();
    setTimeout(() => question4PhoneNo(), 1000);
  });
};

//Question 3 – flavors (Ice)
const chooseFlavors = () => {
  const flavorsNextBtn = document.getElementById("flavors-next");
  const flavorsBoxes = document.getElementsByClassName("flavors-boxes");

  flavorsNextBtn.addEventListener("click", () => {
    // customerOrder.flavors =

    showMessage(`flavors`, "user");
    disableBtnAfterClick();
    setTimeout(() => question4PhoneNo(), 1000);
  });

  for (let i = 0; i < flavorsBoxes.length; i++) {
    if (flavorsBoxes[i].checked === true) {
      customerOrder.flavors.push(input.value);
    }
  }
};

//Question 4 - Phone Number
const phoneNumber = () => {
  const confirmPhoneBtn = document.getElementById("confirm-btn");

  confirmPhoneBtn.addEventListener("click", () => {
    disableBtnAfterClick();
    showMessage(`Phone number`, "user");
    showMessage(`Thank you for your order`, "bot");
    popup.classList.toggle("hide");
  });
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
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
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
// Question 1 – Cup or Cone
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Welcome to The Ice Cream Shop! Let me take your order.", "bot");
  setTimeout(() => {
    showMessage("Would you like your ice cream in a cup or a cone?", "bot");

    inputWrapper.classList.toggle("active");
  }, 2000);
};

// Question 2 - Choose Ice Cream
const question2IceOrSoft = () => {
  inputWrapper.innerHTML = `
<button id="ice-cream-btn">Ice cream</button>
<button id="soft-ice-cream-btn">Soft ice cream</button>
`;

  showMessage(`Would you like:`, "bot");
  chooseIceCream();
};

//Question 3 - Sprinkles (Soft Ice Cream)
const question3Sprinkles = () => {
  inputWrapper.innerHTML = `
<select name="sprinkles" id="sprinkles">
<option value="rainbow">Rainbow sprinkles</option>
<option value="chocolate">Chocolate sprinkles</option>
<option value="liquorice">Liquorice sprinkles</option>
<option value="none">No sprinkles</option>
</select>

<button id="sprinkles-next">Next</button>`;
  showMessage(`Sprinkles?`, "bot");
  chooseSprinkles();
};

//Question 3 - Flavors (Ice Cream)
const question3Flavors = () => {
  inputWrapper.innerHTML = `
  <div>
  <label for="vanilla" class="textbox-label">Vanilla</label>
  <input type="checkbox" class="flavors-boxes" id="vanilla" name="vanilla" />
</div>
<div>
  <label for="mango" class="textbox-label">Mango</label>
  <input type="checkbox" class="flavors-boxes" id="mango" name="mango" />
</div>
<div>
  <label for="chocolate" class="textbox-label">Chocolate</label>
  <input type="checkbox" class="flavors-boxes" id="chocolate" name="chocolate" />
</div>
<div>
  <label for="elderflower" class="textbox-label">Elderflower</label>
  <input type="checkbox" class="flavors-boxes" id="elderflower" name="elderflower" />
</div>
<button id="flavors-next">Next</button>
`;
  showMessage(`What flavors?`, "bot");
  chooseFlavors();
};

//Question 4 - Phone Number
const question4PhoneNo = () => {
  inputWrapper.innerHTML = `
  <input type="tel" class="phone-number" required/> 
  <button id="confirm-btn">Confirm</button>
  <button id="cancel-btn" onClick="window.location.reload();">Cancel</button>`;
  console.log();

  showMessage(`Phone number please`, "bot");
  phoneNumber();
};

// Set up your eventlisteners here
cupBtn.addEventListener("click", () => {
  customerOrder.coneOrCup = "Cup";
  showMessage("Cup", "user");

  disableBtnAfterClick();
  setTimeout(() => question2IceOrSoft(), 2000);
});

coneBtn.addEventListener("click", () => {
  customerOrder.coneOrCup = "Cone";
  showMessage("Cone", "user");

  disableBtnAfterClick();
  setTimeout(() => question2IceOrSoft(), 2000);
});

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
