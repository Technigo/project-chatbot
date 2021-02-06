# Project Name

The task was to create a simple chatbot that will respond and react to user’s input

The chat should display questions from the bot and responses from the user.


## The problem

We have solved the task using the following methods:
  a. Created a set of global DOM variables that fetch the html elements with getElementbyID()
  b. Set up a questionHandler function that uses questionNumber variable to invoke different functions depending on the number of the question.
  c. Set up a series of functions that modify the html file’s form element with InnerHTML method to display various options for user’s input.
  d. Within each function we have also set up eventListeners to fetch the user’s input and pass it to the next function


## View it live

You can have a look at our chat live on Netlify: https://blissful-villani-8a009f.netlify.app/.
