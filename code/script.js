// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');

// Global variables, if you need any, declared here

let answer = 1;

// Functions declared here

const handleNameInput = (event) => {
  event.preventDefault()
  const name = nameInput.value;
  showMessage(name, 'user');
  nameInput.value = "";
  inputWrapper.innerHTML = "";
  setTimeout(() => showMessage(`Hi ${name}! I am here to assist you booking a trip.`, 'bot'),1000);
  setTimeout(() => askWhereTo(),2500);
}

const askWhereTo = () => {
  showMessage("Are you planning a trip within Europe or outside Europe?","bot");

  inputWrapper.innerHTML=`
  <button id="button-europe">
    Within Europe
  </button>
  <button id="button-outside">
    Outside Europe
  </button>
  `
  document
  .getElementById("button-europe")
  .addEventListener("click", () => {
  showMessage("Within Europe", "user")
  inputWrapper.innerHTML = "";
  setTimeout(() => showMessage("Wonderful! There is so much to explore in Europe.", "bot"), 1500);
  setTimeout(() => showMessage("We have a great variety of destinations at the moment.", "bot"),3000);
  setTimeout(() => askType(), 5000);
  })

  document
  .getElementById("button-outside")
  .addEventListener("click", () => {
  showMessage("Outside Europe", "user")
  inputWrapper.innerHTML = "";
  setTimeout(() => showMessage("Great, so somewhere far then!", "bot"),1500);
  setTimeout(() => showMessage("We have a great variety of destinations at the moment.", "bot"),3000);
  setTimeout(() => askType(), 5000);
  })
}


const askType = () => {
 showMessage("What kind of trip are you planning?", "bot");

    inputWrapper.innerHTML=`
  <button id="button-solotrip">
    Solo trip
  </button>
  <button id="button-friendstrip">
  Friends trip
  </button>
  <button id="button-romantictrip">
    Romantic trip
  </button>
  <button id="button-familytrip">
  Family trip
  </button>
  `

  chat.scrollTop = chat.scrollHeight;
  document
  .getElementById("button-solotrip")
  .addEventListener("click", () => {
  showMessage("A solo trip", "user")
  answer = 1;
  inputWrapper.innerHTML = "";
  setTimeout(() => askTypeFollowUp(),1000);
  })

  document
  .getElementById("button-friendstrip")
  .addEventListener("click", () => {
  showMessage("A trip with friends", "user")
  answer = 2;
  inputWrapper.innerHTML = "";
  setTimeout(() => askTypeFollowUp(),1000);
  })

  document
  .getElementById("button-romantictrip")
  .addEventListener("click", () => {
  showMessage("A romantic trip", "user")
  answer = 3;
  inputWrapper.innerHTML = "";
  setTimeout(() => askTypeFollowUp(),1000);
  })

  document
  .getElementById("button-familytrip")
  .addEventListener("click", () => {
  showMessage("A family trip", "user")
  answer = 4;
  inputWrapper.innerHTML = "";
  setTimeout(() => askTypeFollowUp(),1000);
  })
  
 }

const askTypeFollowUp = () => {
  if (answer === 1) {
    showMessage("Nice! There is lot of freedom in solo travelling.", "bot");
    setTimeout (() => askDestination(),1500);
  } else if (answer === 2) {
    showMessage ("So much fun to travel with friends! How many will join?" , "bot");
    setTimeout (() =>askHowMany(),1500);
  } else if (answer === 3) {
    showMessage ("Aww sweet!", "bot");
    setTimeout (() => askDestination(),1500);
  } else {
    showMessage ("Family-time is the best! How many are you?", "bot");
    setTimeout (() => askHowMany(),1500);
  }
}

const askHowMany = () => {
  inputWrapper.innerHTML = `
  <form id="answer-form">
    <input id ="input" class="answer-input" type="number" placeholder="Type the total amount of travellers here"/>
    <button class="send-btn" type="submit">
      Send
    </button>
  </form>
  `; 

  chat.scrollTop = chat.scrollHeight;
  const answerForm = document.getElementById('answer-form');
  answerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = input.value;
  showMessage(answer, "user");
  input.value = "";
  inputWrapper.innerHTML = "";
  if (answer >= 10 ) {
    setTimeout (() => showMessage("Wow! That is a big group", 'bot'),1000);
  } else if (answer >= 5) {
    setTimeout (() => showMessage("The more the merrier!!", 'bot'),1000);
  } else if (answer > 1) {
    setTimeout (() => showMessage("Nice to have a little travel company.", "bot"),1000);
  } else {
    setTimeout (() => showMessage("Ahh you mean a solo trip then.", "bot"),1000);
  }
  setTimeout(() => askDestination(), 3000);
  })
}
  
const askDestination = () => {
  showMessage ("What kind of destination are you looking for? ","bot");

  inputWrapper.innerHTML = `
    <select id = "select" class="select">
      <option value="" selected disabled> Select your destination</option>
      <option value="Nature" id="nature">Nature</option>
      <option value="Beach" id="beach">Beach</option>
      <option value="City" id="city">City</option>
      <option value="Adventure" id="adventure">Adventure</option>
    </select>
  `;
  chat.scrollTop = chat.scrollHeight;
  const selectDestination = document.getElementById('select');
    selectDestination.addEventListener("change", () => {
      showMessage(selectDestination.value, "user");
      inputWrapper.innerHTML = "";
      setTimeout(() => askDuration(), 1500);
    })
}

const askDuration = () => {
  showMessage("What is the duration of you trip?", "bot");

  inputWrapper.innerHTML=`
  <button id="button-duration1">
    3 or less days
  </button>
  <button id="button-duration2">
    4 days 
  </button>
  <button id="button-duration3">
    5 days 
  </button>
  <button id="button-duration4">
    More than 5 days
  </button>
  `
  chat.scrollTop = chat.scrollHeight

  document
  .getElementById("button-duration1")
  .addEventListener("click", () => {
  showMessage("3 or less days", "user")
  answer = 1;
  inputWrapper.innerHTML = "";
  setTimeout(() => askTravelAgent(),1500);
  })

  document
  .getElementById("button-duration2")
  .addEventListener("click", () => {
  showMessage("4 days", "user")
  answer = 2;
  inputWrapper.innerHTML = "";
  setTimeout(() => askTravelAgent(),1500);
  })

  document
  .getElementById("button-duration3")
  .addEventListener("click", () => {
  showMessage("5 days", "user")
  answer = 3;
  inputWrapper.innerHTML = "";
  setTimeout(() => askTravelAgent(),1500);
  })

  document
  .getElementById("button-duration4")
  .addEventListener("click", () => {
  showMessage("More than 5 days", "user")
  answer = 4;
  inputWrapper.innerHTML = "";
  setTimeout(() => askTravelAgent(),3500);
  })

}

const askTravelAgent = () => {
  showMessage("Thank you! You are all set! Now I would like to connect you with our Travel Expert to create your customized travel plan. Please share your contact details below. ", "bot");
  
  inputWrapper.innerHTML = `
  <form id = "answer-form">
    <input id = "input" type="email" placeholder="Email Adress" />
    <button class="send-btn" type="submit">
      Send
    </button>
  </form>
  `;
  
  chat.scrollTop = chat.scrollHeight

  const answerForm = document.getElementById('answer-form');
  answerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = input.value;
  showMessage(answer, "user");
  inputWrapper.innerHTML = ""; 
  setTimeout(() => finalMessage(), 1500);
  })
    
}

const finalMessage = () => {
  showMessage("Thank you! Our travel agent will contact you shortly.", "bot");
}


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
    `
  } else if (sender === 'bot') {
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
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hi and welcome to Travel Planner! What's your name?`, 'bot')
}

// Set up your eventlisteners here
 form.addEventListener("submit", handleNameInput)
 setTimeout(greeting, 1000)