/* // Variables that point to selected DOM elements
const chat = document.getElementById('chat');

// If you need any global variables that you can use across different functions, declare them here:
const nameInput = document.getElementById('name-input')
const form = document.getElementById('name-form')
const submit = document.getElementById('submit')
const main = document.getElementById('main')
const inputWrapper = document.getElementById('input-wrapper')

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/th.jfif" alt="th" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log('Be gone!')
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/zoltark.jpg" alt="Zoltark" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}


// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Greetings child, tell me your name", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
const handleNameInput = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const name = nameInput.value
  console.log(name)

  showMessage(`${name} , oh great Zoltark`, 'user')
  nameInput.value = ''

  // After 1 second, show the next question by invoking the next function.
	// passing the name into it to have access to the user's name if we want
	// to use it in the next question from the bot.
  setTimeout(() => fortuneYesNo(name), 1000)
}

const fortuneYesNo = (name) => { 
  showMessage(`Well met, ${name}! Will you tell me of your deepset desires?`, 'bot') //sends second message from bot
  
  
  inputWrapper.innerHTML = // add Yes No button
    `<button id="yesBtn" type="submit">Yes</button>
    <button id="noBtn" type="submit">No</button>`


  const yesBtn = document.GetElementById('yesBtn');
  const noBtn = document.GetElementById('noBtn');

  document
    .getElementById('yesBtn')
    .addEventListener('click', () => {
      showMessage('Yes, tell me of what is yet to come!', 'user')
      setTimeout(showMessage('So be it, choose wisely', 'bot'), 1000)
      fortuneOptions('yes')
      
    })

  document
    .getElementById('noBtn')
    .addEventListener('click', () => {
      showMessage('No thank you, goodbye good sir!', 'user')
      fortuneOptions('no')
    }) 
  }

  const fortuneOptions = (option) => { 
      if (option === 'yes') {
      inputWrapper.innerHTML = 
      `<select id="select">
          <option value="" selected disabled>👇 Tell me about...</option>
          <option value="myFuture">my future</option>
          <option value="myFamily">the fate of my family</option>
          <option value="getBig">..I just want to be big</option>
      </select>`
        
        /* setTimeout(() => complimentOptions(name), 1000) */
    
      /* } else {
        setTimeout(showMessage('Very well, until we meet again...', 'bot'), 3000)//sends second message from bot
        inputWrapper.innerHTML = // add HTML for no 
        `Here you put your new HTML for no`
      }  
  } */

  
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
//setTimeout(greetUser, 800);

//form.addEventListener('submit', handleNameInput)

// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')

const bottrack = new Audio('./assets/zoltartrack.mp3');
const zoltarSound = () => {
      bottrack.play();
};
const usertrack = new Audio('./assets/usertrack.mp3');
const userSound = () => {
      usertrack.play();
};

let questionNumber = 1

const botReply = (msg) => {
  showMessage(msg, 'bot')
  zoltarSound()
}

const userReply = (msg) => {
  showMessage(msg, 'user')
  userSound()
}

const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/th.jfif" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/zoltar.jpg" alt="Bot" />
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
    setTimeout(() => fortuneYesNo(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showFortune(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => chosenFortune(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => showPrice(message), 1000)
    input.value = ''
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}

// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`Greetings child, tell me your name`)
}

const fortuneYesNo = (msg) => {
  questionNumber++
  botReply(
    `Well met, ${msg}! Will you tell me of your deepset desires?`
  )

  inputWrapper.innerHTML = `
    <button id="yesBtn">Yes</button>
    <button id="noBtn">No</button>
  `

  document
    .getElementById('yesBtn')
    .addEventListener('click', () => nextQuestion('yes'))
  document
    .getElementById('noBtn')
    .addEventListener('click', () => nextQuestion('no'))
}

const showFortune = (type) => {
  questionNumber++

  if (type === 'yes') {

     botReply ('So be it, choose wisely')

    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Tell me of...</option>
        <option value="future">my future</option>
        <option value="family">the fate of my family</option>
        <option value="..wait, I just want to be big">Wait, I think I just want to be big</option>
      </select>
    `
  } else {
    botReply('Very well, be gone then.'),
    setTimeout(location.reload(), 3000)
  }

  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion('Tell me of my ' + select.value))
}

const chosenFortune = (type) => {
  questionNumber++
  
  if (type === 'myFuture') {
    setTimeout(botReply(
      `*Excessive flipping of cards*
      ...There's yet more work to be done for you,
      I see greatness at the cost of great strife...
      `), 1000)
  } else if (type === 'family') {
    setTimeout(botReply(
      `*Closes his eyes, turns his head facing upwards hymning something eerie while rubbing his crystal ball*
      ...Hmmm...your family...You must nurture all relationships. 
      Alas, the number of times you will meet are finite.`), 1000)
  } else {
    setTimeout(botReply('Really, this again!? *Slams his crystal ball onto the table*...I recall things not ending up the way it was hoped for the last time someone recieved such a gift'), 1000)
  }
  
  inputWrapper.innerHTML = `
  <button id="stalling">So...?</button>
`

document
  .getElementById('stalling')
  .addEventListener('click', () => {nextQuestion('So...?')})
}

const showPrice = (number) => {
  questionNumber++

  setTimeout(botReply('I hope my guidance will find you peace of mind. With that said, this is no charity.'), 1000)

  inputWrapper.innerHTML = `
  <input id="input" type="number"/>
  <button id="pay" class="send-btn">$ pay up</button>
  `
  const money = input.value
  
  document
    .getElementById('pay')
    .addEventListener('click', () => {nextQuestion()})
}


const thankYou = (money) => {

if (money.value > 20) {
  botReply(`*Takes his money, closes his eyes and sits in silence*`)
} else {
  botReply(`Keep you money, such an inadequate sum is not worthy of my attention`)
}

 
  inputWrapper.innerHTML = `
  <button id="leave">Thank you, oh great Zoltar</button>`

  document
    .getElementById('leave')
    .addEventListener('click', () => setTimeout(location.reload(), 3000))
}

sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})

// When website loaded, chatbot asks first question.
setTimeout(greeting, 1000)
