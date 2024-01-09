// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('inputWrapper'); 

// Variables to store the user's name and muscle group
let userName;
let muscleGroup;

// Function to add a chat bubble
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="user.png" alt="User" />  
      </section>
    `;
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      chat.scrollTop = chat.scrollHeight;
    });
  });
};

// Function to start the conversation
const greetUser = () => {
  showMessage("Hello there. I am Sweaty, your PT-bot! What's your name?", 'bot');
};

// User tells their name to the bot
const userNameInput = event => {
  event.preventDefault();
  const inputName = document.getElementById('nameInput').value;

  // Regex for validating the name: more than two letters, no numbers or symbols
  const nameRegex = /^[A-Za-z]{3,}$/;

  // Validate user name
  if (!nameRegex.test(inputName)) {
    showMessage("Please enter a valid name. It should be more than two letters and contain no numbers or symbols.", 'bot');
  } else {
    userName = inputName;
    document.getElementById('nameInput').value = "";
    showMessage(`My name is ${userName}.`, 'user');
    setTimeout(muscleOptions, 1500);
  }
};

// Initialize the conversation
setTimeout(greetUser, 2000);
document.getElementById("nameForm").addEventListener("submit", userNameInput);

// Function to choose muscle group 
const muscleOptions = () => {
  showMessage(`Hope you're ready to get sweaty ${userName}! But remember that anytime you want to end the workout you can just click the "Finish"-button. So what do you feel like training today?`, 'bot');
  inputWrapper.innerHTML = `
    <button id="arms">Arms</button>
    <button id="abs">Abs</button>
    <button id="legs">Legs</button>
    <button id="finishWorkout">Finish workout</button>`;
  
  document.getElementById("arms").addEventListener("click", () => selectMuscleGroup("Arms"));
  document.getElementById("abs").addEventListener("click", () => selectMuscleGroup("Abs"));
  document.getElementById("legs").addEventListener("click", () => selectMuscleGroup("Legs"));
  document.getElementById("finishWorkout").addEventListener("click", finishWorkout);
};

// Function for selecting a muscle group
const selectMuscleGroup = (group) => {
  muscleGroup = group; 
  showMessage(`I want to train my ${muscleGroup.toLowerCase()}.`, 'user');
  setTimeout(exercises, 1500);
};

// Function to finish workout
const finishWorkout = () => {
  showMessage("Great job today! Now get some rest and come back stronger!", 'bot');
  inputWrapper.innerHTML = '<button id="restart">Restart</button>'; 
  document.getElementById("restart").addEventListener("click", restartConversation);
};

// Arrays of exercises for each muscle group
const exercisesLegs = ["squats", "lunges", "leg Press", "leg extensions", "leg curls", "hip thrusts"];
const exercisesAbs = ["crunches", "planks", "russian twists", "leg raises", "sit-ups"];
const exercisesArms = ["push-ups", "dips", "chins", "curls", "triceps extensions"];

// Function to select a random exercise from the array
const getRandomExercise = (exerciseArray) => {
  const randomIndex = Math.floor(Math.random() * exerciseArray.length);
  return exerciseArray[randomIndex];
};

// Function to suggest exercises
const exercises = () => {
  let exercise;

  if (muscleGroup === "Legs") {
    exercise = getRandomExercise(exercisesLegs);
  } else if (muscleGroup === "Abs") {
    exercise = getRandomExercise(exercisesAbs);
  } else if (muscleGroup === "Arms") {
    exercise = getRandomExercise(exercisesArms);
  } else {
    showMessage("Please select a valid muscle group.", 'bot');
    return;
  }

  showMessage(`You should do some ${exercise}! If you want more exercises or another suggestion you can just click the buttons again!`, 'bot');
};

// Function to restart the conversation
const restartConversation = () => {
  chat.innerHTML = '';
  userName = null;
  muscleGroup = null;
  inputWrapper.innerHTML = `
  <form id="nameForm">
    <input type="text" id="nameInput"/>
    <button type="submit">Send</button>
  </form>`;
  document.getElementById("nameForm").addEventListener("submit", userNameInput);
  setTimeout(greetUser, 500);
};
