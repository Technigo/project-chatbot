// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById("input-wrapper")
const nameInput = document.getElementById("input")
const greetBtn = document.getElementById("greet-btn")
const ignoreBtn = document.getElementById("ignore-btn")
const petBtn = document.getElementById("pet-btn")
const pullawayBtn = document.getElementById("pullaway-btn")
const petmoreBtn = document.getElementById("petmore-btn")
const pictureBtn = document.getElementById("picture-btn")
const forfeitBtn = document.getElementById("forfeit-btn")
const moreloveBtn = document.getElementById("morelove-btn")
const meowlong = document.getElementById("meowlong")
const meowshort = document.getElementById("meowshort")
const purrlong = document.getElementById("purrlong")
const purrbreath = document.getElementById("purrbreath")


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

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Meow?", 'bot');
  // Add an event listener to play the sound when the message starts playing
  meowshort.addEventListener("play", () => {
    setTimeout(() => {
      showMessage("<p style='font-style: italic;'>Oh snap! I seem to have woken Bob up from a nap.</p>", 'user');
    }, 3000)
  });
  // Play the sound
  meowshort.play();
  setTimeout(() => {
    // show buttons
    greetBtn.removeAttribute('hidden');
    ignoreBtn.removeAttribute('hidden');
  }, 4000)
  
  // Just to check it out, change 'bot' to 'user' here 👆
}

const greetBob = () => {
  // hide buttons after user has made choice
  greetBtn.setAttribute('hidden', true);
  ignoreBtn.setAttribute('hidden', true);
  setTimeout(() => {
    showMessage("Hello there little fella👋", 'user');
  }, 1000);
  setTimeout(() => {
    showMessage("<p style='font-style: italic;'>sniff</p>", 'bot');
  }, 3000);
  setTimeout(() => {
    showMessage("<p style='font-style: italic;'>sniff sniff</p>", 'bot');
  }, 4000);
  setTimeout(() => {
    showMessage("<p style='font-style: italic;'>...</p>", 'user');
  }, 5000);
  setTimeout(() => {
    showMessage("You smell...", 'bot');
  }, 6000);
  setTimeout(() => {
    showMessage("...like friend😻", 'bot');
  }, 8000);
  setTimeout(() => {
    showMessage("Gimme love?", 'bot');
  }, 9000);
  setTimeout(() => {
    petBtn.removeAttribute('hidden');
    pullawayBtn.removeAttribute('hidden');
    chat.scrollTop = chat.scrollHeight;
  }, 10000);
}

const showReloadBtn = () => {
  chat.innerHTML += `
  <button type="button" onclick="window.location.reload()">Try again?</button>`;
}

const ignoreBob = () => {
  // Hide the buttons after the user has made their choice
  greetBtn.setAttribute('hidden', true);
  ignoreBtn.setAttribute('hidden', true);
  petBtn.setAttribute('hidden', true);
  pullawayBtn.setAttribute('hidden', true);
  showMessage("You know what? I don't even like cats.", 'user');
  setTimeout(() => {
    showMessage("Bob feels sad now. 😿 He curls up into a ball and goes back to sleep.", 'bot');
  }, 1000);
  setTimeout(() => {
    showReloadBtn();
    chat.scrollTop = chat.scrollHeight;
  }, 3000);
}

const petBob = () => {
  // Hide the buttons after the user has made their choice
  petBtn.setAttribute('hidden', true);
  pullawayBtn.setAttribute('hidden', true);
  purrlong.addEventListener("play", () => {
    setTimeout(() => {
      showMessage("<p style='font-style: italic;'>purrr...</p>", 'bot');
    }, 1000);
  });
  purrlong.play();
  setTimeout(() => {
    showMessage("<p style='font-style: italic;'>What a cute kitty🥹</p>", 'user');
  }, 7000);
  setTimeout(() => {
    petmoreBtn.removeAttribute('hidden');
    pullawayBtn.removeAttribute('hidden');
    chat.scrollTop = chat.scrollHeight;
  }, 9000);
}

const moreLove = () => {
  petmoreBtn.setAttribute('hidden', true);
  pullawayBtn.setAttribute('hidden', true);
  setTimeout(() => {
    showMessage("<p style='font-style: italic;'>purrrpurrpurrr...</p>", 'bot');
  purrbreath.addEventListener("ended", () => {
      setTimeout(() => {
        showMessage("<p style='font-style: italic;'>licks hand</p>", 'bot');
        setTimeout(() => {
          showMessage("<p style='font-style: italic;'>OMG🥹</p>", 'user');
          setTimeout(() => {
            showMessage("I think we have a bond", 'user');
            setTimeout(() => {
              showMessage("I must snap picture", 'user');
              setTimeout(() => {
                showMessage("<p style='font-style: italic;'>pulls out phone</p>", 'user');
                setTimeout(() => {
                  showMessage("Meeeooooow! Why u stop?", 'bot');
                  meowlong.addEventListener("ended", () => {
                    setTimeout(() => {
                      showMessage("<p style='font-style: italic;'>looks angry</p>", 'bot');
                      setTimeout(() => {
                        showMessage("<p style='font-style: italic;'>Hmm, he doesn't seem to like when I stop...</p>", 'user');
                        setTimeout(() => {
                          pictureBtn.removeAttribute('hidden');
                          forfeitBtn.removeAttribute('hidden');
                          chat.scrollTop = chat.scrollHeight;
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                });
                meowlong.play();
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });

  purrbreath.play();
}

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

// get random image
const getRandomImageUrl = () => {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
};


const takePic = () => {
  pictureBtn.setAttribute('hidden', true);
  forfeitBtn.setAttribute('hidden', true);
  showMessage("C'mon, just a quick one", 'user');
  setTimeout(() => {
    showMessage("<p style='font-style: italic;'>takes pic📸</p>", 'user');
  }, 2000);
  setTimeout(() => {
    showMessage("Tadaaa",'user', true);
  }, 3000);
  setTimeout(() => {
    showMessage("That's a...pretty cat",'user');
  }, 4000);
  // two choices appear, more love or ignore
  setTimeout(() => {
    showMessage("...", 'bot');
    moreloveBtn.removeAttribute('hidden');
    ignoreBtn.removeAttribute('hidden');
    chat.scrollTop = chat.scrollHeight;
  }, 6000);

}

const tooMuchLove = () => {
  moreloveBtn.setAttribute('hidden', true);
  ignoreBtn.setAttribute('hidden', true);
  showMessage("<p style='font-style: italic;'>bites hand</p>", 'bot');
  setTimeout(() => {
    showMessage("Aooooow! F*ck", 'user');
  }, 1000);
  setTimeout(() => {
    showMessage("You prick", 'user');
  }, 2000);
  setTimeout(() => {
    showMessage("I thought we were friends", 'user');
  }, 3000);
  setTimeout(() => {
    showMessage("<p style='font-style: italic;'>pulls away hand</p>", 'user');
  }, 4000);
  setTimeout(() => {
    showMessage("Bob has had enough of humans for another day. 😼 He licks his paw, curls up into a ball and goes back to sleep.", 'bot');
  }, 5000);
  setTimeout(() => {
    showReloadBtn();
    chat.scrollTop = chat.scrollHeight;
  }, 6000);
}

const noPic = () => {
  pictureBtn.setAttribute('hidden', true);
  forfeitBtn.setAttribute('hidden', true);
  showMessage("Okay then, I give up, no picture...", 'user');
  setTimeout(() => {
    showMessage("Sorry to have annoyed you little kittle", 'user');
  }, 1000);
  setTimeout(() => {
    showMessage("...", 'bot');
  }, 2000)
  setTimeout(() => {
    moreloveBtn.removeAttribute('hidden');
    ignoreBtn.removeAttribute('hidden');
    chat.scrollTop = chat.scrollHeight;
  }, 4000);
}

// Set up your eventlisteners here

greetBtn.addEventListener("click", greetBob);
ignoreBtn.addEventListener("click", ignoreBob);
petBtn.addEventListener("click", petBob);
pullawayBtn.addEventListener("click", ignoreBob);
petmoreBtn.addEventListener("click", moreLove);
pictureBtn.addEventListener("click", takePic);
forfeitBtn.addEventListener("click", noPic);
moreloveBtn.addEventListener("click", tooMuchLove);




setTimeout(greetUser, 2000)