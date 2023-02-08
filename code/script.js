//---------------------------------------Here is the conection to the HTML-------------------------------------------------------------------//

  // Variables that is linked to the DOM / HTML

const chat = document.getElementById("chat");
const inputArea = document.getElementById('input-area')
const form = document.getElementById("name-form");
const nameInput= document.getElementById("name-input");

//--------------------------------------------------User and bot chat-function starts----------------------------------------------------------//

  // This function will add a chatbubbels in the main frame depending on who the sender is. If checks if the sender is the same as "user"

const showMessage = (msg, sender) => {
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

//--------------------------------------------------User and bot chat-function ends------------------------------------------------------------//
//-----------------------------------------------------------Chating starts-------------------------------------------------------------------//

  // Next up we start using the showMessage function that we declared on row 15. 
  // geetUser function makes the bot automaticly ask the first question: "Hej!" "Vad heter du?"
  // Arguments going in to the "machine"/function is msg="Vad heter du?" and sender="bot".

const greetUser = () => {
      showMessage("Hej människa!", "bot");
      setTimeout(() => showMessage("Vad heter du?", "bot"), 1500);
};

setTimeout(greetUser, 2000);

  // USER: types in name with help from the handleNameInput conected to the id=name-input in the HTML
  // Now we will store the name as a value in a variable (nameInput.value) and can acces it with ${nameInput.value} in the messages

const handleNameInput = (event) => {
      event.preventDefault() // Prevents autosubmittning the form

  // BOT: Answers two bubbles with the stored username${nameInput.value} and ends with showing the Ja/Nej-buttons

const name = nameInput.value
      showMessage(name, "user")
      showMessage(`Hej ${nameInput.value}! Jag heter August Lemmel.`, "bot")
      setTimeout(() => showMessage("Har jag ditt förtroende?", "bot"), 1500);
      inputArea.innerHTML = 
      `<button id="jaButton" type="submit">Ja</button>
      <button id="nejButton" type="submit">Nej</button>`

  // IF the user presses the jaButton the following message will be print and the 3 personalizeButtons will be shown.

      document
      .getElementById("jaButton")
      .addEventListener("click", () => {
        showMessage("Ja", "user");
        showMessage("Tack! Jag vill tipsa dej om nått passande från vår shop.", "bot");
        setTimeout(() => showMessage("Vad tycker du värst om?", "bot"), 1000);
        personalizeButtons()
      })

  // IF the user presses the nejButton the following message will be shown and the chat will end. No more questions.

      document
      .getElementById("nejButton")
      .addEventListener("click", () => {
        showMessage("Nej", "user")
        showMessage('Synd.. Men du kolla in denna! Ha en fin dag!<br><p><iframe width="100%" height="80px" src="https://www.youtube.com/embed/OhO08XZASB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></a>', "bot")
        jaButton.remove();
        nejButton.remove(); 
      }) 

  // Here is the function and the connection to the 3 personalizing costumer-question alternatives.

const personalizeButtons = () => {      
      inputArea.innerHTML = 
      `<button id="baristas" type="submit">Baristas</button>
       <button id="snabbkaffe" type="submit">Snabbkaffe</button>
       <button id="ugglor" type="submit">Ugglor</button>`

  // FIRST personalizeButton is "Baristas" and will print out the following

      document
        .getElementById("baristas")
        .addEventListener("click", () => {
          showMessage("Baristas", "user")
          showMessage(`Fattar helt! Kolla in den här pannan <img src="https://cdn.shopify.com/s/files/1/0556/5690/6841/products/186885537-origpic-b912cf_750x.jpg?v=1664429478">`, "bot");
          setTimeout(() => showMessage('<a href="https://lemmelkaffe.com/en/collections/tillbehor/products/svaertan">Svärtan</a> heter den. Kan det va något för dej?', "bot"), 1000);
          lastYesOrNo()
        })

  // SECOND personalizeButton is "Snabbkaffe" and will print out the following

      document
        .getElementById("snabbkaffe")
        .addEventListener("click", () => {
          showMessage("Snabbkaffe", "user")
          showMessage(`Ja huvva! Kolla in denna! <br><p><img src="https://cdn.shopify.com/s/files/1/0556/5690/6841/products/HOST22AKKA_750x.jpg?v=1664298939">`, "bot")
          setTimeout(() => showMessage('Längre från snabbkaffe än <a href="https://lemmelkaffe.com/collections/kaffe/products/akka-eko-krav-400g">Akka Eko/Krav</a> är svårt att komma. Känns det rätt för dej?', "bot"), 2000);
          lastYesOrNo()
        })

  // THIRD personalizeButton is "Ugglor" and will print out the following

      document
        .getElementById("ugglor")
        .addEventListener("click", () => {
          showMessage("Ugglor", "user")
          showMessage(`Word! Värsta sortens!`, "bot")
          setTimeout(() => showMessage('Slipp se dom i dessa! <br><img src="https://cdn.shopify.com/s/files/1/0556/5690/6841/products/185533511-origpic-feb617_750x.jpg?v=1674466597"> ', 'bot'), 2000)
          setTimeout(() => showMessage('Bågarna heter <a href="https://lemmelkaffe.com/collections/tillbehor/products/lucifer">Lucifer</a>! Känns det bra?', 'bot'), 2000)
          lastYesOrNo()
        })
}
    
  // Here is the last Ja/Nej-button-alternatives for the user to klick.

const lastYesOrNo = () => {inputArea.innerHTML = 
        `<button id="jaButton" type="submit">Ja</button>
        <button id="nejButton" type="submit">Nej</button>`

  //IF the user clicks the jaButton the following message will be shown

      document
        .getElementById("jaButton")
        .addEventListener("click", () => {
          showMessage("Ja", "user");
          showMessage('Perfekt! Finns i shoppen. Ha en fin dag!', "bot");
          jaButton.remove();
          nejButton.remove();
        })

  //IF the user clicks the noButton the following message will be shown

      document
        .getElementById("nejButton")
        .addEventListener("click", () => {
          showMessage("Nej", "user")
          showMessage(`Trisst, men här kommer nått som gör alla glada! <br><p><iframe width="100%" height="80px" src="https://www.youtube.com/embed/OhO08XZASB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></a>`, "bot")
          jaButton.remove();
          nejButton.remove();
        }) 
}
}

//-----------------------------------------------------------Chat Ends Here-------------------------------------------------------------------//
//-----------------------------------------------------------Eventlisteners-------------------------------------------------------------------//

  // Set up your eventlisteners here

form.addEventListener("submit", handleNameInput);

// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)

