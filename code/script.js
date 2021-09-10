const chat = document.getElementById('chat')
const input = document.getElementById('user-input')
const form = document.getElementById('name-form')
const factButtons = document.getElementById('fact-btn')
const yesNoButtons = document.getElementById('yes-no-btn')
const timeOutTime = 1500
//this makes the setTimeout a constant so we don't have to change the time for each bot response
//instead we can just change up here and all of them will be changed.


// Global variables, if you need any, declared here
let questionNumber = 0;


// Functions declared here



//This fuction sets the order of the questions with a conditonal.
// Basically sets a order of the questions so the bot
//does not repeat the last questin over and over again. It makes it move on to the next
//like "if we were on the greeting and the user puts in a input move on to next question"
//and then the nextQuestion is defind further down in the code.

//We wrapped this if/else with at setTimeout - not entierly sure how, 
//we got som help but it worked. We've yet have to figure out how to get the timeout on the answers

const nextQuestion = (answer) => {
  usrInput(answer)
  setTimeout(() =>{
    if (questionNumber === 1) {
      question1(answer)
      input.value = ''
    } 
    else if (questionNumber === 2) {
      question2(answer)
      input.value = ''
    } 
    else if (questionNumber === 3) {
      question3(answer)
      input.value =''
    } 
  
  }, timeOutTime)
    
  }

// This function will add a chat bubble in the correct place based on who the sender is

//We got help with getting a link in the bot reply by adding the video and used the ternarys -
//which is a quicker way of conditionals, insted of if/else it's ?/:

const showMessage = (message, sender, video) => {
  const link = video ? `<a href=${video}>video</a>` : undefined
  if (sender === 'user') {
   
    console.log("hello from the user")
   
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    
    console.log("hello from the bot")
    
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message} ${link ? link : ''}</p>
        </div>
      </section>
    `
  }
  
// This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
 
chat.scrollTop = chat.scrollHeight
}

// Chat starts here
//Here you can see the questionNumbers and there order set with a number 1-3

const greeting = () => {
  questionNumber = 1;
  showMessage(`Hello, whats your name?`, 'bot');
}

const usrInput = (answer) => {
  showMessage(answer, 'user')
}

const question1 = (question) => {
  const input = document.getElementById('user-input').value
  questionNumber++
  showMessage(`Okay, ${input}, what do you want?`, 'bot')
}
  
const question2 = (question) => {
  questionNumber++
  showMessage('Hm, no lets do this instead', 'bot')
  form.style.display='none'
  factButtons.style.display='flex'
}

//put in setTimeout for the buttons
const dance = () => {
  setTimeout(function() {
    showMessage(`Dance`, 'user')}, 1000)
    setTimeout(function() {
    showMessage(`Perfect, do the macarena!`, 'bot')}, 2000)
  form.style.display='flex'
  factButtons.style.display='none'
}

const eat = () => {
  showMessage(`Eat`, 'user')
  showMessage(`Cake?`, 'bot')
  form.style.display='flex'
  factButtons.style.display='none'
}

const nothing = () => {
  showMessage(`Nothing?`, 'user')
  showMessage(`...`, 'bot')
  form.style.display='flex'
  factButtons.style.display='none'
}
    
const question3 = (question) => {
  questionNumber++
  showMessage(`I'm hungry can you wait 30min?`, 'bot')
  form.style.display='none'
  yesNoButtons.style.display='flex'
}

const yes = () => {
  showMessage(`Okay..`, 'user')
  showMessage(`Great, brb!`, 'bot')
  showMessage(`Watch this while you wait`, 'bot', 'https://www.youtube.com/watch?v=pnr3_h06kz8')
  yesNoButtons.style.display='none'
}

//do a conditional here, if NO, pops up an answer from bot that says "Dude.. rude! choose again"
//and then you can only choose YES
const no = () => {
  showMessage(`No..`, 'user')
  showMessage(`Dude.. rude! Brb.`, 'bot')
  showMessage(`Watch this while you wait`, 'bot', 'https://www.youtube.com/watch?v=pnr3_h06kz8')
  yesNoButtons.style.display='none'
}

// Eventlisteners 
  
form.addEventListener('submit', (event) => {
  event.preventDefault()
  nextQuestion(input.value)
})

document.getElementById('dance').addEventListener('click', dance)
document.getElementById('eat').addEventListener('click', eat)
document.getElementById('nothing').addEventListener('click', nothing)
document.getElementById('yes').addEventListener('click', yes)
document.getElementById('no').addEventListener('click', no)




setTimeout(greeting, timeOutTime)
//Here is also the constant we set at the top of the page

// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
//setTimeout(response, 2000)
