---
layout: post
title: 3.8.1/3.8.2 While loops/Nested loops
author: Srinaga Pillutla
description: Basic concept for while loops
permalink: /csp/big-idea/p4/3-8-1
---

## Basic Overview

Condition is always true if the condition is true you have seen it in math have you? 🙃
An example is x<8 or X>y or x>8

In inside the code you can run any code you want anything you want but it has to be true to statement

## What happens inside the code 
If you run the code it will run for infinate times unless, the statement is false then it will stop and continue to next line or stop oif it is last code 

an example can be s`een down here 
The counter which is number set is = 0 and 0<10
and then it prints each number by +1 





```python
counter = 0
while counter <= 10:
    print("Counter is:", counter)
    counter += 1
    print("Counter after incrementing:", counter)

```

    Counter is: 0
    Counter after incrementing: 1
    Counter is: 1
    Counter after incrementing: 2
    Counter is: 2
    Counter after incrementing: 3
    Counter is: 3
    Counter after incrementing: 4
    Counter is: 4
    Counter after incrementing: 5
    Counter is: 5
    Counter after incrementing: 6
    Counter is: 6
    Counter after incrementing: 7
    Counter is: 7
    Counter after incrementing: 8
    Counter is: 8
    Counter after incrementing: 9
    Counter is: 9
    Counter after incrementing: 10
    Counter is: 10
    Counter after incrementing: 11



```python
%%js
// Initialize a variable
let counter = 0;

// While loop starts
while (counter <= 10) {
    console.log("Counter is: " + counter);
    counter++;
}
```


    <IPython.core.display.Javascript object>


##Popcorn Hack 1

For this one ou have to find an error in the code to demonstrate the knowlege and correct the mistake ion new code cell here is code to find mistake and pls run it in console.log to check if it is right. good luck nd have fun lemem know about questions comemnts and concerns :D. // Initialize the counter
let counter = 0;

// Loop while counter is less than 5
while (counter <= 5) { // Mistake: should be < 5
    console.log("Counter is: " + counter); // Print the current counter value
    
    // Increment the counter
    counter = counter + 1; // This is correct but could be simplified to counter++
}


##Popcorn Hack 2  Create the Outer Loop:

Use a while loop that runs while outerFactor is less than or equal to 10.
Initialize the Inner Loop Variable:

Inside the outer loop, create another variable called innerFactor and set it to 1.
Create the Inner Loop:

Inside the outer loop, use another while loop that runs while innerFactor is less than or equal to 10.
Calculate the Product:

Inside the inner loop, calculate the product of outerFactor and innerFactor.
Print the Product:

Print the product using console.log(), formatting the output neatly.
Increment the Inner Loop Variable:

After printing the product, increment innerFactor by 1.
Move to the Next Line:

After the inner loop finishes, print a new line to separate rows.
Increment the Outer Loop Variable:

Increment outerFactor by 1 to move to the next row in the table.

##Popcorn Hack 
