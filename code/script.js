
// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const form = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper')


// Functions goes here 👇
// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts an HTML section inside the chat with the posted message from the user
  if (sender === 'user') {
    console.log("message from user")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // The else if statement checks if the sender is the bot and if that's the case it inserts an HTML section inside the chat with the posted message from the bot
  } else if (sender === 'bot') {
    console.log("message from bot")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
}

// A function to start the conversation
const greetUser = () => {
  showMessage("Hello there, what's your name?", 'bot')

}
//funktion som heter handlenameinput, möjliggör att kunna skriva sitt namn.
//the name is stored for the entire session with the value "name"
const handleNameInput = (event) => {
  console.log("event", event)
  //this default prevents something
  event.preventDefault();
  //This connects with the html and collects the input value for "name"
  const name = nameInput.value;
  //This shows the message in the chatbubble 
  showMessage(name, "user");
  //This clears the input field 
  nameInput.value = "";
  setTimeout(() => movieOptions(name), 1000)
};

//eventlisteners - handlenameinput kallas när knappen klickas 
form.addEventListener("submit", handleNameInput);

//PART 2
// kallar på funktionen movieoptions 
const movieOptions = (name) => {
  //bot asking what type of moviegenre the user want to watch 
  showMessage(`Hello there ${name}, what's do you want to watch today?`, 'bot')
  //removing the eventlistener about name 
  form.removeEventListener("submit", handleNameInput);
  //adding eventlistener for movieoption when button is clicked

  // Hides the text-inputform and adds some more buttons, changed class to "genre-btn" and changed type to "button" to connect with event handleGenreClick
  form.innerHTML = `
        <button class="genre-btn" type="button">
          Action
        </button>
        <button class="genre-btn" type="button">
          Drama
        </button>
        <button class="genre-btn" type="button">
          Comedy
        </button>
      `
  //styles the buttons so that they are in the center
  form.style.display = 'flex';
  form.style.justifyContent = 'center';
  form.style.alignItems = 'center';

  const handleGenreClick = (event) => {
    event.preventDefault();
    if (event.target.classList.contains('genre-btn')) {
      form.innerHTML = "";

      showMessage(`${event.target.textContent}`, 'user');
      // Delay the display of the message from the bot and the options
      setTimeout(() => {
        chat.scrollTop = chat.scrollHeight
        showMessage(`You chose ${event.target.textContent}. Excellent choice! Before we start selecting movies, are you a grownup or a child?`, 'bot');
        ageOption();
      }, 700);
    }
  }

  form.addEventListener("click", handleGenreClick);
};

//PARTT 3: AGE
const ageOption = () => {
  form.innerHTML = `
        <button class="age-btn" type="button">
          Child
        </button>
        <button class="age-btn" type="button">
          Adult
        </button>
      `
  //styles the buttons so that they are in the center
  form.style.display = 'flex';
  form.style.justifyContent = 'center';
  form.style.alignItems = 'center';
  form.style.gap = '30px';

  const handleAgeClick = (event) => {
    event.preventDefault();
    if (event.target.classList.contains('age-btn')) {
      form.innerHTML = "";
      showMessage(`${event.target.textContent}`, 'user');
      // Delay the display of the message from the bot and the options
      setTimeout(() => {
        chat.scrollTop = chat.scrollHeight
        showMessage(`Alrighty then! Here are some ${event.target.textContent}friendly options for you:`, 'bot');
        SelectMovieOption();
      }, 700);

    }
    chat.scrollTop = chat.scrollHeight

  }
  form.addEventListener("click", handleAgeClick);

}

// PART 4
// Function to display movie options based on age group
const SelectMovieOption = (ageGroup) => {
  let options = "";

  if (ageGroup === "Child") {
    options = `
      <option value="movie1">Movie 1</option>
      <option value="movie2">Movie 2</option>
      <option value="movie3">Movie 3</option>
    `;
  } else if (ageGroup === "Adult") {
    options = `
      <option value="movie4">Movie 4</option>
      <option value="movie5">Movie 5</option>
      <option value="movie6">Movie 6</option>
    `;
  }

  //PART 5
  const SelectMovieOption = () => {
    inputWrapper.innerHTML = `
      <select id="movie-option" name="movie-genre">
      <option value="movie">movie</option>
      <option value="movie">movie</option>
      <option value="movie">movie</option>
      </select>
      <button id="submit-genre" type="button">Submit</button>
      `
    inputWrapper.style.display = 'flex';
    inputWrapper.style.width = '100%';
    inputWrapper.style.boxSizing = 'border-box';
    inputWrapper.style.padding = '10px';
    document.getElementById('movie-option').style.width = '400px';
    document.getElementById('movie-option').style.fontSize = '20px';


    // const handleAgeClick = (event) => {
    //   event.preventDefault();
    //   if (event.target.classList.contains('age-btn')) {
    //     form.innerHTML = "";
    //     showMessage(`${event.target.textContent}`, 'user');
    //     // Delay the display of the message from the bot and the options
    //     setTimeout(() => {
    //       showMessage
    //       showMessage(`Alrighty then! Here are some ${event.target.textContent}friendly options for you:`, 'bot');
    //       ageOption();
    //     }, 700);
    //   }
    // }
    // form.addEventListener("click", handleAgeClick);
  }

  setTimeout(greetUser, 1000)



