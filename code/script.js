// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('inputWrapper');
const input = document.getElementById('input');
const form = document.getElementById('form');


// If you need any global variables that you can use across different functions, declare them here:
let date = new Date();
let time = date.getHours();

const timeGreetings = [`Good morning gorgeous! What's your name?`, `Hello there gorgeous! What's your name?`, `Good evening gorgeous! What's your name?`, `Why are you even up this hour? Get some beauty sleep please!`];
const randomStyleAdvice = ['You would totally ROCK a bob', 'You would totally ROCK a pixi cut', 'You would totally ROCK pigtails', 'Just shave it off', 'Have you ever considered a mohawk?', 'Bangs', 'Curtain bangs', 'Mermaid hair would look great on you', 'You could totally bring back the zig-zag part', `Don’t change a thing! You are pure perfection.`, 'A bouncy blowdry', 'Luscious long locks', 'You should definitely go blonde', 'Dye your hair red', 'A glamorous up-do', 'A perm', 'I am thinking... dreadlocks', 'Uh, just wear a hat', 'You should do braids', 'Dye your hair green']


// Declare your functions after this comment

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
  chat.scrollTop = chat.scrollHeight;
}

//Simplifies calling for user and bot reply in the chat bubbles, adding a delay for both types.
const botReply = (msg) => {
  setTimeout(showMessage, 1000, msg, 'bot');
}
const userReply = (msg) => {
  setTimeout(showMessage, 200, msg, 'user');
}


const greetUser = (timeGreetings, time) => {

if (time >= 5 && time <= 10) {
    botReply(timeGreetings[0]);           //morning (dvs 5 till 10)
} else if (time > 10 && time <= 18) {
    botReply(timeGreetings[1]);           //hello (dvs 11 till 18)
} else if (time > 18 && time <= 22) {
    botReply(timeGreetings[2]);           //evening (dvs 19 till 22)
} else {
    botReply(timeGreetings[3]);           //late (dvs 23 till 4)
    botReply("Since you're already up, What's your name?");
}
};


//After user has submitted their name, this runs:
form.addEventListener('submit', (event) => {
  event.preventDefault()
  
  const firstName = document.getElementById('firstName').value;
  userReply(firstName);
  recognizeName(firstName);
})


//When
const recognizeName = (firstName) => {

  botReply(`How can I help you, ${firstName}?`);

  inputWrapper.innerHTML =
      `<button id="appointmentBtn" type="submit" value="Book appointment">Book appointment</button>
    <button id="openingHoursBtn" type="submit" value="Opening hours">Opening hours</button>
    <button id="styleAdviceBtn" type="submit" value="Style advice">Style advice</button>`;

  
  let appointmentBtn = document.getElementById('appointmentBtn');
  appointmentBtn.addEventListener('click', () => bookAppointment())

  let openingHoursBtn = document.getElementById('openingHoursBtn');
  openingHoursBtn.addEventListener('click', () => openingHours())

  let styleAdviceBtn = document.getElementById('styleAdviceBtn');
  styleAdviceBtn.addEventListener('click', () => styleAdvice())
}


//If user clicks on button appointmentBtn, this runs:
const bookAppointment = () => {
  userReply(`I'd like to make an appointment`);
  setTimeout(() => botReply(`Great! Please select the treatment you would like to recieve below.`), 1000)
  
  inputWrapper.innerHTML =
        `<select id="selectTreatment">
          <option value selected disabled>Select a treatment</option>
          <option value="haircut">Haircut</option>
          <option value="haircolor">Hair coloring</option>
          <option value="hairstyling">Hair styling</option>
        </select>
        <button class="selectBtn" id="selectTreatmentBtn" type="submit">OK</button>
        `;
  
        const selectTreatmentBtn = document.getElementById('selectTreatmentBtn');
  selectTreatmentBtn.addEventListener('click', () => {console.log(`${selectTreatment.value}`)})
}


const openingHours = () => {

  userReply(`Opening hours`);
  botReply(`Weekdays 10-22, 
    Saturdays 11-18 & 
    Sundays 11-15`)
  botReply(`Hope to see you soon!`)

      inputWrapper.innerHTML =
      `<button id="backBtn" type="submit" value="Book appointment">Go back please</button>
      `;

      let backBtn = document.getElementById('backBtn');
      backBtn.addEventListener('click', () => reloadSite())
}


const styleAdvice = () => {
userReply(`What should I do with my hair?`);

console.log(`randomStyleAdvice.length`, randomStyleAdvice.length)
let index = getRandomNumber(0, randomStyleAdvice.length-1);
console.log(`index`, index)

setTimeout(() => botReply(randomStyleAdvice[index]), 1500)

inputWrapper.innerHTML =
      `<button id="againBtn" type="submit" value="Again">Again plz</button>
      <button id="backBtn2" type="submit" value="Book appointment">Go back please</button>`;

      let againBtn = document.getElementById('againBtn');
      againBtn.addEventListener('click', () => newAdvice())

      let backBtn2 = document.getElementById('backBtn2');
      backBtn2.addEventListener('click', () => reloadSite())
}

//Gice user new advice
const newAdvice = () => {
  userReply(`Not feeling it. Do you have another idea?`);

console.log(`randomStyleAdvice.length`, randomStyleAdvice.length)
let index = getRandomNumber(0, randomStyleAdvice.length-1);
console.log(`index`, index)

setTimeout(() => botReply(randomStyleAdvice[index]), 2000)
}


//Reloads the page
const reloadSite = () => {
    document.location.reload()
}

//Use for the randomizer
const getRandomNumber = (min, max) => {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2);
  return result;
}






// ------------------> START:
// When website loaded, chatbot asks first question.
//We welcome the user (based on current time) with a delay of 1s. 
setTimeout(greetUser, 1000, timeGreetings, time);





/*

// Starts here
const greetUser2 = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here



*/