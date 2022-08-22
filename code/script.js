

// Variables that point to selected DOM elements
const chat = document.getElementById('chat'); 
const nameInput = document.getElementById ('name-input')
const form = document.getElementById ('name-form')
const initialButton = document.getElementById('chat-button');
const loadBot = document.getElementById('chat-bar-collapse');

let buttonText = "";
let questionCounter = 0; 

// Collapsible
var coll = document.getElementsByClassName("collapse");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}


// Declare your functions after this comment
const questionGen = () => {
  questionCounter++;  /* Need this to move on*/
if (questionCounter === 0) {    /* Set to 0, put 1 when popup*/
setTimeout(question1, 100)
} else if (questionCounter === 1) {
    setTimeout(question2, 1000, nameInput.value)
  }
  }



// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("user sender");
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
    console.log("bot sender");
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

// INITAL BOT GREETING/ QUESTION1 !
const question1 = () => {
  showMessage("Hello there, what's your name?", 'bot')

  form.onsubmit = event => {
    event.preventDefault();
    form.submitButton.disabled = true;   
    const name = nameInput.value
    showMessage(name, 'user');
    questionGen();
  }
}


// QUESTION 2
const question2 = (message) => {
  showMessage(`Nice to meet you, ${message}! I would like to make your day even better! `, 'bot');
  questionGen();
  }


  /* Use this??
  inputWrapper.innerHTML = `
    <button class="button-input">Great!</button>
    <button class="button-input">Could be better</button>
    `
  addButtonListeners('button-input');
  */

//



// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
 
setTimeout(question1, 100); /* Why do we need this?? */



//collapse
var coll = document.getElementsByClassName("collapse");

