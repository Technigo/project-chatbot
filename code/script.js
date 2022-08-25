// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameInput = document.getElementById('nameInput');
const inputWrapper = document.getElementById('inputWrapper');


// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment
let question = 1;


// This function will lead to the next question
const nextQuestion = (answer) => {
  userInput(answer)
  if (question === 1) {
    handleNameInput(answer)
    input.value = ""
  } 
  else if (question === 2) {
    askBookType(answer)
  } 
  else if (question === 3) {
    askForTimeline(answer)
  } 
  else {
    thankYou(thankYou,1000)
  }
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    //This is the console log we added. We comment it out to remove it from the actual bot
    //console.log("goodluck");
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
//this is to invoke the function. We comment it out to remove it from the actual bot
//showMessage("message", "user");

// Starts here
// First message
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hi, Welcome to Lovelits! What's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}
// This means the greeting function will be called one second after the website is loaded.
//setTimeout(greeting, 1000)


//Answer from the user and also question 1 in the if statement because by default.
const userInput = (answer) => {
  showMessage(answer, 'user')
}
//Question 1
const handleNameInput = () => {
  event.preventDefault()
  let userName = nameInput.value
  showMessage(userName, "user")
  nameInput.value = ''
  setTimeout (() => showMessage(`Nice to meet you, ${userName}! What are you looking for in a book?`, 'bot'), 1000)
  question = 2

  inputWrapper.innerHTML = `
  <button id="funnyBook">Funny</button>
  <button id="romanticBook">Romantic</button>
  <button id="mysteryBook">Mystery</button>`

  document.getElementById("funnyBook").addEventListener("click", () => nextQuestion('Funny'))
  document.getElementById('romanticBook').addEventListener('click', () => nextQuestion('Romantic'))
  document.getElementById('mysteryBook').addEventListener('click', () => nextQuestion('Mystery'))
}

//Question 2. Function to connect it to askBookType
const askBookType = (type) => {
  event.preventDefault()
  setTimeout (() => showMessage(`Awesome! And which timeline do you find interesting?`, 'bot'), 1000)
  question = 3

  if (type === "Funny"){
    inputWrapper.innerHTML =`
      <select id="select">
        <option value = "" selected disabled>select timeline</option>
    <option value ="Vintage Comedy">Vintage Comedy</option>
    <option value ="Early Millenium Comedy">Early Millenium Comedy</option>
    <option value ="New Comedy">New Comedy</option>
    </select>
    `
  }
  else if (type === "Romantic"){
    inputWrapper.innerHTML =`
    <select id="select">
        <option value = "" selected disabled>select timeline</option>
    <option value ="Renaissance Love">Renaissance Love</option>
    <option value ="Contemporary Romance">Contemporary Romance</option>
    <option value ="Future Affair">Future Affair</option>
    </select>
    `
  }
    else {
      inputWrapper.innerHTML =`
      <select id="select">
          <option value = "" selected disabled>select timeline</option>
      <option value ="Post-War Crime">Post-War Crime</option>
      <option value ="Classic Mystery">Classic Mystery</option>
      <option value ="Thrilling & Futuristic">Thrilling & Futuristic</option>
      </select>
      `
    }
    const select = document.getElementById("select");
    select.addEventListener('change',() => nextQuestion(select.value))
  }


//Question 3. New function & connect to askForTimeline
const askForTimeline = () => {
  event.preventDefault()
  setTimeout (() => showMessage(`Alright! That will be 150:- including shipping. Are you ready to meet your date?`, 'bot'), 1000)
  question = 4
  
  inputWrapper.innerHTML = `
  <button id="yes">Yes</button>
  <button id="no">No</button>`

  document.getElementById("yes").addEventListener("click", () => nextQuestion("Yes"))
  document.getElementById("no").addEventListener("click", () => {
    location.reload(console.log("event triggered"))
    return false
  })
}

//Last message. Thank you which is part of else.
const thankYou = () => {
  setTimeout (() => showMessage(`Thank you for trying Lovelits! Don't forget to tell us how it goes and GOOD LUCK with the blind date.`, 'bot'), 1000)
  
  inputWrapper.innerHTML=''
}

// Set up your eventlisteners here
/*document.getElementById('submit').addEventListener('click', () => {
});*/
nameForm.addEventListener('submit', handleNameInput);
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
