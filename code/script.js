// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const form = document.getElementById('name-form')
const inputValue = document.getElementById('name-input')

// Global variables, if you need any, declared here

let step = 1;

// Functions declared here






// This function will add a chat bubble in the correct place based on who the sender is
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
    document.getElementById('name-input').value = "";
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}



// Starts here
const greeting = () => {
showMessage(`Hej jag heter Rut och är en digital räknerobot, vad heter du?`, 'bot')
}



// Set up your eventlisteners here

form.addEventListener('submit', (event) => {
  // Prevent default form behaviour after submit - refreshing page
  event.preventDefault();

  // Assign input value to variable
  const userInput = inputValue.value
  
  showMessage(userInput, "user");

  if (step === 1) {
      // Reuse validateResponse() function with value from input AND correct answer (4)
    
      if (userInput === '') {
         showMessage("Ursäkta jag uppfattade inte ditt namn kan du skriva det igen", "bot");
      } else {
          showMessage(`Hej ${userInput}! jag tänkte att vi kunde börja med 2:ans tabell - vet du vad 2*1 är =?`, "bot");
          step = 2;
      }
  } else if (step === 2) {

      if (Number(userInput) === 2) {
          showMessage(`kul rätt svar, vad är 2*2?`, "bot");
          step = 3;
      } else {
          showMessage(`Aj då, det var tyvärr fel - prova igen!`, "bot");
      }
  } else if (step === 3) {
      if (Number(userInput) === 4) {
          showMessage(`tjohej va duktig du är! kan du den här då? 2*3?`, "bot");
          step = 4
      } else {
          showMessage(`åh nej det var fel, testa igen`, "bot");
      }
  } else if (step === 4) {
      if (Number(userInput) === 6) {
          showMessage(`tjohej va duktig du är! kan du den här då? 2*4?`, "bot");
          step = 5
      } else {
          showMessage(`åh nej det var fel, testa igen`, "bot");
  } 
  } else if (step === 5) {
      if (Number(userInput) === 8) {
          showMessage(`Rena rama geniet! kan du den här då? 2*5?`, "bot");
          step = 6
      } else {
          showMessage(`åh nej det var fel, testa igen`, "bot");
  }
     
  } else if (step === 6) {
      if (Number(userInput) === 10) {
          showMessage(`Korrekt! kan du den här då? 2*6?`, "bot");
          step = 7
      } else {
          showMessage(`åh nej det var fel, testa igen`, "bot");
  }
  } else if (step === 7) {
      if (Number(userInput) === 12) {
          showMessage(`Korrekt! kan du den här då? 2*7?`, "bot`);
          step = 8
      } else {
          showMessage(`åh nej det var fel, testa igen`, "bot");
  } 
  } else if (step === 8) {
      if (Number(userInput) === 14) {
          showMessage(`Korrekt! kan du den här då? 2*8?`, "bot");
          step = 9
      } else {
          showMessage(`åh nej det var fel, testa igen`, "bot");
  }
  } else if (step === 9) {
      if (Number(userInput) === 16) {
          showMessage(`Korrekt! kan du den här då? 2*9?`, "bot");
          step = 10
      } else {
          showMessage(`åh nej det var fel, testa igen`, "bot");
  }
  } else if (step === 10) {
      if (Number(userInput) === 18) {
          showMessage(`Korrekt! kan du den här då? 2*10?`, "bot");
          step = 11
      } else {
          showMessage(`åh nej det var fel, testa igen`, "bot");
}


  // Since conversation with bot is finished, let's delete form from HTML
      form.innerHTML = "";
  }
});
  // Check if value from user is correct.
  // If yes, return code between lines 15-19
  // Else, return code between lines 21-25
 
  



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
//greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.

setTimeout(greeting, 1000)
