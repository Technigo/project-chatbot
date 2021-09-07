// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const inputWrapper = document.getElementById('input-wrapper');

// Global variables, if you need any, declared here

// Functions declared here

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
	if (sender === 'user') {
		// console.log('is this the user?');
		chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
	} else if (sender === 'bot') {
		// console.log('is this the bot?');
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
const selectTheme = () => {
	showMessage(`Sure!`, 'user');
	showMessage(`That's awesome!`, 'bot');
	inputWrapper.innerHTML = `
  <select id="select-theme">
    <option value="" selected disabled>👇 Select a theme...</option>
    <option value="Architecture">Architecture</option>
    <option value="Batman™">Batman™</option>
    <option value="BOOST">BOOST</option>
    <option value="BrickHeadz">BrickHeadz</option>
    <option value="Brick Sketches™">Brick Sketches™</option>
    <option value="City">City</option>
    <option value="Classic">BOOST</option>
    <option value="Creator 3-in-1">Creator 3-in-1</option>
    <option value="Creator Expert">Creator Expert</option>
    <option value="DC">DC</option>
    <option value="Disney™">Disney™</option>
    <option value="Disney Mickey and Friends">Disney Mickey and Friends</option>
    <option value="DOTS">DOTS</option>
    <option value="DUPLO®">DUPLO®</option>
    <option value="Friends">Friends</option>
    <option value="Frost">Frost</option>
    <option value="Harry Potter™">Harry Potter™</option>
    <option value="Ideas">Ideas</option>
    <option value="Jurassic World™">Jurassic World™</option>
    <option value="LEGO® Art">LEGO® Art</option>
    <option value="LEGO® Education">LEGO® Education</option>
    <option value="LEGO® Super Mario™">LEGO® Super Mario™</option>
    <option value="Marvel">Marvel</option>
    <option value="MINDSTORMS®">MINDSTORMS®</option>
    <option value="Minecraft®">Minecraft®</option>
    <option value="Minifigurer">Minifigurer</option>
    <option value="Minions">Minions</option>
    <option value="Monkie Kid™">Monkie Kid™</option>
    <option value="NINJAGO®">NINJAGO®</option>
    <option value="Power Functions">Power Functions</option>
    <option value="Powered UP">Powered UP</option>
    <option value="SERIOUS PLAY®">SERIOUS PLAY®</option>
    <option value="Speed Champions">Speed Champions</option>
    <option value="Spider-Man">Spider-Man</option>
    <option value="Star Wars™">Star Wars™</option>
    <option value="Stranger Things">Stranger Things</option>
    <option value="Technic">Technic</option>
    <option value="Trolls World Tour">Trolls World Tour</option>
    <option value="VIDIYO™">VIDIYO™</option>
    <option value="Xtra">Xtra</option>
  </select>
`;
	const select = document.getElementById('select-theme');
	select.addEventListener('change', () => console.log(select.value));
};

const evaluateThemeSelection = () => {};

// Set up your eventlisteners here
yesBtn.addEventListener('click', () => selectTheme());
noBtn.addEventListener('click', () => setTimeout(greeting, 1000));

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
