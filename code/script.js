// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const sendButton = document.getElementById('send-btn')
const nameInput = document.getElementById('name-input')
const form = document.getElementById('name-form')


// Global variables, if you need any, declared here

let currentQuestionNumber = 1
let saveEvent = ""  // Saves a value outside the function
let selectedDestination = "";
let selectedClass = "";

// Starts here
const greeting = () => {
  showMessage(`Hello there, My name is JetSetBot.  What's your name?`, 'bot')
}
setTimeout(greeting, 500)


// Set up your eventlisteners here
sendButton.addEventListener('click', (event) => {
  event.preventDefault();
  currentQuestion();
});

// Functions declared here
// DECIDES WHICH QUESTION WE ARE HANDLING
const currentQuestion = () => {
  if (currentQuestionNumber === 1) {
    handleNameInput();
  }
  else if (currentQuestionNumber === 2) {
    classQuestion();
  }
  else if (currentQuestionNumber === 3) {
    timeQuestion();
  }
  else if (currentQuestionNumber === 4) {
    confirmQuestion();
  }
  if (currentQuestionNumber === 5) {
    sayThankYou();
    return;
  }
 
  // Adds a number att current question
  currentQuestionNumber++
}

const handleNameInput = () => {
  const name = nameInput.value.trim(); // Trim whitespace from input
  if (!name) {
    showMessage(`Please enter your name.`, 'bot'); // Notify user to enter name
    return; // Exit function early if name is empty
  }
  showMessage(name, 'user');
  nameInput.value = '';
  nameInput.disabled = true; // Disable the input field after name is entered
  setTimeout(() => showCityOptions(name), 500);
}

// Function that changes layout to three buttons
const showCityOptions = (name) => {
  showMessage(`Hi ${name}, where do you want to go? Have a look at our available destinations.`, 'bot')
  form.innerHTML =
    `<div class="btn-wrapper">
    <button id="london-btn" name="London">LONDON</button>
    <button id="paris-btn" name="Paris">PARIS</button>
    <button id="rome-btn" name="Rome" >ROME</button>
    </div>`

  const londonBth = document.getElementById('london-btn')
  londonBth.addEventListener('click', () => {
    const chosenDestination = londonBth.name;
    saveEvent = londonBth.name;
    showMessage(chosenDestination, 'user')
    currentQuestion()
    setTimeout(() => showMessage(`You have chosen ${chosenDestination}. Are you flying in business or economy?`, 'bot'), 500)
  })

  const parisBth = document.getElementById('paris-btn')
  parisBth.addEventListener('click', () => {
    const chosenDestination = parisBth.name;
    saveEvent = parisBth.name;

    showMessage(chosenDestination, 'user')
    currentQuestion()
    setTimeout(() => showMessage(`You have chosen ${chosenDestination}. Are you flying in business or economy?`, 'bot'), 500)
  })
  const romeBth = document.getElementById('rome-btn')
  romeBth.addEventListener('click', () => {
    const chosenDestination = romeBth.name;
    saveEvent = romeBth.name;
    console.log("This is", romeBth.name)
    showMessage(chosenDestination, 'user')
    currentQuestion()
    setTimeout(() => showMessage(`You have chosen ${chosenDestination}. Are you flying in business or economy?`, 'bot'), 500)
  })
};

const classQuestion = () => {
  // Function that changes layout to 2 buttons
  form.innerHTML =
    `<div class="btn-wrapper">
    <button id="economy-btn" class="size-btn" name="economy">ECONOMY</button>
    <button id="business-btn" class="size-btn" name="business">BUSINESS</button>
    </div>`
  console.log(form.innerHTML)

  const economyBtn = document.getElementById('economy-btn')
  economyBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const chosenClass = economyBtn.name;
    showMessage(chosenClass, 'user')
    currentQuestion()
    setTimeout(() => showMessage(`OK, Economy class it is. Do your prefer a morning or evening flight?`, 'bot'), 500)
  })

  const businessBtn = document.getElementById('business-btn')
  businessBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const chosenClass = businessBtn.name;
    showMessage(chosenClass, 'user')
    currentQuestion()
    setTimeout(() => showMessage(`OK, Business class it is. Do you prefer a morning or evening flight?`, 'bot'), 500)
  })
}

const timeQuestion = () => {
  // Function that changes layout to 2 buttons
  form.innerHTML =
    `<div class="btn-wrapper">
     <button id="morning-btn" class="morningtime-btn" name="morning">MORNING</button>
     <button id="evening-btn" class="eveningtime-btn" name="evening">EVENING</button>
    </div>`
  console.log(form.innerHTML)

  const morningBtn = document.getElementById('morning-btn')
  morningBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const chosenTime = morningBtn.name;
    showMessage(chosenTime, 'user')
    currentQuestion()
    setTimeout(() => showMessage(`You have chosen an early flight. Thank you for your selection. Do you want to proceed?`, 'bot'), 500)
  })

  const eveningBtn = document.getElementById('evening-btn')
  eveningBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const chosenTime = eveningBtn.name;
    showMessage(chosenTime, 'user')
    currentQuestion()
    setTimeout(() => showMessage(`You have chosen an evening flight. Thank you for your selection. Do you want to proceed?`, 'bot'), 500)
  })
}

const confirmQuestion = () => {
  // Function that changes layout to 2 buttons
  form.innerHTML =
    `<div class="btn-wrapper">
     <button id="confirm-btn" class="size-btn" name="confirm">CONFIRM</button>
     <button id="decline-btn" class="size-btn" name="decline">DECLINE</button>
    </div>`
  console.log(form.innerHTML)

  const confirmBtn = document.getElementById('confirm-btn');
  confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const chosenConfirmation = confirmBtn.name;
    showMessage(chosenConfirmation, 'user');
    setTimeout(() => {
      sayThankYou();
      showMessage(`Thank you for using our service. We will send you more information regarding the dates and times of available flights, prices and payment methods.`, 'bot');
    }, 500);
  });
  
  const declineBtn = document.getElementById('decline-btn')
  declineBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const chosenConfirmation = declineBtn.name;
    showMessage(chosenConfirmation, 'user')
    currentQuestion()
    setTimeout(() => showMessage(`You have declined your trip. If you change your mind you know where to find me!`, 'bot'), 500)
  })
}
const sayThankYou = () => {
  form.innerHTML = '';
}


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">

        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user2.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot1.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

