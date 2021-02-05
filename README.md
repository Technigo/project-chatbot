# Project Name
Our project was to pair program a chatbot, with the focus of learning the basics of Javascript.
## The problem
We decided to build a travel chatbot where you make a number of choices and book a vacation.

Then we created a jamboard with the different questions and alternatives in order to understand the flow and ways to answer (buttons, list, checkbox etc.) 
To pair program we used VS Code Live Share.

We made functions for every bot message that also gives it a question number as well as adds the responses we want to use in a final booking statement. The messages from the bot and user input are triggered in a function with switch statements that checks for question number, displays the bot message and user input and then clears what the user has typed in the input field for the next input.
In the differen functions used in depending on question number we used if/else statements and for the buttons, lists and checkboxes we added HTML to the JavaScript code and sent the value from the input to the next function to make the bot responsive.

After most of the chatbot was done we built a landing site with a form where you enter name and email and submits to open the travel booking chat. 
This input is stored by sessionStorage and first name is used in the greeting message from the bot and the email is used in the last booking confirmation message.

After the last question regarding if the user wants to book the vacation, the bot summarizes the relevant input that we stored in the message functions and displays it as a confirmation. The user is then transported back to the landing page.

We styled our backgrounds and added a new bot icon and removed the user icon. Changed some of the colors and added images to buttons.
If we had more time we might have added media queries and also put some more thinking into the styling and layout.

Techniques: if/else statement, switch statement, for loop, functions storing parameters, eventhandlers and sessionStorage
Tools: VS code, Live share, Jamboard, Google meets, Slack, Unsplash

## View it live

Have you deployed your project somewhere? Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
