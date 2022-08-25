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
    const nameForm = document.querySelector("#name-form")
    nameForm.reset();
   //After showMessages is called, setTimout waits 1000 ms to call nameReply 
   setTimeout(nameReply, 1000);
  })

  /* This is the first reply from the bot */
const nameReply = () => {
  showMessage(`${heroName}, you are about to embark on an adventure! 
  Choose one item below to aid you on you quest. I advise you to choose wisely!`, "bot");
  setTimeout(itemSelection, 1000);
}


  // List to select items 
  const itemSelection = () => {
  //const inputWrapper = document.querySelector(".input-wrapper");🅰️ Flyttade const till toppen av dokumentet
  inputWrapper.innerHTML = `
    <select id="item-one">
      <option value="" selected disabled>👇 Select an item...</option>;
      <option value="water-bottle">Water bottle🥤</option>
      <option value="umbrella">Umbrella☂</option>
      <option value="rope">Rope🪢</option>
      <option value="helmet">Helmet ⛑</option>
      <option value="boat">Boat ⛵️</option>
      <option value="life-jacket">Life jacket🦺</option>
      <option value="gutar">Guitar 🎸</option>
      <option value="meat">Piece of meat 🍗</option>
      <option value="sword">Sword 🗡</option>
      <option value="shield">Shield 🛡</option>
      <option value="invicibility-cloak">Invicibility cloak 🧥</option>
      <option value="moccasin">Moccasin 🧦</option>
    </select>
    
    <select id="item-two">
      <option value="" selected disabled>👇 Select another item...</option>;
      <option value="water-bottle">Water bottle🥤</option>
      <option value="umbrella">Umbrella☂</option>
      <option value="rope">Rope🪢</option>
      <option value="helmet">Helmet ⛑</option>
      <option value="boat">Boat ⛵️</option>
      <option value="life-jacket">Life jacket🦺</option>
      <option value="gutar">Guitar 🎸</option>
      <option value="meat">Piece of meat 🍗</option>
      <option value="sword">Sword 🗡</option>
      <option value="shield">Shield 🛡</option>
      <option value="invicibility-cloak">Invicibility cloak 🧥</option>
      <option value="moccasin">Moccasin 🧦</option>
    </select>
    
    <button id="select-item-btn">Select</button>`;
   
    let itemList1 = document.querySelector("#item-one");
    let itemList2 = document.querySelector("#item-two");
   
    let selectItemBtn = document.querySelector("#select-item-btn");
    selectItemBtn.addEventListener("click", function (event) {
      event.preventDefault();
      //https://ricardometring.com/getting-the-value-of-a-select-in-javascript hittade lösning för dett här 🅰️
      // the value of the selected option in respective list is assign to variable item1 and item2.
      let item1 = itemList1.options[itemList1.selectedIndex].value;
      let item2 = itemList2.options[itemList2.selectedIndex].value;

      let htmlItem1 = itemList1.options[itemList1.selectedIndex].innerHTML;
      let htmlItem2 = itemList2.options[itemList2.selectedIndex].innerHTML;

      inputWrapper.innerHTML = (``);

      console.log(item1);
      console.log(item2);
      showMessage (`I choose ${htmlItem1} and ${htmlItem2}`, 'user')
      
      heroInventory.push(item1, item2); 
      console.log(`Added ${item1, item2} to backpack`);
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
    console.log("continueYes", this.id);
    showMessage(this.innerHTML, "user");

     if (this.id === "continueYes") {
       setTimeout(botIntersection1, 1000);

    } else {
      setTimeout( () => {
        showMessage("Too bad! Come back when you are ready!", "bot")
        , 1000});
        setTimeout (gameOver, 2000);
    }

}))}
 


const botIntersection1 = () => {
showMessage (`Walking kilometer after kilometer down a winding road you come to an intersection. Where do you want to go?`,"bot");
setTimeout(pathChoice, 1000);
} 

// Change item buttons to new text. Make buttons visible for next step.

const pathChoice = () => {
  inputWrapper.innerHTML = `
  <button class="path-button" id="desert">Desert 🌵</button>
  <button class="path-button" id="mountain">Mountain 🌋</button>
  <button class="path-button" id="creek">Creek 🌊</button>
  `;

  let pathSelect = document.querySelectorAll(".path-button");
  pathSelect.forEach(button => button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(this.id)
    showMessage(`I will go through the ${this.innerHTML}`, "user");
   


// These are if-statment within an if-statement. Depending on which path the Hero chooses and what it has in it's backpack/inventory different conditions are triggered. 
// For one road, one item is perfect, one item makes you loose 1 hp, the rest will give game over.
    if (this.id === "desert") {
      console.log("It's hot in the desert")
            if (heroInventory.includes("water-bottle")) {
              console.log("Perfect") 
              setTimeout( () => {
                showMessage(`The heat is excruciating and your shirt is soked from perspiation. Thankfully, you can take sips from you bottle of water, leaving the dessert refreshed with a nice tan, although smelling a little bad.`,`bot`);   
            }, 1500);
            setTimeout(botIntersection2, 7000);
          }
            

            else if (heroInventory.includes("umbrella")) {
              console.log("Loose 1hp")
              setTimeout( () => { showMessage(`You use your umbrella to shade your self from the scorching sun. Exiting the dessert you are severly dehydrated but alive. Lose one HP.`,`bot`); 
              heroHp = (heroHp -1);
              console.log(heroHp);
              setTimeout( () => {showMessage(`❤️‍🩹😭`,`user`)}, 1000);
            }, 1500);
            setTimeout(botIntersection2, 7000);
          }

            else {
              console.log("GAME OVER")
              setTimeout( () => { showMessage(`The sun burns your skin and you sweat every last drop of water. You die. GAME OVER!`,`bot`); 
              }, 1500);
              setTimeout(gameOver, 8000);
            }



   } else if (this.id === "mountain") {
            console.log("The mountain is steep")
            if (heroInventory.includes("rope")) {
              console.log("Perfect") 
              setTimeout( () => { showMessage(`You gently lower yourself from the summit using your rope and mange to touch down on the ground softly. You leave the mountain with blisters in your hands but a smile on your face.`,`bot`);   
            }, 1500);
            setTimeout(botIntersection2, 7000);
          }

            else if (heroInventory.includes("helmet")) {
              console.log("Loose 1hp")
              setTimeout( () => {showMessage(`Feeling overconfident you try to climb the mountain with your bare hands. Halfway down you slip on a stream of lava and fall. 
              You praise your previous choises, surviving the fall thanks to you helmet. Lose one HP.`,`bot`);
              heroHp = (heroHp -1);
              console.log(heroHp); 
              setTimeout( () => {showMessage(`❤️‍🩹😭`,`user`)}, 1000);
            }, 1500);
            setTimeout(botIntersection2, 7000);
            }
            
            else {
              console.log("GAME OVER")
              setTimeout( () => { showMessage(`You lose you footing and tumble down the mountain side. Crushing every bone in your body. Your last thought is one of regret: you tried to climb a over a vulcaino. What where you thinking? You die. GAME OVER!`,`bot`); 
            }, 1500);
            setTimeout(gameOver, 10000);
          }

    } else {
          console.log("The water is wild")
          if (heroInventory.includes("boat")) {
            console.log("Perfect") 
            setTimeout( () => {
            showMessage(`Feeling a little dizzy after inflating the canoe with your breath, you enjoy your cruise down the creek. Exiting the creek you skip down the road, happy with your choise of path.`,`bot`);   
            }, 1500);
            setTimeout(botIntersection2, 7000);
          }
          else if (heroInventory.includes("life-jacket")) {
            console.log("Loose 1hp")
            setTimeout( () => {
              showMessage(`You put on your life jacket and jump in to the creek. You stay afloat but repeatedly hit your knees agains the rocks in the creek. You emerge from the water bruised but breathing. Lose one HP.`,`bot`); 
              setTimeout( () => {showMessage(`❤️‍🩹😭`,`user`)}, 1000);
              heroHp = (heroHp -1);
              console.log(heroHp);
            }, 1500);
            setTimeout(botIntersection2, 7000);
          }
          else {
            console.log("GAME OVER")
            setTimeout( () => {
            showMessage(`You attemt to swim along the creek but its currents are to strong and you are pulled under water to a certain death. You drown. GAME OVER!`,`bot`); 
          }, 1500);
          setTimeout(gameOver, 8000);
       }
    } 
}))
}

// GAME OVER FUNCTION
const gameOver = () => {
  location.reload();
}


// Function to choose way to face the dragon!

const botIntersection2 = () => {
  showMessage(`Your legs are tired but your will is strong. You can see the Villain castle in the distance. 
  Standing infront of the castle is the dragon with thick smoke oozing from its nostrils.`, `bot`) 
  setTimeout( () => {showMessage(`As you approach you think of three ways to get passed the dragon. Either you try to sooth it, you kill it or you sneak past it. 
  You deside your best bet is to:`,`bot`)}, 1000);
  methodChoice();
}

  const methodChoice = () => {
    inputWrapper.innerHTML = `
    <button class="method-button" id="soothe">Soothe</button>
    <button class="method-button" id="strike">Strike</button>
    <button class="method-button" id="sneak">Sneak past</button>
    `;
  
    let pathSelect = document.querySelectorAll(".method-button");
    pathSelect.forEach(button => button.addEventListener("click", function (event) {
      event.preventDefault();
      console.log(this.id)
      showMessage(`Ooo, I will try to ${this.innerHTML} the dragon!`, "user");
     
  
  
  // These are if-statment within an if-statement. Depending on which path the Hero chooses and what it has in it's backpack/inventory different conditions are triggered. 
  // For one road, one item is perfect, one item makes you loose 1 hp, the rest will give game over.
      if (this.id === "soothe") {
        console.log("soothe")
              if (heroInventory.includes("guitar")) {
                console.log("Perfect") 
                setTimeout( () => {
                  showMessage(`The heat is excruciating and your shirt is soked from perspiation. Thankfully, you can take sips from you bottle of water, leaving the dessert refreshed with a nice tan, although smelling a little bad.`,`bot`);   
              }, 1500);
              setTimeout(botIntersection2, 7000);
            }
              
  
              else if (heroInventory.includes("meat")) {
                console.log("Loose 1hp")
                setTimeout( () => { showMessage(`You use your umbrella to shade your self from the scorching sun. Exiting the dessert you are severly dehydrated but alive. Lose one HP.`,`bot`); 
                heroHp = (heroHp -1);
                console.log(heroHp);
                setTimeout( () => {showMessage(`❤️‍🩹😭`,`user`)}, 1000);
              }, 1500);
              setTimeout(botIntersection2, 7000);
            }
  
              else {
                console.log("GAME OVER")
                setTimeout( () => { showMessage(`The sun burns your skin and you sweat every last drop of water. You die. GAME OVER!`,`bot`); 
                }, 1500);
                setTimeout(gameOver, 8000);
              }
  
  
  
     } else if (this.id === "strike") {
              console.log("strike")
              if (heroInventory.includes("sword")) {
                console.log("Perfect") 
                setTimeout( () => { showMessage(`You gently lower yourself from the summit using your rope and mange to touch down on the ground softly. You leave the mountain with blisters in your hands but a smile on your face.`,`bot`);   
              }, 1500);
              setTimeout(botIntersection2, 7000);
            }
  
              else if (heroInventory.includes("shield")) {
                console.log("Loose 1hp")
                setTimeout( () => {showMessage(`Feeling overconfident you try to climb the mountain with your bare hands. Halfway down you slip on a stream of lava and fall. 
                You praise your previous choises, surviving the fall thanks to you helmet. Lose one HP.`,`bot`);
                heroHp = (heroHp -1);
                console.log(heroHp); 
                setTimeout( () => {showMessage(`❤️‍🩹😭`,`user`)}, 1000);
              }, 1500);
              setTimeout(botIntersection2, 7000);
              }
              
              else {
                console.log("GAME OVER")
                setTimeout( () => { showMessage(`You lose you footing and tumble down the mountain side. Crushing every bone in your body. Your last thought is one of regret: you tried to climb a over a vulcaino. What where you thinking? You die. GAME OVER!`,`bot`); 
              }, 1500);
              setTimeout(gameOver, 10000);
            }
  
      } else {
            console.log("sneak")
            if (heroInventory.includes("invicibility-cloak")) {
              console.log("Perfect") 
              setTimeout( () => {
              showMessage(`Feeling a little dizzy after inflating the canoe with your breath, you enjoy your cruise down the creek. Exiting the creek you skip down the road, happy with your choise of path.`,`bot`);   
              }, 1500);
              setTimeout(botIntersection2, 7000);
            }
            else if (heroInventory.includes("moccasin")) {
              console.log("Loose 1hp")
              setTimeout( () => {
                showMessage(`You put on your life jacket and jump in to the creek. You stay afloat but repeatedly hit your knees agains the rocks in the creek. You emerge from the water bruised but breathing. Lose one HP.`,`bot`); 
                setTimeout( () => {showMessage(`❤️‍🩹😭`,`user`)}, 1000);
                heroHp = (heroHp -1);
                console.log(heroHp);
              }, 1500);
              setTimeout(botIntersection2, 7000);
            }
            else {
              console.log("GAME OVER")
              setTimeout( () => {
              showMessage(`You attemt to swim along the creek but its currents are to strong and you are pulled under water to a certain death. You drown. GAME OVER!`,`bot`); 
            }, 1500);
            setTimeout(gameOver, 8000);
         }
      } 
  }))
  }






/* <option value="gutar">Guitar 🎸</option>
<option value="meat">Piece of meat 🍗</option>
<option value="sword">Sword 🗡</option>
<option value="shield">Shield 🛡</option>
<option value="invicibility-cloak">Invicibility cloak 🧥</option>
<option value="moccain">Moccasin 🧦</option> */