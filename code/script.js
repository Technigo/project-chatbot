// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const userInput = document.getElementById('user-input') // user writes her/his name
const form = document.getElementById('chat-form')
const sendBtn = document.getElementById('send') // Variable for first send-button
const inputWrapper = document.getElementById('input-wrapper') // user chooses model/color
let inputName = "" // variabel som sparar namnet globalt
// Global variables, if you need any, declared here
let questionNumber = 0
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
// Starting here. Introducing botQuestions
// Question 1. What's your name, user?
const greeting = () => {
  showMessage(`Hi and welcome to BOT SHOP, who am I talking to?`, 'bot')
}
// Bot greets the user, and asks if she/he wants to order a bike
const wantBike = (name) => {
  showMessage(`Very nice to meet you ${name}!`, 'bot')
  setTimeout (() => {showMessage(`Would you like to order a bike?`, 'bot')
// YES or NO
inputWrapper.innerHTML = `
<button id="yes">Yes! 👍</button>
<button id="no">No! 👎 </button>
`
  document.getElementById('yes').addEventListener('click', () => bikeSelection ('Yes'))
  document.getElementById('no').addEventListener('click', () => bikeSelection ('No'))}, 1100)

}
// Funcion if user wants bike or not
const bikeSelection = (bikeChoice) => {
questionNumber++
  showMessage(`${bikeChoice}`, 'user')
  
  if (bikeChoice === 'Yes') {
    setTimeout(() => {showMessage(`What kind of bike would you like?`, 'bot')
    inputWrapper.innerHTML = `
    <button id="mountainBike">Mountain&shy;bike</button>
    <button id="ladyBike">Ladybike</button>
    <button id="sportyBike">Sporty bike</button>
    `
    document.getElementById('mountainBike').addEventListener('click', () => modelSelection('mountainBike'))
    document.getElementById('ladyBike').addEventListener('click', () => modelSelection('ladyBike'))
    document.getElementById('sportyBike').addEventListener('click', () => modelSelection('sportyBike'))}, 1000)
 
  } else {
    setTimeout(() =>  showMessage(`Okay, have a nice day`, 'bot'), 1000)
    setTimeout(() => {location.reload()
        return false
        }, 3000)
      }
  
  }
/// Color choice
const modelSelection = (modelChoice) => {
  questionNumber++
  if (modelChoice === 'mountainBike') {
    showMessage(`I would like a mountainbike`, 'user')
    setTimeout(() => {showMessage(`Alright, a mountainbike! What colour do you prefer?`, 'bot')
    inputWrapper.innerHTML = `
    <button id="blueColor">Blue</button>
    <button id="redColor">Red</button>
    `
 
    document.getElementById('blueColor').addEventListener('click', () => orderConfirmation('Blue'))
    document.getElementById('redColor').addEventListener('click', () => orderConfirmation('Red')) }, 1000)


  } else if (modelChoice === 'ladyBike') {
    showMessage(`I would like a ladybike`, 'user')
    setTimeout(() => {showMessage(`Alright, a ladybike! What colour do you prefer?`, 'bot')
    inputWrapper.innerHTML = `
    <button id="greenColor">Green</button>
    <button id="orangeColor">Orange</button>
    `
    document.getElementById('greenColor').addEventListener('click', () => orderConfirmation('Green'))
    document.getElementById('orangeColor').addEventListener('click', () => orderConfirmation('Orange'))}, 1000)
  }
  
  else {
    showMessage(`I would like a sportybike`, 'user')
    setTimeout(() => {showMessage(`Alright, a sporty bike! What colour do you prefer?`, 'bot')
    inputWrapper.innerHTML = `
    <button id="yellowColor">Yellow</button>
    <button id="purpleColor">Purple</button>
    `
    document.getElementById('yellowColor').addEventListener('click', () => orderConfirmation('Yellow'))
    document.getElementById('purpleColor').addEventListener('click', () => orderConfirmation('Purple'))}, 1000)
  }
}
// Summary before order confirmation
const orderConfirmation = (lastChoice) => {
  questionNumber++
  // setTimeout(() => {
    if (lastChoice === 'Blue') {
      showMessage(`Blue`, 'user')
      setTimeout(() => {showMessage(`Based on your selection you have ordered a blue mountainbike, is that what you want? Please confirm.`, 'bot')}, 1200)
    } else if (lastChoice === 'Red') {
      showMessage(`Red`, 'user')
      setTimeout(() => {showMessage(`Based on your selection you have ordered a red mountainbike, is that what you want? Please confirm.`, 'bot')}, 1200)
    } else if (lastChoice === 'Green') {
      showMessage(`Green`, 'user')
      setTimeout(() => {showMessage(`Based on your selection you have ordered a green ladybike, is that what you want? Please confirm.`, 'bot')}, 1200)
    } else if (lastChoice === 'Orange') {
      showMessage(`Orange`, 'user')
      setTimeout(() => {showMessage(`Based on your selection you have ordered a orange ladybike, is that what you want? Please confirm.`, 'bot')}, 1200)
    } else if (lastChoice === 'Yellow') {
      showMessage(`Yellow`, 'user')
      setTimeout(() => {showMessage(`Based on your selection you have ordered a yellow sportybike, is that what you want? Please confirm.`, 'bot')}, 1200)
    } else if (lastChoice === 'Purple') {
      showMessage(`Purple`, 'user')
      setTimeout(() => {showMessage(`Based on your selection you have ordered a purple sporty bike, is that what you want? Please confirm.`, 'bot')}, 1200)
  }

// User responds if satisfied with order
setTimeout(() => {inputWrapper.innerHTML = `
<button id="happyChoice">Yes, I'm happy with my choice!</button>
<button id="notHappy">Nope, try again!</button>`

document.getElementById('happyChoice').addEventListener('click', () => receipt(`I'm happy with my choice!`))
document.getElementById('notHappy').addEventListener('click', () => receipt(`I would like to change some things`))
}, 1200)
}
const receipt = (final) => {
  questionNumber++
  showMessage(final, 'user')
  if (final === `I'm happy with my choice!`){
    setTimeout(() => showMessage(`Perfect!`, 'bot'), 1000)
      inputWrapper.innerHTML =
      setTimeout(() => {
        showMessage(`You will have it delivered within a week! Thanks for using our service!`, 'bot')
        showMessage(`🚲  🚲  🚲 `, 'bot')
      }, 2000)
    } else {
      showMessage(`Hmmmm, that's too bad. Let's try again`, 'bot')
      setTimeout (() => {location.reload() // This function reloads the program
        return false
      }, 2500)
    }
  }
    
// Pushes to the next question - our schedule
const handleInput = (event) => {
event.preventDefault()
questionNumber++
  if (questionNumber === 1) {
    handleNameQuestion() 
  } else if (questionNumber === 2) {
    setTimeout(wantBike, 800)
  } else if (questionNumber === 3) {
    setTimeout(bikeSelection, 800)
  } else if (questionNumber === 4) {
    setTimeout(modelSelection, 800)
  } else if (questionNumber === 5) {
    setTimeout(orderConfirmation, 800)
  } else if (questionNumber === 6) {
    setTimeout(receipt, 800)
  }
  }
// Stores name in variable "name"
const handleNameQuestion = () => {
const name = userInput.value
showMessage(`My name is ${name}!`, 'user')
inputWrapper.innerHTML = ``
setTimeout (() => {wantBike(name)}, 1000)
}
// Set up your eventlisteners here
form.addEventListener('submit', handleInput)
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 800)