# Craft Bot - Chat Bot

This is a chat bot that will give you ideas for your next craft project!  You can choose to get ideas for either quilting, crochet, or cross-stitch.  If you don't like the first idea that the bot offers, you can ask for another!

The requirements for the project included: getting user inputs to show in the chat window, getting the bot to respond, and creating conversation between the user and the bot.  The project also required conditional statement(s) and event listener(s).  Although HTML and CSS was provided, I have styled my bot differently, including changing the background to an image and adding different bot icons.  I have also added a chime sound when the user is finished with the bot and says "Thanks, bye!".

## The problem

I started by sketching the pattern of interactions between the bot and user with pen and paper.  This helped me to understand what the back and forth between the two should look like and helped guide the order in which I wrote my code.  I wrote one function at a time and tested each function with console.log to understand if/when I broke the code and whether buttons/prompts were working.  When I initially added images in the bot-side responses, the chat would not fully scroll to the bottom of each image like it would with the text bubbles.  I looked through the Technigo StackOverflow and fortunately, someone else had this same issue in 2021.  I had to do a bit more googling to fully understand how they had gotten their images to show fully but did get it to work.  However, because you can run through my bot prompts multiple times, originally, the chat would only fully show the images the first time around.  This was because part of the code that forced the image to show fully included an array.  Then I needed to understand how to not include the first element/instance of the array, but the last element of the array - regardless of how many times a user had been through prompts.  I did a bit of googling and referring back to Code Session materials in order to understand that I would have to define the array before I could manipulate it.  That done, the bot-side images show fully every time (which was a super satisfying outcome!). Overall, I'm quite pleased with the function and aesthetics of my bot!

## View it live

Here is the link to the live bot: https://kaleidoscopic-puffpuff-67f436.netlify.app/
