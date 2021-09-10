const chat = document.getElementById('chat')
const input = document.getElementById('user-input')
const form = document.getElementById('name-form')
const factButtons = document.getElementById('fact-btn')
const yesNoButtons = document.getElementById('yes-no-btn')
const yesButton = document.getElementById('yes')
const noButton = document.getElementById('no')
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

const showMessage = (message, sender) => {
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
          <p>${message}</p>
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
  showMessage(`Okay, ${input}, what do you want!?`, 'bot')
}
  
const question2 = (question) => {
  questionNumber++
  showMessage(`I don't care, you get these three options to choose from.`, 'bot')
  form.style.display='none'
  factButtons.style.display='flex'
}

const mother = () => {
    setTimeout (() => showMessage(`Mother in law`, 'user'), 1000)
    setTimeout (() => showMessage(`🔪+💣+💊=🪦 Anything else?`, 'bot'), 2000)
  form.style.display='flex'
  factButtons.style.display='none'
}

const trauma = () => {
  setTimeout(() => showMessage(`Past trauma?`, 'user'), 1000)
  setTimeout(() => showMessage(`Have some cake! Anything else?`, 'bot'), 2000)
  form.style.display='flex'
  factButtons.style.display='none'
}

const friends = () => {
  setTimeout(() => showMessage(`Making friends`, 'user'), 1000)
  setTimeout (() => showMessage(`<a href="https://www.youtube.com/watch?v=WCSQwPv6Z-k">Watch me.</a><br>Anything else?`, 'bot'), 2000)
  form.style.display='flex'
  factButtons.style.display='none'
}
    
const question3 = (question) => {
  questionNumber++
  showMessage(`I'm hungry can you wait 30min?`, 'bot')
  form.style.display='none'
  yesNoButtons.style.display='flex'
}

const yesNoAnswer = (type) => {
  
  if (type === 'yes') {
   setTimeout (() => showMessage(`Yes.`, 'user'), 500)
   setTimeout (() => showMessage(`Great, brb!`, 'bot'), 2000)
   setTimeout (() => showMessage(`Watch <a href="https://www.youtube.com/watch?v=pnr3_h06kz8">this</a> while you wait.`, 'bot'), 3000)
   setTimeout (() => yesNoButtons.style.display='none', 3000)
   }
 else {
   setTimeout (() => showMessage(`No..`, 'user'), 500)
   setTimeout (() => showMessage(`Dude.. rude! Try again.`, 'bot'), 2000)
   setTimeout (() => yesButton.style.display='flex', 2000)
   setTimeout (() => noButton.style.display='none', 2000)
   }
   
 }

// Eventlisteners 
  
form.addEventListener('submit', (event) => {
  event.preventDefault()
  nextQuestion(input.value)
})

document.getElementById('mother').addEventListener('click', mother)
document.getElementById('trauma').addEventListener('click', trauma)
document.getElementById('friends').addEventListener('click', friends)
document.getElementById('yes').addEventListener('click', () => yesNoAnswer ('yes'))
document.getElementById('no').addEventListener('click', () => yesNoAnswer ('no'))

setTimeout(greeting, timeOutTime)
