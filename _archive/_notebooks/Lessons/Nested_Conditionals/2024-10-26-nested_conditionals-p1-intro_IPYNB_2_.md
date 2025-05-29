---
comments: True
layout: post
title: The basics of Nested Condiotionals
description: Nested conditionals in JavaScript allow for more complex decision-making by placing one conditional statement inside another. This structure enables a program to check additional conditions only if the previous condition is true, creating a layered decision process. In this lesson, students will learn how to implement nested if, else if, and else statements to create more specific control flows in their programs. Through examples and exercises, they will gain a deeper understanding of how to manage multiple conditions effectively, enhancing the logic of their code.
author: Lara Banjac
permalink: /csse/javascript/fundamentals/nested-conditionals/p1
categories: ['CSSE JavaScript Fundamentals']
---

<style>
  h1 {
    animation: glow 1s ease-in-out infinite alternate;
    font-size: 3em; /* Increased font size */
  }
</style>

<h1>
  Nested Conditionals Basics (Part 1)
</h1>

<style>
@keyframes glow {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #00f, 0 0 15px #00f, 0 0 20px #00f; /* Changed color to blue (#00f) */
  }
  to {
    text-shadow: 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 50px #00f; /* Changed color to blue (#00f) */
  }
}
</style>

<h5><span style="; color:#9999ff">To gain a better understanding about Nested Conditionals and how they work, first we need to understand what condtionals are; Conditionals in general are "if-then" statements. They allow your program to make decisions based on certain conditions. If the condition is true, the program will do one thing; if it’s false, the program will do something else (or nothing at all). Here's an example. 
Think of it as asking a question and then deciding what to do based on the answer:

  Question: "How are you doing?"

    Answer/Input: "Good!"
    Result/Output: "Glad to hear that!^^"

    Alternative Answer/Input: "Not that well"
    Alternative Result: "Sorry to hear that, I hope it isn't that bad."

On the other hand, Nested Conditionals are conditionals within other conditionals. Let's use the previous example and extend it to an example with nested conditionals:

    Question: "How are you doing?"

        Answer/Input: "Good!"

        Result/Output: "Oooh~! Did something fun happen?"

            Answer/Input # 2: "Actually, yes, I got an A for an assignment in my CSSE class ^^"

            Result/Output # 2: "Ooh nice job! ^^"

        Alternative Answer/Input: "Not that well"

        Alternative Result: "Sorry to hear that, what happend?"

            Answer/Input #2: "I threw up in front of my entire class."
        
            result/output #2: "Oh... That probably sucks..." </span></h5>


<style>
  h1 {
    animation: glow 1s ease-in-out infinite alternate;
    font-size: 3em; /* Increased font size */
  }
</style>

<h1>
  Popcorn Hack #1
</h1>

<style>
@keyframes glow {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #00f, 0 0 15px #00f, 0 0 20px #00f; /* Changed color to blue (#00f) */
  }
  to {
    text-shadow: 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 50px #00f; /* Changed color to blue (#00f) */
  }
}
</style>

<h5><span style="; color:#9999ff">This code gives the player the option to pick between a red and green apple and decide whether or not to eat it.
1.Try changing the values of appleColour to "green" and eatApple to "no".
2.Try adding a scenario for what would happen if the player found a yellow apple as well. Remember to change to the value of appleColor to "yellow" to get a different result.


```python
%%html
<!-- HTML output div -->
<div id="message"></div>

<script>
    function runWhenDOMLoaded() {
        // Example choices
        let appleColor = "red"; // Change this to "green" to test different outcomes
        let eatApple = "yes";   // Change this to "no" to test different outcomes

        const messageElement = document.getElementById("message");

        function displayMessage(message) {
            console.log(message); // Log to console
            messageElement.textContent = message; // Display on the webpage
        }

        // Check the color of the apple chosen by the user
        if (appleColor === "red") {
            // If the apple is red, check if the user wants to eat it
            if (eatApple === "yes") {
                displayMessage("Lmao, the apple you ate was poisonous. You're dead :D");
            } else {
                displayMessage("You decided not to eat the red apple (You're boring -_-).");
            }
        } else if (appleColor === "green") {
            // If the apple is green, check if the user wants to eat it
            if (eatApple === "yes") {
                displayMessage("You ate the green apple.");
            } else {
                displayMessage("You decided not to eat the green apple (You're boring -_-).");
            }
        } else {
            // If the user enters an invalid color, display an error message
            displayMessage("Invalid answer. Please choose 'red' or 'green'.");
        }
    }

    // Ensure the function runs only after the page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runWhenDOMLoaded);
    } else {
        runWhenDOMLoaded();
    }
</script>
```


<!-- HTML output div -->
<div id="message"></div>

<script>
    function runWhenDOMLoaded() {
        // Example choices
        let appleColor = "red"; // Change this to "green" to test different outcomes
        let eatApple = "no";   // Change this to "no" to test different outcomes

        const messageElement = document.getElementById("message");

        function displayMessage(message) {
            console.log(message); // Log to console
            messageElement.textContent = message; // Display on the webpage
        }

        // Check the color of the apple chosen by the user
        if (appleColor === "red") {
            // If the apple is red, check if the user wants to eat it
            if (eatApple === "yes") {
                displayMessage("Lmao, the apple you ate was poisonous. You're dead :D");
            } else {
                displayMessage("You decided not to eat the red apple (You're boring -_-).");
            }
        } else if (appleColor === "green") {
            // If the apple is green, check if the user wants to eat it
            if (eatApple === "yes") {
                displayMessage("You ate the green apple.");
            } else {
                displayMessage("You decided not to eat the green apple (You're boring -_-).");
            }
        } else {
            // If the user enters an invalid color, display an error message
            displayMessage("Invalid answer. Please choose 'red' or 'green'.");
        }
    }

    // Ensure the function runs only after the page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runWhenDOMLoaded);
    } else {
        runWhenDOMLoaded();
    }
</script>



<style>
  h1 {
    animation: glow 1s ease-in-out infinite alternate;
    font-size: 3em; /* Increased font size */
  }
</style>

<h1>
  How You Can Utilize this in your RPG
</h1>

<style>
@keyframes glow {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #00f, 0 0 15px #00f, 0 0 20px #00f; /* Changed color to blue (#00f) */
  }
  to {
    text-shadow: 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 50px #00f; /* Changed color to blue (#00f) */
  }
}
</style>

<h5><span style="; color:#9999ff"> There are several things you can use nested conditionals in your RPG for. For example, you can create interactions (like the apple example shown above) or more complex dialogue with other NPC's, that could impact the outcomes and endings of the plot.And since you guys love fighting so much, you could also try to create a combat system in which the player can choose between different actions such as, attacking, defending, fleeing using an item, etc. and depending on the players decision there could be different outcomes. :)
