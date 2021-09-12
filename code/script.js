// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');

// If we have time it would be nice to add the replies automatically instead...
// const botReply = (msg) => {
//   showMessage(msg, 'bot')
// }

// const userReply = (msg) => {
//   showMessage(msg, 'user')
// }

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
        <img src="assets/dj.png" alt="User" />  
      </section>
    `;
	} else if (sender === 'bot') {
		// console.log('is this the bot?');
		chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/scuba-diver.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
	}
	// This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
	chat.scrollTop = chat.scrollHeight;
};

// This function clears the content in the innerHTML - used here to clear the input buttons when the chat ends
const clearInput = () => {
	inputWrapper.innerHTML = ``;
};

// Starts here
// This function will greet the user to the chat
const greeting = () => {
	showMessage(`Hello there, are you ready to place your order?`, 'bot');
  inputWrapper.innerHTML = `
  <button id="ready">Sure!</button>
  <button id="notReady">Not ready yet...</button
  `
  document.getElementById('ready').addEventListener('click', () => {
    showMessage(`Sure!`, 'user');
    startChatting();
  });
  document.getElementById('notReady').addEventListener('click', () => {
    showMessage(`Not ready yet...`, 'user');
    handleNotReady();
  });
}

// This function will get the chat started
const startChatting = () => {
  setTimeout(() => {showMessage(`Awesome! Please select the LEGO® theme you're interested in below.`, 'bot');
  selectTheme();}, 1000);
}

// This function will handle the not ready reply and ping the user to get started shopping
const handleNotReady = (message) => {
  setTimeout(() => {showMessage(`Hello again, are you ready to place your order now?`, 'bot');}, 2000);
  document.getElementById('notReady').addEventListener('click', () => {
  });
}

// This function will present the different LEGO themes available for shopping
const selectTheme = () => {
	inputWrapper.innerHTML = `
  <select id="select">
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
	const select = document.getElementById('select');
	select.addEventListener('change', () => evaluateThemeSelection(select.value));
};

// This function will handle the LEGO theme choice made by the user 
const evaluateThemeSelection = (selectedTheme) => {
	if (selectedTheme === "Star Wars™") {
    showMessage(selectedTheme, 'user');
		starWarsItems();
	} else {
    showMessage(selectedTheme, 'user');
    setTimeout(() => {showMessage(`Shoot! ${selectedTheme} is out of stock. How about Star Wars™ lego?`, 'bot');
    inputWrapper.innerHTML = `
    <button id="yesBtn">Ok! Show me what you got in stock!</button>
    <button id="notInterestedBtn">No, not interested.</button>
    `;
    document.getElementById('yesBtn').addEventListener('click', () => { 
      showMessage(`Ok. Show me what you got in stock!`, 'user');
      starWarsItems();
    });
    document.getElementById('notInterestedBtn').addEventListener('click', () => handleNotInterested());}, 1000);
	}
};


// This function will present the LEGO Star Wars items available for order
const starWarsItems = () => {
  setTimeout(() => {showMessage(`May the force be with you, you made the only valid choice 🥳 ! Choose one of our top picks:`, 'bot');
	inputWrapper.innerHTML = `
  <button id="btn1">Millenium Falcon</button>
  <button id="btn2">R2D2</button>
  <button id="btn3">Death Star</button>
    `;
	document.getElementById('btn1').addEventListener('click', () => confirmOrder('Millenium Falcon'));
	document.getElementById('btn2').addEventListener('click', () => confirmOrder('R2D2'));
	document.getElementById('btn3').addEventListener('click', () => confirmOrder('Death Star'));}, 1000);
};


// This function will handle the not interested reply 
const handleNotInterested = () => {
  showMessage(`No, not interested.`, 'user');
  goodByeMessage();
}

// This function will ask the user to confirm the purchase 
const confirmOrder = (item) => {
	showMessage(item, 'user');
	setTimeout(() => {showMessage(`Excellent choice! One ${item} have now been added to your cart. Are you happy with your order?`, 'bot');
	inputWrapper.innerHTML = `
  <button id="confirmBtn">Yes!</button>
  <button id="notConfirmedBtn">No!</button>
  `;
  document.getElementById('confirmBtn').addEventListener('click', () => thankYou(item));
  document.getElementById('notConfirmedBtn').addEventListener('click', () => {
    showMessage('No.', 'user');
    goodByeMessage();
});}, 1000);
}

// This function will close the deal and end the chat with Thank You message and order confirmation. 
const thankYou = (item) => {
  showMessage('Yes!', 'user');
  setTimeout(() => {showMessage(`Awesome! One ${item} will be sent to you from a galaxy far far away.`, 'bot');
  playSound ();
  clearInput();
});
}


const playSound = () => {
  inputWrapper.innerHTML = `
  <audio autoplay>
    <source src="./assets/star-wars-theme.mp3" type="audio/mpeg">
  </audio>
  `;
  document.getElementById("audio").play();
}

// This function will end the chat with the message "Ok, Good bye". 
const goodByeMessage = () => {
  setTimeout(() => {showMessage('Ok. Good bye.', 'bot');
  clearInput();}, 1000);
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);