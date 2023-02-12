// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');
const sendBtn = document.getElementById('send');
const select = document.getElementById('select')

// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

let questionNumber = 1;
let userName = '';
let type = '';
let value = '';


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
    console.log("why");
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

// This function makes the conversation continue

  const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    showMessage(message)
    input.value = ''
    setTimeout(() => whatIsTheWeather(message), 1000)
  } else if (questionNumber === 2) {
    showMessage(message)
    setTimeout(() => showActivities(message), 1000)
  } else if (questionNumber === 3) {
    showMessage(message)
    setTimeout(() => chooseActivity(message), 1000)
  } else {
    showMessage(message)
    setTimeout(thankYou, 1000)
  }
}


// CHATBOT STARTS HERE
const greetUser = () => {
  //FIRST QUESTION
  questionNumber = 1
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hi there, what's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

//SECOND QUESTION
const whatIsTheWeather = (nameInput) => {
  questionNumber++
  showMessage(`Happy to suggest some fun ideas for you and your toddler, ${nameInput}!`, "bot");
  setTimeout(() =>
    showMessage(`First can you tell me, what's the weather like today?`, "bot"), 500);


//BUTTONS THAT SHOW WEATHER OPTIONS
  inputWrapper.innerHTML = `
    <button id="sunnyBtn">Sunny</button>
    <button id="cloudyBtn">Cloudy</button>
    <button id="rainyBtn">Rainy</button>
`
clickWeatherButtons();  //once I have defined the button action function, I can call it here.


}//I end whatIsTheWeather here.

// Event listners for my buttons. I included them within the const whatIsTheWeather block. Otherwise it seemed to break the code.

const clickWeatherButtons = () => {

sunnyBtn = document.getElementById('sunnyBtn')
sunnyBtn.addEventListener('click', (event) => {
  event.preventDefault()
  type = 'sunny';
showMessage(`It's sunny today in my local area!`, "user")  //call function for whatever action should happen when button is clicked, "user"
setTimeout(() => showActivities(), 1000) //line 82 //setTimeout (() => showActivities(), 500)
})

cloudyBtn = document.getElementById('cloudyBtn')
cloudyBtn.addEventListener('click', (event) => {
  event.preventDefault()
  type = 'cloudy';
showMessage(`It's cloudy today in my local area!`, "user")  
setTimeout(() => showActivities(), 1000) 
})

rainyBtn = document.getElementById('rainyBtn')
rainyBtn.addEventListener('click', (event) => {
  event.preventDefault()
  type = 'rainy';
showMessage(`It's rainy today in my local area!`, "user")  
setTimeout(() => showActivities(), 1000) 
})
}

//clickWeatherButtons section ends here 

  //BOT RESPPONSE
  //NB I didn't need to add 'type' as I declared it in line 15 and in each of the button sections
const showActivities = () => {
  questionNumber++ 
  showMessage(`Got it! Here are some fun toddler ideas you might like to try on a ${type} day.`, "bot") //here the reply is undefined instead of showing the selected type
  
//First button
if (type==='sunny') {
  inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select an activity...</option>
        <option value="go to the beach">Go to the beach</option>
        <option value="take a splash in the local pool">Take a splash in the local pool</option>
        <option value="have a picnic outside">Have a picnic outside</option>
      </select>
    `
//Second button
  } else if (type==='cloudy') {
    inputWrapper.innerHTML = `
      <select id="select">
      <option value="" selected disabled>👇 Select an activity...</option>
        <option value="go on a bike ride together">Go on a bike ride together</option>
        <option value="visit the local playground">Visit the local playground</option>
        <option value="check out animals at the farm">Check out animals at the farm</option>
      </select>
    `
//Third button
  } else {
    inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select an activity...</option>
        <option value="bake some cookies">Bake some cookies</option>
        <option value="do some finger painting">Do some finger painting</option>
        <option value="build a model railway">Build a model railway</option>
      </select>
    `
  }

  // chooseActivity (); 
  // activate later?

const select = document.getElementById('select')
  
  //NB 'change' in the line below means the user modifies the element's value
  select.addEventListener('change',() => nextQuestion(select.value)); //NB 'next question' makes the action of the click go to next question
  //NB Couldn't get (select.value) to show so I had to use a different method below
}


const chooseActivity = (select) => {
  questionNumber++
  showMessage(`We'd like to ${select}!`, "user"); // This isn't technically how I want to 
  //write it but I couldn't get line 182 to work
  

  //THIRD QUESTION
  setTimeout(() =>showMessage('Are you sure?', "bot"), 1000);

  inputWrapper.innerHTML = `
  <button id="restart">I'll pick again</button>
  <button id="confirm">Sounds great!</button>

`

document
  .getElementById('restart').addEventListener('click', () => {
    location.reload()
    return false
  })
  // When user chooses YES, pass along the answer to conversation-function "nextQuestion" 
  document
    .getElementById('confirm')
    .addEventListener('click', () => nextQuestion('Yes!'))

}

const thankYou = () => {
  showMessage(`Sounds great!`, "user"); 
  setTimeout(() => showMessage(`Happy days! Have fun! 👋🏼`, "bot"), 1000);
  inputWrapper.innerHTML = ``
}








//select.addEventListener('click', (event) => {
//   event.preventDefault()
 
// const select





// const showActivity = () =>
//   questionNumber++


// const selectActivityButtons = () => {

//   sunnyBtn = document.getElementById('sunnyBtn')
//   sunnyBtn.addEventListener('click', (event) => {
//     event.preventDefault()
//     type = 'sunny';
//   showMessage(`It's sunny today in my local area!`, "user")  //call function for whatever action should happen when button is clicked, "user"
//   setTimeout(() => showActivities(), 1000) //line 82 //setTimeout (() => showActivities(), 500)
//   })
// }



// // Set up your eventlisteners here:
// // This listens out for the name:
form.addEventListener('submit', (event) => {
  event.preventDefault()




  
//form.addEventListener('submit',() = {
//
//})
//This listens out for...
//sendBtn.addEventListener('click', () => nextQuestion(type))


  // Store the value in a variable so I can access it after we 
  // clear it from the input
  const userName = nameInput.value
  showMessage(userName, 'user');

  // Clears the input field
  nameInput.value = ''

  //Here I will call the function where I present the weather to choose from. I will also pass the userName
  setTimeout(() => whatIsTheWeather(userName), 1000)
})



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
