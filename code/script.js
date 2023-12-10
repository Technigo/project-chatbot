// Global object to store user preferences
const userPreferences = {
  coffee: '',
  strength:'',
  extras:'',
};

//Function to show messages
const showMessage = (message, sender, options) => {
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
        ${options ? options.map(option => `<button class="option-btn" onclick="${option.handler}">${option.label}</button>`).join('') : ''}
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
  } else if (preference === 'hot' && strength === 'Medium' && extras === 'No thanks') {
    recommendation = 'A classic black coffee might be your choice!';
  } else if (preference === 'cold' && strength === 'Wake me up' && extras === 'Milk') {
    recommendation = 'Try a strong iced latte for an energy boost!';
  } else if (preference === 'hot' && strength === 'Caffeinefree' && extras === 'Sweetness') {
    recommendation = 'Consider a decaffeinated sweetened coffee!';
  } else if (preference === 'cold' && strength === 'Medium' && extras === 'No thanks') {
    recommendation = 'How about a refreshing black iced coffee?';
  } else if (preference === 'hot' && strength === 'Wake me up' && extras === 'Milk') {
    recommendation = 'A creamy and strong hot latte could be perfect!';
  } else if (preference === 'cold' && strength === 'Caffeinefree' && extras === 'Sweetness') {
    recommendation = 'Explore a decaffeinated sweetened iced coffee!';
  } else if (preference === 'hot' && strength === 'Medium' && extras === 'Milk') {
    recommendation = 'A classic hot latte with milk might suit your taste!';
  } else if (preference === 'cold' && strength === 'Wake me up' && extras === 'Sweetness') {
    recommendation = 'How about a sweetened iced coffee for a refreshing kick?';
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
  const options = [
    { label: 'Hot', handler: 'handleCoffeePreference("hot")' },
    { label: 'Cold', handler: 'handleCoffeePreference("cold")' }
  ];
  showMessage('Do you prefer your coffee hot or cold?', 'bot', options);
};

//Function to ask the third question
const showThirdQuestion = () => {
  const options = [
    { label: 'Wake me up', handler: 'handleCoffeeStrength("wake me up")' },
    { label: 'Medium', handler: 'handleCoffeeStrength("medium")' },
    { label: 'Caffeinefree', handler: 'handleCoffeeStrength("caffeinefree")' }
  ];
  showMessage('How many "horsepowers" do you need in your coffee?', 'bot');
};

//Function to ask the fourth question
const showFourthQuestion = () => {
  const options = [
    { label: 'Sweet', handler: 'handleCoffeeExtras("sweet")' },
    { label: 'Milk', handler: 'handleCoffeeExtras("milk")' },
    { label: 'No thanks', handler: 'handleCoffeeExtras("no thanks")' }
  ];
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