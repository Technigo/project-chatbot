document.addEventListener('DOMContentLoaded', () => {
  const chat = document.getElementById('chat');
  const inputWrapper = document.getElementById('input-wrapper');
  const nameInput = document.getElementById('name-input');
  const sendButton = document.querySelector('.send-btn');


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
    chat.scrollTop = chat.scrollHeight;
  }

  // Greeting start
  const greeting = () => {
    // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
    showMessage("Hello there, What's your name?", 'bot');

  }

  // Eventlisteners 
  sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    showMessage(name, 'user');
    setTimeout(() => askNextQuestion(name), 2000)

  })

  function askNextQuestion() {
    setTimeout(() => showMessage(` ${nameInput.value} , What do you want to eat today? `, 'bot'), 1000)
    sendButton.remove();
    setTimeout(() => pizzaPastaButtons(), 1000);
  } 

  // Two buttnos appear
  const pizzaPastaButtons = () => {
    inputWrapper.innerHTML = `
    <button id="pizzabtn">Pizza</button>
    <button id="pastabtn">Pasta</button>
    `
    document.getElementById('pizzabtn').addEventListener('click', () => ShowFoodAlternative('Pizza'));

    document.getElementById('pastabtn').addEventListener('click', () => ShowFoodAlternative('Pasta'));

  }

  const ShowFoodAlternative = (food) => {
    showMessage(`${food}`, 'user')
    setTimeout(() => showMessage(`${food}, Nice choice! `, 'bot'), 1000);
   
    setTimeout(()=>confirmationButton(), 2000 )
    
  }

  const confirmationButton = () => {

    showMessage(`Great! That would be 15$. Are you sure you want to order it?`, 'bot')
    inputWrapper.innerHTML = `
    <button id="yesbtn">Yes</button>
    <button id="nobtn">No</button>
    `
    document.getElementById('yesbtn').addEventListener('click', () => nextFunction('yes')

  )
    document.getElementById('nobtn').addEventListener('click', () => nextFunction('no'))

  }

    const nextFunction = (option) => {
      if (option === 'yes') {
        showMessage('Yes', 'user')
        showMessage('Thank you for your order! See you soon 👋🏼', 'bot')
      }
      else {
        showMessage('bye', 'bot')
      }

  }


  setTimeout(greeting, 1000);
})