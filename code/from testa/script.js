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

/*
1 - Welcome to KittenBot! What is your name?
text-input: (name) 
2 - Great to meet you (name). Lets make you a kitten, shall we?
input: only one option: a Thumbs up-button
4 - Should it be a boy or a girl?
input: buttons - boy, girl, doesnt really matter
4 - Now, the most important thing of all. (Her-his) name. Any particular letter you want the name to start with?
text-input: one letter
5 - Ok we’ll take that into consideration!
(pause a few seconds)
- What color do you want (him - her)  to be?
input: buttons - white, grey, brown, black
6 - Would you like (him-her) to prefer hanging out indoors or outdoors?
input: buttons - indoors, outdoors
7 - Skinny or fat?
input: buttons - skinny, fat
8 - Ok (name), please wait while KittenBot prepares your kitten! 
(few sec wait)
- Drumroll please! Let us proudly present your kitten - (he-she) is (color), furry, cosy, and loves (cuddling in the sofa - adventuring outside). And (his-her) name is (name randomly generated from listof kitten names)-the cat!
(picture of cat appears)
*/ 










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