// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const sendButton = document.querySelector('.send-btn');




// Global variables, if you need any, declared here
// let userName = nameInput.value;
// Functions declared here



// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `  
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `

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
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hello there, I am your life coach and Im here to help you become the best version of yourself. What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}



// Set up your eventlisteners here

sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  const name = nameInput.value
    if(name === "") {
      showMessage('Please enter your name','bot');
    }
    else {
      showMessage(`${name}`,'user');
    

      /* setTimeout(function(){
        showMessage (`Hi ${name} , which area of your life you wanna focus on today?`, 'bot');
      }, 2000) Daniela's code */

      const showCoachAreas = () => {
        showMessage(`Hi ${name}, which area of your life do you want to focus on?
        `, 'bot')
        
        const inputWrapper = document.getElementById('input-wrapper')
        inputWrapper.innerHTML = `
        <button id="workBtn">Work</button>
        <button id="familyBtn">Family</button>
        <button id="lifeBtn">Life</button>
        <button id="healthBtn">Health</button>
      `  

      let workBtn = document.getElementById('workBtn')
      workBtn.addEventListener('click', () => {
        showMessage(`Excellent, please choose a time`, 'bot')
        })
      }  
      
      setTimeout(showCoachAreas, 2000)
      // showMessage(`${userName} `,'user');
    }  
})
      
      
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
