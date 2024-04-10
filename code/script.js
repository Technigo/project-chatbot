// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const startButton = document.getElementById("start-btn");
const music = document.getElementById("music");
const inputWrapper = document.getElementById("input-wrapper");
const main = document.getElementById("main");
const body = document.getElementById("body");
const fishBtn = document.getElementById("fishBtn");
const fishPercentage = document.getElementById("fishPercentage");

let correctAnswerCount = 0;
let isCorrect; 

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender, isCorrect) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    console.log("The user said something")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user-avatar-glad.svg" alt="User" />  
      </section>
    `
    
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log("The bot said something")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/user-avatar-robot.svg" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // counting the score
  if (isCorrect) {
    correctAnswerCount++;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// FUNCTIONS START HERE
//the startscreen, not showing the chat, just the h1 and the start button.
const startScreen = () => {
main.style.display = 'none'
}
startScreen()

//GREETING
const greetUser = () => {
  //Getting the chat to come back
  main.style.display = 'flex'
  showMessage("Welcome to Trivia Quiz Bot!! What's your name, contestant?", 'bot');
}

const handleNameInput = (event) => {
  console.log("submit")
  //Stopping the page to reload
  event.preventDefault();
  const name = nameInput.value.trim();
  nameInput.value = '';
  if (name === '') {
    showMessage(`I'm sorry, I didn't catch that! Please try again...`, `bot`)

  } else {
    showMessage (`${name}`, `user`);
    showMessage (`${name}, are you ready for your first question?`, `bot`);
    ready();}
}

const ready = () => {
  //creating two buttons
  inputWrapper.innerHTML =`
    <button class="yesReady" id="yesBtn">YES</button>
    <button class="noReady" id="noBtn">NO</button>
    `
  //listening to user click and "logging" in chat
  document.getElementById('yesBtn')
  .addEventListener('click', (noSubmit) => {
    noSubmit.preventDefault();
    readyReply ('YES')
    showMessage(`Great! Let's get started!`, 'bot')
    setTimeout(firstQuestion, 1000)
  })
  
  document.getElementById('noBtn')
  .addEventListener('click', (noSubmit) => {
    noSubmit.preventDefault(); 
    readyReply ('NO')
    showMessage(`Sorry to hear that. Let's refresh!`, 'bot')
    setTimeout(() => {window.location.reload()},4000)
  })
}
const readyReply = (yesNoAnswer) => {
  showMessage(yesNoAnswer,'user')
  inputWrapper.innerHTML = ''
}

//THE QUIZ
//FIRST QUESTION, THREE ALTERNATIVES WITH BUTTONS
const firstQuestion = () => {

    showMessage (`I'm sure you've heard of the Barbie movie that was released this summer?
    Even if you haven't, everybody knows Barbie right? But what year was the first Barbie-doll released?`, 'bot')
  
    inputWrapper.innerHTML = `
      <button class="options" id="1945Btn">1945</button>
      <button class="options" id="1959Btn">1959</button>
      <button class="options" id="1966Btn">1966</button>
  `
  document.getElementById('1945Btn')
  .addEventListener('click', (noSubmit) => {noSubmit.preventDefault(); firstAnswer ('1945')})
  setTimeout(firstAnswer, 1000)

  document.getElementById('1959Btn')
  .addEventListener('click', (noSubmit) => {noSubmit.preventDefault(); firstAnswer ('1959')})
  setTimeout(firstAnswer, 1000)

  document.getElementById('1966Btn')
  .addEventListener('click', (noSubmit) => {noSubmit.preventDefault(); firstAnswer ('1966')})
  setTimeout(firstAnswer, 1000)
}

//ANSWER WAS PREVIOUSLY SAVED INTO "firstAnswer" IN EVENT LISTENER, AND SENT FORWARD BY SET TIMEOUT
//IF ELSE STATEMENTS TO ANSWER
const firstAnswer = (firstAnswer) => {

  if (firstAnswer === '1945'){
    showMessage(`It's 1945!`, 'user')
    showMessage(`Well not quite. The right answer is 1959. Did you know, a mint condition Barbie from that year can be worth up to 27,000 US $?`, 'bot')
    setTimeout(secondQuestion, 1000)
    
  } else if (firstAnswer === '1959'){
    showMessage(`It's 1959!`, 'user', true)
    showMessage(`1959! You're plastic fantastic! Did you know, a mint condition Barbie from that year can be worth up to 27,000 US $?`, 'bot')
    setTimeout(secondQuestion, 1000)
    
  } else if (firstAnswer === '1966'){
    showMessage(`It's 1966!`, 'user')
    showMessage(`Well not quite. The right answer is 1959. Did you know, a mint condition Barbie from that year can be worth up to 27,000 US $?`, 'bot')
    setTimeout(secondQuestion, 3000)
    
  }
}
//SECOND QUESTION AS A OPTION ROLL DOWN MENU
const secondQuestion = () => {
  showMessage(`Let's move on to biology! What percentage of the Earth's wildlife is found in the ocean?`,'bot')
  
  inputWrapper.innerHTML = `
    <select id="fishPercentage">
      <option value="" selected disabled>Select your answer...</option>
      <option value="50">Just under 50%!</option>
      <option value="60">60%! No, final answer 62%!</option>
      <option value="75">75%! Oceans are big.</option>
      <option value="94">94% is a number I like.</option>
      <option value="100">100%! We're all fish, really.</option>
    </select>
    <button class="button" id="fishBtn">Send!</button>
    `
    const fishPercentage = document.getElementById("fishPercentage");
    const fishBtn = document.getElementById("fishBtn");
    fishBtn.addEventListener("click", (noSubmit) => {
      noSubmit.preventDefault(); 
      secondAnswer(fishPercentage)})
}

//USING EVENT LISTENER TO GO FROM secondQuestion TO secondAnswer! (Not here but in the lists, top and bottom of doc.)


//ANSWERING WITH IF ELSE :)
const secondAnswer = (fishPercentage) => {
  const selectedOption = fishPercentage.value; 
  if (selectedOption === "94") {
    showMessage(`94% is a number I like.`,'user', true);
    showMessage(`DING DING DING! 94% is the correct answer. Makes you think, huh?`,'bot');
    setTimeout(thirdQuestion, 3000);

  } else {
    showMessage(`I didn't choose 94%...`,'user');
    showMessage(`Noo, 94% is the correct answer! But pretty cool right?`,'bot');
    setTimeout(thirdQuestion, 3000);
  }
}

const thirdQuestion = () => {
  showMessage(`Over to sports! In which sport would you perform a "slam dunk"?`,`bot`)

  inputWrapper.innerHTML = `
      <button class="options" id="TennisBtn">Tennis</button>
      <button class="options" id="BasketballBtn">Basketball</button>
      <button class="options" id="SoccerBtn">Soccer</button>
  `

  document.getElementById('TennisBtn')
  .addEventListener('click', (noSubmit) => {noSubmit.preventDefault(); thirdAnswer ('Tennis')})
  setTimeout(thirdAnswer, 1000)

  document.getElementById('BasketballBtn')
  .addEventListener('click', (noSubmit) => {noSubmit.preventDefault(); thirdAnswer ('Basketball')})
  setTimeout(thirdAnswer, 1000)

  document.getElementById('SoccerBtn')
  .addEventListener('click', (noSubmit) => {noSubmit.preventDefault(); thirdAnswer ('Soccer')})
  setTimeout(thirdAnswer, 1000)
}

const thirdAnswer = (thirdAnswer) => {
  if (thirdAnswer === 'Tennis'){
    showMessage(`Tennis! I love tennis!`, 'user')
    showMessage(`Love the enthusiasm, but the right answer was basketball. Did you know, basketball was originally played with soccer balls and peach baskets?!`, 'bot')
    setTimeout(fourthQuestion, 3000)
    
  } else if (thirdAnswer === 'Basketball'){
    showMessage(`It's Basketball!`, 'user', true)
    showMessage(`CORRECT!!! Did you know, basketball was originally played with soccer balls and peach baskets?!`, 'bot')
    setTimeout(fourthQuestion, 3000)
    
  } else if (thirdAnswer === 'Soccer'){
    showMessage(`It's probably soccer?`, 'user')
    showMessage(`Well not quite. The right answer is basketball. Did you know, basketball was originally played with soccer balls and peach baskets?!`, 'bot')
    setTimeout(fourthQuestion, 3000)
    
  }
}

const fourthQuestion = () => {
  showMessage(`Music time! Do you know your Beatles? Which of these is not the title of a famous album by The Beatles?`,`bot`)

  inputWrapper.innerHTML = `
    <select id="musicOption">
      <option value="" selected disabled>Select your answer...</option>
      <option value="AbbeyRoad">Abbey Road</option>
      <option value="LetItBe">Let It Be</option>
      <option value="DarkSideOfTheMoon">Dark Side Of The Moon</option>
      <option value="StPeppersLonely">Sgt. Pepper's Lonely Hearts Club Band</option>
    </select>
    <button class="button" id="musicBtn">Send!</button>
    `
    const musicChoice = document.getElementById("musicOption");
    const musicBtn = document.getElementById("musicBtn");
    musicBtn.addEventListener("click", (noSubmit) => {
      noSubmit.preventDefault(); 
      fourthAnswer(musicChoice)})
}

const fourthAnswer = (musicChoice) => {
  const selectedOption = musicChoice.value; 
  if (selectedOption === "DarkSideOfTheMoon") {
    showMessage(`Easy, it's Dark Side of the Moon.`,'user', true);
    showMessage(`It sure is! Fun fact: The Beatles were originally called "The Quarrymen" before they became The Beatles in 1960.`,'bot');
    setTimeout(thirdQuestion, 4000);

  } else {
    showMessage(`I don't really know the Beatles. I think is something other than Dark Side of the Moon. `,'user');
    showMessage(`Ah, the correct answer is Dark Side of the Moon, it's a Pink Floyd album. Fun fact: The Beatles were originally called "The Quarrymen" before they became The Beatles in 1960.`,'bot');
    setTimeout(byeBye1, 4000);
  }

}
const byeBye1 = () => {
  showMessage(`Time flies! Thank you for participating! You got ${correctAnswerCount} out of four questions! Well done!`, 'bot')
  inputWrapper.innerHTML = ``
}




// Set up your eventlisteners here

form.addEventListener("submit", (handleNameInput));
startButton.addEventListener('click', function() {
  setTimeout (greetUser, 500);
  startButton.style.display = 'none';
  music.play(); 
});
// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
//setTimeout(greetUser, 1000)
