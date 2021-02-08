# KittenBot

Let's build a kitten!

## The problem

We started by deciding on a theme for chatbot, and then agreed on a rough "manuscript" for the flow of the questions. I made this design sketch https://www.figma.com/file/RjPUYUmw57CEJrw49xS5Pa/KittenBot?node-id=0%3A1 as a reference for the visual parts. (My pair-programming partner and i had some technical difficulties and after some discussion with Poya we decided to submit individually.)  

At first i had some problems with how and where to add event listeners, i think i had duplicate event listeners which were conflicting, and i also couldn't work out how to structure the different functions and how they communicate. Once i had that in place it was fairly simple to add all the functions. I then wanted to add functionality which would make it simple to add button input to any question, and i struggled a lot with how to make the dynamically created buttons interact with the event listener. In retrospect, i think i over-simplified the buttons - for example their value is set to the same as the button text (that is probably not a great idea) Later on in the project i realised that it would have been better if the buttons could have sent more info (or other info) than just the button value. 

I added two objects, kitten - for storing info regarding the kitten, and kittenLibrary - for storing content relevant to building a kitten. 

With a few hours left before deadline i decided to add the possibility for the user to request a new name suggestion for the kitten. That turned out to be a really bad idea, because... well i think i tried to incorporate pretty complex functionality without really adjusting the structure of the code to make it work. In the end (after the deadline) i got it working, but the handleResponse is now a bit messy and should be refactored.

If i'd had more time i would have added more pictures and correct info to each image, so that the image you get in the end actually correlates with the description. 

## View it live

https://affectionate-ritchie-cce98d.netlify.app/


