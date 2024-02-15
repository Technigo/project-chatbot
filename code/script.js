// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const selectElement = document.createElement('select');

// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
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

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// a function to invoke the greeting



// A function to start the conversation
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("What a great day to chat! To whom do I have the honor of speaking?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
}


//Function to handle name input
const handleNameInput = (event) => {
  event.preventDefault();

  const name = nameInput.value;
  showMessage(name, 'user');
  nameInput.value = "";
  //After handling name input, proceed to ask if they want to order
  setTimeout(() => greetAndAskOrder(name), 1000);
};


//Function to greet the user and ask if the would like to order
const greetAndAskOrder = (userName) => {
  showMessage(`Nice to meet you, ${userName}! Would you like to order something?`, 'bot')
};

//Function to handle user responses
const handleUserResponse = (message, sender) => {
  showMessage(message, sender);

if (sender === 'user' && message.toLowerCase() === 'yes') {
 // showMessage("That´s great! Here are your options:", 'bot')
  showFoodOptions();
}
};
//Function to handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault();
  
  const messageInput = event.target.querySelector('input[type="text"]');
  const message = messageInput.value;
  if (message) {
    handleUserResponse(message, 'user');
  }
  messageInput.value = "";
  if (event.target.id === 'name-form') {
    setTimeout(() => greetAndAskOrder(message), 1000);
  }
}
  

//Function to show food options
const showFoodOptions = () => {
 showMessage("That´s great! Here are your options:", 'bot')

 //Array of food options
 const foodOptions = ['Pizza', 'Sushi', 'Tacos'];


//create the HTML for the dropdown list
let dropdownHTML = '<select id="food-options">';
foodOptions.forEach(option => {
  dropdownHTML += `<option value="${option}">${option}</option>`;
});
dropdownHTML += '</select>'

//append the dropdown HTML to the chat
chat.innerHTML += dropdownHTML;
}




// Eventlisteners goes here 👇

nameForm.addEventListener('submit', handleFormSubmit);

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 800)

