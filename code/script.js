// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const formSubmitButton = document.getElementById("send-btn");
const formMessageBox = document.getElementById("name-input");

// Eventlisteners
formSubmitButton.addEventListener('click', () => nextQuestion(formMessageBox.value));

// Global variables, if you need any, declared here
let questionNumber = 1;
let chatDelay = 800;

// Functions declared here
const botReply = (msg) => {
  showMessage(msg, "bot");
};

const userReply = (msg) => {
  showMessage(msg, "user");
};


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
  showMessage(`Hello, what's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

/* nextQuestion will check the value of questionNumer and execute which ever code correspands to the correct value. */
const nextQuestion = (message) => {

  if (questionNumber === 1) {
    userReply(message);
    formMessageBox.value = "";
    setTimeout(() => question2(message), chatDelay);
  }else if (questionNumber === 2){
    userReply(message)
    formMessageBox.value = "";
    setTimeout(() => question3(message), chatDelay);
  }else if(questionNumber === 3){
    userReply("sdjfhskdjfh");
    formMessageBox.value = "";
    question4
  }else {
    botReply("Thank you, Bye bye!");
  }
};

const question2 = (message) => {
  questionNumber++;
  botReply(`Hello! ${message}. How old are you?`);
};

const question3 = (message) => {
  questionNumber++;
  botReply(`Oh, so you are ${message}. Another question`);
};

const question4 = (message) => {
  questionNumber++;

};




// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)
