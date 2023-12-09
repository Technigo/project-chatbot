//Function to first question
const startCoffeeChatbot () => {
  showMessage('Do you want help to order a coffee? (Yes/No)', 'bot');
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