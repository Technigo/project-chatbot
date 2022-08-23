// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper')
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('input')

// If you need any global variables that you can use across different functions, declare them here:

let questionNumber = 1

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

const joke1AnswerCorrect = `
  <select class="food-select" id='select'>
    <option value='' selected disabled>Click here to choose pizza</option>
    <option value='Margarita'>Margarita</option>
    <option value='Hawaii'>Hawaii</option>
    <option value='Calzone'>Calzone</option>
  </select>
`

const joke1AnswerWrong = `
  <select class="food-select" id='select'>
    <option value='' selected disabled>Click here to choose Pasta</option>
    <option value='Carbonara'>Carbonara</option>
    <option value='Bolognese'>Bolognese</option>
    <option value='Frutti di mare'>Frutti Di Mare</option>
  </select>
`

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
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log(message);
    
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
  chat.scrollTop = chat.scrollHeight;
}
/*
const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => showJoke(message), 1000)
  } else if (questionNumber === 2) {
      userReply(message)
      setTimeout(() => showJokeResponse(message), 1000)
    }/* else if (questionNumber === 3) {
      userReply(message)
      setTimeout(() => showRiddle(message), 1000)
    }*/


// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`Hello there, What's your name?`, 'bot');
}

setTimeout(greeting, 800)

// first question
const handleNameInput = (event) => {
  event.preventDefault() //prevents submit to reset page
  const userName = nameInput.value //Adds a variable from the input element in HTML
  showMessage(userName, 'user')//Shows the message as a user in the chat.
  nameInput.value = ''
  setTimeout (() => showMessage(`Nice to meet you ${userName}!`, 'bot'), 1000 ) //shows the message "nice to meet you with the submitted name after one second".
  setTimeout(() => showMessage('What do you call a fish wearing a bowtie?', 'bot'), 2000) //Writes a second message with the joke.
  setTimeout (() => handleJokeInput(userName), 2000) //Adds the input parameters that the user can choose from.
}

nameForm.addEventListener('submit', handleNameInput) //Calls the handeNameInput when the user press the submit button.

// Second question
const handleJokeInput = () => { //Function for the input parameters of first question.
  inputWrapper.innerHTML = `
    <button id="Joke1true">Sofishticated</button>
    <button id="Joke1false">Mr.Reddensnapper</button>
  `//adds two alternatives to choose from.
  
  document
  .getElementById('Joke1true')
  .addEventListener('click',() => { //Calls the showMessage below when user press the joke1true button.
    showMessage("It's Sofishticated, of course!", 'user') //Writes the users answer in the chat
    inputWrapper.innerHTML = '' 
    setTimeout(() => joke1Answer(`Excellent choice! It's correct!`), 1000) //Writes the 
    setTimeout(() => showMessage('Would you like a riddle instead?', 'bot'), 2000) //
    setTimeout (() => handleRiddleInput(userName), 2000) //
  })

  document
  .getElementById('Joke1false')
  .addEventListener('click',() => { //Calls the showMessage below when user press the joke2false button.
    showMessage('Mr. Reddensnapper, if I may.', 'user') //Writes the users anwer in the chat
    inputWrapper.innerHTML = '' 
    setTimeout(() => joke1Answer('Close, but no cigar'), 1000) 
  })
} 

const handleRiddleInput = () => { //Function for the input parameters of first question.
  inputWrapper.innerHTML = `
    <button id="Joke1true">Awsome! Give me a riddle!</button>
    <button id="Joke1false">Dangit! Can I try another one?</button>
  `//adds two alternatives to choose from.
}

// Third question
const joke1Answer = joke1Choice => {
  showMessage(`${joke1Choice}`, 'bot')

  if (joke1Choice === `It's Sofishticated, of course!`) {
    inputWrapper.innerHTML = joke1AnswerCorrect
  } else if (joke1Choice === `Mr. Reddensnapper, if I may.`) {
    inputWrapper.innerHTML = joke1AnswerWrong
  } 

  const selectedFood = document.getElementById('select') //

  selectedFood.addEventListener('change', () => {
    showMessage(selectedFood.value, 'user') //Collects the data from variable above.
    confirmation += `So you want ${selectedFood.value} ` //Bot answers with a new topic.
    inputWrapper.innerHTML=''
    setTimeout(() => askForAmount(selectedFood.value), 1000)
  }) 
}

/*
const showJoke = (msg) => {
  questionNumber++
  botReply(
    `Nice to meet you ${msg}. What do you call a fish wearing a bowtie?`
    )
  inputWrapper.innerHTML = `
  <button id="joke1true">Sofishticated</button>
  <button id="joke1false>Mr.Reddensnapper</button>
  `

  document
    .getElementById('joke1true')
    .addEventListener('click', () => nextQuestion('Sofishticated'))
  document
    .getElementById('joke1false')
    .addEventListener('click', () => nextQuestion('Mr.Reddensnapper'))
}

*/








// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

