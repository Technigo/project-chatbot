// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const sendBtn = document.getElementById('send');
const inputWrapper = document.getElementById("input-wrapper");
const nameForm = document.getElementById("name-form");


// If you need any global variables that you can use across different functions, declare them here:
let score = 0;
let questionNumber = 1;


/* // Declare your functions after this comment
const userReply = (message) => {
  showMessage(message, 'user')
};
const bot = (message) => {
  showMessage(message, 'bot')
}; */

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("Message from user");
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `} else if (sender === 'bot') {
    console.log("Message from bot");
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p id="message">${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greetUser = () => {
  questionNumber = 1;
  showMessage("Greetings stranger! What's your name?", 'bot');
};
setTimeout(greetUser, 1000);


//user answer: name
const userAnswer = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const name = userInput.value
  showMessage(name, 'user')
  userInput.value = null;
  setTimeout(() => niceToMeetYou(name), 1000)
};

//launch userAnswer on submit-button
sendBtn.addEventListener("click", userAnswer);


const niceToMeetYou = (name) => {
  //launch new question
  showMessage(`Nice to meet you ${name}! Do you wanna play a little quiz?`, 'bot');
  chat.innerHTML +=
  `<div class="yesNoWrapper" id="yesNoWrapper">
    <button id="yesButton" class= "yesNoButton yesButton" onclick = "q1()">Yes</button>
    <button id="noButton" class= "yesNoButton noButton" onclick = "noPlay()">No</button>
  </div>`;
  nameForm.innerHTML = "";
}

//question 1 function (if yes)
const q1 = () => {
  showMessage("Ok, let's start with an easy one: What's the name of the Swedish Prime Minister?", 'bot');
  chat.innerHTML +=
  `<div class="q1Wrapper" id="q1Wrapper">
    <button id="olof" class= "q1a1Button q1Button" onclick = "wrongAnswer()">Olof Palme</button>
    <button id="magdalena" class= "q1a2Button q1Button" onclick = "wrongAnswer()">Magdalena Andersson</button>
    <button id="ulf" class= "q1a2Button q1Button" onclick = correctAnswer()>Ulf Kristersson</button>
  </div>`
}

//if answer is no make bot say "Some other time then. Have a nice day!"
const noPlay = () => {
  chat.innerHTML =`
  <div class = "dogwrap">
  <p>That's too bad :( </p>
  <img class="dog" src="sad dog.jpg" alt="sad dog">
  </div>
  `;
  nameForm.innerHTML ="";
};

//Make if-statement: If answer is correct, give score and move to next question, else just go to next.
const wrongAnswer = () => {
 showMessage("Interesting choice... Next question: What is the population of Sweden?", "bot");
 console.log(score);


}

const correctAnswer = () => {
  score = score + 1;
  showMessage("Alright! Next question: ", "bot");
  console.log(score);
}


//Order based on question number


/* const questionOrder = (message) => {
  console.log('questionNumber', questionNumber);
  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => niceToMeetYou(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    setTimeout(() => an(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    setTimeout(() => showDishSize(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => showPrice(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
} */