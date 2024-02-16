//DOM selectors: 
const chat = document.getElementById("chat")
const nameForm = document.getElementById("name-form")
const nameInput = document.getElementById("name-input")
const button = document.getElementById("button")

const inputWrapper = document.getElementById("input-wrapper")

//Variables:
let userName = ""
let mathType = ""
//Numbers in the math-problems
let a = ""
let b = ""
let c = ""
let subtractOrder = ""
let correctAnswer = ""

//Functions: 
//Adds a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  //Checks if the sender is the user and adds posted message from the user
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    //Checks if the sender is the bot and adds posted message from the bot
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  //Makes the chat scroll to the last message when there are many 
  chat.scrollTop = chat.scrollHeight
}
//Clears the chat window
const clearWindow = () => {
  chat.innerHTML = `
    <section class="bot-msg">
      <img src="assets/bot.png" id="endBot" alt="Bot" />
    </section>
  `
}
// Start the conversation
const greetUser = () => {
  showMessage("Hey, I'm Mathew, the mathbot. Welcome to my wonderful world of math. What's your name?", "bot")
  nameForm.addEventListener("submit", handleNameInput)
}
//Stores the user name
const handleNameInput = (input) => {
  input.preventDefault()
  userName = nameInput.value
  showMessage(`${userName}`, "user")
  nameInput.value = ""
  setTimeout(() => askStartQuestion(), 1000)
}
//Asks if you want to start
const askStartQuestion = () => {
  if (userName == ""){
    showMessage(`I need a name to be able to talk to you. Let's try again - What is your name?`, "bot")
  } else {
    showMessage(`Nice to meet you, ${userName}. Are you ready to solve some math problems?`, "bot")
    //Buttons for answering "yes" or "no"
    inputWrapper.innerHTML = `
      <button id="yes" class="chat-btn" type="submit">Yes</button>
      <button id="no" class="chat-btn" type="submit">No</button>
    `
    document.getElementById("yes").addEventListener("click", handleYes) 
    document.getElementById("no").addEventListener("click", handleNo)
  }
}
//If you answer "no"
const handleNo = () => {
  showMessage(`No`, "user")
  showMessage(`Sorry to hear that, ${userName}. You're welcome back anytime!`, "bot")
  inputWrapper.innerHTML = ``
  setTimeout(() => clearWindow(), 4000)
}
//If you answer "yes"
const handleYes = () => {
  showMessage(`Yes`, "user")
  setTimeout(() => askMathType(), 1000)
}
//Ask what type of question you want
const askMathType = () => {
  showMessage(`What type of math problem do you want to solve?`, "bot")
  inputWrapper.innerHTML = `
    <button id="add" type="submit" class="choice-btn">Addition</button>
    <button id="subtract" type="submit" class="choice-btn">Subtraction</button>
    <button id="multiply" type="submit" class="choice-btn">Multiplication</button>
    <button id="divide" type="submit" class="choice-btn">Division</button>
  `
  document.getElementById("add").addEventListener("click", handleAddition)  
  document.getElementById("subtract").addEventListener("click", handleSubtraction)
  document.getElementById("multiply").addEventListener("click", handleMultiplication)  
  document.getElementById("divide").addEventListener("click", handleDivision)   
}
//If you choose addition
const handleAddition = () => {
  mathType = "addition"
  showMessage (`Addition`, "user")
  setTimeout(() => askAdditionQuestion(), 1000)
}
//If you choose subtraction
const handleSubtraction = () => {
  mathType = "subtraction"
  showMessage (`Subtraction`, "user")
  setTimeout(() => askSubtractionQuestion(), 1000)
}
//If you choose multiplication
const handleMultiplication = () => {
  mathType = "multiplication"
  showMessage(`Multiplication`, "user")
  setTimeout(() => askMultiplicationQuestion(), 1000)
}
//If you choose division
const handleDivision = () => {
  mathType = "division"
  showMessage(`Division`, "user")
  setTimeout(() => askDivisionQuestion(), 1000)
}
//Prints a mathproblem with addition
const askAdditionQuestion = () => {
  a = Math.floor (Math.random() * 100) + 1
  b = Math.floor(Math.random() * 100) + 1
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
  document.getElementById("answerForm").addEventListener("submit", handleAnswer)
}
//Prints a mathproblem with subtraction
const askSubtractionQuestion = () => {
  a = Math.floor (Math.random() * 100) + 1
  b = Math.floor(Math.random() * 100) + 1
  if (a >= b) {
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
  document.getElementById("answerForm").addEventListener("submit", handleAnswer)
}
//Prints a mathproblem with multiplication
const askMultiplicationQuestion = () => {
  a = Math.floor (Math.random() * 11)
  b = Math.floor(Math.random() * 11)
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
  document.getElementById("answerForm").addEventListener("submit", handleAnswer)
}
//Prints a mathproblem with division
const askDivisionQuestion = () => {
  a = Math.floor (Math.random() * 10) + 1
  b = Math.floor(Math.random() * 11)
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
  document.getElementById("answerForm").addEventListener("submit", handleAnswer)
}
//Handle the answer
let handleAnswer = (addInput) => {
  addInput.preventDefault()
  showMessage(`${answer.value}`, "user")
  setTimeout(() => checkAnswer(), 1000)
}
//Checks the answer and replies "correct" or "wrong"
const checkAnswer = () => {
  if (mathType === "addition"){
    correctAnswer = a+b
    if (answer.value == correctAnswer){
      showMessage (`That's correct, good job! 🥳`, "bot")
    } else {
      showMessage (`Nope, that's incorrect. The answer is ${correctAnswer}.`, "bot")
    }
    setTimeout(() => askNewProblem(), 1000)
  } else if (mathType === "subtraction") {
    if (subtractOrder === "a-b") {
      correctAnswer = a-b
    } else if (subtractOrder === "b-a") {
      correctAnswer = b-a
    }
    if (answer.value == correctAnswer) {
      showMessage (`That's correct, good job! 🥳`, "bot")
    } else {
      showMessage (`Nope, that's incorrect. The answer is ${correctAnswer}.`, "bot")
    }
    setTimeout(() => askNewProblem(), 1000)
  } else if (mathType === "multiplication"){
    correctAnswer = a*b
    if (answer.value == correctAnswer){
    showMessage (`That's correct, good job! 🥳`, "bot")
    } else {
    showMessage (`Nope, that's incorrect. The answer is ${correctAnswer}.`, "bot")
    }
    setTimeout(() => askNewProblem(), 1000)
  } else if (mathType === "division"){
    correctAnswer = c/a
    if (answer.value == correctAnswer){
      showMessage (`That's correct, good job! 🥳`, "bot")
    } else {
      showMessage (`Nope, that's incorrect. The answer is ${correctAnswer}.`, "bot")
    }
    setTimeout(() => askNewProblem(), 1000)
  }
}
 
const askNewProblem = () => {
  showMessage (`Do you want to solve another math problem?`, "bot")
  inputWrapper.innerHTML = `
    <button id="yes" type="submit" class="chat-btn">Yes</button>
    <button id="no" type="submit" class="chat-btn">No</button>
  `
  document.getElementById("yes").addEventListener("click", handleYes)  
  document.getElementById("no").addEventListener("click", handleNo)
} 

// Calls for the greeting function one second after the website is loaded.
setTimeout(greetUser, 1000)

