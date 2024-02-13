// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat');
const sendButton = document.getElementById('send-button');
const nameInput = document.getElementById('name-input');
const foodCategory =  document.getElementById("food-category");
const nameWrapper = document.getElementById("input-wrapper");

const pizzaButton = document.getElementById("pizza-button");
const saladButton = document.getElementById("salad-button");
const kebabButton = document.getElementById("kebab-button");

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


// A function to start the conversation
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, what's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
}

const foodOptions = (name) => {
  foodCategory.style.display = "flex";
  nameWrapper.style.display = "none";
  showMessage(
    `
  Hi ${name}! What would you like to order? `, "bot"
  );
};

//Skapa stor CS för alla val ex if pizza....alt, els if sallad osv
const pizzaOptions = (category) => {
  showMessage(`You chose ${category}`, "bot");

}

//Store name for future use. 
//Clear name input
const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  console.log(name);
  showMessage(name, "user");
  nameInput.value = "";
  foodOptions(name);
}
 


// Eventlisteners goes here 👇
sendButton.onclick = handleNameInput;
pizzaButton.onclick = pizzaOptions("pizza"); 
kebabButton.onclick = pizzaOptions("kebab"); 


// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)
