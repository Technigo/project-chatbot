const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputWraper = document.getElementById('input-wrapper')
let username = ""
let buttonSelection = null

// Global variables, if you need any, declared here
const questions = [
  {
    question: 'Hi 👋🏼  I am your Corona Dr. I will help you with you corona test / vaccin booking. What is your name?',
  },
  {
    question: 'Do you want to take a corona test or book a vaccin appointment?',
  },

  {
    question: 'Do you want to take a corona test or book a vaccin appointment?',
  },

  {
    question: 'So corona tets it is, please choose your city',
  },

  {
    question: 'Great city your living in. Now choose a date from the calendar.',
  },

  {
    question: 'Thank you so much. Please enter your email.',
  },
  {
    question: 'You got a booking confirmation in your email. Take care! 🤗',
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
        <img src="assets/userbot.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/drbot.png" alt="Bot" />
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
  const loading =  document.getElementById('loading-img')
  event.preventDefault();
  questionNumber++
  playSound()

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

  setTimeout(() => {
    console.log('text')
    document.getElementById('loading-img').classList.remove('loading-img-off')
    document.getElementById('loading-img').classList.add('loading-img')

    
  }, 300);

  setTimeout(() => {
    console.log('text-off')
    document.getElementById('loading-img').classList.remove('loading-img')
    document.getElementById('loading-img').classList.add('loading-img-off')

  }, 1000);
})

const buttonValue = (valueButton) => {
  buttonSelection = valueButton
}



//Question #2
const questionHealth = () => {
  showMessage(`Great meeting you ${username}! Do you feel sick?`, 'bot')
  form.innerHTML = `
    <button id="continue" onclick='buttonValue("Yes")'>Yes</button>
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
  showMessage(`Happy to hear ${username}! Just a friendy reminder : 🧍↔️🧍+ 😷 `, 'bot')
  form.innerHTML = ``
}

//Question #3
const questionTypes = () => {
  showMessage(questions[questionNumber].question, 'bot')
  form.innerHTML = `
      <button id="corona" onclick='buttonValue("Corona test")'>Corona 🦠</button>
      <button id="vaccin" onclick='buttonValue("Vaccin booking")'>Vaccin 💉</button>
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
    <option value="" selected disabled>🌆 Select your city</option>
      <option value="Stockholm">Stockholm</option>
      <option value="Göteborg">Göteborg</option>
      <option value="Malmö">Malmö</option>
      <option value="Uppsala">Uppsala</option>
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
  form.innerHTML = ``
}

const playSound = () => {
  const sound = new Audio('sound.wav');
  sound.play()
}

const loadingBubble = () => {
  const loading = document.getElementById('loading-img');
  loading.play()
}

setTimeout(greeting, 1500)

