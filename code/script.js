// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const form =document.getElementById('feeling-form')
const feelingInput = document.getElementById('feeling-input')
const sendBtn = document.getElementById('send')


// Global variables, if you need any, declared here

let feelings

//Here is the variables for changing the greetingmessage depending on the time of day
const today = new Date()
const currentHour = today.getHours()

// Functions declared here, instead of writing showMessage for every conversation we use botReply and userReply

const botReply = (msg) => {
  showMessage(msg, 'bot')
  }

const userReply = (msg) => {
  showMessage(msg, 'user')
  }

// This function will add a chat bubble in the correct place left or right, based on who the sender is
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
     chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot1.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  
// This makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here- First message from bot, depending on what time of day it is the message changes morning/day/evening/night
const greeting = () => {
    let greetingTime
  
  if (currentHour >= 6 && currentHour <= 12) { 
    greetingTime = 'Top of the mornin'
    
  } else if (currentHour >=12 && currentHour <= 16) { 
      greetingTime= 'Good day mate'
  } else if (currentHour >=16 && currentHour <= 23) { 
      greetingTime= 'Good evening, fella!'
  } else {
    greetingTime = 'Hi there, night owl'
  }

  botReply(`${greetingTime}! How you doing?`, 'bot')
  }
  
//first userreply about how the user feels
const handleFeelingQuestion = () => {
  feelings = feelingInput
  userReply(`${feelingInput.value}`, 'user')
  setTimeout(() => handleFeelingAnswer (feelings), 1000)  
 }

// first botanswer and presents three buttons to the user to choose from 
const handleFeelingAnswer = () => {
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

//If user  clicks on reality check button they get a youtube video link, and after that the chat is over for this option
const wantsRealityCheck = () => {
  userReply(`Yes I´m feeling too joyful, give me a reality check`, 'user')
  setTimeout(() => botReply(`Ok, here comes a reality check for you! Click on this <a href="https://www.youtube.com/watch?v=FvM0ryhD5rY&t=6s">link</a>`, 'bot'), 1000)
  setTimeout ( () => endingMessageRealityCheck () , 3000) 
}
//Bot says good bye and user cant click on anything else. 
  const endingMessageRealityCheck = () => {
  botReply(`Hope you are feeling like you are back with both feet on earth. See you another day! Bye! <img src="assets/emojirc.png" alt="meme" />`)
  inputWrapper.innerHTML = ''
}

//I user chooses a Pick me up, user is presented with three buttons to choose from
const wantsPickUp = () => {
  userReply(`Yes please, pick me up`, 'user')
  setTimeout(() => botReply(`Ok, what kind of pick-me-up do you want?`), 1000)

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
  
//If user chooses peptalk, user is presented a youtube link to an inspirational TED talk and after that the chat is over for this option 
const choosePepTalk = () => {
  userReply(`Yey peptalk!`, 'user')
  setTimeout(() => botReply(`Here comes a link to a inspirational <a href="https://www.youtube.com/watch?v=jpRqbP9Nv9k">TEDTalk</a>`, 'bot'), 1000)
  setTimeout ( () => endingMessagePeptalk () , 3000) 
}
//Bot says good bye and user cant click on anything else. 
  const endingMessagePeptalk = () => {
  botReply(`Hope you liked the pep talk. See you another day! Bye! <img src="assets/emojipt.png" alt="meme" />`)
  inputWrapper.innerHTML = ''
}

//User chooses Funny Joke and a short joke is presented in text and after that the chat is over for this option
const chooseFunnyJoke = () => {
  userReply(`A joke sounds great!`, 'user')
  setTimeout(() => botReply(`"What did the shark say when he ate the clownfish? This tastes a little funny"`, 'bot'), 1000)
  setTimeout ( () => endingMessageJoke () , 3000) 
}
//Bot says good bye and user cant click on anything else. 
  const endingMessageJoke = () => {
  botReply(`Did you enjoy the joke? See you another day! Bye! <img src="assets/emojifj.png" alt="meme" />`)
  inputWrapper.innerHTML = ''
}

//User chooses Meme and gets a picture with a pug and meme text - (functions works, but pug picture is too small and we tried to overwrite the hierarchy in the css-code but did not succeed)
const chooseMeme = () => {
  userReply(`I like memes`, 'user')
  setTimeout ( () => botReply(`Every time a new sprint begins... <img src="assets/pugmeme.png" alt="meme">`, 'bot'), 1000) 
  setTimeout ( () => endingMessageMeme () , 3000) 
}
//Bot says good bye and user cant click on anything else. 
const endingMessageMeme = () => {
  botReply(`Did you get the meme? Soo funny! See you another day! Bye! <img src="assets/emojim.png" alt="meme" />`, 'bot')
  inputWrapper.innerHTML = ''
}

//User chooses Life Advice and gets 2 buttons with choices 
const wantsLifeAdvice = () => {
  userReply(`Oh I really need a life advice`, 'user')
  setTimeout ( () => botReply(`Ok, what kind of life advice do you want?`), 1000)

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
  
//User chooses love and is presented an audiofile with audio control panel and after that the chat is over for this option
const chooseLove = () => {
  userReply(`Love <img src="assets/love.png" alt="meme" />`, 'user')
  setTimeout ( () => botReply(`Of course you will get some loving, listen to this: <audio controls><source src="assets/love.mp3" type="audio/mpeg"></audio> `, 'bot'), 1000)
  setTimeout ( () => endingMessageLove () , 3000) 
}
//Bot says good bye and user cant click on anything else. 
  const endingMessageLove = () => {
  botReply(`Are you feeling the love in the air? See you another day! Bye! <img src="assets/emojil.png" alt="meme" /> `)
  inputWrapper.innerHTML = ''
}

//User chooses career and after that the chat is over for this option
const chooseCareer = () => {
  userReply(`Career advice sounds great! <img src="assets/career.png" alt="meme" />`, 'user')
  setTimeout ( () => botReply(`"Always go with the choice that scares you the most, because that is the one that is going to help you grow! "`, 'bot'), 1000)
  setTimeout ( () => endingMessageCareer () , 3000) 
}
//Bot says good bye and user cant click on anything else. 
  const endingMessageCareer = () => {
  botReply(`Hope that helped your career! See you another day! Bye! <img src="assets/emojic.png" alt="meme" />`)
  inputWrapper.innerHTML = ''
}

// Set up your eventlisteners here
form.addEventListener('submit', (event) => {
event.preventDefault() 
handleFeelingQuestion()
})

// When website loaded, chatbot asks first question and we want to add a little delay to it, so its wrapped in a setTimeout in milli seconds
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)