// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');
const sendBtn = document.getElementById('send');

// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

let questionNumber = 1



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
    console.log("why");
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

// Starts here
const greetUser = () => {
  questionNumber = 1
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, what's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

const whatIsTheWeather = (nameInput) => {
  questionNumber++
  showMessage(
      `Happy to help you find an activity for you and your toddler, ${nameInput}! First can you tell me, what's the weather like today?`, 'bot');
  

  inputWrapper.innerHTML = `
    <button id="sunnyBtn">Sunny</button>
    <button id="cloudyBtn">Cloudy</button>
    <button id="rainyBtn">Rainy</button>
`

// Event listners for my buttons. I included them within the const whatIsTheWeather block. Otherwise it seemed to break the code.
document
.getElementById('sunnyBtn')
.addEventListener('click', () => nextQuestion('sunny'))
document
.getElementById('cloudyBtn')
.addEventListener('click', () => nextQuestion('cloudy'))
document
.getElementById('rainyBtn')
.addEventListener('click', () => nextQuestion('rainy'))
}

// Set up your eventlisteners here:
// This listens out for the name:
form.addEventListener('submit', (event) => {
  event.preventDefault()

//This listens out for...


  // Store the value in a variable so I can access it after we 
  // clear it from the input
  const userName = nameInput.value
  showMessage(userName, 'user');

  // Clears the input field
  nameInput.value = ''

  //Here I will call the function where I present the weather to choose from. I will also pass the userName
  setTimeout(() => whatIsTheWeather(userName), 1000)
})



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
