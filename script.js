// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const nameInput = document.getElementById('nameInput');
const inputWrapper = document.getElementById('inputWrapper'); 

// Variables to store the user's name and muscle group
let userName;
let muscleGroup;

// This function will add a chat bubble in the correct place based on who the sender is
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

  // Use requestAnimationFrame for smoother scrolling
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      chat.scrollTop = chat.scrollHeight;
    });
  });
}

// Function to start the conversation
const greetUser = () => {
  showMessage("Hello there. I am Sweaty, your PT-bot! What's your name?", 'bot');
}

// Function to restart the conversation
const restartConversation = () => {
  chat.innerHTML = ''; // Clear the chat
  inputWrapper.innerHTML = ''; // Clear input options
  userName = ''; // Reset the userName
  muscleGroup = ''; // Reset the muscleGroup
  setTimeout(greetUser, 500); // Restart the greeting
}

// User tells their name to the bot
const userNameInput = event => {
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";
  showMessage(`My name is ${userName}.`, 'user');
  setTimeout(muscleOptions, 1500);
}

document.getElementById("nameForm").addEventListener("submit", userNameInput);

// Bot gives alternatives to which muscle group to train and an option to finish the workout
const muscleOptions = () => {
  showMessage(`Hope you're ready to get sweaty ${userName}! What do you feel like working out today?`, 'bot');
  inputWrapper.innerHTML = `
    <button id="arms">Arms</button>
    <button id="abs">Abs</button>
    <button id="legs">Legs</button>
    <button id="finishWorkout">Finish workout</button>`;
  
  document.getElementById("arms").addEventListener("click", () => {
    muscleGroup = "Arms"; 
    showMessage("I love to get strong arms!", 'user');
    setTimeout(exercises, 1500);
  });
  document.getElementById("abs").addEventListener("click", () => {
    muscleGroup = "Abs"; 
    showMessage("It is time to train those abs", 'user');
    setTimeout(exercises, 1500);
  });
  document.getElementById("legs").addEventListener("click", () => {
    muscleGroup = "Legs"; 
    showMessage("I would really like some fit legs.", 'user');
    setTimeout(exercises, 1500);
  });

  document.getElementById("finishWorkout").addEventListener("click", finishWorkout);
}

// Function to finish workout
const finishWorkout = () => {
  showMessage("Great job today! Now get some rest and come back stronger!", 'bot');
  inputWrapper.innerHTML = '<button id="restart">Restart</button>'; // Add Restart button
  document.getElementById("restart").addEventListener("click", restartConversation);
}

// Arrays of exercises for each muscle group
const exercisesLegs = ["squats", "lunges", "leg Press", "leg extensions", "leg curls", "hip thrusts"];
const exercisesAbs = ["crunches", "planks", "russian twists", "leg raises", "sit-ups"];
const exercisesArms = ["push-ups", "dips", "chins", "curls", "triceps extensions"];

// Function to select a random exercise from the array
const getRandomExercise = (exerciseArray) => {
  const randomIndex = Math.floor(Math.random() * exerciseArray.length);
  return exerciseArray[randomIndex];
}

const exercises = () => {
  let exercise;
  if (muscleGroup === "Legs") {
    exercise = getRandomExercise(exercisesLegs);
  } else if (muscleGroup === "Abs") {
    exercise = getRandomExercise(exercisesAbs);
  } else if (muscleGroup === "Arms") {
    exercise = getRandomExercise(exercisesArms);
  }

  // Shows suggestion on exercise
  showMessage(`You should do some ${exercise}! If you want more exercises or another suggestion you can just click the buttons again! Remember that anytime you want to end the workout you can just click the "Finish"-button.`, 'bot');
}

// Initialize the conversation
setTimeout(greetUser, 2000);
