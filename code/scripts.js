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
        inputWrapper.innerHTML = ""
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
        <img src="assets/bot.png" alt="bot" />
        <div class="bubble bot-bubble img-bubble" >
          <img src="./assets/cute-puppy.jpg" class="joke-img" alt="Cute Puppy" />
        </div>
      </section>
        `
    } else if (message === 'Pep talk') {
        botAnswer('Hey you! Good news: No one knows what they doing. Better news: You get to make mistakes. Best news: You will succeed in the end!!')
    } else if (message === 'Joke!') {
      chat.innerHTML += `
        <section class="bot-msg">
        <img src="assets/bot.png" alt="bot" />
        <div class="bubble bot-bubble img-bubble">
          <img class="joke-img" src="./assets/joke-img.jpg" alt="Joke image" />
        </div>
      </section>
        `
    } else if (message === 'GIF') {
      chat.innerHTML += `
        <section class="bot-msg">
        <img src="assets/bot.png" alt="bot" />
        <div class="bubble bot-bubble img-bubble">
        <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/3o7ZexFSShwaxOSY12" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/afv-funny-fail-lol-3o7ZexFSShwaxOSY12">via GIPHY</a></p>
        </div>
      </section>
        `
    }

    setTimeout(() => goodBye(), 5000)
    const goodBye = () => {
    botAnswer(`Thank you for your visit! I hope this made you feel better, you're welcome back anytime!`)
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
  