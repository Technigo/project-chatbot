// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const form = document.getElementById('name-form')
// const sendButton = document.getElementById('send')

// Global variables, if you need any, declared here
// let questionStep = 1



// Functions declared here

const botAnswer = (inputMessage) => {
  showMessage(inputMessage, 'bot')
}

const userAnswer = (inputMessage) => {
  showMessage(inputMessage, 'user')
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    // Add a console log here and see when it's being logged and not :)

    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/paw-green.png" class="paw" alt="User" />  
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
  botAnswer(`Welcome to our salon! What's your name?`)
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
// 1st user answer
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = nameInput.value
  userAnswer(name)
  nameInput.value = ''
  setTimeout(() => petTypes(name), 1000)
  //   questionStep = 2
  // } else if (questionStep === 2) {
  //   userAnswer(form.pet.value)
  // }
})



// 2nd question and answer
const usersPet = (type) => {
  userAnswer(type)
  setTimeout(() => petServices(type), 1000)
}


const petTypes = (name) => {
  botAnswer(`Nice to meet you ${name} :) What type of pet do you have?`)

  inputWrapper.innerHTML = `
  <button id= 'dogButton'>Dog</button>
  <button id= 'catButton'>Cat</button>
  `
  document.getElementById('dogButton').addEventListener('click', () => usersPet('dog'))
  document.getElementById('catButton').addEventListener('click', () => usersPet('cat'))

}


// form.innerHTML = `  
//   <label> Dog
//   <input type='radio' value='dog' name='pet' />
//   </label>
//   <label> Cat
//   <input type='radio' value='cat' name='pet' />
//   </label>
//   <button type='submit'>Submit</button>
// `


// third question and answer
const usersService = (service) => {
  userAnswer(service)
  setTimeout(() => petPayment(service), 1000)
}


const petServices = (type) => {
  botAnswer(`So you are the ${type} person :) Please select a procedure for your pet.`)

  inputWrapper.innerHTML = `
    <button id='firstService'>Bathing</button>
    <button id='secondService'>Brushing</button>
    <button id='thirdService'>Nail trimming</button>
    <button id='forthService'>Haircut</button>
  `
  document.getElementById('firstService').addEventListener('click', () => usersService('Bathing'))
  document.getElementById('secondService').addEventListener('click', () => usersService('Brushing'))
  document.getElementById('thirdService').addEventListener('click', () => usersService('Nail trimming'))
  document.getElementById('forthService').addEventListener('click', () => usersService('Hair cut'))

}

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded. Tried to changed to 2000
setTimeout(greeting, 1000)