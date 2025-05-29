---
comments: True
layout: post
title: JavaScript Conditionals Part 1
description: An introduction to JavaScript conditional statements
permalink: /csse/javascript/fundamentals/conditional-statements/p1/
categories: ['CSSE JavaScript Fundamentals']
author: Shay
---

## Conditional Statements Part 1

Conditional statements are used to direct the flow of the program.


### if statements

These are often used to branch conditions.  This example outputs through HTML using docuemtn.


```python
%%html

<output id="output"></output>

<script>
function intializeData(data = null) {
    // Define default values
    let scaleFactor = 9/16;
    let animationRate = 1;
    let position = [0, 0];

    // Check if data is provided
    if (data) {
        scaleFactor = data.SCALE_FACTOR || scaleFactor;
        animationRate = data.ANIMATION_RATE || animationRate;
        position = data.INIT_POSITION || position;
    }

    document.getElementById("output").innerHTML = `
        <p>Scale Factor: ${scaleFactor}</p>
        <p>Animation Rate: ${animationRate}</p>
        <p>Initial Position: ${position}</p>
    `;
}

var data = {
    SCALE_FACTOR: 1/1,
    ANIMATION_RATE: 25,
    INIT_POSITION: [100, 100]
}

// Uncomment one of the following lines to test the if statement in the function
//intializeData();
intializeData(data);

</script>
```



<output id="output"></output>

<script>
function intializeData(data = null) {
    // Define default values
    let scaleFactor = 9/16;
    let animationRate = 1;
    let position = [0, 0];

    // Check if data is provided
    if (data) {
        scaleFactor = data.SCALE_FACTOR || scaleFactor;
        animationRate = data.ANIMATION_RATE || animationRate;
        position = data.INIT_POSITION || position;
    }

    document.getElementById("output").innerHTML = `
        <p>Scale Factor: ${scaleFactor}</p>
        <p>Animation Rate: ${animationRate}</p>
        <p>Initial Position: ${position}</p>
    `;
}

var data = {
    SCALE_FACTOR: 1/1,
    ANIMATION_RATE: 25,
    INIT_POSITION: [100, 100]
}

// Uncomment one of the following lines to test the if statement in the function
//intializeData();
intializeData(data);

</script>



### switch case statement

These are often used to branch code when there are a lot of options.


```javascript
%%javascript

class GameObject {
    constructor() {
        this.velocity = { x: 0, y: 0 };
        this.direction = '';
        this.xVelocity = 1;
        this.yVelocity = 1;
    }

    handleKeyDown({ keyCode }) {
        switch (keyCode) {
            case 87: // 'W' key
                this.direction = 'up';
                break;
            case 65: // 'A' key
                this.direction = 'left';
                break;
            case 83: // 'S' key
                this.direction = 'down';
                break;
            case 68: // 'D' key
                this.direction = 'right';
                break;
        }
    }
}

// Example usage
const gameObject = new GameObject();
console.log('Initial State:', gameObject);

gameObject.handleKeyDown({ keyCode: 87 }); // Simulate 'W' key press
console.log('After W Key Press:', gameObject);

gameObject.handleKeyDown({ keyCode: 65 }); // Simulate 'A' key press
console.log('After A Key Press:', gameObject);

gameObject.handleKeyDown({ keyCode: 83 }); // Simulate 'S' key press
console.log('After S Key Press:', gameObject);

gameObject.handleKeyDown({ keyCode: 68 }); // Simulate 'D' key press
console.log('After D Key Press:', gameObject);
```


    <IPython.core.display.Javascript object>

