// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');
// If you need any global variables that you can use across different functions, declare them here:
let userName = '';


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

// Function to ask the user to choose their favorite restaurant
const askFavoriteRestaurant = () => {
  showMessage(`Hi ${userName}, choose your favorite restaurant!`, 'bot');

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('bubble', 'bot-bubble', 'button-container');
  buttonContainer.innerHTML = `
    <button class="restaurant-btn" data-choice="Mille lire">Mille lire</button>
    <button class="restaurant-btn" data-choice="Kasai">Kasai</button>
    <button class="restaurant-btn" data-choice="Surfers">Surfers</button>
  `;

  const botMessageSection = document.createElement('section');
  botMessageSection.classList.add('bot-msg');
  botMessageSection.appendChild(buttonContainer);

  const botImage = document.createElement('img');
  botImage.src = 'assets/bot.png';
  botImage.alt = 'Bot';
  botMessageSection.appendChild(botImage);

  buttonContainer.addEventListener('click', handleRestaurantButtonClick);

  chat.appendChild(botMessageSection);
};

// Event listener for the name form submission
nameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  userName = nameInput.value;
  inputWrapper.innerHTML = '';
  setTimeout(askFavoriteRestaurant, 800);
});

// Event listener for when a restaurant button is clicked
const handleRestaurantButtonClick = (event) => {
  const choice = event.target.getAttribute('data-choice');
  handleRestaurantChoice(choice);
};

// Function to handle the user's restaurant choice
const handleRestaurantChoice = (choice) => {
  showMessage(`You have chosen ${choice}, that's my favorite restaurant too! Now it's time to choose your favorite dish!`, 'bot');
  
  const dishOptions = {
    'Mille lire': ['Antipasto', 'Margherita', 'Napoli'],
    'Surfers': ['Bang bang ji zi', 'Sishuan Liang Mian', 'Beef Shui Zhu'],
    'Kasai': ['Crispy tempura roll', 'Truffle mushroom roll', 'Sashimi moriawase']
  };

  const dishButtons = dishOptions[choice].map(dish => `<button class="dish-btn" data-dish="${dish}">${dish}</button>`).join('');
  showMessage(`Please choose your favorite dish: ${dishButtons}`, 'bot');

  chat.removeEventListener('click', handleRestaurantButtonClick);
  chat.addEventListener('click', handleDishButtonClick);
};

// Function to handle the user's dish button click
const handleDishButtonClick = (event) => {
  const dishButton = event.target.closest('.dish-btn');
  
  if (dishButton) {
    const dish = dishButton.getAttribute('data-dish');
    showMessage(`You have chosen ${dish}. Please choose the serving size:`, 'bot');
  }
};


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 800)
