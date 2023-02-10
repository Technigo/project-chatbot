// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const nameInput = document.getElementById("name-input");
const nameForm = document.getElementById("name-form");

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="./assets/user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="./assets/bot.png" alt="Bot" />
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
  showMessage("Hello, What's your name?", "bot");
  nameForm.addEventListener("submit", handleInput);
};


//User answering his name
const handleInput = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let userName = nameInput.value;
  showMessage(`Hi! my name is ${userName}.`, "user");
  nameInput.value = ""; //clears the answer field
  setTimeout(() => question1(userName), 1000);  // goes to next question, and passes username as a prop. 
};

//Bot askes about the order
const question1 = (userName) => {
  showMessage(`Hello ${userName}! What would you like to drink?`, "bot");
  setTimeout(() => question2(), 1000);
};


//Bot asking to make a coffee order
const question2 = (event) => {
  inputWrapper.innerHTML = `
  <button id="coffee" type="submit" class="chat-btn">Coffee</button>
  <button id="tea" type="submit" class="chat-btn">Tea</button>
  `
  // when a button is clicked, an event listener "listens" to the event and invoked the corresponding function, coffe or teachoice
  document.getElementById("coffee").addEventListener("click", coffeeChoice);  
  document.getElementById("tea").addEventListener("click", teaChoice);
};

//If user wants Tea
const teaChoice = (event) => {
  event.preventDefault();
  let teaChoice = inputWrapper.value;
  showMessage("I would like a cup of tea!", "user");
  inputWrapper.value = "";
  setTimeout(() => question3(teaChoice), 1000);
};

// if user wants coffee  
const coffeeChoice = (event) => {
  event.preventDefault(); 
  let coffeeChoice = inputWrapper.value;
  showMessage("I would like a cup of coffee!", "user");
  inputWrapper.value = "";
  setTimeout(() => question3(coffeeChoice), 1000);
};


//Bot asking which coffee user wants to order
const question3 = (teaChoice, coffeeChoice) => {
  showMessage("What size would you like?", "bot");
  inputWrapper.innerHTML = `
  <button id="small" type="submit" class="chat-btn">Small</button>
  <button id="large" type="submit" class="chat-btn">Large</button>
  `
  document.getElementById("small").addEventListener("click", smallSize);
  document.getElementById("large").addEventListener("click", largeSize);
};

 
// 3 different choices
const smallSize = (event) => {
  event.preventDefault(); 
  let smallChoice = inputWrapper.value;
  showMessage(`I would like a small one!`, "user");
  inputWrapper.value = "";
  setTimeout(() => question4(smallChoice), 1000);
};

const largeSize = (event) => {
  event.preventDefault(); 
  let largeChoice = inputWrapper.value;
  showMessage(`I would like a small one!`, "user");
  inputWrapper.value = "";
  setTimeout(() => question4(largeChoice), 1000);
};

//Bot asking take away or drink here
const question4 = (largeChoice, smallChoice, coffeeChoice, teaChoice) => {
  showMessage("Take away or sit here?", "bot");
  inputWrapper.innerHTML = `
  <button id="takeAwayBtn">Take away</button>
  <button id="drinkHereBtn">Drink here</button>
  `

  document.getElementById("takeAwayBtn").addEventListener("click", () => whereToDrink("take away"))
  document.getElementById("drinkHereBtn").addEventListener("click", () => whereToDrink("drink here"))
  ;}

// Where to drink, take away or sit here
// pass  largeChoice, smallChoice, coffeeChoice, teaChoice as props for summary?? 
const whereToDrink = (whereToDrink) => {

  if (whereToDrink === "take away"){
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 0);
    setTimeout(() => showMessage("Take away", "user"), 1000);
    setTimeout(() => showMessage(`Please wait while your drink is being prepared`, "bot"), 1500);
    setTimeout(() => chat.innerHTML = `<p>Thank you, come by again soon!<p>`, 4500);
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 1500);
  } else { 
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 0);
    setTimeout(() => showMessage("I'm sitting here", "user"), 1000);
    setTimeout(() => showMessage(`Please have a seat! We'll come out with your drink`, "bot"), 2500);
  }
  setTimeout(() => chat.innerHTML = `<p>Enjoy your drink!<p>`, 15500);
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 15500);
}


setTimeout(greeting, 0);