document.addEventListener('DOMContentLoaded', () => {
const chat = document.getElementById('chat');
  const inputWrapper = document.getElementById('input-wrapper');
  const form = document.getElementById('name-form')
  const nameInput = document.getElementById('name-input');

  let userInput = " ";
  let question = 0; 

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
  
    const readNameInput= ()=>{
   nameInput.value
    form.reset();
    // return userInput 

    }

    // const botChat=(botQuestion, answerFromUser, botAnswer)=>{
    //   addMessageTochat(botQuestion,'bot');
    //   if(userInput === answerFromUser){
    //     handleMessage(botAnswer, 'bot');
    //   }else{}
    // }


  const greeting = (botQuestion, userAnswer, botResponse) => {
    // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender

    showMessage("Hello there, What's your name?", 'bot');
    showMessage(`${nameInput.value}`,'user' );
    // showMessage('What do you want to eat today? ', 'bot')
    // handleMessage();
    // Just to check it out, change 'bot' to 'user' here 👆
  }

  const handleMessage = (e) => {
    e.preventDefault();
    showMessage(nameInput.value, 'user');
    // showMessage(`${nameInput.value} What do you prefer to eat for today?`, 'bot');
  }
  setTimeout(greeting, 1000);

})
    