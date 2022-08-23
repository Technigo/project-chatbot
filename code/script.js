// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const form = document.getElementById('name-form');
const roomInput = document.getElementById('name-input'); //user writes their room
const sendBtn = document.getElementById('send-btn');

  // added variables pointing to html Ids, changed it to room numbers instad of name /S //

  
// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment


// This function will add a chat bubble in the correct place based on who the sender is

const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
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
    console.log('bot-message') //added console log
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

// Conversations starts here

// Question 1 - What is your room number?

const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello, what is your room number?", 'bot'); //changed message/S//
};

// Answer with room number from user 

const handleFormInput = (event) => { // at submit this function will be invoked
  event.preventDefault() // prevents website refresh at submit
  const room = roomInput.value // input value will be stored in the const name
  showMessage(`My room number is ${room}.`, 'user') // users answer 
  roomInput.value = '' // clearing room input setting it to an empty string
  setTimeout(() => helpSelection(room), 1000) // passing the arguments to next function with 1sec delay
}

// Question 2 - What do you need help with today?

const helpSelection = () => {
  showMessage(`Hello room, what can I help you with today?`, 'bot');
  inputWrapper.innerHTML = `
  <button id="amenities" type="sbumit">Amenities </button>;
  <button id="room-service" type="submit">Rooom service </button>;
  <button id="wake-up-call" type="submit">Wake-up call </button>
  `
  document.getElementById('amenities').addEventListener('click',() => selectionAnswer ('amenities'));
  document.getElementById('room-service').addEventListener('click',() => selectionAnswer ('room-service'));
  document.getElementById('wake-up-call').addEventListener('click',() => selectionAnswer ('wake-up-call'));
}

// functions for what the guest chooses

const selectionAnswer = (selection) => {

  if (selection === 'amenities') {
    showMessage(`I need amenities, please`, 'user')
    setTimeout(() => showMessage(`Sure, what do you need?`, 'bot'),1000)
    inputWrapper.innerHTML = `
    <button id="toothbrush" type="sbumit">Toothbrush & paste </button>;
    <button id="schampoo" type="submit">Schampoo & Conditioner </button>;
    <button id="toiletpaper" type="submit">Toiletpaper </button>
    `
    document.getElementById('toothbrush').addEventListener('click',() => 
      setTimeout(() => showMessage(`I need some toothbrush and toothpaste`, 'user')), 1000);
    document.getElementById('schampoo').addEventListener('click',() =>
      setTimeout(() => showMessage(`I need some schampoo and conditioner`, 'user')),1000);
    document.getElementById('toiletpaper').addEventListener('click',() => 
      setTimeout(() => showMessage(`I need some toiletpaper`, 'user')), 1000);

    
  }

  else if (selection === 'room-service') {
    showMessage(`I need food, please`, 'user')
    setTimeout(() => showMessage(`Of course, what are you in the mood for?`, 'bot'),1000)
    inputWrapper.innerHTML = `
    <button id="pasta" type="sbumit">Pasta Carbonara </button>;
    <button id="sallad" type="submit">Ceaser Salad</button>;
    <button id="frenchToast" type="submit">French TOast </button>
     `
    document.getElementById('pasta').addEventListener('click', () =>
    setTimeout(() => showMessage(`I would love som Pasta Carbonara`, 'user')), 1000);
    document.getElementById('sallad').addEventListener('click', () =>
    setTimeout(() => showMessage(`I could eat a Ceaser Salad`, 'user')), 1000);
    document.getElementById('frenchToast').addEventListener('click', () =>
    setTimeout(() => showMessage(`I crave some French Toast`, 'user')), 1000);

  }

  else  {
    showMessage(`I need a wake-up-call.`, 'user');
    setTimeout(() => showMessage(`Sure, at what time?`, 'bot'),1000)
    inputWrapper.innerHTML = `
    <input id="time-input" type="text">
    <button id="send-btn" class="send-btn" type="submit">Send </button>
    `
    const wakeUpTime = () => {document.getElementById('time-input'), setTimeout(() => showMessage(`I need to wake up at ${wakeUpTime}`, 'user'), 1000);
    }
  };

  setTimeout(() => goodbye, 1000)
}

// Question 3 
const goodbye = () => {
showMessage('We will take care of that for you right away! Goodbye', 'bot')
}


// Set up your eventlisteners here

form.addEventListener('submit', handleFormInput);

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 600);
