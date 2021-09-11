// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')
// Global variables, if you need any, declared here
let questionNumber = 1
let appointmentDate = '';
let msgNotificationAudio = new Audio('./assets/notification.mp3');
msgNotificationAudio.volume = 0.2;

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

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

  msgNotificationAudio.play();

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => bookOrCancel(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showMenu(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showHairdresser(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => showDate(message), 1000)
  } else if (questionNumber === 5) {
    userReply(message)
    setTimeout(() => showTime(message), 1000)
  } else if (questionNumber === 6) {
    userReply(message)
    setTimeout(() => showConfirmation(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1500)
  }
}

// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`Welcome to Urban Hairdo! What's your name?`)
}

const handleNameInput = document.getElementById('name-form').addEventListener('submit', (event) => {
  event.preventDefault()
  const nameInput = document.getElementById('name-input')
  const userName = nameInput.value

  userReply(userName, 'user')
  nameInput.value = ''
  setTimeout(() => bookOrCancel(userName), 1000)
}
)

// Question2 (booking or canceling)

const bookOrCancel = (msg) => {
  questionNumber++
  botReply(`Hello ${msg}! Do you wish to book or cancel an appointment?`)

  inputWrapper.innerHTML = `
  <button id="bookBtn">Book</button>
  <button id="cancelBtn">Cancel</button>
`

  document
    .getElementById('bookBtn')
    .addEventListener('click', () => nextQuestion(`I want to book an appointment.`))
  document
    .getElementById('cancelBtn')
    .addEventListener('click', () => nextQuestion(`I want to cancel an appointment.`))
}

// Question3 (choose treatment)

const showMenu = (type) => {
  questionNumber++

  if (type === `I want to book an appointment.`) {
    botReply(`Awesome! What kind of appointment would you like to book?`)
    inputWrapper.innerHTML = `
        <select id="select">
          <option value="" selected disabled>Select appointment</option>
          <option value="Haircut">Haircut</option>
          <option value="Coloring">Coloring</option>
          <option value="Hair treatment">Hair Treatment</option>
          <option value="Perm">Perm</option>
        </select>
      `
  } else {
    botReply(`Please call 08-123 45 67 to cancel your appointment. Sorry to see you go!`)
    inputWrapper.innerHTML = ``
  }

  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}

// Question4 (choose hairdresser)

const showHairdresser = (treatment) => {
  questionNumber++

  botReply(`A ${treatment.toLowerCase()}, how exciting! Which hairdresser would you like to book?`)

  inputWrapper.innerHTML = `
  <button id="bookAnna">Anna</button>
  <button id="bookHaru">Haru</button>
`
  document
    .getElementById('bookAnna')
    .addEventListener('click', () => nextQuestion(`Anna`))
  document
    .getElementById('bookHaru')
    .addEventListener('click', () => nextQuestion(`Haru`))
}

// Question5 (choose date)

const showDate = (hairdresser) => {
  questionNumber++
  botReply(`${hairdresser} is available for booking! Which date do you want to come?`)

  //Variables to prevent choosing past dates.
  const currentDate = new Date()
  const formattedDate = currentDate.toISOString().split('T')[0]

  inputWrapper.innerHTML = `
    <form id="input">
      <label for="date"></label>
      <input type="date" id="date" name="date" min=${formattedDate}>
    </form>
    `
  const input = document.getElementById('date')
  input.addEventListener('change', () => {
    appointmentDate = input.value;
    nextQuestion(input.value);
  })
}

//Question6 (choose time)
const showTime = (date) => {
  questionNumber++
  botReply(`These are the available times on the ${date}.`)

  inputWrapper.innerHTML = `
  <button id="time1" value="10.30">10.30</button>
  <button id="time2" value="11.00">11.00</button>
  <button id="time3" value="13.30">13.30</button>
  <button id="time4" value="14.30">14.30</button>
  <button id="time5" value="16.00">16.00</button>
  `
  let button = document.getElementById('time1')
  button.addEventListener('click', () => nextQuestion(button.value))

  let button2 = document.getElementById('time2')
  button2.addEventListener('click', () => nextQuestion(button2.value))

  let button3 = document.getElementById('time3')
  button3.addEventListener('click', () => nextQuestion(button3.value))

  let button4 = document.getElementById('time4')
  button4.addEventListener('click', () => nextQuestion(button4.value))

  let button5 = document.getElementById('time5')
  button5.addEventListener('click', () => nextQuestion(button5.value))
}

//Question7 (confirm booking)
const showConfirmation = (time) => {
  questionNumber++
  botReply(`Are you sure you want to book an appointment on the ${appointmentDate} at ${time}?`)

  inputWrapper.innerHTML = `
  <button id="confirm">Yes</button>
  <button id="restart">No</button>
  `
  document
    .getElementById('confirm')
    .addEventListener('click', () => nextQuestion(`Yes, I'm sure!`))

  document
    .getElementById('restart')
    .addEventListener('click', () => {
      location.reload()
    })
}

const thankYou = () => {
  botReply(`Your appointment has been registered. Thank you for choosing Urban Hairdo! Looking forward to seeing you!`)
  inputWrapper.innerHTML = ``
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
