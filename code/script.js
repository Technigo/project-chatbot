// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');

//Global variables
let userName = '';
let chosenDish = '';

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

const greetUser = () => {
  showMessage("Welcome to Gotlands restaurant guide! What's your name?", 'bot');
}

// Event listener for the name form submission
nameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  userName = nameInput.value;
  inputWrapper.innerHTML = '';
  showMessage(`My name is ${userName}`, 'user');
  setTimeout(askFavoriteRestaurant, 1000);
});

// Function to ask the user to choose their favorite restaurant
const askFavoriteRestaurant = () => {
  showMessage(`Hi ${userName}, You look hungry I can help you get something to eat! `, 'bot');

  setTimeout(() => {
  const restaurantButtons = `
    <button class="restaurant-btn" data-choice="Mille lire">Mille lire</button>
    <button class="restaurant-btn" data-choice="Kasai">Kasai</button>
    <button class="restaurant-btn" data-choice="Surfers">Surfers</button>
  `;

  showMessage(`Please select your favorite restaurant:<br>${restaurantButtons}`, 'bot');
  document.querySelectorAll('.restaurant-btn').forEach(button => {
    button.addEventListener('click', handleRestaurantButtonClick);
  });
}, 1200); // 1,2-second delay
}

// Event handler for when a restaurant button is clicked
const handleRestaurantButtonClick = (event) => {
  const choice = event.target.getAttribute('data-choice');
  chosenDish = ''; // Resets the chosen dish
  handleRestaurantChoice(choice);
}

// Function to handle the user's restaurant choice
const handleRestaurantChoice = (choice) => {
  showMessage(`You have chosen ${choice}, that's my favorite restaurant too! Now, what dish would you like to order?`, 'bot');
  
  setTimeout(() => {
  const dishOptions = {
    'Mille lire': ['Antipasto', 'Margherita', 'Napoli'],
    'Surfers': ['Bang bang ji zi', 'Sishuan Liang Mian', 'Beef Shui Zhu'],
    'Kasai': ['Crispy tempura roll', 'Truffle mushroom roll', 'Sashimi moriawase']
  };

  const dishButtons = dishOptions[choice].map(dish => `<button class="dish-btn" data-dish="${dish}">${dish}</button>`).join('');
  showMessage(`Please choose your favorite dish:<br>${dishButtons}`, 'bot');
  
  document.querySelectorAll('.dish-btn').forEach(button => {
    button.addEventListener('click', handleDishButtonClick);
  });
}, 1200); // 1-second delay
}

// Event handler for when a dish button is clicked
const handleDishButtonClick = (event) => {
  const dish = event.target.getAttribute('data-dish');
  chosenDish = dish;

  
showMessage(`I would like to have a ${dish}`, `user`)
   
    setTimeout(() => {
      // Bot's response
      showMessage(`Your order is being prepared and will be ready in about 20 minutes! Enjoy your meal, ${userName}!`, 'bot');
    }, 1200); // 1,2-second 
  

setTimeout(() => {
  showMessage(`Thank you, Bob bot, for your help! It's gonna be delicious! 😄`, 'user');
}, 1200);
}
// When the website loads, start the interaction after a delay
setTimeout(greetUser, 1000);