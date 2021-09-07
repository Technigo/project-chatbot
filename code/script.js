// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('user sending message')
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log('bot sending message')
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
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const confirmation = (btnType) => {
  
  if (btnType === 1) {
    showMessage ('Awesome, Pad Thai it is!', 'bot')
  } else if (btnType === 2) {
    showMessage ('Yay, we love Paneng too!', 'bot')
  } else  {
    showMessage('Good Choice, you will love it!', 'bot')
  }
}

const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const userName = document.getElementById("name-input")
const sendButton=document.getElementById("send-btn")

sendButton.addEventListener("click", (event) => { 
  event.preventDefault();
  const name = userName.value
  showMessage(name, 'user')
  userName.value = ""
   
  setTimeout(() =>{
    showMessage('${name}! What are you craving?', 'bot')
    },1000) //delay is in milliseconds 
})
  
const foodOption=document.getElementById("phadThaiBtn")
foodOption.addEventListener("click", (event) => {
  event.preventDefault();
  showMessage ('1 Pad Thai, please', 'user')
  document.getElementById("buttons").style.display = "none";
  setTimeout(() =>{
    showMessage('Awesome, Pad thai it is!', 'bot')
    },1000) //delay is in milliseconds 
  
 
})

const foodOption2=document.getElementById("panengBtn")
foodOption2.addEventListener("click", (event) => {
  event.preventDefault();
  showMessage('1 Paneng, please', 'user')
  document.getElementById("buttons").style.display = "none";
  setTimeout(() =>{
    showMessage ('Yay, we love Paneng!', 'bot')
    },1000) //delay is in milliseconds 
  
})

const foodOption3=document.getElementById("tomKhaGaiBtn")
foodOption3.addEventListener("click", (event) => {
  event.preventDefault();
  showMessage ('1 Tom Kha Gai, please', 'user')
  document.getElementById("buttons").style.display = "none";
  setTimeout(() =>{
    showMessage('Good Choice, you will love it!', 'bot')
    },1000) //delay is in milliseconds 
  
 
  
})





// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)
