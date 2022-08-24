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
  botReply(`Hi! Tell me your name and I will give you a joke!`, 'bot');
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
    setTimeout(() => joke1Answer(`Excellent choice! It's correct!`), 1000) //
    setTimeout(() => showMessage('Would you like a riddle instead?', 'bot'), 2000) //
    setTimeout (() => joke1AnswerCorrect(), 2000)
  })

  document
  .getElementById('Joke1false')
  .addEventListener('click',() => { //Calls the showMessage below when user press the joke2false button.
    showMessage('Mr. Reddensnapper, if I may.', 'user') //Writes the users anwer in the chat
    inputWrapper.innerHTML = '' 
    setTimeout(() => joke1Answer('Close, but no cigar'), 1000) 
    setTimeout(() => showMessage('Do you want another one?', 'bot'), 2000) 
    setTimeout (() => joke1AnswerWrong(), 2000)
  })
} 

const joke1Answer = joke1Choice => {
  showMessage(`${joke1Choice}`, 'bot')

  if (joke1Choice === `It's Sofishticated, of course!`) {
    inputWrapper.innerHTML = joke1AnswerCorrect
  } else if (joke1Choice === `Mr. Reddensnapper, if I may.`) {
    inputWrapper.innerHTML = joke1AnswerWrong
  } 
  //const joke1Answer = document.getElementById('select')
}

const joke1AnswerCorrect = () => {
  inputWrapper.innerHTML =  `
    <button id="gimmeRiddle">Awesome! Give me a riddle!</button>
    <button id="gimmieJoke">No, not done! Can I try another one?</button>
`
}
const joke1AnswerWrong = () => { 
  inputWrapper.innerHTML = `
    <button id="gimmeRiddle">Dammit! Give me a riddle!</button>
    <button id="gimmejoke">Give me another chance!</button>
`
}

const handleRiddleInput = (event) => {
  event.preventDefault() 
  const userName = nameInput.value 
  showMessage(userName, 'user')
  nameInput.value = ''
  setTimeout (() => showMessage(`Nice to meet you ${userName}!`, 'bot'), 1000 )
  setTimeout(() => showMessage('What do you call a fish wearing a bowtie?', 'bot'), 2000) 
  setTimeout (() => handleJokeInput(userName), 2000) 
}

// Riddle



// Another joke

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

