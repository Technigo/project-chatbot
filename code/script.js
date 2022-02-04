// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const form = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const messageAudio = new Audio ("assets/click.wav")
const airplaneSound = new Audio ("assets/Airplanesound.wav")

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
        <img src="assets/airplane.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // Click sound when message is sent 
  messageAudio.currentTime = 0
  messageAudio.play()

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hey you, What's your name?`, 'bot')
  
}
// Function that saves user's name
const handleNameInput = (event) => {
  event.preventDefault()
  let name = nameInput.value
  // User name will be 'stranger' if there is no input
  if (name === '') {
    showMessage('Rather not tell..', 'user')
    name = 'stranger'
  } else {
    showMessage(`My name is ${name}`, 'user')
  }
  nameInput.value = ''
  showDestinations(name)
}

// The bot asks the user where he/she wants to travel
const showDestinations = (name) => {
  setTimeout(() => showMessage (`Hello ${name}!`, 'bot'), 1000)
  setTimeout(() => showMessage ('Where do you want to travel? ','bot'), 1300)
  setTimeout(showDestinationButtons, 2000)
}

// Destination buttons are shown
const showDestinationButtons = () => {
  inputWrapper.innerHTML = `
  <button id="newyorkBtn">New York</button>
  <button id="parisBtn">Paris</button>
  <button id="londonBtn">London</button>
  `
  document.getElementById('newyorkBtn').addEventListener('click', () => showflightAlternatives('New York'));
  document.getElementById('parisBtn').addEventListener('click', () => showflightAlternatives('Paris'));
  document.getElementById('londonBtn').addEventListener('click', () => showflightAlternatives('London'));
}

// The bot asks the user how he/she wants to fly (business or economy class)
const showflightAlternatives = (destination) => {
  showMessage (`${destination}`, 'user')
  setTimeout(() => showMessage (`Good choice! How do you want to fly to ${destination} ?`, 'bot'), 1000)
  setTimeout(() => showAlternativeButtons(destination), 1500)
}

// Business or economy buttons are shown
const showAlternativeButtons = (destination) => {
  inputWrapper.innerHTML = `
  <button id="economyBtn">Economy</button>
  <button id="businessBtn">Business</button>
  `
  document.getElementById('economyBtn').addEventListener('click', () => showflightSummary('Economy', destination));
  document.getElementById('businessBtn').addEventListener('click', () => showflightSummary('Business', destination));
}

// The bot summarizes the choices the user has made and asks if it's correct
const showflightSummary = (flightAlternative, destination) => {
  showMessage(`${flightAlternative}`, 'user')
  setTimeout(() => showMessage(`You want to fly ${flightAlternative} class to ${destination}, is that correct?`, 'bot'), 1000)
  setTimeout(showConfirmationButtons, 1500)
}

// Yes or no buttons are shown
const showConfirmationButtons = () => { 
  inputWrapper.innerHTML = `
  <button id="yesBtn">Yes</button>
  <button id="noBtn">No</button>
  `
  document.getElementById('yesBtn').addEventListener('click', () => showConfirmation('yes'));
  document.getElementById('noBtn').addEventListener('click', () => showConfirmation('no'));
}

// If user clicks yes the bot says thanks for order and airplane sound is played
// Otherwise the bot says welcome back another day
const showConfirmation = (yesOrNo) => {
  if (yesOrNo === 'yes') {
    showMessage('Yes', 'user')
    setTimeout(() => showMessage ('Thanks for your order!', 'bot'), 1000)
    airplaneSound.currentTime = 0
    airplaneSound.play()
  } else if (yesOrNo === 'no') {
    showMessage('No', 'user')
    setTimeout(() => showMessage('OK, I see, welcome back another day.', 'bot'), 1000)
  }
inputWrapper.innerHTML = ``
}

// Eventlistener 
form.addEventListener('submit', handleNameInput);

// The greeting function will be called 0.5 second after the website is loaded.
setTimeout(greeting, 500)