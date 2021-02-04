// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
// const input = document.getElementById('input-wrapper');

// Global variables, if you need any, declared here
let step = 1;

// Functions declared here
const postAnswer = (value) => {
  if (value != "") {
    showMessage(value, 'user');
    showMessage(`Welcome ${value}, what style are you looking for? Funny, scary or cute?`, 'bot');
  } else {
    step -= 1;
  }
}

const threeWayQuestion = (value) => {

  showMessage(value, 'user');

  let normalizeValue = value.toLowerCase();

  if (normalizeValue.includes('funny')) {
    showMessage(`Pick a theme:`, 'bot');
    chat.innerHTML += `
      <div class="choice-btn-container">
        <button id='tv' class="choice-btn">TV</button>
        <button id='movies' class="choice-btn">Movies</button>
        <button id='pop-culture' class="choice-btn">Pop culture</button>
      </div>
    `
    document.getElementById('tv').addEventListener("click", () => {
      showMessage("TV", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Tina Belcher,'Bob's Burgers' or David Rose,'Schitt's Creek'`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Tina Belcher,'Bob's Burgers'</h3>
              <ul>
                What you need:
                <li>Light blue t-shirt</li>
                <li>Blue skirt</li>
                <li>White socks with red stripes</li>
                <li>Black high-top shoes</li>
                <li>Black thick-rim glasses</li>
                <li>Black bob wig with yellow hair clip</li>
              </ul>
              <img class="img" src="https://mcdn.wallpapersafari.com/medium/47/13/JIBSUO.jpg"/>
            </div>
            <div class="result-list">
              <h3>David Rose,'Schitt's Creek'</h3>
              <ul>
                What you need:
                <li>B&W over-the-top sweater</li>
                <li>Black skirt</li>
                <li>Black jeans</li>
                <li>Black hig-top shoes</li>
                <li>White oval sunglasses</li>
              </ul>
              <img class="img" src="https://i.pinimg.com/736x/a3/88/3e/a3883edbe81d000388588126048ff875.jpg"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
        });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Mr. Rogers or Flo, Progressive`, 'bot');
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`Moira,'Schitt's Creek' or Dwight Schrute,'The Office'`, 'bot');
      });
    });


    document.getElementById('movies').addEventListener("click", () => {
      showMessage("Movies", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Regina George,'Mean Girls' or Bill Lumbergh,'Office Space'`, 'bot');
      });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Holtzmann,'Ghost Busters' Or Olaf,'Frozen'`, 'bot');
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`Elle Woods,'Legally Blonde' or Derek Zoolander,'Zoolander'`, 'bot');
      });

    });
    document.getElementById('pop-culture').addEventListener("click", () => {
      showMessage("Pop culture", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Carole Baskin,'Tiger King' or Johnny Lawrence,'Cobra Kai'`, 'bot');
      });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Zoom potato Filter or Baby yoda`, 'bot');
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`The Dolly Parton Challenge or Sigrit,'Eurovision'`, 'bot');
      });

    });
      
  } else if (normalizeValue.includes('scary')) {
    showMessage(`Pick a theme:`, 'bot');
    chat.innerHTML += `
      <div class="choice-btn-container">
        <button id='gory' class="choice-btn">Gory</button>
        <button id='creepy' class="choice-btn">Creepy</button>
        <button id='existential' class="choice-btn">Existential</button>
      </div>
    `
    document.getElementById('gory').addEventListener("click", () => {
      showMessage("Gory", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Zombie`, 'bot');
      });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Headless horseman`, 'bot');
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`Dead person with a knife in your head`, 'bot');
      });

    });
    document.getElementById('creepy').addEventListener("click", () => {
      showMessage("Creepy", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Skeleton`, 'bot');
      });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Pennywise,'It' or Chucky,'Child's Play'`, 'bot');
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`Creepy clown`, 'bot');
      });

    });
    document.getElementById('existential').addEventListener("click", () => {
      showMessage("Existential", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Schrodinger's cat`, 'bot');
      });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Existential dread`, 'bot');
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`Global warming`, 'bot');
      });

    });

  } else if (normalizeValue.includes('cute')) {
    showMessage(`Pick a theme:`, 'bot');
    chat.innerHTML += `
      <div class="choice-btn-container">
        <button id='cheeky' class="choice-btn">Cheeky</button>
        <button id='classic' class="choice-btn">Classic</button>
        <button id='adorable' class="choice-btn">Adorable</button>
      </div>
    `
    document.getElementById('cheeky').addEventListener("click", () => {
      showMessage("Cheeky", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Cheetah or Nerd`, 'bot');
      });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Referee or Hugh Hefner`, 'bot');
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`Lifeguard`, 'bot');
      });      
      
    });
    document.getElementById('classic').addEventListener("click", () => {
      showMessage("Classic", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Rosie the Riveter or Joel Goodsen,'Risky Business'`, 'bot');
      });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Pirate`, 'bot');
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`Witch or wizard`, 'bot');
      });      

    });
    document.getElementById('adorable').addEventListener("click", () => {
      showMessage("Adorable", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Scarecrow`, 'bot');
      });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Ladybug or monkey`, 'bot');
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`Beanie baby`, 'bot');
      });      


    });

  } else {
    showMessage(`Please answer the question, what style are you looking for? Funny, scary or cute?`, 'bot');
    step -= 1;
  }
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
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
document.getElementById("button").addEventListener("click", (event) => {
  event.preventDefault();
  const value = document.getElementById(`name-input`).value;
  document.getElementById(`name-input`).value = "";
  // console.log(value);
  if(step === 1) {
    postAnswer(value);
    step += 1;
  } else if (step === 2) {
    threeWayQuestion(value);
    step += 1;  
  }
});


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
