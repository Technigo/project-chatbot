// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById("input-wrapper")
const nameInput = document.getElementById("name-input")
const button = document.getElementById("button")

//global variables 
let questionNumber = 1


// for waiting msg 
//setTimeout(() => msg.delete(), 10000)

//Sound effects from Pixabay
const soundEffectBot = () => {
  const sound = new Audio('short-woosh-109592.mp3');
  //sound.play()
}
const soundEffectUser = () => {
  const sound = new Audio('short-success-sound-glockenspiel-treasure-video-game-6346.mp3');
  //sound.play()
}

const soundEffectFinal = () => {
  const sound = new Audio('sport-rock-logo1-13776.mp3');
  //sound.play()
}

const botSay = (words) => {
  soundEffectBot();
  setTimeout(() => showMessage(words, "bot"), 300);
}

const userSay = (words) => {
  soundEffectUser();
  setTimeout(() => showMessage(words, "user"), 300);
}

/*
const waitBot = (words) => {
setTimeout(() => showMessage(words, "bot"), 300);
console.log("snurra");
}
*/

/*
https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif
 waitBot(`wait pls`).then(showMessage => {
    showMessage.delete(3000);
showMessage(words, "bot").then(showMessage => {
  showMessage.delete(3000);
 }),*/
/*
message.reply('Invalid command')
  .then(msg => {
    setTimeout(() => msg.delete(), 10000)
  })

message.channel.send(`please wait`).then(sentMessage => {
    sentMessage.delete(5000);
});
}
*/

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log(message);
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `

    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log(message);
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }

  // This makes the chat scroll to the last message
  chat.scrollTop = chat.scrollHeight;
}

const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userSay(`I would say ${guess}`);
    console.log("question function");

    //setTimeout(() => waitBot.delete(`wait`, "bot"), 2500)

    setTimeout(() => whatSize(message), 1500)
  }
  else if (questionNumber === 2) {
    userSay(message)
    setTimeout(() => ifMonster(message), 1500)
  }
  else if (questionNumber === 3) {
    userSay(message)
    console.log("right track")
    setTimeout(() => finish(message), 2000)
  }
}


// Starts here
const greetUser = () => {
  questionNumber = 1
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  botSay("Welcome lifeform! What species do you believe yourself to be?");
}
let guess = "";
button.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event);
  const userGuess = document.getElementById("name-input").value;
  console.log(userGuess);
  guess = userGuess;
  //showMessage(`I would say ${guess}`, "user");
  nextQuestion();
  nameInput.value = "";
}, {once: true});


const whatSize = () => {
  questionNumber++
  console.log("big wait");
  /*waitBot(`<img id="wait" src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"></img>`, "bot");
  */
  botSay(`Let's find out if "${guess}" is true! How smol are you?`);
  inputWrapper.innerHTML = `
  <div class=button-wrapper>
<button id="btnBig">I'm a UNIT</button>
<button id="btnAverage">Come closer!</button>
<button id="btnSmall">Tiny, yet brave</button></div>
  `
  document
    .getElementById("btnBig")
    .addEventListener('click', () => nextQuestion("The biggest"), {once: true});
  document
    .getElementById('btnAverage')
    .addEventListener('click', () => nextQuestion("Let's get comfy"), {once: true});
  document
    .getElementById('btnSmall')
    .addEventListener('click', () => nextQuestion("So smol") , {once: true});
  }



const ifMonster = (size) => {
  questionNumber++
  console.log("howdy");
  botSay(`Alright alright! ${size}, huh? Tell me, if you met a monster, what would you do?`);

  if (size === "The biggest") {
    inputWrapper.innerHTML = `
    <radio>
      <h5>Monster time!</h5>
      <label><input type="radio" name="choice" id="badger" option value="fight">I fight! I win!</label>
      <label><input type="radio" name="choice" id="hippo" option value="run">Dinner!</label>
    `

    document.getElementById("badger").addEventListener("click", () => nextQuestion("Bring it on!"), {once: true});
  console.log("badger")

  document.getElementById("hippo").addEventListener('click', () => nextQuestion("Fear me, I'm mighty!"), {once: true});
  console.log("hippo")
  

  } else if (size === "Let's get comfy") {
    inputWrapper.innerHTML = `
      <radio>
      <h5>Monster time!</h5>
      <label><input type="radio" name="choice" id="facehugger" option value="hug">I hug it 🤗</label>
      <label><input type="radio" name="choice" id="grandma" option value="cookie">I give it cookies 🍪🍪</label>
    `

    
  document.getElementById("facehugger").addEventListener("click", () => nextQuestion("Just within jumping distance..."), {once: true});
  console.log("facehugger")

  document.getElementById("grandma").addEventListener('click', () => nextQuestion("Aren't you a sweetheart?"), {once: true});
  console.log("grandma")

  } else {
    inputWrapper.innerHTML = `
    <radio>
    <h5>Monster time!</h5>
    <label><input type="radio" name="choice" id="mosquito" option value="stab">I stab!</label>
    <label><input type="radio" name="choice" id="shrimp" option value="punch">I punch!</label>
    `
  

  document.getElementById("mosquito").addEventListener("click", () => nextQuestion("Sluuurp..."), {once: true});
  console.log("mosquito")
  document.getElementById("shrimp").addEventListener("click", () => nextQuestion("BANG"), {once: true});
  console.log("shrimp")
}
}

const finish = (monsterAnswer) => {
  questionNumber++
  soundEffectFinal();
  inputWrapper.innerHTML = `
  <h3>🌟Amazing!🌟</h3>`

if (monsterAnswer === "Bring it on!") {
 botSay(`I'll be damned, you're a <strong>honey badger!</strong> A total unit and a half! You came as ${guess} and left as honey badger, what a day!`)

} else if (monsterAnswer === "Fear me, I'm mighty!") {
  botSay(`I'll be damned! You're a majestic and competent <strong>hippo</strong>, on the road to grace and glory, positively slaying it! You came as ${guess} and left as hippo, please take my most sincere congratulations!`)

} else if (monsterAnswer === "Just within jumping distance...") {
  botSay(`I'll be damned! You're a <strong>facehugger</strong> from the Alien movies! In cyberspace, I hope someone can hear me scream! You came as ${guess} and left as facehugger, what a terrible day to exist!`)

} else if (monsterAnswer === "Aren't you a sweetheart?") {
  botSay(`I'll be damned, you're a <strong>grandma</strong>! Can I have a cookie too? You came as ${guess} and left as grandma, what a day!`)

} else if (monsterAnswer === "Sluuurp...") {
  botSay(`I'll be damned, you're a <strong>mosquito</strong>! Aren't I lucky to be a bloodless, faceless creature forever tucked away in cyberspace, safe from the likes of you yet in constant danger of whatever happens to an artificial being doomed to spend eternity in this vast expanse of simultaneous nothing and everything?`)

} else if (monsterAnswer === "BANG") {
  botSay(`I'll be damned, you're a <strong>pistol shrimp</strong>, the fastest gun in the sea! You came as ${guess} and left as pistol shrimp, just another day in the west!`)
}
}


setTimeout(greetUser, 1000);



// TO DO
//Write inner.HTML for botmsgs.
//How to stop the click from working after first click?
//add eventlisteners to innerhtml doesn't work.
//copy the structure with questionnumbers from the technigo code
//Limit the amount of characters you can type in the guess species option
//put id's and eventlisteners on each of the radio buttons and progress to final bot answer.
//If I change the variable nameInput to userGuess, the input field "name-input" will no longer clear. Why?