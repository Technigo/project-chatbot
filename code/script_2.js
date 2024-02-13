const chat = document.getElementById("chat"); 

// when website is loaded, chatbot asks for first question

const greetUser = () => {
  console.log("Welcome to the bot!");
    showMessage("Hello You", "bot");
  //show message. the message should it be from the bot 

};

const showMessage = (msg) => {
    chat.innerHTML += `<section class="user-msg">
      <div class="bubble user-bubble">
      <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="user bot" />  
      </section>`;
};

greetUser();

// a function that takes care of displaying the message
