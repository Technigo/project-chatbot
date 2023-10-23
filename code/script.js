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
  showMessage(`${userName}`, `user`);
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
const iceCreamMenu = (userName) => {
  showMessage(`Nice to meet you! What would you like to order today?`, 'bot');
  inputWrapper.innerHTML = `
  <button class="send-btn" type="IceCream">Ice Cream</button>
  <button class="send-btn" type="SoftCream">Soft Cream</button>
  <button class="send-btn" type="Milkshake">Milkshake</button>
  `
}

const iceCreamButtons = inputWrapper.querySelectorAll('.send-btn') // finds all elements with class "send-btn"
iceCreamButtons.forEach (button => {
  button.addEventListener('click', (event) => {
    const selectedIceCream = event.target.id;
    console.log(selectedIceCream);
    showMessage(`${selectedIceCream}`, 'user');
});
})

// Three different flavor choices for the user
  const flavorOptions = (choice) => {
    showMessage(`Great choise! Which flavor would you like to have?`, 'bot');
  inputWrapper.innerHTML = `
  <button class="send-btn" type="Chocolate">Chocolate</button>
  <button class="send-btn" type="Vanilla">Vanilla</button>
  <button class="send-btn" type="Lemon">Lemon</button>`
  }

  setTimeout(greeting, 300)