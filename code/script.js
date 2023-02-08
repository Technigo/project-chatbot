// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
//const username = nameInput.value; // this won't work here because nameInput does not yet have a value, will only show up empty
const input = document.getElementById('input-wrapper');

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


  // Starts here - The greetUser function that is called at the end and starts the chat bot running is defined here.
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, crafter! Who do I have the pleasure of speaking with today?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

form.addEventListener('submit', function(event){
  event.preventDefault()
  const username = nameInput.value
  showMessage(username, 'user')
  setTimeout(() => showFirstResponse(username), 500) //the username in parentheses is passing off data to the next function showFirstResponse
});

const showFirstResponse = (username) => { //the param username is collecting the username data from previous function to be used in following function
  showMessage(`Hi there, ${username}! Are you interested in getting quilting, crochet, or cross-stitch ideas?`, 'bot')
  input.innerHTML = `
    <button id="quilt-button">Quilting</button>
    <button id="crochet-button">Crochet</button>
    <button id="cross-button">Cross-Stitch</button>
    </div> 
  `
  showCraftButtons();
}

const showCraftButtons = () => { //once the variables and eventListeners are stored in a function they can be called at any point and don't make the code break

  const quiltButton = document.getElementById('quilt-button');
  const crochetButton = document.getElementById('crochet-button');
  const crossButton = document.getElementById('cross-button');

  quiltButton.addEventListener('click', function() {
    //event.preventDefault()
    console.log("Quilt");
  });

  crochetButton.addEventListener('click', function() {
    //event.preventDefault()
    console.log("Crochet");
  });

  crossButton.addEventListener('click', function() {
    //event.preventDefault()
    console.log("Cross-stitch");
  });

}



// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500);


