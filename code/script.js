const buddyAudio = new Audio();
buddyAudio.src = "./assets/buddy.wav";

const userAudio = new Audio();
userAudio.src = "./assets/response.wav";

// Variables that point to the selected DOM elements
const chat = document.getElementById('chat');
const displayMain = document.querySelector("main");
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');

let username = "";  // Variable to store the user's name
let chosenPreference = ""; // variable to store the user's morning preference

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender, delay = 0) => {
  if (sender === 'user') {
    // Play user sound
    userAudio.currentTime = 0; // Reset audio to start from the beginning
    userAudio.play();
    
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    chat.scrollTop = chat.scrollHeight; // Scroll to the latest message
  } 
  else if (sender === 'bot') {
    // Delay bot message display and sound
    setTimeout(() => {
      // Reset bot audio and play
      buddyAudio.currentTime = 0; // Reset audio to start from the beginning
      buddyAudio.play();

      // Show bot message after sound plays
      chat.innerHTML += `
        <section class="bot-msg">
          <img src="assets/bot.png" alt="Bot" />
          <div class="bubble bot-bubble">
            <p>${message}</p>
          </div>
        </section>
      `;
      chat.scrollTop = chat.scrollHeight; // Scroll to the latest message
    }, delay); // Delay in milliseconds
  }
}

// A function to start the conversation
const greetUser = () => {
  showMessage("Hello dear, my name is Boredom Buddy Bot, what's your name?", 'bot', 1000);
}

// Function to handle the name submission
const saveUsername = (event) => {
  event.preventDefault(); // Prevents form submission from refreshing the page
  username = nameInput.value;
  showMessage(`Hi, I'm ${username}!`, 'user');
  nameInput.value = ''; // Clear the input field after submission
  setTimeout(() => showMessage(`${username} is an amazing name!`, 'bot', 1000), 1000);
  setTimeout(() => askPersonality(), 2000); 
}

// Ask the second question now
const askPersonality = () => {
  showMessage(`How would you describe yourself, ${username}?`, 'bot', 1000);
  setTimeout(() => personalityTraits(), 2000);
}

// Function for the user to choose the personality trait
const personalityTraits = () => {
  inputWrapper.innerHTML = `
      <button id="intro">Introvert</button>
      <button id="extro">Extrovert</button>
    `;
  
  document.getElementById('intro').addEventListener('click', () => personalityChoice('Introvert'));
  document.getElementById('extro').addEventListener('click', () => personalityChoice('Extrovert'));
}

// Add the personality choice and display the appropriate message
const personalityChoice = (chosenPersonality) => {
  showMessage(chosenPersonality, 'user');  
  showMessage('Awesome, If I’m honest, me too sometimes, but', 'bot', 1500);  
  inputWrapper.innerHTML = ''; // Clear the buttons after the user makes a choice
  setTimeout(() => askMorning(), 2000);  // Ensure the next question is asked after a brief delay
}

// Ask the third question now 
const askMorning = () => {
  showMessage(`How do you usually prefer to start your mornings?`, 'bot', 1000);
  setTimeout(() => morningPreferences(), 2000); // Give time before showing the preferences
}

// Function for the user to choose the morning preference
const morningPreferences = () => {
  inputWrapper.innerHTML = `
      <button id="coffee">☕ Coffee/Tea</button>
      <button id="exercise">🧘 Exercise/Meditate</button>
      <button id="phone">📱 Check Phone</button>
    `;
  
  document.getElementById('coffee').addEventListener('click', () => morningPreference('Drinking Coffee/Tea'));
  document.getElementById('exercise').addEventListener('click', () => morningPreference('Exercising'));
  document.getElementById('phone').addEventListener('click', () => morningPreference('Checking Phone'));
}

// Handle the user's morning preference and display it
const morningPreference = (preference) => {
  chosenPreference = preference; // Save the chosen preference
  showMessage(preference, 'user');  
  setTimeout(() => showMessage(`Interesting! I’m not much of a ${preference} type of bot myself, but okay`, 'bot', 1500), 1000); 
  inputWrapper.innerHTML = ''; // Clear the buttons after the user makes a choice
  setTimeout(() => askStress(), 2000);  // Ensure the next question is asked after a brief delay
}

// Ask the fourth question now 
const askStress = () => {
  showMessage(`If I may ask, how do you usually handle stress?`, 'bot', 1000);
  setTimeout(() => stressHandleOptions(), 2000); // Give time before showing the preferences
}

// Function for the user to choose how they handle stress
const stressHandleOptions = () => {
  inputWrapper.innerHTML = `
      <button id="talk">💬 Talk to Someone</button>
      <button id="active">🎨 Be Active/Creative</button>
      <button id="alone">🙇 Be Alone</button>
    `;
  
  document.getElementById('talk').addEventListener('click', () => stressHandle('Talking'));
  document.getElementById('active').addEventListener('click', () => stressHandle('Being creative'));
  document.getElementById('alone').addEventListener('click', () => stressHandle('Being alone'));
}

// Save the user's stress management and display it
const stressHandle = (handle) => {
  showMessage(handle, 'user');  
  setTimeout(() => showMessage(`That's cute from you to share! I think I prefer ${handle} too.`, 'bot', 1500), 1000); 
  inputWrapper.innerHTML = ''; // Clear the buttons after the user makes a choice
  setTimeout(() => askDream(), 2000);  // Ensure the next question is asked after a brief delay
}

// Ask the fifth question now 
const askDream = () => {
  showMessage(`Now for the final question, if you could be any supernatural creature in the world, who would it be?`, 'bot', 1000);
  setTimeout(() => dreamSuperpowers(), 2000); // Give time before showing the preferences
}

// Function for the user to choose their dream supernatural power
const dreamSuperpowers = () => {
  inputWrapper.innerHTML = `
      <button id="superman">🦸 Superman</button>
      <button id="batman">🦇 Batman</button>
      <button id="spiderman">🕷️ Spiderman</button>
    `;
  
  document.getElementById('superman').addEventListener('click', () => dreamSuper('Superman'));
  document.getElementById('batman').addEventListener('click', () => dreamSuper('Batman'));
  document.getElementById('spiderman').addEventListener('click', () => dreamSuper('Spiderman'));
}

// Add the final dream selection and display the appropriate message
const dreamSuper = (dream) => {
  showMessage(dream, 'user');  
  showMessage(`Wow, me too!`, 'bot', 1500);  
  setTimeout(() => feedbackRequest(), 1000);
}

// Ask for feedback
const feedbackRequest = () => {
  showMessage(`Thank you ${username} for opening up to me, it means a lot! How did our chat make you feel?`, 'bot', 1000);
  inputWrapper.innerHTML = `
    <button id="lovely">Thank you lovely</button>
    <button id="boring">It was a boring chatbot</button>
  `;
  
  document.getElementById('lovely').addEventListener('click', () => sendFeedback('lovely'));
  document.getElementById('boring').addEventListener('click', () => sendFeedback('boring'));
}

// Save feedback based on the user's response
const sendFeedback = (feedback) => {
  if (feedback === 'lovely') {
    showMessage('Thank you lovely ❤️', 'user');
    showMessage('❤️ Sending you all the love! Have a wonderful day! ❤️', 'bot', 1500);
  } else if (feedback === 'boring') {
    showMessage('It was a boring chatbot 💔', 'user');
    showMessage('💔 I’m sorry you feel that way. I’ll try to be more fun next time! 💔', 'bot', 1500);
  }
  inputWrapper.innerHTML = ''; // Clear the buttons
}

// Event listener to handle form submission
nameForm.addEventListener("submit", saveUsername);

// Start the conversation when the page loads
setTimeout(greetUser, 1000);
