// all the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const textInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper')

// global variables declared here
let qnr = 1 // qnr = question number. When the chat

// functions declared here

// this function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/avatar-profile.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/alien-emoji.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // this little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// checking where we are at when the send button is pressed (on submit)
// preventing the default behavior of a form which is refresh page on submit
const handleSubmit = (e) => {
  e.preventDefault()
  
  if (textInput.value === '') {
    showMessage('Are you missing a name?', 'bot')
    
  } else if (qnr === 1) {  
    userReply1()
  } 
}

 // chatbot starts here

  // Step 1
const botReply1 = () => {         //declare function that is bots greeting
  showMessage(`Hello there human, What's your name?`, 'bot')
}

const userReply1 = () => {        //declaring function that is users first message
  const name = textInput.value    //storing user name for step 2
  showMessage(name, 'user')       //the name is shown in users chat bubble
  textInput.value = ""
  qnr = qnr + 1

  setTimeout(() => botReply2(name), 1000)   //trigger step 2
}

// Step 2
const botReply2 = (name) => {     //declare function that is bots second message
  showMessage(`Hello ${name}! Do you enjoy life on planet Earth? I heard it's a ticking time bomb.`, 'bot')

  //input buttons with yes and no
  inputWrapper.innerHTML = `      
  <button id='yes'>Yes</button>
  <button id='no'>No</button>
  `
  
  //listen for "click" on buttons, and trigger the right user message depending on which button has been clicked
  document.getElementById('yes').addEventListener('click', userReply2Yes)
  document.getElementById('no').addEventListener('click', userReply2No) 
}

const userReply2Yes = () => {     
  showMessage("Yes, I believe in humanity.", 'user') //message shown if user clicks "yes"  
  let answer = "yes"
  setTimeout(() => botReply3(answer), 1000)   //trigger step 3
} 

const userReply2No = () => {
  showMessage("No, it's a miracle that we are still alive.", 'user')  //message shown if user clicks "no"
  let answer = "no"
  setTimeout(() => botReply3(answer), 1000)   //trigger step 3
} 

// Step 3
const botReply3 = (answer) => {     
  if (answer === "yes") {             //if user clicks yes, the following message is shown
  showMessage(`Interesting, you seem so positive despite the pandemic. How will you solve it?`, 'bot')
  
  //input dropdown menu with 2 choices
  inputWrapper.innerHTML = `
  <select class="dropdown-menu" id="select">
    <option value="" selected disabled>👇 Select an answer...</option>
    <option id="quarantine" value="quarantine">Quarantine</option>
    <option id ="flee" value="flee">FLEE!</option>
  </select>
  `

} else if (answer === "no") {       //if user clicks no, the following message is shown
  showMessage(`I agree 😉 As an 👽 I am surprised you're staying on this planet. Would you like to join me on planet Frontus? `, 'bot')
    
  inputWrapper.innerHTML = `
  <select class="dropdown-menu" id="select">
    <option value="" selected disabled>👇 Select an answer...</option>
    <option value="positive">Yes</option>
    <option value="why">What's in it for you?</option>
  </select>
  `  
  }
  
  //listen for which option in the dropdown menu has been chosen and trigger the right user message depending on users choice
  document.getElementById("select").addEventListener('change', userReply3Yes)
  document.getElementById("select").addEventListener('change', userReply3No)
}

const userReply3Yes = () => {
  const dropdown = document.getElementById("select")                    //creating variabel for the dropdown
  const selectanswer = dropdown.options[dropdown.selectedIndex].value;  //function that stores the option that user has chosen

  //messages shown depending on users chosen option in dropdown menu
  if (selectanswer === 'quarantine') {
    showMessage("Quarantine... Heard about that?", 'user')
    setTimeout(botReply4Quarantine, 1000)
} else if (selectanswer === "flee") {
    showMessage("We'll flee to mars this december", 'user')
    setTimeout(botReply4Flee, 1000)
}
  dropdown.disabled = true            //prevent user from chosing two options in a row in dropdown menu
}

const userReply3No = () => {
  const dropdown = document.getElementById("select")
  const selectanswer = dropdown.options[dropdown.selectedIndex].value;
 
  if (selectanswer === 'positive') {
    showMessage("Sure, that seems like fun", 'user')
    setTimeout(botReply4positive, 1000)
} else if (selectanswer === "why") {
    showMessage("What's in it for you?", 'user')
    setTimeout(botReply4why, 1000)
}
  dropdown.disabled = true
}

  
//Step 4
//declaring functions that triggers bot replies, depending on the dropdown option user has chosen
const botReply4Quarantine = () => {
  showMessage("Quarantine.. In outer space you are always in quarantine. Come join me on my planet Frontus!", 'bot')
  exitChat()    //trigger last function
}

const botReply4Flee = () => {
  showMessage("Mars!? Frontus is a much better planet. We have the best take out in the universe!", 'bot')
  exitChat()
}
  
const botReply4positive = () => {
  showMessage("Pack your bags and I'll pick you up in my spaceship!", 'bot')
  exitChat()
}

const botReply4why = () => {
  showMessage("We could use humans to do some research on the human anatomy, haha", 'bot')
  exitChat()
}

const exitChat = () => {  //last function with yes/no buttons

  inputWrapper.innerHTML = `  
  <button id='letsGo'>Let's go!</button>
  <button id='leave'>Leave me alone!</button>
  `

  document.getElementById('letsGo').addEventListener('click', userReply4letsGo)
  document.getElementById('leave').addEventListener('click', userReply4leave) 
}

const userReply4letsGo = () => {
  showMessage("Let's go!", 'user')
  setTimeout(rocket, 1000)  
 } 

const userReply4leave = () => {
  showMessage("Leave me alone!", 'user')
  setTimeout(exit, 1000) 
} 

//End screens
const rocket = () => {  //creating function with div class including end-gif in innerHTML
  jsBody.innerHTML = `   
  <div class="end-div">
    <img class="end-gif" src="./assets/raket.gif">
    <h1 class="end-title">Frontus, here we go!</h1>
  </div>   
  `
}

const exit = () => {
  jsBody.innerHTML = `
  <div class="end-div">
    <img class="end-gif" src="./assets/alien-flee.gif">
    <h1 class="end-title">Noo, please don't go!</h1>
  </div>  
  `
}
  
  // set up your eventlisteners here
  form.addEventListener('submit', handleSubmit)   //After submitting the name,  the "handleSubmit" funtion invokes with a conditional. This leads to next question after answering the first one.
  
  setTimeout(botReply1, 1000)  //two arguments with the function greeting and the second is how much time to wait before chat bubble appear.