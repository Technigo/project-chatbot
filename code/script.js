// DOM selectors goes here 
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const button = document.getElementById('button')
const nameForm = document.getElementById("name-form");
const inputWrapper = document.getElementById("input-wrapper");


// Functions goes here 

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // Checks if the sender is the user and adds posted message from the user
  if (sender === 'user') {
    console.log ("Message:" + message)
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

 //Gives back the name when input
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
  showMessage(`Nice to meet you, ${userName}. Are you ready to solve some math problems?`, "bot");
  //Buttons for answering "yes" or "no"
    inputWrapper.innerHTML = `
    <button id="yes" type="submit" class="chat-btn">Yes</button>
    <button id="no" type="submit" class="chat-btn">No</button>`
    document.getElementById("yes").addEventListener("click", yesChoice);  
    document.getElementById("no").addEventListener("click", noChoice);
}

//If you answer "no"
const noChoice = () => {
  console.log("nej")
  showMessage(`No`, "user")
  showMessage(`Sorry to hear that, ${userName}. You're welcome back anytime!`, "bot")
};
//If you answer "yes"
const yesChoice = () => {
  console.log("Ja")
  showMessage(`Yes`, "user")
  setTimeout(() => choiceQuestion(), 1000);
};
//Ask what type of question you want
const choiceQuestion = () => {
  showMessage(`What type of math problem do you want to solve?`, "bot");
    inputWrapper.innerHTML = `
    <button id="add" type="submit" class="chat-btn">Addition</button>
    <button id="subtract" type="submit" class="chat-btn">Subtraction</button>
    <button id="multiply" type="submit" class="chat-btn">Multiplication</button>
    <button id="divide" type="submit" class="chat-btn">Division</button>`
    document.getElementById("add").addEventListener("click", additionChoice);  
    document.getElementById("subtract").addEventListener("click", subtractionChoice);
    document.getElementById("multiply").addEventListener("click", multiplicationChoice);  
    document.getElementById("divide").addEventListener("click", divisionChoice);
    
}

let typeChoice = ""

const additionChoice = () => {
  console.log("Plus")
  typeChoice = "addition"
  showMessage(`Addition`, "user")
  setTimeout(() => additionRandom(), 1000);
}
const subtractionChoice = () => {
  console.log("Minus")
  typeChoice = "subtraction"
  showMessage(`Subtraction`, "user")
  setTimeout(() => subtractionRandom(), 1000);
}
const multiplicationChoice = () => {
  console.log("Gånger")
  typeChoice = "multiplication"
  showMessage(`Multiplication`, "user")
  setTimeout(() => multiplicationRandom(), 1000);
}
const divisionChoice = () => {
  console.log("Delat")
  typeChoice = "division"
  showMessage(`Division`, "user")
  setTimeout(() => divisionRandom(), 1000);
}

let a = ""
let b = ""
let c = ""

const additionRandom = () => {
  a = Math.floor (Math.random() * 100) + 1;
  b = Math.floor(Math.random() * 100) + 1;
  showMessage (`What is ${a}+${b}?`, "bot")
  inputWrapper.innerHTML = `
      <form id="answerForm"> 
        <input id="answer" type="text" placeholder="Type your answer here"/>  
        <button id="button" class="send-btn" type="submit"> 
           Send
        </button>
      </form>
    `
  document.getElementById("answerForm").addEventListener("submit", answerInput);
}

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
        <input id="answer" type="text" placeholder="Type your answer here"/>  
        <button id="button" class="send-btn" type="submit"> 
           Send
        </button>
      </form>
    `
  document.getElementById("answerForm").addEventListener("submit", answerInput);
}

const multiplicationRandom = () => {
  a = Math.floor (Math.random() * 10) + 1;
  b = Math.floor(Math.random() * 10) + 1;
  showMessage (`What is ${a}*${b}?`, "bot")
   inputWrapper.innerHTML = `
      <form id="answerForm"> 
        <input id="answer" type="text" placeholder="Type your answer here"/>  
        <button id="button" class="send-btn" type="submit"> 
           Send
        </button>
      </form>
    `
  document.getElementById("answerForm").addEventListener("submit", answerInput);
}

const divisionRandom = () => {
  a = Math.floor (Math.random() * 10) + 1;
  b = Math.floor(Math.random() * 10) + 1;
  c = a*b
  showMessage (`What is ${c}/${a}?`, "bot")
   inputWrapper.innerHTML = `
      <form id="answerForm"> 
        <input id="answer" type="text" placeholder="Type your answer here"/>  
        <button id="button" class="send-btn" type="submit"> 
           Send
        </button>
      </form>
    `
  document.getElementById("answerForm").addEventListener("submit", answerInput);
}


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
    console.log(answer)
    //Calculate the correct answer
    correctAnswer = a+b
    //Checks if the answer is correct
    if (answer.value == correctAnswer){
      showMessage (`That's correct, good job! 🥳`, "bot")
    } else{
      showMessage (`Nope, that's incorrect. The answer is ${correctAnswer}`, "bot")
    }
    //Frågar om du vill köra igen
    setTimeout(() => askNewProblem(), 2000);
  }


  //SUBTRACION
    else if (typeChoice === "subtraction"){
      console.log(answer)
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
      showMessage (`Nope, that's incorrect. The answer is ${correctAnswer}`, "bot")
      }
      //Frågar om du vill köra igen
      setTimeout(() => askNewProblem(), 2000);
      
    
    }
  
    

  //MULTIPLICATION
    else if (typeChoice === "multiplication"){
      console.log(answer)
      //Calculates the correct answer
      correctAnswer = a*b
      //Kollar om svaret är rätt
      if (answer.value == correctAnswer){
      showMessage (`That's correct, good job! 🥳`, "bot")
      } else{
      showMessage (`Nope, that's incorrect. The answer is ${correctAnswer}`, "bot")
      }
    //Frågar om du vill köra igen
      setTimeout(() => askNewProblem(), 2000);

    }

  //DIVISION
    else if (typeChoice === "division"){
      console.log(answer)
    ///Calculates the correct answer
      correctAnswer = c/a
    //Kollar om svaret är rätt
      if (answer.value == correctAnswer){
      showMessage (`That's correct, good job! 🥳`, "bot")
      } else{
      showMessage (`Nope, that's incorrect. The answer is ${correctAnswer}`, "bot")
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

