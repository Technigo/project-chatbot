// DOM selectors goes here 
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const button = document.getElementById('button')
const nameForm = document.getElementById("name-form");
const inputWrapper = document.getElementById("input-wrapper");

//Variables
//Type of math-problem
let typeChoice = ""
//Numbers in the math-problems
let a = ""
let b = ""
let c = ""

// Functions goes here 
// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // Checks if the sender is the user and adds posted message from the user
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // Checks if the sender is the bot and adds posted message from the bot
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
  // Makes the chat scroll to the last message when there are many 
  chat.scrollTop = chat.scrollHeight
}

// Start the conversation
const greetUser = () => {
    showMessage("Hey, I'm Math-ew, the mathbot. Welcome to my wonderful world of math. What's your name?", 'bot')
nameForm.addEventListener("submit", userNameInput);
}

// Eventlisteners goes here 👇

 //Gives back name from input

let userName = ""
const userNameInput = (input) => {
input.preventDefault(); 
userName = nameInput.value;
showMessage(`${userName}`, "user");
nameInput.value = ""; 
setTimeout(() => startQuestion(), 1000);
};

//Bot asks if you want to start
const startQuestion = () => {
  if (userName == ""){
  showMessage(`I need a name to be able to talk to you. Let's try again - What is your name?`, "bot");
  }

  else {
  showMessage(`Nice to meet you, ${userName}. Are you ready to solve some math problems?`, "bot");
  //Buttons for answering "yes" or "no"
    inputWrapper.innerHTML = `
    <button id="yes" type="submit" class="chat-btn">Yes</button>
    <button id="no" type="submit" class="chat-btn">No</button>`
    document.getElementById("yes").addEventListener("click", yesChoice);  
    document.getElementById("no").addEventListener("click", noChoice);
  }
}
//If you answer "no"
const noChoice = () => {
  showMessage(`No`, "user")
  showMessage(`Sorry to hear that, ${userName}. You're welcome back anytime!`, "bot")
  inputWrapper.innerHTML = ``
  setTimeout(() => clearWindow(), 4000);
};

const clearWindow = () => {
chat.innerHTML = `
      <section class="bot-msg">
          <img src="assets/bot.png" id="endBot" alt="Bot" />
      </section>
    `
}

//If you answer "yes"
const yesChoice = () => {
  showMessage(`Yes`, "user")
  setTimeout(() => choiceQuestion(), 1000);
};
//Ask what type of question you want
const choiceQuestion = () => {
  showMessage(`What type of math problem do you want to solve?`, "bot");
    inputWrapper.innerHTML = `
    <button id="add" type="submit" class="choice-btn">Addition</button>
    <button id="subtract" type="submit" class="choice-btn">Subtraction</button>
    <button id="multiply" type="submit" class="choice-btn">Multiplication</button>
    <button id="divide" type="submit" class="choice-btn">Division</button>`
    document.getElementById("add").addEventListener("click", additionChoice);  
    document.getElementById("subtract").addEventListener("click", subtractionChoice);
    document.getElementById("multiply").addEventListener("click", multiplicationChoice);  
    document.getElementById("divide").addEventListener("click", divisionChoice);
    
}
//If you choose addition
const additionChoice = () => {
  typeChoice = "addition"
  showMessage(`Addition`, "user")
  setTimeout(() => additionRandom(), 1000);
}
//If you choose subtraction
const subtractionChoice = () => {
  typeChoice = "subtraction"
  showMessage(`Subtraction`, "user")
  setTimeout(() => subtractionRandom(), 1000);
}
//If you choose multiplication
const multiplicationChoice = () => {
  typeChoice = "multiplication"
  showMessage(`Multiplication`, "user")
  setTimeout(() => multiplicationRandom(), 1000);
}
//If you choose division
const divisionChoice = () => {
  typeChoice = "division"
  showMessage(`Division`, "user")
  setTimeout(() => divisionRandom(), 1000);
}

//Prints a mathproblem with addition
const additionRandom = () => {
  a = Math.floor (Math.random() * 100) + 1;
  b = Math.floor(Math.random() * 100) + 1;
  showMessage (`What is ${a}+${b}?`, "bot")
  inputWrapper.innerHTML = `
      <form id="answerForm"> 
        <label>Answer</label>
        <input id="answer" type="text" />  
        <button id="button" class="send-btn" type="submit"> 
           Send
        </button>
      </form>
    `
  document.getElementById("answerForm").addEventListener("submit", answerInput);
}
//Prints a mathproblem with subtraction
let subtractOrder = ""
const subtractionRandom = () => {
  a = Math.floor (Math.random() * 10) + 1;
  b = Math.floor(Math.random() * 100) + 1;
  if (a >= b){
  showMessage (`What is ${a}-${b}?`, "bot")
  subtractOrder = "a-b"
  } else {
  showMessage (`What is ${b}-${a}?`, "bot")
  subtractOrder = "b-a"
  }
  inputWrapper.innerHTML = `
      <form id="answerForm"> 
        <label>Answer</label>
        <input id="answer" type="text" />  
        <button id="button" class="send-btn" type="submit"> 
           Send
        </button>
      </form>
    `
  document.getElementById("answerForm").addEventListener("submit", answerInput);
}
//Prints a mathproblem with multiplication
const multiplicationRandom = () => {
  a = Math.floor (Math.random() * 10) + 1;
  b = Math.floor(Math.random() * 10) + 1;
  showMessage (`What is ${a}*${b}?`, "bot")
   inputWrapper.innerHTML = `
      <form id="answerForm"> 
        <label>Answer</label>
        <input id="answer" type="text" />  
        <button id="button" class="send-btn" type="submit"> 
           Send
        </button>
      </form>
    `
  document.getElementById("answerForm").addEventListener("submit", answerInput);
}
//Prints a mathproblem with division
const divisionRandom = () => {
  a = Math.floor (Math.random() * 10) + 1;
  b = Math.floor(Math.random() * 10) + 1;
  c = a*b
  showMessage (`What is ${c}/${a}?`, "bot")
   inputWrapper.innerHTML = `
      <form id="answerForm"> 
        <label>Answer</label>
        <input id="answer" type="text" />  
        <button id="button" class="send-btn" type="submit"> 
           Send
        </button>
      </form>
    `
  document.getElementById("answerForm").addEventListener("submit", answerInput);
}

//Handles the answer
let answerInput = (addInput) => {
addInput.preventDefault(); 
showMessage(`${answer.value}`, "user");
setTimeout(() => checkAnswer(), 1000);
};


let correctAnswer =""

//Checks the answer and replies "correct" or "wrong"
const checkAnswer = () => {
  //ADDITION
  if (typeChoice === "addition"){
    //Calculate the correct answer
    correctAnswer = a+b
    //Checks if the answer is correct
    if (answer.value == correctAnswer){
      showMessage (`That's correct, good job! 🥳`, "bot")
    }
    else {
      showMessage (`Nope, that's incorrect. The answer is ${correctAnswer}.`, "bot")
    }
    //Frågar om du vill köra igen
    setTimeout(() => askNewProblem(), 2000);
  }


  //SUBTRACION
    else if (typeChoice === "subtraction"){
      ////Calculates the correct answerKollar vilket tal som kommer först och ger rätt svar
      if (subtractOrder === "a-b"){
        correctAnswer = a-b
      } else if (subtractOrder === "b-a"){
        correctAnswer = b-a
      }
      //Kollar om svaret är rätt
      if (answer.value == correctAnswer){
      showMessage (`That's correct, good job! 🥳`, "bot")
      } else {
      showMessage (`Nope, that's incorrect. The answer is ${correctAnswer}.`, "bot")
      }
      //Frågar om du vill köra igen
      setTimeout(() => askNewProblem(), 2000);
      
    
    }
  
    

  //MULTIPLICATION
    else if (typeChoice === "multiplication"){
      //Calculates the correct answer
      correctAnswer = a*b
      //Kollar om svaret är rätt
      if (answer.value == correctAnswer){
      showMessage (`That's correct, good job! 🥳`, "bot")
      } else{
      showMessage (`Nope, that's incorrect. The answer is ${correctAnswer}.`, "bot")
      }
    //Frågar om du vill köra igen
      setTimeout(() => askNewProblem(), 2000);

    }

  //DIVISION
    else if (typeChoice === "division"){
    ///Calculates the correct answer
      correctAnswer = c/a
    //Kollar om svaret är rätt
      if (answer.value == correctAnswer){
      showMessage (`That's correct, good job! 🥳`, "bot")
      } else{
      showMessage (`Nope, that's incorrect. The answer is ${correctAnswer}.`, "bot")
      }
  //Frågar om du vill köra igen
    setTimeout(() => askNewProblem(), 2000);
  }
}
 
const askNewProblem = () => {

showMessage (`Do you want to solve another math problem?`, "bot")
    inputWrapper.innerHTML = `
    <button id="yes" type="submit" class="chat-btn">Yes</button>
    <button id="no" type="submit" class="chat-btn">No</button>`
    document.getElementById("yes").addEventListener("click", yesChoice);  
    document.getElementById("no").addEventListener("click", noChoice);
    
   } 

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)

