// Global object to store user preferences
const userPreferences = {
  coffee: '',
  strength:'',
  extras:'',
};

//Function to show messages
const showMessage = (message, sender) => {
  const chat = document.getElementById('chat');
  const userInput = document.getElementById('user-input');

  if (sender === 'user') {
    chat.innerHTML += `
    <section class="user-msg">
      <div class="bubble user-bubble">
        <p>${message}</p>
      </div>
    </section>
  `;
  } else if (sender === 'bot') {
    chat.innerHTML += `
    <section class="bot-msg">
      <img src="assets/bot.png" alt="Bot" />
      <div class="bubble bot-bubble">
        <p>${message}</p>
      </div>
    </section>
  `;
}

// Clear user input after showing the message
userInput.value = '';
};

//Function to handle user's coffee preference
const handleCoffeePreference = (preference) => {
  showMessage(preference, 'user');
  userPreferences.coffee = preference;
  setTimeout(() => showThirdQuestion(), 1000);
};

//Function to handle user's coffee strength preference
const handleCoffeeStrength = (strength) => {
  showMessage(strength, 'user');
  userPreferences.strength = strength;
  setTimeout(() => showFourthQuestion(), 1000);
};

//Function to handle user's coffee extras preference
const handleCoffeeExtras = (extras) =>  {
  showMessage(extras, 'user');
  userPreferences.extras = extras;
  //Provide recommendations based on user's answer
  provideCoffeeRecommendation(userPreferences.coffee, userPreferences.strength, userPreferences.extras);
};

//Function to provide recommendation
const provideCoffeeRecommendation = (preference, strength, extras) => {
  let recommendation = '';

  if (preference === 'hot' && strength === 'Wake me up' && extras === 'Sweetness') {
    recommendation = 'You might enjoy a sweetened espresso!';
  } else if (preference === 'cold' && strength === 'Medium' && extras === 'Milk') {
    recommendation = 'How about trying an iced latte?';
  } else {
    recommendation = 'We have many options! Feel free to explore our menu.';
}

  showMessage(recommendation, 'bot');

};

//Function to ask first question
const startCoffeeChatbot () => {
  showMessage('Do you want help to order a coffee?', 'bot');
};

//Function to ask the second question
const showSecondQuestion = () => {
  showMessage('Do you prefer your coffee hot or cold?', 'bot');
};

//Function to ask the third question
const showThirdQuestion = () => {
  showMessage('How many "horsepowers" do you need in your coffee?', 'bot');
};

//Function to ask the fourth question
const showFourthQuestion = () => {
  showMessage('Add some extra?', 'bot');
};

//Function to handle user answers 
const handleUserAnswer = (event) => {
  event.preventDefault();
  const userAnswer = userInput.value.trim().toLowerCase();
  showMessage(userAnswer, 'user');

  setTimeout(() => {
    if (userAnswer === 'yes') {
      showMessage('Great! Let\'s get started.', 'bot');
    //Ask second question
    setTimeout(() => showSecondQuestion(), 1000);
    //End the chatbot
    } else {
      showMessage(''I\'m sorry, I didn\'t understand your response. Please answer with "yes" or "no".', 'bot');
      // Ask the first question again
      setTimeout(() => startCoffeeChatbot(), 1000);
    }
  }, 500)
};

//Call the initial function when the webpage loads
document.addEventListener('DOMContentLoaded', () => {
  startCoffeeChatbot();
});