// Variables that point to selected DOM elements
const chat = document.querySelector("#chat");
const inputWrapper = document.querySelector("#input-wrapper");
const nameInput = document.querySelector("#name-input");
const nameForm = document.querySelector("#name-form");
// If you need any global variables that you can use across different functions, declare them here:
//let userAnswer;

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    console.log("user som skriver");
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
    console.log("bot som skriver");

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

//Greeting
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello and welcome to the Coffee by D&P! What's your name?", "bot");
  console.log("bot som skriver"); //can be omitted
};


//User answering his name
const handleInput = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let userName = nameInput.value;
  showMessage(`Hi! I am ${userName}.`, "user"); //calling on function
  nameInput.value = ""; //erases the answer field
  setTimeout(() => question1(userName), 500);
};

//Bot asking which coffee the person wants
const question1 = (userName) => {
  showMessage(`Hello ${userName}! How are you today?`, "bot");
  console.log("bot som skriver"); //can be omitted
  nameForm.removeEventListener("submit", handleInput);
  nameForm.addEventListener("submit", handleInput2);
};

//User answering the wished coffee type/getting coffee type answer 
const handleInput2 = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let coffeeChoice = nameInput.value;
  showMessage(`${coffeeChoice}`, "user"); //calling on function
  nameInput.value = ""; //erases the answer field
  setTimeout(() => question2(coffeeChoice), 500);
};

//Bot asking if milk wanted
const question2 = (coffeeChoice) => {
  showMessage(`I see, ${coffeeChoice}. Excellent choice! Would you like some milk with it?`, "bot");
  console.log("bot som skriver"); //can be omitted
  nameForm.removeEventListener("submit", handleInput2);
  nameForm.addEventListener("submit", handleInput3);
};

//User answering about milk/Getting milk answer
const handleInput3 = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let milkChoice = nameInput.value;
  showMessage(`${milkChoice}`, "user"); //calling on function
  nameInput.value = ""; //erases the answer field
  setTimeout(() => question3(milkChoice), 500);
};

const question3 = (milkChoice,) => {
  showMessage(`Great, then I am writing down ${milkChoice} for the milk choice. I'll fix it right a way!`, "bot");
 /*  console.log("bot som skriver"); //can be omitted
  nameForm.removeEventListener("submit", handleInput3);
  nameForm.addEventListener("submit", handleInput4);
};

const handleInput4 = (answerName) => {
  showMessage(`Hello ${answerName}! What kind of coffee would you like to order?`, "bot"); */
  console.log("bot som skriver"); //can be omitted
  inputWrapper.innerHTML = `
  <button id="blackCoffee" type="submit" class="chat-btn">Black Coffee</button>
  <button id="macchiato" type="submit" class="chat-btn">Macchiato</button>
  <button id="withMilk" type="submit" class="chat-btn">With Milk</button>
  `

  document.getElementById("blackCoffee").addEventListener("click", blackChoice);
  document.getElementById("macchiato").addEventListener("click", macchiatoChoice);
  document.getElementById("withMilk").addEventListener("click", withMilkChoice);
};

const blackChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let coffeeAnswer = inputWrapper.value;
  showMessage(`I would love some Black Coffe!`, "user");
  inputWrapper.value = "";
  console.log("black choice"); //can be omitted
  setTimeout(() => question4(coffeeAnswer), 1000);
};

const macchiatoChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let coffeeAnswer = inputWrapper.value;
  showMessage(`A macchiato will be!`, "user");
  inputWrapper.value = "";
  console.log("machiato choice"); //can be omitted
  setTimeout(() => question4(coffeeAnswer), 1000);
};

const withMilkChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let coffeeAnswer = inputWrapper.value;
  showMessage(`Coffe with milk, plz!`, "user");
  inputWrapper.value = "";
  console.log("with milk choice"); //can be omitted
  setTimeout(() => question4(coffeeAnswer), 1000);
};

const question4 = () => {
  showMessage("Stress or zen mode?", "bot");
  console.log("bot som skriver"); //can be omitted
  inputWrapper.innerHTML = `
  <button id="takeAway" type="submit" class="chat-btn">Take away</button>
  <button id="drinkHere" type="submit" class="chat-btn">Drink here</button>
  `
  document.getElementById("takeAway").addEventListener("click", takeAway);
  document.getElementById("drinkHere").addEventListener("click", drinkHere);
};










// Set up your eventlisteners here
nameForm.addEventListener("submit", handleInput);


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greeting, 0);

