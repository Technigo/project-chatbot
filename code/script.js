// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const form = document.getElementById("name-form");
const inputValue = document.getElementById("name-input");

// If you need any global variables that you can use across different functions, declare them here:
let currentQuestion = 0;
let userName = "";
let favorite = "";
const setTimeOutTime = 1200;

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-avatar.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/catbot.png" alt="Bot" />
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
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage(
    "Welcome to Cat Bot the Chat bot. What's your first name?",
    "bot"
  );
  chat.scrollTop = chat.scrollHeight;
};

//Bot says hello to user and asks the user which their favorite animal is by providing a choice of buttons.
//The value from the button choice is stored in the global variable Favorite.
const favoritePersonality = () => {
  showMessage(
    `Hello ${userName}! Which cat personality is your favorite?`,
    "bot"
  );
  inputWrapper.innerHTML = `
  <button class="primary-button" id="cuddly" value="cuddly">Cuddly</button>
  <button class="secondary-button" id="antisocial" value="antisocial">Antisocial</button>
`;

  const cuddly = document.getElementById("cuddly");
  cuddly.addEventListener("click", () =>
    handleFavoritePersonality(cuddly.value)
  );

  const antisocial = document.getElementById("antisocial");
  antisocial.addEventListener("click", () =>
    handleFavoritePersonality(antisocial.value)
  );
  chat.scrollTop = chat.scrollHeight;
};

//Bot asks which type of cat the user prefers by providing a list of choices. The value is stored.
const preferredType = () => {
  showMessage(`Which type of cat do you prefer`, "bot");
  inputWrapper.innerHTML = `
<select id="select">
<option disabled selected value="">Select your favorite type of cat</option>
<option id="domestic-long-haired-cat" value="Domestic Long-Haired Cat/Non-Breed">Domestic Long-Haired Cat/Non-Breed</option>
<option id="domestic-short-haired-cat" value="Domestic Short-Haired Breed">Domestic Short-Haired Breed</option>
<option id="short-haired-breed" value="Short-Haired Breed">Short-Haired Breed</option>
<option id="long-haired-breed" value="Long-Haired Breed">Long-Haired Breed</option>
   </select>
`;
  const select = document.getElementById("select");
  select.addEventListener("change", () => handlePreferredType(select.value));
  chat.scrollTop = chat.scrollHeight;
};

//The bot shows the user their previous choice of favorite animal and asks if the user
//would like to adopt a cat by providing a choice of buttons.
const adopt = () => {
  showMessage(
    `Great! We have found the perfect ${favorite} cat for you. 
    Would you like to adopt a cat?`,
    "bot"
  );
  inputWrapper.innerHTML = `
  <button class="primary-button" id="yes" value="yes">Yes!</button>
  <button class="secondary-button" id="maybe" value="maybe">I'll think about it</button>
  <button class="primary-button" id="no" value="no">No</button>
`;
  const userResponseYes = document.getElementById("yes");
  userResponseYes.addEventListener("click", () =>
    handleAdoptACat(userResponseYes.value)
  );

  const userResponseMaybe = document.getElementById("maybe");
  userResponseMaybe.addEventListener("click", () =>
    handleAdoptACat(userResponseMaybe.value)
  );

  const userResponseNo = document.getElementById("no");
  userResponseNo.addEventListener("click", () =>
    handleAdoptACat(userResponseNo.value)
  );
  chat.scrollTop = chat.scrollHeight;
};

const farewellMessage = (message) => {
  showMessage(message, "bot");
  inputWrapper.innerHTML = ``;
  chat.scrollTop = chat.scrollHeight;
};

//Handles the order of which function to run.
const handleInput = (message) => {
  message.preventDefault();
  currentQuestion++;
  if (currentQuestion === 1) {
    handleUserName();
  } else if (currentQuestion === 2) {
    handleFavoritePersonality();
  } else if (currentQuestion === 3) {
    handlePreferredType();
  } else {
    handleAdoptACat();
  }
};

//Handles the user input for user name.
const handleUserName = () => {
  // console.log(`${inputValue.value}`);
  const input = inputValue.value;

  //Changes user input of the first letter to uppercase.
  const capitalized = input.charAt(0).toUpperCase() + input.slice(1);
  userName = capitalized;
  showMessage(`${userName}`, "user");
  inputValue.value = "";
  setTimeout(favoritePersonality, setTimeOutTime);
};

//Shows user's choice of favorite cat personality in a string.
const handleFavoritePersonality = (chosenFavorite) => {
  favorite = chosenFavorite;
  showMessage(`My favorite cat personality is ${favorite}`, "user");
  inputValue.value = ``;
  setTimeout(preferredType, setTimeOutTime);
};

////Shows user's preference of type of cat in a string.
const handlePreferredType = (preferredCatType) => {
  console.log(`${inputValue.value}`);
  showMessage(`I prefer the ${preferredCatType}`, "user");
  inputValue.value = ``;
  setTimeout(adopt, setTimeOutTime);
};

//Conditionals run different functions and messages based on the user's button choices yes, maybe or no.
const handleAdoptACat = (adopt) => {
  if (adopt === "yes") {
    showMessage("Yes!", "user");
    inputValue.value = ``;
    setTimeout(
      farewellMessage(`Thank you, we will be in touch, cat lover!`),
      setTimeOutTime
    );
  } else if (adopt === "maybe") {
    showMessage("I'll think about it", "user");
    inputValue.value = ``;
    setTimeout(
      farewellMessage(
        `That's ok, you will learn to love cats soon, I promise!`
      ),
      setTimeOutTime
    );
  } else {
    showMessage("No", "user");
    inputValue.value = ``;
    setTimeout(farewellMessage(`Ok, good bye.`), setTimeOutTime);
  }
};

// Set up your eventlisteners here
form.addEventListener("submit", handleInput);

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, setTimeOutTime);
