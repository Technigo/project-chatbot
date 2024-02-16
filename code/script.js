// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");
const nameInput = document.getElementById("name-input");
const nameForm = document.getElementById("name-form");
const inputWrapper = document.getElementById("input-wrapper");

// Global variables
let userName = "";
let animalChoice = "";
let selectedType = "";
let gender = "";
let animalName = "";
let confirmApp = "";

// Functions goes here 👇
// This function inserts the animal option buttons into the html
const addAnimalButtons = () => {
  inputWrapper.innerHTML = `
    <button class="send-btn" id="cat">Cat</button>
    <button class="send-btn" id="dog">Dog</button>
    <button class="send-btn" id="horse">Horse</button>`;
};

// This function inserts the <select> menus into the html
// Which menu depends on which animal option was chosen
const addTypeMenu = () => {
  switch (animalChoice) {
    case "cat":
      inputWrapper.innerHTML = `
      <form id="animal-type">
        <select class="curtain" id="cat-select">
          <option value="choose" selected disabled>--Please select--</option>
          <option value="Persian">Persian</option>
          <option value="Siamese">Siamese</option>
          <option value="Maine Coon">Maine Coon</option>
          <option value="Bengal">Bengal</option>
          <option value="Scottish Fold">Scottish Fold</option>
        </select> 
        <button class="send-btn" id="send-btn" type="submit">Confirm</button>
      </form>`;
      break;
    case "dog":
      inputWrapper.innerHTML = `
      <form id="animal-type">
        <select class="curtain" id="dog-select">
          <option value="choose" selected disabled>--Please select--</option>
          <option value="Dachshund">Dachshund</option>
          <option value="Golden retriever">Golden retriever</option>
          <option value="Poodle">Poodle</option>
          <option value="Pomeranian">Pomeranian</option>
          <option value="Great Dane">Great Dane</option>
        </select> 
        <button class="send-btn" id="send-btn" type="submit">Confirm</button>
      </form>`;
      break;
    case "horse":
      inputWrapper.innerHTML = `
      <form id="animal-type">
        <select class="curtain" id="horse-select">
          <option value="choose" selected disabled>--Please select--</option>
          <option value="Shetland pony">Shetland pony</option>
          <option value="Thoroughbred">Thoroughbred</option>
          <option value="Andalusian">Andalusian</option>
          <option value="Connemara">Connemara</option>
          <option value="Ardennais">Ardennais</option>
        </select> 
        <button class="send-btn" id="send-btn" type="submit">Confirm</button>
      </form>`;
      break;
  }
};

// This function inserts the gender option buttons into the html
const addGenderButtons = () => {
  inputWrapper.innerHTML = `
    <button class="send-btn" id="male">Male</button>
    <button class="send-btn" id="female">Female</button>`;
};

// This function inserts a required contact form into the html
const addContactForm = () => {
  inputWrapper.innerHTML = `
  <form id="contact-form">
    <label>
      <input type="tel" name="tel" id="tel" placeholder="Phone" required/>
    </label>
    <label>
      <input type="email" name="email" id="email" placeholder="E-mail" required/>
    </label>
    <button class="send-btn" id="send-btn" type="submit">Send</button>
  </form>`;
};

// This function gives us the name of the user
const handleNameInput = (event) => {
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";
  // Check if the user has entered a name before moving on
  if (userName) {
    showMessage(userName, "user");
    setTimeout(chooseAnimal, 1000);
  } else {
    showMessage("I'm not sure that's a name. Please try again.", "bot");
  }
};

// The user is asked to choose between different animals by clicking buttons
const chooseAnimal = () => {
  showMessage(
    `Happy to meet you, ${userName}! What type of animal are you interested in adopting?`,
    "bot"
  );
  // Animal choice buttons are added to the html
  addAnimalButtons();
  // Depending on which button is clicked, the id of the clicked button is added to the animalChoice variable
  const animalButton = document.querySelectorAll(".send-btn");
  console.log(animalButton);
  animalButton.forEach((animalButton) => {
    animalButton.addEventListener("click", (event) => {
      animalChoice = event.target.id;
      console.log(animalChoice);
      showMessage(`I'd like a ${animalChoice}.`, "user");
      // We then move on to choosing a type of the chosen animal
      setTimeout(chooseType, 1000);
    });
  });
};

// The user is asked to choose a type within the selected animalChoice category by using a <select> menu
const chooseType = () => {
  showMessage(
    `Oh, a ${animalChoice}, a great choice! And what type of ${animalChoice} would you prefer?`,
    "bot"
  );
  // The <select> menu is added to the html
  addTypeMenu();
  // By changing the option in the <select> menu, the text within the option is added to the selectedType variable
  const typeMenu = document.querySelectorAll(".curtain");
  typeMenu.forEach((typeMenu) => {
    typeMenu.addEventListener("change", () => {
      selectedType = typeMenu.options[typeMenu.selectedIndex].text;
      console.log(selectedType);
    });
  });
  // By pressing the Confirm button, the selectedType is confirmed
  const animalTypeForm = document.getElementById("animal-type");
  animalTypeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Check if the user has selected a type before moving on
    if (selectedType) {
      showMessage(`${selectedType}, please.`, "user");
      setTimeout(genderChoice, 1000);
    } else {
      showMessage(`Please select a type of ${animalChoice}.`, "bot");
    }
  });
};

// The user is asked to choose the gender
const genderChoice = () => {
  showMessage(
    `Oh, a ${selectedType}, lovely! What gender would you like?`,
    "bot"
  );
  // Gender buttons are added into the html
  addGenderButtons();
  // Depending on which button is clicked, the id of the clicked button is added to the gender variable
  const genderButton = document.querySelectorAll(".send-btn");
  console.log(genderButton);
  genderButton.forEach((genderButton) => {
    genderButton.addEventListener("click", (event) => {
      gender = event.target.id;
      console.log(gender);
      showMessage(`A ${gender}, please.`, "user");
      setTimeout(contactInfo, 1000);
      switch (gender) {
        case "male":
          animalName = "Snufkin";
          break;
        case "female":
          animalName = "Ophelia";
          break;
      }
    });
  });
};

// The user can review their choices and is asked to fill in their contact information
const contactInfo = () => {
  showMessage(
    `A ${gender} ${selectedType}, you say. We have just the right ${animalChoice} for you! ${animalName} is just what you're looking for. 
  Please enter your contact information.`,
    "bot"
  );
  // Contact information form is added into the html
  addContactForm();
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (event) => {
    const telNo = document.getElementById("tel").value;
    const userEmail = document.getElementById("email").value;
    showMessage(`${telNo}, ${userEmail}`, "user");
    event.preventDefault();
    setTimeout(handleApplication, 1000);
  });
};

// The user is asked to confirm their application by clicking buttons
const handleApplication = () => {
  showMessage(`Great! Would you like to confirm your application?`, "bot");
  inputWrapper.innerHTML = `
    <button class="send-btn" id="Yes">Yes</button>
    <button class="send-btn" id="No">No</button>`;
  document.querySelector("#Yes").addEventListener("click", () => {
    confirmApp = "yes";
    showMessage("Yes", "user");
    setTimeout(appConfirmation, 1000);
  });
  document.querySelector("#No").addEventListener("click", () => {
    confirmApp = "no";
    showMessage("No", "user");
    setTimeout(appConfirmation, 1000);
  });
};

// The user is asked to confirm their application
const appConfirmation = () => {
  if (confirmApp === "yes") {
    showMessage(
      `Thank you! We will contact you as soon as we have processed your application.`,
      "bot"
    );
  } else if (confirmApp === "no") {
    showMessage(
      "That's ok. Our furry friends will still be here waiting for their forever home.",
      "bot"
    );
  }
  //This inputwrapper "" get rid of the buttons.
  inputWrapper.innerHTML = "";
};

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // The if statement checks if the sender is the user and if that's the case it inserts
  // an HTML section inside the chat with the posted message from the user
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/dog-icon.png" alt="User" />  
      </section>
    `;
    // The else if statement checks if the sender is the bot and if that's the case it inserts
    // an HTML section inside the chat with the posted message from the bot
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/cat-icon.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  // This little thing makes the chat scroll to the last message when there are too many to
  // be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// A function to start the conversation
const greetUser = () => {
  // Here we call the function showMessage, that we declared earlier with the argument:
  // "Hello there, what's your name?" for message, and the argument "bot" for sender
  showMessage("Hello! What's your name?", "bot");
  // Just to check it out, change 'bot' to 'user' here 👆 and see what happens
};

// Eventlisteners goes here 👇

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);

nameForm.addEventListener("submit", handleNameInput);
