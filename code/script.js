// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('form') //Should be name-form?
const value = document.getElementById('input-value').value;


// Global variables, if you need any, declared here


// Functions declared here
const showMessage = (message, sender) => {
  if (sender === 'user') {  
  chat.innerHTML += `
    <section class="user-msg">
      <div class="bubble user-bubble">
        <p>${message}</p>
      </div>
      <img src="assets/user.png" alt="User" />  
    </section>
  `
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
}

let step = 0;
// Starts here
const greeting = () => {
  showMessage(`Welcome to your first therapy session! What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
};

setTimeout(greeting, 1000);

// A function to check if the response is right
const validateResponse = (valueFromUser, correctAnswer) => {
  return valueFromUser === correctAnswer;
} 
  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = ''

  const handleConversation = () => {
    event.preventDefault();

    // Reuse handleResponse() function with value from input
    showMessage(value);

    if (step === 1) {
        // Reuse validateResponse() function with value from input AND correct answer (4)
        const isResponseValid = validateResponse(Number(value), 4);
        if (isResponseValid) {
            // Reuse handleResponse() function with success step 1 text
            showMessage('Great job! And what is the value of 5 * 3?');
            step = 2;
        } else {
            // Reuse handleResponse() function with failure step 1 text
            showMessage('Hey, that is not correct value, try again');
        }
    } else if (step === 2) {
        // Reuse validateResponse() function with value from input AND correct answer (15)
        const isResponseValid = validateResponse(Number(value), 15);
        if (isResponseValid) {
            // Reuse handleResponse() function with success step 2 text
            showMessage('Congratulations, you won! Dou feel happy about that?');
            step = 3;
        } else {
            // Reuse handleResponse() function with failure step 2 text
            showMessage('Hey, that is not correct value, try again');
        }
    } else if (step === 3) {
        // Reuse validateResponse() function with value from input AND correct answer ("yes" or "no")
        const isResponseYes = validateResponse(value, "yes");
        const isResponseNo = validateResponse(value, "no");
        if (isResponseYes) {
            // Reuse handleResponse() function with success step 3 text
            showMessage('Great, good to hear that! Bye Bye!');
        } else if (isResponseNo) {
            // Reuse handleResponse() function with success step 3 text
            showMessage("I'm sorry to hear that");
        } else {
            // Reuse handleResponse() function with failure step 3 text
            showMessage("I'm sorry, I do not understand you");
        }

        // Since conversation with bot is finished, let's delete form from HTML
        form.innerHTML = "";
    }
  }; 

  // After 1 second, show the next question by invoking the next function.
	// passing the name into it to have access to the user's name if we want
	// to use it in the next question from the bot.
  setTimeout(() => showFoodOptions(name), 1000)

// This function will add a chat bubble in the correct place based on who the sender is

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight


// Set up your eventlisteners here 
form.addEventListener('submit', handleConversation)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

