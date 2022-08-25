// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const form = document.getElementById("name-form");
const nameInput = document.getElementById("name-input")

// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    
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
// Bot: Hi! What's your name?

const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hi Friend, What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

// User: Replies with name

const handleNameInput = (event) => {
  event.preventDefault()
  
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const name = nameInput.value
  showMessage(name, 'user')
  showMessage(`So ${nameInput.value} I understand that your’re done watching a TV show and are looking for something new to watch?`, 'bot') // Bot: Are you looking for something new to watch?
  nameInput.value = ''
  inputWrapper.innerHTML = // add Yes No button
    `<button id="yesBtn" type="submit">Yes</button>
    <button id="noBtn" type="submit">No</button>`

    document
    .getElementById('yesBtn')
    .addEventListener('click', () => {
      showMessage('YES', 'user');
    showMessage('What kind of TV show would you like to see??', 'bot');
      nextFunction('yes') //call next function with a parameter for yes
    //showMessage('What kind of TV show would you like to see?', 'bot');
    })

    document
    .getElementById('noBtn')
    .addEventListener('click', () => {
      showMessage('No thank you, goodbye', 'user')
      showMessage('Thank you, have a good day!', 'bot')
      nextFunction('no') //call next function with a parameter for no
    }) 
}






// User: YES / NO



// Bot: (If Yes) What kind of TV show would you like to see?



// User: DRAMA / THRILLER / COMEDY




// Set up your eventlisteners here

form.addEventListener('submit', handleNameInput);

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);

