// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const form = document.getElementById('name');
// Global variables, if you need any, declared here

// Functions declared here
// Starts here
const greeting = () => {
	showMessage(`Hello there wizard, what's your name?`, 'bot');
	// Just to check it out, change 'bot' to 'user' here 👆
};

const welcomeMessage = (userName) => {
	//Take the username

	if (userName == '') {
		//If text input is blank, the showMessage will appear to ask user to write their name
		showMessage(`Name must be filled out for Alohomora 🔐!`, 'bot');
		return false;
	} else {
		//If user types their name the message below will appear.
		showMessage(`Hello ${userName}, welcome to the world of magic! ✨`, 'bot');
	}
	setTimeout(() => colorOptions(userName), 1000); //this calls next function and gives a delay with 1 sec.
};

const colorOptions = (userName) => {
	//this asks the user to pick a color. The users name is also included in the message.
	showMessage(`${userName}, which is your favorite color ?`, 'bot');
	//these are color buttons
	inputWrapper.innerHTML = ` 
    <button id="redBtn">🔴</button>
    <button id="greenBtn">🟢</button>
    <button id="blueBtn">🔵</button>
    <button id="yellowBtn">🟡</button>
  `;
	//these are eventlistners listening to the pressed color buttons
	document.getElementById('redBtn').addEventListener('click', redAnswer);
	document.getElementById('greenBtn').addEventListener('click', greenAnswer);
	document.getElementById('yellowBtn').addEventListener('click', yellowAnswer);
	document.getElementById('blueBtn').addEventListener('click', blueAnswer);
};

const redAnswer = () => {
	//If user pressed the red button the message below will appear.
	showMessage(`Red is a Gryffindor color 🦁`, 'bot');
	setTimeout(() => pickSpell(), 2000); //this sets a delay by 2 sec and calls the next function.
};

const greenAnswer = () => {
	//If user pressed the green button the message below will appear.
	showMessage(`green is a Slytherin color 🐍`, 'bot');
	setTimeout(() => pickSpell(), 2000); //this sets a delay by 2 sec and calls the next function.
};

const yellowAnswer = () => {
	//If user pressed the yellow button the message below will appear.
	showMessage(`yellow is a Hufflepuff color 🦡`, 'bot');
	setTimeout(() => pickSpell(), 2000); //this sets a delay by 2 sec and calls the next function.
};

const blueAnswer = () => {
	//If user pressed the blue button the message below will appear.
	showMessage(`blue is a Ravenclaw color 🦅`, 'bot');
	setTimeout(() => pickSpell(), 2000); //this sets a delay by 2 sec and calls the next function.
};

const pickSpell = () => {
	//This is a function asking the user to pick a spell.
	showMessage(`Pick your spell 🧙!`, `bot`);

	//these are spell buttons
	inputWrapper.innerHTML = `
    <button id="lumosBtn">Light</button>
    <button id="disarmBtn">Disarm </button>
    <button id="accioBtn">Summoning</button>
    <button id="avadakedavraBtn">The unforgivable curse</button>
  `;
	//these are eventlistners listening to the pressed spell buttons
	document.getElementById('lumosBtn').addEventListener('click', lumosAnswer);
	document
		.getElementById('disarmBtn')
		.addEventListener('click', expelliarAnswer);
	document.getElementById('accioBtn').addEventListener('click', accioAnswer);
	document
		.getElementById('avadakedavraBtn')
		.addEventListener('click', avadakedavraAnswer);
};

const lumosAnswer = () => {
	//If user pressed the light button the message below will appear.

	showMessage(`You have picked Lumos 💡 `, 'bot');
	setTimeout(() => thankYou(), 2000); //this sets a delay by 2 sec and calls the next function.
};

const expelliarAnswer = () => {
	//If user pressed disarm button the message below will appear.
	showMessage(`You have picked Expelliarmus 💥`, 'bot');
	setTimeout(() => thankYou(), 2000); //this sets a delay by 2 sec and calls the next function.
};

const accioAnswer = () => {
	//If user pressed summoning button the message below will appear.
	showMessage(`You have picked accio 🧹`, 'bot');
	setTimeout(() => thankYou(), 2000); //this sets a delay by 2 sec and calls the next function.
};

const avadakedavraAnswer = () => {
	//If user pressed the unforgivable curse button the message below will appear.
	showMessage(`You have picked Avada Kedavra 💀 `, 'bot');
	setTimeout(() => thankYou(), 2000); //this sets a delay by 2 sec and calls the next function.
};

const thankYou = () => {
	//This function bids the user farwell and a good day.
	showMessage(
		`Thank you for engaging in our bot-chat. Have a good day wizard! 🧙👋🏼`,
		'bot'
	);
	inputWrapper.innerHTML = ``;
};

const handleNameInput = (event) => {
	//this function handles the input of the user's name.
	event.preventDefault(); // This allows the next function to start after user inputs their name, instead of restarting the chat.
	// Store the value in a variable so we can access it after we
	// clear it from the input
	const name = nameInput.value; //This function stores the users name and displays the name from the user on the right.
	showMessage(name, 'user');
	nameInput.value = '';

	// After 1 second, show the next question by invoking the next function.
	// passing the name into it to have access to the user's name if we want
	// to use it in the next question from the bot.
	setTimeout(() => welcomeMessage(name), 1000);
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
	if (sender === 'user') {
		chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `; //it shows only "message" and not the (Hello there, What's your name?)
	} else if (sender === 'bot') {
		chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/sortinghat.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p> 
        </div>
      </section>
    `;
	}
	// This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
	setTimeout(() => (chat.scrollTop = chat.scrollHeight), 500); //This allows the functions to scroll down all the way to the bottom so that questions are visible despite the big buttons.
};

// Set up your eventlisteners here

document
	.getElementById('name-form')
	.addEventListener('submit', handleNameInput); //An eventlistner that listens to the submit button when asking for the user's name
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000); //this sets a delay of 1 sec before the chat-bot begin.
