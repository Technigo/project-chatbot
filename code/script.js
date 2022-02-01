// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')

const quizButton = document.querySelector('.quiz-button')

const sendButton = document.querySelector('.send-btn')


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

// Displays users name - Test 1
//  document.getElementById('name-form').onsubmit = (event) => {
//   event.preventDefault()

//   const inputValue = document.getElementById('name-input').value


//   document.getElementById('greeting').innerHTML = `${inputValue}`
// }

// Displays users name - Test 2

const handleNameInput = (event) => {
  event.preventDefault()

  // Store the value in a variable so we can access it after we clear it from the input 
  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = ''

  // Time delay - next question
  setTimeout(() => firstQuestion(name), 1000)

}

// const firstAnswer = () => {
//   showMessage(``)
// }




// Set up your eventlisteners here

quizButton.addEventListener('click', greeting)

sendButton.addEventListener('click', handleNameInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
// setTimeout(greeting, 1000)
