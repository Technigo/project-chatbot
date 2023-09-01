// Variables that point to selected DOM elements
const chat = document.getElementById('chat')

// If you need any global variables that you can use across different functions, declare them here:
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const sendButton = document.getElementById('send-btn')
const nameForm = document.getElementById('name-form')
let username = ""
//let selectedTravelOption = ""

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
  setTimeout(() => { 
    chat.scrollTop = chat.scrollHeight
  }, 200)
}

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hey there Traveller, I'm Botlynn! Join me on a virtual trip to a foreign country and let's explore it! Please enter your name so I know what to call my new travel buddy!", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  if (name === '') {
    showMessage('I really want to know your name, please try again! ✏️', 'bot')
  } else {
    showMessage(name, 'user'); //User stod med ""
    username = name;
    nameInput.value = ''; //Stod med ""

    setTimeout(() => travelOption(), 1250);
    inputWrapper.innerHTML = ''
  }


}

// Bot greeting
const travelOption = () => {
  showMessage(`Hi ${username}, so nice to have you onboard on this trip! Which of the lovely countries do you want to visit? 🧭`, 'bot')
  inputWrapper.innerHTML = `
  <button id='cuba'>Cuba 💃</button>
  <button id='italy'>Italy 🍕</button>
  <button id='netherlands'>The Netherlands 🌷</button>
  `
  document.getElementById('cuba')
    .addEventListener('click', () => {
      showMessage('I want to go to Cuba!', 'user')
      setTimeout(() => activityQuestion('Cuba'), 800)
    })

  document.getElementById('italy')
    .addEventListener('click', () => {
      showMessage('Take me to Italy!', 'user')
      setTimeout(() => activityQuestion('Italy'), 800)
    })

  document.getElementById('netherlands')
    .addEventListener('click', () => {
      showMessage('I want to explore The Netherlands!', 'user')
      setTimeout(() => activityQuestion('The Netherlands'), 800)
    })
}

//Här klistrar jag in en switch att testa med
let activityChoice = ""
let activity = ""
let selectedActivity = ""
//let selectedTravelOption = ""

const activityQuestion = (selectedTravelOption) => {
  showMessage(`Wow, ${selectedTravelOption}! What a great choice! Which of our lovely activities would you like to join?`, 'bot')

  console.log(`activityQuestion executed ${selectedTravelOption}`);


  switch (selectedTravelOption) {
    case "Cuba":

      activity = ["to visit the tobacco farm", "to explore Havana", "to go to Buena Vista Social Club"]

      inputWrapper.innerHTML = `
      <select id="activityChoiceSelect">
        <option value="" selected disabled>Choose one of our amazing activities!</option>
        <option value="1">Learn about the cigar-making process at a tobacco farm in Vuelta Abajo</option>
        <option value="2">Visit Havana and admire the architecture, vintage cars and vibrant street life</option>
        <option value="3">Catch a live show at the venue Buena Vista Social Club in Havana</option>
      </select>
      `

      //Makes the background-image change when chosing Cuba by activating body.cuba in the CSS
      document.getElementById("body").className = "cuba"

      console.log('inputWrapper.innerHTML changed (cuba)');

      break
    case "Italy":

      activity = ["to go to Sorrento Cooking School", "to experience the Tuscany vineyard tour", "to watch the performance at the Milan Opera"]

      inputWrapper.innerHTML = `
      <select id="activityChoiceSelect">
        <option value="" selected disabled>Choose one of our amazing activities!</option>
        <option value="1">Learn to cook traditional italian dishes at Sorrento Cooking School</option>
        <option value="2">Go on a vineyard tour in stunning Tuscany</option>
        <option value="3">See an opera performance at La Scala in Milan</option>
      </select>
      `

      //Makes the background-image change when chosing Italy by activating body.italy in the CSS
      document.getElementById("body").className = "italy"

      console.log('inputWrapper.innerHTML changed (italy)');

      break
    case "The Netherlands":

      activity = ["to see the Keukenhof Gardens", "to explore the Kinderdijk Windmills", "to go for a canal tour in Amsterdam"]

      inputWrapper.innerHTML = `
      <select id="activityChoiceSelect">
        <option value="" selected disabled>Choose one of our amazing activities!</option>
        <option value="1">Visit Keukenhof Gardens - one of the most iconic flower gardens in the world</option>
        <option value="2">Visit the UNESCO World Heritage site Kinderdijk Windmills</option>
        <option value="3">Go for a scenic canal tour in Amsterdam</option>
      </select>
      `

      //Makes the background-image change when chosing The Netherlands by activating body.netherlands in the CSS
      document.getElementById("body").className = "netherlands"

      console.log('inputWrapper.innerHTML changed (netherlands)');

      break
  }

  console.log('set activitychoice listener');

  const activityChoiceSelect = document.getElementById('activityChoiceSelect')

  activityChoiceSelect.addEventListener('change', () => {
    const activityChoice = parseInt(activityChoiceSelect.value)
    console.log(activityChoice)
    selectedActivity = activity[activityChoice - 1]
    console.log(selectedActivity)

    //Keep it as showMessage(selectedActivity, 'user') ??
    showMessage(`Hmm, so many good ones! But I decided I want ${selectedActivity}!`, 'user')

    inputWrapper.innerHTML = ''
    setTimeout(() => confirmationActivity(), 1000)
  })
}


const confirmationActivity = () => {
  showMessage(`Perfect, ${username}! Are you happy with your choice?`, 'bot')
  inputWrapper.innerHTML = `
  <button id='yesButton'>Yes</button>
  <button id='noButton'>No</button>
  `
  document.getElementById('yesButton')
    .addEventListener('click', () => {
      showMessage('Yes', 'user')
      setTimeout(() => happyAnswer('Yes'), 1000)
    })

  document.getElementById('noButton')
    .addEventListener('click', () => {
      showMessage('No', 'user')
      setTimeout(() => happyAnswer('No'), 1000)
    })
}

const happyAnswer = (userResponse) => {
  if (userResponse === 'Yes') {
    showMessage(`Awesome! Then get your virtual passport ready ${username}, because we leave in 15 minutes! See ya soon!`, 'bot')
  } else {
    showMessage(`So sorry to hear that, your virtual vacay will be cancelled. Hope to see you here again for a new virtual trip in the future!`, 'bot')
  }
  inputWrapper.innerHTML = '' //Makes the yes and no button to disappear so the bot conversation ends
  //TA BORT OM INTE NÅGON NY FRÅGA  setTimeout(() => confirmationQuestion(), 500)
}

// Set up your eventlisteners here
nameForm.addEventListener('submit', handleNameInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)
