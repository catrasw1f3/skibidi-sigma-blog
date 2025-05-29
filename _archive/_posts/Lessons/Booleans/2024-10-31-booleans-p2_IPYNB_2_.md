---
comments: True
layout: post
title: Javascript Boolean Lesson p2
description: A boolean expression is an expression that evaluates to a boolean value.  A boolean expression is evaluated using relational and logical operators.  The result of a boolean expression is either true or false.
author: Jeongjun Kim
permalink: /csse/Lessons/Booleans/p2
categories: ['CSSE JavaScript Fundamentals']
---

# Javasvript Booleans
<hr>

## Introduction
Relational operators in JavaScript are used to compare two values, returning a Boolean value (true or false) based on the relationship. Relational operators are extremley similar to math functions such as less than or equal too.

## Relational Operators
##### These codes determine the true or false
- <p>== : Equal to, checks if two values are the same (e.g., verifying a password match).<p>
- <p>!= : Not equal to, checks if two values are different (e.g., ensuring input changes).<p>
- <p>=== : Strict equal to, checks equality and type (e.g., validating exact user ID).<p>
- <p>!== : Strict not equal to, checks inequality and type (e.g., ensuring different type or value).<p>
- <p>> : Greater than, left value is larger than the right (e.g., comparing scores or ages).<p>
- <p>< : Less than, left value is smaller than the right (e.g., setting age limits).<p>
- <p>>= : Greater than or equal to, left value is larger or equal (e.g., minimum age validation).<p>
- <p><= : Less than or equal to, left value is smaller or equal (e.g., ensuring max quantity in cart).<p>

## Example
<p> this is the example of booleans. You can see how booleans works.<p>


```python
%%js

//You can change this booleans. try out more!
let isLoggedIn = true;
let hasAdminAccess = false;
let amal = false;

if (amal) {
  console.log("Amal detected. No gummies. Get out.")
}
else {
  if (isLoggedIn) {
    console.log("Welcome to the site!");

    // Check if the user has admin access
    if (hasAdminAccess) {
      console.log("You have admin access.");
    }
    else {
      console.log("You are logged in, but you don't have admin access.");
    }
    }
  else {
    console.log("Please log in to access the site.");
  }
}

```


    <IPython.core.display.Javascript object>


## More Boolean Information

##### `Boolean()` is the code that makes non boolean variables to a boolean.

If the variable inside of the `Boolean()` is integer, then the code following the rule...
- `True` if the variable is not 0.
<br>Example: `Boolean(1)`, `Boolean(-100)`

- `False` if the variable is 0.
<br>Example: `Boolean(0)`

If the variable inside of the `Boolean()` is string, then the code following the rule...
- `True` if the variable has something in it.
<br>Example: `Boolean("aaaa")`, `Boolean("0")`

- `False` if the variable doesn't have anything in.
<br>Example: `Boolean("")`

##### Warnings

`Boolean()` and `boolean()` is completely different code. Make sure you put the capital B.


```python
%%js

// Popcorn hack
// Open Devolper Tools
// Help --> Devolper Tools
// Change the variables so you get 4 Correct

let a = "abc"; 
let b = 0;
let c = -1;
let d = "";

if (Boolean(a) == false) {
    console.log("A = Correct");
} else {
    console.log("A = InCorrect");
}

if (Boolean(b) != false) {
    console.log("B = Correct");
} else {
    console.log("B = Incorrect");
}

if (Boolean(c) != true) {
    console.log("C = Correct");
} else {
    console.log("C = Incorrect");
}

if (Boolean(d) == true) {
    console.log("D = Correct");
} else {
    console.log("D = incorrect");
}

if (Boolean(a) == false && )
```


    <IPython.core.display.Javascript object>

