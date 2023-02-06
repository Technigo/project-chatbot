const chat = document.getElementById("chat");

// When the page is loaded Lemmings ask the first question
const greetUser = () => {
  showMessage("Hej människa!", "bot");
};

const showMessage = (msg, sender) => {

  if (sender === "user") {
chat.innerHTML += `<section class="user-msg">
<div class="bubble user-bubble">
  <p>${msg}</p>
</div>
<image src="assets/user.png" alt="user bot" />
</section>`;
  } else if (sender === "bot") {
chat.innerHTML += `<section class="bot-msg">
    <image src="./assets/lemmelbot-1.png" alt="chat bot" />
          <div class="bubble bot-bubble">
            <p>${msg}</p>
          </div>
        </section>`
  }
};

setTimeout(greetUser, 3000);

