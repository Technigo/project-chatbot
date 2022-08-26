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

  /*
  B: Hello SUN, want some pizza?
  U: Yes
  B: Veggie or meat?
  U: Veggie
    => Margherita or Vegetariana?
     Meat
     => Capricciosa or Kebabpizza?
  B: Excellent choice! Pick up your order in 15 minutes :)
  B: Thank you for using PizzaBot!

  U: No
    => Good bye!
  
  U: else than "Yes" or "No"
    => I'm sorry, I don't understand. Please answer with a Yes or No :)
  */

  const greeting = () => {
    showMessage("Hello SUN, want some pizza?", 'bot');
  }
  setTimeout(greeting, 1000);

    nameForm.addEventListener('submit', (event)=> {
      event.preventDefault();
      userInput = readUserInput();
      showMessage(userInput, 'user');


      if (questionCounter === 0) {
        if (userInput === 'Yes') {
          showMessage('Veggie or Meat?', 'bot');}
          else if (userInput === 'No') {
          showMessage('Good bye!', 'bot');} 
          else if (userInput !== 'Yes' || 'No'){
          showMessage("I'm sorry, I don't understand. Please answer with a Yes or No.", 'bot');
          }
        questionCounter +1;
      }

      else if (questionCounter === 1) {
        if (userInput === 'Veggie') {
          showMessage('Margherita or Vegetariana?', 'bot');}
          else if (userInput === 'Meat') {
          showMessage('Capricciosa or Kebabpizza?', 'bot');}
          else if (userInput !== 'Veggie' || 'Meat'){
          showMessage("I'm sorry, I don't understand. Please answer with a Veggie or Meat.", 'bot');
          }
        questionCounter +1;
      }
      
      else if (questionCounter === 2) {
        if (userInput === 'Margherita' || 'Vegetariana' || 'Capricciosa' || 'Kebabpizza') {
          showMessage('Excellent choice! Pick up your order in 15 minutes.', 'bot');
          showMessage('Thank you for using PizzaBot!', 'bot');}
          else if (userInput !== 'Margherita' || 'Vegetariana' || 'Capricciosa' || 'Kebabpizza'){
          showMessage("I'm sorry, I don't understand. Please answer with a pizza name.", 'bot');
          }  
        questionCounter +1;
      }


      /*else if (questionCounter === 3) {
          showMessage('Thank you for using PizzaBot!', 'bot');
      }
        */questionCounter += 1;
    
    });
 
});
