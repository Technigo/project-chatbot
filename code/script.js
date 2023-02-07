// Variables that point to selected DOM elements, in this case it's the HTML element named chat. It is also called chat when its a variable in this JS document.
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const form = document.getElementById('name-form')

// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment
const handleNameInput = (event) => {
  event.preventDefault() //prevents the page from refreshing
  //Store the value in a variable so we can access it after we clear it from the input
  const name = nameInput.value; //input of name is stored in variable in name
  showMessage(name, 'user'); //shows message that the user typed in
  nameInput.value = ''; //clears form

  //After 1 second, show the next question by invoking the next function. Passin the name into it to have access to the user's name if we want to use it in the next question from the bot. 
  setTimeout(() => showFoodOptions(name), 1000);
  
  //I'm assuming that showFoodOptions is another function that is supposed to be triggered. 
  
}


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
    //Above, we get ahold of chat and add som innerHTML using += (add something to it). The show message function will be re-used several times. The innerHTML section will be added to the chat-section in the HTML-dokument. 
    
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log("Hej")
    
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

// The program actually starts over here, above are the functions that are being called.
// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
  showMessage("");
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);


form.addEventListener("submit", handleNameInput);
//funktion för att visa meddelandet