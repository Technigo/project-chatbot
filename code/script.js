// In the js-file we have declared our variables so they are connected to the html-file.

// Variables that point to selected DOM elements

const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')

// If you need any global variables that you can use across different functions, declare them here:
// Here we have modifed our bot and user replies with 2 functions

const botReply = (msg) => {
  showMessage(msg, 'bot')
}

const userReply = (msg) => {
  showMessage(msg, 'user')
}

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
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

// Here we have a function that "moves" the chat forward, 

 const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber) 
/* Here starts our if else statment, that lets the program know where we are in the chat,
   example "if the question is equal to one do this, else move forward. It posts the user replay
   that has the input value that they wrote. and after 1 second the next "bot" messages shows and it 
   moves the chat forward.*/
  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => showHelpTypes(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => showCodeMenu(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showCodeHelper(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => showContactinformation(message), 1000)
  } else {
    userReply(message)
    setTimeout(survey, 1000)
  }
}

// Starts here
/* here is the start of the chatbot (with question one, and now you're in the if statment) */
const greeting = () => {
  questionNumber = 1
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  botReply("Hello there, What's your name?")
  // Just to check it out, change 'bot' to 'user' here 👆
}
/* this shows after one second, and the questionnumber is now 2 (questionnumber++ gives this). The reply will include a message and the user input from previous question.
  Also three buttons will show and the next question woill depend on which button is clicked.*/  
const showHelpTypes = (msg) => {
  questionNumber++
  botReply(
    `Nice to meet you ${msg}. What do you need help with today?`
  ) 
inputWrapper.innerHTML = `
<button id="htmlBtn">Html</button>
<button id="cssBtn">Css</button>
<button id="jsBtn">Javascript</button>
`
document.getElementById('htmlBtn')
.addEventListener('click', () => nextQuestion('html'))
document.getElementById('cssBtn')
.addEventListener('click', () => nextQuestion('css'))
document.getElementById('jsBtn')
.addEventListener('click', () => nextQuestion('javascript'))
}

/* Now depedning on click in previous question the type will show. And the questionNumber is now 3, and we created another if statment so the program
catches what the user clicked, "if user clicked html do this, else do this", when user click on menu a drop down menu will show, where the user can once again click.*/ 
const showCodeMenu = (type) => {
  questionNumber++
  botReply(
    `Oh so you need help with ${type} today? My best advice is to visit one of the sources below!`
  )

  if (type === 'html') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled> ⬇️ Select a person to help you with HTML...</option>
        <option value="matilda">Matilda</option>
        <option value="daniel">Daniel</option>
      </select>
    `
  } else if (type === 'css') {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled> ⬇️ Select a person to help you with CSS...</option>
        <option value="jennie">Jennie</option>
        <option value="poya">Poya</option>
      </select>
    `
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled> ⬇️ Select a person to help you with JavaScript...</option>
        <option value="dali">Dalai lama</option>
        <option value="wonderwoman">Wonder woman</option>
      </select>
    `
  }
// here we declare a const variable "select" that takes what the user selected in the drop down menu, and the "select.value" will take the user to next question.
const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}
/* This is question number 4. Here we declare a function that shows the value of what the user cklicked in previous question.
Button will show depending on if you want to call, email or visit the person. Next questio will depend on what they click and show more detailed information.*/
const showCodeHelper = (coder) => {
  questionNumber++

  botReply(`Oh excellent so you choose ${coder}, Do you want to call 📞? Or email 📧? or their favorite the suprise visit to their home 🏠?`)

  inputWrapper.innerHTML = `
    <button id="phone">📞</button>
    <button id="email">📧</button>
    <button id="house">🏠</button>
  `

  document
    .getElementById('phone')
    .addEventListener('click', () => nextQuestion('phone'))
  document
    .getElementById('email')
    .addEventListener('click', () => nextQuestion('email'))
    document
    .getElementById('house')
    .addEventListener('click', () => nextQuestion('house'))
}
/* Question number 5. This shows detailed information depending on previous question. We created an in/else if statement depending on what the user clicked.
And we also added two buttons. Button "restart" will reload the page to let the user start from the beginning. Button "finish" will take the user to the last bot-reply where we ask if the want to 
take our survey and a click on the button will open the suevey page. */
const showContactinformation = (nextQuestion) => {
  questionNumber++

if (nextQuestion === 'phone') {
  botReply(`Their phonenumber is 123456789📞`)
} else if (nextQuestion === 'email'){
  botReply(`Their email is pleaseDontEmailMe@dont.com📧`)
} else {
  botReply(`Their homeadress is 21 Jumpstreet Wonderland🏠`)
}

inputWrapper.innerHTML = `
<button id="finish">I found what i needed</button>
<button id="restart">I need more help, pls</button>
`
document.getElementById('restart').addEventListener('click', () => {
  location.reload()
})

document.getElementById('finish').addEventListener('click', () => {
  botReply(`Would you like to take a 2 hour survey of this experience on this chatbot?`)
  inputWrapper.innerHTML = `
    <button onclick="location.href='https://www.surveymonkey.com/r/9Y3HP2P'" type="button">This is the only option</button>
  `
})

}


// Set up your eventlisteners here
/* This is our function for send-button that helps the user to move forward to next question instead of using the submit-form in html.
If the user clicks it takes them to the next question and if they press enter and they have put input-value they also will be taken to
the next question */
sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);