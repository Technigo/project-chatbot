# Joyce's ActivityBot

This project uses JavaScript to create an interactive chatbot that prompts the user with a series of questions. Assuming the user is a child (or parent/guardian of a child) and the child is around 5 years old, the chatbot uses the information given by the user to help suggest an activity before signing off.

## The problem

My approach to the problem was to first make sure I understood how all the parts of the code were interconnected. Once I could get the initial code to start and call the first function, I started to get a work flow going. However, I felt like my code was a bit convoluted and I was getting confused quite easily. One of the first challenges was to figure out how to get information from the user, and then pass that information as an argument into the next function call. With some help from some of the course videos and ChatGPT, I was able to work out some code that I think was as concise as I could figure out for this stage of my learning.

I had an idea that I wanted to ask the user to choose their favorite color from a series of buttons, and then use the user's choice to trigger a particular color scheme for the buttons. This led to a small problem because the buttons would only change color for the next function, but then they would revert to the same color. As I was working out a solution for this, it gave me the idea to change the entire color scheme. This ended up being another challenge, but again I used a healthy dose of course video content and ChatGPT to find a way to make the color scheme idea work. I specified the elements I wanted to change for each color scheme in CSS and referenced that in a new function that would set a particular color scheme based on the user's choice. 

The other challenge was to create all the activity options based on user input, collect that data into variables in the global scope so that they could be referenced in a function that would work through conditional statements and weigh all the variables, eventually pointing to a couple of activity options for the user to choose from. In the planning stages, I brainstormed on paper all the potential variables before settling on mood, weather, and amount of time as the variables I would use for my chatbot. Then I sketched a tree of possibilities for different moods leading to different combinations for indoor/outdoor and short/long activities.

If I had more time, I would create more activity choices, and maybe use a loop to continuously prompt the user if they were not satisfied with the initial options. The chatbot could offer a few more choices, and if the user rejected those, more options could come up before finally the chatbot would exhaust all options. 

## View it live

https://joyceschatbot.netlify.app/