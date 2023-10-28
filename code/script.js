// ----- Variables that point to selected DOM elements -----
const chat = document.getElementById("chat");
const ticketBtn = document.getElementById("ticket-btn");
const chatbot = document.getElementById("chatbot");
const inputWrapper = document.getElementById("input-wrapper");
const formInputField = document.getElementById("name-form");
const inputField = document.getElementById("name-input");
const ticketBtnContainer = document.getElementById("ticket-btn-container");
const sendBtn = document.getElementById("send-btn");

// If you need any global variables that you can use across different functions, declare them here:
let customerName = "";
let movieOption = "";
let showtimeOption = "";
let ticketOption = "";
let price = "";

const reservation = {
  type: ["Adult", "Student", "Child"],
  movies: [
    "Barbie (2023)",
    "Oppenheimer",
    "Teenage Mutant Ninja Turtles: Mutant Mayhem",
    "The Little Mermaid (2023)",
    "Aja baja Alfons Åberg",
    "Meg 2: The Trench",
  ],
  showtimesAvailable: ["12:00 PM", "3:00 PM", "6:00 PM"],
};

const ticketPrices = {
  // in us$
  adultPrice: [11],
  studentPrice: [8],
  childPrice: [4],
};

/* ----- Declare your functions after this comment ----- */

// Clears the input field.
const clearInputField = () => {
  inputField.value = "";
};

// Removes all child elements from a specified parent element.
function removeChildrenFunction() {
  while (inputWrapper.hasChildNodes()) {
    inputWrapper.removeChild(inputWrapper.firstChild);
  }
}

// Refreshes the page.
const reloadPage = () => {
  setTimeout(() => {
    location.reload();
  }, 3000);
};

// Chat sound.
const playAudio = () => {
  const notification = document.getElementById("notification");
  notification.volume = 0.6; // Set the volume to 60%
  notification.play();
};

// Will add a chat bubble in the correct place. ShowMessage function takes arguments "message" and "sender".
const showMessage = (message, sender) => {
  playAudio();
  // Checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message.
  if (sender === "user") {
    console.log(message);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-icon.svg" alt="User" />  
      </section>
    `;
    // Checks if the sender is a 'bot' and if that's the case it inserts an html section inside the chat with the posted message.
  } else if (sender === "bot") {
    console.log(message);
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot-icon.svg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  // Makes the chat scroll to the last message when there are too many in the chat box.
  chat.scrollTop = chat.scrollHeight;
  
};

// Bot pop-up-function.
// Adds a class to hide ticket-btn-container + removes class from chatbot so it's visible.
const botPopUp = () => {
  ticketBtnContainer.classList.add("ticketBtnContainer");
  chatbot.classList.remove("chatbot");
  setTimeout(() => greetUser(), 500);
};

ticketBtn.addEventListener("click", botPopUp);

// Start of the bot
// Greeting and Question 1
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "..." for message, and the argument "bot" for sender.
  showMessage("Welcome to the Cinema City TicketBot!", "bot");
  setTimeout(() => {
    showMessage(
      "To proceed, I need the name of the person who makes the reservation. Please, enter your name.",
      "bot"
    );
  }, 500);
  sendBtn.addEventListener("click", handleNameInput);
};

// Customer name pops up in chat on user's side.
const handleNameInput = (event) => {
  event.preventDefault();
  customerName = inputField.value;

  if (customerName === "") {
    alert(`You need to write your name.`);
  } else {
    showMessage(customerName, "user");
    clearInputField();
    // Shows the next question after 1s by calling the next function.
    setTimeout(() => ticketType(), 1000);
  }
};

// Question 2
// Bot replies back and ask if the ticket are for a adult or child.
const ticketType = () => {
  removeChildrenFunction();
  showMessage(
    `Nice to meet you ${customerName}! Is the movie ticket for a adult, a student or a child (Under 7)?`,
    "bot"
  );
  // Two buttons for age choices.
  inputWrapper.innerHTML += `
    <button id="adult" class="chat-btn" type="submit">Adult</button>
    <button id="student" class="chat-btn" type="submit">Student</button>
    <button id="child" class="chat-btn" type="submit">Child</button>
  `;
  // Variables that store references to the two added buttons.
  const adultBtn = document.getElementById("adult");
  const studentBtn = document.getElementById("student");
  const childBtn = document.getElementById("child");
  //Eventlisteners for the buttons.
  adultBtn.addEventListener("click", () => {
    ticketOption = reservation.type[0];
    handleTicketType();
  });
  studentBtn.addEventListener("click", () => {
    ticketOption = reservation.type[1];
    handleTicketType();
  });
  childBtn.addEventListener("click", () => {
    ticketOption = reservation.type[2];
    handleTicketType();
  });

  // Function that shows a message with the user's choice and calls the function for the next question.
  const handleTicketType = () => {
    if (ticketOption === "Adult") {
      price = ticketPrices.adultPrice;
    } else if (ticketOption === "Student") {
      price = ticketPrices.studentPrice;
    } else if (ticketOption === "Child") {
      price = ticketPrices.childPrice;
    }

    showMessage(`It's for a ${ticketOption.toLowerCase()}.`, "user");
    setTimeout(() => movie(), 1000);
  };
};

// Question 3
// Bot replies back and ask for movie choice.
const movie = () => {
  removeChildrenFunction();
  showMessage(`Select the movie you want for your reservation.`, "bot");
  // Drop-down menu
  inputWrapper.innerHTML += `
    <select name="movieOptions" class="movieOptions" id="movieOptions" required>
      <option value="" disabled selected>--SELECT ONE OPTION--</option>
      <option id="barbie" value="barbie">Barbie (2023)</option>
      <option id="ninjaTurtles" value="ninjaTurtles">Teenage Mutant Ninja Turtles: Mutant Mayhem</option>
      <option id="littleMermaid" value="littleMermaid">The Little Mermaid (2023)</option>
      <option id="alfons" value="alfons">Aja baja Alfons Åberg</option>
      <option id="meg" value="meg">Meg 2: The Trench</option>
    </select>
  `;
  // Drop-down menu with different choices.
  const movieOptions = document.getElementById("movieOptions");
  movieOptions.addEventListener("change", (event) => {
    movieOption = event.target.selectedOptions[0].text;
    showMessage(`${movieOption}`, "user");
    setTimeout(() => showtime(), 1000);
  });
};

const showtime = () => {
  removeChildrenFunction();
  showMessage(
    `Good choice! Select one of the available showtimes for ${movieOption}.`,
    "bot"
  );
  // Three new buttons
  inputWrapper.innerHTML += `
    <button id="showtimeOne" class="chat-btn" type="submit">12:00 PM</button>
    <button id="showtimeTwo" class="chat-btn" type="submit">3:00 PM</button>
    <button id="showtimeThree" class="chat-btn" type="submit">6:00 PM</button>`;
  const showtimeOne = document.getElementById("showtimeOne");
  const showtimeTwo = document.getElementById("showtimeTwo");
  const showtimeThree = document.getElementById("showtimeThree");
  //Eventlisteners for buttons
  showtimeOne.addEventListener("click", () => {
    showtimeOption = reservation.showtimesAvailable[0];
    handleShowtime();
  });
  showtimeTwo.addEventListener("click", () => {
    showtimeOption = reservation.showtimesAvailable[1];
    handleShowtime();
  });
  showtimeThree.addEventListener("click", () => {
    showtimeOption = reservation.showtimesAvailable[2];
    handleShowtime();
  });
  // Function that shows a message with the user's order and also calls the function for the next question.
  const handleShowtime = () => {
    showMessage(`${showtimeOption}`, "user");
    setTimeout(() => confirmReservation(), 1000);
  };
};

const confirmReservation = () => {
  removeChildrenFunction();
  showMessage(
    `Nice ${customerName}! You want to make a reservation for ${movieOption} at ${showtimeOption} for a ${ticketOption.toLowerCase()}. It will cost US$ ${price}.`,
    "bot"
  );
  setTimeout(() => {
    showMessage(`Would you like to confirm your order?`, "bot");
  }, 1000);

  inputWrapper.innerHTML += `
    <button id="yes" class="chat-btn" type="submit">Yes</button>
    <button id="no" class="chat-btn" type="submit">No</button>`;
  document.getElementById("yes").addEventListener("click", () => {
    showMessage(`Your reservation is complete. Enjoy the movie!`, "bot");
    reloadPage();
  });
  document.getElementById("no").addEventListener("click", () => {
    showMessage(`No Problem! Your reservation is deleted.`, "bot");
    reloadPage();
  });
};
