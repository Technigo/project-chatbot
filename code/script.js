// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
//const username = nameInput.value; // this won't work here because nameInput does not yet have a value, will only show up empty
const input = document.getElementById('input-wrapper');

// If you need any global variables that you can use across different functions, declare them here:

let username = ""; // by declaring username at the top with let, will allow it to be assigned new values later in the code and reused throughout functions.

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
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}


  // Starts here - The greetUser function that is called at the end and starts the chat bot running is defined here.
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, crafter! Who do I have the pleasure of speaking with today?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}


//This makes the submit button clickable and makes the first bubble pop up.
form.addEventListener('submit', (event) => {
  event.preventDefault()
  username = nameInput.value // isn't just defined locally b/c haven't reused "let", adding the declared value to the global "let username ="
  showMessage(username, 'user')
  setTimeout(() => showBotResponseOne(), 500) //calling showBotResponse 500ms after the user's name shows up
});


//This is where the showBotResponse function is declared - this will show the bot's response to the user's name.
const showBotResponseOne = () => { 
  showMessage(`Hi there, ${username}! Are you interested in getting quilting, crochet, or cross-stitch ideas?`, 'bot')
  input.innerHTML = `
    <button id="quilt-button">Quilting</button>
    <button id="crochet-button">Crochet</button>
    <button id="cross-button">Cross-Stitch</button>
  `
  showCraftButtons(); //This function lives here instead of outside of this function because it ensures that the buttons exist in the HTML before they are called.
                      //if this was placed outside of this function, it would be called immediately, the buttons wouldn't exist yet, and the code would break.
}


//This is where the function that will show the buttons for each craft option is declared.
const showCraftButtons = () => { //once the variables and eventListeners are stored in a function they can be called at any point and don't make the code break.

  const quiltButton = document.getElementById('quilt-button');
  const crochetButton = document.getElementById('crochet-button');
  const crossButton = document.getElementById('cross-button');

  quiltButton.addEventListener('click', () => {
    showMessage (`Quilt Ideas, please!`,"user");
    setTimeout(() => showQuiltEasyHardButtons(), 500); //This calls the function to show Easy and Hard buttons.
  });

  crochetButton.addEventListener('click', () => {
    showMessage (`Crochet Ideas, please!`,"user");
    setTimeout(() => showCrochetEasyHardButtons(), 500);
  });

  crossButton.addEventListener('click', () => {
    showMessage (`Cross-Stitch Ideas, please!`,"user");
    setTimeout(() => showCrossEasyHardButtons(), 500);
  });

}


//These functions declarations will show Easy and Hard buttons for each craft option when called.
const showQuiltEasyHardButtons = () => {
  showMessage(`Sounds good!  Would you like a suggestion for an easier project or a harder project?`, 'bot')
  input.innerHTML = `
    <button id="quilt-easy-button">Easier &#127856</button>
    <button id="quilt-hard-button">Harder &#128640</button>
  `
  useQuiltEasyHardButtons();  //This calls the functions that make something happen when you click the Easy and Hard buttons. 
}

const showCrochetEasyHardButtons = () => {
  showMessage(`Sounds good!  Would you like a suggestion for an easier project or a harder project?`, 'bot')
  input.innerHTML = `
    <button id="crochet-easy-button">Easier &#127856</button>
    <button id="crochet-hard-button">Harder &#128640</button>
  `
  useCrochetEasyHardButtons();
}

const showCrossEasyHardButtons = () => {
  showMessage(`Sounds good!  Would you like a suggestion for an easier project or a harder project?`, 'bot')
  input.innerHTML = `
    <button id="cross-easy-button">Easier &#127856</button>
    <button id="cross-hard-button">Harder &#128640</button>
  `
  useCrossEasyHardButtons();
}


//Thes functions declared here make the Easy and Hard buttons clickable, then call the functions that make something happen once they've been clicked.
const useQuiltEasyHardButtons = () => {
  
  const quiltEasyButton = document.getElementById('quilt-easy-button');
  const quiltHardButton = document.getElementById('quilt-hard-button');
  
  quiltEasyButton.addEventListener('click', () => {
    // console.log("Quilt E");
    showMessage(`Easier is better!`, "user");
    
    offerEasyQuilt(); //This calls the function that responds to the users request for an easy quilt idea and provides the idea.
  });

  quiltHardButton.addEventListener('click', () => {
    // console.log("Quilt H");
    showMessage(`I want more of a challenge!`, "user");

    offerHardQuilt();
  });
}

const useCrochetEasyHardButtons = () => {
  
  const crochetEasyButton = document.getElementById('crochet-easy-button');
  const crochetHardButton = document.getElementById('crochet-hard-button');

    crochetEasyButton.addEventListener('click', () => {
    // console.log("Crochet E");
    showMessage(`Easier is better!`, "user");

    offerEasyCrochet();
  });

  crochetHardButton.addEventListener('click', () => {
    // console.log("Crochet H");
    showMessage(`I want more of a challenge!`, "user");

    offerHardCrochet();
  });
}

const useCrossEasyHardButtons = () => {
  
  const crossEasyButton = document.getElementById('cross-easy-button');
  const crossHardButton = document.getElementById('cross-hard-button');

  crossEasyButton.addEventListener('click', () => {
    // console.log("Cross-stitch E");
    showMessage(`Easier is better!`, "user");

    offerEasyCross();
  });

  crossHardButton.addEventListener('click', () => {
    // console.log("Cross-stitch H");
    showMessage(`I want more of a challenge!`, "user");

    offerHardCross();
  });
}


//This is where the functions for the bot's last responses and idea offers are declared.
const offerEasyQuilt = () => {
  showMessage(`Easy peasy, lemon squeezy!`, "bot");
  chat.innerHTML += `
  <section class="bot-msg">
    <img src="assets/bot.png" alt="Bot" />
    <div class="bubble bot-bubble">
      <img src="assets/quilteasy.jpg" class="idea-img" alt="easy quilt idea" />
    </div>
  </section>
  `
  input.innerHTML = `
  <button id="thanks-bye">Thanks, bye!</button>
  <button id="new-idea">Nah, I want a new idea.</button>
  `
  finalButtons(); 

  chat.scrollTop = chat.scrollHeight;
}

const offerHardQuilt = () => {
  showMessage(`Oooo! A challenge? No problem, Boblem!`, "bot");
  chat.innerHTML += `
  <section class="bot-msg">
    <img src="assets/bot.png" alt="Bot" />
    <div class="bubble bot-bubble">
      <img src="assets/quilthard.jpg" class="idea-img" alt="harder quilt idea" />
    </div>
  </section>
  `
  input.innerHTML = `
  <button id="thanks-bye">Thanks, bye!</button>
  <button id="new-idea">Nah, I want a new idea.</button>
  `
  finalButtons(); 

  chat.scrollTop = chat.scrollHeight;
}

const offerEasyCrochet = () => {
  showMessage(`Easy peasy, lemon squeezy!`, "bot");
  chat.innerHTML += `
  <section class="bot-msg">
    <img src="assets/bot.png" alt="Bot" />
    <div class="bubble bot-bubble">
      <img src="assets/crocheteasy.jpg" class="idea-img" alt="easy crochet idea" />
    </div>
  </section>
  `
  input.innerHTML = `
  <button id="thanks-bye">Thanks, bye!</button>
  <button id="new-idea">Nah, I want a new idea.</button>
  `
  finalButtons(); 

  chat.scrollTop = chat.scrollHeight;
}

const offerHardCrochet = () => {
  showMessage(`Oooo! A challenge? No problem, Boblem!`, "bot");
  chat.innerHTML += `
  <section class="bot-msg">
    <img src="assets/bot.png" alt="Bot" />
    <div class="bubble bot-bubble">
      <img src="assets/crochethard.jpg" class="idea-img" alt="harder crochet idea" />
    </div>
  </section>
  `
  input.innerHTML = `
  <button id="thanks-bye">Thanks, bye!</button>
  <button id="new-idea">Nah, I want a new idea.</button>
  `
  finalButtons(); 

  chat.scrollTop = chat.scrollHeight;
}

const offerEasyCross = () => {
  showMessage(`Easy peasy, lemon squeezy!`, "bot");
  chat.innerHTML += `
  <section class="bot-msg">
    <img src="assets/bot.png" alt="Bot" />
    <div class="bubble bot-bubble">
      <img src="assets/crosseasy.jpg" class="idea-img" alt="easy cross-stitch idea" />
    </div>
  </section>
  `
  input.innerHTML = `
  <button id="thanks-bye">Thanks, bye!</button>
  <button id="new-idea">Nah, I want a new idea.</button>
  `
  finalButtons(); 

  chat.scrollTop = chat.scrollHeight;
}

const offerHardCross = () => {
  showMessage(`Oooo! A challenge? No problem, Boblem!`, "bot");
  chat.innerHTML += `
  <section class="bot-msg">
    <img src="assets/bot.png" alt="Bot" />
    <div class="bubble bot-bubble">
      <img src="assets/crosshard.jpg" class="idea-img" alt="harder cross-stitch idea" />
    </div>
  </section>
  `
  input.innerHTML = `
  <button id="thanks-bye">Thanks, bye!</button>
  <button id="new-idea">Nah, I want a new idea.</button>
  `
  finalButtons(); 

  chat.scrollTop = chat.scrollHeight;
}

const finalButtons = () => {

  const thanksButton = document.getElementById('thanks-bye');
  const newIdeaButton = document.getElementById('new-idea');

  thanksButton.addEventListener('click', () => {
    console.log('Thanks!')

    //any functions for thanks button to be called go here
  
  })

  newIdeaButton.addEventListener('click', () => {
    console.log('New Idea')
    
    //any functions for new idea button go here
    showBotResponseOne();
  })

  
} 


// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 500);