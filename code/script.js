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
        <img src="assets/girldrinking.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === "bot") {
    console.log("bot som skriver");

    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/cuterobot.jpg" alt="Bot" />
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
  console.log("greeting"); //can be omitted
};


//User answering his name
const handleInput = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let userName = nameInput.value;
  showMessage(`Hi! I am ${userName}.`, "user"); //calling on function
  console.log("Handle input name given");
  nameInput.value = ""; //erases the answer field
  setTimeout(() => question1(userName), 500);
};

//Bot asking the users mood
const question1 = (userName) => {
  showMessage(`Hello ${userName}! How are you today?`, "bot");
  console.log("user mood asking from bot"); //can be omitted
  nameForm.removeEventListener("submit", handleInput);
  nameForm.addEventListener("submit", handleInput2);
};

//User answering how thei'r doing.
const handleInput2 = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let moodChoice = nameInput.value;
  showMessage(`${moodChoice}`, "user"); //calling on function
  console.log("User answering his mood"); //can be omitted
  nameInput.value = ""; //erases the answer field
  setTimeout(() => question2(), 500);
};

//Bot asking to make a coffee order
const question2 = (event) => {
  showMessage(`Mmm 😏 regardless your feeling your day can always get better with a cup of coffee! Would you like some?`, "bot");
  console.log("Bot asking to make a coffee order"); //can be omitted
  inputWrapper.innerHTML = `
  <button id="ofCourse" type="submit" class="chat-btn">Of course!</button>
  <button id="noThanks" type="submit" class="chat-btn">I will pass</button>
  `
  document.getElementById("ofCourse").addEventListener("click", ofCourseChoice);
  document.getElementById("noThanks").addEventListener("click", noThanksChoice);
};

//User denying coffee order
const noThanksChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let denierAnswer = inputWrapper.value;
  showMessage("No thank you. I'll pass!", "user");
  inputWrapper.value = "";
  console.log("Denied coffee wish from use"); //can be omitted
  setTimeout(() => byeChat(denierAnswer), 1000);
};

//Bot ending the chat
const byeChat = () => {
  showMessage("Sure! No problem. Have a nice day tho!", "bot");
  console.log("Ending chat"); //can be omitted
  inputWrapper.innerHTML = `
  <span>
  `
};

//User confirming a coffee order
const ofCourseChoice = (event) => {
  event.preventDefault(); //prevents refreshing the page
  let doerAnswer = inputWrapper.value;
  showMessage("Of course I want!", "user");
  inputWrapper.value = "";
  console.log("User confirmed coffee wish"); //can be omitted
  setTimeout(() => question4(doerAnswer), 1000);
};

//Bot asking which coffee user wants to order
const question4 = (answerName) => {
  showMessage("What kind of coffee would you like to order?", "bot");
  console.log("Bot asking which coffee user wants to order"); //can be omitted
  inputWrapper.innerHTML = `
  <button id="blackCoffee" type="submit" class="chat-btn">Black Coffee</button>
  <button id="macchiato" type="submit" class="chat-btn">Macchiato</button>
  <button id="withMilk" type="submit" class="chat-btn">With Milk</button>
  `
  document.getElementById("blackCoffee").addEventListener("click", blackChoice);
  document.getElementById("macchiato").addEventListener("click", macchiatoChoice);
  document.getElementById("withMilk").addEventListener("click", withMilkChoice);
};


// 3 different choices
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

//Bot asking take away or drink here
const question5 = () => {
  showMessage("Stress or zen mode?", "bot");
  console.log("Bot asking take away or drink here"); //can be omitted
  inputWrapper.innerHTML = `
  <button id="takeAwayBtn">Take away</button>
  <button id="drinkHereBtn">Drink here</button>
  `

  document.getElementById('takeAwayBtn').addEventListener('click', () => finalDecision("take away"))
  document.getElementById('drinkHereBtn').addEventListener('click', () => finalDecision("drink here"))
  ;}

//Final decision and video 
const finalDecision = (finalDecision) => {

  if (finalDecision === "take away"){
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 0);
    setTimeout(() => showMessage("Take away", "user"), 500);
    setTimeout(() => inputWrapper.innerHTML = `<p>Please wait<p>`, 1500);
    setTimeout(() => showMessage("...", "bot"), 1500);
    setTimeout(() => chat.innerHTML = `
  <video src="https://assets.mixkit.co/videos/preview/mixkit-coffee-maker-making-coffee-3578-large.mp4" width=100% height="552" autoplay></video>
    `, 4500);
    setTimeout(() => showMessage("Your coffee is preparing...", "bot"), 4500);
    setTimeout(() => chat.innerHTML = `
    <img src="assets/thanks.jpg" alt="Thank you image"/>
    `, 15500);
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 15500);
  } else { 
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 0);
    setTimeout(() => showMessage("Drink here", "user"), 500);
    setTimeout(() => inputWrapper.innerHTML = `<p>"Sit down and relax!..."<p>`, 1500);
    setTimeout(() => showMessage("...", "bot"), 1500);
    setTimeout(() => chat.innerHTML = `
  <video src="https://assets.mixkit.co/videos/preview/mixkit-coffee-maker-making-coffee-3578-large.mp4" width=100% height="552" autoplay></video>
    `, 4500);
    setTimeout(() => showMessage("Your coffee is preparing", "bot"), 4500);
  }
  setTimeout(() => chat.innerHTML = `
  <img src="assets/thanks.jpg" alt="Thank you image"/>
    `, 15500);
    setTimeout(() => inputWrapper.innerHTML = `<span>`, 15500);
}

// Set up your eventlisteners here
nameForm.addEventListener("submit", handleInput);

setTimeout(greeting, 0);

