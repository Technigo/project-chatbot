
// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
let nameInput = document.getElementById("name-input");
const inputWrapper = document.getElementById('input-wrapper');
const sendBtn = document.getElementById('send');
const form = document.getElementById('name-form')


let questionNumber = 1

const botAnswer = (inputMessage) => {
  showMessage(inputMessage, 'bot')
}

const userAnswer = (inputMessage) => {
  showMessage(inputMessage, 'user')
}

// If you need any global variables that you can use across different functions, declare them here:


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

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userAnswer(message)
    input.value = ''
    setTimeout(() => dayBooking(message), 1000)
  } else if (questionNumber === 2) {
    userAnswer(message)
    setTimeout(() => timeBooking(message), 1000)
  } else if (questionNumber === 3) {
    userAnswer(message)
    setTimeout(() => notthereyet(message), 1000)
  } else if (questionNumber === 4) {
    userAnswer(message)
    setTimeout(() => showPrice(message), 1000)
  } else {
    userAnswer(message)
    setTimeout(thankYou, 1000)
  }
}

// First question
const greeting = () => {

  showMessage("Hello there! In what name do you want to make the reservation?", 'bot');
  
}



form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = nameInput.value
  userAnswer(`${name}`)
  nameInput.value = ''
  setTimeout(() => dayBooking(), 1000)
})

// second question dayBooking

const dayBooking = () => { 
  showMessage("Which day would you like to book a table for?", 'bot');

  inputWrapper.innerHTML = `
    <button id='fridayButton'>Friday</button>
    <button id='saturdayButton'>Saturday</button>
    `
  document
    .getElementById('fridayButton')
    .addEventListener('click', () => nextQuestion('Friday'))
  document
    .getElementById('saturdayButton')
    .addEventListener('click', () => nextQuestion('Saturday'))
  }

// third question

const timeBooking = (type) => {
  questionNumber++
  botAnswer(`Which time on ${type} would you like to book?.`)
  if (type === 'Friday') {
    inputWrapper.innerHTML=`
    <select id = 'select'>
      <option value='' selected disabled> Choose time </option>
      <option value='lunch'>Lunch</option>
      <option value='dinner'>Dinner</option>
      </select> 
      `
  } 
  else {
    inputWrapper.innerHTML=`
    <select id = 'select'>
      <option value='' selected disabled> Choose time </option>
      <option value='breakfast'>Breakfast</option>
      <option value='lunch'>Lunch</option>
      <option value='dinner'>Dinner</option>
      </select> 
      `
  }

  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}



  // inputWrapper.innerHTML = `
  // <select id = 'select'>
  //   <option value='' selected disabled> Choose service </option>
  //   <option value='bathing'>Bathing</option>
  //   <option value='brushing'>Brushing</option>
  //   <option value='Nail trimming'>Nail trimming</option>
  //   <option value='Haircut'>Haircut</option>
  //   </select> 
  //   `
  // const select = document.getElementById('select')
  // select.addEventListener('change', () => usersDay(select.value))



/*
document
  .getElementById('friday')
  .addEventListener('click', () => nextQuestion('time'))
  //nextFunction('friday') //call next function with a parameter for yes

  //setTimeout(() => time(), 1000)
  //showMessage("Which time do you want to eat?", 'bot');
  

document
  .getElementById('saturday')
  .addEventListener('click', () => nextQuestion('time'))
  //nextFunction('saturday') //call next function with a parameter for yes

  //setTimeout(() => time(), 1000)
  
}

const nextFunction = (option) => { 


  if (dayBooking === 'friday') {
    showMessage("Which time do you want to eat?", 'bot');
    inputWrapper.innerHTML = `
    <button id='lunch'>Lunch</button>
    <button id='dinner'>Dinner</button>
  `
  }
  
  else (dayBooking === 'saturday') {
    showMessage("Which time do you want to eat?", 'bot');
    inputWrapper.innerHTML = `
    <button id='breakfast'>Breakfast</button>
    <button id='lunch'>Lunch</button>
    <button id='dinner'>Dinner</button>
    `
  }

    document
    .getElementById('breakfast')
    .addEventListener('click', () => nextQuestion('guests'))
    document
    .getElementById('lunch')
    .addEventListener('click', () => nextQuestion('guests'))
    document
    .getElementById('dinner')
    .addEventListener('click', () => nextQuestion('guests'))
  }
*/










// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
