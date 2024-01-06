// Variables and DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('inputWrapper'); 

let userName;
let muscleGroup;

// A function that adds a chat bubble in the correct place based on who the sender is
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

  // Make scroolling smoother
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      chat.scrollTop = chat.scrollHeight;
    });
  });
}

// First question
const greetUser = () => {
  showMessage("Hello there. I am Sweaty, your PT-bot! What's your name?", 'bot');
}

// Answer to first question with validation
const userNameInput = event => {
  event.preventDefault();
  userName = document.getElementById('userNameInput').value.trim();
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!userName.match(nameRegex) || userName === "") {
    showMessage("Please write your real name.", 'bot');
    return; 
    setTimeout(muscleOptions, 1500);
  }

// Second question
const muscleOptions = () => {
  showMessage(`Hope you're ready to get sweaty ${userName}! But remember that anytime you want to end the workout you can just click the "Finish"-button. So what do you feel like training today?`, 'bot');
  inputWrapper.innerHTML = `
    <button id="arms">Arms</button>
    <button id="abs">Abs</button>
    <button id="legs">Legs</button>
    <button id="finishWorkout">Finish workout</button>`;

  // Answer to second question based on which button you click
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

// Function to finish workout when you click the restart-button
const finishWorkout = () => {
  showMessage("Great job today! Now get some rest and come back stronger!", 'bot');
  inputWrapper.innerHTML = '<button id="restart">Restart</button>'; 
  document.getElementById("restart").addEventListener("click", restartConversation);
}


const exercisesLegs = ["squats", "lunges", "leg Press", "leg extensions", "leg curls", "hip thrusts"];
const exercisesAbs = ["crunches", "planks", "russian twists", "leg raises", "sit-ups"];
const exercisesArms = ["push-ups", "dips", "chins", "curls", "triceps extensions"];


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

  showMessage(`You should do some ${exercise}! If you want more exercises or another suggestion you can just click the buttons again!`, 'bot');
}

// Function to restart the conversation
const restartConversation = () => {
  chat.innerHTML = '';
  userName = null;
  muscleGroup = null;
  inputWrapper.innerHTML =
  `<form id="nameForm">
  <input type="text" id="nameInput"/>
  <button type="submit">Send</button>
  </form>`;
  document.getElementById("nameForm").addEventListener("submit", userNameInput);
  setTimeout(greetUser, 500);
}
