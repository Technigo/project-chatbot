// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const form = document.getElementById('name-form');
const sendBtn = document.getElementById('send-btn');
const inputField = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');

// If you need any global variables that you can use across different functions, declare them here:
let userAnswer = "";

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = (name) => {
  showMessage("Welcome to the Ice Cream dream! What's your name?", 'bot')
}
  //Here you need to invoke the next function
const handleNameInput = event => {
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";
  showUserMessage(`${userName}`, `user`);
    setTimeout(reply, 300);
}

//The users answer
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userMessage = inputField.value;
  showMessage(userMessage, 'user');
  inputField.value = '';
  setTimeout(iceCreamMenu, 300);
})

//First menu choises
const iceCreamMenu = userName => {
  showMessage(`Nice to meet you! What would you like to order today?`, 'bot');
  inputWrapper.innerHTML = `
  <button class="send-btn" type="IceCream">Ice Cream</button>
  <button class="send-btn" type="SoftCream">Soft Cream</button>
  <button class="send-btn" type="Milkshake">Milkshake</button>
  `
}

//The submenu with different flavors
const initialButtons = inputWrapper.querySelectorAll(".send-btn");
  initialButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const iceCreamChoice = button.getAttribute("type");
      handleButtonClick(iceCreamChoice);
    });
  });

const handleButtonClick = (iceCreamChoice) => {
  if (iceCreamMenu === "IceCream") {
  showMessage(`Great choise! Which flavor would you like to have?`, 'bot');
  inputWrapper.innerHTML = `
  <button class="send-btn" type="Chocolate">Chocolate</button>
  <button class="send-btn" type="Passion fruit">Passion fruit</button>
  <button class="send-btn" type="Lemon">Lemon</button>
  `
  } 
  
  else if (iceCreamMenu === "SoftCream") {
    showMessage(`Great choise! Which flavor would you like to have?`, 'bot');
  inputWrapper.innerHTML = `
  <button class="send-btn" type="Vanilla">Vanilla</button>
  <button class="send-btn" type="Chocolate">Chocolate</button>
  <button class="send-btn" type="Mix">Mix of vanilla and chocolate</button>
  `
  }
  
  else if (iceCreamMenu === "Milkshake") {
    showMessage(`Great choise! Which flavor would you like to have?`, 'bot');
  inputWrapper.innerHTML = `
  <button class="send-btn" type="Strawberry">Strawberry</button>
  <button class="send-btn" type="Peach">Peach</button>
  <button class="send-btn" type="Mocha">Mocha</button>
  `
  }
}

//The users order confirmation
//const orderConfirmation = () => {
 // showMessage(`Great! Your delicious ${iceCreamMenu} will be prepared for you! That will be 20 SEK. Are you sure you want to order this?`, 'bot');
 // inputWrapper.innerHTML = `
 // <button class="send-btn" type="Yes">Yes, please</button>
 // <button class="send-btn" type="No">No thank you</button>
 // `
//}

//The bots answer depending on the answer from the order confirmation

//showMessage(`Thank you for your order! You will get a notice when your order is done!`, 'bot')
//showMessage(`No worries! Welcome back another time!`, 'bot')

setTimeout(greeting, 300)