// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const userInput = document.getElementById('user-input')
const inputWrapper = document.getElementById('input-wrapper')
const submitBtn = document.getElementById('submit')
const chatForm = document.getElementById('chat-form')

// Global variables, if you need any, declared here
let questionNumber = 1;
let whichMood
// FUNCTIONS DECLARED HERE


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('test');

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
    `;
    /*document.getElementById('user-input').value = "";*/
  }
  
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hey there, what's your name? &hearts;`, 'bot')

}
// Set up your eventlisteners here

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = userInput.value;

  showMessage(value, 'user');

  if (questionNumber === 1) {
    if (value === '') {
      showMessage(`Hey, I did not catch your name, could you repeat that?`, 'bot')
    } else {
      showMessage(`Hey ${value}, how are you today on a scale of 1-10?`, 'bot')
      questionNumber++;
      console.log(questionNumber);
    }
  } else if (questionNumber === 2) {
      if (Number(value) <= 4) {
        showMessage(`Oh, I'm sorry to hear that! Would you like to see a picture of a cute puppy or maybe you need a pep talk? Type 'cutepuppy' or 'peptalk'!`, `bot`)
        questionNumber++;
        whichMood = 'badMood'
        inputWrapper.innerHTML=`<button id="cutePuppybtn">Cute puppy</button> <button id="pepTalk">Pep talk</button>`
        document.getElementById("pepTalk").addEventListener('click', showMessage(`hej`, `bot`))
      } else if (Number(value) >= 5, Number(value) <= 7) {
        showMessage (`Maybe I can cheer you up a bit more with a joke or a funny gif?`, `bot`)
        questionNumber++;
        whichMood = 'okayMood'
      } else if (Number(value) >= 8) {
        showMessage (`Glad you feel so good! You're welcome back whenever you need me!`, `bot`)
      } else {
        showMessage (`Please answer on a scale from 1-10 with numbers :-)`, 'bot')
    }
  } else if (questionNumber === 3, whichMood === 'badMood') {
    if (value === 'cutepuppy') {
      showMessage(`placeholder puppy`, 'bot')
    }
  }
  
});

const badMood = (choice) => {
  if (choice === 'cutePuppy') {
    showMessage(`Picture of cute puppy`)
  }
}

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
/*setTimeout(handleNameInput, 1000)*/
