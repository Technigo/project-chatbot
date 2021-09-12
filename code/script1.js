// DOM SELECTORS:
const chat = document.getElementById("chat");
const form = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const inputWrapper = document.getElementById("input-wrapper");

// GLOBAL VARIABLE:
let currentQuestion = 1;

// FUNCTIONS:

// 1rs Function showMessage: This function will add a chat bubble in the correct place based on who the sender is.
const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="./Pictures/bill-chatbot.png" alt="User" />  
      </section>
    `;
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="./Pictures/julieta-chatbot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  chat.scrollTop = chat.scrollHeight; // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
};

// 2nd Function greeting: This function invokes ('calls') the first function, so when the function greeting is invoked, it invokes the first function.
const greeting = () => {
  showMessage(`Welcome to Flowerland! What's your name?`, "bot");
};
setTimeout(greeting, 1000);

// 3rd Function handleInput
const handleInput = (event, answer) => {
  event.preventDefault();

  if (currentQuestion === 1) {
    let name = nameInput.value;
    showMessage(name, "user");
    setTimeout(() => showFlowerTypes(name), 1000);

  } else if (currentQuestion === 2) {
    showMessage(answer, "user");
    inputWrapper.innerHTML = "";
    setTimeout(() => showFlowerSize(answer), 2000);

  } else if (currentQuestion === 3) {
    showMessage(answer, "user" );
    setTimeout(()=> showFinalMessages(answer),2000);
  }
};

// THREE FUNCTIONS THAT ARE BEING INVOKED INSIDE OF THE HANDLEINPUT FUNCTION:

function showFlowerTypes(name) {
  showMessage(`What type of flowers would you like to order ${name}?`, "bot");
  inputWrapper.innerHTML = 
  `
  <select id="select">
    <option value="" selected disabled>👇 Select a bouquet of flowers...</option>
    <option value="Rose">Roses</option>
    <option value="Tulip">Tulips</option>
    <option value="Sunflower">Sunflowers</option>
    <option value="Magnolia">Magnolia</option>
  </select>
`;
  const select = document.getElementById("select");
  select.addEventListener("change", (event) => handleInput(event, select.value));
  currentQuestion++;
}

function showFlowerSize(answer) {
  showMessage( `You have chosen ${answer}! Great choice! What size would you like your bouquet to be?`,"bot");
  inputWrapper.innerHTML = 
  `
    <button id="smallBtn">Small</button>
    <button id="mediumBtn">Medium</button>
    <button id="largeBtn">Large</button>
  `;
  const smallBtn = document.getElementById("smallBtn");
  smallBtn.addEventListener("click", (event) => handleInput(event,'small'));

  const mediumBtn = document.getElementById("mediumBtn");
  mediumBtn.addEventListener("click", (event) => handleInput(event,'medium'));

  const largeBtn = document.getElementById("largeBtn");
  largeBtn.addEventListener("click", (event) => handleInput(event,'large'));

  currentQuestion++;
}

function showFinalMessages(answer) {

  showMessage(`A ${answer} bouquet. Excelent!`,'bot')
  inputWrapper.innerHTML = "";
  setTimeout(()=> showMessage(`Your ${answer} bouquet will be soon ready and send.`,'bot'),2000)
  setTimeout(()=> showMessage('Thank you for shopping at Flowerland and see you soon!','bot'),4000) 
}


// EVENT LISTENER FOR INVOKING THE FUNCTION HANDLEINPUT
form.addEventListener("submit", handleInput);
