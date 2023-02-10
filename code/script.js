// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper')
const nameForm = document.getElementById('name-form')

// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') { console.log('let\'s hope they\'re nice clients')
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') { console.log('It\'s a robot speaking');
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p> ${message} </p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greetUser = () => {
  // here we call the function showMessage that we declared earlier, with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello stanger. What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

const question2 = (name) => {
  // here we call the function showMessage that we declared earlier, with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage(`Do you like cookies ${name}?`, 'bot');
  nameForm.innerHTML = `
  <button id='no'> Nope </button>
  <button id='yes'> Yes, yes and Super yes!</button>`

  document.getElementById('yes').addEventListener('click',superyes)
  document.getElementById('no').addEventListener('click',superno)
}

const superyes = (event) => { 
  showMessage('Super yes','user');
  showMessage(`You are in the right place!`, 'bot');
  nameForm.innerHTML = `
  <label for="name-input">DMs for the dark side</label>
          <input id="name-input" type="text" />
          <button class="send-btn" type="submit">
            Send
          </button>`        
  event.preventDefault() 
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  
  
  // After 1 second, show the next question by invoking the next function.
	// passing the name into it to have access to the user's name if we want
	// to use it in the next question from the bot.
  setTimeout(whichCookies, 900);
  
}

const superno = (event) => { 
  showMessage('Nope','user');
  setTimeout(() =>showMessage(`You say no and computer says no.`, 'bot'),1000);
  setTimeout(() =>showMessage(`The dark side doesn't accept cookie haters.`, 'bot'),1500);
  setTimeout(() =>showMessage(`Goodbye`, 'bot'),2000);
  setTimeout(() =>
  nameForm.innerHTML = `
  <label for="name-input">DMs for the dark side are now closed</label>`,1000);
       
  event.preventDefault() 
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  
  
  // After 1 second, show the next question by invoking the next function.
	// passing the name into it to have access to the user's name if we want
	// to use it in the next question from the bot.
  
  
}

const whichCookies = () => {
  showMessage("What's your favourite cookie?", 'bot');
  nameForm.innerHTML = `
  <select id="select">
        <option value="" selected="" disabled=""> Select a cookie...</option>
        <option value="Chocolate">Chocolate cookie</option>
        <option value="Vegan">Vegan cookie</option>
        <option value="Rainbow">Rainbow cookie</option>
      </select>`

  document.getElementById('select').addEventListener('change',finalAnswer)    
  
}

const finalAnswer = (event) => {
  //event.target.value
  showMessage(event.target.value,'user');
  if (event.target.value === "Chocolate") {
  setTimeout(() =>showMessage(`${event.target.value} - great choice! The Dark Post will get you some by sunrise.`, 'bot'),1000);
}

else if (event.target.value === "Vegan") {
  setTimeout(() =>showMessage(`${event.target.value}. Lucky for you the Dark side is inclusive.`, 'bot'),1000);
  setTimeout(() =>showMessage('The Dark Post will get you some chocolate cookies by sunrise despite your ethical choices.', 'bot'),1200);
}

else {
  setTimeout(() =>showMessage('This was a trick question, there is no rainbow. The Dark Post will get you some chocolate cookies by sunrise. ', 'bot'),1000);
}
  setTimeout(() =>showMessage('Courstesy of the Dark Side', 'bot'),1500);
  setTimeout(() =>showMessage('Don\'t be a stranger!', 'bot'),2000);
  setTimeout(() =>
  nameForm.innerHTML = `
  <label for="name-input">The dark side will be in touch</label>`,1000);


}

// Set up your eventlisteners here
const handleNameInput = (event) => { 
  event.preventDefault() 
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = '' 
  
  // After 1 second, show the next question by invoking the next function.
	// passing the name into it to have access to the user's name if we want
	// to use it in the next question from the bot.
  setTimeout(() => question2 (name), 1000);
  
}






form.addEventListener('submit', handleNameInput);



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 967);
