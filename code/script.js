const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWraper = document.getElementById('input-wrapper')
let username = ""
let buttonSelection = null

// Global variables, if you need any, declared here
const questions = [
  {
    question: 'Welcome to Corona-Test booking. What is your name?',
  },
  {
    question: 'Do you want to take a corona test or book a vaccin appointment?',
  },

  {
    question: 'Do you want to book a vaccin appointment or take a corona test?',
  },

  {
    question: 'Thank you, please choose your city',
  },

  {
    question: 'Choose the date from the calendar',
  },

  {
    question: 'Please enter your email',
  },
  {
    question: 'You got a booking confirmation in your email. Take care!',
  }
]


let questionNumber = 0;


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
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(questions[0].question, 'bot')
}

// Set up your eventlisteners here
form.addEventListener('submit', (event) => {
  event.preventDefault();
  questionNumber++

  if (buttonSelection) {
    showMessage(buttonSelection, 'user')
    buttonSelection = null
  }
  const input = document.getElementById('name-input');
  if (input) {
    showMessage(input.value, 'user')
    username = input.value
    document.getElementById('name-input').value = ''

    if (questionNumber != 6) {
      setTimeout(() => { questionHealth() }, 1500)
    }
  }

  const selectInput = document.getElementById('select')
  if (selectInput) {
    showMessage(selectInput.value, 'user')
  }
})

const buttonValue = (valueButton) => {
  buttonSelection = valueButton
}

//Question #2
const questionHealth = () => {
  showMessage(`Great meeting you ${username}, are you sick today?`, 'bot')
  form.innerHTML = `
    <button id="continue" onclick='buttonValue("yes")'>Yes</button>
    <button id="quit" onclick='buttonValue("No")'>No</button> 
  `
  document
    .getElementById('continue')
    .addEventListener('click', () => {
      setTimeout(() => { questionTypes() }, 1500)
    })

  document
    .getElementById('quit')
    .addEventListener('click', () => {
      setTimeout(() => { goodByeMsg() }, 1500)
    })

}

const goodByeMsg = () => {
  showMessage(`Okey than, have a good day ${username}!`, 'bot')
}

//Question #3
const questionTypes = () => {
  showMessage(questions[questionNumber].question, 'bot')
  form.innerHTML = `
      <button id="corona" onclick='buttonValue("corona")'>🦠</button>
      <button id="vaccin" onclick='buttonValue("vaccin")'>💉</button>
    `
  document
    .getElementById('corona')
    .addEventListener('click', () => {
      setTimeout(() => { questionCity('city') }, 1500)
    })

  document
    .getElementById('vaccin')
    .addEventListener('click', () => {
      questionNumber = 4
      setTimeout(() => { callenderBooking('calender') }, 1500)
    })
}

//Question #4
const questionCity = () => {
  showMessage(questions[questionNumber].question, 'bot')

  form.innerHTML = `
    <select id="select" value="">
      <option value="stockholm">Stockholm</option>
      <option value="göteborg">Göteborg</option>
      <option value="malmö">Malmö</option>
      <option value="uppsala">Uppsala</option>
      </select>
      <button id="send-btn" class="send-btn" type="submit">
     Send
    </button>
    `
  document
    .getElementById('send-btn')
    .addEventListener('click', () => {
      questionNumber = 4
      setTimeout(() => { questionContact() }, 1500)
    })
}

//Question #5
const callenderBooking = () => {
  showMessage(questions[questionNumber].question, 'bot')
  form.innerHTML = `
    <input type="date" id="name-input" name="birthday">
    <button id="send-btn" class="send-btn" type="submit">
     Send
    </button>
    `
  document
    .getElementById('send-btn')
    .addEventListener('click', () => {
      questionNumber = 5
      setTimeout(() => { questionContact() }, 1500)
    })
}

//Question #6 
const questionContact = () => {
  showMessage(questions[questionNumber].question, 'bot')
  form.innerHTML = `
    <input id="name-input" type="text" />
    <button id="send-btn" class="send-btn" type="submit">
      Send
    </button>
    `
  document
    .getElementById('send-btn')
    .addEventListener('click', () => {
      setTimeout(() => { goodbye() }, 1500)
    })
}


const goodbye = () => {
  showMessage(questions[questionNumber].question, 'bot')
  console.log(questionNumber)
}


setTimeout(greeting, 1000) 

