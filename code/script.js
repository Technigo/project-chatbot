// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const sendButton = document.getElementById("sendName");
const timeHourInput = document.getElementById("1h-btn");
const timeDayInput = document.getElementById("1d-btn");
const timeWeekInput = document.getElementById("1w-btn");
const paymentCashInput = document.getElementById("cash-btn");
const paymentCreditInput = document.getElementById("credit-btn");
const paymentPayLaterInput = document.getElementById("payLater-btn");
const orderConfirmationYesInput = document.getElementById("yes-btn");
const orderConfirmationNoInput = document.getElementById("no-btn");

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
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

function toggleVisible(className) {
  document.querySelector(`.${className}`).classList.toggle("invisible");
}


// 1. Starts here question 1
const greeting = () => {
  showMessage(`Welcome to the Time Bank, What's your name?`, 'bot')
}
setTimeout(greeting, 500);


// 2. Read the input, show the input, show question 2, change the options
const handleNameInput = (event) => {
  event.preventDefault();
  //read the input 
  const nameInput = document.getElementById("name-input");
  const name = nameInput.value;
  showMessage(name, 'user');  //print the name in screen 
  nameInput.value = ''

  setTimeout(() => showTimeOptions(name), 1000);
}

const showTimeOptions = (name) => {
  showMessage(`Hello ${name}! I'm happy you have found your way to the Time Bank, welcome! How much time do you need? 1 hour, 1 day or 1 week?`, 'bot');
  toggleVisible("question-name");
  toggleVisible("question-time");
}



// 2. Read the value in button clicked, show the value, show question 3, change the options
const handleTimeInput = (event) => {
  event.preventDefault();

  //read the input 
  const time = event.target.value;

  //choices depending on the input 
  if (time === "hour") {
    showMessage("1 hour", 'user');
    setTimeout(() => showCostOptions("hour", 10), 2000);
  } else if (time === "day") {
    showMessage("1 day", 'user');
    setTimeout(() => showCostOptions("day", 100), 2000);
  } else {
    showMessage("1 week", 'user');
    setTimeout(() => showCostOptions("week", 1000), 2000);
  }
}

const showCostOptions = (value, cost) => {
  showMessage(`Ok great you only need 1 ${value}, That'll be €${cost}! How would you like to pay? In cash, credit card or pay later?`, 'bot');
  toggleVisible("question-payment");
  toggleVisible("question-time");
}

// 3. Read the value in button clicked, show the value, show question 4, change the options
const handlePaymentInput = (event) => {
  event.preventDefault();

  //read the input 
  const paymentMethod = event.target.value;

  //choices depending on the input 
  if (paymentMethod === "cash") {
    showMessage("Cash", 'user');
    setTimeout(() => showOrderConfirmation("cash"), 2000);
  } else if (paymentMethod === "creditcard") {
    showMessage("Credit Card", 'user');
    setTimeout(() => showOrderConfirmation("Credit Card"), 2000);
  } else {
    showMessage("Pay Later", 'user');
    setTimeout(() => showOrderConfirmation("Pay Later"), 2000);
  }
}
const showOrderConfirmation = (paymentMethod) => {
  showMessage(`Thank you, please confirm that you want to buy your time with ${paymentMethod}?`, 'bot');
  toggleVisible("question-payment");
  toggleVisible("question-order");

}

// 4. Read the value in button clicked, show the value, delete options and good bye message
const handleOrderConfirmationInput = (event) => {
  event.preventDefault();

  //read the input 
  const orderConfirmation = event.target.value;

  //choices depending on the input 
  if (orderConfirmation === "yes") {
    showMessage("Yes", 'user');
    toggleVisible("question-order");
    setTimeout(() => showMessage("Thank you for your order, enjoy your time!", 'bot'), 2000);

  } else if (orderConfirmation === "no") {
    showMessage("No", 'user');
    toggleVisible("question-order");
    setTimeout(() => showMessage("Sorry to hear you changed your mind, you are welcome back any time!", 'bot'), 2000);
  }
}


// Set up your eventlisteners here
sendButton.addEventListener("click", handleNameInput);
timeHourInput.addEventListener("click", handleTimeInput);
timeDayInput.addEventListener("click", handleTimeInput);
timeWeekInput.addEventListener("click", handleTimeInput);
paymentCashInput.addEventListener("click", handlePaymentInput);
paymentCreditInput.addEventListener("click", handlePaymentInput);
paymentPayLaterInput.addEventListener("click", handlePaymentInput);
orderConfirmationYesInput.addEventListener("click", handleOrderConfirmationInput);
orderConfirmationNoInput.addEventListener("click", handleOrderConfirmationInput);
