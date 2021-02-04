// DOM SELECTORS
const chat = document.getElementById('chat')
const userInput = document.getElementById('user-input')
const inputWrapper = document.getElementById('input-wrapper')
const submitBtn = document.getElementById('submit')
const chatForm = document.getElementById('chat-form')
/*document.getElementById('user-input').value = ""*/

//GLOBAL VARIABLES
let questionNumber = 1

//FUNCTIONS DECLARED HERE
const botAnswer = (message) => {
    showMessage (message, `bot`)
}
const userAnswer = (message) => {
    showMessage (message, `user`)
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
    if (sender === 'user') {
      console.log('test')
  
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

// Function to push to next question
const nextQuestion = (message) => {
    if (questionNumber === 1) {
        userAnswer(message)
        userInput.value = ""
        setTimeout(() => currentMood(message), 1000)
    } else if (questionNumber === 2) {
        userAnswer(message)
        userInput.value = ""
        setTimeout(() => moodChangerChoice(message), 1000)
    } else if (questionNumber === 3) {
        userAnswer(message)
        inputWrapper.value = ""
        setTimeout(() => showmoodSwitcher(message), 1000)
    }
}



// Starts here
const greeting = () => {
    questionNumber = 1
    botAnswer(`Hey there, what's your name? &hearts;`)
}
  
const currentMood = (message) => {
    questionNumber++
    botAnswer(`Hey ${message}, how are you today on a scale of 1-10?`)
}

const moodChangerChoice = (message) => {
    questionNumber++
    if (Number(message) >= 1, Number(message) <= 4) {
        botAnswer(`Oh, I'm sorry to hear that! Would you like to see a picture of a cute puppy or maybe you need a pep talk?`)
        inputWrapper.innerHTML = `
        <button id="cutePuppyBtn">Cute puppy</button>
        <button id="pepTalkBtn">Pep talk</button>
        `
        document.getElementById('cutePuppyBtn')
        .addEventListener('click', () => nextQuestion('Cute puppy'))
        document.getElementById('pepTalkBtn')
        .addEventListener('click', () => nextQuestion('Pep talk'))
        
      } else if (Number(message) >= 5, Number(message) <= 7) {
        botAnswer (`Maybe I can cheer you up a bit more with a joke or a funny gif?`)
        inputWrapper.innerHTML = `
        <button id="jokeBtn">Joke!</button>
        <button id="gifBtn">GIF</button>
        `
        document.getElementById('jokeBtn')
        .addEventListener('click', () => nextQuestion('Joke!'))
        document.getElementById('gifBtn')
        .addEventListener('click', () => nextQuestion('GIF'))
      } else if (Number(message) >= 8, Number(message) <= 10) {
        botAnswer (`Glad you feel so good! You're welcome back whenever you need me!`) 
      } else {
        botAnswer (`Please answer on a scale from 1-10 with numbers :-)`)
      }   
}

const showmoodSwitcher = (message) => {
    questionNumber++
    if (message === 'Cute puppy') {
        chat.innerHTML += `
        <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <img src="./assets/cutePuppy.jpg" class="cutePuppyImg" />
        </div>
      </section>
        `
    } else if (message === 'Pep talk') {
        botAnswer('Hey you! Good news: No one knows what they doing. Better news: You get to make mistakes. Best news: You will succeed in the end!!')
    }
    
    
    chat.scrollTop = chat.scrollHeight
}


// Set up your eventlisteners here

chatForm.addEventListener('submit', (event) => {
event.preventDefault();
})

// Gör så att klicket skickar meddelandet
submitBtn.addEventListener('click', () => nextQuestion(userInput.value))
/*userInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && userInput.value) nextQuestion(userInput.value)
})*/

setTimeout(greeting, 1000)
  