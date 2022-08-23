
// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
let nameInput = document.getElementById("name-input");
const inputWrapper = document.getElementById('input-wrapper');
const sendBtn = document.getElementById('send');
const form = document.getElementById('name-form')


const botAnswer = (inputMessage) => {
  showMessage(inputMessage, 'bot')
}

const userAnswer = (inputMessage) => {
  showMessage(inputMessage, 'user')
}

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

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => dayBooking(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => time(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => guests(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => showPrice(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}

// Starts here
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there! In what name do you want to make the reservation?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = nameInput.value
  userAnswer(`${name}`)
  nameInput.value = ''
  setTimeout(() => dayBooking(), 1000)
})

const dayBooking = () => { 
  showMessage("Which day would you like to book a table for?", 'bot');

inputWrapper.innerHTML = `
  <button id='friday'>Friday</button>
  <button id='saturday'>Saturday</button>
  `
document
  .getElementById('friday')
  .addEventListener('click', () => nextQuestion('time'))
document
  .getElementById('saturday')
  .addEventListener('click', () => nextQuestion('time'))

}

/*
document
  .getElementById('friday')
  .addEventListener('click', () => nextQuestion('time'))
  //nextFunction('friday') //call next function with a parameter for yes

  //setTimeout(() => time(), 1000)
  //showMessage("Which time do you want to eat?", 'bot');
  

document
  .getElementById('saturday')
  .addEventListener('click', () => nextQuestion('time'))
  //nextFunction('saturday') //call next function with a parameter for yes

  //setTimeout(() => time(), 1000)
  
}

const nextFunction = (option) => { 


  if (dayBooking === 'friday') {
    showMessage("Which time do you want to eat?", 'bot');
    inputWrapper.innerHTML = `
    <button id='lunch'>Lunch</button>
    <button id='dinner'>Dinner</button>
  `
  }
  
  else (dayBooking === 'saturday') {
    showMessage("Which time do you want to eat?", 'bot');
    inputWrapper.innerHTML = `
    <button id='breakfast'>Breakfast</button>
    <button id='lunch'>Lunch</button>
    <button id='dinner'>Dinner</button>
    `
  }

    document
    .getElementById('breakfast')
    .addEventListener('click', () => nextQuestion('guests'))
    document
    .getElementById('lunch')
    .addEventListener('click', () => nextQuestion('guests'))
    document
    .getElementById('dinner')
    .addEventListener('click', () => nextQuestion('guests'))
  }
/*










// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
