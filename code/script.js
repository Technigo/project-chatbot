// Variables that point to selected DOM elements
const chat = document.getElementById('chat')

// Global variables to use across different functions
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const sendButton = document.getElementById('send-btn')
const nameForm = document.getElementById('name-form')
let username = ''
let activityChoice = ''
let activity = ''
let selectedActivity = ''
let soundWelcome = new Audio('assets/welcome.mp3')
let soundDone = new Audio('assets/done.mp3')
let soundConfirm = new Audio('assets/success.mp3')
let soundDecline = new Audio('assets/fiasco.mp3')

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is 'user' and if that's the case it inserts an HTML section inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/bot.png" alt="User" />  
      </section>
    `
    // The else if statement checks if the sender is a bot and if that's the case it inserts an HTML section inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="images/glad-bot.jpg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // Scrolls to the last message in the chat box, with a timeout function so the entire chat message has time to load
  setTimeout(() => {
    chat.scrollTop = chat.scrollHeight
  }, 200)
}

// Initial greeting message from bot, asking for the user's name
const greetUser = () => {
  showMessage(`Hey there Traveller, I'm Botlynn! Join me on a virtual trip to a foreign country and let's explore it! Please enter your name so I know what to call my new travel buddy!`, 'bot')
  soundWelcome.play()
}

// User types in name, otherwise the bot asks for the name again to be able to proceed
const handleNameInput = (event) => {
  event.preventDefault()
  const name = nameInput.value
  if (name === '') {
    showMessage(`I really want to know your name, please try again! ✏️`, 'bot')
  } else {
    showMessage(name, 'user')
    username = name
    nameInput.value = ''
    setTimeout(() => travelOption(), 1000)
    inputWrapper.innerHTML = ''
  }
}

// Bot welcomes the user by name and present three buttons with countries to choose from
const travelOption = () => {
  showMessage(`Welcome ${username}, so nice to have you onboard on this trip! Which of the lovely countries would you like to visit? 🧭`, 'bot')
  inputWrapper.innerHTML = `
  <button id='cuba'>Cuba 💃</button>
  <button id='italy'>Italy 🍕</button>
  <button id='netherlands'>The Netherlands 🌷</button>
  `

  // Three different messages from the user depending on which country they choose. The chosen country will go into the next function in the activityQuestion 
  document.getElementById('cuba')
    .addEventListener('click', () => {
      showMessage(`I want to go to Cuba!`, 'user')
      setTimeout(() => activityQuestion('Cuba'), 1000)
    })

  document.getElementById('italy')
    .addEventListener('click', () => {
      showMessage(`Take me to Italy!`, 'user')
      setTimeout(() => activityQuestion('Italy'), 1000)
    })

  document.getElementById('netherlands')
    .addEventListener('click', () => {
      showMessage(`I want to explore The Netherlands!`, 'user')
      setTimeout(() => activityQuestion('The Netherlands'), 1000)
    })
}

// Variables that will be used in the activityQuestion TA BORT OM ALLT FUNKAR


// User is presented with a dropdown menu with three different activities to chose from depending on which country was chosen previously
const activityQuestion = (selectedTravelOption) => {
  showMessage(`Wow, ${selectedTravelOption}! What a great choice! Which of our amazing activities would you like to join?`, 'bot')

  switch (selectedTravelOption) {
    case 'Cuba':
      activity = ['to visit the tobacco farm', 'to explore Havana', 'to go to Buena Vista Social Club']
      inputWrapper.innerHTML = `
      <select id="activityChoiceSelect">
        <option value="" selected disabled>Choose one of our amazing activities!</option>
        <option value="1">Learn about the cigar-making process at a tobacco farm in Vuelta Abajo</option>
        <option value="2">Visit Havana and admire the architecture, vintage cars and vibrant street life</option>
        <option value="3">Catch a live show at the venue Buena Vista Social Club in Havana</option>
      </select>
      `
      // Changes the background-image to a new image when choosing Cuba, by activating body.cuba in the CSS
      document.getElementById('body').className = 'cuba'
      break

    case 'Italy':
      activity = ['to go to Sorrento Cooking School', 'to experience the Tuscany vineyard tour', 'to watch the performance at the Milan Opera']
      inputWrapper.innerHTML = `
      <select id="activityChoiceSelect">
        <option value="" selected disabled>Choose one of our amazing activities!</option>
        <option value="1">Learn to cook traditional italian dishes at Sorrento Cooking School</option>
        <option value="2">Go on a vineyard tour in stunning Tuscany</option>
        <option value="3">See an opera performance at La Scala in Milan</option>
      </select>
      `
      // Changes the background-image to a new image when choosing Italy, by activating body.italy in the CSS
      document.getElementById('body').className = 'italy'
      break

    case 'The Netherlands':
      activity = ['to see the Keukenhof Gardens', 'to explore the Kinderdijk Windmills', 'to go for a canal tour in Amsterdam']
      inputWrapper.innerHTML = `
      <select id="activityChoiceSelect">
        <option value="" selected disabled>Choose one of our amazing activities!</option>
        <option value="1">Visit Keukenhof Gardens - one of the most iconic flower gardens in the world</option>
        <option value="2">Visit the UNESCO World Heritage site Kinderdijk Windmills</option>
        <option value="3">Go for a scenic canal tour in Amsterdam</option>
      </select>
      `
      // Changes the background-image to a new image when choosing The Netherlands, by activating body.netherlands in the CSS
      document.getElementById('body').className = 'netherlands'
      break
  }

  // Sorts out in the switch's array which activity is chosen, and is presented by a reply from the user
  const activityChoiceSelect = document.getElementById('activityChoiceSelect')
  activityChoiceSelect.addEventListener('change', () => {
    const activityChoice = parseInt(activityChoiceSelect.value)
    selectedActivity = activity[activityChoice - 1]
    showMessage(`Hmm, so many good ones! But I decided I want ${selectedActivity}!`, 'user')
    inputWrapper.innerHTML = ''
    setTimeout(() => confirmationActivity(selectedTravelOption), 1000)
  })
}

// Bot tells the user it's finalizing the different requests the user has made, a function that is used in confirmationActivity
function simulateProcessing(callback) {
  showMessage(`Finalizing your requests...`, 'bot')
  // Simulate a delay of 2 seconds
  setTimeout(function () {
    showMessage(`Processing complete! ✔️`, 'bot')
    soundDone.play()
    // Call the provided callback function to continue with the next action
    if (typeof callback === 'function') {
      callback()
    }
  }, 3000)
}

// The bot asks the user if it's happy with the booking, by requesting the user press the 'yes' or 'no' button
const confirmationActivity = (selectedTravelOption) => {
  showMessage(`Perfect, ${username}! Are you happy with your choice?`, 'bot')
  inputWrapper.innerHTML = `
  <button id='yesButton'>Yes</button>
  <button id='noButton'>No</button>
  `
  document.getElementById('yesButton')
    .addEventListener('click', () => {
      showMessage(`Yes`, 'user')
      // Start processing simulation and continues with finalQuestion
      simulateProcessing(() => {
        finalQuestion('Yes', selectedTravelOption)
      })
    })

  document.getElementById('noButton')
    .addEventListener('click', () => {
      showMessage(`No`, 'user')
      // Start processing simulation and continues with finalQuestion
      simulateProcessing(() => {
        finalQuestion('No')
      })
    })
}

// Final question that wraps up the conversation with the bot, the bot icon is changed to a happy or sad Botlynn depending on the user's answer
const finalQuestion = (userResponse, selectedTravelOption) => {
  if (userResponse === 'Yes') {
    const message = `Awesome! Then get your virtual passport ready ${username}, because we leave in 15 minutes! See ya soon in ${selectedTravelOption}!`
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="images/happy-bot.jpg" alt="Happy Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
    soundConfirm.play()
  } else {
    const message = `So sorry to hear that, your virtual vacay will be cancelled. Hope to see you here again for a new virtual trip in the future!`
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="images/sad-bot.jpg" alt="Sad Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
    soundDecline.play()
  }
  // Makes the yes and no button disappear so the chatbot conversation ends
  inputWrapper.innerHTML = ''
}

// Set up your eventlisteners here
nameForm.addEventListener('submit', handleNameInput)

// The greeting function will be called one second after the website is loaded
setTimeout(greetUser, 1000)
