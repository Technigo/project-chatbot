

// Variables that point to selected DOM elements
const chat = document.getElementById('chat'); 
const nameInput = document.getElementById ('name-input')
const form = document.getElementById ('name-form')
const inputWrapper = document.getElementById ('input-wrapper')
const sendBtn = document.getElementById ('send-btn')

const botReply = (msg) => {
  showMessage(msg, 'bot')
}
const userReply = (msg) => {
  showMessage(msg, 'user')
}

let buttonText = "";
let answers = {
  name: "",
  day: "",
};


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
let questionCounter = 0; 
const questionGen = (message) => {
  questionCounter++;  /* Need this to move on*/

if (questionCounter === 0) {    /* Set to 0, put 1 when popup*/
    botGreeting();

} else if (questionCounter === 1) {
  friendlyBot(nameInput.value);

} else if (questionCounter === 2) {
    seekingAdvice();

} else if (questionCounter === 3) {
    soonMotivated();

  } else if (questionCounter === 4) {
  firstQuote();

} else if (questionCounter === 5) {
  rYouHappy();

} else if (questionCounter === 6) {
  response();
}
}
const showBotMessage = (message) => {
  setTimeout(() => {
    showMessage(message, "bot");
  }, 300);
};


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
const botGreeting = () => {
  botReply ("Hello there, what's your name?",)

  form.addEventListener("submit", (event) =>{
    event.preventDefault();
    form.submitButton.disabled = false;   //only click enter//
    const name = nameInput.value
    userReply(name);
    questionGen();
  });
}

  
// QUESTION 2
const friendlyBot = (message) => {
  botReply(`Nice to meet you, ${message}! 
  I would like to make your day even better! Is that ok ?`);
  }


// Here User need to enter something, like OK etc

// QUESTION 3 - buttons 
 const seekingAdvice = () => {
botReply('Do you need motivation or encouragement?');
inputWrapper.innerHTML = `
<button id="motivationBtn">Motivation of course!</button>
<button id="encouragementBtn">Definately encourgement!</button>
`

document
.getElementById('motivationBtn')
.addEventListener('click', () => soonMotivated('Motivation'))
document
.getElementById('encouragementBtn')
.addEventListener('click', () => soonMotivated('Encouragement'))



/*
document.getElementById('motivationBtn').addEventListener('click', () => {
  userReply('I would like some motivation today', 'user')
  setTimeout(() => botReply('Of course! Here you go ... '), 1000)
});

  document.getElementById('encouragementBtn').addEventListener('click', () => {
  userReply('Today is difficult - I need some pep', 'user')
  setTimeout(() => botReply('Some days we need encouragement...'), 1000)

  })
*/


}

//QUESTION 4
const soonMotivated= (answer) => {
  userReply(`${answer} please`);
  firstQuote();
}


//Question 5   MÅSTE DUBBEKLICKA 4 FÖR ATT KUNNA KOMMA TILL 5 WHY?
const firstQuote = (firstQuote) => { 
  botReply(`Glaset är halvfullt`);
  rYouHappy();
}

 const rYouHappy = (youbetterbe) => {
  userReply("......?")
  setTimeout(() => botReply (`Do you feel better now?`), 2000);

  inputWrapper.innerHTML = `
<button id="happyBtn" id="yes">Yes - Give me more! </button>
<button id="sadBtn" id="no">No - let's stop!</button>
`

document
.getElementById('happyBtn')
.addEventListener('click', () => response('yes'))
document
.getElementById('sadBtn')
.addEventListener('click', () => response('no'))

 }
 
 // If sats här? 
const response = (response) => {
  userReply('it can not get worse?')
  setTimeout(() => botReply('HAHA jo då'), 1000)
}


  
  /* // Q4
  userReply(`${answer} please`)
  questionGen()*/


/*
// QUESTION 5
const question6 = () => {
botReply(`Fråga 6`, 'bot')
questionGen();
}*/



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
 
setTimeout(botGreeting, 100); /* Why do we need this?? */


