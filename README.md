# Wine Chat Bot 🍷

In this project we built a chat bot who asks questions about wine. We built it by using pair programming. This is our first deep dive into the JavaScript world!

## The problem

The main task was to build a chat bot using primarily JavaScript.

We wanted the theme of the chat bot to be about wine where it would be obvious that the chat bot prefers red wine over white. The conversation is between a wine maiden (bot) and a posh wine drinking man (user). So we wanted the bot to initially give the user the option to choose both, but as the conversation continues the user would be directed into the red wine option. If the user in the end don't choose the red wine option, the bot would end the conversation. As the red wine conversation continues, the user will be given options regarding wine country and grapes which the bot responds to accordingly. 

We started coding the "skeleton" for the conversation using JavaScript. We added an if statement early on in the code to get the conversation started and the user to choose the direction of it. As the conversation progresses, we continously added messages depending on the user's choice of direction. These messages could be either from the bot or the user. We built the messages in code as a function which typically contains actions where the bot guides the user forward by asking a question and give options to choose from. We used the form HTML tag "button" to display these options for the user and added a event listener to listen for the user's selection ("click"). The buttons where added to an HTML element by using the innerHTML property. Depending on the user's choice, the user was directed to the next question. At the end of the conversation, if the user had chosen the red wine direction, a sound effect was added to the chat. When the JavaScript functionality was in place, we proceeded to style the webpage a bit with CSS.

We're very proud of the end result! We had a concept in mind - a sunny mediterranean beautiful vineyard - which we think we managed to execute very well! If we had more time, we would have added more directions (i.e. more options to choose from) and questions to make the conversation longer and more versatile.  


## View it live

To view the site we've created, check it here: https://modest-brown-fa7f80.netlify.app/

