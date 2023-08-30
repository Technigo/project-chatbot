// Variables that point to selected DOM elements 
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const ageInput = document.getElementById('name-input');
const choiceBtn1 = document.getElementById('choiceBtn1');
const choiceBtn2 = document.getElementById('choiceBtn2');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const dropDown = document.getElementById('dropDown');

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
  showMessage(`Hello there, welcome to the evaluation sheet! 
  We are really happy that you take your time to answer some questions
  in order for us to improve our service.`, 'bot');
  setTimeout(() => {
    showMessage(` First of all, what's your name?`, 'bot');
  }, 4000);
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

    // Function asking for age, displaying Btn1, Btn2 as a block elements.
    setTimeout(() => {
      showMessage(`So, ${name} how old are you?`, 'bot');
      choiceBtn1.style.display = 'block';
      choiceBtn2.style.display = 'block';
      inputWrapper.style.display = 'none';

      // hides buttons after clicking it
      choiceBtn1.onclick = (event) => {
        handlechoiceBtn(event, name, 'under 18');
        choiceBtn1.style.display = 'none';
        choiceBtn2.style.display = 'none';
        inputWrapper.style.display = 'block';
      };
      choiceBtn2.onclick = (event) => {
        handlechoiceBtn(event, name, 'over 18');
        choiceBtn1.style.display = 'none';
        choiceBtn2.style.display = 'none';
        inputWrapper.style.display = 'block';
      };

      // Functions answer if under 18:
      const handlechoiceBtn = (event, name, ageGroup) => {
        event.preventDefault();
        showMessage(`I'm ${ageGroup}!`, 'user');

        setTimeout(() => {
          showMessage(`So ${name}, you are ${ageGroup}, is this correct?`, 'bot');
          yesBtn.style.display = 'block';
          noBtn.style.display = 'block';
          inputWrapper.style.display = 'none';
          yesBtn.onclick = () => handleResponse('yes', name);
          noBtn.onclick = () => handleResponse('no', name);
        }, 2000);
      };

      // confirm if user is over 18

      const handleResponse = (response, name) => {
        showMessage(`${response}!`, 'user');
        showMessage(`Amazing!`, 'bot');

        // dropdown menu
        setTimeout(() => {
          showMessage(`So, ${name} what did you order ? `, 'bot');
          dropDown.style.display = 'block';
          inputWrapper.style.display = 'none';
          yesBtn.style.display = 'none';
          noBtn.style.display = 'none';
        }, 1000);
      };

      // Event listener dropDown
      dropDown.addEventListener('change', (event) => {
        const selectedOption = event.target.value;
        showMessage(`So, you ordered ${selectedOption}`, 'user');
      });

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
