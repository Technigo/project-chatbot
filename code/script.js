// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const nameForm = document.getElementById("name-form")
const nameFormChildren = nameForm.querySelectorAll("*"); // all children i formuläret
let nameInput = document.getElementById('name-input')
const output = document.getElementById('output')
const selectbutton = document.getElementById('selectbutton')

//OK, so first I selected hard coded buttons from the HTML. Later Pernilla showed how to 
//get them dynamic by implementing them in the JS file. 

//const buttonJavaScript = document.getElementById('javascript')
//const buttonPython = document.getElementById('python')
//const buttonJava = document.getElementById('java')




// Functions goes here 👇 
// A function that will add a chat bubble in the correct place based on who the sender is
function showMessage(message, sender) {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        <img src="assets/user.png" alt="User" />  
        </div>
      </section>`

    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>`
  }

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// A function to start the conversation
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage ("Hello there, what's your name?", 'bot')
  } 


//type name in name-input

const handleNameInput = (event) => {
  event.preventDefault()
  const username = nameInput.value
  showMessage(`Hi, I'm ${username}`, 'user')
  let input = nameInput.value = ""
 
//get "Hello 'name' in return 
// Set a timer

 // callback func ()
 setTimeout(() => {
  showMessage(
    `Welcome to week 2, ${username}, nice to meet you. 
    Please pick a programming language that'll make your brain melt 
    and drip out through your nose`,
    'bot'
  );
}, 1000);
 setTimeout(clickButton, 1000)
 }




//when a button is clicked, a message shows accordingly
const clickButton = () => {
//console.log('Test')

nameFormChildren.forEach((child) => {
  // Här körs loopen. Där har du tillgång till child, inte utanför loopen. (Pernilla)
  child.style.display = "none";
});


// Skapa element (Pernillas scope)
  nameForm.innerHTML += `
  <button id="javaScript" type="submit" class="choice-btn">JavaScript</button>
  <button id="python" type="submit" class="choice-btn">Python</button>
  <button id="java" type="submit" class="choice-btn">Java</button>
  `;

  document.getElementById("javaScript").addEventListener('click', nextFunction);
  document.getElementById("python").addEventListener('click', nextFunction);
  document.getElementById("java").addEventListener('click', nextFunction);
}
//Here, I want to create a return message for each button id. 
//Following is my attempt to code this with conditionals:

//if (click === buttonJavaScript){
//return (showMessage(''))
//} else if (click === buttonPython){
//return (showMessage("Ouff.. You're really brave!"))
//} else if (click === buttonJava){
//return (showMessage('You got it, tiger.'))}


const nextFunction = (e) => {
  e.preventDefault();
    showMessage("Attaboy, you got another thing coming!", 'bot'); 
}

//HERE AS A FINAL MESSAGE:
//Something like: "prepare for a bumpy ride, friend! Bye bye"


//Pernillas element, saved for another time:
/* <input type="radio" name="test" id="clickButton" value="clickButton"/><label>Hej</label> */



// Eventlisteners goes here 
nameForm.addEventListener("submit", handleNameInput)

//selectbutton.addEventListener("click", clickButton)

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greetUser, 1000)
//setTimeout(showMessage, 2000)