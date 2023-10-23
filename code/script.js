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



// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html section inside the chat with the posted message
  if (sender === 'user') {
    console.log("The user said something")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="https://thenounproject.com/api/private/icons/2401070/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" alt="User" />  
      </section>
    `
    
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log("The bot said something")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="https://thenounproject.com/api/private/icons/6018841/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
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
    showMessage(`It's 1959!`, 'user')
    showMessage(`1959! You're plastic fantastic! Did you know, a mint condition Barbie from that year can be worth up to 27,000 US $?`, 'bot')
    setTimeout(secondQuestion, 1000)
    
  } else if (firstAnswer === '1966'){
    showMessage(`It's 1966!`, 'user')
    showMessage(`Well not quite. The right answer is 1959. Did you know, a mint condition Barbie from that year can be worth up to 27,000 US $?`, 'bot')
    setTimeout(secondQuestion, 1000)
    
  }
}
//SECOND QUESTION AS A OPTION ROLL DOWN MENU
const secondQuestion = () => {
  showMessage(`Let's move on!`,'bot')
  showMessage(`What percentage of the Earth's wildlife is found in the ocean?`,'bot')
  
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
    showMessage(`94% is a number I like.`,'user');
    showMessage(`DING DING DING! 94% is the correct answer. Makes you think, huh?`,'bot');
    setTimeout(byeBye1, 1000);

  } else {
    showMessage(`I didn't choose 94%...`,'user');
    showMessage(`Noo, 94% is the correct answer! But pretty cool right?`,'bot');
    setTimeout(byeBye1, 3000);
  }
}
const byeBye1 = () => {
  showMessage(`Time flies! Thank You for participating! Did you think I'd count your score? Well..I didn't.`, 'bot')
  inputWrapper.innerHTML = ``
  setTimeout(byeBye2, 3000)
}

const byeBye2 = () => {
  showMessage(`There were only two questions, you should be able to do it yourself! You dont need to be a computer for that.`,'bot')
  setTimeout(byeBye3, 3000)
}

const byeBye3 = () => {
  showMessage(`Sorry, that was rude. Maybe I'll learn to count in an upgrade. Bye now!`,'bot')
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
