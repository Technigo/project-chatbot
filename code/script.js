// DOM selectors stored as variables
const chat = document.getElementById('chat'),
      startButton = document.getElementById('start-btn'),
      form = document.getElementById('name-form'),
      inputWrapper = document.getElementById('input-wrapper'),
      inputValue = document.getElementById('name-input');

// Functions

// This function adds a chat bubble in the correct place based on who the sender is

const showMessage = (message, sender) => {
  if (sender === 'user') {

    // Isabel's console.log (just as a test)

    console.log(message)
    console.log(sender)

    // Nina's console.log (just as a test)

    console.log('kind of getting this')
    console.log(`This is my message: ${message}`)

    chat.innerHTML +=

      `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
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
  // Scroll to last message when there are too many in the chat box
  chat.scrollTop = chat.scrollHeight
}

// The dialogue starts here
const greeting = () => {
  showMessage(`Hi there! What's your name?`, 'bot')
}

const moodQuestion = () => {
  
  showMessage(`That's a nice name! How are you feeling today?`, 'bot')

  // Generate a set of buttons with mood options

  inputWrapper.innerHTML = `
  <button id="sadBtn">Sad</button>
  <button id="neutralBtn">Neutral</button>
  <button id="worriedBtn">Worried</button>
  <button id="happyBtn">Happy</button>
  `
  
  // Send to next question depending on which button was pushed

  document.getElementById('sadBtn').addEventListener('click', () => followUpQuestion('sad'))
  document.getElementById('neutralBtn').addEventListener('click', () => followUpQuestion('neutral'))
  document.getElementById('worriedBtn').addEventListener('click', () => followUpQuestion('worried'))
  document.getElementById('happyBtn').addEventListener('click', () => followUpQuestion('happy')) 

}

const followUpQuestion = (mood) => {
  
  showMessage(`I\m feeling ${mood}.`, 'user')
  showMessage(`You\'re feeling ${mood}?`, 'bot')

    if (mood === 'sad'){
      
      showMessage('I\'m sorry to hear that. Would you like to talk to someone?', 'bot')

      // Generate a drop-down menu with binary options

      inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Select an option 👇</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    `
    // Send to next question depending on selected option

    const select = document.getElementById('select')
    select.addEventListener('change', handleSadActivity)
  } else if (mood === 'neutral') {
    showMessage('That\'s good. Wanna see some cute animal pics?', 'bot')
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Select an option 👇</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    `
    const select = document.getElementById('select')
    select.addEventListener('change', handleNeutralActivity)
  }  else if (mood === 'worried') {
    showMessage('That must be tough. Would you like to do a guided meditation?', 'bot')
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Select an option 👇</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      `
    const select = document.getElementById('select')
    select.addEventListener('change', handleWorriedActivity)
    }
  else {
    showMessage('I\'m glad to hear that! Would you like to play some happy music?', 'bot')
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Select an option👇</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      `
    const select = document.getElementById('select')
    select.addEventListener('change', handleHappyActivity)
  }
}

// Handle user input answers

const handleGreeting = (event) => {
  event.preventDefault()
  const userName = inputValue.value

  // Check whether input box is empty, interrupt chat if that's the case 

  if (userName){
    showMessage(`My name is ${userName}`, 'user')
    setTimeout(moodQuestion, 1000) // Move to next bot question
  } else {
    showMessage(`Whoops 🙈 Please refresh the page and fill in your name!`, 'bot')
  } 
  inputValue.value = ''

}

const handleMoodQuestion = () => {
  const moodOption = inputValue.value

  showMessage(`I\m feeling ${moodOption}`, 'user')

  inputValue.value = ''

  setTimeout(followUpQuestion, 1000) 

}

// Propose different activities depending on the user's mood

const handleSadActivity = (userAnswer) => {

  userAnswer = document.getElementById('select').value
  // Store URL link in a variable to use in conditionals
  const supportHotline = `<a href="https://mind.se/hitta-hjalp/" target="_blank">Mind.se</a>`;
  showMessage(userAnswer, 'user')

  if(userAnswer === 'yes'){
    showMessage(`This organization has specialized support hotlines you can contact. Give it a try:`, 'bot')
    showMessage(supportHotline, 'bot')
  } else {
    showMessage(`OK, I understand. I\'m here if you need me! Take care.`, 'bot')
  }
}

const handleNeutralActivity = (userAnswer) => {
  
  userAnswer = document.getElementById('select').value
  const cuteAnimals = `<a href="https://www.instagram.com/explore/tags/cuteanimals/" target="_blank">Instagram's cute animals</a>`;
  showMessage(userAnswer, 'user')

  if(userAnswer === 'yes'){
    showMessage(`Check out Instagram's "cute animals" hashtag! But make sure to set a timer, because it's quite addictive 😊`, 'bot')
    showMessage(cuteAnimals, 'bot')
  } else {
    showMessage('Gotcha! I\'m here if you change your mind 😊', 'bot')
  }
}

const handleWorriedActivity = () => {

  userAnswer = document.getElementById('select').value
  const meditation = `<a href="https://www.youtube.com/watch?v=kALrH8K7rDI" target="_blank">10min. meditation 🧘</a>`;
  showMessage(userAnswer, 'user')

  if(userAnswer === 'yes'){
    showMessage(`Great! I recommend a YouTube channel called "Guided Meditation". Check it out: `, 'bot')
    showMessage(meditation, 'bot')
  } else {
    showMessage(`OK, I understand. I\'m here if you need me. Sending you a big hug!`, 'bot')
  }
}

const handleHappyActivity = () => {

  userAnswer = document.getElementById('select').value
  const happySong = `<a href="https://www.youtube.com/watch?v=GbpnAGajyMc" target="_blank">Come on Eileen</a>`;
  showMessage(userAnswer, 'user')

  if(userAnswer === 'yes'){
    showMessage(`Awesome! This is one of my favorite songs: `, 'bot')
    showMessage(happySong, 'bot')
  } else {
    showMessage('Alright! I\'m here if you change your mind 😊 Enjoy your day!', 'bot')
  }
}

// Event Listeners

startButton.addEventListener('click', () => setTimeout(greeting, 1000))
form.addEventListener('submit', handleGreeting)



// Pseudocode

/* LIST OF PEPPBOT QUESTIONS

1. Hi there! How are you feeling today? (Multiple choice: sad, neutral, worried, happy)
2. If sad = offer hotline,
else if neutral = offer cute animal pics,
else if worried = offer guided meditation,
else if happy = offer playing happy music

Follow-up Questions: 

Sad: Dropdown list Yes/No

If 'yes': link to support hotline
If 'no': "OK, I understand. I'm here if you need me! Take care."

Neutral: Dropdown list Yes/No

If 'yes': link to website with cute animals
If 'no': "Gotcha! I'm here if you change your mind 😊"

Worried: Dropdown list Yes/No

If 'yes': link to meditation video
If 'no': "OK, I understand. I'm here if you need me. Sending you a big hug!"

Happy: Dropdown list Yes/No

If 'yes': link to music video
If 'no': "Alright! I'm here if you change your mind 😊. Enjoy your day!"

*/
