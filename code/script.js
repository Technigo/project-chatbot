// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById ('sendBtn'); 
const inputWrapper = document.getElementById ('inputWrapper'); 
const userForm = document.getElementById ('userForm') ; 

// If you need any global variables that you can use across different functions, declare them here:

let lineNumber = 1; 

const botReply = (msg) => {
  showMessage (msg, 'bot') ; 
}

const userReply = (msg) => {
  showMessage (msg, 'user') ; 
}

// Declare your functions after this comment


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("The user is asking a question")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log ("The bot is writing")
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
  chat.scrollTop = chat.scrollHeight;
}

const nextLine = (message) => {
  console.log ('lineNumber', lineNumber)

 if (lineNumber === 1) {
    userReply (message) 
    userInput.value = ''    
    setTimeout(() => secondLine (message), 1000)
    console.log ('user input 1') ; 
  } else if (lineNumber === 2) {
    userReply(message)
    userInput.value = ''    
    console.log ('user input 2')
    setTimeout(() => thirdLine (message), 1000)
  } else if (lineNumber === 3) {
    userReply(message)
    userInput.value = ''    
    console.log ("user input 3")
  } else {
    userReply(Message)
    console.log ("I couldn't understand your message"); 
  }
}; 

// Starts here


//First reply from bot 
const firstLine = () => {
  lineNumber = 1; 
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  botReply(`Knock knock`);
}

//Answer from the user

//Second reply from bot
const secondLine = () => {
lineNumber++;  
botReply(`Tank`);
} 

//Answer from the user

//Third reply from bot
  const thirdLine = () => {
  lineNumber++
    // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  botReply("You're welcome!");
  }



  // Here is the function for the user's input 


//Store the value in a variable so I can access it after we clear it from the input. 


// Set up your eventlisteners here
  //Initial button click from user, here the user enters their question. If someone hits enter works too.   
userForm.addEventListener('submit', (event) => {
event.preventDefault();
console.log("form submitted");

let userText = userInput.value ; 
userInput.value = '' //Clears input field after submitting
})

sendBtn.addEventListener ('click', () => nextLine(userInput.value)) 

userInput.addEventListener('keypress', (event) => {
  if (event.key === 'submit' && userInput.value) nextLine(userInput.value)
})







// When website loaded, chatbot asks first question.
setTimeout (firstLine, 1000)

// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

/*

//Detta tog jag bort för att förhindra att det kom ett extra tomt meddelande från user:     
setTimeout(() => secondLine (message), 1000)


if (userText === ""){
  botReply (`Say whaat?`); 
  return; 
  
  nextLine ()
}; 

   sendBtn.addEventListener('click', (event) => {
event.preventDefault(); //prevents the page to reload. 

  */