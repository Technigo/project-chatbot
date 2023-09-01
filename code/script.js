// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const startButton = document.getElementById("start-btn");

// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    console.log("The user said something")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log("The bot said something")
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
  showMessage("Hello there, What's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleNameInput = (event) => {
  console.log("submit")
  event.preventDefault();
  const name = nameInput.value;
  nameInput.value = '';
  showMessage (`${name}`, `user`)
  showMessage (`Hi ${name}`, `bot`);
  setTimeout(pizzaOption, 1000);
  }

const pizzaOption = () => {

    showMessage (`What pizza would you like?`, 'bot')
  
    form.innerHTML = `
      <button class="options" id="margheritaBtn">margherita</button>
      <button class="options" id="vesuvioBtn">vesuvio</button>
      <button class="options" id="funghiBtn">funghi</button>
  `
  document.getElementById('margheritaBtn')
  .addEventListener('click', (noSubmit) => {noSubmit.preventDefault(); selectedPizza ('margherita')})
  setTimeout(selectedPizza, 1000)
  document.getElementById('vesuvioBtn')
  .addEventListener('click', (noSubmit) => {noSubmit.preventDefault(); selectedPizza ('vesuvio')})
  setTimeout(selectedPizza, 1000)
  document.getElementById('funghiBtn')
  .addEventListener('click', (noSubmit) => {noSubmit.preventDefault(); selectedPizza ('funghi')})
  setTimeout(selectedPizza, 1000)
}

const selectedPizza = (selectedPizza) => {

  if (selectedPizza === 'margherita'){
    showMessage(`I want a Margherita!`, 'user')
    showMessage(`One Margherita for You!`, 'bot')
    setTimeout(byeBye, 1000)
    
  } else if (selectedPizza === 'vesuvio'){
    showMessage(`I want a Vesuvio!`, 'user')
    showMessage(`One Vesuvio for You!`, 'bot')
    setTimeout(byeBye, 1000)
    
  } else if (selectedPizza === 'funghi'){
    showMessage(`I want a Funghi!`, 'user')
    showMessage(`One Funghi for You!`, 'bot')
    setTimeout(byeBye, 1000)
    
  }
 
}

const byeBye = () => {
  showMessage(`Bye Bye!`, 'bot')
  form.innerHTML = ``

}

// Set up your eventlisteners here


form.addEventListener("submit", (handleNameInput));
startButton.addEventListener('click', function() {
  setTimeout (greetUser, 500);
  startButton.style.display = 'none'; });
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
//setTimeout(greetUser, 1000)
