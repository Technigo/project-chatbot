// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const sendBtn = document.getElementById('send');


// If you need any global variables that you can use across different functions, declare them here:



// Declare your functions after this comment

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
  showMessage("Greetings stranger! What's your name?", 'bot');
};

setTimeout(greetUser, 1000);


//user answer: name
const userAnswer = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = null;
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
}

//question 1 function (if yes)
const q1 = () => {
  showMessage("Ok, let's start with an easy one: What's the name of the Swedish Prime Minister?", 'bot');
  chat.innerHTML +=
  `<div class="q1Wrapper" id="q1Wrapper">
    <button id="olof" class= "q1a1Button q1Button">Olof Palme</button>
    <button id="magdalena" class= "q1a2Button q1Button">Magdalena Andersson</button>
    <button id="ulf" class= "q1a2Button q1Button">Ulf Kristersson</button>
  </div>`
}

//if answer is no make bot say "Some other time then. Have a nice day!"
const noPlay = () => {
  chat.innerHTML += `
  <p>That's too bad!</p>
  <img src="sad dog.jpg" alt="sad dog">
  `
};

//Make if-statement: If answer is correct, give score and move to next question, else just go to next. After last question show scoreboard.