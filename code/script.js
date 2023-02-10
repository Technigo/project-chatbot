/// Variables that point to selected DOM elements
const chat = document.getElementById("chat");
const input = document.getElementById("name-input");
const form = document.getElementById("name-form");
const submit = document.getElementById("submit");
const inputWrapper = document.getElementById("input-wrapper");

// If you need any global variables that you can use across different functions, declare them here:

// Declare your functions after this comment

const botReply = (msg) => {
  showMessage(msg, "bot");
};

const userReply = (msg) => {
  showMessage(msg, "user");
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/my-bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
}

// This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
window.setInterval(function () {
  chat.scrollTop = chat.scrollHeight;
}, 5000);

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", "bot");
  // Just to check it out, change 'bot' to 'user' here 👆
};

const handleInput = (event) => {
  // at submit this function will be invoked
  event.preventDefault(); // prevents website refresh at submit
  const msg = input.value; // input value will be stored in the const name
  showMessage(`${msg}`, "user"); // users answer
  input.value = "";
  setTimeout(() => ecoAnxiety(msg), 1000);
};

const ecoAnxiety = (msg) => {
  botReply(`Nice to meet you ${msg}! Do you have eco-anxiety?`);
  //3 ALTERNATIVES: YES - NO - MAYBE
  inputWrapper.innerHTML = `
    <button class="anxBtn" type="submit" value="Yes">Yes</button>
    <button class="anxBtn" type="submit" value="No">No</button>
    <button class="anxBtn" type="submit" value="Maybe">Maybe</button>`;

  const anxOptionBtns = document.querySelectorAll(".anxBtn");
  anxOptionBtns.forEach(button => button.addEventListener("click", () => question2(button.value)));
};




const question2 = (userAnswer) => {
  //IF "YES" AND "MAYBE" - RATE YOUR ANXIETY

  if (userAnswer === "Yes" || userAnswer === "Maybe") {
    userReply(userAnswer);
    setTimeout(() => botReply(`Please, rate your eco-anxiety level!`), 1000);
    
    setTimeout(() => (inputWrapper.innerHTML = `<form class="radioContainer">
    <input class="rate" type="radio" name="rate" value="1">1</input>
    <input class="rate" type="radio" name="rate" value="2">2</input>
    <input class="rate" type="radio" name="rate" value="3">3</input>
    <input class="rate" type="radio" id="radio4" value="4">4</input>
    <input class="rate" type="radio" name="rate" value="5">5</input>
    <input class="rate" type="radio" name="rate" value="6">6</input>
    <input class="rate" type="radio" name="rate" value="7">7</input>
    <input class="rate" type="radio" name="rate" value="8">8</input>
    <input class="rate" type="radio" id="radio4" value="9">9</input>
    <input class="rate" type="radio" name="rate" value="10">10</input></form>`), 1000);
   
  
  setTimeout(() => 
  document
          .querySelectorAll(".rate")
          .forEach(button => button.addEventListener("click", () => question3(button.value))), 1000);

  } else {
    // IF NO - FOLLOW UP QUESTION - WITH THREE BUTTONS
    userReply(userAnswer);
    setTimeout(
      () =>
        botReply(
          `Happy to hear that. What is the reason you don't feel anxious?`
        ),
      1000
    );
    setTimeout(
      () =>
      (inputWrapper.innerHTML = `
      <select id="select">
        <option value="" selected disabled>👇 Select your reason...</option>
        <option id="noOption1" value="Being anxious doesn't help">Being anxious doesn't help</option>
        <option id="noOption2" value="Don't believe in climate change">Don't believe in climate change</option>
        <option id="noOption3" value="Other / I don't care">Other / I don't care</option>
      </select>`),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("select")
          .addEventListener("change", () => question3(select.value)),
      1000
    );
  }
};

const question3 = (value) => {
  // IF RADIO-BUTTON 1-3 show message:
  if (value <= 3) {
    userReply(value);
    setTimeout(
      () =>
        botReply(`You have mild to moderate anxiety. I'm sorry to hear that.
  What do you think would make you feel better about your situation?`),
      1000
    );

    setTimeout(
      () =>
      (inputWrapper.innerHTML = 
        `<button class="nextStepBtn" type="submit" value="To take action">To take action</button>
    <button class="nextStepBtn" type="submit" value="Continue as usual">Continue as usual</button>
    <button class="nextStepBtn" type="submit" value="Get support from others">Get support from others</button>`),
      1000
    );

    setTimeout(() => 
  document
          .querySelectorAll(".nextStepBtn")
          .forEach(button => button.addEventListener("click", () => question3(button.value))), 1000);
  }

  // IF RADIO-BUTTON 4-5 show message:
  else if (value > 3 && value <= 5) {
    userReply(value);
    setTimeout(
      () =>
        botReply(
          `You have severe anxiety. I'm really sorry to hear that. But, remember you are not alone! A study published by The Lancet found that 59% of children and young adults ages 16 to 25 are very or extremely worried about climate change. What are you the most anxious about?`
        ),
      1000
    );

    setTimeout(
      () =>
      (inputWrapper.innerHTML = `
    <div class="worstCaseContainer" >
      <button class="worstCaseBtn" type="submit" value="Polar ice melting">Polar ice melting</button>
      <button class="worstCaseBtn" type="submit" value="Natural disasters">Natural disasters</button>
      <button class="worstCaseBtn" type="submit" value="Humanity is not doing enough">Humanity is not doing enough</button>
      <button class="worstCaseBtn" type="submit" value="Economic collapse">Economic collapse</button>
      <button class="worstCaseBtn" type="submit" value="My own helplessness">My own helplessness</button>
    </div>`),
      1000
    );

    setTimeout(() => 
    document
          .querySelectorAll(".worstCaseBtn")
          .forEach(button => button.addEventListener("click", () => question4(button.value))), 1000);

  } else {
    userReply(value);
    setTimeout(
      () =>
        botReply(
          `"We understand, we suggest you read one of these article which could help you understand people who suffer from climate anxiety better:`
        ),
      1000
    );


    setTimeout(
      () => botReply(`
        <button class="chat-link" onclick=" window.open('https://www.naturskyddsforeningen.se/','_blank')">Naturskyddsforeningen</button>
        <button class="chat-link" onclick=" window.open('https://www.naturskyddsforeningen.se/','_blank')">Naturskyddsforeningen</button>
        <button class="chat-link" onclick=" window.open('https://www.naturskyddsforeningen.se/','_blank')">Naturskyddsforeningen</button>
      `
      ),
      1000
    );

    setTimeout(() => AnythingElse(value), 2000);
  }
};

const question4 = (value) => {
  if (value === "To take action" || value === "Get support from others") {
    userReply(value);
    setTimeout(() => botReply(`How do you want to achieve that?`), 1000);
    setTimeout(
      () =>
      (inputWrapper.innerHTML = `
      <button class="takeActionBtn" type="submit" value="Visit a therapist">Visit a therapist</button>
      <button class="takeActionBtn" type="submit" value="Join an activist group">Join an activist group</button>
      <button class="takeActionBtn" type="submit" value="Join a political party">Join a political party</button>`
      ),
      1000
    );

    setTimeout(() => 
    document
          .querySelectorAll(".takeActionBtn")
          .forEach(button => button.addEventListener("click", () => question5(button.value))), 1000);


  } else if (value === "Continue as usual") {
    userReply(value);
    setTimeout(
      () =>
        botReply(
          `Climate change will affects many people's psychological wellbeing. Try to take care of your health and reach out to others. Here is an article about strategies on how to deal with climate anxiety:`
        ),
      1000
    );

    setTimeout(
      () =>
        botReply(`<button class="chat-link" onclick=" window.open('https://www.naturskyddsforeningen.se/','_blank')">Naturskyddsforeningen</button>`),
      2000
    );

    setTimeout(() => AnythingElse(value), 2000);

  } else {
    userReply(value);
    setTimeout(
      () =>
        botReply(
          `It's important to take care of your own health despite climate change but solution could also be to activate yourself instead of staying passive. What do you want to do?`
        ),
      1000
    );
   
       inputWrapper.innerHTML = `
      <button class="nextStepBtn" type="submit">Take care of my health</button>
      <button class="nextStepBtn" type="submit">To take action</button>
      <button class="nextStepBtn" type="submit">Continue as usual</button>
      <button class="nextStepBtn" type="submit">Get support from others</button>`

 
    document
          .querySelectorAll(".nextStepBtn")
          .forEach(button => button.addEventListener("click", () => question5(button.value)));

  }}

const question5 = (value) => {

  if (value === "Take care of my health" || "Visit a therapist") {
    userReply(value)
    setTimeout(
      () => botReply(`Here are a couple of resources to reach out to:`)
      ,
      1000
    );

    setTimeout(
      () => botReply(`
        <button class="chat-link" onclick=" window.open('https://www.naturskyddsforeningen.se/','_blank')">Naturskyddsforeningen</button>
        <button class="chat-link" onclick=" window.open('https://www.naturskyddsforeningen.se/','_blank')">Naturskyddsforeningen</button>
        <button class="chat-link" onclick=" window.open('https://www.naturskyddsforeningen.se/','_blank')">Naturskyddsforeningen</button>
      `
      ),
      1000
    );
    setTimeout(() => AnythingElse(value), 2000);
  } else if (value === "Join an activist group") {
    userReply(value)
    setTimeout(
      () => botReply(`Here is some inspiration for you!`)
      ,
      1000
    );

    setTimeout(
      () => botReply(`
          <button class="chat-link" onclick=" window.open('https://www.naturskyddsforeningen.se/','_blank')">Naturskyddsforeningen</button>
          <button class="chat-link" onclick=" window.open('https://www.naturskyddsforeningen.se/','_blank')">Naturskyddsforeningen</button>
          <button class="chat-link" onclick=" window.open('https://www.naturskyddsforeningen.se/','_blank')">Naturskyddsforeningen</button>
        `
      ),
      1000
    );
    setTimeout(() => AnythingElse(value), 2000);
  } else if (value === "Join a political party") {
    UserReply(value)
    setTimeout(
      () => botReply(`Here are some politacal parties working against climate change:`)
      ,
      1000
    );

    setTimeout(
      () => botReply(`
          <button class="chat-link" onclick=" window.open('https://www.naturskyddsforeningen.se/','_blank')">Naturskyddsforeningen</button>
          <button class="chat-link" onclick=" window.open('https://www.naturskyddsforeningen.se/','_blank')">Naturskyddsforeningen</button>
          <button class="chat-link" onclick=" window.open('https://www.naturskyddsforeningen.se/','_blank')">Naturskyddsforeningen</button>
        `
      ),
      1000
    );
    setTimeout(() => AnythingElse(value), 2000);
  }}

const AnythingElse = (value) => {
  setTimeout(
    () => botReply(`Is there anything else we can help you with?`),
    1000
  );
  setTimeout(
    () =>
    (inputWrapper.innerHTML =
      `<button id="yesBtn3" type="submit">Yes</button>
        <button id="noBtn3" type="submit">No</button>`),
    1000
  );
  setTimeout(
    () =>
      document
        .getElementById("yesBtn3")
        .addEventListener("click", () => question2("Yes")),
    1000
  );

  setTimeout(
    () =>
      document
        .getElementById("noBtn3")
        .addEventListener("click", () => Thankyou("No")),
    1000
  );
}

const Thankyou = (value) => {
  userReply(value);
  botReply(
    `I hope this is of any help. Please feel free to reach out to us for further questions`
  )

  inputWrapper.innerHTML = `
  <button id="contact" type="email"><a href="mailto:email@email.de" taget="_blank">Contact us</a></button>`
};

// Set up your eventlisteners here

form.addEventListener("submit", handleInput);

// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
