// Variables that point to selected DOM elements
const chat = document.getElementById('chat');

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

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => showJoke(message), 1000)
    else if (questionNumber === 2) {
      userReply(message)
      setTimeout(() => showJokeResponse(message), 1000)
    /*} else if (questionNumber === 3) {
      userReply(message)
      setTimeout(() => showRiddle(message), 1000)
    }*/
  }
}

// Starts here
const greeting = () => {
  questionNumber = 1
  botReply(`Hello there, What's your name?`, 'bot');
}

const showJoke = (msg) => {
  questionNumber++
  botReply (`Nice to meet you ${msg}. What do you call a fish wearing a bowtie?`)
  inputWrapper.innerHTML = `
  <button id="joke1true">Sofishticated</button>
  <button id="joke1false>XXXXXX</button>
  `
}

const handleNameInput = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const name = nameInput.value
  
  showMessage(name, 'user')
  nameInput.value = ''

  // After 1 second, show the next question by invoking the next function.
	// passing the name into it to have access to the user's name if we want
	// to use it in the next question from the bot.
  // setTimeout(() => showFoodOptions(name), 1000)
}

// --- First intention --- //





// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 800);
