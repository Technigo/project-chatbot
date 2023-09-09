// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const submit = document.getElementsByClassName('submit');
const nameInput = document.getElementById('nameInput');
const inputWrapper = document.getElementById('inputWrapper'); // Define inputWrapper

// If you need any global variables that you can use across different functions, declare them here:
let userName;
let muscleGroup; 

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
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

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greetUser = () => {
  showMessage("Hello there. I am Sweaty, your PT-bot! What's your name?", 'bot');
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

// Bot gives alternatives to which musclegroup to train
const muscleOptions = () => {
  showMessage(`Hope you're ready to get sweaty ${userName}! What do you feel like working out today?`, 'bot');
  inputWrapper.innerHTML = `
    <button id="arms">Arms</button>
    <button id="abs">Abs</button>
    <button id="legs">Legs</button>`;
  
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
}

// Arrays of exercises for each muscle group
const exercisesLegs = ["Squats", "Lunges", "Leg Press"];
const exercisesAbs = ["Crunches", "Planks", "Russian Twists"];
const exercisesArms = ["Push-Ups", "Dips", "Chins"];

// Function to select a random exercise from the array
const getRandomExercise = (exerciseArray) => {
  const randomIndex = Math.floor(Math.random() * exerciseArray.length);
  return exerciseArray[randomIndex];
}

const exercises = () => {
  if (muscleGroup === "Legs") {
    exercise = getRandomExercise(exercisesLegs);
  } else if (muscleGroup === "Abs") {
    exercise = getRandomExercise(exercisesAbs);
  } else if (muscleGroup === "Arms") {
    exercise = getRandomExercise(exercisesArms);
  }

//shows suggestion on exercise
  showMessage(`You should do some ${exercise}!`, 'bot');
  showMessage(`If you want more exercises or another suggestion you can just click the buttons again!`, 'bot')
}




setTimeout(greetUser, 2000);
