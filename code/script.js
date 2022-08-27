document.addEventListener('DOMContentLoaded', () => {

// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputwrapper = document.getElementById("input-wrapper");
const bodybuttons = document.getElementById("bodybuttons");
const nameform = document.getElementById("name-form");
const nameinput = document.getElementById("name-input");
const submit = document.getElementById('submit');
const sendbtn = document.getElementById('send-btn');

// If you need any global variables that you can use across different functions, declare them here:
let questionNumber = 0;
// Declare your functions after this comment
const botReply = (message) => {
  showMessage(message, 'bot');
}

const userReply = (message) => {
  showMessage(message, 'user');
}

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
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
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
}
//Conditionals to set order of the questions
const nextQuestion = (message) => {
  if (questionNumber === 0) {
    setTimeout (() => whatsTheIssue(message), 1000);
  } else if (questionNumber === 1) {
setTimeout (() => booking(message), 1000);
  } else if (questionNumber === 2) {
    setTimeout (() => doctorIsBooked(message), 1000);
  }
}

/*const handleNameInput = (event) => {      // Here we creat a function to avoid the submit when we click or press the button sumbit.
  event.preventDefault()                  // .preventDefault() avoits the refresh the page.
  const name = nameInput.value            // we create a new variable with the typed message in the input bar to use for the chatbot.
  userReplay(name)               // here calls the function showMessage() to see what was typed before.
  nameInput.value = ''                    
  //counter += 1
  setTimeout(() => showMessage(`Welcome ${name}. Want to talk about you Plan, or do you have some problem?`, 'bot'), 750)
  setTimeout(() => nextMessage(showOptions()),750)
  console.log('counter', counter)
};*/



// First question from the bot
const greeting = () => {
  questionNumber = 1;
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  //showMessage("Hello there, what's your name?", 'bot');
  botReply("Hello there, what's your name?");
  //showMessage("hej", "user");
  // Just to check it out, change 'bot' to 'user' here 👆
}

//Answer from the user
const submitButton = document.querySelector(".send-btn")
const inputField = document.querySelector("#name-input")
//submitButton.addEventListener('click', function(event)
const handleNameInput = (event) => {
 event.preventDefault();
  const name = nameInput.value
 userReply(`My name is ${name}`);
}


//Second question from the bot, where there will be one written question and then three buttons.
const whatsTheIssue = (name) => {
  questionNumber++;
submitButton.addEventListener('click', function(event) {
  event.preventDefault();
botReply(`Nice to meet you ${name}, what do you have problems with?`);
inputwrapper.innerHTML =+ `
        <button id="headache" type="submit" class="bodybuttons"> Headache </button>
        <button id="anxiety" type="submit" class="bodybuttons"> Anxiety </button>
        <button id="broken-arm" type="submit" class="bodybuttons"> Broken arm </button>
        `
        document.getElementById('headache').addEventListener('click', () => {
          showMessage('headache', 'user')
          inputWrapper.innerHTML =+ ''
          setTimeout(() => askForHelp('headache'), 1000)
         })
       
         document.getElementById('anxiety').addEventListener('click', () => {
          showMessage('anxiety', 'user')
          inputWrapper.innerHTML =+ ''
          setTimeout(() => askForHelp('anxiety'), 1000)
         })
      
         document.getElementById('broken-arm').addEventListener('click', () => {
          showMessage('broken-arm', 'user')
          inputWrapper.innerHTML =+ ''
          setTimeout(() => askForHelp('hungry'), 1000)
         })

  //Answer from bot with two buttons
const booking = () => {
  questionNumber++;
  botReply("Thats unfortunate! Should I book you a doctor?");
  inputwrapper.innerHTML =+ `
  <button id='yes'>Yes</button>
      <button id='no'>No</button>
  `;

  document.getElementById('yes') .addEventListener('click', () => {
    generateRequest('');
    showMessage('Yes', 'user');
  });
  document.getElementById('no') .addEventListener('click', () => {
    generateRequest('');
    showMessage('No', 'user');
  });
}
//Booking confirmation from the bot
const doctorIsBooked = () => {
  questionNumber++;
  botReply("We have now booked you a doctor, please check your email for booking confirmation")
}

})
 
}
// Set up your eventlisteners here

chat.addEventListener('submit', ()=> {

});
chat.onsubmit = ()=> {
  
}

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
})