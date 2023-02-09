// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('form')
const formWrapper= document.getElementById('form-wrapper')
const btn = document.getElementById('submit')


// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment kolla dem och förstå dem
let questionNumber = 0
let userName = ""

const botReply = (msg) => {

  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}
// This function will add a chat bubble in the correct place based on who the sender is
// the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message

const showMessage = (msg, sender) => {
  
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${msg}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    //detta ändrar htlmt inom chatten
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${msg}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}


//This function will lead to the next question
const nxtQuestion = (answer) => {
  usrInput(answer)
    if (questionNumber === 1) {
      factHis(answer)
      input.value = ""
    } 
    else if (questionNumber === 2) {
      or(answer)
      input.value =""
    } 
    else if (questionNumber === 3) {
    funHist(answer)
      input.value =""
    } 
    else if (questionNumber === 4) {
      nextQuestion(answer)
        input.value =""
      }
  }







// This means the greeting function will be called one second after the website is loaded.


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// Starts here


const greetUser = () => {


 
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
  
  // Just to check it out, change 'bot' to 'user' here 👆
}
// när jag klickar på submit vill jag att chatten ska köra igång med att svara namn

// Set up your eventlisteners here
form.addEventListener('submit', (event)=> {
  event.preventDefault() //Hindrar från att formen autosparar
const firstName =document.getElementById('firstName').value;
console.log(firstName)
showMessage(firstName, 'user'); 
} )
setTimeout(greetUser, 1000);

const usrInput = (answer) => {
  showMessage(answer, 'user');
}


const factHis = () => {
  questionNumber = 1

  let userName = document.getElementById(form-Wrapper).value;
  setTimeout(() => showMessage(
    `Welcome to the world of pinapples ${userName}. 
    what do you need today? Fun Fact or History?`, 'bot'), 1000)
  
    
};


// vi får input från user leder till detta

//input från user leder till val mellan

const or = () => {
  questionNumber =

  inputWrapper.innerHTML = `
    <button id="funBtn">Fun fact</button>
    <button id="historyBtn">History of Pineapples</button>
  `
  document
    .getElementById('FunBtn')
    .addEventListener('click', () => nextQuestion('FunFact'))
  document
    .getElementById('historyBtn')
    .addEventListener('click', () => nextQuestion('History'))
}



const funHist = (type) =>{
  botAnswer(
   `Yey here comes some ${type}?for you!!!!`
   )
 
   if (type === "FunFact") {
     botAnswer("Did you know that bla bla bla bla bla bla")
     
     
   } 
   else if (type === 'History') {
     botAnswer("Here is some history for ya t bla bla bla bla bla bla")
  
   }
 }


 const question = (more) => {
  questionNumber++

  botAnswer(`Do you want a new ${more} or do you wnat to order 
  your own pieapple 
  or mabey learn a little bit of history?
  ! `)

  inputWrapper.innerHTML = `
    <button id="fun">Fun Fact again</button>
    <button id="histo">History Again</button>
    <button id="order">Yey an pineapple</button>
  `

  document
    .getElementById('fun')
    .addEventListener('click', () => nextQuestion('fun'))
  document
    .getElementById('histo')
    .addEventListener('click', () => nextQuestion('histo'))
    document
    .getElementById('order')
    .addEventListener('click', () => nextQuestion('order'))
 }
