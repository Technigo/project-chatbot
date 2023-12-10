// Global object to store user preferences
const userPreferences = {
  coffee: '',
  strength:'',
  extras:'',
};

//Function to first question
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