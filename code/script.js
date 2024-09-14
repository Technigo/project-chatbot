// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const form = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");

let currentQuestionNumber = 1; // Start with Question 1

// Question data
const Question1 = {
  question: "Who released a single in 1999 called Genie In a Bottle?",
  options: ["Britney Spears", "Christina Aguilera", "Robyn", "Corona"],
  correctAnswer: "Christina Aguilera"
};

const Question2 = {
  question: "Who wrote the song I will always love you?",
  options: ["Whitney Houston", "Celine Dion", "Dolly Parton", "Mariah Carey"],
  correctAnswer: "Dolly Parton"
};

const Question3 = {
  question: "Which artist has not competed in the Eurovision Song Contest?",
  options: ["Celine Dion", "Olivia Newton John", "Bonnie Tyler", "Vanessa Paradis"],
  correctAnswer: "Vanessa Paradis"
};

// Array of questions
const questions = [Question1, Question2, Question3];

// A function that will add a chat bubble in the correct place based on who the sender is
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

// A function to start the conversation
const greetUser = () => {
  showMessage("Hello there, what's your name?", 'bot');
  
  // Show the name input field
  inputWrapper.innerHTML = `
    <input id="name-input" placeholder="Enter your name" />
    <button id="name-submit">Submit</button>
  `;

  document.getElementById('name-submit').addEventListener('click', () => {
    const userName = document.getElementById('name-input').value;
    if (userName) {
      showMessage(userName, 'user');
      setTimeout(() => {
        showMessage(`Nice to meet you, ${userName}! Are you ready for a quiz?`, 'bot');
        setTimeout(showYesNoButtons, 900);
      }, 700);
    }
  });
};

// Scroll down the chat window after buttons have loaded
chat.scrollTop = chat.scrollHeight;

// Show Yes/No buttons for quiz confirmation
const showYesNoButtons = () => {
  inputWrapper.innerHTML = `
    <button id="yes">Yes</button>
    <button id="no">No</button>
  `;

  document.getElementById('yes').addEventListener('click', () => {
    showMessage("Yes", "user");
    inputWrapper.innerHTML = ''; // Remove Yes/No buttons
    setTimeout(() => askQuestion(), 1000); // Start the quiz
  });

  document.getElementById('no').addEventListener('click', () => {
    showMessage("No", "user");
    setTimeout(() => {
      showMessage("Ok, see you another time!", 'bot');
      inputWrapper.innerHTML = ''; // Clear buttons
    }, 700);
  });
};

// Scroll down the chat window after buttons have loaded
chat.scrollTop = chat.scrollHeight;

// Ask the current question and show answer options
const askQuestion = () => {
  const currentQuestion = questions[currentQuestionNumber - 1];

  if (currentQuestion) {
    showMessage(currentQuestion.question, 'bot');

    // Show options as buttons. Each button has a unique id (option-0, option-1, option-2, option-3, for example for question nr 1-option 0 is Britney Spears, option1 is Christina Aguilera etc. ${currentQuestion.options[0]}, ${currentQuestion.options[1]}, etc., are placeholders that get replaced with the actual options for the current question.

    inputWrapper.innerHTML = `
      <div class="option-buttons">
      <button id="option-0">${currentQuestion.options[0]}</button>
      <button id="option-1">${currentQuestion.options[1]}</button>
      <button id="option-2">${currentQuestion.options[2]}</button>
      <button id="option-3">${currentQuestion.options[3]}</button>
      </div>
    `;

    // Add event listeners to the buttons
    currentQuestion.options.forEach((option, index) => {
      document.getElementById(`option-${index}`).addEventListener('click', () => {
        showMessage(option, 'user');
        checkAnswer(option); // Check the selected answer
      });
    });
  } else {
    // If there are no more questions, end the quiz
    showMessage("Quiz finished! Thanks for playing.", 'bot');
    inputWrapper.innerHTML = ''; // Clear buttons after the quiz ends
  }
};

// Check the user's answer and move to the next question
const checkAnswer = (selectedOption) => {
  const currentQuestion = questions[currentQuestionNumber - 1];

  if (selectedOption === currentQuestion.correctAnswer) {
    showMessage("Correct!", 'bot');
  } else {
    showMessage(`Wrong! The correct answer is ${currentQuestion.correctAnswer}.`, 'bot');
  }

  // After answering, move to the next question if there are more questions
  setTimeout(() => {
    inputWrapper.innerHTML = ''; // Clear buttons after selecting an answer
    currentQuestionNumber++; // Increment the question number

    if (currentQuestionNumber <= questions.length) {
      askQuestion(); // Ask the next question
    } else {
      showMessage("Quiz finished! Thanks for playing.", 'bot');
      inputWrapper.innerHTML = ''; // Clear buttons after the quiz ends
    }
  }, 900); // Timeout
};

// Start the conversation
setTimeout(greetUser, 900);




































