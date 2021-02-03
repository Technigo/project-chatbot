// Getting some DOM-elements:
const formElement = document.getElementById('form');
const chat = document.getElementById('chat');
const sendBtn = document.getElementById('send-btn')
const input = document.getElementById('input')

// Global variables (They are declared here in the global scope so that they will be available in the whole code, including inside different functions):
let userName = ''; // This one is going to store the user name (...duh!)
let kittenGender = ''; // ... and so on...

// Generic functions...

// This function shows a message in the chat. It takes two parameters: the message and the sender
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


// This is the first step in the conversation
const questionOne = () => {
  showMessage('Welcome to KittenBot! What is your name?', 'bot'); // Prints bot message
  sendBtn.addEventListener('click', (event) => { // Start listening for click on send-button
    event.preventDefault(); // This needs to be here to keep the page from refreshing and screwing everything up
    userName = input.value; // Save what was in the text input to the variable userName 
    input.value = ''; // Clear the input (see line 5)
    showMessage(userName, 'user') // Show the user name as a message sent by user   
    setTimeout(questionTwo, 1000); // Wait 1 sec then go to next step
  })
}

const questionTwo = () => {
  showMessage(`Great to meet you ${userName}. Lets make you a kitten! Should it be a boy or a girl?`, 'bot');
  sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    // Here we are going to have to check if input.value is either 'boy' or 'girl'. Later on we should try to make this a button input instead.
    kittenGender = input.value; 
    input.value = '';
    showMessage(kittenGender, 'user')    
    setTimeout(questionThree, 1000);     
  })

}


// Start code here
questionOne();

