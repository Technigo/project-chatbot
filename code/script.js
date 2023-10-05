const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const nameForm = document.getElementById('name-form')
const nameInput = document.getElementById('name-input')
const sendBtn = document.getElementById(`submit`)

const showMessage = (message, sender) => {  
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
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
  chat.scrollTop = chat.scrollHeight
}

const greetUser = () => {
  showMessage("Hello and welcome to Linneas Restaurant, What's your name?", 'bot')  
}


const handleNameInput = event => {
  event.preventDefault();
  userName = nameInput.value;
  nameInput.value = "";
  
  if (userName.trim() === "") {
    showMessage("That's not a valid answer. Please enter your name.", 'bot'); 
       
  } else {
    showMessage(`${userName}`, `user`);
    setTimeout(reply, 1000);
  }
}

nameForm.addEventListener (`submit`, handleNameInput);

function reply() {
  showMessage(`Hi ${userName}, what can I help you with today?`, 'bot');
  document.getElementById('input-div').style.display = 'none';
  document.getElementById('button-div').style.display = 'block';
}

document.getElementById('button1').addEventListener('click', () => {
  showMessage('Please choose a food option', 'bot');
  document.getElementById('button-div').style.display = 'none';
  document.getElementById('dropdown-div').style.display = 'block';
});

document.getElementById('submit-food').addEventListener('click', () => {
  const selectedOption = document.getElementById('food-options').value;
  const thankYouMessage = `Thank you for ordering from us ${userName}! You are welcome to collect your food in 30 minutes. If you have any questions, please contact customer service.`;
  showMessage(thankYouMessage, 'bot');
  document.getElementById('thank-you-message').style.display = 'block';
  document.getElementById('button1').style.display = 'none';
  document.getElementById('dropdown-div').style.display = 'none';
  document.getElementById('food-options').value = ''; 
  document.getElementById('button-div').style.display = 'block';
});

document.getElementById('button2').addEventListener('click', () => {
  showMessage('Our customer service is open between 13:55 and 14:00 on thursdays, please get back to us within opening hours', 'bot');
  document.getElementById('button2').style.display = 'none';
});
  
setTimeout(greetUser, 1000)
