// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const docBotForm = document.getElementById('doc-bot-form')
const userInput = document.getElementById('name-input');

// Global variables, if you need any, declared here

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
    // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
    chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
    showMessage('Enter your name to start your appointment with Doc.Bot', 'bot');
}

let questionCounter = 0;

// Set up your eventlisteners here
docBotForm.addEventListener('submit', event => {
    event.preventDefault()

    if (questionCounter === 0) {

        const userReply = () => {
            showMessage(userInput.value, 'user')
        }
        userReply();


        const botReply = (message) => {
            showMessage(message, 'bot')
        }
        botReply(`Welcome ${userInput.value}! How are you feeling today?`, 'bot');
    } else if (questionCounter === 1) {
        const userReply = () => {
            showMessage(userInput.value, 'user');
        }
        userReply();

        // if (userReply2.length < 6) {
        //     const botReply = (message) => {
        //         showMessage(message, 'bot')
        //     }
        //     botReply(`Can you explain more about that?`);
        //     else(userReply2.length > 6) {
        //         const botReply = (message) => {
        //             showMessage(message, 'bot')
        //         }
        //         botReply(`Why do you think you feel like that today?`);
        //}

    }
    userInput.value = '';
    questionCounter = questionCounter + 1;
});
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.*/
setTimeout(greeting, 1000)