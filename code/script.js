// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const userForm = document.getElementById('user-form');
const sendBtn = document.getElementById('send-btn');
const inputWrapper = document.getElementById('input-wrapper');

// If you need any global variables that you can use across different functions, declare them here:

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
        <img src="assets/user2.png" alt="User" />  
      </section>
    `

    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot2.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
}
setTimeout(greetUser, 1000);


const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value 
  showMessage(`Hi! My name is ${name}`, 'user');
  nameInput.value=''

  setTimeout( () => showMessage(`Hello ${name}! What are you in the mood for today?`, 'bot'), 800);

  setTimeout(() => WhatToEat(name), 1200)
}
//Here I call the next function

const WhatToEat = (name) => {

  //A choice of different food options show up here
  inputWrapper.innerHTML =
  `<button id="Pasta" type="submit" value="Pasta">Pasta</button>
  <button id="Salad" type="submit" value="Salad">Salad</button>
  <button id="Meat" type="submit" value="Meat">Meat</button>`;

  //Eventlisteners for the previous buttons - these should call for the next function as well

let Pasta = document.getElementById('Pasta');
Pasta.addEventListener('click', (event) => {
  event.preventDefault()
  showMessage("Fab choice! Here is a recipe for a creamy Pasta Carbonara", 'bot')
  setTimeout(() => FoodChoice(event.target.value), 1200)
});

let Salad = document.getElementById('Salad');
Salad.addEventListener('click', (event) => {
  event.preventDefault()
  showMessage("Fab choice! Here is a recipe for a delish Ceasar salad", 'bot')
  setTimeout(() => FoodChoice(event.target.value), 1200)
});

let Meat = document.getElementById('Meat');
Meat.addEventListener('click', (event) => {
  event.preventDefault()
  showMessage("Fab choice! Here is a recipe for a tender brisket", 'bot')
  setTimeout(() => FoodChoice(event.target.value), 1200)
});

}

const FoodChoice = (WhatToEat) => {
  // Shows in console.log, how to put bot value on message function? 
  if (WhatToEat === 'Pasta') {
    showMessage("https://www.jocooks.com/recipes/creamy-carbonara/", 'bot');
  } else if (WhatToEat === 'Salad') {
    showMessage("https://natashaskitchen.com/caesar-salad-recipe/", 'bot')
  } else if (WhatToEat === 'Meat') {
    showMessage("https://www.recipetineats.com/slow-cooker-beef-brisket-with-bbq-sauce/", 'bot')
  }
}
// Set up your eventlisteners here

userForm.addEventListener('submit', handleNameInput);



