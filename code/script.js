
// Variables that point to selected DOM elements 
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const ageInput = document.getElementById('name-input');
const ageBtn1 = document.getElementById('ageBtn1');
const ageBtn2 = document.getElementById('ageBtn2');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const dropDown = document.getElementById('dropDown');
const notGoodBtn = document.getElementById('notGoodBtn');
const okayBtn = document.getElementById('okayBtn');
const goodBtn = document.getElementById('goodBtn');
const startBtn = document.getElementById('startBtn');
var pop;
pop = new Audio('pop.mp3');

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  pop.play();
  if (sender === 'user') {
    pop.play();
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === 'bot') {
    pop.play();
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }

  chat.scrollTop = chat.scrollHeight;
};


// When button is clicked, chatbot asks first question.
startBtn.onclick = (greetUser, event) => {

  // showMessage function is being called, greets the user.
  showMessage(`Hello there, welcome to the evaluation sheet! 
    We are really happy that you take your time to answer some questions
    in order for us to improve our service.`, 'bot');

  startBtn.style.display = 'none';
  setTimeout(() => {
    showMessage(` First of all, what's your name?`, 'bot');
  }, 4000);

};

// Function storing the name of the user.
const handleNameInput = (event) => {
  event.preventDefault();

  const name = nameInput.value;

  //if answer is nothing
  if (name === '') {
    alert('Please enter your name!');
    return; // Don't proceed further if the name is empty

  }//if answer is non alphabetical
  const alphabeticPattern = /^[A-Za-z]+$/;
  if (!alphabeticPattern.test(name)) {
    alert('Please enter a valid name with alphabetic characters only!');
    return; // Don't proceed further if the name contains numbers or special characters
  }

  showMessage(`${name}`, 'user');



  // displaying the name of the user
  setTimeout(() => {
    showMessage(`${name}, we want to know what you think about our products!`, 'bot');
    nameInput.value = "";
  }, 1000);
  // showMessage being called, asking for age, displaying ageBtn as a block elements.
  setTimeout(() => {
    showMessage(`But first, how old are you ${name} ?`, 'bot');
    ageBtn1.style.display = 'block';
    ageBtn2.style.display = 'block';
    inputWrapper.style.display = 'none';
  }, 3000);

  // hides buttons after clicking it
  ageBtn1.onclick = (event) => {
    handleageBtn(event, name, 'under 18'); //parameter string under 18 passed as an argument to ageGroup
    ageBtn1.style.display = 'none';
    ageBtn2.style.display = 'none';
    inputWrapper.style.display = 'block';
  };
  ageBtn2.onclick = (event) => {
    handleageBtn(event, name, 'over 18');//paramter string over 18 passed as an argument to ageGroup
    inputWrapper.style.display = 'block';

  };

  // Functions answer. Let ageGroup parameter take on over/under 18 value. Calling showMessage function
  const handleageBtn = (event, name, ageGroup) => {
    event.preventDefault();
    showMessage(`I'm ${ageGroup}!`, 'user');
    ageBtn1.style.display = 'none';
    ageBtn2.style.display = 'none';
    inputWrapper.style.display = 'none';

    setTimeout(() => {
      showMessage(`So ${name}, you are ${ageGroup}, is this correct?`, 'bot');
      yesBtn.style.display = 'block';
      noBtn.style.display = 'block';
      inputWrapper.style.display = 'none';
      yesBtn.onclick = () => handleResponse('yes', name);
      noBtn.onclick = () => handleResponse('no', name);
    }, 1000);
  };

  // function confirm age, if not confimed display unvalid option
  const handleResponse = (response, name) => {
    showMessage(`${response}!`, 'user');
    if (response === `yes`) {
      showMessage(`Amazing!`, 'bot');
    } else {
      showMessage(`You need to think about your age. This page will be automatically reloaded.`, 'bot');
      yesBtn.style.display = 'none';
      noBtn.style.display = 'none';

      //reload page
      setTimeout(() => {
        location.reload();
      }, 2995);
    }

    // dropdown menu
    setTimeout(() => {
      showMessage(`So, ${name} which medicine did you order from us? `, 'bot');
      dropDown.style.display = 'block';
      inputWrapper.style.display = 'none';
      yesBtn.style.display = 'none';
      noBtn.style.display = 'none';
    }, 3300);
  };

  // Event listener dropDown menu
  dropDown.addEventListener('change', (event) => {
    const selectedOption = dropDown.options[dropDown.selectedIndex].text; //implement the index of dropdown, and provide the selectedOption with text content. adds the text from the selected option
    showMessage(`${selectedOption}`, 'user');
    //calling showMessage function, hiding btn
    setTimeout(() => {
      showMessage(`You ordered ${selectedOption}`, 'bot');
      dropDown.style.display = 'block';
      inputWrapper.style.display = 'none';
      yesBtn.style.display = 'none';
      noBtn.style.display = 'none';

      //Rate purchase
      setTimeout(() => {
        showMessage(`How would you rate your purchase?`, 'bot');
        dropDown.style.display = 'none';
        inputWrapper.style.display = 'none';
        notGoodBtn.style.display = 'block';
        okayBtn.style.display = 'block';
        goodBtn.style.display = 'block';

        notGoodBtn.onclick = () => handleReview('Not good', name);
        okayBtn.onclick = () => handleReview('Okay', name);
        goodBtn.onclick = () => handleReview('Good', name);
      }, 2000);
    }, 2000);
  });

  //Rate purchase answer, calling review function when clicking the button 
  const handleReview = (review, name) => {
    showMessage(`${review}`, 'user');

    setTimeout(() => {
      if (review === 'Not good') {
        showMessage(`${name}, this is not good!
            We will evaluate the product.
            Thank you for sharing your opinion with us.`, 'bot');
        pop.play();
        notGoodBtn.style.display = 'none';
        okayBtn.style.display = 'none';
        goodBtn.style.display = 'none';

        //Reload the page after 5s
        setTimeout(() => {
          location.reload();
        }, 5000);

      } else if (review === 'Okay') {
        showMessage(`${name}, okay is not good enouth!
            We will evaluate the product.
            Thank you for sharing your opinion with us.`, 'bot');
        pop.play();
        notGoodBtn.style.display = 'none';
        okayBtn.style.display = 'none';
        goodBtn.style.display = 'none';

        //Reload the page after 5s
        setTimeout(() => {
          location.reload();
        }, 5000);

      } else if (review === 'Good') {
        showMessage(`${name}, we are glad you are happy with your order!
            Hope to see you again soon!`, 'bot');
        notGoodBtn.style.display = 'none';
        okayBtn.style.display = 'none';
        goodBtn.style.display = 'none';

        //Reload the page after 5s
        setTimeout(() => {
          location.reload();
        }, 5000);
      }
    }, 1000);
  };
};
// Event listener, when user press enter.
nameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleNameInput(event);
  }
});
// Event listener for when the user clicks the send button
document.getElementById('send-button').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission
  handleNameInput(event);
});


