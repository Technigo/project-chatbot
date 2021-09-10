// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('nameForm')
const inputValue = document.getElementById('nameInput')

// Global variables, if you need any, declared here

let currentQuestion = "question1";
// Functions declared here


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log('user is sending')

    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log('bot is sending')

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
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Howdy there, what's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const ageQuestion = () => {
  showMessage('How old are you?', 'bot')
  currentQuestion =`question2`
}

const resetForm = () => {
  location.reload();
};

const handleNameInput = () => {  //handle the nameinput
  let message = document.getElementById("nameInput").value;

  if (currentQuestion === "question1") {
    // const name = message;     //get the value from the user
    showMessage(message, 'user')
    inputValue.value = '' //får fältet att bli tomt efter att vi skrivit vårt namn
    setTimeout(ageQuestion, 1000)
  }
  else if (currentQuestion === "question2") {
    userAge = message;
    showMessage(message,`user`)

    if (userAge<= 7){
      showMessage('We recommend Frozen it is a great for the entire family!',`bot`)
    } else if (userAge <=16){
      showMessage('We recommend Titanic it is a classic!',`bot`)
    } else{
      showMessage('We recommend Once upon a time in America it is one of my favorites!', `bot`)
    }
    nameForm.innerHTML = `<button id="reset">Reset</button>`

    const reset = document.getElementById(`reset`);
    reset.addEventListener(`click`, resetForm);
  }


  



  //här börjar nästa fråga från boten
  //wrappar den med tidsfördröjningen. Settimeout for every question.
  

}


// Set up your eventlisteners here
form.addEventListener('submit', handleNameInput)
form.addEventListener(`submit`, (event) => {
  event.preventDefault();
});





// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)



