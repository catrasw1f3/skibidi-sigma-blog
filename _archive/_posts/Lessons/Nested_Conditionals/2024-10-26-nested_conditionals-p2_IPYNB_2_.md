---
comments: True
layout: post
title: JavaScript Nested Conditionals with booleans
description: Nested conditionals with booleans in Javascript are condition statements placed inside condition statements, allowing multiple layers of decision making.
author: Anika Marathe
permalink: /csse/javascript/fundamentals/nested-conditionals/p2
categories: ['CSSE JavaScript Fundamentals']
---

<h2><span style="font-family: Ariel; color:#94c4ff">Booleans with Nested Conditionals</span></h2>


<p><span style="font-family: Arial">A <b>boolean</b> is a data type that represents one of two possible values: <code>true</code> or <code>false</code>. Booleans are useful for decision-making in code, as they let us determine if specific conditions are met. For example, if we want to check if someone meets the age requirement for a concert or has a ticket, we might represent these conditions as booleans.</span></p>

<p><span style="font-family: Arial">A <b>nested boolean</b> is simply a boolean condition used inside another condition. When using <b>nested conditionals</b> (conditions inside other conditions), we can build complex decision-making logic. For example, we might check first if the person is old enough, and if they are, then check if they have a ticket. This kind of logic allows us to handle multiple conditions in a structured way.</span></p>

<p><span style="font-family: Arial">Here’s an example:</span></p>

```javascript
let isOldEnough = true; // Boolean indicating if the person meets the age requirement
let hasTicket = false; // Boolean indicating if the person has a ticket

if (isOldEnough) { // Check if the person meets the age requirement
    if (hasTicket) { // Nested condition to check if they have a ticket
        console.log("You can attend the concert.");
    } else {
        console.log("You need a ticket to attend the concert.");
    }
} else {
    console.log("You do not meet the age requirement for this concert.");
}
```

---

1. The code below checks if you can cook a meal at home. 
2. It uses the presence of hunger, and ingredients, to determine if cooking a meal is possible at home.
3. It uses booleans in the code



```python
%%html
<!-- HTML output div -->
<div id="message"></div>

<script>
    function runWhenDOMLoaded() {
        let isHungry = true;

        // Define ingredients as a JSON object
        const ingredients = {
            "bread": true,
            "cheese": false,
            "tomato": false
        };

        const messageElement = document.getElementById("message");

        function displayMessage(message) {
            console.log(message); // Log to console
            messageElement.textContent = message; // Display on the webpage
        }

        // Check if essential ingredients are available
        if (isHungry) {
            if (ingredients.bread && ingredients.cheese) {
                displayMessage("You can make a cheese sandwich at home.");
            } else if (ingredients.bread) {
                displayMessage("You only have bread, maybe make toast.");
            } else {
                displayMessage("You should order food since you don't have enough ingredients.");
            }
        } else {
            displayMessage("You aren't hungry. Maybe meal-prep for later if you had ingredients.");
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
        let isHungry = true;

        // Define ingredients as a JSON object
        const ingredients = {
            "bread": true,
            "cheese": false,
            "tomato": false
        };

        const messageElement = document.getElementById("message");

        function displayMessage(message) {
            console.log(message); // Log to console
            messageElement.textContent = message; // Display on the webpage
        }

        // Check if essential ingredients are available
        if (isHungry) {
            if (ingredients.bread && ingredients.cheese) {
                displayMessage("You can make a cheese sandwich at home.");
            } else if (ingredients.bread) {
                displayMessage("You only have bread, maybe make toast.");
            } else {
                displayMessage("You should order food since you don't have enough ingredients.");
            }
        } else {
            displayMessage("You aren't hungry. Maybe meal-prep for later if you had ingredients.");
        }
    }

    // Ensure the function runs only after the page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runWhenDOMLoaded);
    } else {
        runWhenDOMLoaded();
    }
</script>



<h3><span style="font-family: Ariel; color:#94c4ff">Popcorn Hack 2</span></h3>

1. Open two new code cells and set them to javascript
2. Copy the code example from above javascript cell into both the new code cells 
3. Change the first new code cell to print "You aren't hungry. Maybe meal-prep for later if you had ingredients." 
4. Change the second new code cell to print "You can make a cheese sandwich at home." 
