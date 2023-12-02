const chat = document.getElementById("chat");
const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
let userName;

const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <h1>👤</h1>
      </section>
    `;
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <h1>🤖</h1>
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  chat.scrollTop = chat.scrollHeight;
};

const greetUser = () => {
  showMessage(
    "Konnichiwa Globetrotter! I'm Travel Bot, what is your name?",
    "bot"
  );
};

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (userName == null) {
    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    userName = nameInput.value;
    showMessage(userName, "user");
    nameInput.value = "";

    setTimeout(() => {
      const botMessage = `Hello ${userName}! Let's see the world!`;
      showMessage(botMessage, "bot");
    }, 1000);

    setTimeout(() => {
      const botMessage = `This is what I can do for you: 
        <p>1 - Book a flight</p>
        <p>2 - Book a hotel</p>
        <p>3 - Book a rental car</p>`;
      showMessage(botMessage, "bot");

      setTimeout(() => {
        const botMessage = `Please enter a number from 1 to 3 to select an option.`;
        showMessage(botMessage, "bot");
      }, 1000);
    }, 2000);
  } else {
    if (
      nameInput.value.trim() === "" ||
      !/^[1-3]$/.test(nameInput.value.trim())
    ) {
      if (nameInput.disabled) {
        alert("Error: Service is temporarily unavailable.");
      } else {
        alert("Invalid choice. Please enter a number from 1 to 3.");
      }
      return;
    }

    const userChoice = nameInput.value.trim();
    showMessage(userChoice, "user");
    nameInput.value = "";
    nameInput.disabled = true;

    let botReply = "";

    switch (userChoice) {
      case "1":
        botReply = `Great! I have booked a one-way ticket for you to Samarkand, Uzbekistan. Total price €1439. The details will be sent via email. Have a nice trip! ✈️`;
        break;
      case "2":
        botReply = `Good choice! A single room at City Inn Lodge in Botswana awaits you. I have booked 14 nights with breakfast included. Total price €2279. I wish you a pleasant stay! 🏨`;
        break;
      case "3":
        botReply = `Perfect! A Ford Escape (or similar) is waiting for you in Cheyenne, ID. 9 days rental including free miles and insurance. Total price $1203. Get ready for some inspired driving! 🚗`;
        break;
      default:
        botReply = `Invalid choice. Please select a number from 1 to 3.`;
    }

    setTimeout(() => {
      showMessage(botReply, "bot");
    }, 1000);

    setTimeout(() => {
      const botMessage = `Thank you for using Travel Bot, see you next time, ${userName}. Bye!`;
      showMessage(botMessage, "bot");
    }, 3000);
  }
});

setTimeout(greetUser, 500);
