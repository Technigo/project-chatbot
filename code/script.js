document.addEventListener('DOMContentLoaded', ()=> {

// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameForm = document.getElementById ("name-form"); 
const nameInput = document.getElementById('name-input');
const sendBtn = document.getElementById('send');

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-icon.svg" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img id="bot-icon" src="assets/frog-icon.svg" alt="Bot"/>
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
//Question number 1
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Greetings traveler, what is your name?", 'bot');
}

//User answer 1 
//This shows a bubble with the users name after they've written it
const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  showMessage(name, 'user');
  nameInput.value = '';
  setTimeout(() => chooseTourGuide(name), 750);
}

// Question numer 2 
const chooseTourGuide = (name) => {
  showMessage(`${name}, please choose your tour guide.`, 'bot');
  inputWrapper.innerHTML=` 
  <button id="pirateBtn" type="submit">Pirate</button>
  <button id="vampireBtn" type="submit">Vampire</button>
  <button id="witchBtn" type="submit">Witch</button>`
  document
  .getElementById('pirateBtn')
  .addEventListener('click',()=> handleTourGuide ('Pirate'));

  document
  .getElementById('vampireBtn')
  .addEventListener('click',()=> handleTourGuide ('Vampire'));

  document
  .getElementById('witchBtn')
  .addEventListener('click',()=> handleTourGuide ('Witch'));
}

//document.getElementById('bot-icon').src ="assets/pirate-icon.svg";
// user answer 2, bubble with chosen tour guide
const handleTourGuide = (tourGuide) => {
  showMessage(tourGuide, 'user');
  setTimeout(() => chooseActivity(tourGuide), 750);
}

// Question numer 3, drop down menu for choices
const chooseActivity = (tourGuide) => {  
  showMessage (`You have chosen the ${tourGuide}. What do you want to do together?`, 'bot');
  if (tourGuide === 'Pirate') {
    inputWrapper.innerHTML =`
    <select id="select">
     <option value="" selected disabled>Choose your activity</option>
     <option value="Sailing">Sailing</option>
     <option value="Robbing">Robbing</option>
     <option value="Fencing">Fencing</option>
    </select>`
  }

  else if (tourGuide === 'Vampire') {
    inputWrapper.innerHTML =`
    <select id="select">
     <option value="" selected disabled>Choose your activity</option>
     <option value="Explore the city at night">Explore the city at night</option>
     <option value="Blood tasting">Blood tasting</option>
     <option value="Stargazing">Stargazing</option>
    </select>`
  }

  else {
    inputWrapper.innerHTML =`
    <select id="select">
     <option value="" selected disabled>Choose your activity</option>
     <option value="Potion making">Potion making</option> 
     <option value="Broom riding">Broom riding</option>
     <option value="Cat petting">Cat petting</option>
    </select>`
  }

  const select = document.getElementById('select');
  select.addEventListener('change', () => handleActivity(tourGuide, select.value));
}

//User answer 3, bubble for chosen activity
const handleActivity = (tourGuide, activity) => {
  showMessage(activity, 'user');
  setTimeout(() => confirmation(tourGuide, activity), 750);
}

//Question number 4, confirms activity and tour guide
//Creates Yes/No-buttons
const confirmation = (tourGuide, activity) => {
  showMessage(`Are you sure you want to go ${activity.toLowerCase()} with the ${tourGuide}?`, 'bot');
  inputWrapper.innerHTML=` 
  <button id="Yes" type="submit">Yes</button>
  <button id="No" type="submit">No</button>
  `
  document
  .getElementById('Yes')
  .addEventListener('click',()=> handleConfirmation ('Yes'));

  document
  .getElementById('No')
  .addEventListener('click',()=> handleConfirmation ('No'));
}

//User answer 4
const handleConfirmation = (agreement) => {
showMessage(agreement, 'user');

//This is what happens when user click yes/no
if (agreement === 'Yes') {
  setTimeout(()=> showMessage("Great, your tour starts soon! See you then!", 'bot'), 750);
  inputWrapper.innerHTML=''
}

else { 
  showMessage("Okay. You will be directed to the beginning. Please redo your options.", 'bot');
  setTimeout(()=> window.location.reload (), 3000);
  inputWrapper.innerHTML=''
}
}

// Set up your eventlisteners here
nameForm.addEventListener('submit', handleNameInput);

setTimeout(greeting, 750);
});
