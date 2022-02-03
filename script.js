// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')
const nameForm = document.getElementById("name-form")

let questionNumber = 1

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}



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

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => showMoodTypes(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showTitles(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showMenu(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => showSnacks("snack?"), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}

// Starts here
 const greeting = () => {
  questionNumber = 1
  botReply(`Good day and welcome to Bot Theatre! What is your name?`, 'bot')
   // Just to check it out, change 'bot' to 'user' here 👆
 }

 const showMoodTypes = (msg) => {
  questionNumber++
  botReply(
    `Nice to meet you ${msg}. What type of mood are you in?`
  )

  inputWrapper.innerHTML = `
    <button id="happyBtn">🤣</button>
    <button id="romanticBtn">🥰</button>
    <button id="horrorBtn">😱</button>
    <button id="bollywoodBtn">💃🏼</button>
    `

document
  .getElementById('happyBtn')
  .addEventListener('click', () => nextQuestion('comedy'))
document
  .getElementById('romanticBtn')
  .addEventListener('click', () => nextQuestion('romance'))
document
  .getElementById('horrorBtn')
  .addEventListener('click', () => nextQuestion('horror'))
document
  .getElementById('bollywoodBtn')
  .addEventListener('click', () => nextQuestion('bollywood'))
}

const showTitles = (type) => {
  questionNumber++

  botReply(
    `So you want to watch some ${type}? Great choice. Select something from the list!`
  )

  if (type === 'comedy') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select a comedy...</option>
        <option value="My Big Fat Greek Wedding">Big fat greek wedding</option>
        <option value="Dumb Dumber">Dumb Dumber</option>
        <option value="Meet The Fockers">Meet the Fockers</option>
      </select>
    `
  } else if (type === 'romance') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select a romantic movie...</option>
        <option value="Pride & Prejudice ">Pride & Prejudice</option>
        <option value="Titanic">Titanic</option>
        <option value="Notebook">The Notebook</option>
      </select>
    `
  } else if (type === 'horror') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select a horror movie...</option>
        <option value="Shining">The Shining</option>
        <option value="Blair Witch Project">The Blair Witch Project</option>
        <option value="Paranomal activity">Paranormal Activitye</option>
      </select>
    `
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select </option>
        <option value="Tadap">Tadap</option>
        <option value="Tanhaji">Tanhaji</option>
        <option value="Baaghij 3">Baaghij 3</option>
      </select>
    `
  }

  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}
// Snacks yes or no
const showMenu = (movie) => {
  questionNumber++

  botReply(`Awesome choice! The ${movie} is a great movie! Would you like some snacks also?`)

  inputWrapper.innerHTML = `
    <button id="theEnd">NO</button>
    <button id="confirm">YES</button>
    `
// If no snacks THE END
  document.getElementById('theEnd').addEventListener('click', () => {
    botReply("No snacks no movie! Go home!")
      // location.reload()
      return false
    })
//if snacks true move to next question
    document
      .getElementById('confirm')
      .addEventListener('click', () => nextQuestion('Yes!!!'))
  }
//Choose snacks
  const showSnacks = (candy) => {
    questionNumber++

    botReply (`Snacks is life! Whats your favorite ${candy}`)

    inputWrapper.innerHTML = `
      <button id="popcornBtn">🍿</button>
      <button id="candyBtn">🍫</button>
      <button id="cheeseBtn">🧀 </button>
      `
      document
      .getElementById('popcornBtn')
      .addEventListener('click', () => nextQuestion('Popcorn'))
    document
      .getElementById('candyBtn')
      .addEventListener('click', () => nextQuestion('Candy'))
    document
      .getElementById('cheeseBtn')
      .addEventListener('click', () => nextQuestion('Cheese'))
    }
  
const thankYou = () => {
  botReply(`Enjoy your movie! Hope your have a great night! 👋🏼`)
  inputWrapper.innerHTML = ``
}

sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})

 setTimeout(greeting, 1000)

 nameForm.addEventListener("submit", (event) => {
  event.preventDefault()
})



//   document
//     .getElementById('adult')
//     .addEventListener('click', () => nextQuestion('adult'))
//   document
//     .getElementById('child')
//     .addEventListener('click', () => nextQuestion('child'))
// }

// const showPrice = (size) => {
//   questionNumber++

//   let price
//   if (size === 'adult') {
//     price = '€15'
//   } else {
//     price = '€10'
//   }

//   botReply(
//     `One ${size} sized dish will be prepared for you. That'll be ${price}. Are you sure you want to order this?`
//   )

//   inputWrapper.innerHTML = `
//     <button id="restart">NO</button>
//     <button id="confirm">YES</button>
//   `
