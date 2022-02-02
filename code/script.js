// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const form = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')


// Global variables, if you need any, declared here

// Functions declared here

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
    console.log("bot is typing")
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
const greeting = () => {
  showMessage(`Hey you, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleNameInput = (event) => {
  event.preventDefault()
  const name = nameInput.value 
  showMessage("My name is " + name, 'user')
  nameInput.value = ''
  console.log('name input works')
  showDestinations(name)
}


const showDestinations = (name) => {
  questionNumber = 2
  showMessage ('Hej ' + name, 'bot')
  showMessage ('Where do you want to travel? ','bot')

  inputWrapper.innerHTML = `
    <button id="newyorkBtn">New York</button>
    <button id="parisBtn">Paris</button>
    <button id="londonBtn">London</button>
  `
  document.getElementById('newyorkBtn').addEventListener('click', () => showflightAlternatives('New York'));
  document.getElementById('parisBtn').addEventListener('click', () => showflightAlternatives('Paris'));
  document.getElementById('londonBtn').addEventListener('click', () => showflightAlternatives('London'));
  // inputWrapper.addEventListener('click', nextQuestion('Paris'))
}

const showflightAlternatives = (destination) => {
  questionNumber = 3
  showMessage (`${destination}`, 'user')
  showMessage (`How do you want to fly to ${destination} ?`, 'bot')

  inputWrapper.innerHTML = `
  <button id="economyBtn">Economy</button>
  <button id="businessBtn">Business</button>
  `
  document.getElementById('economyBtn').addEventListener('click', () => showflightSummary('Economy', destination));
  document.getElementById('businessBtn').addEventListener('click', () => showflightSummary('Business', destination));
}

const showflightSummary = (flightAlternative, dest) => {
  showMessage(`${flightAlternative}`, 'user')
  showMessage(`You want to fly ${flightAlternative} class to ${dest}, is that correct?`, 'bot')
  inputWrapper.innerHTML = `
  <button id="yesBtn">Yes</button>
  <button id="noBtn">No</button>
  `
  document.getElementById('yesBtn').addEventListener('click', () => showConfirmation('yes'));
  document.getElementById('noBtn').addEventListener('click', () => showConfirmation('no'));
}

const showConfirmation = (yesOrNo) => {
  if (yesOrNo === 'yes') {
    showMessage('Thanks for your order!', 'bot')
  } else if (yesOrNo === 'no') {
    showMessage('OK, I see, welcome back another day.', 'bot')
  }
}

// Set up your eventlisteners here
form.addEventListener('submit', handleNameInput);

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)