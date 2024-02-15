// DOM selectors (variables that point to selected DOM elements) goes here 👇
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

//Sofie provar
// const vesuvio = document.getElementById("vesuvio");
// const fruttiDiMare = document.getElementById("frutti")
// const funghi = document.getElementById("funghi")

const subSelect = document.getElementsByClassName("sub-select");



//MARTIN! Jag samlade alla kommentarer/instruktioner här för bättre läsvänlighet!
// A function that will add a chat bubble in the correct place based on who the sender is

// The if statement checks if the sender is the user and if that's the case it inserts
// an HTML section inside the chat with the posted message from the user

// The else if statement checks if the sender is the bot and if that's the case it inserts
// an HTML section inside the chat with the posted message from the bot

// chat.scrollTop = chat.scrollHeight; This little thing makes the chat scroll to the last message when there are too many to
// be shown in the chat box

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


//HÄR BÖRJAR VÅR CHAT-BOT!
// A function to start the conversation.
// Here we call the function showMessage, that we declared earlier with the argument:
// "Hello there, what's your name?" for message, and the argument "bot" for sender

const greetUser = () => {
  showMessage("Hello there, what's your name?", "bot");
};

//Store name for future use.
//Clear name input
const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  console.log(name);
  showMessage(name, "user");
  nameInput.value = "";
  chooseFoodOption(name);
  console.log("name:", name);
};

const chooseFoodOption = (name) => {
  foodCategory.style.display = "flex";
  nameWrapper.style.display = "none";
  showMessage(
    `Hi ${name}! What would you like to order? `, "bot");
};

//Skapa stor CS för alla val ex if pizza....alt, els if sallad osv
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
  showMessage(`you chose ${subPizza}`);
  console.log("first choice:", category)

};

//Sofie provar... vad är det som blir fel?

const finalFoodChoice = (chooseSubOption) => {
   if (chooseSubOption == "Vesuvio") {
     showMessage("Vesuvio", "user");
   } else if (subPizza == "Frutti di mare") {
    showMessage("Frutti di mare", "user");
  } else {
    showMessage("Funghi", "user");
   }
}



/*
const userPortionSize = () => {
  showMessage ("How hungry are you?", "bot");
  
}
*/

// Eventlisteners goes here 👇
sendButton.onclick = handleNameInput;
//pizzaButton.addEventListener("click", pizzaOptions("pizza"));
// kebabButton.onclick = pizzaOptions("kebab");

pizzaButton.addEventListener("click", function () {
  chooseSubOption("pizza");
});
saladButton.addEventListener("click", function () {
  chooseSubOption("salad");
});
kebabButton.addEventListener("click", function () {
  chooseSubOption("kebab");
});

//Sofie provar
// vesuvio.addEventListener("click", function () {
//   finalFoodChoice("vesuvio")
// });
// fruttiDiMare.addEventListener("click", function () {
//   finalFoodChoice("Frutti di mare");
// });
// funghi.addEventListener("click", function () {
//   finalFoodChoice("Funghi");
// });


//OnChange skulle kunna funka för att kolla vilken option på Select.
//subSelect.onchange(showMessage(`I chose ${subSelect.value}`, "user"));

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in }}}{{\\{{milliseconds
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);