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
        <img src="./assets/wine-bottle.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="./assets/chatbot.png" alt="Bot" />
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
  showMessage("Hello, enter your name and table number.", "bot");
  nameForm.addEventListener("submit", handleInput);
};


//User answering his name
const handleInput = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let userName = nameInput.value;
  showMessage(`Name and table number: ${userName}.`, "user");
  nameInput.value = ""; //clears the answer field
  setTimeout(() => question1(userName), 2000);  // goes to next question, and passes username as a prop. 
};

//Bot askes about the order
const question1 = (userName) => {
  showMessage(`Name and table number: ${userName}. Thank you. Are you over 20 years old?`, "bot");
  setTimeout(() => question2(), 1000);
};


//Bot asking to make a coffee order
const question2 = (event) => {
  inputWrapper.innerHTML = `
  <button id="yes" type="submit" class="chat-btn">Yes</button>
  <button id="no" type="submit" class="chat-btn">No</button>
  `
  // when a button is clicked, an event listener "listens" to the event and invoked the corresponding function, coffe or teachoice
  document.getElementById("yes").addEventListener("click", yesChoice);  
  document.getElementById("no").addEventListener("click", noChoice);
};

//If user says no, I changes the question3nochoice to 2 so next question doesnt appear
const noChoice = (event) => {
  event.preventDefault();
  let noChoice = inputWrapper.value;
  showMessage("Sorry underaged, cannot order wine", "user");
  inputWrapper.value = "";
  setTimeout(() => question2(noChoice), 1000);
};

// if user is over 20 yrs
const yesChoice = (event) => {
  event.preventDefault(); 
  let yesChoice = inputWrapper.value;
  showMessage("Over 20", "user");
  inputWrapper.value = "";
  setTimeout(() => question3(yesChoice), 2000);
};


//Bot asking which red or white user wants to order
const question3 = (yesChoice) => {
  showMessage("Good, you are over 20! What wine do you prefer?", "bot");
  inputWrapper.innerHTML = `
  <button id="white" type="submit" class="chat-btn">White wine</button>
  <button id="red" type="submit" class="chat-btn">Red wine</button>
  `
  document.getElementById("white").addEventListener("click", whiteWine);
  document.getElementById("red").addEventListener("click", redWine);
};

 
// red or white choice
const whiteWine = (event) => {
  event.preventDefault(); 
  let whiteChoice = inputWrapper.value;
  showMessage(`I would prefer white wine`, "user");
  inputWrapper.value = "";
  setTimeout(() => question4(whiteChoice), 2000);
};

const redWine = (event) => {
  event.preventDefault(); 
  let redChoice = inputWrapper.value;
  showMessage(`I would prefer red wine!`, "user");
  inputWrapper.value = "";
  setTimeout(() => question4(redChoice), 2000);
};

//Bot asking take away or drink here
const question4 = (redChoice, whiteChoice, yesChoice) => {
  showMessage("Take away or sit here?", "bot");
  inputWrapper.innerHTML = `
  <button id="takeAwayBtn">Take away</button>
  <button id="drinkHereBtn">Drink here</button>
  `

  document.getElementById("takeAwayBtn").addEventListener("click", () => whereToDrink("take away"))
  document.getElementById("drinkHereBtn").addEventListener("click", () => whereToDrink("drink here"))
  ;}

// Where to drink, take away or sit here
// pass  redChoice, whiteChoice, yesChoice, noChoice  
const whereToDrink = (whereToDrink) => {

  if (whereToDrink === "take away"){
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 0);
    setTimeout(() => showMessage("Take away", "user"), 500);
    setTimeout(() => showMessage(`Please wait while your drink is being prepared`, "bot"), 3000);
    setTimeout(() => chat.innerHTML = `<p>Thank you, come by again soon!<p>`, 8000);
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 1500);
  } else { 
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 0);
    setTimeout(() => showMessage("I'm sitting here", "user"), 500);
    setTimeout(() => showMessage(`Please have a seat! We'll come out with your drink!`, "bot"), 6000);
  }
  setTimeout(() => chat.innerHTML = `<p>Enjoy your drink!<p>`, 10000);
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 15500);
}


setTimeout(greeting, 1000);


