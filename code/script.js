// Global object to store user preferences
const userPreferences = {
  coffee: '',
  strength:'',
  extras:'',
};

//Function to show messages
const showMessage = (message, sender, options) => {
  const chat = document.getElementById('chat');

  if (sender === 'user') {
    chat.innerHTML += `
    <section class="user-msg">
      <div class="bubble user-bubble">
        <p>${message}</p>
      </div>
    </section>
  `;
  } else if (sender === 'bot') {
    const botMsg = document.createElement('section');
    botMsg.classList.add('bot-msg');

    botMsg.innerHTML += `
    <img src="assets/bot.png" alt="Bot" />
    <div class="bubble bot-bubble">
      <p>${message}</p>
      <div id="options-container">
        ${options
          ? options.map(
              (option, index) =>
                `<button class="option-btn" onclick="handleOptionClick('${option.value}')">${option.label}</button>`
            )
          : ''}
      </div>
    </div>
  `;

    chat.appendChild(botMsg);
  }
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
const startCoffeeChatbot = () => {
  showMessage('Do you want help to order a coffee?', 'bot', [
   { label: 'Yes', value: 'yes' },
   { label: 'No', value: 'no' }
  ]);
};

// Function to handle button clicks
const handleOptionClick = (value) => {
  showMessage(value, 'user');

// Handle the user's answer directly
handleUserAnswer(value);
};

//Function to handle user answers 
const handleUserAnswer = (userAnswer) => {
  if (userAnswer === 'yes') {        
    showMessage('Great! Lets get started.', 'bot');
     //Ask second question
     setTimeout(() => showSecondQuestion(), 1000);

  } else if (userAnswer === 'no') {
      showMessage('If you change your mind, you know where to find me', 'bot');
  }
 };


//Function to ask the second question
const showSecondQuestion = () => {
  showMessage('Do you prefer your coffee hot or cold?', 'bot', [
    { label: 'Hot', value: 'hot' },
    { label: 'Cold', value: 'cold' }
  ]);
};

//Function to handle the second question answer
const handleSecondQuestionAnswer = (answer) => {
  showMessage(answer, 'user');
  // Store the answer in userPreferences
  userPreferences.coffee = answer.toLowerCase();

  if (userPreferences.coffee === 'hot' || userPreferences.coffee === 'cold') {
    setTimeout(() => showThirdQuestion(), 1000);
  }
};

//Function to ask the third question
const showThirdQuestion = () => {
  showMessage('How many "horsepowers" do you need in your coffee?', 'bot', [
    { label: 'Wake me up', value: 'wake me up' },
    { label: 'Medium', value: 'medium' },
    { label: 'Caffeinefree', value: 'caffeinefree' }
  ]);
};

//Function to handle the third question answer
const handleThirdQuestionAnswer = (answer) => {
  showMessage(answer, 'user');
  userPreferences.strength = answer.toLowerCase();

  if (
    userPreferences.strength === 'wake me up' ||
    userPreferences.strength === 'medium' ||
    userPreferences.strength === 'caffeinefree'
  ) {
    setTimeout(() => showFourthQuestion(), 1000);
  }
};

//Function to ask the fourth question
const showFourthQuestion = () => {
  showMessage('Add some extra?', 'bot', [
    { label: 'Sweet', value: 'sweet' },
    { label: 'Milk', value: 'milk' },
    { label: 'No thanks', value: 'no thanks' }
  ]);
};

// Function to handle the fourth question answer
const handleFourthQuestionAnswer = (answer) => {
  showMessage(answer, 'user');
  // Store the answer in userPreferences
  userPreferences.extras = answer;

  // Provide recommendations based on user's answers
  provideCoffeeRecommendation(userPreferences.coffee, userPreferences.strength, userPreferences.extras);
};

//Event listener for user interaction
document.getElementById('coffee-form').addEventListener('submit', (event) => {
  event.preventDefault();
});


//Call the initial function when the webpage loads
document.addEventListener('DOMContentLoaded', () => {
  startCoffeeChatbot();
});