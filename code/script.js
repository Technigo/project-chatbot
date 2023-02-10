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
  setTimeout(() => question1(msg), 1000);
};

const question1 = (msg) => {
  botReply(`Nice to meet you ${msg}! Do you have eco-anxiety?`);
  //3 ALTERNATIVES: YES - NO - MAYBE
  inputWrapper.innerHTML = `<div id="optionBtns">
    <button id="yesBtn" type="submit" value="Yes">Yes</button>
    <button id="noBtn" type="submit" value="No">No</button>
    <button id="maybeBtn" type="submit" value="Maybe">Maybe</button></div>`;

  document
    .getElementById("yesBtn")
    .addEventListener("click", () => question2("Yes"));
  document
    .getElementById("noBtn")
    .addEventListener("click", () => question2("No"));
  document
    .getElementById("maybeBtn")
    .addEventListener("click", () => question2("Maybe"));
};

const question2 = (userAnswer) => {
  //IF "YES" AND "MAYBE" - RATE YOUR ANXIETY

  if (userAnswer === "Yes" || userAnswer === "Maybe") {
    userReply(userAnswer);
    setTimeout(() => botReply(`Please, rank your eco-anxiety!`), 1000);
    setTimeout(
      () =>
      (inputWrapper.innerHTML = `<form id="radioContainer">
    <input type="radio" id="radio1" name="rank" value="1">1</input>
    <input type="radio" id="radio2" name="rank" value="2">2</input>
    <input type="radio" id="radio3" name="rank" value="3">3</input>
    <input type="radio" id="radio4" name="rank" value="4">4</input>
    <input type="radio" id="radio5" name="rank" value="5">5</input></form>`),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("radio1")
          .addEventListener("click", () => question3(1)),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("radio2")
          .addEventListener("click", () => question3(2)),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("radio3")
          .addEventListener("click", () => question3(3)),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("radio4")
          .addEventListener("click", () => question3(4)),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("radio5")
          .addEventListener("click", () => question3(5)),
      1000
    );
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
      (inputWrapper.innerHTML = `<button id="actionBtn" type="submit" value="To take action">To take action</button>
    <button id="continueBtn" type="submit" value="Continue as usual">Continue as usual</button>
    <button id="supportBtn" type="submit" value="Get support from others">Get support from others</button>`),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("actionBtn")
          .addEventListener("click", () => question4(actionBtn.value)),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("continueBtn")
          .addEventListener("click", () => question4(continueBtn.value)),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("supportBtn")
          .addEventListener("click", () => question4(supportBtn.value)),
      1000
    );
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
    <div>
      <button id="polarBtn" type="submit" value="Polar ice melting">Polar ice melting</button>
      <button id="disasterBtn" type="submit" value="Natural disasters">Natural disasters</button>
      <button id="doingBtn" type="submit" value="Humanity is not doing enough">Humanity is not doing enough</button>
      <button id="economyBtn" type="submit" value="Economic collapse">Economic collapse</button>
      <button id="helplessBtn" type="submit" value="My own helplessness">My own helplessness</button>
    </div>`),
      1000
    );
    setTimeout(
      () =>
        document
          .getElementById("polarBtn")
          .addEventListener("click", () => question4(polarBtn.value)),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("disasterBtn")
          .addEventListener("click", () => question4(disasterBtn.value)),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("doingBtn")
          .addEventListener("click", () => question4(doingBtn.value)),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("economyBtn")
          .addEventListener("click", () => question4(economyBtn.value)),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("helplessBtn")
          .addEventListener("click", () => question4(helplessBtn.value)),
      1000
    );
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


    setTimeout(
      () => botReply(`Is there anything else we can help you with?`),
      5000
    );
    setTimeout(
      () =>
      (inputWrapper.innerHTML = `
      <button id="yesBtn2" type="submit">Yes</button>
      <button id="noBtn2" type="submit">No</button>
     `
      ),
      5000
    );
    setTimeout(
      () =>
        document
          .getElementById("yesBtn2")
          .addEventListener("click", () => question2("Yes")),
      5000
    );

    setTimeout(
      () =>
        document
          .getElementById("noBtn2")
          .addEventListener("click", () => Thankyou("No")),
      5000
    );
  }
};

const question4 = (value) => {
  if (value === "To take action" || value === "Get support from others") {
    userReply(value);
    setTimeout(() => botReply(`How do you want to achieve that?`), 1000);
    setTimeout(
      () =>
      (inputWrapper.innerHTML = `
      <button id="therapy" type="submit" value="Visit a therapist">Visit a therapist</button>
      <button id="activist" type="submit" value="Join an activist group">Join an activist group</button>
      <button id="party" type="submit" value="Join a political party">Join a political party</button>`),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("therapy")
          .addEventListener("click", () => question5(therapy.value)),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("activist")
          .addEventListener("click", () => question5(activist.value)),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("party")
          .addEventListener("click", () => question5(party.value)),
      1000
    );


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

    setTimeout(
      () => botReply(`Is there anything else we can help you with?`),
      5000
    );
    setTimeout(
      () =>
      (inputWrapper.innerHTML =
        `<button id="yesBtn3" type="submit">Yes</button>
          <button id="noBtn3" type="submit">No</button>`),
      5000
    );
    setTimeout(
      () =>
        document
          .getElementById("yesBtn3")
          .addEventListener("click", () => question2("Yes")),
      10000
    );

    setTimeout(
      () =>
        document
          .getElementById("noBtn3")
          .addEventListener("click", () => Thankyou("No")),
      10000
    );


  } else {
    userReply(value);
    setTimeout(
      () =>
        botReply(
          `It's important to take care of your own health despite climate change but solution could also be to activate yourself instead of staying passive. What do you want to do?`
        ),
      1000
    );
    SetTimeout(
      () =>
      (inputWrapper.innerHTML = `
  <button id="healthBtn" type="submit">Take care of my health</button>
  <button id="actionBtn" type="submit">To take action</button>
  <button id="continueBtn" type="submit">Continue as usual</button>
  <button id="supportBtn" type="submit">Get support from others</button>`),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("healthBtn")
          .addEventListener("click", () => question5(healthBtn.value)),
      1000
    );


    setTimeout(
      () =>
        document
          .getElementById("actionBtn")
          .addEventListener("click", () => question4(actionBtn.value)),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("continueBtn")
          .addEventListener("click", () => question5(continueBtn.value)),
      1000
    );

    setTimeout(
      () =>
        document
          .getElementById("supportBtn")
          .addEventListener("click", () => question4(supportBtn.value)),
      1000
    );
  }
}

const question5 = (value) => {

  if (value === "Take care of my health" || "Visit a therapist") {
    userReply(value)
    setTimeout(
      () => botReply(`Here are a couple of resources to reach out to`)
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
