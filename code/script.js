// Declare variables
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const inputWrapper = document.getElementById('input-wrapper');
let questionCounter = 0;

// Function to move through questions that is called from event listeners
const questionGenerator = () => {
  questionCounter++;
  if (questionCounter === 1) {
    setTimeout(question1, 1000);
  } else if (questionCounter === 2) {
    setTimeout(question2, 1000);
  } else if (questionCounter === 3) {
    setTimeout(question3, 1000);
  } else if (questionCounter === 4) {
    setTimeout(question4, 1000);
  }
}

// Question 1
const question1 = () => {
  showMessage(`Hello there, What's your name?`, 'bot')

  document.getElementById('name-form').onsubmit = event => {
    event.preventDefault();
    showMessage(nameInput.value, 'user');
    nameInput.value ='';
    questionGenerator();
  }
}

// Question 2
const question2 = () => {
  
  showMessage(`Question with two buttons`, 'bot');

  inputWrapper.innerHTML = `
    <button class="button-input">coffee</button>
    <button class="button-input">tea</button>
    `
  addButtonListeners('button-input');
}

// Question 3
const question3 = () => {
  showMessage(`Question with a text answer`, 'bot');
  inputWrapper.innerHTML = `
    <input id="second-input" type="text" />
    <button id="second-btn">Send</button>
  `
  const secondInput = document.getElementById('second-input');
  document.getElementById('second-btn').addEventListener('click', () => {
    showMessage(secondInput.value, 'user');
    secondInput.value ='';
    questionGenerator();
  });
}

// Question 4 function
const question4 = () => {
  showMessage(`Question with a option answer`, 'bot');
  inputWrapper.innerHTML = `
    <select id="third-input" type="option">
      <option id="option-1">option 1</option>
      <option id="option-2">option 2</option>
      <option id="option-3">option 3</option>
    </select>
    `
  const select = document.getElementById('third-input');
  select.addEventListener('change', () => {
    showMessage(select.value, 'user');
    questionGenerator();
  });
}

// Question 5 function

// ...

// End message


// Event listener functions that can be reused here
const addButtonListeners = (buttonClassName) => {
  const sendButtons = document.getElementsByClassName(buttonClassName);

  Array.from(sendButtons).forEach(button => {
    button.addEventListener('click', () => {
      showMessage(button.innerText, 'user');
      questionGenerator();
    });
  });
}

// Move showMessage function here
// Function that adds a chat bubble in the correct place based on who the sender is
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
  } 
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Start chatbot by calling questionGenerator
questionGenerator();