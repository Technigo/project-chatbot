// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const actionBtn = document.getElementById("action-btn");
const altActionBtn = document.getElementById("alt-action-btn");
const meowlong = document.getElementById("meowlong");
const meowshort = document.getElementById("meowshort");
const purrlong = document.getElementById("purrlong");
const purrbreath = document.getElementById("purrbreath");
const camerashutter = document.getElementById("camerashutter");

// Pause the audio elements initially
meowlong.pause();
meowshort.pause();
purrlong.pause();
purrbreath.pause();

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender, displayRandomImage) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    if (displayRandomImage) {
      const randomImageUrl = getRandomImageUrl();
      chat.innerHTML += `
        <section class="user-msg">
          <div class="bubble user-bubble">
            <img
              src="${randomImageUrl}"
              class="catpic"
              alt="Cat" />
          </div>
          <img src="assets/user.png" alt="User" class="avatar" />  
        </section>
      `;
    } else {
      console.log("User");
      chat.innerHTML += `
        <section class="user-msg">
          <div class="bubble user-bubble">
            <p>${message}</p>
          </div>
          <img src="assets/user.png" alt="User" class="avatar" />  
        </section>
      `;
    }
  } else if (sender === 'bot') {
    console.log("Bot");
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/cat.png" alt="Bot" class="avatar" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Initialize state
let currentState = "greetBob";

// Function to handle button click and state transitions
const handleAction = () => {
  if (currentState === "greetBob") {
    greetBob();
    currentState = "petBob";
    // change button
    actionBtn.textContent = "Pet Bob";
  } else if (currentState === "petBob") {
    petBob();
    actionBtn.textContent = "Pet head";
    currentState = "petHeadOrBellyRubs";
  } else if (currentState === "petHeadOrBellyRubs") {
    // Handle transition based on which button was clicked
    if (lastClickedButton === "actionBtn") {
      petHead();
      actionBtn.textContent = "Take pic";
      currentState = "takePic";
    } else if (lastClickedButton === "altActionBtn") {
      bellyRubs();
      actionBtn.textContent = "Try again";
      currentState = "tryAgain";
    }
  } else if (currentState === "takePic") {
    takePic();
    currentState = "tryAgain";
    actionBtn.textContent = "Try again";
  } else if (currentState === "tryAgain") {
    tryAgain();
  }
}

// Attach event listener to the buttons
actionBtn.addEventListener("click", () => {
  lastClickedButton = "actionBtn";
  handleAction();});
altActionBtn.addEventListener("click", () => {
    lastClickedButton = "altActionBtn";
    handleAction();});

// Greet Bob
const greetBob = () => {
  // hide button
  actionBtn.setAttribute("hidden", true);
  showMessage("👋", 'user');
  // Play the sound after 2s delay
  setTimeout(() => {
    meowshort.play();
    // After the sound has played, show the "Meow?" message
    meowshort.addEventListener("play", () => {
      showMessage("Meow?", 'bot');
    });
  }, 1500);
  // Show button after 4s delay
  setTimeout(() => {
    actionBtn.removeAttribute('hidden');
  }, 3500)
}

// Pet Bob
const petBob = () => {
  actionBtn.setAttribute("hidden", true);
  showMessage("🫳", 'user');
  setTimeout(() => {
    purrlong.play();
    purrlong.addEventListener("play", () => {
    showMessage("<p style='font-style: italic;'>purrr...</p>", 'bot');
    });
  }, 2000)
  setTimeout(() => {
    actionBtn.removeAttribute('hidden'); // pet head
    altActionBtn.removeAttribute('hidden'); // give belly rubs
  }, 8000)
}

// Pet head
const petHead = () => {
  // hide buttons
  actionBtn.setAttribute("hidden", true);
  altActionBtn.setAttribute("hidden", true);
  showMessage("🫳", 'user');
  setTimeout(() => {
    purrbreath.play();
    purrbreath.addEventListener("play", () => {
      showMessage("<p style='font-style: italic;'>purrpurr...</p>", 'bot');
    });
  }, 2000)
  setTimeout(() => {
    showMessage("What a cutie",'user');
  }, 10000)
  setTimeout(() => {
    actionBtn.removeAttribute('hidden');
    lastClickedButton = null;
  }, 12000)
  chat.scrollTop = chat.scrollHeight;
}

// Give belly rubs
const bellyRubs = () => {
  // hide buttons
  actionBtn.setAttribute("hidden", true);
  altActionBtn.setAttribute("hidden", true);
  showMessage("🫳", 'user');
  // Bite!
  setTimeout(() => {
    meowlong.play();
    meowlong.addEventListener("play", () => {
      showMessage("Meow!", 'bot');
    });
  }, 2000);
  setTimeout(()=> {
    showMessage("<p style='font-style: italic;'>bites hand</p", 'bot');
  }, 6000)
  setTimeout(()=> {
    showMessage("Ow🩸", 'user');
  }, 7000)
  setTimeout(() => {
    chat.scrollTop = chat.scrollHeight;
    actionBtn.removeAttribute('hidden');
    lastClickedButton = null;
  }, 10000)
}

// picture array
const imageUrls = [
  "assets/catpics/cat1.png",
  "assets/catpics/cat2.png",
  "assets/catpics/cat3.png",
  "assets/catpics/cat4.png",
  "assets/catpics/cat5.png",
  "assets/catpics/cat6.png",
  "assets/catpics/cat7.png",
  "assets/catpics/cat8.png",
  "assets/catpics/cat9.png"
]

// get random picture
const getRandomImageUrl = () => {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
};

// Take pic
const takePic = () => {
  // hide button
  actionBtn.setAttribute("hidden", true);
  setTimeout(() => {
    camerashutter.play();
    camerashutter.addEventListener("play", () => {
      showMessage("Tadaaa",'user', true);
    });
  }, 3000)
  setTimeout(() => {
    meowlong.play();
    meowlong.addEventListener("play", () => {
      showMessage("Meow!", 'bot');
    });
  }, 5000);
  setTimeout(() => {
    actionBtn.removeAttribute('hidden');
    chat.scrollTop = chat.scrollHeight;
  }, 7000);
}

// Try again
const tryAgain = () => {
  // reload window
  window.location.reload();
  lastClickedButton = null;
}
