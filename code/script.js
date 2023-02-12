// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const form = document.getElementById('form')
const inputWrapper = document.getElementById('input-wrapper')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')
const nameInput = document.getElementById('name-input')



// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

const botReply = (message) => {
  showMessage(message, 'bot')
}

const userReply = (message) => {
  showMessage(message, 'user')
}
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log('user is typing')
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
    console.log('bot is typing')
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





// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("What's your stupid freakin' name???", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆 
}

const handleNameInput = (event) => {
  event.preventDefault()
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = ''

  setTimeout(() => showYesNo (name), 500);
}
// Second bot question and user answer
const showYesNo = (name) => {
  showMessage(`${name}? That's a lame name, dude. Did your mommy and daddy choose that for you?`, 'bot');
  
  inputWrapper.innerHTML = `
    <button id="yesBtn" type='button'>Yes</button>
    <button id="noBtn" type='button'>No</button>`
    
  document
    .getElementById('yesBtn').addEventListener('click', Yes)
  document
    .getElementById('noBtn').addEventListener('click', No)
    
}
       
  const Yes = () => {
    showMessage("Yes, actually.", 'user')
    showMessage("Don't care, didn't ask", 'bot')
  
    setTimeout(lunchMoney, 500)
}

  const No = () => {
    showMessage("Nope! I chose it for myself.", 'user')
    showMessage("What a weirdo!", 'bot')
    setTimeout(lunchMoney, 500)
}



// Third interaction between bot and user
const lunchMoney = (event) => {
  showMessage("Give me your lunch money, nerd!", 'bot')
  
  inputWrapper.innerHTML = `
    <button id="giveMoney" type='button'>Okay fine!</button>
    <button id="keepMoney" type='button'>Hell no!</button>`
    
  document
    .getElementById('giveMoney').addEventListener('click', giveMoney)
  document
    .getElementById('keepMoney').addEventListener('click', keepMoney)
    

    event.preventDefault()
  }

  const giveMoney = () => {
    showMessage("Okay fine! Just please don't hurt me!", 'user')
    setTimeout(showDropdown, 500)
  }
  const keepMoney = () => {
    showMessage("Hell no! You're just a BULLY!", 'user')
    setTimeout(showDropdown, 500)
  }

  const showDropdown = () => {
    showMessage("What are you gonna do now, loser?", 'bot');
    inputWrapper.innerHTML = `
    <select id="select">
          <option value="" selected="" disabled="">Select your fate...</option>
          <option value="Cry">*Start crying*</option>
          <option value="Tattle"*Run and tell someone*</option>
          <option value="Fight"*Raise your fist in retaliation*</option>
    </select>`

      document.getElementById('select').addEventListener('change', Ending)
     
    } 

const Ending = (event) =>{
  showMessage(event.target.value,'user');
  if (event.target.value === "Cry") {
  setTimeout(() =>showMessage("Oh my god, shut up! You're so annoying", 'bot'),1000);
}

else if (event.target.value === "Tattle") {
  setTimeout(() =>showMessage("You just made a huge mistake!", 'bot'),1000);
 
}

else {
  setTimeout(() =>showMessage("Ha, you're joking right? You're so dead.", 'bot'),1000);
}
 
  setTimeout(() =>
  inputWrapper.innerHTML = `
  <label for ="name-input">You have been knocked out by BullyBot</label>`,1000);


}



// Set up your eventlisteners here


inputWrapper.addEventListener('submit', handleNameInput);
inputWrapper.addEventListener('button', showYesNo)
inputWrapper.addEventListener('button', lunchMoney)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greetUser, 500);
