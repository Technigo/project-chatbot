// DOM selectors
const chat = document.getElementById("chat");
const sendButton = document.getElementById("send-button");
const nameInput = document.getElementById("name-input");
const foodCategory = document.getElementById("food-category");
const nameWrapper = document.getElementById("input-wrapper");

const pizzaButton = document.getElementById("pizza-button");
const saladButton = document.getElementById("salad-button");
const kebabButton = document.getElementById("kebab-button");

const subPizza = document.getElementById("sub-pizza");
const subSalad = document.getElementById("sub-salad");
const subKebab = document.getElementById("sub-kebab");

const subPizzaSelect = document.getElementById("pizza-selector");
const subSaladSelect = document.getElementById("salad-selector");
const subKebabSelect = document.getElementById("kebab-selector");

const userPortion = document.getElementById("user-portion");

const largeButton = document.getElementById("large-button");
const xLargeButton = document.getElementById("xl-button");

const confirmation = document.getElementById("confirmation");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

let selectedDish;
let portion;
let userName;
let finalOrder;

let pop = document.querySelector('#audio')


// Functions goes here 👇

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

const greetUser = () => {
  nameInput.style.disply = "flex";
  showMessage("Hello there, what's your name?", "bot");
};


const handleNameInput = (event) => {
  event.preventDefault();
  userName = nameInput.value;
  showMessage(userName, "user");
  nameInput.value = "";
  chooseFoodOption(userName);
};

const chooseFoodOption = (userName) => {
  foodCategory.style.display = "flex";
  nameWrapper.style.display = "none";
  showMessage(`Hi ${userName}! What would you like to order? `, "bot");
};

const chooseSubOption = (category) => {
  foodCategory.style.display = "none";

  if (category == "pizza") {
    subPizza.style.display = "flex";
    showMessage("Pizza", "user");
  } else if (category == "salad") {
    subSalad.style.display = "flex";
    showMessage("Salad", "user");
  } else {
    subKebab.style.display = "flex";
    showMessage("Kebab", "user");
  }
  showMessage(
    `You chose ${category}. What kind of ${category} would you like?`,
    "bot"
  );
};

const finalFoodChoice = (chooseSubOption) => {
  selectedDish = chooseSubOption;
  showMessage(chooseSubOption, "user");
  showMessage(`You chose ${chooseSubOption}. Large or X-large portion?`, "bot");
  portionSelect();
};

const portionSelect = () => {
  subPizza.style.display = "none";
  subSalad.style.display = "none";
  subKebab.style.display = "none";

  userPortion.style.display = "flex";

  largeButton.addEventListener("click", largePortion);
  xLargeButton.addEventListener("click", extraLargePortion);
};

const largePortion = () => {
  showMessage("Large", "user");
  (portion = largeButton.innerText);
  summary(portion);
}

const extraLargePortion = () => {
  showMessage("Extra Large", "user");
  (portion = xLargeButton.innerText);
  summary(portion);
}

const summary = (portion) => {
  let price;
  if (portion == "Large") {
    price = "£10";
  } else {
    price = "¥20000";
  }
  showMessage(
    `Your order:
    One ${portion.toLowerCase()} ${selectedDish}.
    That will be ${price}.
    Is this correct?
    `,
    "bot"
  );
  confirmOrder();
};

const confirmOrder = () => {
  userPortion.style.display = "none";
  confirmation.style.display = "flex";
  yesButton.addEventListener("click", yesWoo, false);
  noButton.addEventListener("click", function () {
    finalOrder = false,
    showMessage("No!", "user"),
    orderLogic(finalOrder);
  });
};

const yesWoo = () => {
  finalOrder = true;
  showMessage("Heck yes!", "user");
  orderLogic(finalOrder);
}

const orderLogic = () => {
  if (finalOrder == true){
    showMessage(
      "You order is being prepared, thank you for choosing Robot Resturant!",
      "bot"
    ); 
    (confirmation.style.display = "none");
  }
  else {
    showMessage("Please choose something else.", "bot");
    (confirmation.style.display = "none");
    chooseFoodOption(userName);
    clearListeners;

  }
}

const clearListeners = () =>{
  yesButton.removeEventListener("click", yesWoo, false);
  largeButton.removeEventListener("click", largePortion);
  xLargeButton.removeEventListener("click", extraLargePortion);
}

// Eventlisteners goes here 👇
sendButton.onclick = handleNameInput;

pizzaButton.addEventListener("click", function () {
  chooseSubOption("pizza");
});
saladButton.addEventListener("click", function () {
  chooseSubOption("salad");
});
kebabButton.addEventListener("click", function () {
  chooseSubOption("kebab");
});

subPizzaSelect.addEventListener("change", function () {
  finalFoodChoice(subPizzaSelect.value);
});
subSaladSelect.addEventListener("change", function () {
  finalFoodChoice(subSaladSelect.value);
});
subKebabSelect.addEventListener("change", function () {
  finalFoodChoice(subKebabSelect.value);
});


setTimeout(greetUser, 1000);
