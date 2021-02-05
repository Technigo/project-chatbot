const formElement = document.getElementById('form');
const chat = document.getElementById('chat');

formElement.addEventListener('submit', (event) =>{
    event.preventDefault();
    const value = document.getElementById('input-value').value;
    console.log(value)
    
    chat.innerHTML += `
    <div>
        <p>${value}</p>
    /div>
    `;
})

// project starting code below..............

// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')

// Global variables, if you need any, declared here

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
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)


//....................................











//EVENT LISTENER
const getInput = (inputType) => {
    formElement.addEventListener(inputType, (event) => {
        event.preventDefault();
        const value = document.getElementById('input-value').value;
        return value;
        // console.log(value)
        
        // chat.innerHTML += `
        // <div>
        //     <p>${value}</p>
        // /div>
        // `;
    })
}

//FUNCTIONS

const nextQuestion = (currentQuestionNr) => {
    currentQuestionNr ++;  
    switch(currentQuestionNr) {
        case 1:
            questiontwo(currentQuestionNr);
            break;
        case 2:
            questionthree(currentQuestionNr);
            break;
        case 3:
            questionFour(currentQuestionNr);
            break;
        case 4:
            questionFive(currentQuestionNr);
            break;
        case 5:
            questionSix(currentQuestionNr);
            break;
        case 6:
            questionSeven(currentQuestionNr);
            break;
    }
}

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

const setInputType = (type) => {
    if (type === 'text') {
        formElement.classList.remove('text', 'buttons', 'etc')
        formElement.classList.add('text')
    } else if (type === buttons) {
        formElement.classList.remove('text', 'buttons', 'etc')
        formElement.classList.add('buttons')
    }
}

//CONTROL FLOW

const questionOne = async () => {
    showMessage(`yada yada`, 'bot');
    setInputType(textField);
    const response = getInput(inputType);
    // set relevant variables
    // call next question
}