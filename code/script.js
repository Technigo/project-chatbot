// All the DOM selectors stored as short variables
const chat = document.getElementById("chat");
const formWrapper = document.getElementById('formWrapper');
const messageSound = new Audio ("assets/pop.mp3");
const timeGreetings = [`Good morning and welcome to my book store! What's your name?`, `Hello and welcome to my book store! What's your name?`, `Good evening and welcome to my book store! What's your name?`, `I am sorry my friend, but we are closed!`];

// Variable for date & time.

const date = new Date();
console.log(date);
const time = date.getHours();
console.log(time);


function greetUser(timeGreetings, time) {

  if (time >= 5 && time <= 10) {
    showMessage(timeGreetings[0], "bot"); //Morning (5 to 10)
  } else if (time > 10 && time <= 18) {
    showMessage(timeGreetings[1], "bot"); //Hello (11 to 18)
  } else if (time > 18 && time <= 22) {
    showMessage(timeGreetings[2], "bot"); //Evening (19 to 22)
  } else {
    showMessage(timeGreetings[3], "bot"); //Late (23 to 4)
    showMessage("Anyways, since you're up, welcome to my book store! What's your name?", "bot");
  }
}

//1 second delay for greeting
setTimeout(greetUser, 1000, timeGreetings, time);


//--This is the general way of adding a chat bubble from both the user and the bot. Create more detailed ones for what we want to do later.
const showMessage = (msg, sender) => {

if (sender === 'user') {
    chat.innerHTML += `<section class="user-msg">
    <div class="bubble user-bubble">
        <p>${msg}</p>
    </div>
    <img src="assets/user.png" alt="chat bot" />
</section>`;
} 
else if (sender === 'bot') {
    chat.innerHTML += `<section class="bot-msg">
    <img src="assets/bot.png" alt="user bot" />
    <div class="bubble bot-bubble">
        <p>${msg}</p>
    </div>
</section>`;
}

  
   //Makes sound when sending a message 
  messageSound.currentTime = 0
  messageSound.play()
  
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};
    
//Eventlistener: Starts the function when user clicks submit. 
form.addEventListener('submit', (event) => {
  event.preventDefault()   //Stops it from autosaving.
  
  const firstName = document.getElementById('firstName').value;
  console.log(firstName)           
  
// Calling the function "showMessage".
  showMessage(firstName, 'user');    

   //This code slows it with 1 sec.
  setTimeout(() => recognize(firstName), 1000)  
  
})


//Question 2

const recognize = (firstName) => {
  console.log(firstName);

  showMessage(`What a beautiful name, ${firstName}! Which book would you like?`, 'bot');

        console.log(formWrapper);
    formWrapper.innerHTML = 
    `<button id="yogaBtn">How to Yoga book</button>
    <button id="cookBtn">How to cook book</button>
    <button id="englishBtn">Learn English book</button>`;
  
  
    let yogaBtn = document.getElementById('yogaBtn');
    yogaBtn.addEventListener('click', () => choices())
  
    let cookBtn = document.getElementById('cookBtn');
    cookBtn.addEventListener('click', () => choices())  
  
    let englishBtn = document.getElementById('englishBtn');
    englishBtn.addEventListener('click', () => choices())

  
}


// Question number 3
const choices = (msg) => {

  showMessage(`Wow, love that your into learning stuff! What else?`, 'bot');
  
  formWrapper.innerHTML =
        `<button id="boundBtn">Bound Book</button>
      <button id="pocketBtn">Pocket Book</button>
  <button id="neverMindBtn">Changed my mind</button>`
  
  let boundBtn = document.getElementById('boundBtn');
  boundBtn.addEventListener('click', () => thankYou())

  let pocketBtn = document.getElementById('pocketBtn');
  pocketBtn.addEventListener('click', () => thankYou())  

  let neverMindBtn = document.getElementById('neverMindBtn');
  neverMindBtn.addEventListener('click', () => changedMind())


}


//Question number 4

const thankYou = () => {

showMessage(`Thank you for your purchase! Here it is!`, 'bot');
formWrapper.innerHTML = `
    <h3>Come back soon!</h3>
    `
}

const changedMind = () => {

showMessage(`Geez... Why am I even here?`, 'bot');
formWrapper.innerHTML = `
    <h3>Now, get outta here!</h3>
    `
}