const chat = document.getElementById('chat');


const greetUser = () => {
//   console.log("welcome stranger");
  showMessage("Hello there, What's your name?", "bot");
  showMessage("stenli", "user");

};

const showMessage = (msg, sender) => {
    console.log(msg);
    console.log(sender);

    if (sender == "user") {
        chat.innerHTML += 
        `<section class="user-msg ">
        <div class="bubble user-bubble">
            <p>${msg}</p>
        </div>
        <img src="./assets/user.png" alt="user bot">
        </section>`;
    } else if (sender == "bot") {
            chat.innerHTML += 
            `<section class="bot-msg ">
            <img src="./assets/bot.png" alt="chat bot">
            <div class="bubble bot-bubble">
                <p>${msg}</p>
            </div>
            </section>`
    }
};

greetUser();




