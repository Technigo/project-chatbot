// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameForm = document.GetElementById('name-form');
const input = document.getElementById('input');
const sendBtn = document.get.ElementById('send-btn');


// Global variables, if you need any, declared here
let questionNumber = '';

//FUNKTIONS 
//Chat bot answer function:

const userMessage = (inputMessage) => {
    showMessage(inputMessage, 'bot');
}

//User answer function
const userMesssage = (inputMessage) => {
    showMessage(inputMessage, 'user');
}

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
    if (sender === 'user') {
        chat.innerHTML += `
    ection class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />
      </section>
    `
    } else if (sender === 'bot') {
        chat.innerHTML += `
    ection class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
    }
    // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
    chat.scrollTop = chat.scrollHeight

};

// Sequency of QUESTION/ANSWER function:
const nextQuestion = (message) => {
    if (questionNumber === 1) {
        userMessage(message)
            // After the message is sent, input value becomes empty again.
        input.value = '';
        // Next bot question apears in 1s
        setTimeout(() => allServices(message), 1000)
    } else if (questionNumber === 2) {
        userMessage(message);
        setTimeout(() => serviceChoice(message), 1000)
    } else if (questionNumber === 3) {
        userMessage(message);
        setTimeout(() => priceMessage(message), 1000)
    } else if (questionNumber === 4) {
        userMessage(message);
        setTimeout(() => goodbyeMessage(message), 1000)
    }

}




// Starts here - BOT MESSAGES
// First message

const greeting = () => {
    questionNumber = 1;
    botMessage(`Happey to see  you! <br> What's your name`)
}

//Secend message

const allServices = (usersName) => {
    questionNumber = 2;
    botMessage(`Nice to meet you ${usersName}. What servcie are you interessted in?`)

    // Adding buttons for the user to choose the service
    inputWrapper.innerHTML = `
    <button id="hairBtn">Hair services</button>
    <button id="nailBtn">Nail services</button>
    `

    // Adding event listeners to "catch" when the user clicks the button
    document.getElementById('hairBtn').addEventListener('click', () => nextQuestion('Hair services'));
    document.getElementById('nailBtn').addEventListener('click', () => nextQuestion('Nail services'));
}



// Just to check it out, change 'bot' to 'user' here 👆


//EVENTLISTENERS

// SEND button pressed
sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    nextQuestion(input.value);
});


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)