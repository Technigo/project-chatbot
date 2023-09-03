
// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const nameForm = document.getElementById('name-form');
const inputHandle = document.getElementById('input-wrapper')
const sendButton = document.getElementById('send-btn')

// // If you need any global variables that you can use across different functions, declare them here:
let userName = '';
let foodOptions = '';
let foodMessage = '';


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is

const showMessage = (message, sender) => {
  console.log("MESSAGE IS:", message);
  console.log("SENDER IS:", sender);
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;

    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message

  } else if (sender === 'bot') {
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

const greetUser = () => {
  showMessage("Hi! Welcome. What's your name?", 'bot');
};

setTimeout(greetUser, 1000);

const handleNameInput = (event) => {
  console.log("event");
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";
  showMessage(`I'm ${userName}! Nice to meet you!`, 'user');
  setTimeout(reply, 1000);
};

nameForm.addEventListener("submit", handleNameInput);

function reply() {
  console.log("reply");
  showMessage(`Are you hungry, ${userName}? please choose your food.`, 'bot');



  //This inject the buttons to the htlm
  inputHandle.innerHTML = `
<button class="send-btn" id="pizza">Pizza</button>
<button class="send-btn" id="pasta">Pasta</button>
<button class="send-btn" id="salad">Salad</button>

`;

  const foodButtons = inputHandle.querySelectorAll('.send-btn');
  console.log("foodbuttons");
  foodButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const selectedfood = event.target.id;
      showMessage(`Amazing! You've selected ${selectedfood}!`, 'bot');
      foodChoice(selectedfood);

    });
  });
}

// Set up your eventlisteners here

function foodChoice(choice) {
  console.log("foodchoice");
  inputHandle.innerHTML = '';



  if (choice === 'pizza') {
    foodOptions = ['Napolitana', 'Margeritha', 'Bianca'];
    foodMessage = 'Which pizza would you like to order? Choose from the menu.';
  } else if (choice === 'pasta') {
    foodOptions = ['Cacio e Pepe', 'Vongole', 'Carbonara'];
    foodMessage = 'Which pasta would you like to order? Choose from the menu.';
  } else if (choice === 'salad') {
    foodOptions = ['Pomodoro e basilico', 'Buratta', 'Melon e Peperoncino'];
    foodMessage = 'Which salad would you like to order? Choose from the menu.';
  }

  showMessage(foodMessage, 'bot');

  // Dropdown menu

  const dropdown = document.createElement('select');
  console.log("select");
  dropdown.id = 'food-dropdown';


  dropdown.classList.add('dropdown-style');


  foodOptions.forEach(option => {
    console.log("option");
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    dropdown.appendChild(optionElement);
  });


  dropdown.addEventListener('change', (event) => {
    console.log("change");
    const selectedfood = event.target.value;
    showMessage(`Yummy! You've selected ${selectedfood}.`, 'bot');
    showAgeOptions(selectedfood);
  });

  inputHandle.appendChild(dropdown);
}


function showAgeOptions(selectedSize) {
  console.log(showAgeOptions);
  showMessage(`Great ${userName}! What size do you like to order your food? Do you want a regular size or small size, may I ask if you are an adult or child?`, 'bot');
  inputHandle.innerHTML = '';

  const ageButtons = document.createElement('div');
  console.log(ageButtons);
  ageButtons.innerHTML = `
  <button class="send-btn" id= "adult">Adult</button>
  <button class="send-btn" id= "child">Child</button>
  `;
  inputHandle.appendChild(ageButtons);

  const ageButtonsElements = ageButtons.querySelectorAll('.send-btn')
  console.log(ageButtonsElements);
  ageButtonsElements.forEach(button => {
    button.addEventListener('click', (event) => {
      const selectedSize = event.target.id;
      showMessage(`You've selected the ${selectedSize} option!`, 'bot');
      ageOptions(selectedSize);
    });
  });

}

function ageOptions(choice) {
  console.log(ageOptions);
  inputHandle.innerHTML = '';

  if (choice === 'adult') {
    showMessage(`The price for a adult size food is 15€.`, 'bot');
  } else if (choice === 'child') {
    showMessage(`The price for a small size food is 10€.`, 'bot');
    orderConfirmation(choice);
  };
};

// I have been struggling with this part a lot - I dont find the solution and the time is running out - sunday evening. 

function orderConfirmation(foodChoice, selectedSize) {
  showMessage(`This is your order, ${userName}: ${foodChoice} (${selectedSize} size).`, 'bot');

  inputHandle.innerHTML = ` 
    <button class="send-btn" id="confirm">Yes, I accept this order!</button>
    <button class="send-btn" id="cancel">No, I want to cancel my order.</button>
  `;

  const confirmBtn = document.getElementById('confirm');
  const cancelBtn = document.getElementById('cancel');

  confirmBtn.addEventListener('click', () => {
    showMessage(`Thanks for confirming your order! You ordered ${foodChoice} (${selectedSize} size). Your food will soon be at your place.`, 'bot');
    inputHandle.innerHTML = '';
  });

  cancelBtn.addEventListener('click', () => {
    showMessage(`Your order has been canceled. Welcome back! Feel free to order food next time you are hungry.`, 'bot');
    inputHandle.innerHTML = '';
  });
}













// Starts here
// After 1 second, show the next question by invoking the next function.
// passing the name into it to have access to the user's name if we want
// to use it in the next question from the bot.




// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:

// This means the greeting function will be called one second after the website is loaded.


// After 1 second, show the next question by invoking the next function.
// passing the name into it to have access to the user's name if we want
// to use it in the next question from the bot.


