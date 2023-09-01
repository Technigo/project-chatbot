// Variables that point to selected DOM elements
const chat = document.getElementById('chat');


// --------------------------------------------------------
// global variables that you can use across different functions, declare them here:
// 1a. service offers
let serviceChoice = "nada";
let FeeDomain = 0;
// per year

// 1b. domain offers
let domain = "";
let FeeHosting = 0;
// per month

// 2. plan
let plan = "";
let sum = 0;

// 3. invoice
let discount = 0;

// 4. offer a developer
let developerOption = "";


// -----------------------------------------------------
// functions

// 0. Introduction
// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    // console.log("a user message")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="code/assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    // console.log("a bot message")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="code/assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p id="message">${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

const greetUser = () => {
  // here we call the function showMessage
  showMessage("Welcome to dreamhoster.net, your service provider for professional hosting. What services are you interested in?", 'bot');
}

// 1a. all general service offers
const serviceOffers = () => {
  showMessage(`&bull; Domain registration<br>&bull; Web site hosting<br>&bull; Domain registration and hosting`, "bot");

  // create 3 buttons
  document.getElementById("input-wrapper").innerHTML = `
  <div id="services-wrapper" style="display: flex">
    <button id="domain" value="domain">Domain<br>registration:<br>15 credits / year</button>
    <button id="hosting" value="hosting">Hosting:<br>5  credits / month</button>
    <button id="domainAndHosting" value="domainAndHosting">Registration<br>and Hosting:<br>15% discount</button>
  </div>`;
  // additional div for targeting content and serving as flex container, input-wrapper needs to ramain
  // do not nest ""

  const servicesWrapper = document.getElementById("services-wrapper");

  servicesWrapper.addEventListener("click", function (event) {
    // do not target predefined input-wrapper for every query! target needs to be different, therefore add additional div in costum html
    // console.log(event.target.value); -> visible after click
    if (event.target.value == "domain") {
      serviceChoice = `Domain registration only`;
      FeeDomain = 15;
      setTimeout(domainOffers, 1000);
      // without timeout confirmation too late
      // calling next question - 1b
    } else if (event.target.value == "hosting") {
      serviceChoice = "Hosting only";
      // console.log("end");
      FeeHosting = 5;
      FeeHosting = FeeHosting * 12;
      setTimeout(planSelection, 1000);
    } else {
      serviceChoice = "Domain and Hosting";
      FeeHosting = 5;
      FeeHosting = FeeHosting * 12;
      FeeDomain = 15;
      discount = 0.15;
      setTimeout(domainOffers, 1000);
      // without timeout confirmation too late
      // calling next question - 1b
    }
    // console.log(serviceChoice);
    selectionConfirmation();

    // console.log("end of services");
  });
}

const selectionConfirmation = () => showMessage(`I pick: <br>${serviceChoice}`, "user");
const domainConfirmation = () => showMessage(`I go for ${domain}-Domain.`, "user")
// end for service offers

// 1b. subchoices for 1. - domain selection
const domainOffers = () => {
  showMessage(`We can offer you the following four domains and three additional fun domains:<br>
  1)  .com    2)  .net    3) .biz    4)  .org<br>
  5)  .xyz    6)  .fyi   7)  .lol<br>
  Please enter the number of your choice.`, "bot");

  // add input field
  document.getElementById("input-wrapper").innerHTML = `
  <form id="domain-form">
  <label for="domain-input">Domain</label>
  <input id="domain-input" type="text" />
  <button class="send-btn" id="send-button-domainchoice">
  Send
  </button>
  </form>`;
  // submit
  document.getElementById("domain-form").addEventListener("submit", domainSubmit);
  // not "click" 
}

function domainSubmit(event) {
  // connect to form!
  event.preventDefault();
  // console.log(document.getElementById("domain-input").value);
  domainSelection();
}

const domainSelection = () => {
  domain = document.getElementById("domain-input").value;
  switch (domain) {
    // I just overwrite numeral choice with domain name
    case "1":
      domain = ".com";
      break;
    case "2":
      domain = ".net";
      break;
    case "3":
      domain = ".biz";
      break;
    case "4":
      domain = ".org";
      break;
    case "5":
      domain = ".xyz";
      break;
    case "6":
      domain = ".fyi";
      break;
    case "7":
      domain = ".lol";
      break;
    default:
      domain = "invalid";
    //  else for invalid
  }
  // console.log(domain);
  if (domain == "invalid") {
    showMessage("Invalid input, try again.", "bot");
    setTimeout(domainOffers, 1000);
  }
  else {
    setTimeout(domainConfirmation, 1000);
    setTimeout(planSelection, 1000);
  }
}

//2. plan selection
const planSelection = () => {
  showMessage(`
  Our minimum plan is one year. <br>
  You can also go for 3 or 5 years.<br>
  Please fill in, if you want 1, 3 or 5 years`, "bot");

  // add input field
  document.getElementById("input-wrapper").innerHTML = `
  <form id="plan-form">
  <label for="plan-input">Plan</label>
  <input id="plan-input" type="text" />
  <button class="send-btn" id="send-button-plannchoice">
  Send
  </button>
  </form>`;
  // submit
  document.getElementById("plan-form").addEventListener("submit", planSubmit);
  // not "click" 
}

function planSubmit(event) {
  // connect to form!
  event.preventDefault();
  // console.log(document.getElementById("domain-input").value);
  planValidation();
}

const planValidation = () => {
  plan = document.getElementById("plan-input").value;
  console.log(plan);
  switch (plan) {
    case "1":
      plan = "1 year";
      break;
    case "3":
      plan = "3 years";
      break;
    case "5":
      plan = "5 years";
      break
    default:
      plan = "invalid";
  }
  if (plan == "invalid") {
    showMessage("Invalid input, try again.", "bot");
    setTimeout(planSelection, 1000);
  } else {
    setTimeout(planConfirmation, 1000);
  }
}

const planConfirmation = () => {
  showMessage(`I pick: <br>${plan}`, "user");
  calculation();
}

//3. calculation of price
const calculation = () => {
  let planDuration = document.getElementById("plan-input").value;
  console.log(planDuration);
  sum = ((FeeDomain + FeeHosting) * planDuration);
  sum = sum * (1 - discount);
  // console.log(sum);
  setTimeout(invoiceMessage, 1000);
}

const invoiceMessage = () => {
  showMessage(`Your final annual price is:<br>${sum} credits per year.`, "bot");
  setTimeout(offerDeveloper, 1000);
}
// 4. offer help thru developer
const offerDeveloper = () => {
  showMessage(`
  Do you need some help creating your website?<br>
  We have commited junior developers at hand.
  `, "bot");

  // create 2 buttons
  document.getElementById("input-wrapper").innerHTML = `
<div id="assistance-wrapper" style="display: flex">
  <button id="yes" value="yes">YES</button>
  <button id="no" value="no">No</button>
</div>`;
  // additional div for targeting content and serving as flex container, input-wrapper needs to ramain
  // do not nest ""

  const assistanceWrapper = document.getElementById("assistance-wrapper");

  assistanceWrapper.addEventListener("click", function (event) {
    // do not target predefined input-wrapper for every query! target needs to be different, therefore add additional div in costum html
    // console.log(event.target.value); -> visible after click
    if (event.target.value == "yes") {
      developerOption = "yes";
      setTimeout(goodByeMessage, 1000);
    } else {
      developerOption = "no";
      setTimeout(goodByeMessage, 1000);
    }
    developerConfirmation();
  });
}

const developerConfirmation = () => {
  showMessage(`I guess: <br>
${developerOption}`, "user")
};

const goodByeMessage = () => {
  if (developerOption == "yes") {
    showMessage(`Great! We get in touch with you soon to connect you! Good bye!`, "bot");
  } else {
    showMessage(`Ìf you need help later, just+ get back to us. Good bye!`, "bot");
  }
  document.getElementById("assistance-wrapper").style.display = "none";
  // let vanish buttons
}

// ---------------------------------------
// INITIAL CODE STARTS HERE //

// 0. greeting user
setTimeout(greetUser, 1000)
//  Fkt with () would mean execute right away, aber soll erst nach event ausgeführt werden


// 1a. show service options
setTimeout(serviceOffers, 1000);
// needs as well delay, otherwise displayed before greeting

//  ...Rest called inside predecessing function

