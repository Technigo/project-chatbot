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
        <img src="assets/useremoji.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log ("The bot is writing")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/botemoji.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  
}

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

//This function makes the questions and answers appear in the correct order. 

const nextLine = (message) => {
  console.log ('lineNumber', lineNumber)

 if (lineNumber === 1) {
    userReply (message) 
    userInput.value = ''    
    setTimeout(() => secondLine (message), 1000)
  } else if (lineNumber === 2) {
    userReply(message)
    userInput.value = ''    
    setTimeout(() => thirdLine (message), 1000) ; 
  } else if (lineNumber === 3) {
    userReply(message)
    userInput.value = ''    
    setTimeout(() => fourthLine (message), 1000) ; 
  } else if (lineNumber === 4) {
    userReply(message)
    userInput.value = '' 
    setTimeout(() => fifthLine (message), 1000) ; 
     } else if (lineNumber === 5) {
    userReply(message)
    userInput.value = '' 
    setTimeout(() => sixthLine (message), 1000) ; 
  } else if (lineNumber === 6) {
    userReply(message)
    userInput.value = ''    
    setTimeout(() => seventhLine (message), 1000) ; 
  } else if (lineNumber === 7) {
    userReply(message)
    userInput.value = ''    
    setTimeout(() => eighthLine (message), 1000) ; 
  } else if (lineNumber === 8) {
    userReply(message)
    userInput.value = ''    
    setTimeout(() => ninthLine (message), 1000) ; 
  } else {
    userReply (message)
    userInput.value=""
    setTimeout(() => tenthLine (message), 1000) ; 

}; 
}

// Starts here


//First reply from bot 
const firstLine = () => {
  lineNumber = 1; 
  botReply(`Knock, knock.`);
}

//Second reply from bot
const secondLine = () => {
lineNumber++;  
botReply(`Tank.`);
} 

//Third reply from bot
  const thirdLine = () => {
  lineNumber++
  botReply(`You're welcome!`);
  setTimeout(() => botReply (`Knock, knock.`), 2000) ; 
  }

  //Fourth reply from bot 
  const fourthLine = () => {
    lineNumber++;  
    botReply(`Boo.`);
  }
  
  //Fitfh reply from bot 
  const fifthLine = () => {
    lineNumber++;  
    botReply(`Don't cry!`);
    setTimeout(() => botReply (`Knock, knock.`), 2000) ; 
  }

  //Sixth reply from bot 
    const sixthLine = () => {
    lineNumber++;  
    botReply(`Ash.`);
  }
  
  //Seventh reply from bot 
  const seventhLine = () => {
    lineNumber++;  
    botReply(`Sounds like you have a cold.`);
    setTimeout(() => botReply (`Knock, knock.`), 2000) ; 
  }
  
  //Eighth reply from bot 
  const eighthLine = () => {
    lineNumber++;  
    botReply(`Who.`);
  }

  //Ninth reply from bot 
  const ninthLine = () => {
    lineNumber++;  
    botReply(`What are you? An owl?`);
    setTimeout(() => botReply (`That's all I have for today.`), 2000) ; 
    setTimeout(() => botReply (`I hope you enjoyed it!`), 3000) ;
  }

  //Tenth reply from bot that I'll use if I have more time to work on the bot. 
  const tenthLine = () => {
    lineNumber++;  
    botReply(`Say whaaaat?`);
  }

// Here is the function for the user's input 

// Set up your eventlisteners here
  //Initial button click from user, here the user enters their question. If someone hits enter it works too.   
userForm.addEventListener('submit', (event) => {
event.preventDefault();

//Store the value in a variable so I can access it after we clear it from the input. 

let userText = userInput.value ; 
userInput.value = '' //Clears input field after submitting

})

//Makes the chat bot move on to the next line.
sendBtn.addEventListener ('click', () => nextLine(userInput.value)) 

userInput.addEventListener('keypress', (event) => {
  if (event.key === 'submit' && userInput.value) nextLine(userInput.value)
  }); 




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
}
  */ 