// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')


// If you need any global variables that you can use across different functions, declare them here:
// Declare your functions after this comment
// This function will add a chat bubble in the correct place based on who the sender is 


//------------------------------MESSAGE ON CHAT ---------//
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
  chat.scrollTop = chat.scrollHeight
}

// -------------------------SHOW THE FIRST MESSAGE HALLO---------------//
// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}
//--------------------
// Set up your eventlisteners here
const handleNameInput = (event) => {
  event.preventDefault();
  // Store the value in a variable so we can access it after we
  // clear it from the input
  const name = nameInput.value;
  if (name === '1' || name === '2' || name === '3') {
    handleFoodChoice(name);
  } else {
    console.log("I m the function");
    showMessage(name, "user");
    nameInput.value = "";
     // After 1 second, show the next question by invoking the next function.
    // passing the name into it to have access to the user's name if we want
    // to use it in the next question from the bot.
    setTimeout(() => showFoodOptions(name), 1000);
  }
};

const showFoodOptions = (name) => {
  console.log('showFoodOptions is being called with name:', name);
  showMessage(`Nice to meet you, ${name}! What kind of food would you like?`, 'bot');
  showMessage('Please choose one of the following options:Write a number', 'bot', 1000);
  showMessage('1. Pizza  2. Salad  3. Macaroni', 'bot', 2000);
};

const handleFoodChoice = (choice) => {
  //event.preventDefault();
  console.log('handleFoodChoice', choice); 
  console.log('User choice:', choice); 
  if (choice === '1') {
    showMessage('I chose Pizza!', 'user');
  } else if (choice === '2') {
    showMessage('I chose Salad!', 'user');
  } else if (choice === '3') {
    showMessage('I chose Pasta!', 'user');
  } else {
    showMessage('Invalid choice. Please choose a valid option.', 'user');
  }
};


const nameForm = document.getElementById('name-form');
nameForm.addEventListener('submit', handleNameInput);





const handleTypeofFood = (pizzaType, pastaType, SaladType) => {
  console.log('User choice:', pizzaType, pastaType, SaladType); 
  if ('1' === pizzaType) {
    console.log('handleTypeofFood'); 
    showMessage('You chose Pizza!', 'bot')
  }else if ('I chose Pasta!' === pastaType){
    showMessage('You chose Salad', 'bot')
  }else if ('I chose Salad!' === SaladType){
    showMessage('You chose Pasta!', 'bot')
  }
  
}

const typOfFood = document.getElementById('name-form');
typOfFood.addEventListener('submit',handleTypeofFood);

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500)
