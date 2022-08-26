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

//User answering how thei'r doing.
const handleInput2 = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let moodChoice = nameInput.value;
  showMessage(`${moodChoice}`, "user"); //calling on function
  nameInput.value = ""; //erases the answer field
  setTimeout(() => question2(moodChoice), 500);
};

//Bot asking to make a coffee order
const question2 = (event) => {
  showMessage(`Mmm regardless your feeling your day can always get better with a cup of coffee! Would you like some?`, "bot");
  console.log("bot som skriver"); //can be omitted
  inputWrapper.innerHTML = `
  <button id="ofCourse" type="submit" class="chat-btn">Of course!</button>
  <button id="noThanks" type="submit" class="chat-btn">I will pass</button>
  `
  document.getElementById("ofCourse").addEventListener("click", ofCourseChoice);
  document.getElementById("noThanks").addEventListener("click", noThanksChoice);
};

const noThanksChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let denierAnswer = inputWrapper.value;
  showMessage("No thank you. I'll pass!", "user");
  inputWrapper.value = "";
  console.log("Denied coffee wish"); //can be omitted
  setTimeout(() => byeChat(denierAnswer), 1000);
};

const byeChat = () => {
  showMessage("Sure! No problem. Have a nice day tho!", "bot");
  console.log("Ending chat"); //can be omitted
  inputWrapper.innerHTML = `
  <span>
  `
};

const ofCourseChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let doerAnswer = inputWrapper.value;
  showMessage("Of course I want!", "user");
  inputWrapper.value = "";
  console.log("Confirmed coffee wish"); //can be omitted
  setTimeout(() => question4(doerAnswer), 1000);
};

const question4 = (answerName) => {
  showMessage("What kind of coffee would you like to order?", "bot");
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
  setTimeout(() => question5(coffeeAnswer), 1000);
};

const macchiatoChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let coffeeAnswer = inputWrapper.value;
  showMessage(`A macchiato will be!`, "user");
  inputWrapper.value = "";
  console.log("machiato choice"); //can be omitted
  setTimeout(() => question5(coffeeAnswer), 1000);
};

const withMilkChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let coffeeAnswer = inputWrapper.value;
  showMessage('Coffe with milk, plz!.', "user");
  inputWrapper.value = '';
  console.log("with milk choice"); //can be omitted
  setTimeout(() => question5(coffeeAnswer), 1000);
};

const question5 = () => {
  showMessage("Stress or zen mode?", "bot");
  console.log("bot som skriver"); //can be omitted
  inputWrapper.innerHTML = `
  <button id="takeAway" type="submit" class="chat-btn">Take away</button>
  <button id="drinkHere" type="submit" class="chat-btn">Drink here</button>
  `
  // Här ifrån fungerar ej
  document.getElementById("takeAway").addEventListener("click", takeAwayChoice);
  document.getElementById("drinkHere").addEventListener("click", drinkHereChoice);
  /*setTimeout(() => question6(coffeeAnswer), 1000);*/
  /* setTimeout(() => question6(coffeeAnswer), 1000); */
};

let question6 = () => {
  if (question6 = 'takeAway') {
  showMessage('take away', "user");
  } else if (question6 === "drinkHere") {
  showMessage('drink here', "user");
  } else {
    console.log("test")
  }
};



/* let coffeChoice = () => {
  if (coffeChoice === "blackCoffee") {
    showMessage(`Nice choice!`, "bot")
    setTimeout(() => question2(answerName), 1000);
  } else if (coffeeChoice === "macchiato") {
    showMessage(`Nice choice!`, "bot")
    setTimeout(() => question2(answerName), 1000);
  } else {
    showMessage(`Nice choice!`, "bot")
    setTimeout(() => question2(answerName), 1000);
  }
} */


// Set up your eventlisteners here
nameForm.addEventListener("submit", handleInput);


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greeting, 0);

