
// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat')
const nameInput = document.getElementById('name-input')
const form = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper');

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
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
  chat.scrollTop = chat.scrollHeight;
}

// A function to start the conversation
const greetUser = () => {
  showMessage("Hello there, what's your name?", 'bot')

}
//the name is stored for the entire session with the value "name"
const handleNameInput = (event) => {
  console.log("event", event)
  // Prevents the form from reloading the page when submitted  
  event.preventDefault();
  //This collects the input value for "name"
  const name = nameInput.value;
  showMessage(name, "user");
  //This clears the input field 
  nameInput.value = "";
  setTimeout(() => movieOptions(name), 1000)
};

//eventlisteners - handlenameinput is called when btn "submit" is pressed 
form.addEventListener("submit", handleNameInput);

//PART 2
// calles the function movieOptions 
const movieOptions = (name) => {
  showMessage(`Hello there ${name}, what's do you want to watch today?`, 'bot')
  //removing the eventlistener about name 
  form.removeEventListener("submit", handleNameInput);
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
      const selectedGenre = event.target.textContent.trim();
      form.innerHTML = "";

      showMessage(`${selectedGenre}`, 'user');
      // Delay the display of the message from the bot and the options
      setTimeout(() => {
        chat.scrollTop = chat.scrollHeight
        showMessage(`You chose ${selectedGenre}. Excellent choice! Before we start selecting movies, are you a grownup or a child?`, 'bot');
        ageOption(selectedGenre);
      }, 1000);
    }
  }

  form.addEventListener("click", handleGenreClick);
};

//PARTT 3: AGE
let selectedAgeGroup = "";

const ageOption = (genre) => {
  console.log('Received genre:', genre);
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
      const selectedAgeGroup = event.target.textContent.trim();
      form.innerHTML = "";
      showMessage(`${selectedAgeGroup}`, 'user');
      // Delay the display of the message from the bot and the options
      setTimeout(() => {
        chat.scrollTop = chat.scrollHeight
        showMessage(`Alrighty then! Here are some ${selectedAgeGroup} friendly options for you:`, 'bot');
        SelectMovieOption(selectedAgeGroup, genre);
      }, 1000);

    }
    chat.scrollTop = chat.scrollHeight

  }
  form.addEventListener("click", handleAgeClick);

}

// PART 4
// Function to display movie options based on age and genre option

const SelectMovieOption = (selectedAgeGroup, selectedGenre) => {
  console.log('SelectMovieOption called with:', selectedAgeGroup, selectedGenre);

  let options = "";
  console.log('Age Group:', selectedAgeGroup);
  console.log('Genre:', selectedGenre);

  if (selectedAgeGroup === "Child" && selectedGenre === "Action") {
    options = `
      <option>Spy Kids</option>
      <option>Harry Potter</option>
      <option>The Incredibles</option>
    `;

  } else if (selectedAgeGroup === "Child" && selectedGenre === "Drama") {
    options = `
      <option>Swim Team</option>
      <option>Charlotte's Web</option>
      <option>Inside Out</option>
    `;
  } else if (selectedAgeGroup === "Child" && selectedGenre === "Comedy") {
    options = `
      <option>Freaky Friday</option>
      <option>Home Alone</option>
      <option>Shrek</option>
      `;
  } else if (selectedAgeGroup === "Adult" && selectedGenre === "Action") {
    options = `
      <option>Deadpool</option>
      <option>Kill Bill</option>
      <option>Aliens</option>
    `;
  } else if (selectedAgeGroup === "Adult" && selectedGenre === "Drama") {
    options = `
      <option>The Godfather</option>
      <option>Schindler's List</option>
      <option>Clockwork Orange</option>
    `;
  } else if (selectedAgeGroup === "Adult" && selectedGenre === "Comedy") {
    options = `
      <option>The Hangover</option>
      <option>Bridesmaids</option>
      <option>Juno</option>
    `;
  }
  inputWrapper.innerHTML = `
    <select id="movie-option" name="movie-genre">
      <option value="">Select a movie here: 👇</option>
      ${options}
    </select>
    <button id="submit-movie" type="button">Submit</button>
  `;
  console.log('inputWrapper:', inputWrapper);

  inputWrapper.style.display = 'flex';
  inputWrapper.style.width = '100%';
  inputWrapper.style.boxSizing = 'border-box';
  inputWrapper.style.padding = '10px';
  document.getElementById('movie-option').style.width = '400px';
  document.getElementById('movie-option').style.fontSize = '20px';

  inputWrapper.addEventListener('click', handleSelectMovieOption);

  // Log options for debugging
  console.log('Options:', options);

}

const handleSelectMovieOption = (event) => {
  //targets the specific movie and not all three options that are stored in the value "options"
  const selectedMovie = document.getElementById('movie-option').value;

  if (selectedMovie) {
    event.preventDefault();
    inputWrapper.innerHTML = "";

    showMessage(`${selectedMovie}`, 'user');
    // Delay the display of the message from the bot
    setTimeout(() => {
      chat.scrollTop = chat.scrollHeight;
      showMessage(`You selected ${selectedMovie}. A fine choice! That will be: $4. Would you like to rent this movie?`, 'bot');
      confirmation(selectedMovie)
    }, 1000);
  }
}


const confirmation = () => {
  form.innerHTML = `
     <button class="yes-btn" type="button">
      Yes, thank you!
             </button>
          <button class="no-btn" type="button">
             No, I changed my mind.
          </button>
         `

  // Style the form and add event listener
  form.style.display = 'flex';
  form.style.justifyContent = 'center';
  form.style.alignItems = 'center';
  form.style.gap = '30px';

  form.addEventListener('click', handleConfirmationClick);
};

// Handle confirmation click
const handleConfirmationClick = (event) => {
  event.preventDefault();
  const button = event.target;

  if (button.classList.contains('yes-btn')) {
    const selectedConfirmation = button.textContent.trim();
    form.innerHTML = "";
    showMessage(`${selectedConfirmation}`, 'user');

    setTimeout(() => {
      chat.scrollTop = chat.scrollHeight;
      showMessage(`You clicked ${selectedConfirmation}. Grab your popcorn, ${selectedMovie} is on its way!`, 'bot');
    }, 1000);
  } else if (button.classList.contains('no-btn')) {
    const selectedConfirmation = button.textContent.trim();
    form.innerHTML = "";

    setTimeout(() => {
      chat.scrollTop = chat.scrollHeight;
      showMessage(`${selectedConfirmation}`, 'user');
      showMessage(`You clicked ${selectedConfirmation}, your order has been canceled. Have a great day!`, 'bot');
    }, 1000);
  }
};



setTimeout(greetUser, 1000)  
