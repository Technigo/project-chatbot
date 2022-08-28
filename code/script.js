document.addEventListener('DOMContentLoaded', () => {

  // Variables that point to selected DOM elements
  const chat = document.getElementById('chat');
  const userInput = document.getElementById('user-input');
  const form = document.getElementById('user-form');
  const inputWrapper = document.getElementById('input-wrapper');
  let questionNumber = 1;

  const botReply = (msg) => {
    showMessage(msg, 'bot');
  }

  const userReply = (msg) => {
    showMessage(msg, 'user');
  }

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
  }

  // This function will get the bot to progress the conversation
  const generateRequest = (message) => {
    console.log('questionNumber', questionNumber);
    
    if (questionNumber === 1) {
      setTimeout (() => showOptions(message), 1000);
    } else if (questionNumber === 2) {
      setTimeout (() => passengers(message), 1000);
    } else if (questionNumber === 3) {
      setTimeout (() => addBaggage(message), 1000);
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
      userReply(reply);
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
        <button id='boatBtn'>Boat</button>
        <button id='busBtn'>Bus</button>
        <button id='trainBtn'>Train</button>
      `;

      document.getElementById('boatBtn') .addEventListener('click', () => {
        generateRequest('Boat');
        userReply('Boat');
      });
      document.getElementById('busBtn') .addEventListener('click', () => {
        generateRequest('Bus');
        userReply('Bus');
      });
      document.getElementById('trainBtn') .addEventListener('click', () => {
        generateRequest('Train');
        userReply('Train');
      });
  }

  // the bots second question; a list of numbers to choose from
  const passengers = (transport) => {
    questionNumber++;
    botReply(`${transport} you say, how fun! How many passengers will you be?`);
      
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
      userReply(numberOfPassengers.value);
    }
  }

  // the bots third question; a multiple choise question with 'yes'- and 'no'-button
  const addBaggage = () => {
    questionNumber++;
    botReply(`A booking for ${numberOfPassengers.value} coming up! Would you like to add any baggage?`);
    
    inputWrapper.innerHTML = `
      <button id='yesBaggage'>Yes</button>
      <button id='noBaggage'>No</button>
    `;

    document.getElementById('yesBaggage') .addEventListener('click', () => {
      generateRequest('');
      userReply('Yes');
    });
    document.getElementById('noBaggage') .addEventListener('click', () => {
      generateRequest('');
      userReply('No');
    });
  }

  // the bots fourth question; a multiple choise question with 'yes'- and 'no'-button, no generates a reload and it the user doesen't respond in 5 min the page reloads
  const confirmBooking = () => {
    questionNumber++;
    botReply('Ok, all set then. Would you like to confirm booking?');

    inputWrapper.innerHTML = `
      <button id='confirmBtn'>Confirm</button>
      <button id='restartBtn'>Restart</button>
    `;

    document.getElementById('confirmBtn') .addEventListener('click', () => {
      generateRequest('');
      userReply('Confirm');
    });
    document.getElementById('restartBtn') .addEventListener('click', () => {
      location.reload();
    });

    setTimeout(() => location.reload(), 300000);
  }

  // the bots last comment if the user confirmed the booking
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
