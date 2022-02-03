// All the DOM selectors stored as short variables
const chat = document.getElementById('chat'),
      quizButton = document.querySelector('.quiz-button'),
      sendButton = document.querySelector('.send-btn'),
      inputWrapper = document.getElementById('inputWrapper');


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
    console.log('Hello')
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
   showMessage(`Hello there, What's your name?`, 'bot')
   // Just to check it out, change 'bot' to 'user' here 👆
 }

// Displays users name

const handleNameInput = (event) => {
  event.preventDefault()

  // Store the value in a variable so we can access it after we clear it from the input 
  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = ''

  // Time delay - next question
  setTimeout(oreoQuestion, 1000)
}

const oreoQuestion = () => {
  showMessage(`How do you eat an oreo?`,'bot')

  // Generate a set of buttons with bite choices

  inputWrapper.innerHTML = `
    <button id="oneBiteBtn">In one bite</button>
    <button id="pickApartBtn">Pick apart</button>
    <button id="dipMilkBtn">Dip in milk</button>
  `

  // Send to next question depending on which button was clicked

  document.getElementById('oneBiteBtn').addEventListener('click', () => {
    console.log('hej hej')
    showMessage('In one bite', 'user')
    setTimeout(() => showMessage('Great choice..', 'bot'), 1000)
    handleInput()
  })
  document.getElementById('pickApartBtn').addEventListener('click', () => {
    showMessage('Pick apart', 'user')
    setTimeout(() => showMessage('Great choice..', 'bot'), 1000)
    handleInput()
  })
  document.getElementById('dipMilkBtn').addEventListener('click', () => {
    showMessage('Dip in milk', 'user')
    setTimeout(() => showMessage('Great choice..', 'bot'), 1000)
    handleInput()
  })

}

//Final question of our bot
// const lastQuestion = () => {
//   setTimeout(() => showMessage('What would rather do?', 'bot'), 3000) 
//   console.log('hallu')
//   inputWrapper.innerHTML = `
//     <button id="option1">Option 1</button>
//     <button id="option2">Option 2</button>
//     <button id="option3">Option 3</button>
//     `
// document.getElementById('option1').addEventListener('click', () => {
//     showMessage('Option 1', 'user')
//     setTimeout(() => showMessage('Great choice! Let me give you what you want!', 'bot'))
//     bye()
// })
// document.getElementById('option2').addEventListener('click', () => {
//   showMessage('Option 2', 'user')
//   setTimeout(() => showMessage('Great choice! Let me give you what you want!', 'bot'))
//   bye()
// })
// document.getElementById('option3').addEventListener('click', () => {
//   showMessage('Option 3', 'user')
//   setTimeout(() => showMessage('Great choice! Let me give you what you want!', 'bot'))
//   bye()
// })
// }


// Set up your eventlisteners here

quizButton.addEventListener('click', () => setTimeout(greeting, 1000))

// quizButton.addEventListener('click', greeting)

sendButton.addEventListener('click', handleNameInput)



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
// setTimeout(greeting, 1000)

// Pseudocode 

/* LIST OF BAKINGBOT QUESTIONS

1. How do eat your oreos? (Multiple choice: one bite, pick apart, dip in milk)
2. If one bite = XXX
Else if pick apart = XXX
Else dip in milk = XXX

Follow-up questions: 

One bite: button multiple choice
If X: show picture of cookie
If Y: "message + gets sent back to the start"

Pick apart: button multiple choice
If X: show picture of X
If Y: "message + gets sent back to the start"

Dip in milk: button multiple choice
If X: show picture of X
If Y: "message + gets sent back to the start"
*/
