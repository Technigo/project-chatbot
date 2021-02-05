// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');

// Global variables, if you need any, declared here


// Functions declared here

const handleNameInput = (event) => {
  event.preventDefault()
  const name = nameInput.value;
  showMessage(name, 'user');
  nameInput.value = "";
  setTimeout(() => showMessage(`Hi ${name}! I am here to assist you booking a trip.`, 'bot'),1000);
  handleQuestion1()
}

const handleQuestion1 = () => {
  setTimeout(() => showMessage("Where would you like to travel?","bot"),2000);

  inputWrapper.innerHTML=`
  <button id="button-italy">
    Italy
  </button>
  <button id="button-france">
  France
  </button>
  `
  document
  .getElementById("button-italy")
  .addEventListener("click", () => {
  showMessage("Italy", "user")
  setTimeout(() => showMessage("Wow! You want to go to Italy", "bot"), 1000);
  //handleQuestion2()
  })

  document
  .getElementById("button-france")
  .addEventListener("click", () => {
  showMessage("France", "user")
  setTimeout(() => showMessage("Wow! You want to go to France.", "bot"),1000);
  handleQuestion2()
  })
}




// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
    //document.getElementById('name-input').value = "";
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hi and welcome to Travel Planner! What's your name?`, 'bot')
}

// Set up your eventlisteners here
 form.addEventListener("submit", handleNameInput)
 setTimeout(greeting, 1000)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.


