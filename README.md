# Project Chatbot

The assignment was to build a functional chatbot interface using JavaScript, HTML, and CSS. The chatbot should interact with users, ask questions, display messages, and respond with precision. 

## The problems

**1. Creativity went wild**  
When I started working on my project, my creativity took over when I read, "Step 2 - Have it your way 👋". I envisioned a coffee shop chatbot, like a Starbucks order flow, but soon realized that my idea was far too complex. Options for hot or cold drinks, different coffee shop locations, milk choices depending on the coffee type, drop-downs, buttons - the scope was way beyond my skills. Instead of realizing this right away, I stumbled across more issues as I progressed, forcing me to simplify my plan. I read through all the instructions before picking up my code again, and limited the scope to be more like my previous project (Project Javascript Pizzeria) with a very limited amount of options for the user, similar if else statement, etc. 

**2. Attention to details issues**  
I was a bit hasty and made several spelling mistakes, forgot to delete parts of the code and variables when I renamed/replaced/stopped using things in the code, which led to unnecessary (and time consuming) issues that could have been avoided. 

## If you had more time, what would be next?

**1.** Figure out a way to move line 17-27 further down in the script. It looks awkward to me to have "Handle user name input" above the "Start conversation", but the code broke when I moved it so I didn't dare to continue since time was running out. 

**2.** This part was suggested by ChatGPT: `document.addEventListener("DOMContentLoaded", () => {`. While I understand that it ensures all elements are fully loaded before the code runs, I haven't grasped why it's necessary in my code or when to use it. If I had more time, I would try to figure that out. 

**3.** I used `nameForm.removeEventListener("submit", handleUserInput)` because I wanted the "Start conversation" button to be the only visible option in the chat, forcing the user to click it to begin, but the event listener for the name form is still active. If I had more time, I would address this issue. 

**4.** The buttons seem to have a life of their own, and the input field remains visible in the background (likely related to the previous issue). If I had more time, I would fix this, but at this point, I'm just glad they're working. I struggled with this earlier in the project and almost abandoned the idea altogether.

## View it live

**Netlify:** https://johannaschatbot.netlify.app

