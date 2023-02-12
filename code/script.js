// All the DOM selectors stored as short variables
const chat = document.getElementById("chat");
const formWrapper = document.getElementById('formWrapper');
const messageSound = new Audio ("assets/pop.mp3");
const timeGreetings = [`Good morning my friend! What's your name?`, `Hello my friend! What's your name?`, `Good evening my friend! What's your name?`, `I am sorry my friend, but we are closed!`];

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
    showMessage("Anyways, since you're up. What's your name?", "bot");
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
    <img src="./user.png" alt="chat bot" />
</section>`;
} 
else if (sender === 'bot') {
    chat.innerHTML += `<section class="bot-msg">
    <img src="./bot.png" alt="user bot" />
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

  chat.innerHTML += `<section class="bot-msg">
    <img src="./bot.png" alt="user bot" />
    <div class="bubble bot-bubble">
        <p>Which book would you like ${firstName}?</p>
    </div>
</section>`;

        console.log(formWrapper);
    formWrapper.innerHTML = `<button id="yogaBtn">How to Yoga book</button>
    <button id="cookBtn">How to cook book</button>
    <button id="englishBtn">Learn English book</button>`;
  
  
  let yogaBtn = document.getElementById('yogaBtn');
  yogaBtn.addEventListener('click', () => choiceBook())
  
  let cookBtn = document.getElementById('cookBtn');
 cookBtn.addEventListenerById('click',() => choiceBook())
  
  let englishBtn = document.getElementById('englishBtn');
   englishBtn.addEventListenerById('click',() => choiceBook())
}

/*
   setTimeout(() => choiceBook(firstName), 1000) 
*/



// Question number 3
const choiceBook = (firstName) => {
  chat.innerHTML += `<section class="bot-msg">
    <img src="./bot.png" alt="user bot" />
    <div class="bubble bot-bubble">
        <p>Which book would you like ${firstName}?</p>
    </div>
</section>`;

  showMessage(`Would you like bound, pocket book or did you change your mind?`, 'bot');
  formWrapper.innerHTML =
        `<button id="boundBtn" type="submit" value="Bound book">Bound Book</button>
      <button id="pocketBtn" type="submit" value="Pocket book">Pocket Book</button>
  <button id="neverMindBtn" type="submit" value="Changed my mind">Changed my mind</button>`
  
  
  let boundBtn = document.getElementById('boundBtn');
   boundBtn.addEventListener('click',() => thankYou())

  let pocketBtn = document.getElementById('pocketBtn');
   pocketBtn.addEventListener('click',() => thankYou())

  let neverMindBtn = document.getElementById('neverMindBtn');
   neverMindBtn.addEventListener('click',() => thankYou())
}

//Question number 4

const thankYou = () => {

  chat.innerHTML += `<section class="bot-msg">
  <img src="./bot.png" alt="user bot" />
  <div class="bubble bot-bubble">
      <p>Thank you for your purchase! We will ship out right away.</p>
  </div>
</section>`;


showMessage(`Thank you for your purchase! We will ship out right away.`, 'bot');

}
