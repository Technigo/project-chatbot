// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('inputWrapper');
const input = document.getElementById('input');
const form = document.getElementById('form');
const form2 = document.getElementById('form2');
const scissorLogo = document.getElementById('scissorLogo');


// If you need any global variables that you can use across different functions, declare them here:
let date = new Date();
let hour = date.getHours();

const timeGreetings = [`Good morning gorgeous! What's your name?`, `Hello there gorgeous! What's your name?`, `Good evening gorgeous! What's your name?`, `Why are you even up this hour? Get some beauty sleep please!`];
const randomStyleAdvice = ['You would totally ROCK a bob', 'You would totally ROCK a pixi cut', 'You would totally ROCK pigtails', 'Just shave it off', 'Have you ever considered a mohawk?', 'Bangs', 'Curtain bangs', 'Mermaid hair would look great on you', 'You could totally bring back the zig-zag part', `Don’t change a thing! You are pure perfection.`, 'A bouncy blowdry', 'Luscious long locks', 'You should definitely go blonde', 'Dye your hair red', 'A glamorous up-do', 'A perm', 'I am thinking... dreadlocks', 'Uh, just wear a hat', 'You should do braids', 'Dye your hair green']


// FUNCTIONS:
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
  setTimeout(showMessage, 300, msg, 'user');
}


const greetUser = (timeGreetings, hour) => {

if (hour >= 5 && hour <= 10) {
    botReply(timeGreetings[0]);           //morning (dvs 5 till 10)
} else if (hour > 10 && hour <= 18) {
    botReply(timeGreetings[1]);           //hello (dvs 11 till 18)
} else if (hour > 18 && hour <= 22) {
    botReply(timeGreetings[2]);           //evening (dvs 19 till 22)
} else {
    botReply(timeGreetings[3]);           //late (dvs 23 till 4)
    botReply("Since you're already up, What's your name gorgeous?");
}
};


//After user has submitted their name, this runs:
form.addEventListener('submit', (event) => {
  event.preventDefault()
  
  let firstName = document.getElementById('firstName').value;
  userReply(firstName);
  recognizeName(firstName);
})



const recognizeName = (firstName) => {

  botReply(`How can I help you, ${firstName}?`);

  inputWrapper.innerHTML =
      `<button id="appointmentBtn" type="submit" value="Book appointment">Book appointment</button>
    <button id="openingHoursBtn" type="submit" value="Opening hours">Opening hours</button>
    <button id="styleAdviceBtn" type="submit" value="Style advice">Style advice</button>`;

  
  let appointmentBtn = document.getElementById('appointmentBtn');
  appointmentBtn.addEventListener('click', () => bookAppointment(firstName))

  let openingHoursBtn = document.getElementById('openingHoursBtn');
  openingHoursBtn.addEventListener('click', () => openingHours(firstName))

  let styleAdviceBtn = document.getElementById('styleAdviceBtn');
  styleAdviceBtn.addEventListener('click', () => styleAdvice(firstName))
}


//If user clicks on button appointmentBtn, this runs:
const bookAppointment = (firstName) => {
  userReply(`I'd like to make an appointment`);
  setTimeout(() => botReply(`Great! Please select the treatment you would like to recieve below.`), 500)
  
  inputWrapper.innerHTML =
        `<select id="selectTreatment">
          <option value selected disabled>Select a treatment below:</option>
          <option value="Hair cutting">Hair cutting</option>
          <option value="Hair coloring">Hair coloring</option>
          <option value="Hair styling">Hair styling</option>
        </select>
        <button class="selectBtn" id="selectTreatmentBtn" type="submit">Send</button>
        `;
  
        let selectTreatmentBtn = document.getElementById('selectTreatmentBtn');
        let selectedTreatment = document.getElementById('selectTreatment');
        selectTreatmentBtn.addEventListener('click', () => bookDate(selectedTreatment, firstName))
}

const bookDate = (selectedTreatment, firstName) => {
  //console.log(`${selectTreatment.value}`)
  userReply(`${selectTreatment.value}`);
  botReply(`Excellent choice ${firstName}! Which one of our available time slots would suit you best?`);

  inputWrapper.innerHTML =
        `<select id="selectDate">
          <option value selected disabled>Available time slots:</option>
          <option value="Today at 12.30">Today at 12.30</option>
          <option value="Today at 16.45">Today at 16.45</option>
          <option value="Tomorrow at 10.00">Tomorrow at 10.00</option>
          <option value="Tomorrow at 13.30">Tomorrow at 13.30</option>
          <option value="Tomorrow at 15.30">Tomorrow at 15.30</option>
        </select>
        <button class="selectBtn" id="selectDateBtn" type="submit">Send</button>
        `;

        let selectDateBtn = document.getElementById('selectDateBtn');
        let selectedDate = document.getElementById('selectDate');
        selectDateBtn.addEventListener('click', () => confirmBooking(selectedTreatment, selectedDate, firstName))

}

const confirmBooking = (selectedTreatment, selectedDate, firstName, ) => {
    //Transform selection strings to lowercase (for use within a sentence)
      const selectedTreatmentValue = selectedTreatment.value;
      const selectDateValue = selectedDate.value;
      const lowerCaseTreatment = selectedTreatmentValue.toLowerCase();
      const lowerCaseDate = selectDateValue.toLowerCase();


  userReply(`${selectedDate.value}`);
  botReply(`So to confirm, ${firstName}. You would like to schedule a ${lowerCaseTreatment} session with us ${lowerCaseDate}?`);

  inputWrapper.innerHTML =
  `<button id="yesBtn" type="submit" value="Yes">Yes</button>
  <button id="noBtn" type="submit" value="No">No</button>`

  let yesBtn = document.getElementById('yesBtn');
  yesBtn.addEventListener('click', () => toConfirm(selectedTreatment, selectedDate, firstName))

  let noBtn = document.getElementById('noBtn');
  noBtn.addEventListener('click', () => denied(firstName))
}

const toConfirm = (selectedTreatment, selectedDate, firstName) => {
  userReply('Yes');
  botReply(`Please supply us with your email adress for final confirmation.`);

  inputWrapper.innerHTML =
  `<form id="form2">
            <label for="userEmail">Email</label>
            <input id="userEmail" type="email" name="userEmail" placeholder="jane@doe.com" required>
            <button type="submit">Send</button>
        </form>`


  let form2 = document.getElementById('form2');
  form2.addEventListener('submit', (event) => {
    event.preventDefault()
    confirmed(selectedTreatment, selectedDate, firstName)
  })
}



const confirmed = (selectedTreatment, selectedDate, firstName) => {
    //Transform selection strings to lowercase (for use within a sentence)
    const selectedTreatmentValue = selectedTreatment.value;
    const selectDateValue = selectedDate.value;
    const lowerCaseTreatment = selectedTreatmentValue.toLowerCase();
    const lowerCaseDate = selectDateValue.toLowerCase();

  let userEmail = document.getElementById('userEmail');
  userReply(userEmail.value);

  botReply(`Thank you ${firstName}! You are welcome ${lowerCaseDate} for ${lowerCaseTreatment} with us. Have a wonderful day!`);

  inputWrapper.innerHTML = `<p class="pressScissorText">Press the scissor to reload the page!</p>`;
}

const denied = (firstName) => {
  userReply(`No`)
  botReply(`What a shame. Maybe next time? Have a great day!`)

  inputWrapper.innerHTML = `<p class="pressScissorText">Press the scissor to reload the page!</p>`;

}


const openingHours = (firstName) => {

  userReply(`Opening hours`);
  botReply(`Weekdays 10-22, 
    Saturdays 10-18 & 
    Sundays 11-15`)
  botReply(`Hope to see you soon!`)

      inputWrapper.innerHTML =
      `<button id="backBtn" type="submit" value="Book appointment">Go back please</button>
      `;

      let backBtn = document.getElementById('backBtn');
      backBtn.addEventListener('click', () => recognizeName(firstName))
}


const styleAdvice = (firstName) => {
  userReply(`What should I do with my hair?`);

  //console.log(`randomStyleAdvice.length`, randomStyleAdvice.length)
  let index = getRandomNumber(0, randomStyleAdvice.length-1);
  //console.log(`index`, index)

  setTimeout(() => botReply(randomStyleAdvice[index]), 1500)

  inputWrapper.innerHTML =
      `<button id="againBtn" type="submit" value="Again">Again plz</button>
      <button id="backBtn2" type="submit" value="Book appointment">Go back please</button>`;

      let againBtn = document.getElementById('againBtn');
      againBtn.addEventListener('click', () => newAdvice())

      let backBtn2 = document.getElementById('backBtn2');
      backBtn2.addEventListener('click', () => recognizeName(firstName))
}

//Give user new advice
const newAdvice = () => {
  userReply(`Not feeling it. Do you have another idea?`);

  //console.log(`randomStyleAdvice.length`, randomStyleAdvice.length)
  let index = getRandomNumber(0, randomStyleAdvice.length-1);
  //console.log(`index`, index)

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
//When website loaded, chatbot asks first question. We welcome the user (based on current time) with a delay of 1s. 
setTimeout(greetUser, 1000, timeGreetings, hour);

//When clicking the scissor logo, page reloads:
scissorLogo.addEventListener('click', () => reloadSite())


