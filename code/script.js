

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
    setTimeout(seekingAdvice, 1000);

} else if (questionCounter === 3) {
    soonMotivated();

  } else if (questionCounter === 4) {
  firstQuote();

} else if (questionCounter === 5) {
setTimeout(rYouHappy, 2000);

} else if (questionCounter === 6) {
  response();

} else if (questionCounter === 6) {
  moreQuotes();

} else if (questionCounter === 6) {
  thirdQuote();

} else if (questionCounter === 6) {
  secondResponse();

} else if (questionCounter === 6) {
  lastQuote();

} else if (questionCounter === 6) {
  lastResponse();  

} else {userReply(message)
setTimeout(thankYou, 1000)}

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
  setTimeout(() => botReply(`Nice to meet you, ${message}! 
  I would like to make your day even better! Is that ok ?`), 1000);
  }


// Here User need to enter something, like OK etc

// QUESTION 3 - buttons 
 const seekingAdvice = () => {
botReply('Do you need motivation or encouragement?')
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
 }



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



//QUESTION 4
const soonMotivated= (answer) => {
  setTimeout(() => userReply(`${answer} please`), 1000);
    firstQuote();
}


//Question 5   MÅSTE DUBBEKLICKA 4 FÖR ATT KUNNA KOMMA TILL 5 WHY?
const firstQuote = (firstQuote) => { 
  setTimeout(() => botReply(`So far you have survived 100% of your worst days!`), 1000);
  rYouHappy();
}

 const rYouHappy = (youbetterbe) => {
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
  ;}
 
 
const response = (response) => {

  if (response === 'yes'){
    setTimeout(() => userReply ('Yes, but I need more!'), 1000);
    setTimeout(() => botReply('OK, another one coming up...'), 2000);
    moreQuotes();
  }  else { setTimeout(() => userReply  ('No, that is it for today.'), 1000);
  setTimeout(() => botReply ('Oh, I am sorry I could not cheer you up today. See you another time'), 1000);
  inputWrapper.innerHTML = ``
}
  }

const moreQuotes = () => {
    setTimeout(() => botReply('Carpe diem'), 4000)
    setTimeout(() => botReply('😉'), 4600)
    setTimeout((thirdQuote), 5000);
  }

const thirdQuote = (thirdQuote) => {
    setTimeout(() => botReply (`Do you need more?`), 1000);
    
    inputWrapper.innerHTML = `
    <button id="nextQuote" id="yes">Yes! </button>
    <button id="sadBtn" id="no">No - I'm good for now!</button>
    `
    document
  .getElementById('nextQuote')
  .addEventListener('click', () => secondResponse('yes2'))
  document
  .getElementById('sadBtn')
  .addEventListener('click', () => secondResponse('no'))
  ;}
 
  const secondResponse = (secondResponse) => {

    if (secondResponse === 'yes2'){
      setTimeout(() => userReply ('Yes I need more!'), 1000);
      setTimeout(() => botReply('The way to get started is to quit talking and begin doing'), 2000);
      lastQuote();
    }  else { setTimeout(() => userReply  ('No, that is it for today.'), 1000);
    setTimeout(() => botReply ('Okidoki! See you another time'), 1000);
    inputWrapper.innerHTML = ``
  }
    }




    const lastQuote = (lastquote) => {
      setTimeout(() => botReply (`Good things come in three, last one`), 4000);
      
      inputWrapper.innerHTML = `
      <button id="lastQuote" id="yes">Give me</button>
      `
      document
      .getElementById('lastQuote')
      .addEventListener('click', () => lastResponse('Give me!')); 
    }

    const lastResponse = () => {
      setTimeout(() => botReply ('Whoever is happy will make others happy too'), 1000);
      setTimeout(() => botReply ("And don't forget - CARPE DIEM"), 2000); 

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
 
setTimeout(botGreeting, 1000); /* Why do we need this?? */


