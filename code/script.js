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

  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hi there! Welcome to Movie-Bob, the friendly movie picking bot. What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

const ageQuestion = () => {
  showMessage('Nice to meet you! How old are you?', 'bot')
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
      showMessage('Ah, then I suggest Frozen. It is a great movie for the entire family. Let it go, let it gooo!',`bot`)
    } else if (userAge <=18){
      showMessage('In your age it is perfect with a coming of age movie. I recommend Breakfast Club.',`bot`)
    } else{
      showMessage('Great! I recommend Once upon a time in America. If you are in the mood for Leo DiCaprio, but not in the mood for blood - you could go with Titianic instead.', `bot`)
    }




    nameForm.innerHTML = `<button id="reset">Reset</button>`
    const reset = document.getElementById(`reset`);
    reset.addEventListener(`click`, resetForm);
    
  }

  

}


// The eventlisteners 
form.addEventListener('submit', handleNameInput)
form.addEventListener(`submit`, (event) => {
  event.preventDefault();
});


setTimeout(greeting, 1000)



