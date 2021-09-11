// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputForm = document.getElementById('input-form')
const textInput = document.getElementById('text-input')
const inputWrapper = document.getElementById('input-wrapper')

// Global variables, if you need any, declared here
let dogName = "";
// Functions declared here

// The showMessage function will add a chat bubble in the correct place based on who the sender is. 
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

// The Bot starts here
//The greeting function sends a message as the bot asking for your name.
const greeting = () => {
  showMessage(`Hello and welcome to Pretty Pets! <br> <br>What's the name of your furry friend?`, 'bot')
}

// The user enters dog name in the handleInput function
// There's a condition-check to make sure that the user enters a valid name
const handleInput = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we clear it from the input
  const userInput = textInput.value
  dogName = userInput;
  showMessage(userInput, 'user')
  if (textInput.value === '') {
    showMessage(`Please enter a valid name`, 'bot')
    handleInput()
  } 
  textInput.value = ''


  // After 1 second, show the next question by invoking the next function passing the name into it to have access to the user's name if we want to use it in the next question from the bot.
  setTimeout(() => nameOfPet(userInput), 1000)
}

// Questions from the Bot about the user selection and creating two buttons (Book appointment and View treamtment)
const nameOfPet = () => {
  showMessage(`Would you like to book an appointment or look at our treatments?`, 'bot')
  
  inputWrapper.innerHTML = `
  <button id="appointmentBtn">Book Appointment</button>
  <button id="treatmentBtn">View Treatments</button>
  `
  document
  .getElementById('treatmentBtn')
  .addEventListener('click', () => viewTreatments())

  document
  .getElementById('appointmentBtn')
  .addEventListener('click', () => bookTreatment())
}

// User choose View treatment and two new buttons gets displayed (Big Lebowski and Michelle Pfieffer) 
const viewTreatments = () => {
  showMessage(`View treatments`, 'user')

  setTimeout(() => showMessage(`Click on the buttons for more information`, 'bot'), 1000)

  inputWrapper.innerHTML = `
  <button id="bigLebowskiBtn">Big Lebowski-Treatment</button>
  <button id="michellePfeifferBtn">Michelle Pfeiffer-Package</button>
`
document
  .getElementById('bigLebowskiBtn')
  .addEventListener('click', () => lebowskiTreatment())
 
  document
  .getElementById('michellePfeifferBtn')
  .addEventListener('click', () => pfeifferTreatment())
}

// User choose Big Lebowski and two new buttons gets displayed (Book treatment and Other treatment option)
const lebowskiTreatment = () => {
  showMessage(`I want to know about the Big Lebowski treatment`, 'user')

  setTimeout(() => showMessage(`The Big Lebowski treatment consists of a flee scrub and a rough hairdo`, 'bot'), 1000)

  inputWrapper.innerHTML = `
  <button id="bookTreatmentBtn">Book treatment</button>
  <button id="otherOptionsBtn">Other treatment options</button>
`
  document
    .getElementById('bookTreatmentBtn')
    .addEventListener('click', () => bookTreatment())


  document
    .getElementById('otherOptionsBtn')
    .addEventListener('click', () => pfeifferTreatment())
}

// User choose Michelle Pfieffer and two new buttons gets displayed (Book treatment and Other treatment option)
const pfeifferTreatment = () => {
  showMessage(`I want to know about the Michelle Pfeiffer treatment`, 'user')

  setTimeout(() => showMessage(`The Michelle Pfeiffer treatment is our luxury grooming including furr washing and nail SPA`, 'bot'), 1000)

  inputWrapper.innerHTML = `
  <button id="bookTreatmentBtn">Book treatment</button>
  <button id="otherOptionsBtn">Other treatment options</button>
`
  document
    .getElementById('bookTreatmentBtn')
    .addEventListener('click', () => bookTreatment())

  document
    .getElementById('otherOptionsBtn')
    .addEventListener('click', () => lebowskiTreatment()) 
}

// User gets booking options
const bookTreatment = () => {
  showMessage(`I want to book a treatment`, 'user')

  setTimeout(() => showMessage(`Please pick one of the available appointments`, 'bot'), 1000)

  inputWrapper.innerHTML = `
  <select id = "select">
   <option value="" selected disabled>👇 Select an appointment</option>
   <option value = "booking">Monday, 10:00 - 11:00</option>
   <option value = "booking">Tuesday, 13:00 - 14:00</option>
   <option value = "booking">Tuesday, 15:00 - 16:00</option>
  </select> 
  `
  document
  .getElementById('select')
  .addEventListener('change', () => checkOut())

}

//Treatment is booked and bot sends checkout-message
const checkOut = () => {
  showMessage(`Great, looking forward to meet you and ${dogName} soon!`, 'bot')
  inputWrapper.innerHTML = ''
}



// Set up your eventlisteners here
inputForm.addEventListener('submit', handleInput)

// When website loaded, chatbot asks first question. normally we would invoke a function like this: greeting(). But if we want to add a little delay to it, we can wrap it in a setTimeout:
setTimeout(greeting, 1000) 


