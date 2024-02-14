// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const button = document.getElementById('button')
const nameForm = document.getElementById("name-form");
const inputWrapper = document.getElementById("input-wrapper");


// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
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
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
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

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// A function to start the conversation
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  showMessage("Hey, I'm Math-ew, the mathbot. Welcome to my wonderful world of math. What's your name?", 'bot')
nameForm.addEventListener("submit", handInput);
}



// Eventlisteners goes here 👇

 //Gives back the name when input
let userName = ""
const handInput = (input) => {
input.preventDefault(); 
userName = nameInput.value;
showMessage(`${userName}`, "user");
nameInput.value = ""; 
setTimeout(() => startQuestion(), 1000);
};

//Bot asks the first question

const startQuestion = () => {
  showMessage(`Nice to meet you, ${userName}. Are you ready to solve some math problems?`, "bot");
    inputWrapper.innerHTML = `
    <button id="yes" type="submit" class="chat-btn">Yes</button>
    <button id="no" type="submit" class="chat-btn">No</button>`
    document.getElementById("yes").addEventListener("click", yesChoice);  
    document.getElementById("no").addEventListener("click", noChoice);
}


const noChoice = () => {
  console.log("nej")
  showMessage(`No`, "user")
  showMessage(`Sorry to hear that, ${userName}. You're welcome back anytime!`, "bot")
};

const yesChoice = () => {
  console.log("Ja")
  showMessage(`Yes`, "user")
  setTimeout(() => choiceQuestion(), 1000);
};

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

const additionChoice = () => {
  console.log("Plus")
  showMessage(`Addition`, "user")
  setTimeout(() => additionRandom(), 1000);
  
}
const subtractionChoice = () => {
  console.log("Minus")
  showMessage(`Subtraction`, "user")
  setTimeout(() => subtractionRandom(), 1000);
}
const multiplicationChoice = () => {
  console.log("Gånger")
  showMessage(`Multiplication`, "user")
  setTimeout(() => multiplicationRandom(), 1000);
}
const divisionChoice = () => {
  console.log("Delat")
  showMessage(`Division`, "user")
  setTimeout(() => divisionRandom(), 1000);
}

const additionRandom = () => {
  let a = Math.floor (Math.random() * 100) + 1;
  let b = Math.floor(Math.random() * 100) + 1;
  showMessage (`What is ${a}+${b}?`, "bot")
  inputWrapper.innerHTML = `
      <form id="answerForm"> 
        <input id="answer" type="text" placeholder="Type your answer here"/>  
        <button id="button" class="send-btn" type="submit"> 
           Send
        </button>
      </form>
    `
  answer = answer.value;
}
const subtractionRandom = () => {
  let a = Math.floor (Math.random() * 100) + 1;
  let b = Math.floor(Math.random() * 100) + 1;
  if (a >= b){
  showMessage (`What is ${a}-${b}?`, "bot")
  } else {
  showMessage (`What is ${b}-${a}?`, "bot")
  }
}
const multiplicationRandom = () => {
  let a = Math.floor (Math.random() * 10) + 1;
  let b = Math.floor(Math.random() * 10) + 1;
  showMessage (`What is ${a}*${b}?`, "bot")
}
const divisionRandom = () => {
  let a = Math.floor (Math.random() * 10) + 1;
  let b = Math.floor(Math.random() * 10) + 1;
  let c = a*b
  showMessage (`What is ${c}/${a}?`, "bot")
}

/*
const mathTask = () => {
let answer = ""
 
inputWrapper.innerHTML = `
    <button id="yes" type="submit" class="chat-btn">Yes</button>
    <button id="no" type="submit" class="chat-btn">No</button>`
nameForm.addEventListener("submit", handInput);
  if (answer == a+b){
  alert(`That's correct`)
  } else{
  alert(`Nope, try again`)
  }
}
}
/*
MATH PROBLEM

let a = Math.floor (Math.random() * 10) + 1;
let b = Math.floor(Math.random() * 10) + 1;

const mathTask = () => {
let answer = (
  prompt (`What is ${a}*${b}?`)
)
  if (answer == a*b){
  alert(`That's correct`)
  } else{
  alert(`Nope, try again`)
  }
}

mathTask ()
*/




// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000)

