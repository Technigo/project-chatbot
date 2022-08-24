

// Variables that point to selected DOM elements
const chat = document.getElementById('chat'); 
const nameInput = document.getElementById ('name-input')
const form = document.getElementById ('name-form')
const inputWrapper = document.getElementById ('input-wrapper')
const sendBtn = document.getElementById ('send-btn')

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
const questionGen = (message) => {
  questionCounter++;  /* Need this to move on*/
if (questionCounter === 0) {    /* Set to 0, put 1 when popup*/
setTimeout(question1, 100)
} else if (questionCounter === 1) {
    setTimeout(question2, 1000, nameInput.value)
} else if (questionCounter === 2) {
    setTimeout(question3, 1000, message)
  } else if (questionCounter === 3) {
    setTimeout(question4, 1000, message)
  } else if (questionCounter === 4, message, buttonText) {
  setTimeout(question5, 1000, buttonText)
} else if (questionCounter === 5) {
  setTimeout(question6, 1000, buttonText)
} else if (questionCounter === 6) {
  setTimeout(question7, 1000, )
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

  form.addEventListener("submit", (event) =>{
    event.preventDefault();
    form.submitButton.disabled = false;   //only click enter//
    const name = nameInput.value
    showMessage(name, 'user');
    questionGen();
  });
}

  
// QUESTION 2
const question2 = (message) => {
  showMessage(`Nice to meet you, ${message}! 
  I would like to make your day even better! `, 'bot');
  questionGen();
  }


  // QUESTION 3 - buttons 
 const question3 = (message) => {
showMessage('Do you need motivation or encouragement?', 'bot');

inputWrapper.innerHTML = `
<button id="motivationBtn">Motivation of course!</button>
<button id="encouragementBtn">Definately encourgement!</button>
`

document.getElementById('motivationBtn').addEventListener('click', () => questionGen('Motivation'))
document.getElementById('encouragementBtn').addEventListener('click', () => questionGen('Encouragement'))


/*document.getElementById('motivationBtn').addEventListener('click', () => {
  showMessage('I would like some motivation today', 'user')
  setTimeout(() => showMessage('Of course! Here you go ... ', 'bot'), 1000)
  handleInput()
});

  document.getElementById('encouragementBtn').addEventListener('click', () => {
  showMessage('Today is difficult - I need some pep', 'user')
  setTimeout(() => showMessage('Some days we need encouragement...', 'bot'), 1000)
  handleInput()
  })
*/ 
input.value = ''
questionGen()
}



//QUESTION 4
const question4 = (answer) => {
  showMessage(`${answer} please`, 'user')
  questionGen()


  // Return text input after button question 
inputWrapper.innerHTML = `
    <input id="text-input" type="text" />
    <button id="send-btn">Send</button>
  `
const textInput = document.getElementById('text-input');
    document.getElementById('send-btn').addEventListener('click', () => {
    showMessage(textInput.value, 'user');
    textInput.value ='';
    questionGenerator();
  }, {once: true});
}



// QUESTION 5
const question5 = () => {
showMessage(`Okidoki, will do`, 'bot')


}



 /* QUESTION 6
const question6 = () => {
function newQuote(){
  var randomNumber = Math.floor(Math.random()*quotes.length);
  document.getElementById('quotes').innerHTML = quotes[randomNumber];
}
questionGen() 
} */
 


// Beroende på knapp vill vi trigga svar till btnimp1 eller btnimp2?


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
var quotes = [ 
  "flskdldsf", "jsdkadjsja", "adjsaksd"
]

