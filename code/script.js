// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('inputWrapper')
const form =document.getElementById('feeling-form')
const feelingInput = document.getElementById('feeling-input')
const sendBtn = document.getElementById('send')


// Global variables, if you need any, declared here


// Functions declared here

let questionNumber = 1

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user1.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    //console.log('chatbot')
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot1.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here- First message from bot
const greeting = () => {
  questionNumber = 1
  botReply(`Hi! How you doing?`, 'bot')
}

//first userreply about how the user feels
const handleFeelingQuestion = (event) => {
  event.preventDefault()
  name = feelingInput
  userReply(`${feelingInput.value}`, 'user') 
 }

// first botanswer and present three buttons
const handleFeelingAnswer = (message) => {
  questionNumber++
  botReply(`OK, I understand, choose a quote`, 'bot') 

  inputWrapper.innerHTML = `
    
    <button id="realityCheckBtn">Reality check</button>
    <button id="pickMeUpBtn">Pick-me-up</button>
    <button id="lifeAdviceBtn">Life Advice</button>
  `
   
  document
    .getElementById('realityCheckBtn')
    .addEventListener('click', () => wantsRealityCheck('a reality check'))
  document
    .getElementById('pickMeUpBtn')
    .addEventListener('click', () => wantsPickUp('a pick-me-up'))
  document
    .getElementById('lifeAdviceBtn')
    .addEventListener('click', () => wantsLifeAdvice('a life advice'))
}
//If you click on reality check button you get a youtube video link - works
const wantsRealityCheck = () => {
  userReply(`Yes I´m feeling to joyful, give me a reality check`, 'user')
  botReply(`Ok, here comes a reality check for you! click on this <a href="https://www.youtube.com/watch?v=FvM0ryhD5rY&t=6s">link</a>`, 'bot')
  inputWrapper.innerHTML = ''
}
//User chooses a Pick me up and is presented three buttons -works
const wantsPickUp = () => {
  userReply(`Yes please, pick me up`, 'user')
  botReply(`Ok, what kind of pick-me-up do you want?`)

     inputWrapper.innerHTML = `
    <button id="pepTalkBtn">Peptalk</button>
    <button id="funnyJokeBtn">Funny joke</button>
    <button id="memeBtn">Meme</button>
        `

  document
    .getElementById('pepTalkBtn')
    .addEventListener('click', () => choosePepTalk('I choose a pick-me-up about peptalk'))
  document
    .getElementById('funnyJokeBtn')
    .addEventListener('click', () => chooseFunnyJoke('I choose a pick-me-up about funny joke'))
  document
    .getElementById('memeBtn')
    .addEventListener('click', () => chooseMeme('I choose a meme as a pick-me-up'))
  }
//User chooses peptalk and is presented a youtube link to TED talk -works
const choosePepTalk = () => {
  userReply(`Yey peptalk!`, 'user')
  botReply(`Here comes a link to a inspirational <a href="https://www.youtube.com/watch?v=jpRqbP9Nv9k">TEDTalk</a>`, 'bot')
  inputWrapper.innerHTML = ''
}
//User chooses Funny Joke and a short joke is presented in text - works
const chooseFunnyJoke = () => {
  userReply(`A joke sounds great!`, 'user')
  botReply(`A priest comes in to a school and says...`, 'bot')
  inputWrapper.innerHTML = ''
}
//User chooses Meme and gets a picture with a pug and meme - works
const chooseMeme = () => {
  userReply(`I like memes`, 'user')
  botReply(`<img src="assets/pugmeme.png" alt="meme" />`, 'bot')
  inputWrapper.innerHTML = ''
}
//User chooses Life Advice and gets 2 choices 
const wantsLifeAdvice = () => {
  userReply(`Oh I really need a life advice`, 'user')
  botReply(`Ok, what kind of life advice do you want?`)

     inputWrapper.innerHTML = `
    <button id="loveBtn">Love</button>
    <button id="careerBtn">Career</button>
        `

  document
    .getElementById('loveBtn')
    .addEventListener('click', () => chooseLove('I choose love, always!'))
  document
    .getElementById('careerBtn')
    .addEventListener('click', () => chooseCareer('I choose career advice'))
  }
  
//User chooses love and is presented an audiofile - music
const chooseLove = () => {
  userReply(`Love <3`, 'user')
  botReply(`Of course you will get some loving`, 'bot')
  //audio
  inputWrapper.innerHTML = ''
}
//User chooses career and is presented an audiofile - music
const chooseCareer = () => {
  userReply(`Career advice sounds great!`, 'user')
  botReply(`Career tips coming right up: 1: never 2: always.`, 'bot')
  inputWrapper.innerHTML = ''
}
//Chat ends and user gets 
/*const thankYouPage = () => {
  botReply(`Hope you had a pleasant time. See you soon`)
  
  inputWrapper.innerHTML = `
  <button id="byeBtn">Bye bye</button>
  `
  document
  .getElementById('byeBtn')
  .addEventListener('click', () => {
  document
  .getElementById('content').style.display="none"
  document
  .getElementById('thankYouPage').style.display="flex"
  })*/

// Set up your eventlisteners here
form.addEventListener ('submit', handleFeelingQuestion)
form.addEventListener ('submit', handleFeelingAnswer)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)
