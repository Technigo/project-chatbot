document.addEventListener('DOMContentLoaded', () => {

  // Variables that point to selected DOM elements
  const chat = document.getElementById('chat');
  const userInput = document.getElementById('user-input');
  const form = document.getElementById('user-form');
  const submit = document.getElementById('submit');
  const main = document.getElementById('main');
  const inputWrapper = document.getElementById('input-wrapper');
  let = questionNumber = 1;

  const botReply = (msg) => {
    showMessage(msg, 'bot');
  }

  // This function will add a chat bubble in the correct place based on who the sender is
  const showMessage = (message, sender) => {
    
    if (sender === 'user') {
      console.log('answer');
      chat.innerHTML += `
        <section class="user-msg">
          <div class="bubble user-bubble">
            <p>${message}</p>
          </div>
          <img src="assets/user.png" alt="User" />  
        </section>
      `;
    } else if (sender === 'bot') {
      console.log('question');
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
  }

  // This function will get the bot to progress the conversation
  const generateRequest = (message) => {
    console.log('questionNumber', questionNumber);
    
    if (questionNumber === 1) {
      setTimeout (() => showOptions(message), 1000);
    } else if (questionNumber === 2) {
      setTimeout (() => passengers(message), 1000);
    } else if (questionNumber === 3) {
      setTimeout (() => addBagage(message), 1000);
    } else if (questionNumber === 4) {
      setTimeout (() => confirmBooking(message), 1000);
    } else if (questionNumber === 5) {
      setTimeout (() => goodbye(message), 1000);
    }
  }

  // Greeting from the bot turns up when the page is loaded
  const greeting = () => {
    questionNumber = 1;
    botReply('Hello there. What is your name?');
  }

  // The function that makes the users name-response turn up
  const handleInput = (event) => {
      event.preventDefault();
      const reply = userInput.value;
      showMessage(reply, 'user');
      userInput.value = '';

      if (reply !== '') {
        setTimeout (() => showOptions(reply), 1000);
      } else {
        setTimeout (() => botReply('That is not a valid answer'), 300); 
      }

  }

  // the bots first question; a multiple choise question with three buttons with different alternatives
  const showOptions = (message) => {
    questionNumber++;
    botReply(`Hi ${message}, How would you like to travel?`);

      inputWrapper.innerHTML = `
        <button id='firstBtn'>Boat</button>
        <button id='secondBtn'>Bus</button>
        <button id='thirdBtn'>Train</button>
      `;

      document.getElementById('firstBtn') .addEventListener('click', () => {
        generateRequest('');
        showMessage('Boat', 'user');
      });
      document.getElementById('secondBtn') .addEventListener('click', () => {
        generateRequest('');
        showMessage('Bus', 'user');
      });
      document.getElementById('thirdBtn') .addEventListener('click', () => {
        generateRequest('');
        showMessage('Train', 'user');
      });
  }

  // the bots second question; a list of numbers to choose from
  const passengers = () => {
    questionNumber++;
    botReply('How many passengers will you be?');
      
    inputWrapper.innerHTML =`
      <select id='numberOfPassengers' onchange='changeFunc'>
        <option value='0'>0</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>
    `;

    document.getElementById('numberOfPassengers') .onchange = () => {
      generateRequest(numberOfPassengers.value);
      showMessage(numberOfPassengers.value, 'user');
    }
  }

  // the bots third question; a multiple choise question with 'yes'- and 'no'-button
  const addBagage = () => {
    questionNumber++;
    botReply('Would you like to add bagage?');
    
    inputWrapper.innerHTML = `
      <button id='yesBtn'>Yes</button>
      <button id='noBtn'>No</button>
    `;

    document.getElementById('yesBtn') .addEventListener('click', () => {
      generateRequest('');
      showMessage('Yes', 'user');
    });
    document.getElementById('noBtn') .addEventListener('click', () => {
      generateRequest('');
      showMessage('No', 'user');
    });
  }

  // the bots fourth question; a multiple choise question with 'yes'- and 'no'-button, no generates a reload and it the user doesen't respond in 5 min the page reloads
  const confirmBooking = () => {
    questionNumber++;
    botReply('Ok, all set then. Would you like to confirm booking?');

    inputWrapper.innerHTML = `
      <button id='yesBtn'>Confirm</button>
      <button id='noBtn'>Restart</button>
    `;

    document.getElementById('yesBtn') .addEventListener('click', () => {
      generateRequest('');
      showMessage('Confirm', 'user');
    });
    document.getElementById('noBtn') .addEventListener('click', () => {
      location.reload();
    });

    setTimeout(() => location.reload(), 300000);
  }

  // the bots first question; a multiple choise question with three buttons with different alternatives
  const goodbye = () => {
    questionNumber++;
    botReply('Thank you for your booking!');

    inputWrapper.innerHTML = '';

  }

  // Eventlistner for the submit button
  form.addEventListener('submit', handleInput);

  // the greeting-delay, so the bots greeting doesn't turn up straight away
  setTimeout(greeting, 1500);

});
