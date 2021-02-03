// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const input = document.getElementById('name-input').value;


//TO-DO:
//[X] imported HTML DOM
//[X] fix global variable
//[X] get submit button to work
//[X] [_] [_] [_] import nextQuestion and hook it up to showMessage
//[_] understand why clearing the input field works in our old file but not here. what is the difference?

// Global variables, if you need any, declared here
let questionNumber = 1; 



// Functions declared here
const nextQuestion = (message) => {
  /*console.log('questionNumber', questionNumber) */
  let question = ""; //bara deklaration, så att alla if och elses inte behöver deklarera om
  let user = "";          //^samma som ovanstående :P

  if (questionNumber === 1) {

    //setTimeout(() => questionOne(message), 10000);

    questionOne(message)
    

  } else if (questionNumber === 2) { 
      questionTwo(message)

  } else if (questionNumber === 3) {
      questionThree(message)
  } else if (questionNumber === 4) {
    questionFour(message)
  } else {
      input.value = ''
        setTimeout(() => questionFour(message), 1000)
    }
}



// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {    //enda skillnaden mellan user och bot är css styling :) samma message-variabel
    console.log(message)
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


const questionOne = (name) => { 
  questionNumber++;
  question = "Please select what floor you would like to book your room in number, (1 for floor 1, 2 for floor 2, 3 for floor 3)";
  user = "bot";
  showMessage (question, user);
  
}

const questionTwo = (floor) => {
  //message.value = ''
  questionNumber++;
  question = `Please select what room in floor: ${floor} that you selected`;
  user = "bot";
  showMessage (question, user);
  
      
}

const questionThree = (room) => {
  //message.value = ''
  questionNumber++;
  question = "You have selected room 3 please select for how long";
  user = "bot";
  showMessage (question, user);
}

const questionFour = (room) => {
  //message.value = ''
  questionNumber++;
  question = "You have booked for 30 minute thank you";
  user = "bot";
  showMessage (question, user);
}





// Set up your eventlisteners here
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default 

  const sender = "user";
  const newInput = document.getElementById('name-input').value

  showMessage(newInput, sender);

  nextQuestion(newInput);

}
);  


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
