const chat = document.getElementById('chat')
const form = document.getElementById('name-form')

//Functions 
const playSound = () => {
  const sound = new Audio('sound.wav');
  sound.play()
}

const loadingBubble = () => {
  const loading = document.getElementById('loading-img');
  loading.play()
}

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

// Eventlistner 
form.addEventListener('submit', (event) => {
  event.preventDefault()
  playSound()
  const input = document.getElementById('name-input');
  if (input) {
    showMessage(input.value, 'user')
    inputText = input.value
    document.getElementById('name-input').value = ''
    setTimeout(() => { healthQuestion() }, 1500)
  }

  setTimeout(() => {
    document.getElementById('loading-img').classList.remove('loading-img-off')
    document.getElementById('loading-img').classList.add('loading-img') 
  }, 300);

  setTimeout(() => {
    document.getElementById('loading-img').classList.remove('loading-img')
    document.getElementById('loading-img').classList.add('loading-img-off')
  }, 1000);
})

// Chat starts here
const greeting = () => {
  showMessage('Hi 👋🏼 I am your Corona Dr. I will help you with you corona test / vaccine booking. What is your name?', 'bot')
}

// Question #2
const healthQuestion = () => {
  showMessage(`Great meeting you ${inputText}! Do you feel sick?`, 'bot')
  form.innerHTML = `
    <button id="continue" onclick='buttonValue("Yes")'>Yes</button>
    <button id="quit" onclick='buttonValue("No")'>No</button> 
  `
  document
    .getElementById('continue')
    .addEventListener('click', () => {
      showMessage('Yes', 'user');
      setTimeout(() => { optionQuestion() }, 1500)
    })

  document
    .getElementById('quit')
    .addEventListener('click', () => {
      showMessage('No', 'user');
      setTimeout(() => { goodByeMsg() }, 1500)
    })
}

// Question #3
const optionQuestion = () => {
  showMessage('Do you want to take a corona test or book a vaccine appointment?', 'bot')
  form.innerHTML = `
      <button id="corona" onclick='buttonValue("Corona test")'>Corona 🦠</button>
      <button id="vaccine" onclick='buttonValue("Vaccine booking")'>Vaccine 💉</button>
    `
  document
    .getElementById('corona')
    .addEventListener('click', () => {
      showMessage('Corona test', 'user');
      setTimeout(() => { questionCity('city') }, 1500)
    })

  document
    .getElementById('vaccine')
    .addEventListener('click', () => {
      showMessage('Vaccine booking', 'user');
      setTimeout(() => { callenderBooking('calender') }, 1500)
    })
}

// Question #4
const questionCity = () => {
  showMessage('So corona test it is, please choose your city', 'bot')
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
      showMessage(select.value, 'user')
      setTimeout(() => { contact() }, 1500)
    })
} 

// Question #5
const callenderBooking = () => {
  showMessage('Thank you! Now choose a date from the calendar.', 'bot')
  form.innerHTML = `
    <input type="date" id="calendar" name="birthday">
    <button id="send-btn" class="send-btn" type="submit">
     Send
    </button>
    `
  document
    .getElementById('send-btn')
    .addEventListener('click', () => {
      showMessage(calendar.value, 'user')
      setTimeout(() => { contact() }, 1500)
    })
} 

// Question #6 
const contact = () => {
  showMessage('Thank you so much. Please enter your email.', 'bot')
  form.innerHTML = `
    <input id="ending" type="text" />
    <button id="send-btn" class="send-btn" type="submit">
      Send
    </button>
    `
  document
    .getElementById('send-btn')
    .addEventListener('click', () => {
      showMessage(ending.value, 'user')
      setTimeout(() => {endingMsg() }, 1500)
    })
}

// Chat endig 
const endingMsg = () => {
  showMessage('You got a booking confirmation in your email. Take care! 🤗,', 'bot')
  form.innerHTML = ``
}

const goodByeMsg = () => {
  showMessage(`Happy to hear ${inputText}! Just a friendy reminder : 🧍↔️🧍+ 😷 `, 'bot')
  form.innerHTML = ``
}

setTimeout(greeting, 1000)