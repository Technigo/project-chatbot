// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWrapper = document.getElementById('input-wrapper')
let questionNumber = 0;

// Global variables, if you need any, declared here

// Functions declared here

// Action when submitting form
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const input = document.getElementById('user-input').value;
  nxtQuestion(input)
})

// function nxtQuestion takes usrInput and checks for questionNumber
// based on number it 

const nxtQuestion = (message) => {
  usrInput()
  if (questionNumber === 1) {
    persons(message)
    input = ""
  } else if (questionNumber === 2) {
    where(message)
    input = ""
  } else if (questionNumber === 3) {
    place(message)
    input =""
  } else {
    fail(message)
    }
  }


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log();
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    //??ska console.log(greeting) vara här??
    console.log(greeting);
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

// Bot chat messages
// .1
const greeting = () => {
  questionNumber = 1;
  showMessage(`Hi, how many nights do you want to book?`, 'bot');
}
// .2
const persons = () => {
  questionNumber++
  showMessage(`How many are going to travel?`, 'bot');
}

// fail
const fail = () => {
  showMessage(`Try input again`, 'bot');
}

// usrInput has input as parameter
//??sen fattar jag inte varför input finns som parameter på båda ställena?? 
const usrInput = (input) => {
  showMessage(input, 'user');
}

// Eventlisteners

// .3 with buttons instead of text input
//??varför behöver vi getElementById i funktionen??
const where = () => {
  questionNumber++
  showMessage(`What settings are you looking for?`, 'bot');

  inputWrapper.innerHTML = `
  <button id="mountain">Mountain</button>
  <button id="beach">Beach</button>
  <button id="city">City</button>
  `
  const mountain = document.getElementById('mountain')
  const beach = document.getElementById('beach')
  const city = document.getElementById('city')

  mountain.addEventListener('click', () => {
    nxtQuestion('mountain')
  })
  beach.addEventListener('click', () => {
    nxtQuestion('beach')
  })
  city.addEventListener('click', () => {
    nxtQuestion('city')
  })
}

// .4 after choosing mountain/beach/city - a list to select 
//??när/vart använder vi plc??
const place = (plc) => {
  if (plc === 'mountain') {
    inputWrapper.innerHTML = `
    <select id="select">
      <option value="Schweiz">Schweiz</option>
      <option value="Chile">Chile</option>
      <option value="Tibet">Tibet</option>`
  } else if (plc === 'beach') {
    inputWrapper.innerHTML = `
    <select id="select">
      <option value="Miami">Miami</option>
      <option value="Bali">Bali</option>
      <option value="Las Palmas">Las Palmas</option>
      `
  } else if (plc === 'city') {
    inputWrapper.innerHTML = `
    <select id="select">
      <option value="NewYork">New York</option>
      <option value="Barcelona">Barcelona</option>
      <option value="Tokyo">Tokyo</option>`
  }
}

// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1500)















