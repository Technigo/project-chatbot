// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");

//Buttons:
const coneBtn = document.getElementById("cone-btn");
const cupBtn = document.getElementById("cup-btn");

// const form = document.getElementById("form");

// If you need any global variables that you can use across different functions, declare them here:

// "if ic"

const customerOrder = {
  typeOfIceCream: "",
  coneOrCup: "",
  flavor: "",
  topping: "",
  phoneNo: "",
  getReceipt: () => {},
};

// Declare your functions after this comment

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
    console.log("bot");
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
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Welcome to The Ice Cream Shop! Let me take your order.", "bot");
  setTimeout(() => {
    showMessage("Would you like your ice cream in a:", "bot");
    inputWrapper.classList.toggle("active");
  }, 2000);
};


// Question 2
const question2 = () => {
  inputWrapper.innerHTML = `
<button id="ice-cream-btn">Ice cream</button>
<button id="soft-ice-cream-btn">Soft ice cream</button>
`;

  const iceCreamBtn = document.getElementById("ice-cream-btn");
  const softIceCreamBtn = document.getElementById("soft-ice-cream-btn");

  iceCreamBtn.addEventListener("click", () => {
    customerOrder.typeOfIceCream = "Ice Cream";
    showMessage("Ice Cream", "user");

    setTimeout(() => question3Ice(), 700);
  });

  softIceCreamBtn.addEventListener("click", () => {
    customerOrder.typeOfIceCream = "Soft Ice Cream";
    showMessage("Soft Ice Cream", "user");

    setTimeout(() => question3Soft(), 700);
  });

  showMessage(`Would you like:`, "bot");
};

//Question 3 - Soft Ice Cream
const question3Soft = () => {
  inputWrapper.innerHTML = `
<select id="topping">
<option value="topping1">Rainbow</option>
<option value="topping2">Chocolate</option>
<option value="topping3">Liquorice</option>
<option value="topping4">Strawberry</option>
<option value="topping4">None</option>
</select>
<button id="next">Next</button>`;
  showMessage(`Sprinkles?`, "bot");
};

//Question 3 - Ice Cream
const question3Ice = () => {
  inputWrapper.innerHTML = `
  <input type="checkbox" class="flavor-boxes" id="vanilla" name="vanilla">Vanilla</input>
  <input type="checkbox" class="flavor-boxes" id="mango" name="mango">Mango</input>
  <input type="checkbox" class="flavor-boxes" id="chocolate" name="chocolate">Chocolate</input>
  <input type="checkbox" class="flavor-boxes" id="elderflower" name="elderflower">Elderflower</input>
  <button id="next">Next</button>
  `

};

// Set up your eventlisteners here
cupBtn.addEventListener("click", () => {
  customerOrder.coneOrCup = "Cup";
  showMessage("Cup", "user");

  setTimeout(() => question2(), 700);
});

coneBtn.addEventListener("click", () => {
  customerOrder.coneOrCup = "Cone";
  showMessage("Cone", "user");

  setTimeout(() => question2(), 700);
});

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
