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
  setTimeout(() => showMessage(`Hi ${name}! I am here to assist you booking a trip.`, 'bot'),1000);
  handleQuestion1()
}

const handleQuestion1 = () => {
  setTimeout(() => showMessage("Where would you like to travel?","bot"),2000);

  inputWrapper.innerHTML=`
  <button id="button-italy">
    Italy
  </button>
  <button id="button-france">
  France
  </button>
  `
  document
  .getElementById("button-italy")
  .addEventListener("click", () => {
  showMessage("Italy", "user")
  setTimeout(() => showMessage("Wow! You want to go to Italy", "bot"), 1000);
  handleQuestion2()
  })

  document
  .getElementById("button-france")
  .addEventListener("click", () => {
  showMessage("France", "user")
  setTimeout(() => showMessage("Wow! You want to go to France.", "bot"),1000);
  handleQuestion2()
  })
}

const handleQuestion2 = () => {
  setTimeout(() => showMessage("Have you used TravelPlanner before?", "bot"),2000);
  inputWrapper.innerHTML = `
    <form id = "answer-form">
      <input id = "input" type="text" />
      <button class="send-btn" type="submit">
        Send
      </button>
    </form>
  `;

  const answerForm = document.getElementById('answer-form');
  answerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const answer = input.value;
    showMessage(answer, "user");
    input.value = "";
    if (answer === "yes") {
      setTimeout(() => showMessage("Great to have you back!", 'bot'),1000);
    } else {
      setTimeout(() => showMessage("Ok, let me walk you through the process.", 'bot'),1000);
    }

    handleQuestion3()
  })

  const handleQuestion3 = () => {
    setTimeout(() => showMessage("What kind of trip are you planning?", "bot"),2000);

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
  document
  .getElementById("button-solotrip")
  .addEventListener("click", () => {
  showMessage("Solo trip", "user")
  answer = 1;
  handleQuestion4()
  })

  document
  .getElementById("button-friendstrip")
  .addEventListener("click", () => {
  showMessage("Friends trip", "user")
  answer = 2;
  handleQuestion4()
  })

  document
  .getElementById("button-romantictrip")
  .addEventListener("click", () => {
  showMessage("Romantic trip", "user")
  answer = 3;
  handleQuestion4()
  })

  document
  .getElementById("button-familytrip")
  .addEventListener("click", () => {
  showMessage("Family trip", "user")
  answer = 4;
  handleQuestion4()
  })
  
 }

 const handleQuestion4 = () => {
   if (answer === 1) {
     showMessage("Nice! You will have a lot of time for yourself.", "bot");
     handleQuestion6()
   } else if (answer === 2) {
    showMessage ("Fantastic! How many people are you?" , "bot");
    handleQuestion5()
   } else if (answer === 3) {
     showMessage ("That is Lovley", "bot");
     handleQuestion6()
   } else {
     showMessage ("Great! How many are you?", "bot");
     handleQuestion5()
   }
 }

  const handleQuestion5 = () => {
    inputWrapper.innerHTML = `
    <form id = "answer-form">
      <input id = "input" type="text" />
      <button class="send-btn" type="submit">
        Send
      </button>
    </form>
  `; 

  const answerForm = document.getElementById('answer-form');
  answerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const answer = input.value;
    showMessage(answer, "user");
    input.value = "";
    if (answer >= 10 ) {
       showMessage("Wow! That is a big group", 'bot');
    } else if (answer >= 5) {
      showMessage("Nice with that many people!!.", 'bot');
    } else {
      showMessage("Nice with a bit smaller group!", "bot");
    }

  handleQuestion6()
  })
}

   const handleQuestion6 = () => {
      setTimeout (() => showMessage ("What kind of destination are you looking for? ","bot"),1000);
     inputWrapper.innerHTML = `
       <select id = "select">
        <option value="" selected disabled> Select your destination</option>
        <option value="Nature">Nature</option>
        <option value="Beach">Beach</option>
        <option value="City">City</option>
        <option value="Adventure"> Adventure</option>
       </select>
     
     `;

     const selectDestination = document.getElementById('select');
     selectDestination.addEventListener("change", () => {
       showMessage(selectDestination.value, "user");
       inputWrapper.innerHTML = "";

       handleQuestion7()
     })
  
   }

   const handleQuestion7 = () => {
     setTimeout (() => showMessage("What is the duration of you trip?", "bot"),1000);

     inputWrapper.innerHTML=`
      <button id="button-duration1">
        Less than 3 days
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

  document
  .getElementById("button-duration1")
  .addEventListener("click", () => {
  showMessage("Less than 3 days", "user")
  answer = 1;
  handleQuestion8()
  })

  document
  .getElementById("button-duration2")
  .addEventListener("click", () => {
  showMessage("4 days", "user")
  answer = 2;
  handleQuestion8()
  })

  document
  .getElementById("button-duration3")
  .addEventListener("click", () => {
  showMessage("5 days", "user")
  answer = 3;
  handleQuestion8()
  })

  document
  .getElementById("button-duration4")
  .addEventListener("click", () => {
  showMessage("More than 5 days", "user")
  answer = 4;
  handleQuestion8()
  })

  }

  const handleQuestion8 = () => {
    setTimeout (() => showMessage("I would like to connect you with our travel expert. Please share your Email. ", "bot"),1000);
    
    inputWrapper.innerHTML = `
    <form id = "answer-form">
      <input id = "input" type="email" />
      <button class="send-btn" type="submit">
        Send
      </button>
    </form>
  `; 


    const answerForm = document.getElementById('answer-form');
    answerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const answer = input.value;
    showMessage(answer, "user");
    input.value = "";
    })

  
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

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.


