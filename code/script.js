// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const startButton = document.getElementById('start-btn')
const form = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
const inputValue = document.getElementById('name-input')

// Global variables

// A counter to let us know which question we're at
let currentQuestion = 1;

// Functions

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {

    // Isabel's console.log

    console.log(message)
    console.log(sender)

    // Nina's console.log
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
const moodQuestion = (event) => {
 
  showMessage('How are you feeling today?', 'bot')

  inputWrapper.innerHTML = `
  <button id="sadBtn">Sad</button>
  <button id="neutralBtn">Neutral</button>
  <button id="worriedBtn">Worried</button>
  <button id="happyBtn">Happy</button>
  `

  document.getElementById('sadBtn').addEventListener('click', () => followUpQuestion('sad'))
  document.getElementById('neutralBtn').addEventListener('click', () => followUpQuestion('neutral'))
  document.getElementById('worriedBtn').addEventListener('click', () => followUpQuestion('worried'))
  document.getElementById('happyBtn').addEventListener('click', () => followUpQuestion('happy'))
}

const followUpQuestion = (mood) => {
  currentQuestion++;
  showMessage(`So you\'re feeling ${mood}, I see.`, 'bot')

  if (mood === 'sad'){
    inputWrapper.innerHTML = `
    <select id="select">
      <option value="" selected disabled>👇 Would you like to talk to someone?</option>
      <option value="yes">Yes</option>
      <option value="no thanks">No</option>
    </select>
  `
} else if (mood === 'neutral') {
  inputWrapper.innerHTML = `
    <select id="select">
      <option value="" selected disabled>👇Would you like some cute animal pics?</option>
      <option value="Yes">Yes</option>
      <option value="No">No thanks</option>
    </select>
  `
}  else if (mood === 'worried') {
  inputWrapper.innerHTML = `
    <select id="select">
      <option value="" selected disabled>👇 Would you like to...</option>
      <option value="Workout">Workout</option>
      <option value="Meditate">Meditate</option>
      <option value="Walk in nature">Walk in nature</option>
    </select>
    `
  }
 else {
  inputWrapper.innerHTML = `
    <select id="select">
      <option value="" selected disabled>👇 Would you like to play some happy music?</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
    `
}

const select = document.getElementById('select')
select.addEventListener('change', () => followUpQuestion(select.value))
}

// Handle user input answers

const handleInput = (event) => {
  event.preventDefault()

  if (currentQuestion === 1) {
    handleGreeting()
  } 
  else if (currentQuestion === 2){
    handleMoodQuestion()
  }

  currentQuestion++

}

const handleGreeting = () => {
  const moodOption = inputValue.value

  showMessage(`My name is ${moodOption}`, 'user')
  inputValue.value = ''

  setTimeout(moodQuestion, 1000) // Move to next bot question

}

const handleMoodQuestion = () => {
  const moodOption = inputValue.value
  if (moodOption == 1) {
    showMessage('I\'m feeling sad', 'user')
  } else if (moodOption == 2){
    showMessage('I\'m feeling neutral', 'user')
  } else if (moodOption == 3){
    showMessage('I\'m feeling worried', 'user')
  } else if (moodOption == 4){
    showMessage('I\'m feeling happy', 'user')
  } else {
    showMessage('Invalid input. Please enter one of the four options above')
  }

  inputValue.value = ''

  setTimeout(followUpQuestion, 1000) 

}

// Event Listeners

startButton.addEventListener('click', () => setTimeout(greeting, 1000))
form.addEventListener('submit', handleInput)

// Pseudocode

/* LIST OF PEPPBOT QUESTIONS

1. Hi there! How are you feeling today? (Multiple choice: sad, neutral, worried, happy)
2. If 1 (sad) = offer hotline; else if 2 (neutral) = do you want some cute animal pics to lighten up your day?;
else if 3 (worried) = do you want to follow along to a meditation with me?
else if 4 (happy) = cool! Let's play some happy music; else "Please select one of four options above"

Follow-up Questions: 

Neutral: Dropdown list Yes/No

If 'yes': display img of puppies/kittens
If 'no': Do you want to end the chat? (If 'yes': hide input box and finish; if 'no': send to moodQuestion to start over)

Worried: Dropdown list Yes/No

If 'yes': display meditation video
If 'no': Do you want to end the chat? (If 'yes': hide input box and finish; if 'no': send to moodQuestion to start over)

Happy: Dropdown list Yes/No

If 'yes': display music video
If 'no': Do you want to end the chat? (If 'yes': hide input box and finish; if 'no': send to moodQuestion to start over)

*/