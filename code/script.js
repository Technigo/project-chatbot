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
  showMessage("Pasta sounds good!", 'user')
  showMessage("Pasta it is! I think you would enjoy a creamy Pasta Carbonara", 'bot')
  setTimeout(() => FoodChoice(event.target.value), 1200)
  inputWrapper.style.display = 'none';
});

let Salad = document.getElementById('Salad');
Salad.addEventListener('click', (event) => {
  event.preventDefault()
  showMessage("Salad sounds good!", 'user')
  showMessage("So, a salad. You would probably enjoy a creamy Ceasar Salad.", 'bot')
  setTimeout(() => FoodChoice(event.target.value), 1200)
  inputWrapper.style.display = 'none';
});

let Meat = document.getElementById('Meat');
Meat.addEventListener('click', (event) => {
  event.preventDefault()
  showMessage("Meat sounds good!", 'user')
  showMessage("Meat! You should make yourself a tender brisket", 'bot')
  setTimeout(() => FoodChoice(event.target.value), 1200)
  inputWrapper.style.display = 'none';
});
}

const FoodChoice = (WhatToEat) => {
  
  if (WhatToEat === 'Pasta') {
    showMessage("Don't forget to cook the spagetthi al dente! Are you satisfied with our dinner suggestion?", 'bot');
  } else if (WhatToEat === 'Salad') {
    showMessage("Don't forget to put anchovies in the salad dressing! Are you satisfied with our dinner suggestion?", 'bot')
  } else if (WhatToEat === 'Meat') {
    showMessage("Make sure you give the brisket the time it needs in the oven! Are you satisfied with our dinner suggestion?", 'bot')
  }
  
  inputWrapper.innerHTML =
  `<button id="yes" type="submit" value="yes">Yes</button>
  <button id="no" type="submit" value="no">No</button>`;

let yes = document.getElementById('yes');
yes.addEventListener('click', (event) => {
  event.preventDefault();
  showMessage("Yes, I'm satisfied!", 'user')
  showMessage("Great! Have a nice meal!", 'bot');
  inputWrapper.style.display = 'none';
});

let no = document.getElementById('no');
no.addEventListener('click', (event) => {
  event.preventDefault();
  showMessage("No, I would like to eat something else...", 'user')
  showMessage("Okay, let me know if you need any more suggestions.", 'bot');
  inputWrapper.style.display = 'none';
});

inputWrapper.style.display = 'block';
chat.scrollTop = chat.scrollHeight;
}

chat.scrollTop = chat.scrollHeight;
  //Eventlisteners for the previous buttons - these should call for the next function as well

 
// Set up your eventlisteners here

userForm.addEventListener('submit', handleNameInput);



