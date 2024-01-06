// Variables and DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('inputWrapper'); 

let userName;
let muscleGroup;

// A function to create and append chat messages
const createMessageElement = (message, sender) => {
  const section = document.createElement('section');
  section.className = sender + '-msg';

  const img = document.createElement('img');
  img.src = sender + '.png';
  img.alt = sender.charAt(0).toUpperCase() + sender.slice(1);

  const div = document.createElement('div');
  div.className = 'bubble ' + sender + '-bubble';

  const p = document.createElement('p');
  p.textContent = message;

  div.appendChild(p);
  if (sender === 'user') {
    section.appendChild(div);
    section.appendChild(img);
  } else {
    section.appendChild(img);
    section.appendChild(div);
  }

  chat.appendChild(section);
  chat.scrollTop = chat.scrollHeight;
}

// Function to validate user name
const isValidName = (name) => {
  const nameRegex = /^[A-Za-z\s]+$/;
  return name.match(nameRegex) && name !== "";
}

// Function to ask the first question
const greetUser = () => {
  createMessageElement("Hello there. I am Sweaty, your PT-bot! What's your name?", 'bot');
}

// Function to handle user name input
const userNameInput = (event) => {
  event.preventDefault();
  userName = document.getElementById('userNameInput').value.trim();
  
  if (!isValidName(userName)) {
    createMessageElement("Please write your real name.", 'bot');
  } else if (userName.length > 20) {
    createMessageElement("Name too long. Please use a shorter name.", 'bot');
  } else if (userName.length < 3) {
    createMessageElement("Name too short. Please use a longer name.", 'bot');
  } else {
    setTimeout(muscleOptions, 1500);
  }
}

// Function to show muscle options
const muscleOptions = () => {
  createMessageElement(`Hope you're ready to get sweaty ${userName}! Select a muscle group to train:`, 'bot');
  inputWrapper.innerHTML = `
    <button id="arms">Arms</button>
    <button id="abs">Abs</button>
    <button id="legs">Legs</button>
    <button id="finishWorkout">Finish workout</button>`;

  // Event listeners for muscle group selection
  document.getElementById("arms").addEventListener("click", () => handleMuscleGroupSelection("Arms"));
  document.getElementById("abs").addEventListener("click", () => handleMuscleGroupSelection("Abs"));
  document.getElementById("legs").addEventListener("click", () => handleMuscleGroupSelection("Legs"));
  document.getElementById("finishWorkout").addEventListener("click", finishWorkout);
}

// Handle muscle group selection
const handleMuscleGroupSelection = (group) => {
  muscleGroup = group; 
  createMessageElement(`Let's train ${muscleGroup} today!`, 'user');
  setTimeout(exercises, 1500);
}

// Function to finish workout
const finishWorkout = () => {
  createMessageElement("Great job today! Now get some rest and come back stronger!", 'bot');
  inputWrapper.innerHTML = '<button id="restart">Restart</button>'; 
  document.getElementById("restart").addEventListener("click", restartConversation);
}

// Exercise arrays
const exercisesLegs = ["squats", "lunges", "leg press", "leg extensions", "leg curls", "hip thrusts"];
const exercisesAbs = ["crunches", "planks", "russian twists", "leg raises", "sit-ups"];
const exercisesArms = ["push-ups", "dips", "chins", "curls", "triceps extensions"];

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
    createMessageElement("Please select a muscle group first.", 'bot');
    return;
  }

  createMessageElement(`You should do some ${exercise}! If you want more exercises or another suggestion, just select a muscle group again!`, 'bot');
}

// Function to get a random exercise
const getRandomExercise = (exerciseArray) => {
  const randomIndex = Math.floor(Math.random() * exerciseArray.length);
  return exerciseArray[randomIndex];
}

// Function to restart the conversation
const restartConversation = () => {
  chat.innerHTML = '';
  userName = null;
  muscleGroup = null;
  inputWrapper.innerHTML = 
    `<form id="nameForm">
       <input type="text" id="userNameInput" />
       <button type="submit">Send</button>
     </form>`;
  document.getElementById("nameForm").addEventListener("submit", userNameInput);
  setTimeout(greetUser, 500);
}
