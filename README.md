# Seafood Restaurant Chatbot Ordering System
This project is an interactive chatbot that allows users to order food from a fictional seafood restaurant. The chatbot guides users through the ordering process, helping them choose from a menu of seafood dishes, confirming their order, and providing a user-friendly chat interface.

# Features:
Greeting & Interaction: The bot greets the user and asks if they are ready to start the order.

User Name Collection: The chatbot asks for the user's name and stores it for personalized communication throughout the session.

Food Type Selection: The bot offers the user the choice of different types of seafood dishes, such as Fish, Shellfish, and Mollusks.

Dish Selection: Based on the chosen food type, the user can select specific dishes like Grilled Salmon, Fish and Chips, Shrimp, Lobster, Paella, and Calamari.

Order Confirmation: Once a dish is selected, the bot confirms the order and asks the user if they are sure about their choice, simulating an order confirmation process.

Chat UI: An intuitive and simple interface for the user to interact with the bot. It displays the chat in a "bubble" format with both user and bot messages, and the user can respond by selecting buttons.

# Technologies Used
HTML5 for the basic page structure.

CSS for styling the chat and page layout.

JavaScript for managing user input, dynamic content updates, and chatbot logic.

Control Chatbot Flow: Based on the user’s input, the chatbot dynamically updates the conversation by adding new messages to the chat. JavaScript is responsible for triggering events, such as when a user clicks a button or enters their name.

Event Handling: JavaScript listens for user interactions, like button clicks, and updates the chat UI accordingly. For example, when a user selects a type of seafood or a dish, the chatbot responds by showing new options.

DOM Manipulation: JavaScript dynamically creates and appends new HTML elements (such as buttons, messages, and forms) into the chat area by manipulating the DOM (Document Object Model). This ensures that the page content updates without needing to reload the entire page.

Order Flow Management: The bot’s logic handles the sequence of steps, guiding the user from the greeting phase to dish selection, order confirmation, and final messages. JavaScript ensures that the chatbot remembers the user’s previous choices and asks follow-up questions accordingly.

# Improvements
The chatbot could be enhanced to handle more complex interactions, such as adding multiple items to the cart, tracking orders, and providing delivery options.

A backend API could be integrated to store and retrieve orders, making the system dynamic.

Improved error handling and input validation to ensure a smooth user experience.

## View it live
https://seafood-restaurant-order-bot.netlify.app/