// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.querySelector(".input-wrapper");

// If you need any global variables that you can use across different functions, declare them here:
let heroName;
let heroHp = 2
const heroInventory = [];// 2 is the nuber HP you start with



// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
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
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greeting = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello adventurer, what is your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

setTimeout(greeting, 1);

// Set up your eventlisteners here





//START OF OUR CODE
const submitButton = document.querySelector(".send-btn");
const inputField = document.querySelector("#name-input");
submitButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    heroName = inputField.value; //defines the heros name 
    showMessage(`My name is ${heroName}`, "user"); 
   //After showMessages is called, setTimout waits 1000 ms to call nameReply 
   setTimeout(nameReply, 0);
  })

  /* This is the first reply from the bot */
const nameReply = () => {
  showMessage(`${heroName}, you are about to embark on an adventure! 
  Choose one item below to aid you on you quest. I advise you to choose wisely!`, "bot");
  setTimeout(itemSelection, 0);
}

  // List to select items 
  const itemSelection = () => {
  //const inputWrapper = document.querySelector(".input-wrapper");🅰️ Flyttade const till toppen av dokumentet
  inputWrapper.innerHTML = `
    <select id="item-one">
      <option value="" selected disabled>👇 Select an item...</option>;
      <option value="Water-bottle">Water bottle🥤</option>
      <option value="Umbrella">Umbrella☂</option>
      <option value="Rope">Rope🪢</option>
      <option value="Helmet">Helmet ⛑</option>
      <option value="Boat">Boat ⛵️</option>
      <option value="Life-Jacket">Life jacket 🦺</option>
      <option value="Gutar">Guitar 🎸</option>
      <option value="Meat">Piece of meat 🍗</option>
      <option value="Sword">Sword 🗡</option>
      <option value="Shield">Shield 🛡</option>
      <option value="Invicibility-cloak">Invicibility cloak 🧥</option>
      <option value="Moccain">Moccasin 🧦</option>
    </select>
    
    <select id="item-two">
      <option value="" selected disabled>👇 Select another item...</option>;
      <option value="Water-bottle">Water bottle🥤</option>
      <option value="Umbrella">Umbrella☂</option>
      <option value="Rope">Rope🪢</option>
      <option value="Helmet">Helmet ⛑</option>
      <option value="Boat">Boat ⛵️</option>
      <option value="Life-Jacket">Life jacket 🦺</option>
      <option value="Gutar">Guitar 🎸</option>
      <option value="Meat">Piece of meat 🍗</option>
      <option value="Sword">Sword 🗡</option>
      <option value="Shield">Shield 🛡</option>
      <option value="Invicibility-cloak">Invicibility cloak 🧥</option>
      <option value="Moccain">Moccasin 🧦</option>
    </select>
    
    <button id="select-item-btn">Select</button>`;
   
    let itemList1 = document.querySelector("#item-one");
    let itemList2 = document.querySelector("#item-two");
   
    let selectItemBtn = document.querySelector("#select-item-btn");
    selectItemBtn.addEventListener("click", function (event) {
      event.preventDefault();
      //https://ricardometring.com/getting-the-value-of-a-select-in-javascript hittade lösning för dett här 🅰️
      // the value of the selected option in respective list is assign to variable item1 and item2.
      let item1 = itemList1.options[itemList1.selectedIndex].innerHTML;
      let item2 = itemList2.options[itemList2.selectedIndex].innerHTML;
     
      inputWrapper.innerHTML = (``);

      console.log(item1);
      console.log(item2);
      showMessage (`I choose ${item1} and ${item2}`, 'user')
      
      heroInventory.push(item1.value, item2.value); 
      console.log(`Added ${item1.value, item2.value} to backpack`);
      console.log("inventory", heroInventory);

      setTimeout(botMonologue, 1000);
      }) 
      }


/*     // Make buttons visible for next step
const showButtons = () => {
      const buttonWrapper = document.querySelector("#button-wrapper");
      buttonWrapper.classList.add("visible-wrapper");   
}
 */



//When selected item, the buttons will disapprear and show next message. 
/* const hideButtons = () => {
  const buttonWrapper = document.querySelector("#button-wrapper");
  buttonWrapper.classList.remove("visible-wrapper");  
  setTimeout(botMonologue, 1000);
} */

const botMonologue = () => {
showMessage (`Excellent choice! Your backpack is stuffed. Are you ready to to embark on your journey?`,"bot");
setTimeout(continueAdventure, 1000);
// Make buttons visible for next step
}

const continueAdventure= () => {
  inputWrapper.innerHTML = `
  <button class="continue" id="continueYes">YES! Bring it on!</button>
  <button class="continue" id="continueNo">I'm too scared!</button>
  `;
  let continueAdventure = document.querySelectorAll(".continue");
  continueAdventure.forEach(button => button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("continueYes");
//https://javascript.plainenglish.io/how-to-get-the-id-of-the-clicked-element-in-the-javascript-click-handler-8ca398d848d6
    /*     if (continueYes) {


    } else {

    } */
    
}))}
 


const botIntersection1 = () => {
showMessage (`Walking kilometer after kilometer down a winding road you come to an intersection. Where do you want to go?`,"bot");
setTimeout(pathChoice, 1000);
} 
/* botIntersection1 (); */


// Change item buttons to new text. Make buttons visible for next step.

const pathChoice = () => {
document.getElementById("reusable-button-1").innerHTML = "Dessert🌵";
document.getElementById("reusable-button-2").innerHTML = "Mountain🌋";
document.getElementById("reusable-button-3").innerHTML = "Creek🌊";
setTimeout(showReusableButtons, 1000);
}

  /* 

    /*console.log(hero);
    if (heroInventory.includes("Rope🪢")) {
      console.log("yay")    
    }
    else if (!hero.includes("Rope🪢")) {
      console.log("you died")
    }
  )} */