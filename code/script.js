// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');

// If you need any global variables that you can use across different functions, declare them here:
let userName;

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
        <h1>👤</h1>
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log('Bot message:', message);
    chat.innerHTML += `
      <section class="bot-msg">
        <h1>🤖</h1>
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
  showMessage("Konnichiwa Globetrotter! I'm an AI Travel Bot, what is your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here




// const nameForm = document.getElementById('name-form');
// const nameInput = document.getElementById('name-input');

// let userName;

nameForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if(userName == null){
  userName = nameInput.value;
  showMessage(userName, 'user');
  nameInput.value = '';

  setTimeout(() => {
    const botMessage = `Hello ${userName}! Hope you're well!`;
    showMessage(botMessage, 'bot');
  }, 500);

  setTimeout(() => {
    const botMessage = `This is what I can do for you: 
<p>1 - Book a flight</p>
<p>2 - Book a hotel</p>
<p>3 - Book a rental car</p>`;
    showMessage(botMessage, 'bot');

    setTimeout(() => {
      const botMessage = `Please enter a number from 1 to 3 to select an option.`;
      showMessage(botMessage, 'bot');
    }, 2000);
  }, 4000);
} else{
    const userChoice = nameInput.value;
    showMessage(nameInput.value,'user')
    nameInput.value = '';
    let botReply = '';
    switch (userChoice) {
      case '1':
        botReply = `Great! I have booked a one-way ticket for you to Samarkand, Uzbekistan. Total price €1439. The details will be sent via email. Have a nice trip! ✈️`;
        break;
      case '2':
        botReply = `Good choice! A single room at City Inn Lodge in Botswana awaits you. I have booked 14 nights with breakfast included. Total price €2279. I wish you a pleasant stay! 🏨`;
        break;
      case '3':
        botReply = `Perfect! A Ford Escape (or similar) is waiting for you in Cheyenne, ID. 9 days rental including free miles and insurance. Total price $1203. Get ready for some inspired driving! 🚗`;
        break;
      default:
        botReply = `Invalid choice. Please select a number from 1 to 3.`;
    }

    setTimeout(() => {
      showMessage(botReply, 'bot');
    }, 6000);

    setTimeout(() => {
      const botMessage = `Thank you for using AI Travel Bot, see you another time, ${userName}. Bye!`;
      showMessage(botMessage, 'bot');
    }, 7000);

    setTimeout(() => {
      const botMessage = `<i>--- CRITICAL SERVER ERROR 36T56DUxPFIXVf XHNOJ420f3C5 ---</i>`;
      showMessage(botMessage, 'bot');
    }, 9000);

    setTimeout(() => {
      const botMessage = `<i>--- OFFLINE ---</i>`;
      showMessage(botMessage, 'bot');
    }, 9000);

  }
  });

const handleUserInput = (event) => {
  if (event.key === 'Enter') {
    const userMessage = nameInput.value;
    showMessage(userMessage, 'user');
    nameInput.value = '';

    const botReply = generateBotReply(userMessage);
    setTimeout(() => {
      showMessage(botReply, 'bot');
    }, 2000);
  }
};











// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)
