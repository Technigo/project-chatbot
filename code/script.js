// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const startButton = document.getElementsByClassName('start-btn')
const form = document.getElementById('name-form')
const inputValue = document.getElementById('name-input')

// Global variables, if you need any, declared here

let currentQuestion = 1;

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {

    // Isabel's console.log

    console.log(message)
    console.log(sender)

    // Nina's console.log
    console.log('kind of getting this')
    console.log(`This is my message: ${message}`)


    chat.innerHTML +=

      `
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
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// The dialogue starts here
const greeting = () => {
  showMessage(`Hi there! What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}
const moodQuestion = () => {
  showMessage('How are feeling today?', 'bot')
}

const secondQuestion = () => {
  showMessage('Question number 2?', 'bot')
}

const handleInput = (event) => {
  event.preventDefault()
  
  console.log('our currentQuestion variable is:', currentQuestion)

  if (currentQuestion === 1) {
    handleMoodQuestion()
  } 
  else if (currentQuestion === 2){
    handleSecondQuestion()
  }
  
  currentQuestion++
  /* console.log('handing over to the bot with a new currentQuestion value', currentQuestion) */
}

const handleMoodQuestion = () => {
  const moodOption = inputValue.value

  showMessage(`My mood is ${moodOption}`, 'user')
  inputValue.value = ''

  setTimeout(secondQuestion, 1000) //Here we passing the next bot question. This could also be setup more generic, for example with a botQuestion function.
}


// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

// setTimeout(greeting, 1000)

form.addEventListener('submit', handleInput)

/* 
This was a previous solution:

const onFormSubmit = (event) => {
  event.preventDefault();
  const message = document.getElementById('name-input').value;
  showMessage(message, 'user');
  message.value = '';
};
 
const startButton = document.getElementById('start');
startButton.addEventListener('click', () => {
  showMessage(`Hi there! How are feeling today? Write '1' for sad, '2' for neutral, '3' for worried and '4' for happy`, 'bot');
});

const form = document.getElementById('name-form');
form.addEventListener('submit', onFormSubmit);
*/

// 0. Create "Start" button
// 1. Click on button
// 2. Get bot phrase
// 3. Output bot phrase

/* LIST OF BOT QUESTIONS

1. Hi there! How are feeling today? (Multiple choice)
2. If 1 (sad) = pepp; else if 2 (neutral) = do you want some cute animal pics to lighten up your day?;
else if 3 (worried) = do you want to follow along to a meditation with me?
else if 4 (happy) = cool! Let's play some happy music.


*/

