// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const form = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper');
let question = 1;

// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment
  const handleNameInput = (event) => {
    event.preventDefault()
    console.log("test")
    // Store the value in a variable so we can access it after we 
    // clear it from the input
    const name = nameInput.value
    showMessage(name, 'user')
    nameInput.value = ''

    // After 1 second, show the next question by invoking the next function.
    // passing the name into it to have access to the user's name if we want
    // to use it in the next question from the bot.
    setTimeout(() => showEmergencies(name), 1000)
  }

  const showEmergencies = () => {
    inputWrapper.innerHTML = `
    <button id="bleached">Help! I accidently bleached my hair</button>
    <button id= "bald"> I woke up bald!</button>
    <button id= "wedding">Need a last minute wedding-do!</button>`
  
    document.getElementById("bleached")
    .addEventListener('click', () => nextQuestion('bleached'));
    document.getElementById("bald")
    .addEventListener('click', () => nextQuestion('bald'));
    document.getElementById("wedding")
    .addEventListener('click', () => nextQuestion('wedding'));
  }
  const showBleachedOptions = () => {
    inputWrapper.innerHTML = `
    <select id="select">
        <option value="" selected disabled>Select your fix</option>
        <option value="color">Color it back to normal</option>
        <option value="cut">Cut it off</option>
      </select>
      `
  }
  const nextQuestion = (service) => {
    console.log("question number", question);
    if (question === 1) {
      setTimeout(() => showBleachedOptions(), 1000)  
    } else if (question === 2) {
      setTimeout(() => showMessage('Sorry we cant help you (sorry-emoji)'), 1000)
    }
  }

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
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello! What is your hair emergency?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

 
// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
showEmergencies();

form.addEventListener('submit', (event)=> {
  event.preventDefault()
  const name = nameInput.value
    showMessage(name, 'user')
    nameInput.value = ''

    setTimeout(showMessage(`Welcome ${name}!`, 'bot'), 1000);
});
