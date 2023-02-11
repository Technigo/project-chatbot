// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const userForm = document.getElementById('user-form');
const sendBtn = document.getElementById('send-btn');
const inputWrapper = document.getElementById('input-wrapper');

// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value 
  showMessage(`Hi! My name is ${name}`, 'user');
  nameInput.value=''

  setTimeout( () => showMessage(`Hello ${name} ! What are you in the mood for today?`, 'bot'), 200);

  //A choice of different food options show up here
inputWrapper.innerHTML =
    `<button id="Pasta" type="submit" value="Pasta">Pasta</button>
    <button id="Salad" type="submit" value="Salad">Salad</button>
    <button id="Meat" type="submit" value="Meat">Meat</button>`;

  
  let Pasta = document.getElementById('Pasta');
  Pasta.addEventListener('click', () => {
    type = "Pasta";
    handleInput("Pasta!");
  });

  let Salad = document.getElementById('Salad');
  Salad.addEventListener('click', () => {
    type = "Salad";
    handleInput("Salad!");
  });

  let Meat = document.getElementById('Meat');
  Meat.addEventListener('click', () => {
    type = "Meat";
    handleInput("Meat!");
  });
}

setTimeout(handleNameInput ,1000);
//Depending on wich button user clicks different recipes will show up, NOT WORKING

//const handleInput = (message) => {
  //if (handleNameInput === Pasta) {showMessage("I'd like to eat Pasta tonight!",'user');
  //setTimeout(() => ShowMessage("Fab choice! Here is a recipe for a creamy Pasta Carbonara", 'bot'), 1000);
    
  //} else if (handleNameInput === Salad) {showMessage("I'd like to eat Salad tonight!",'user');
  //setTimeout(() => ShowMessage("Fab choice! Here is a recipe for a creamy Ceasar Salad", 'bot'), 1000);
    
  //} else (handleNameInput === Meat) {showMessage("I'd like to eat Meat tonight!",'user');
  //setTimeout(() => ShowMessage("Fab choice! Here is a recipe for a nice brisket", 'bot'), 1000);
  //}
//};

//If user clicks Pasta this runs

//If user clicks Salad this runs

//If user clicks Meat this runs

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
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
}
setTimeout(greetUser, 1000);


// Set up your eventlisteners here

userForm.addEventListener('submit', handleNameInput);



