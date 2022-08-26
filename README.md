# Project Chatbot 

Assignment for week 1 is to make a chatbot by using variables. conditionals and functions in Javascript.


## The problem

1. Our first problem was to add some buttons to our chatbot but the questions answeres from bot and user did not work so we add chat-innerHTML += before the option buttons.
2. We add a div for option buttons in JS so we could shape the buttons in CSS with class="options.
3. Div for option buttons in JS helped to remove the buttons after every answer to spa options by adding const btnOptions = document.getElementById('btnOptions')
  btnOptions.remove(); to third question.
4. The fifth question did not work because we did not have setTimeout(theEndAnswer, 2000); in const emailAddressAnswer.
5. the e-mail answer box in browser was not suitable for and a-mail adress because of the max-width in bubble style in css.
6. We create a function called userAnswer() that only shows us the user's response and add it in the form.addEventListener(). This function allowed us to have the user's response correctly.
7. We create a generic function called userSpa() that keeps track of the current question and then calls other functions. We had some problem understanding how to work the statements if/ else if. But finally, we understood that let question = 1 was a point important. 

## View it live

Have you deployed your project somewhere? Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
