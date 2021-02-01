// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const formSubmitButton = document.getElementById("send-btn");
const formMessageBox = document.getElementById("form-input");

// Global variables, if you need any, declared here
let questionNumber = 1;
let chatDelay = 100;

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
    /* console.log(message); */
    /* console.log(showMessage); */
    /* console.log(greeting); */

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
  showMessage(`Hi! What name did your parents give you?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆

  formSubmitButton.addEventListener('click', () => nextQuestion(formMessageBox.value));
}

const nextQuestion = (message) => {
  if (questionNumber === 1){
    
    userReply(message);
    formMessageBox.value = "";
    setTimeout(() => question2(message), chatDelay)

  }else if (questionNumber === 2){
    userReply(message);
    if (message === "stocks"){
      console.log("stocks");
    
    }else if (message === "funds") {
      console.log("funds");
    }else {
      botReply('You have to type either "stocks" or "funds".');
    }
  }else if (questionNumber === 3) {

  };
};

const question2 = (message) => {
  questionNumber++;
  botReply(`Hello ${message}. Would you like to know more about "stocks" or "funds"?`)

  formSubmitButton.addEventListener('click', () => nextQuestion(formMessageBox.value));
};
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

/* setTimeout(greeting, 500 */
setTimeout(greeting, 1000)
/* setTimeout(greeting, 3000)*/