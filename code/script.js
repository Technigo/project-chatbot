// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
let name = document.getElementById('input-value');

let userName = ""

//Question 1 -warm or cold 
const askForWarmOrCold = () => {
  showMessage (`My name is Vacation Bot I am here to help you chose your next holiday detsination. What do you prefer?`, "bot")
  inputWrapper.innerHTML= `
  <button id="warmButton">Warm</button>
  <button id="coldButton">Cold</button>
  `

document
  .getElementById("warmButton")
  .addEventListener("click", () => {
  showMessage("I prefer to be hot as the sun", "user")
  setTimeout(()=> natureOrCity("warm"), 1000)
  })

document
  .getElementById("coldButton")
  .addEventListener("click", () =>{
  showMessage("I prefer to be cold as an icebear", "user")
  setTimeout(()=> natureOrCity ("cold"), 1000)
  })
}


const askForCathegory = cathegoryChoice => {
  showMessage(`Oh so `)
}



// Global variables, if you need any, declared here

// Functions declared here

/*this is suppose to make the button and enter with same result 
name.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('button').click ();
  }
}); */


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
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
form.addEventListener('submit', (event) => {
  event.preventDefault();

  /* Matilda */ 
form.addEventListener('Click', () => {     
  showMessage('Good!', 'user')   
});

const value = document.getElementById('input-value').value; 
chat.innerHTML += `
  <section class="user-msg">
    <div class="bubble user-bubble">${value}</div>
     <img src="assets/user.png" alt="User" />
  </section>
  `;
});


/*
const handleNameInput = (event) => {
  event.preventDefault()
  const userName = nameInput.value
  name.value = ""
  showMessage(userName, "user")
  setTimeout (() => showMessage(`Nice to meet you ${value}!`, "bot"), 1000)
} */

/*const firstResponse = () => {
  showMessage (`My name is Vacation Bot`, 'bot')
  inputWrapper.innerHTML=``
  <button></Button> 
}*/

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
