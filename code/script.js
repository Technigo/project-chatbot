// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById("input-wrapper")
const nameInput = document.getElementById("nameInput")
const button = document.getElementById("button")
// If you need any global variables that you can use across different functions, declare them here:
let questionNumber = 1


// Declare your functions after this comment

const botSay = (words) => {
  showMessage(words, "bot")
}

const userSay = (words) => {
  showMessage(words, "user")
}



// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log(message);
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
    console.log(message);
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

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userSay(`I would say ${guess}`);
    //showMessage(`I would say ${guess}`, "user");
    //input.value = ''
    console.log("question function");
    setTimeout(() => whatSize(message), 1000)
  }
  else if (questionNumber === 2) {
    userSay(message)
    setTimeout(() => ifMonster(message), 1000)
  }
}


// Starts here
const greetUser = () => {
  questionNumber = 1
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  botSay("Hello! What species do you believe yourself to be?");
  // Just to check it out, change 'bot' to 'user' here 👆
}
let guess = "";
button.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event);
  const userGuess = document.getElementById("nameInput").value;
  console.log(userGuess);
  guess = userGuess;
  //showMessage(`I would say ${guess}`, "user");
  nextQuestion();
  nameInput.value = "";
})

const whatSize = () => {
  questionNumber++
  botSay(`Let's find out if "${guess}" is true! How smol are you?`);

  inputWrapper.innerHTML = `
<button id="btnBig">I'm a Unit</button>
<button id="btnAverage">Come closer!</button>
<button id="btnSmall">Tiny, yet brave</button>
  `
  document
    .getElementById('btnBig')
    .addEventListener('click', () => nextQuestion("The biggest"))
  document
    .getElementById('btnAverage')
    .addEventListener('click', () => nextQuestion("Let's get comfy"))
  document
    .getElementById('btnSmall')
    .addEventListener('click', () => nextQuestion("So smol"))
}


const ifMonster = (type) => {
  questionNumber++
  console.log("howdy");
  botSay(`Alright alright! ${type}, huh? Tell me, if you met a monster, what would you do?`);


  if (type === "The biggest") {
    inputWrapper.innerHTML = `
    <radio id="radio">
      <option value="" selected disabled>Monster time!</option>
      <input type="radio" name="choice" option value="fight">I fight! I win!</option>
      <input type="radio" name="choice" option value="run">I run!</option>
    </select>
    `
  } else if (type === "Let's get comfy") {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Monster time!</option>
        <option value="hug">I hug it</option>
        <option value="cookie">I give it cookkies</option>
      </select>
    `
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Monster time!</option>
        <option value="stab">I stab!</option>
        <option value="punch">I punch!</option>
      </select>
    `
  }
}

// Set up your eventlisteners here

/*
button.addEventListener('click', (event) => {
  event.preventDefault();
  nameInput.value = "";
  console.log(event);
  setTimeout(() => progressFromGuess(), 1500)
})
*/

/*
document.getElementById("btnBig").addEventListener('click', (event) => {
  event.preventDefault();
  console.log("hey");
  // setTimeout (() => progressFromSize(), 1500)
})
*/

//button.onclick = progressFromGuess;p
////let delay = 3000;
//setTimeout(progressFromGuess, 3000)
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);



// TO DO
//Write inner.HTML for botmsgs.
//How to stop the click from working after first click?
//add eventlisteners to innerhtml doesn't work.
//copy the structure with questionnumbers from the technigo code
//Limit the amount of characters you can type in the guess species option