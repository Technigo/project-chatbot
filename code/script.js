// Variables that point to selected DOM elements
const chat = document.getElementById('chat')

// If you need any global variables that you can use across different functions, declare them here:
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const sendButton = document.getElementById('send-btn')
const nameForm = document.getElementById('name-form')

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
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hey there Traveller! Now it's time to go on a virtual trip to a foreign country and explore it! What can I call you? Please enter your name so we can get to know each other!", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  showMessage(name, 'user'); //User stod med ""
  username = nameInput.value;
  nameInput.value = ''; //Stod med ""

  setTimeout(() => travelOption(nameInput.value), 1500);
  inputWrapper.innerHTML =''
}

// Bot greets user
const travelOption = () => {
  showMessage(`Hi ${username}, so nice to have you onboard on this trip! Which of the lovely countries do you want to visit?` ,'bot') 
  inputWrapper.innerHTML = `
  <button id='cuba'>Cuba</button>
  <button id='italy'>Italy</button>
  <button id='netherlands'>The Netherlands</button>
  `
    document.getElementById('cuba')
    .addEventListener('click', () => {
    showMessage('Cuba' , 'user')
    setTimeout(() => activityQuestion('Cuba'), 1000)})
  
    document.getElementById('italy')
    .addEventListener('click', () => {
    showMessage('🍕 Italy' , 'user')
    setTimeout(() => activityQuestion('Italy'), 1000)})
  
    document.getElementById('netherlands')
    .addEventListener('click', () => {
    showMessage('The Netherlands' , 'user')
    setTimeout(() => activityQuestion('The Netherlands'), 1000)})
}

//Här klistrar jag in en switch att testa med
  let activityChoice = ""
  let activity = ""
  let selectedActivity = ""
  //let selectedTravelOption = ""
  
  const activityQuestion = (selectedTravelOption) => {
    showMessage(`Wow, ${selectedTravelOption}, what an amazing choice! What activity would you like to participate in?` , 'bot')

    console.log(`activityQuestion executed ${selectedTravelOption}`);
    

    switch (selectedTravelOption) {
    case "Cuba": 
      
      activity = ["Cigar activity", "Veteran car activity", "Salsa activity"]

      inputWrapper.innerHTML = `
      <select id="activityChoice">
        <option value="" selected disabled>Choose an activity</option>
        <option value="1">Cigar activity</option>
        <option value="2">Veteran car activity</option>
        <option value="3">Salsa activity</option>
      </select>
      `

      console.log('inputWrapper.innerHTML changed (cuba)');

      break
    case "Italy": 
      
      activity = ["Make pasta activity", "Wineyard activity", "tango activity"]

      inputWrapper.innerHTML = `
      <select id="activityChoice">
        <option value="" selected disabled>Choose an activity</option>
        <option value="1">Make pasta activity</option>
        <option value="2">Wineyard activity</option>
        <option value="3">tango activity</option>
      </select>
      `

      console.log('inputWrapper.innerHTML changed (italy)');

      break
    case "The Netherlands": 
      
      activity = ["tulips activity", "Windmill activity", "Stream activity"]

      inputWrapper.innerHTML = `
      <select id="activityChoice">
        <option value="" selected disabled>Choose an activity</option>
        <option value="1">Tulips activity</option>
        <option value="2">Windmill activity</option>
        <option value="3">Stream activity</option>
      </select>
      `

      console.log('inputWrapper.innerHTML changed (netherlands)');

      break
      process.exit(1)
  }

  console.log('set activitychoice listener');
  
  const select=document.getElementById('activityChoice')

  select.addEventListener('change', () => {
    console.log(select.value)
    const activityChoice = parseInt(select.value)
    console.log(activityChoice)
    selectedActivity = activity[activityChoice - 1] 
    console.log(selectedActivity)
        
    
    showMessage(selectedActivity , 'user')

    inputWrapper.innerHTML =''
    setTimeout(() => confirmationActivity(), 1000)
  })
}


const confirmationActivity = () => {
  showMessage (`${username}, are you happy with your choice?`, 'bot')
  inputWrapper.innerHTML = `
  <button id='yesButton'>Yes</button>
  <button id='noButton'>No</button>
  `
  document.getElementById('yesButton')
    .addEventListener('click', () => {
    showMessage('Yes' , 'user')
    setTimeout(() => happyAnswer('Yes'), 1000)})
  
    document.getElementById('noButton')
    .addEventListener('click', () => {
    showMessage('No' , 'user')
    setTimeout(() => happyAnswer('No'), 1000)})
}

const happyAnswer = (happyAnswer) => {
  if (happyAnswer === 'Yes') {
    showMessage ('Awesome!' ,'bot')
  } else {
    showMessage ('So sorry to hear that' ,'bot')
  }
  inputWrapper.innerHTML = ''
  setTimeout(() => confirmationQuestion(), 500)
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
