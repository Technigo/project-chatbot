// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const button = document.getElementById("send-btn")
const nameForm = document.getElementById("name-form")
// Global variables, if you need any, declared here
let questionNumber = 1
//let mailformat = .-@;

// Functions declared here
const botAnswer = (message) =>{
  showMessage(message, 'bot')
}

const userAnswer = (message) => {
  showMessage(message, 'user')
}
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('reply')
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log ('it works')
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.jpg" alt="Bot" />
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
        nameInput.value = ""
        setTimeout(() => reply1(message), 1000)
  }

  else if (questionNumber === 2) {
  userAnswer(message)
  nameInput.value = ""
        setTimeout(() => reply2(message), 1000)
  }

  else if (questionNumber === 3) {
    userAnswer(message)
    nameInput.value = ""
          setTimeout(() => reply3(message), 1000)
  }

  else if (questionNumber === 4) {
      userAnswer(message)
      nameInput.value = ""
            setTimeout(() => reply4(message), 1000)
  }
  
  else if (questionNumber === 5) {
        userAnswer(message)
        nameInput.value = ""
              setTimeout(() => reply5(message), 1000)
  }

  else if (questionNumber === 6) {
    userAnswer(message)
    nameInput.value = ""
          setTimeout(() => reply6(message), 1000)
  }
}

// Starts here
// When website loaded, chatbot asks first question.
const greeting = () => {
  showMessage(`Hello gorgeous! What is your name?`, 'bot')
}
const reply1 = (message) => {
  questionNumber++ 
  botAnswer(`Hey ${message}, Which booking would you like to make? `)
 
  inputWrapper.innerHTML = `
     <button id="cutBtn" >Hair cut</button>
     <button id="colorBtn" >Hair color</button>
     <button id="spaBtn">Hair spa</button>`
     
   document.getElementById('cutBtn') .addEventListener('click', () => nextQuestion('Hair cut'))
   document.getElementById('colorBtn').addEventListener('click', () => nextQuestion('Hair color'))
   document.getElementById('spaBtn').addEventListener('click', () => nextQuestion('Hair spa'))
 }
 
 const reply2 = (message) => {
   questionNumber ++ 
   if (message === 'Hair cut') {
    botAnswer(`Choose a Stylist below`)
    inputWrapper.innerHTML = `
    <select name="stylist" id="select">
     <option value="" selected disabled> Choose your options</option>
     <option value="Junior stylist">Junior stylist</option>
     <option value="Senior stylist">Senior Stylist</option>  
    </select>`
 
 const select = document.getElementById('select')
 select.addEventListener('change', () => nextQuestion(select.value))
}
 
   if (message === 'Hair color') {
    botAnswer(`Great! Choose your desired style`)
    inputWrapper.innerHTML = `
    <select name="colors" id="select">
     <option value="" selected disabled> Choose your options</option>
     <option value="Baylage">Baylage</option>
     <option value="Highlights">Highlights</option>
     <option value="Ombré">Ombré </option>
     <option value="Streaks">Streaks </option>
     <option value="Others">Others </option>
    </select>`

  select.addEventListener('change', () => nextQuestion(select.value))
 }
 
   else if (message === 'Hair spa') {
     botAnswer(`Great! Choose your desired treatment`)
     inputWrapper.innerHTML = `
    <select name="spa" id="select">
     <option value="" selected disabled> Choose your options</option>
     <option value="Oil treatment">Oil treatment</option>
     <option value="Hair wash with blow out">Hair wash with blow out </option>
     <option value="L'oréal">L'oréal </option>
     <option value="Olaplex">Olaplex </option>
   </select>`

   select.addEventListener('change', () => nextQuestion(select.value))
 }  
  }

  const reply3 = (message) => {
    questionNumber ++ 

      botAnswer(`You will look amazing! Now choose the date and time for your ${message}.`)
      inputWrapper.innerHTML = `
      <label for="appointment"></label>
      <input type="datetime-local" id="appointment" name="appointment">
      `
      document.getElementById('appointment').addEventListener('change', () => nextQuestion(appointment.value))
     
  }

    const reply4 = (message) => {
    questionNumber ++ 

     botAnswer(`For booking confirmation we need your email address`)
     inputWrapper.innerHTML = `
     <label for="email"></label>
     <input type="email" id="email" name="email">
     <button id="send-btn" type="submit">
     <i class='fa fa-send' ></i>
   </button>
     `
     document.getElementById('send-btn').addEventListener('click', () => nextQuestion(email.value))
    }

    const reply5 = (message) => {
      questionNumber ++ 
      botAnswer(`Thank you gorgeous! Your booking is confirmed and the booking confirmation is sent to your email
      ${message}.Have a great day 💐`)
      inputWrapper.innerHTML = ` `
      }
    

 
//prevent page refresh
nameForm.addEventListener("submit", (event) => {
  event.preventDefault()
})

// Set up your eventlisteners here
button.addEventListener('click', () =>  nextQuestion(nameInput.value)); 


//Timeout for greeting
setTimeout(greeting, 1000)
