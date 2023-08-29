// VARIABLES THAT POINT TO SELECTED DOM ELEMENTS
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const submitBtn = document.getElementById('submit-btn');
const inputField = document.getElementById('name-input');

// GLOBAL VARIABLES
let userAnswer = ""; // stores users answer in a variable globally for use anywhere

// FUNCTIONS
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
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
  };
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

const sayHello = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage(
    "Hello there, I'm the Movie Bot. What's your name?", 'bot'
  );
};

/* ------------- FIRST INTERACTION ------------- */
// "clickingPreventsDefault" prevents the default form from submitting
// Function to send the form. It runs the function showMessage, so that whatever the user has typed in is shown in the user part of the bot. 
const submitForm = (clickingPreventsDefault) => {
  clickingPreventsDefault.preventDefault();
  // gets the text (value) written in the input field and stores it in a the global variable userAnswer
  userAnswer = inputField.value;
  showMessage(`${userAnswer}`, 'user');
  // clears the inputfield after enter is pressed or the submit button has been clicked
  inputField.value = "";
  setTimeout(() => greetUserByName(), 1000)
};

/* ------------- SECOND INTERACTION ------------- */
const greetUserByName = () => {
  // Once the user has entered their name, they are shown a greeting message. The field and button in the form are removed to make room for yes and no buttons, which are then inserted with the createButtons function.
  showMessage(`Nice to meet you ${userAnswer}! Would you like a movie tip for tonight 😃?`, 'bot');
  inputField.remove();
  submitBtn.remove();
  createButtons();
};

/* ------------- THIRD INTERACTION ------------- */
const createButtons = () => {
  // Creates two new buttons in the HTML, one for yes and one for no.
  form.innerHTML += `
  <button class="answer-btn" id="yes-btn" type="submit" value="yes">Yes please 😍</button>
  <button class="answer-btn" id="no-btn" type="submit" value="no">No 👎</button>
`
  // This is where the "code" argument is replaced with the actual code
  insertStyle(`
    .answer-btn {
      width: 100%;
  }`
  );

  // stores buttonselemens in variables.
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');

  // This peace of code (and the one below) handle what will happen when clicking one of the buttons.
  yesBtn.addEventListener("click", () => {
    showMessage("Yes please 😍", "user"); // A duplicate of what is written in the button as a message in the chat from the user
    setTimeout(() => showMessage(`Amazing! What genre would you be interested in? 🍿`, "bot"), 1000); // An answer from the bot, with a follow-up question
    yesBtn.remove(); // Yes-button gets removed to make room for the select with options that comes further down
    noBtn.remove(); // No-button gets removed to make room for the select with options that comes further down
    setTimeout(() => chooseGenre(), 999) // Here I put 999 milliseconds, otherwise the selectdropdown was palced above the text to choose genre. This needed to come just a millisecond before for everything to look good!
  })

  noBtn.addEventListener("click", () => {
    showMessage("No 👎", "user");
    setTimeout(() => showMessage(`I understand, I hope you'll have an amazing night!`, "bot"), 1000);
    yesBtn.remove();
    noBtn.remove();
    setTimeout(() => endChat(), 1000)
  })
};

/* ------------- FOURTH INTERACTION ------------- */
// Creates the select dropdown with different genre-options
const chooseGenre = () => {
  form.innerHTML += `
    <select class="select-menu" id="room-type" name="room-type">
      <option value="" disabled selected>👇 Select a genre</option>
      <option value="drama">Drama</option>
      <option value="sci-fi">Sci-fi</option>
      <option value="thriller">Thriller</option>
    </select>
`
  // This is where the "code" argument is replaced with the actual code
  insertStyle(
    `.select-menu {
      box-sizing: border-box;
      border: none;
      border-radius: 4px;
      background: #e5e9ff;
      color: #0026ff;
      padding: 16px;
      font-size: 16px;
      font-family: 'Montserrat';
      font-weight: 600;
      line-height: 26px;
      flex: 1;
      -webkit-appearance: none;
      appearance: none;
    }`
  );

  // Declares a varaible for the select element to be used when getting the text content of it further down
  const selectDropDown = document.querySelector('.select-menu');

  // Function to check what genre the user has chosen.
  const checkValue = () => {
    // This varaible needs to be inside of the checkValue function, if it's outside of it, the code hasn't had time to "store" the value yet, and therefore it returns an error
    const genre = selectDropDown[selectDropDown.selectedIndex].text;

    if (genre == "Drama") {
      console.log("DRAMA")
    } else if (genre == "Sci-fi") {
      console.log("SCI-FI")
    } else if (genre == "Thriller") {
      console.log("Thriller")
    } else {
      console.log("Nothing...")
    }
  }
  selectDropDown.addEventListener("change", checkValue); // on the change of a select option, the code for checkValue is invoked.
};

// NEXT UP, CREATE A RESPONSE BSAED ON THE CHOSEN GENRE!!!!

/* Creates a function called style, that takes "code" as a parameter. A style-element is created and stored in a variable called "style". The "code" (placeholder for the code - the actual code is added in the argument of an other function) is then added into the style-element by using innerHTML. The style element is then appended into the element "head".*/
function insertStyle(code) {
  var style = document.createElement('style');
  style.innerHTML = code;
  document.getElementsByTagName("head")[0].appendChild(style);
};

// An extra message for when the user chooses to end the chat.
const endChat = () => {
  setTimeout(showMessage(`You can no close the window 🤓`, "bot"), 1000);
  form.remove(); // all form elements are removed to make the chat look closed
};


// EVENT LISTENERS
submitBtn.addEventListener("click", submitForm);

// MISC
// The greeting function will be called one second after the website is loaded.
setTimeout(sayHello, 1000);