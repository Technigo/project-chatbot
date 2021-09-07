// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
	if (sender === 'user') {
		console.log('is this the user?');
		chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
	} else if (sender === 'bot') {
		console.log('is this the bot?');
		chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
	}
	// This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
	chat.scrollTop = chat.scrollHeight;
};

// Starts here
const greeting = () => {
	showMessage(`Hello there, are you ready to place your order?`, 'bot');
	// Just to check it out, change 'bot' to 'user' here 👆
};
const legoTheme = () => {
	showMessage(`Sure!`, 'user');
	showMessage(`That's awesome!`, 'bot');
};

// Set up your eventlisteners here
yesBtn.addEventListener('click', () => legoTheme());
noBtn.addEventListener('click', () => setTimeout(greeting, 1000));

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
