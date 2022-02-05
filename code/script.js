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
  console.log("First convo")
  showMessage(`Hi and welcome to BOT SHOP, who am I talking to?`, 'bot')
}

// Bot greets the user, and asks if she/he wants to order a bike
const wantBike = (name) => {
  console.log("Second convo")
  showMessage(`Very nice to meet you ${name}!`, 'bot')
  setTimeout (() => {showMessage(`Would you like to order a bike?`, 'bot')

// YES or NO
inputWrapper.innerHTML = `
<button id="yes">Yes! 👍</button>
<button id="no">No! 👎</button>
`
console.log("Third convo")
  document.getElementById('yes').addEventListener('click', () => bikeSelection ('Yes'))
  document.getElementById('no').addEventListener('click', () => bikeSelection ('No'))
}, 1400)
}


// Funcion if user wants bike or not
const bikeSelection = (bikeChoice) => {
  console.log("Fourth convo")
questionNumber++
  showMessage(`${bikeChoice}`, 'user')
  
  if (bikeChoice === 'Yes') {
    setTimeout(() => {showMessage(`What kind of bike would you like?`, 'bot')
    inputWrapper.innerHTML = `
    <button id="mountainBike">Mountainbike</button>
    <button id="ladyBike">Ladybike</button>
    <button id="sportyBike">Sportybike</button>
    `
    document.getElementById('mountainBike').addEventListener('click', () => modelSelection('mountainBike'))
    document.getElementById('ladyBike').addEventListener('click', () => modelSelection('ladyBike'))
    document.getElementById('sportyBike').addEventListener('click', () => modelSelection('sportyBike'))}, 2000)
  } else {
    setTimeout(() => {showMessage(`Okay, have a nice day`, 'bot')
      location.reload()
      return false
      }, 2500)  
    }
  }

// Color choice
  const modelSelection = (modelChoice) => {
    questionNumber++
    console.log("Fifth convo")

    if (modelChoice === 'mountainBike') {
      showMessage(`I would like a mountainbike`, 'user')
      setTimeout(() => {showMessage(`Alright, a mountainbike! What colour do you prefer?`, 'bot')}, 2000)

      inputWrapper.innerHTML = `
      <button id="blueColor">Blue</button>
      <button id="redColor">Red</button>
      `
      document.getElementById('blueColor').addEventListener('click', () => orderConfirmation('Blue'))
      document.getElementById('redColor').addEventListener('click', () => orderConfirmation('Red'))
    } else if (modelChoice === 'ladyBike') {
      showMessage(`I would like a ladybike`, 'user')
      setTimeout(showMessage(`Alright, a ladybike! What colour do you prefer?`, 'bot'), 3000)
      inputWrapper.innerHTML = `
      <button id="greenColor">Green</button>
      <button id="orangeColor">Orange</button>
      `
      document.getElementById('greenColor').addEventListener('click', () => orderConfirmation('Green'))
      document.getElementById('orangeColor').addEventListener('click', () => orderConfirmation('Orange'))
    } else {
      showMessage(`I would like a sportybike`, 'user')
      setTimeout(showMessage(`Alright, a sportybike! What colour do you prefer?`, 'bot'), 3000)
      inputWrapper.innerHTML = `
      <button id="pinkColor">Pink</button>
      <button id="purpleColor">Purple</button>
      `
      document.getElementById('pinkColor').addEventListener('click', () => orderConfirmation('Pink'))
      document.getElementById('purpleColor').addEventListener('click', () => orderConfirmation('Purple'))
    }
  }

  // Summary before order confirmation
  const orderConfirmation = (lastChoice) => {
    console.log("Sixth convo")
    questionNumber++

    setTimeout(() => {
      if (lastChoice === 'Blue') {
        showMessage(`Blue`, 'user')
        showMessage(`Based on your selection you have ordered a blue mountainbike, is that what you want? Please confirm.`, 'bot')
      } else if (lastChoice === 'Red') {
        showMessage(`Red`, 'user')
        showMessage(`Based on your selection you have ordered a red mountainbike, is that what you want? Please confirm.`, 'bot')
      } else if (lastChoice === 'Green') {
        showMessage(`Green`, 'user')
        showMessage(`Based on your selection you have ordered a green ladybike, is that what you want? Please confirm.`, 'bot')
      } else if (lastChoice === 'Orange') {
        showMessage(`Orange`, 'user')
      showMessage(`Based on your selection you have ordered a orange ladybike, is that what you want? Please confirm.`, 'bot')
      } else if (lastChoice === 'Pink') {
        showMessage(`Pink`, 'user')
      showMessage(`Based on your selection you have ordered a pink sportybike, is that what you want? Please confirm.`, 'bot')
      } else if (lastChoice === 'Purple') {
        showMessage(`Purple`, 'user')
      showMessage(`Based on your selection you have ordered a purple sportybike, is that what you want? Please confirm.`, 'bot')
    }}, 500)
 

  // User responds if satisfied with order
  setTimeout (() => {inputWrapper.innerHTML = `
  <button id="yes">Yes, I'm happy with my choice!</button>
  <button id="no">Nope, try again!</button>`
  
  document.getElementById('yes').addEventListener('click', () => receipt(`I'm happy with my choice!`))
  document.getElementById('no').addEventListener('click', () => receipt(`I would like to change some things`))
}, 3000)
}

  const receipt = (final) => {
    questionNumber++
    showMessage(final, 'user')

    if (final === `I'm happy with my choice!`){
        showMessage(`Perfect!`, 'bot')
        inputWrapper.innerHTML =
        setTimeout (() => {
          showMessage(`You will have it delivered within a week! Thanks for using our service!`, 'bot')
        }, 1500)
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