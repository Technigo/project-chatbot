const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')

let botQuestion = 1

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
        <img src="assets/cloud-crowd-bot.svg" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/cloud-crowd-bot.svg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  chat.scrollTop = chat.scrollHeight
}

const nextQuestion = (message) => {
  console.log('questionNumber', botQuestion)

  if (botQuestion === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => showAltitudeTypes(message), 1000)
  } else if (botQuestion === 2) {
    userReply(message)
    setTimeout(() => showMenu(message), 1000)
  } else {
    userReply(message)
    setTimeout(cloudType, 1000)
  }
}

const greeting = () => {
  botQuestion = 1
  botReply(`Welcome to Cloud Crowd! What's your name?`)
}

const showAltitudeTypes = (msg) => {
  botQuestion++
  botReply(
    `Hello ${msg}! So, you need help identifying a cloud. No time to waste - at what altitude is your cloud located?`
  )

  inputWrapper.innerHTML = `
    <button id="highBtn">High</button>
    <button id="lowBtn">Low</button>
  `

    document
    .getElementById('highBtn')
    .addEventListener('click', () => nextQuestion('high'))
  document
    .getElementById('lowBtn')
    .addEventListener('click', () => nextQuestion('low'))
}

const showMenu = (type) => {
  botQuestion++

  if (type === 'high') {
    botReply (`Ok, so it's high clouds we're dealing with. Please let us know their features.`)
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>☁️ High altitude characteristics</option>
        <option value="wispy">Wispy</option>
        <option value="dense">Dense</option>
      </select>
    `
    
  } else {
        botReply (`Ok. Now, low clouds are a bit whimsical. Please let us know their features.`)
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>☁️ Low altitude characteristics</option>
          <option value="wispy">Wispy</option>
        <option value="dense">Dense</option>
      </select>
    `
  }

  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}

const cloudType = () => {
  botReply(`RAIN IS COMING – YOU BETTER RUN!`)
  inputWrapper.innerHTML = ``
}

sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})

setTimeout(greeting, 1000)