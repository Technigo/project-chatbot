// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')

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
// Question 1
const greeting = () => {
  showMessage(`You wanna go to Space? Cool! What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke as function like this:
// greeting()

const handleNameInput = document.getElementById('name-form').addEventListener('submit', (event) => {
  event.preventDefault()
  const nameInput = document.getElementById('name-input')
  const userName = nameInput.value
  // if (Number.isNaN(nameInput.value)) {
  //   prompt("You can't have numbers in you Space-name")
  // }
  // else {
  // }
  showMessage (userName, 'user')
  nameInput.value = '' 
  setTimeout(() => spaceAgeQuestion(userName), 1000) 
}
)

// Question 2
// Hi ...! Time goes slower in space. Depending on how far you wanna go you will be older when you get back. 
// 1 year 10 years 1000 years


const spaceAgeQuestion = (userName) => {
  showMessage (`Hi ${userName}! Time goes slower in space. Depending on how far you wanna go you will be older when you get back.`, 'bot')
  
  inputWrapper.innerHTML = `
  <button id="oneYear">1 year</button>
  <button id="tenYears">10 years</button>
  <button id="thousandYears">1000 years</button>
`


document
  .getElementById('oneYear')
  .addEventListener('click', () =>  setTimeout(() => destination ('1 year'), 1000))
document
  .getElementById('tenYears')
  .addEventListener('click', () => setTimeout(() => destination ('10 years'), 1000))
document
  .getElementById('thousandYears')
  .addEventListener('click', () => setTimeout(() => destination ('1000 years'), 1000))
}  

// Question 3
// Alright ..., check your alternatives!
// 1year: mars, moon, jupiter
// 10years: pluto, sun, saturnnus
// 1000 years: trhourgh a black hole, another galaxy, surprise me

const destination = (type) => {
// we shoudld style select id in css - it looks like shit
console.log(type)
  showMessage (
    `Alright ${type}, check your alternatives!`, 'bot'
  )
 
  if (type === '1 year') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled> 	
        &#11088; Select a destination: </option>
        <option value="Mars">Mars</option>
        <option value="Moon">Moon</option>
        <option value="Jupiter">Jupiter</option>
      </select>
    `
  } else if (type === '10 years') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>	
        &#128171; Select a destination:</option>
        <option value="Pluto">Pluto</option>
        <option value="Sun">Sun</option>
        <option value="Saturnus">Saturnus</option>
      </select>
    `
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>	
        &#9203; Select a destination:</option>
        <option value="Through a black hole">Through a black hole</option>
        <option value="Another Galaxy">Another Galaxy</option>
        <option value="Surprise me!">Surprise me!</option>
      </select>
    `
  }
  const select = document.getElementById('select')
  select.addEventListener('change', () => setTimeout(() => spaceFood(select.value), 1000))
}

// Question 4


const spaceFood = (select) => {


console.log(select)

setTimeout(() => showMessage (
  `Great! So what do you wanna eat during the trip to ...?`, 'bot'
) , 1000)

// You picked "${select}"!
  showMessage (
    `My choice is "${select}"!`, 'user'
  )

}
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)



