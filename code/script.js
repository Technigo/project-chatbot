// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const sendBtn = document.getElementById('send-btn');
const input = document.getElementById('name-input');

// Global variables, if you need any, declared here

// Functions declared here


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log();
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === 'bot') {
    console.log();
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};



// Starts here
const greeting = () => {
  showMessage(`Welcome`, 'bot');
  showMessage(`What's your name?`, 'bot');

  // Just to check it out, change 'bot' to 'user' here 👆
};

const firstQuestion = () => {
  showMessage(`What do you want?`, 'bot');
};



// Set up your eventlisteners here

sendBtn.addEventListener('click', () => {
  showMessage(input.value, 'user')
  input.value = ''
  setTimeout(firstQuestion, 1000);
})



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);



document.getElementById('name-form').onsubmit = event => {
  event.preventDefault()
}

