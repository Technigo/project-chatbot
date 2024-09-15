// DOM selectors
const chat = document.getElementById('chat');
const nameInput = document.getElementById('name-input');
const form = document.getElementById('name-form');
const buttonContainer = document.getElementById('button-container');

// Conversation state
let userName = '';

// Sound effects
const sendSound = new Audio('assets/message-sent.mp3');
const receiveSound = new Audio('assets/new-notification.mp3');

// Functions

// Play send sound
const playSendSound = () => {
  sendSound.play();
};

// Play receive sound
const playReceiveSound = () => {
  receiveSound.play();
};

// Final message
const goodbyeMessage = () => {
  showMessage(`Félicitations, ${userName}! You've completed the French learning session. Au revoir!`, 'bot');
};

// Handle user's answer to French questions
const handleFrenchAnswer = (answer, correctAnswer, nextQuestion) => {
  showMessage(answer, 'user');
  playSendSound();
  buttonContainer.style.display = 'none'; // Hide buttons
  setTimeout(() => {
    if (answer === correctAnswer) {
      showMessage(`Excellent! "${answer}" is correct. 🥐`, 'bot');
    } else {
      showMessage(`Not quite.. The correct answer is "${correctAnswer}".`, 'bot');
    }
    playReceiveSound();
    setTimeout(() => nextQuestion(), 1000);
  }, 1000);
};

// Create buttons for French questions
const createFrenchButtons = (options, correctAnswer, nextQuestion) => {
  form.style.display = 'none'; // Hide form
  buttonContainer.innerHTML = options.map(option => 
    `<button type="button" class="button-class">${option}</button>`
  ).join('');
  buttonContainer.style.display = 'flex'; // Show buttons

  // Add event listeners to buttons
  buttonContainer.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => handleFrenchAnswer(button.textContent, correctAnswer, nextQuestion));
  });
};

// Ask how to say "Yes" in French
const askYesInFrench = () => {
  showMessage("How do you say 'Yes' in French?", 'bot');
  playReceiveSound();
  createFrenchButtons(["Non", "Oui", "Peut-être"], "Oui", goodbyeMessage);
};

// Ask how to say "Thank you" in French
const askThankYouInFrench = () => {
  showMessage("How do you say 'Thank you' in French?", 'bot');
  playReceiveSound();
  createFrenchButtons(["S'il vous plaît", "Merci", "Oui"], "Merci", askYesInFrench);
};

// Ask how to say "Hello" in French
const askHelloInFrench = () => {
  showMessage("How do you say 'Hello' in French?", 'bot');
  playReceiveSound();
  createFrenchButtons(["Bonjour", "Merci", "Au revoir"], "Bonjour", askThankYouInFrench);
};

// Start French lesson
const startFrenchLesson = (name) => {
  userName = name;
  showMessage(`Enchanté, ${name}! 👩🏻‍🎨🍷 Let's learn some French.`, 'bot');
  playReceiveSound();
  setTimeout(askHelloInFrench, 1000);
};

// Handle the name input
const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (name === '') {
    showMessage('', 'user');
    playSendSound();
    setTimeout(() => {
      showMessage(`You forgot to type your name`, 'bot');
      playReceiveSound();
    }, 1000);
  } else {
    showMessage(name, 'user');
    playSendSound();
    nameInput.value = ''; // Empty textfield
    setTimeout(() => startFrenchLesson(name), 1000);
  }
};

// Event listener for the form
form.addEventListener('submit', handleNameInput);

// Function that shows different chat bubbles depending on 'user' or 'bot'
const showMessage = (message, sender) => {
  const messageHTML = `
    <section class="${sender}-msg">
      ${sender === 'bot' ? '<img src="assets/bot.png" alt="Bot" />' : ''}
      <div class="bubble ${sender}-bubble">
        <p>${message}</p>
      </div>
      ${sender === 'user' ? '<img src="assets/user.png" alt="User" />' : ''}
    </section>
  `;
  chat.innerHTML += messageHTML;
  chat.scrollTop = chat.scrollHeight;
};

// Greeting message
const greetUser = () => {
  showMessage(`Bonjour! I'm the French Learning Bot. 🇫🇷🥖 What's your name?`, 'bot');
};

// Start by greeting the user
setTimeout(greetUser, 1000);