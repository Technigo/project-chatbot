// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper') 
const form = document.getElementById('name-form')
const startButton = document.getElementById('start-btn')
const inputValue = document.getElementById('input-name')

// Global variables, if you need any, declared here
let currentQuestion = 0

// Functions declared here



// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('the user is sending')

    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log('the bot is sending')

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

const ageQuestion = () => {
  showMessage('How old are you?', 'bot')
}

const petQuestion = () => {
  showMessage('do you have pets?', 'bot')
}

const handleInput = (event1) => {
  event1.preventDefault()
  currentQuestion++


  console.log('our currentQuestion variable is:', currentQuestion)
  if (currentQuestion === 1) {
    handleNameQuestion()
  } else if (currentQuestion === 2) {
    ageQuestion()
  } else if (currentQuestion === 3) {
    petQuestion() 
  }
}

const handleNameQuestion = () => {
  const name = inputValue.value
  console.log('the name is:', name)
  showMessage(`My name is ${name}`, 'user' )
  inputValue.value = ''

  setTimeout(ageQuestion, 500)

}


const continentQuestion = () => {
  currentQuestion = 2
  console.log('question number 2')

  showMessage('Which continent do you prefer?', 'bot')
  inputWrapper.innerHTML = /*html*/`
    <select id="continentDropDown">
      <option disabled selected value="">Pick a continent</option>
      <option id="africa" value="Africa">Africa</option>
      <option id="europe" value="Europe">Europe</option>
      <option id="south-america" value="South America">South America</option>
      <option id="north-america" value="North America">North America</option>
      <option id="asia" value="Asia">Asia</option>
      <option id="antarctica" value="Antarctica">Antarctica</option>
      <option id="oceania" value="Oceania">Oceania</option>
   </select>
  `
  continentDropDown.addEventListener('change', (event2) => { 
    showMessage(event2.target.value, 'user')
    console.log('sending continent answer')

  })

}

const activityQuestion = () => {
  currentQuestion = 3
  console.log('question number 3')
  showMessage(`Great choice, please also tell us which activity would you like to do?`, 'bot')
//   if (continentDropDown === 'africa'){
//     inputWrapper.innerhtml = /*html*/`
//       <button id="Sun">Sun</button>
//       <button id="City">City</button>
//       <button id="Food">Food</button>
// `
// } else {
//   console.log('nothing happens')
// }
}


const handleInputContinent = (event3) => {
  event3.preventDefault()  
  setTimeout(continentQuestion, 1000)  

  // activityQuestion()

}

// Set up your eventlisteners here
startButton.addEventListener('click', greeting)

form.addEventListener('submit', handleInput)




// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
// setTimeout(greeting, 1000)
// 