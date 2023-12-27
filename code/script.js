// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById("chat");

// Functions goes here 👇

// A function to greet the user
const greetUser = () => {
  chat.innerHTML += `
    <section class="bot-msg">
      <img src="assets/bot.png" alt="Bot" />
      <div class="bubble bot-bubble">
        <p>Hello there, what's your name?</p>
      </div>
    </section>
  `;
};

// Eventlisteners goes here 👇

// Here we invoke the greetUser function so that when
// the website is loaded, the chatbot asks the first question
greetUser();
