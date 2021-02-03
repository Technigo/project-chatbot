// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const userInput = document.getElementById('user-input')
const inputWrapper = document.getElementById('input-wrapper')
const submitBtn = document.getElementById('submit')
const chatForm = document.getElementById('chat-form')

// Global variables, if you need any, declared here
let questionNumber = 1;
/*let choiceFood*/
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
    document.getElementById('user-input').value = "";
  }
  
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hey there, what's your name? &hearts;`, 'bot')

}
// Set up your eventlisteners here

/*const handleNameInput = document.getElementById("submit").addEventListener("click", function(submit){
  submit.preventDefault()
  const name = userInput.value
  showMessage(name, 'user')
  userInput.value = ''
  
  showMessage(`Hey ${name}, would you like to eat pasta or salad?`, 'bot')§
});*/


chatForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = userInput.value;

  showMessage(value, 'user');

  if (questionNumber === 1) {
    if (value === '') {
      showMessage(`Hey, I did not catch your name, could you repeat that?`, 'bot')
    } else {
      showMessage(`Hey ${value}, would you like to eat pasta or salad?`, 'bot')
      questionNumber++;
      console.log(questionNumber);
    }
  } else if (questionNumber === 2) {
    if (value === 'pasta') {
      showMessage(`Happy to hear that! Would you like pasta bolognese or pasta arrabiata?`, `bot`)
      questionNumber++;
      /*choiceFood = 'pasta' */
    } else if (value === 'salad') {
      showMessage (`Happy to hear that! Here is our salad menu`, `bot`)
      questionNumber++;
      /*choiceFood = 'salad'*/
    } else {
      showMessage (`Hey, would you like to eat pasta or salad?`, 'bot')
    }
  } 
  
});


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
/*setTimeout(handleNameInput, 1000)*/
