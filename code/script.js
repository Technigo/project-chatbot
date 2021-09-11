// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper') 
const form = document.getElementById('name-form')
const startButton = document.getElementById('start-btn')
const inputValue = document.getElementById('input-name')

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
  showMessage(`Welcome to the Travelbot! What's your name?`, 'bot')
}

const continentQuestion = () => {
  showMessage('Which continent do you prefer?', 'bot')
  inputWrapper.innerHTML = /*html*/`
    <select id="continentDropDown">
      <option disabled selected value="">Pick a continent</option>
      <option value="Africa">Africa</option>
      <option value="Europe">Europe</option>
      <option value="South America">South America</option>
      <option value="North America">North America</option>
      <option value="Asia">Asia</option>
      <option value="Antarctica">Antarctica</option>
      <option value="Oceania">Oceania</option>
   </select>
  `
  continentDropDown.addEventListener('change', (event) => {
    showMessage(event.target.value, 'user')
    console.log('sending continent answer')
  })
}

const activityQuestion = () => {
  showMessage(`Great choice, please also tell us which activity would you like to do?`, 'bot')
  inputWrapper.innerhtml = /*html*/`
    <button id="Sun">Sun</button>
    <button id="City">City</button>
    <button id="Food">Food</button>
`
}

const handleInputName = (event) => {
  event.preventDefault()

  const name = inputValue.value
  console.log('the name is:', name)
  showMessage(name, 'user' )
  inputValue.value = ''
  
  setTimeout(continentQuestion, 1000)
}





// Set up your eventlisteners here
startButton.addEventListener('click', greeting)

form.addEventListener('submit', handleInputName)






// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
// setTimeout(greeting, 1000)
// 