# Project Name

Replace this readme with your own information about your project.

Start by briefly describing the assignment in a sentence or two. Keep it short and to the point.

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

It was really hard do get going with this one! It wasn't until I watched Jenny's live coding on how she made the starter code that I fully grasped the task. When I started adding the event-listener, it forced me to think about what I actually wanted to acheieve, and from there I started to google whatever I needed help with.

I was trying to reach the text the user had typed into the input (in this case the users name), but found that very tricky. I tried making the variable that stored the value global, but it still wouldn't log it on testing. The problem was that the answer was logged within a function, and making the variable global didn't work because Javascript loads asynchronously = the submitForm function had not finished executing when I tried to access it. After a while I figured I could just create a new function for showing the answer to the name-input and then calling that within the function submitForm instead - and that worked. 

## View it live

Have you deployed your project somewhere? Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
