// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputText = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')
// const sendBtn = document.getElementById('submit')

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  console.log ('hi there')
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/customer.svg" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log ('what do you want?')
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/taxi-operator.svg" alt="Bot" />
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
  showMessage(`Good day Sir/Ms, please type your name`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Function that listens to user input and showing it


const handleNameInput =  (event) => {
  event.preventDefault()
  const name = inputText.value
  showMessage(`My name is ${name}`, 'user')
  inputText.value = ''
  setTimeout(() => destination(), 1000)
}

const destination = () => {
  showMessage(`Choose your destination here`, 'bot')
  inputWrapper.innerHTML = `
    <button id="gotBtn">Gothenburg</button>
    <button id="mmxBtn">Malmö</button>
    <button id="stoBtn">Stockholm</button>`

  document
    .getElementById('gotBtn')
    .addEventListener('click', () => { showMessage('Gothenburg', 'user')
    setTimeout(() => showMessage('Gothenburg is a nice place, choose your vehicle', 'bot'), 1000)
    inputWrapper.innerHTML = ''
      setTimeout(vehicle, 2000)
  })

  document
    .getElementById('mmxBtn')
    .addEventListener('click', () => { showMessage('Malmö', 'user')
    setTimeout(() => showMessage('Malmö is a nice place, choose your vehicle', 'bot'), 1000)
    inputWrapper.innerHTML = ''
    setTimeout(vehicle, 2000)
  })
    
  document
    .getElementById('stoBtn')
    .addEventListener('click', () => { showMessage('Stockholm', 'user')
    setTimeout(() => showMessage('Stockholm is a nice place, choose your vehicle', 'bot'), 1000)
    inputWrapper.innerHTML = ''
    setTimeout(vehicle, 2000)
  })
}

const vehicle = () => {
inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 These vehicles are available...</option>
        <option value="Limo">Limousine</option>
        <option value="Minibus">Minibus</option>
        <option value="Rickshaw">Rickshaw</option>
      </select>`

  document.getElementById("select").addEventListener("change", () => { 
    showMessage(`Please take me in a ${select.value}`, 'user')
    setTimeout(rate,1000)
})
}
const rate = () => {
  let price
if (select.value === 'Limo') {
  price = '20000SEK'
} else if (select.value === 'Minibus') {
  price = '5000SEK'
} else if (select.value === 'Rickshaw') {
  price = '10sek'
  alert('Unfortunately your ride will be in a Rickshaw')
}
showMessage(`${select.value}, that will be ${price}. Would you like to place the order?`, 'bot')
inputWrapper.innerHTML = ''

inputWrapper.innerHTML = `
    <button id="Yes">Yes</button>
    <button id="No">No</button>`

    document.getElementById("Yes").addEventListener("click", () => {
      showMessage('Yes', 'user')
      setTimeout(order, 1000)
    })
    document.getElementById("No").addEventListener("click", () => {
      location.reload()
      return false  
    })
  
}


const order = () => {
  inputWrapper.innerHTML = ''
  showMessage('Thanks for your order, we will arrive shortly', 'bot')

}






// const handleDestination =  (event) => {
//   event.preventDefault()
//   showMessage(`I would like to go to ${inputText.value}`, 'user')
//   inputText.value = ''
//   // setTimeout(() => destination(), 1000)
// }

// Set up your eventlisteners here
form.addEventListener('submit', handleNameInput)
  // form.addEventListener('submit', handleDestination,true)
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)
