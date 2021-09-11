// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const input = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')
const startButton = document.getElementById ('start-btn')

// Global variables, if you need any, declared here

let currentQuestion = 1
let userMoodSaved = ""

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="./friend.png" />
        </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src= ./chatbot.png />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

//Question / answer flow

const handleInput = (event) => {     
  event.preventDefault()
  console.log(currentQuestion)
  if(currentQuestion === 1){
    handleNameQuestion()
  } else if(currentQuestion === 2){
    moodOption()
  } else if(currentQuestion === 3){
    userMood()
  } else if(currentQuestion === 4){
    gif()
  } else if(currentQuestion === 5){
    moodGif()
  } else if (currentQuestion === 6){
    byeRestart
  }
}


// Questions / answers starts here
const greeting = () => {
  showMessage(`Hello there! What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const handleNameQuestion = () => {  
  currentQuestion = 1
  const name = input.value
    console.log(name)
    showMessage(name, 'user')
    input.value = ''
    showMessage (`Hello, ${name}! Lets talk.`, 'bot')
    setTimeout(moodOption, 1000)
    }

const moodOption =() => {
  currentQuestion = 2
  showMessage (`How are you feeling today?`, 'bot')
  setTimeout(userMood, 1000)

  
form.innerHTML = `
        <button class="options" id="happyBtn">Happy</button>
        <button class="options" id="anxiousBtn">Anxious</button>
        <button class="options" id="sadBtn">Sad</button>
  `

  document.getElementById('happyBtn')
  .addEventListener('click', () => userMood ('happy'))

  document.getElementById('anxiousBtn')
  .addEventListener('click', () => userMood ('anxious'))

  document.getElementById('sadBtn')
  .addEventListener('click', () => userMood ('sad'))
}

const userMood = (option) => {
  currentQuestion = 3


    if (option === 'happy') {
      showMessage(`I'm feeling happy!`, 'user')
      showMessage(`Yaay!! Happy days are the best!`, 'bot')
      userMoodSaved=option;
    } else if (option === 'anxious') {
      showMessage(`I'm feeling anxious`, 'user')
      showMessage(`Sorry to hear that you are feeling anxious`, 'bot')
       userMoodSaved=option;
    } else if(option === 'sad') {
      showMessage(`I'm feeling sad`, 'user')
      showMessage(`Sorry to hear that you are feeling sad.`, 'bot')
       userMoodSaved=option;
    }
    currentQuestion = 4;
    handleInput()
}

  const gif = (buttonOption) => {

   if ( userMoodSaved === 'happy') {
  showMessage(`Would you like to see a funny gif?`, 'bot')
      form.innerHTML = /*html*/
      `<button class="options" id="yesHappyBtn">Yes</button>
        <button class="options" id="noBtn">No</button>`
        document.getElementById('yesHappyBtn')
        .addEventListener('click',() => moodGif('happy'))
} else if ( userMoodSaved === 'anxious') {
    showMessage(`Would you like to see a calming gif?`, 'bot')
     form.innerHTML = /*html*/
     `<button class="options"id="yesAnxiousBtn">Yes</button>
        <button class="options"id="noBtn">No</button>`
        document.getElementById('yesAnxiousBtn')
        .addEventListener('click', () => moodGif('anxious'))
} else if( userMoodSaved === 'sad') {
    showMessage(`Would you like to see a gif? Hopefully it will make your day a little bit better.`, 'bot')
  form.innerHTML = /*html*/
     `<button class="options"id="yesSadBtn">Yes</button>
        <button class="options"id="noBtn">No</button>`
        document.getElementById('yesSadBtn')
        .addEventListener('click', () => moodGif('sad'))
}
     
        document.getElementById('noBtn')
        .addEventListener('click', () => moodGif('no'))
}


const moodGif = (option) => {
  currentQuestion = 5

  if (option === 'happy'){
  showMessage(``, 'bot')
  chat.innerHTML = `<iframe class="gifs" src="https://giphy.com/embed/dudcZA9e14HIY" width="455" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dog-excited-joy-dudcZA9e14HIY">via GIPHY</a></p>`
} else if (option === 'anxious'){
  showMessage(``, 'bot')
  chat.innerHTML = `<iframe class="gifs" src="https://giphy.com/embed/KsPGcR5sofbAR9Tbl2" width="384" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/we-are-hers-breathe-breathing-exercise-KsPGcR5sofbAR9Tbl2">via GIPHY</a></p>`
} else if (option === 'sad'){
  showMessage(``, 'bot')
  chat.innerHTML = `<iframe class="gifs" src="https://giphy.com/embed/l0MYCDXGiwtgif24o" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/studiosoriginals-domitille-collardey-it-gets-better-l0MYCDXGiwtgif24o">via GIPHY</a></p>`
} else if (option === 'no'){
  showMessage(`That's ok! Hope you have a nice day!`, 'bot')
}
  setTimeout(byeRestart, 500)
}

const byeRestart = () => {
  currentQuestion = 6
  setTimeout(() => {
  form.innerHTML = `
  <button type="submit" value="Reload Page" onClick="document.location.reload(true)" class="start-button">Bye 👋 </button>`
}, 500);
}



// Set up your eventlisteners here

startButton.addEventListener('click', () => setTimeout (greeting, 500))
form.addEventListener('submit', handleInput)


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.


// setTimeout(greeting, 1000)