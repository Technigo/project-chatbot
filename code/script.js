// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameForm = document.getElementById('name-form');
const input = document.getElementById('input');
const sendBtn = document.getElementById('send-btn');

// GLOBAL VARIABLES
// Declaring the question number that will change
let questionNumber = '';

// FUNCTIONS
// Chat bot answer function:
const botMessage = (inputMessage) => {
  showMessage(inputMessage, 'bot');
}

// User answer function:
const userMessage = (inputMessage) => {
  showMessage(inputMessage, 'user');
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
    if (sender === 'user') {
        chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/001-woman.png" alt="User" />  
      </section>
    `
    } else if (sender === 'bot') {
        chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/049-mirror.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
    }
    // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
    chat.scrollTop = chat.scrollHeight
};


// Sequency of QUESTION/ANSWER function:
const nextQuestion = (message) => {
  if (questionNumber === 1) {
    userMessage(message)
    // After the message is sent, input value becomes empty again.
    input.value = ''
    // Next bot question apears in 1s
    setTimeout(() => allServices(message), 1000)
  } else if (questionNumber === 2) {
    userMessage(message)
    setTimeout(() => serviceChoice(message), 1000)
  } else if (questionNumber === 3) {
    userMessage(message)
    setTimeout(() => priceMessage(message), 1000)
  } else if (questionNumber === 4) {
    userMessage(message)
    setTimeout(() => goodbyeMessage(), 1000)
  }
}

// Starts here - BOT MESSAGES
// First message
const greeting = () => {
  questionNumber = 1;
  botMessage(`Happy to see you! <br> What's your name?`)
}

// Second message
const allServices = (usersName) => {
  questionNumber = 2;
  botMessage(`Nice to meet you ${usersName}. What service are you interested in?`)

  // Adding buttons for the user to choose the service
  inputWrapper.innerHTML = `
  <button id="hairBtn">Hair services</button>
  <button id="nailBtn">Nail services</button>
  `
  // Adding event listeners to "catch" when the user clicks the button
  document.getElementById('hairBtn').addEventListener('click', () => nextQuestion('Hair service'));
  document.getElementById('nailBtn').addEventListener('click', () => nextQuestion('Nail service'));
}

// Third message 
const serviceChoice = (choice) => {
  questionNumber = 3;

  botMessage(`Great choice! Now you can select in which ${choice} are you interested in`)

  if (choice === 'Hair service') {

    inputWrapper.innerHTML = `
    <button id="hairCut">Hair Cut</button>
    <button id="hairStyle">Hair Style</button>
  `
  document.getElementById('hairCut').addEventListener('click', () => nextQuestion('Haircut'));
  document.getElementById('hairStyle').addEventListener('click', () => nextQuestion('Hairstyle'));
  
  } else if (choice === 'Nail service') {

    inputWrapper.innerHTML = `
    <button id="gelNailPolish">Gel nail polish</button>
    <button id="manicure">Manicure</button>
  `
    document.getElementById('gelNailPolish').addEventListener('click', () => nextQuestion('Gel nail poslish'));
    document.getElementById('manicure').addEventListener('click', () => nextQuestion('Manicure'));
  }
}

// Fourth message
const priceMessage = (choiceMade) => {
  questionNumber = 4;
  

  if (choiceMade === 'Haircut') {
    botMessage(`The cost of a haircut is usually in a range $50 - $60.`)
    botMessage(`Please type in your phone number and our Administrator will contact you to make a booking.`)

  } else if (choiceMade === 'Hairstyle') {
    botMessage(`The cost of a hairstyle is usually in a range $20 - $40.`)
    botMessage(`Please type in your phone number and our Administrator will contact you to make a booking.`)

  } else if (choiceMade === 'Gel nail poslish') {
    botMessage(`The cost of a gel nail polish is usually in a range $15 - $25.`)
    botMessage(`Please type in your phone number and our Administrator will contact you to make a booking.`)

  } else if (choiceMade === 'Manicure') {
    botMessage(`The cost of a manicure is usually in a range $7 - $15.`)
    botMessage(`Please type in your phone number and our Administrator will contact you to make a booking.`)
  }

  inputWrapper.innerHTML = `
  <form id="number-form">
  <input id="input-number" type="number"/>
  <button id = "send-number-btn" class="send-number-btn" type="submit">
  Send
  </button>
  </form>
  `
  const sendNumberBtn = document.getElementById('send-number-btn')
  const inputNumber = document.getElementById('input-number')
    sendNumberBtn.addEventListener('click', (event) => {
    event.preventDefault();
    nextQuestion(inputNumber.value);
    }); 
}

// Fifth message
const goodbyeMessage = () => {
  questionNumber = 5;

  botMessage(`Thank you! Our Beauty Studio administrator will contact you shortly.`)
  botMessage(`Have a nice day!`)

  inputWrapper.innerHTML = `
  <form id="number-form">
  <div></div>
  </form>
  `
} 

// EVENTLISTENERS

//SEND button pressed
    sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    nextQuestion(input.value);
});

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)