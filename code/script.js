// All the DOM selectors stored as short variables
const chat = document.getElementById('chat'),
      quizButton = document.querySelector('.quiz-button'),
      inputWrapper = document.getElementById('inputWrapper'),
      nameInput = document.getElementById('nameInput'),
      form = document.getElementById('name-form');


// Global variables
let currentQuestion = 0; 

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
    console.log('Hello')
    // functionCounter++;
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

// Starts here, all the bot questions
const greeting = () => {
  currentQuestion = 1
  showMessage(`Hello there, What's your name?`, 'bot')
  console.log('bot')
 }

const oreoQuestion = () => {
  currentQuestion++
  setTimeout(() => 
  showMessage('How do you eat an Oreo?','bot'), 1200);
  
  // Generate a set of buttons with bite choices
  inputWrapper.innerHTML = `
  <button id="oneBiteBtn">In one bite</button>
  <button id="pickApartBtn">Pick apart</button>
  <button id="dipMilkBtn">Dip in milk</button>
  `
  // Send to next question depending on which button was clicked
  document.getElementById('oneBiteBtn').addEventListener('click', () => {
    showMessage('I eat it in one bite.', 'user')
    setTimeout(() => showMessage('Excellent choice!', 'bot'), 1000)
    handleInput()
  })
  document.getElementById('pickApartBtn').addEventListener('click', () => {
    showMessage('I like to pick it apart.', 'user')
    setTimeout(() => showMessage('Great choice!', 'bot'), 1000)
    handleInput()
  })
  document.getElementById('dipMilkBtn').addEventListener('click', () => {
    showMessage('I like to dip it in milk.', 'user')
    setTimeout(() => showMessage('Wet and fantastic choice!', 'bot'), 1000)
    handleInput()
  })

  console.log('hej hej')

}

//Final question of our bot
const lastQuestion = () => {

  currentQuestion++
  setTimeout(() => showMessage('Do you share your dessert with others?', 'bot'), 3000) 
  console.log('hallu')
  inputWrapper.innerHTML = `
    <button id="yes1">Yes of course!</button>
    <button id="little2">Just a small bite</button>
    <button id="no3">Hell no!</button>
    `
  document.getElementById('yes1')
    .addEventListener('click', () => {
      showMessage('Yes of course!', 'user')
      setTimeout(() => 
      showMessage('What an angel! You sound like an amazing person! You strive to look after the people around you. Everyone wants to be your friend!', 'bot'))
      bye()
  })
  document.getElementById('little2')
    .addEventListener('click', () => {
      showMessage('Just a small bite', 'user')
      setTimeout(() => 
      showMessage('Just the right amount! You seem like the ultimate version of yourself. You know how to have balance in your life. "To have the cake and eat it too" is your life motto.', 'bot'))
      bye()
  })
  document.getElementById('no3')
    .addEventListener('click', () => {
      showMessage('Hell no!', 'user')
      setTimeout(() => 
      showMessage('Alright! You definitely have integrity, buddy. You know what you want and you are not afraid to ask for it! Keep rockin\' on!', 'bot'))
      bye()
  })
}

// This is were the user finds out the truth
const bye = () => {
  currentQuestion++
    setTimeout(() => 
    showMessage('Hope you\'ve learned a bit about yourself today. Enjoy life!', 'bot'), 5000)
    setTimeout(() => 
    showMessage('Are you unhappy with my evaluation of you? You\'re welcome to take this test again.', 'bot'), 9000)
    inputWrapper.innerHTML = `
    <button id="bye">Redo test</button>
    `
    document.getElementById('bye')
      .addEventListener('click', () => {
        location.reload()
    })
}


// If .. else statement that loops the questions
const handleInput = (event) => {

  if (currentQuestion === 1) {
    nameQuestion()
  } else if (currentQuestion === 2) {
    oreoQuestion()
  } else if (currentQuestion === 3) {
    lastQuestion()
  } else {
    bye(currentQuestion === 4)
  }
  currentQuestion++
}

// input user answers
form.addEventListener('submit', (event) => {
  event.preventDefault()
  handleInput()
})

const nameQuestion = () => {
  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = ''


  // First answer 
  const firstAnswer = (`Hi ${name}! Nice to see you here!`)
    setTimeout(() => 
    showMessage(firstAnswer, 'bot'), 1000)
    setTimeout(oreoQuestion, 1000)

  nameInput.innerHTML = `
    <input id="nameInput" type="text" />
    <button class="send-btn" type="submit">
      Send
    </button>
  `
}

// Eventlistener - Start the quiz
quizButton.addEventListener('click', () => 
setTimeout(greeting, 1000))
