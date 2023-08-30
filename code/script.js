// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');
// If you need any global variables that you can use across different functions, declare them here:
let userName = '';

const handleRestaurantChoice = (choice) => {
  showMessage(`You have chosen ${choice}, thats my favorite restaurant to! 🤩 now its time to chose your favorite dish!`)
};

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
    console.log(`Nice to meet you!`)
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
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Welcome to Gotlands restaurant guide!, What's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Question 2
const askFavoriteRestaurant = () => {
showMessage(`Hi ${userName} ,Where would you like to eat today?`, 'bot');

//Clearing the input form.
inputWrapper.innerHTML = '';

// Adding buttons for choices
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('bubble', 'bot-bubble');
buttonContainer.innerHTML = `
<button class="restaurant-btn" data-choice="Mille lire" >Mille lire</button>
<button class="restaurant-btn" data-choice="Kasai">Kasai</button>
<button class="restaurant-btn" data-choice="Surfers">Surfers</button>
  `;

  const botMessageSection = document.createElement('section');
  botMessageSection.classList.add('bot-msg');
  botMessageSection.innerHTML = `
  <img src="assets/bot.png" alt="Bot" />
  `;
  botMessageSection.appendChild(buttonContainer);

  chat.appendChild(botMessageSection);



// Set up your eventlisteners here

// Eventlistener for the restaurantbuttons
buttonContainer.addEventListener('click', handleRestaurantButtonClick);
};

const handleRestaurantButtonClick = (event) => {
  const choice = event.target.getAttribute('data-choice');
  showMessage(`you have chosen ${choice} thats my favorite restaurant to! 🤩 Now it's time to choose your favorite dish!`);
};

// eventlistener for the nameform
nameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  userName = nameInput.value;
  inputWrapper.innerHTML ='';
  setTimeout(askFavoriteRestaurant, 800);
});

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 800)
