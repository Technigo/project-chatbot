// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const form = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const buttonInput = document.getElementById('send-btn');


// If you need any global variables that you can use across different functions, declare them here:
let question = 1;

// Declare your functions after this comment
const botAnswer = (inputCommunicate) => {
  showMessage(inputCommunicate, 'bot')
};

const userAnswer = (inputCommunicate) => {
  showMessage(inputCommunicate, 'user')
};


// Dialogue.
const userSpa = (message) => {
  if (question === 1) {
    userAnswer(message)
    setTimeout(() => showSpaOptions(message), 1000)
  } else if (question === 2) {
    userAnswer(message)
    setTimeout(() => choosingOptions(message), 2000)
  } else if (question === 3) {
    userAnswer(message)
    setTimeout(() => emailAddressAnswer(message), 2000)
  } else if (question === 4) {
    userAnswer(message)
    setTimeout(() => theEndAnswer(message), 2000)
}};

// This function only shows us the user's answer.
const handleAnswer = (event) => {
  event.preventDefault()
  console.log("Question number: " + question)
  if (question === 1) {
    nameAnswer(event)
  }
  else if (question === 3) {
    emailAddressAnswer(event)
  }
};

// This function will add a chat bubble in the correct place based on who the sender is
function showMessage(message, sender) {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  botAnswer(`Hello there, What's your name?`, 'bot')
  console.log('This is bot writing')
  // Just to check it out, change 'bot' to 'user' here 👆
};

// first user answer 
const nameAnswer = ((event) => {
  question = 1
  event.preventDefault()
  const name = nameInput.value
  console.log('text')
  userAnswer(`My name is ${name} and I want to know more about the spa packets!`, 'user')
  nameInput.value = ''
  setTimeout(() => showSpaOptions(name), 1000)
});

// second question
const showSpaOptions = () => {
  question = 2
  botAnswer(`Welcome to our spa breaks! We can offer you three kinds of spa packages, what are you interested in more?`, 'bot')
  chat.innerHTML +=
    ` <div id="btnOptions" class="options"> 
     <button class="btn" id= 'birthdayButton' value='Birthday spa breaks' type="click">Birthday spa breaks</button>
     <button class="btn" id= 'dinnerButton' value='Dinner & Spa breaks' type="click">Dinner & Spa breaks</button>
     <button class="btn" id= 'boxingButton' value='Boxing Day Spa' type="click">Boxing Day Spa breaks</button>
     </div>
     `

  document.getElementById('birthdayButton').addEventListener('click', () => userSpa('Birthday spa breaks'))
  document.getElementById('dinnerButton').addEventListener('click', () => userSpa('Dinner & Spa breaks'))
  document.getElementById('boxingButton').addEventListener('click', () => userSpa('Boxing Day Spa breaks'))

};

// third question
const choosingOptions = (choice) => {
  question = 3
  const btnOptions = document.getElementById('btnOptions')
  btnOptions.remove();
  console.log("Choice: " + choice);
  if ((choice === 'Boxing Day Spa breaks')) {
    botAnswer(`Great! You choose ${choice}! That will cost 2000kr. Please, Can you give your email adress? So we send you the information and payment method.`, 'bot')
  } else if (choice === 'Dinner & Spa breaks') {
    botAnswer(`Perfect! ${choice} will cost 1000kr. Alcoholic drinks are not included. Please, Can you give your email adress? So we send you the information and payment method.`, 'bot')
  } else {
    botAnswer(`Nice! ${choice} will cost 1500kr. Please, Can you give your email adress? So we send you the information and payment method.`, 'bot')
  }

};


// fourth question
const emailAddressAnswer = ((event) => {
  question = 3
  const email = nameInput.value
  console.log('emailTest')
  userAnswer(`My e-mail is ${email}.`, 'user')
  nameInput.value = ''
});


// fifth question
const theEndAnswer = () => {
  question = 4
  botAnswer(`Perfect! In a few minutes you will receive an email. Enjoy your day with us!`, 'bot')
  console.log('the end')
};


//  // Set up your eventlisteners here
form.addEventListener("submit", handleAnswer)



// // When website loaded, chatbot asks first question.
// // normally we would invoke a function like this:
// // greeting()
// // But if we want to add a little delay to it, we can wrap it in a setTimeout:
// // setTimeout(functionName, timeToWaitInMilliSeconds)
// // This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 100);
