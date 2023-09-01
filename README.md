# Project Chatbot

The assignment was to create a chatbot, where a set of interactions would run between a bot and a user. 

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

It was really hard do get going with this one! It wasn't until I watched Jenny's live coding on how she made the starter code that I fully grasped the task. When I started adding the event-listener, it forced me to think about what I actually wanted to acheieve, and from there I started to google whatever I needed help with.

One problem I had in the beginning was that I was trying to reach the text the user had typed into the input (in this case the users name), but found that very tricky. I tried making the variable that stored the value global, but it still wouldn't log it on testing. The problem was that the answer was logged within a function, and making the variable global didn't work because Javascript loads asynchronously = the submitForm function had not finished executing when I tried to access it. After a while I figured I could just create a new function for showing the answer to the name-input and then calling that within the function submitForm instead - and that worked. 

I got really stuck after the first interaction. So when trying to get going after having created the new buttons for Yes and No, there was a lot of trial and error and testing. I don't really remember what finally made me solve it, but I think it had something to do with me not getting the hang of eventlisteners properly. Once I found the question on StackOverflow regarding how to trigger a new question (https://stackoverflowteams.com/c/technigo/questions/3407) it sort of landed into place.

Once I got further into the code I realized that it all looked very messy. My functions where very long and it was like I walked deeper and deeper into a labyrinth, and I din't know how to get out of it. That's when the reusability of functions actually clicked into place. Attending the Q&A with Diego, where he once more went trough parameters and arguments made that part click for me, and I decided that evening to try and break down my code into smaller chunks. Oh the joy when everything still worked the way it should! I was expecially proud of the createButtons function where I used the parameters in both the text AND the id - killing to flies in one go so to speak. 

With more time I would like to add an API to the bot, so that the generated answers are really generated and not hard-coded. I would also like to add a "start over" and "quit"-button at the end instead of prompting the user to shut down the window. I tried creating a restartChat function but it was a bit too tricky and my time ran out.

## View it live

https://project-chatbot-lauralyckholm.netlify.app/
