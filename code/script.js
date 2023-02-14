const chat = document.getElementById("chat");
const sendBtn = document.getElementById("send");
const inputName = document.getElementById("name-input");
const input = document.getElementById("container");

// when website is loaded, chatbot asks the 1st quest.
const greetUser = () => {
     showMessage('Hello Cat-lover, Im Kenta Kofot! What´s your name?',
"bot");
// show message, the message shoule be from the bot.
};

// Initial button click, here I should get the name entered
sendBtn.addEventListener('click', (event) => {
   event.preventDefault()

   // Store the value in a variable so I can access it after we
   // clear it from the input
   let userName = inputName.value
   showMessage(`${userName}`, 'user');

   // Clears the input field
   inputName.value = ''
   setTimeout(() => newbot(userName), 1000)
   //Here I call the function where I present the dishes to choose from.

})

const newbot = (userName) => {
  showMessage(`Hey,  ${userName} !
   How can I help you? `, 'bot');
   input.innerHTML = `
   <button id="Ask1">Milk please</button>
   <button id="Ask2">something else</button>
   `
  ask();

   // show message, the message shoule be from the bot.
};


const ask = () => {

   const Ask1 = document.getElementById('Ask1');
const Ask2 = document.getElementById('Ask2');
  Ask1Answer = document.getElementById("Ask1").innerText;
  Ask2Answer = document.getElementById("Ask2").innerText;

   Ask1.addEventListener('click', () => {
    showMessage (`${Ask1Answer}`, "user");

    if (`${Ask1Answer}`===`Milk please`) {
    showMessage(`Milk it is! What kind of milk?`, "bot");
       answer();
    } else if (`${Ask1Answer}`===`Fat Milk`)  {
           showMessage(`Your fat Cat will enjoy it!`, "bot");
     answer2();
    }  
    else if (`${Ask1Answer}`===`More options!!! My cat likes a lot of stuff!`)  {
           showMessage(`We don´t have that. Sorry pal. I hope you and your cat burns in hell, don´t come back!`, "bot");
           showMessage(`SOUNDS GREAT!!! `, "user");
           showMessage(`GOOD BYE SIR! `, "user");
           setTimeout(function(){
             window.location.reload(1);
          }, 9000);
}
    else if (`${Ask2Answer}`===`Non Fat Milk`)  {
           showMessage(`Your Fat Cat Will Enjoy`, "bot");
     answer2();  
    }
     else if (`${Ask1Answer}`===`Screw You`)  {
      showMessage(`Cat Diabetes is a thing you know`, "bot");
      setTimeout(function(){
        window.location.reload(1);
     }, 5000);
}

   });
  Ask2.addEventListener('click', () => {
    showMessage (`${Ask2Answer}`, "user");

    if (`${Ask2Answer}`===`something else`) {
    showMessage(`Like what?`, "bot");
       answer3();
    } else if (`${Ask2Answer}`===`My cat is on a diet`)  {
           showMessage(`Your cat should do some catxcercise`, "bot");
     answer4(); 
    }
     else if (`${Ask2Answer}`===`More cats`)  {
      showMessage(`Sounds good! Bye `, "bot");
      setTimeout(function(){
        window.location.reload(1);
     }, 5000);
}
    
   });

  const answer = () => {
  Ask1.innerHTML = 'Fat Milk';
   Ask1Answer = "Fat Milk";
    Ask2.innerHTML = 'Non Fat Milk';
   Ask2Answer = "My cat is on a diet";
  }
   const answer2 = () => {
  Ask1.innerHTML = 'Go To Hell';
   Ask1Answer = "Screw You";
    Ask2.innerHTML = 'Thanks a lot';
   /*Ask2Answer = "The Milk will be yummy";*/
  }
    const answer3 = () => {
  Ask1.innerHTML = 'Better service';
   Ask1Answer = "More options!!! My cat likes a lot of stuff!";
    Ask2.innerHTML = 'More cats';
   Ask2Answer = "More cats";
  }
    const answer4 = () => {
  Ask1.innerHTML = 'Go To Hell';
   Ask1Answer = "Screw You";
    Ask2.innerHTML = 'Thanks a lot';
   Ask2Answer = "Heeey sir!!!";
   setTimeout(function(){
    window.location.reload(1);
 }, 5000);
  }
}



const showMessage = (msg, sender) => {
     console.log("MESSAGE IS:", msg);
     console.log("SENDER IS:", sender);


     if (sender === 'user') {
         chat.innerHTML += `<section class="user-msg">
         <div class="bubble user-bubble">
           <p>${msg}</p>
         </div>
         <img src="./asset/cat.png" alt="user bot" />
       </section>`;

     } else if (sender === 'bot') {
         chat.innerHTML += `<section class="bot-msg">
         <img src="./asset/support.png" alt="sender bot" />
         <div class="bubble bot-bubble">
         <p>${msg}</p>
          </div>
          </section>`;
     }
       chat.scrollTop = chat.scrollHeight;

};

setTimeout(greetUser, 2000);

/*setTimeout(Ask1, 2000);*/

// function that takes care of displaying the message
