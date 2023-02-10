//---------------------------------------Here is the conection to the HTML / DOM-------------------------------------------------------------------//

  // Variables:

const chat = document.getElementById("chat");
const inputArea = document.getElementById("input-area");
const form = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");

//--------------------------------------------------User and bot chat-function is created----------------------------------------------------------//

  // This function adds chatbubbels in the main frame depending on who the sender is. It checks IF the sender === "user" ELSE IF it is the "bot"

const showMessage = (msg, sender) => { // Here we are creating the chatbubbles. From now it is refered as only -showMessage("msg, sender)-
if (sender === "user") {chat.innerHTML += 
  `<section class="user-msg">
      <div class="bubble user-bubble">
        <p>${msg}</p>
      </div>
    <image src="assets/userbot-1.png" alt="user bot" />
  </section>`
} 

  // else if checks if -the sender is the same as "bot"- and if it is then inserts the following html in the chat with a message

else if (sender === "bot") {chat.innerHTML += 
  `<section class="bot-msg">
    <image src="./assets/lemmelbot-1.png" alt="chat bot" /> 
      <div class="bubble bot-bubble">
        <p>${msg}</p>
      </div>
  </section>`
}

  // This code makes the mainchat scroll when there are to many messages

chat.scrollTop = chat.scrollHeight;
};
//--------------------------------------------------Chatsounds------------------------------------------------------------//

  // Chatsoundfunctions created

const bottrack = new Audio('./assets/chatsoundbot.mp3');
const playsound = () => {
      bottrack.play();
};

const usertrack = new Audio('./assets/chatsounduser.mp3');
const makesound = () => {
      usertrack.play();
};

//--------------------------------------------------User and bot chat-function ends------------------------------------------------------------//
//----------------------------------------------------Chating Conversation starts--------------------------------------------------------------//

  // Next up we start using the showMessage function that we declared on row 14. 
  // geetUser function makes the bot automaticly ask the first question: "Hej!" "Vad heter du?"
  // Arguments going in to the "machine"/function is msg="Vad heter du?" and sender="bot".
  // But first I declare the bottrack and the usertrack that start on all messages

  //-----FIRST QUESTION BOT

const greetUser = () => { // Automatic greeting
      showMessage("Hej människa!", "bot"); // First bot-message
      setTimeout(() => showMessage("Vad heter du?", "bot"), 1500); // Opens the second bot-message 1,5 sec after the first.
      bottrack.play(); // This starts the bottrack(sound)
};

setTimeout(greetUser, 2000); // Makes the first message from the bot appear in 2 sec after site is loaded

  // USER: types in name wich gets stored handleNameInput conected to the id=name-input in the HTML and the -form.addEventListener("submit", handleNameInput)-

  //-----FIRST ANSWER USER

  // Now it will store the name as a value in a variable (nameInput.value) and you can acces it with ${nameInput.value} in the messages


const handleNameInput = (event) => { // This function stores the event (user writing its name) as a value
      event.preventDefault() // Prevents autosubmittning the form

  //-----SECOND QUESTION BOT

  // BOT: Answers two bubbles with the stored username${nameInput.value} and ends with showing the Ja/Nej-buttons


const name = nameInput.value // Here we take the nameInput.value and delare it as the same as just "name"
      showMessage(name, "user") // "User and bot chat-function" created in the beginning of the document
      usertrack.play(); // This starts the usertrack(sound)
      showMessage(`Hej ${nameInput.value}! Jag heter August Lemmel.`, "bot") // "User and bot chat-function" created in the beginning of the document
      setTimeout(() => bottrack.play(), 1000); // This starts the bottrack(sound) and delays it with 500 millisec
      setTimeout(() => showMessage("Har jag ditt förtroende?", "bot"), 1500);
      nameInput.value = '' // Cleares the nam input form. Its placed here after the value is used otherwise it clears it and it cant be used
      inputArea.innerHTML = // Presents the first Ja/Nej buttons
      `<button id="jaButton" type="submit">Ja</button>
      <button id="nejButton" type="submit">Nej</button>`

  // IF the user presses the jaButton the following message will be print and the 3 personalizeButtons will be shown.

  //-----SECOND ANSWER USER "JA"

      document
        .getElementById("jaButton")
        .addEventListener("click", () => { // The following happens when the button is clicked
          showMessage("Ja", "user"); // "User and bot chat-function" created in the beginning of the document
          usertrack.play(); // This starts the usertrack(sound)
          setTimeout(() => bottrack.play(), 1000); // This starts the bottrack(sound) and delays it with 500 millisec
          showMessage("Tack! Jag vill tipsa dej om nått passande från vår shop.", "bot");
          setTimeout(() => showMessage("Vad tycker du värst om?", "bot"), 1000);
          personalizeButtons() // Function starts the personalizedButtons-alternatives 
        })

  // IF the user presses the nejButton the following message will be shown and the chat will end. No more questions.

  //-----SECOND ANSWER USER "NEJ"

      document
        .getElementById("nejButton")
        .addEventListener("click", () => { // The following happens when the button is clicked
          showMessage("Nej", "user") // "User and bot chat-function" created in the beginning of the document
          usertrack.play(); // This starts the usertrack(sound)
          setTimeout(() => bottrack.play(), 500); // This starts the bottrack(sound) and delays it with 500 millisec
          showMessage('Synd.. Men du kolla in denna! Ha en fin dag!<br><p><iframe width="100%" height="80px" src="https://www.youtube.com/embed/OhO08XZASB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></a>', "bot")
          jaButton.remove(); // Removes Ja-button
          nejButton.remove(); // Removes Nej-button
        }) 
};

  //-----THIRD QUESTION BOT

  // Here is the function created and the connection to the 3 personalizing costumer-question alternatives.

const personalizeButtons = () => {  
      inputArea.innerHTML = 
      `<button id="baristas" type="submit">Baristas</button>
       <button id="snabbkaffe" type="submit">Snabbkaffe</button>
       <button id="ugglor" type="submit">Ugglor</button>`

  //-----THIRD ANSWER USER 1 "Baristas"

      document
        .getElementById("baristas") // 1st button
        .addEventListener("click", () => { // The following happens when the button is clicked
          showMessage("Baristas", "user") // "User and bot chat-function" created in the beginning of the document
          usertrack.play(); // This starts the usertrack(sound)
          setTimeout(() => bottrack.play(), 1000); // This starts the bottrack(sound) and delays it with 1000 millisec
          showMessage(`Fattar helt! Kolla in den här pannan <br><img src="https://cdn.shopify.com/s/files/1/0556/5690/6841/products/186885537-origpic-b912cf_750x.jpg?v=1664429478">`, "bot");
          setTimeout(() => showMessage('<a href="https://lemmelkaffe.com/en/collections/tillbehor/products/svaertan">Svärtan</a> heter den. Kan det va något för dej?', "bot"), 1000);
          lastYesOrNo() // Starts the last Ja/nej-answer-button 
        })

  //-----THIRD ANSWER USER 2"Snabbkaffe"

      document
        .getElementById("snabbkaffe") // 2th button
        .addEventListener("click", () => { // The following happens when the button is clicked
          showMessage("Snabbkaffe", "user") // "User and bot chat-function" created in the beginning of the document
          usertrack.play(); // This starts the usertrack(sound)
          setTimeout(() => bottrack.play(), 1000); // This starts the bottrack(sound) and delays it with 1000 millisec
          showMessage(`Ja huvva! Kolla in denna! <br><p><img src="https://cdn.shopify.com/s/files/1/0556/5690/6841/products/HOST22AKKA_750x.jpg?v=1664298939">`, "bot")
          setTimeout(() => showMessage('Längre från snabbkaffe än <a href="https://lemmelkaffe.com/collections/kaffe/products/akka-eko-krav-400g">Akka Eko/Krav</a> är svårt att komma. Känns det rätt för dej?', "bot"), 2000);
          lastYesOrNo() // Starts the last Ja/nej-answer-button 
        })

  //-----THIRD ANSWER USER "Snabbkaffe"

      document
        .getElementById("ugglor") // 3rd button
        .addEventListener("click", () => { // The following happens when the button is clicked
          usertrack.play(); // This starts the usertrack(sound)
          setTimeout(() => bottrack.play(), 500); // This starts the bottrack(sound) and delays it with 500 millisec
          showMessage("Ugglor", "user") // The user message Ugglor and the bot replyes with an message that ends the conversation
          showMessage(`Word! Värsta sortens!`, "bot")
          setTimeout(() => showMessage('Slipp se dom i dessa! <br><img src="https://cdn.shopify.com/s/files/1/0556/5690/6841/products/185533511-origpic-feb617_750x.jpg?v=1674466597"> ', 'bot'), 2000)
          setTimeout(() => showMessage('Bågarna heter <a href="https://lemmelkaffe.com/collections/tillbehor/products/lucifer">Lucifer</a>! Känns det bra?', 'bot'), 2000)
          lastYesOrNo() // Starts the last Ja/nej-answer-button 
        })
};
    
  // Here is the last Ja/Nej-button-alternatives for the user to klick.

    //-----FOURTH QUESTION BOT

const lastYesOrNo = () => {
      inputArea.innerHTML = 
        `<button id="jaButton" type="submit">Ja</button>
        <button id="nejButton" type="submit">Nej</button>`

  //-----FOURTH ANSWER USER JA

      document
        .getElementById("jaButton")
        .addEventListener("click", () => { // The following happens when the button is clicked
          usertrack.play(); // This starts the usertrack(sound)
          setTimeout(() => bottrack.play(), 1000); // This starts the bottrack(sound) and delays it with 1000 millisec
          showMessage("Ja", "user"); // The user message Ja and the bot replyes with an message that ends the conversation
          showMessage('Perfekt! Finns i shoppen. Ha en fin dag!', "bot");
          jaButton.remove(); // Removes Ja-button
          nejButton.remove(); // Removes Nej-button
        })

  //-----FOURTH ANSWER USER NEJ

      document
        .getElementById("nejButton")
        .addEventListener("click", () => { // The following happens when the button is clicked
          usertrack.play(); // This starts the usertrack(sound)
          setTimeout(() => bottrack.play(), 500); // This starts the bottrack(sound) and delays it with 500 millisec
          showMessage("Nej", "user") // The user message Nej and the bot replyes with the video
          showMessage(`Trisst, men här kommer nått som gör alla glada! <br><p><iframe width="100%" height="80px" src="https://www.youtube.com/embed/OhO08XZASB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></a>`, "bot")
          jaButton.remove(); // Removes Ja-button
          nejButton.remove(); // Removes Nej-button
        }) 
};

//-----------------------------------------------------------Chat Conversation Ends Here-------------------------------------------------------------------//
//-----------------------------------------------------------------Eventlisteners--------------------------------------------------------------------------//

  // Here we tell the eventlistener where to conect in the HTML and in what ways the user can interact. Submitt (SkickaButton and name-input).

form.addEventListener("submit", handleNameInput); 
