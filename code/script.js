// Variables that point to selected DOM elements 
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const choiceBtn1 = document.getElementById('choiceBtn1');
const choiceBtn2 = document.getElementById('choiceBtn2');

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
    `;
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  chat.scrollTop = chat.scrollHeight;
};


// Function greets the user, asking for name.
const greetUser = () => {
  showMessage(`Hello there, What's your name?`, 'bot');
};

// Function storing the name of the user.
const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  showMessage(`${name}`, 'user');

  // Function displaying the name of the user in a ShowMessage.
  setTimeout(() => {
    showMessage(`Hello ${name} nice to meet you!`, 'bot');
    nameInput.value = "";

    // If Btn1 is pressed, dysplay:
    const handlechoiceBtn1 = (event, name) => {
      event.preventDefault();
      showMessage(`mmm, yellow snacks!`, 'bot');

      setTimeout(() => {
        showMessage(`So, I guess you like yellow snacks, huh?`, 'bot');
      }, 2000);
    };

    // else if Btn2 is pressed, dysplay:
    const handlechoiceBtn2 = (event, name) => {
      event.preventDefault();
      showMessage(`mmm, blue snacks!`, 'bot');

      setTimeout(() => {
        showMessage(`So, I guess you like blue snacks, huh?`, 'bot');
      }, 2000);
    };


    setTimeout(() => {
      showMessage(`So, ${name} what would you like to order today?`, 'bot');
      choiceBtn1.style.display = 'block';
      choiceBtn2.style.display = 'block';
      inputWrapper.style.display = 'none';

      choiceBtn1.onclick = (event) => {
        handlechoiceBtn1(event, name);
        choiceBtn1.style.display = 'none';
        choiceBtn2.style.display = 'none';
        inputWrapper.style.display = 'block';
      };
      choiceBtn2.onclick = (event) => {
        handlechoiceBtn2(event, name);
        choiceBtn1.style.display = 'none';
        choiceBtn2.style.display = 'none';
        inputWrapper.style.display = 'block';
      };
    }, 1500);
  }, 1000);
};
// Event listener, when user press enter.
nameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleNameInput(event);
  }
});

// When website loaded, chatbot asks first question.
setTimeout(greetUser, 1000);
