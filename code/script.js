
// Variables that point to selected DOM elements 
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const ageInput = document.getElementById('name-input');
const choiceBtn1 = document.getElementById('choiceBtn1');
const choiceBtn2 = document.getElementById('choiceBtn2');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const dropDown = document.getElementById('dropDown');
const notGoodBtn = document.getElementById('notGoodBtn');
const okayBtn = document.getElementById('okayBtn');
const goodBtn = document.getElementById('goodBtn');

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === 'bot') {
    console.log(globalThis)//what should i console log? 
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


// Function greets the user, the showMessage function is being called, asking for name.
const greetUser = () => {
  showMessage(`Hello there, welcome to the evaluation sheet! 
  We are really happy that you take your time to answer some questions
  in order for us to improve our service.`, 'bot');
  setTimeout(() => {
    showMessage(` First of all, what's your name?`, 'bot');
  }, 4000);
};

// Function storing the name of the user.
const handleNameInput = (event) => {
  event.preventDefault();

  const name = nameInput.value;
  showMessage(`${name}`, 'user');

  // displaying the name of the user
  setTimeout(() => {
    showMessage(`${name}, we want to know what you think about our products!`, 'bot');
    nameInput.value = "";

    // showMessage being called, asking for age, displaying Btn1, Btn2 as a block elements.
    setTimeout(() => {
      showMessage(`But first, how old are you ${name} ?`, 'bot');
      choiceBtn1.style.display = 'block';
      choiceBtn2.style.display = 'block';
      inputWrapper.style.display = 'none';

      // hides buttons after clicking it
      choiceBtn1.onclick = (event) => {
        handlechoiceBtn(event, name, 'under 18'); //string under 18 passed as an argument to ageGroup
        choiceBtn1.style.display = 'none';
        choiceBtn2.style.display = 'none';
        inputWrapper.style.display = 'block';
      };
      choiceBtn2.onclick = (event) => {
        handlechoiceBtn(event, name, 'over 18');//string over 18 passed as an argument to ageGroup
        choiceBtn1.style.display = 'none';
        choiceBtn2.style.display = 'none';
        inputWrapper.style.display = 'block';

      };

      // Functions answer. Let ageGroup parameter take on over/under 18 value. Calling showMessage function
      const handlechoiceBtn = (event, name, ageGroup) => {
        event.preventDefault();
        showMessage(`I'm ${ageGroup}!`, 'user');

        setTimeout(() => {
          showMessage(`So ${name}, you are ${ageGroup}, is this correct?`, 'bot');
          yesBtn.style.display = 'block';
          noBtn.style.display = 'block';
          inputWrapper.style.display = 'none';
          yesBtn.onclick = () => handleResponse('yes', name);
          noBtn.onclick = () => handleResponse('no', name);
        }, 1000);
      };

      // function confirm age, if not display unvalid option
      const handleResponse = (response, name) => {
        showMessage(`${response}!`, 'user');
        if (response === `yes`) {
          showMessage(`Amazing!`, 'bot');
        } else {
          showMessage(`You need to think about your age. This page will be automatically reloaded.`, 'bot');
          setTimeout(() => {
            location.reload();
          }, 2999);
        }

        // dropdown menu
        setTimeout(() => {
          showMessage(`So, ${name} which medicine did you order from us? `, 'bot');
          dropDown.style.display = 'block';
          inputWrapper.style.display = 'none';
          yesBtn.style.display = 'none';
          noBtn.style.display = 'none';
        }, 3000);
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

      const handleReview = (review, name) => {
        showMessage(`${review}!`, 'user');

        //Rate purchase answer, calling review function when clicking the button 
        setTimeout(() => {
          if (review === 'Not good') {
            showMessage(`${name}, this is not good!
            We will evaluate the product.
            Thank you for sharing your opinion with us.`, 'bot');
            notGoodBtn.style.display = 'none';
            okayBtn.style.display = 'none';
            goodBtn.style.display = 'none';

          } else if (review === 'Okay') {
            showMessage(`${name}, okay is not good enouth!
            We will evaluate the product.
            Thank you for sharing your opinion with us.`, 'bot');
            notGoodBtn.style.display = 'none';
            okayBtn.style.display = 'none';
            goodBtn.style.display = 'none';

          } else if (review === 'Good') {
            showMessage(`${name}, we are glad you are happy with your order!
            Hope to see you again soon!`, 'bot');
            notGoodBtn.style.display = 'none';
            okayBtn.style.display = 'none';
            goodBtn.style.display = 'none';

            setTimeout(() => {
              location.reload();
            }, 5000);

          }
        }, 1000);
      };



    }, 2000);
  }, 2000);

};
// Event listener, when user press enter.
nameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleNameInput(event);
  }
});

// When website loaded, chatbot asks first question.
setTimeout(greetUser, 1000);
