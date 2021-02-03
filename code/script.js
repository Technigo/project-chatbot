// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('user-input')/*.value;*/
/* MAKS version Monday --> const value = document.getElementById('input-value').value; */
const submit = document.getElementById('send-btn')
/*const nameForm = document.getElementById('name-form')*/

// Global variables, if you need any, declared here
let questionNumber = 1
console.log(questionNumber);

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

// Functions declared here

/* TEST Deklarera en funktion som hämtar ('user-input').value="" */ 
/*function userName() {
  document.getElementById('user-input').value ='';
} */

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user3.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot2.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value /*try change to value='message', 'msg', 'user-input', text*/
    setTimeout(() => movieTips(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => movieLength(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => gender(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => movieGenre(message), 1000)
  }
  else if (questionNumber === 5) {
    userReply(message)
    setTimeout(() => movieMenu(message), 1000)
  }
  else if (questionNumber === 6) {
    userReply(message)
    setTimeout(() => chosenMovie(message), 1000)
  }
};

// Starts here - OBS make sure it is possible to type in text in input box!
const greeting = () => {
  questionNumber = 1
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const movieTips = (msg) => {
  questionNumber++
  showMessage(`Nice to meet you ${msg}. As you might know, I'm quite the movie expert. 
  Would you like some tips for tonight?`, 'bot')
inputWrapper.innerHTML = 
  `<div>
    <button id="yesBtn">Yes</button>
    <button id="noBtn">No</button>
  </div>`

  document.getElementById('yesBtn').addEventListener('click', () => nextQuestion('Yes'))
  document.getElementById('noBtn').addEventListener('click', () => 
    showMessage('Too bad, let me know if you change your mind!', location.reload(), 'bot')) 
    // Change this to a closing comment and that the bot restarts from the beginning. 
} 

const movieLength = (yes) => {
  questionNumber++ 
  showMessage(`${yes} Great! How much time do you have to watch the movie?`, 'bot')
  inputWrapper.innerHTML = 
  `<div>
    <button id="underBtn">Under 2h</button>
    <button id="overBtn">Over 2h</button>
  </div>`

  document.getElementById('underBtn').addEventListener('click', () => nextQuestion('Under 2h'))
  document.getElementById('overBtn').addEventListener('click', () => nextQuestion('Over 2h'))
}

const gender = (great) => {
  questionNumber++
  showMessage(`${great}, So male or female director ?`, 'bot')
  
  inputWrapper.innerHTML = 
    `<div>
      <button id="fBtn">Female</button>
      <button id="mBtn">Male</button>
    </div>`
  document.getElementById('fBtn').addEventListener('click', () => nextQuestion('Female director'))
  document.getElementById('mBtn').addEventListener('click', () => nextQuestion ('Male director'))
//showMessage(`Great to know your preferences! Now let's move further into the movie djungle...`, 'bot')
} //can I have one more showMessage here??
  //add extra time here as a suspension, before the next Question? 

const movieGenre = (length) => {
  questionNumber++

  showMessage(`${length} - got it! What genre are you in the mood for?`, 'bot')
  inputWrapper.innerHTML = 
  `<div>
    <button id="dramaBtn">Drama</button>
    <button id="thrillerBtn">Thriller</button>
    <button id="comedyBtn">Comedy</button>
    <button id="documentaryBtn">Documentary</button>
  </div>`

  document.getElementById('dramaBtn').addEventListener('click', () => nextQuestion('drama'))
  document.getElementById('thrillerBtn').addEventListener('click', () => nextQuestion('thriller'))
  document.getElementById('comedyBtn').addEventListener('click', () => nextQuestion('comedy'))
  document.getElementById('documentaryBtn').addEventListener('click', () => nextQuestion('documentary'))
}

const movieMenu = (type) => {
  questionNumber++ 
  showMessage(`Excellent choice - ${type} it is. Here is a list of movies that I think will suit you:`, 'bot')
//Add if else statements, add extra condition here for length of movie?
  if (type === 'drama'){
    inputWrapper.innerHTML = `
      <select id="select"> 
        <option value="" selected disabled>Top 3 drama movies</option>
        <option value="dramamovienr1">movie nr1</option>
        <option value="dramamovienr2">movie nr2</option>
        <option value="dramamovienr3">Movie nr 3</option>
      </select>
    `
  } else if (type === 'thriller') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Top 3  thriller movies</option>
        <option value="thrillermovienr1">movie nr1</option>
        <option value="thrillermovienr2">movie nr2</option>
        <option value="thrillermovienr3">Movie nr 3</option>
      </select>
      `
  } else if (type === 'comedy') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Top 3 comedy movies</option>
        <option value="comedymovienr1">movie nr1</option>
        <option value="comedymovienr2">movie nr2</option>
        <option value="comedymovienr3">Movie nr 3</option>
      </select>
      `
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>Top 3 documentary movies</option>
        <option value="documentarymovienr1">movie nr1</option>
        <option value="documentarymovienr2">movie nr2</option>
        <option value="documentarymovienr3">Movie nr 3</option>
      </select>
      `
  }
  
const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
};

const chosenMovie = (select) => {
  questionNumber++ 
  showMessage(`Get the popcorn ready and enjoy watching ${select}!`, 'bot')
  showMessage(`Press restart if you want to start over 👇`, 'bot')
  inputWrapper.innerHTML = 
  `<div>
    <button id="restartBtn">Restart</button>
  </div>`

  document.getElementById('restartBtn').addEventListener('click', () => {
    location.reload()
  })

};


// Set up your eventlisteners here
submit.addEventListener('click', (event) => {
  event.preventDefault();
  nextQuestion(input.value)
})
input.addEventListener('keypress', (event) => {
  event.preventDefault();
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loadedname.
setTimeout(greeting, 1000)
