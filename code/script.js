// Variables that point to selected DOM elements
document.addEventListener('DOMContentLoaded', ()=> {
  //const chat = document.getElementById('chat');
  const nameForm = document.getElementById('name-form');
  let userInput = '';
  let questionCounter = 0;


  // This function will add a chat bubble in the correct place based on who the sender is
  const showMessage = (message, sender) => {
    if (sender === 'user') {
      console.log("userMessage")
      chat.innerHTML += `
        <section class="user-msg">
          <div class="bubble user-bubble">
            <p>${message}</p>
          </div>
          <img src="assets/user.png" alt="User" />  
        </section>
      `
    } else if (sender === 'bot') {
      console.log("botMessage")
      chat.innerHTML += `
        <section class="bot-msg">
          <img src="assets/bot.png" alt="Bot" />
          <div class="bubble bot-bubble">
            <p>${message}</p>
          </div>
        </section>
      `
    }
    chat.scrollTop = chat.scrollHeight;
  }

  const readUserInput = () => {
    const userInput = document.getElementById('name-input').value;
    // userInput.value = '';
    nameForm.reset();
    return userInput;
  }

  // Starts here
  const greeting = () => {
    showMessage("Hello SUN, want some pizza?", 'bot');
  }
  setTimeout(greeting, 1000);

  // -1. Listen for the form submit event
  // Set up your eventlisteners here
  nameForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    userInput = readUserInput();
    showMessage(userInput, 'user');
    if (questionCounter === 0) {
      if (userInput === 'yes') {
          showMessage('Veggie or meat?', 'bot');
          questionCounter ++;
      } else {
          showMessage('Good bye!', 'bot');
      }
      // questionCounter = questionCounter + 1;
  } else if (questionCounter === 1) {
      if (userInput === 'Veggie') {
          showMessage('Margherita or Vegetariana?', 'bot');
      } else {
          showMessage('Capricciosa or Kebabpizza?', 'bot');
      }
      questionCounter += 1;
  }
  });

  // -2. When the form is submitted, post the value from the text input as a message from the user
  //Den här TROR vi är överflödig
  //const userAnswer1 = () => {
  //  showMessage("name", 'user');
  
  // -3. Progress the app to the next question. 
});
