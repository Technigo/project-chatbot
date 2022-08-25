
// DOM elements
const chat = document.getElementById('chat');
let nameInput = document.getElementById("name-input");
const inputWrapper = document.getElementById('input-wrapper');
const sendBtn = document.getElementById('send');
const form = document.getElementById('name-form')

// Dictates question flow
let questionNumber = 1

// Dictates chat flow
const botAnswer = (inputMessage) => {
  showMessage(inputMessage, 'bot')
}

const userAnswer = (inputMessage) => {
  showMessage(inputMessage, 'user')
}

// Start of functions

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/bot.png" alt="User" />  
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
// Dictates function flow
// const nextQuestion = (message) => {
//   console.log('questionNumber', questionNumber)

//   if (questionNumber === 1) {
//     userAnswer(message)
//     input.value = ''
//     setTimeout(() => dayBooking(message), 1000)
//   } else if (questionNumber === 2) {
//     userAnswer(message)
//     setTimeout(() => timeBooking(message), 1000)
//   } else if (questionNumber === 3) {
//     userAnswer(message)
//     setTimeout(() => guestBooking(message), 1000)
//   } else if (questionNumber === 4) {
//     userAnswer(message)
//     setTimeout(() => finaliseBooking(message), 1000)
//   } else {
//     userAnswer(message)
//     setTimeout(thankYou, 1000)
//   }
// }

// First question
const greeting = () => {
  questionNumber = 1
  botAnswer(`Welcome! In what name do you want to make a reservation?`);
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
  questionNumber++
  showMessage("Which day would you like to visit us?", 'bot');

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
  botAnswer(`Which time on ${type} would you like to book?`)
  if (type === 'Friday') {
    inputWrapper.innerHTML=`
    <select id = 'select'>
      <option value='' selected disabled> Choose time </option>
      <option value='lunch'>Lunch</option>
      <option value='After Work'>After Work</option>
    </select> 
      `
  } 
  else {
    inputWrapper.innerHTML=`
    <select id = 'select'>
      <option value='' selected disabled> Choose time </option>
      <option value='Brunch'>Brunch</option>
      <option value='dinner'>Dinner</option>
      </select> 
      `
  }

  const select = document.getElementById('select')
  select.addEventListener('change', () => nextQuestion(select.value))
}

// fourth question 

const guestBooking = (time) => { 
  questionNumber++
  botAnswer(`How many guests will you be for ${time}?`);


inputWrapper.innerHTML=`
<select id = 'select'>
  <option value='' selected disabled> Number of quests </option>
  <option value='1'>1</option>
  <option value='2'>2</option>
  <option value='3'>3</option>
  <option value='4'>4</option>
  <option value='5'>5</option>
</select> 
`

const select = document.getElementById('select')
select.addEventListener('change', () => nextQuestion(select.value))
}

// summary
const finaliseBooking = (choice) => {
  select.remove();
  questionNumber++

  if (choice === '1') {
    showMessage("Oh! We see you brought your best company, Yourself! We'll make sure you get the best table!", 'bot')
  } else if (choice === '5') {
    showMessage("We love a big crowd! Please contact us at gm@fakemail.com for large bookings!", 'bot')
  } else {
    botAnswer("We look forward to your visit!", 'bot')
  }
  
  select.addEventListener('change', () => nextQuestion(inputValue))
}





setTimeout(greeting, 1000);
