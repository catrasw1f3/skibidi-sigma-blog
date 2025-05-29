---
comments: True
layout: post
title: Booleans lesson
description: Booleans lessons project
permalink: /first/
categories: ['Foundation']
---

#### <span style="color: #a955ed; text-shadow: 3px 3px 8px #4682a4; font-weight: bold; font-size: 2em;">Booleans:</span>
### Conecpt of booleans/Main idea 
Booleans are a data type in JavaScript that represent one of two values: true or false. They are used for logical operations, comparisons, and control flow in programs.
#### <span style="color: #a955ed; text-shadow: 3px 3px 8px #4682B4; font-weight: bold; font-size: 1.3em;">What are Booleans:</span>
•	Booleans are simple data types that are either true or false.

•	They are often used in conditional statements to execute specific blocks of code 



#### <span style="color: #a955ed; text-shadow: 3px 3px 8px #4682B4; font-weight: bold; font-size: 1.3em;">commen use for Booleans:</span>
•	Conditional statements: if, else,  structures

•	Loops: while, do...while, and for loops

•	Logical operations: combining conditions using && (AND), || (OR), and ! (NOT)

#### <span style="color: #a955ed; text-shadow: 3px 3px 8px #4682B4; font-weight: bold; font-size: 1.3em;">Booleans expressions:</span>
A Boolean expression is an expression that evaluates to true or false. Here are a few examples:

•	10 > 5 returns true because 10 is greater than 5.

•	8 === "8" returns false because the value is equal but the type is different (number vs. string).

•	isLoggedIn = false; assigns false to the isLoggedIn variable.




#### <span style="color: #a955ed; text-shadow: 3px 3px 8px #4682B4; font-weight: bold; font-size: 1.3em;">Example:</span>


```python
%%js 
let isUserLoggedIn = true;
let isAdmin = false;

if (isUserLoggedIn && isAdmin)
{console.log("Welcome, Admin!");}
else if (isUserLoggedIn) 
{console.log("Welcome, User!");}
else console.log("Please log in.");

```


    <IPython.core.display.Javascript object>



#### <span style="color: #a955ed; text-shadow: 3px 3px 8px #4682B4; font-weight: bold; font-size: 1.3em;">Popcorn Hack #1: Boolean Check:</span>

Create Boolean variables to represent somthing about you

example:

•	weather you birthday is today (isBirthday).

•	Whether you have completed your chores (completedChores).

•	Whether it is raining outside (isRaining).
Use console.log() to display a sentence for each.

(you can use any representation, these are just examples)

#### <span style="color: #a955ed; text-shadow: 3px 3px 8px #4682B4; font-weight: bold; font-size: 1.1em;">Example:</span>



```python
%%js 
let isBirthday = false;
let completedChores = true;
let isRaining = false;

console.log("Is today your birthday? " + isBirthday);  // This will print "Is today your birthday? false"
console.log("Have you completed your chores? " + completedChores);  // This will print "Have you completed your chores? true"
console.log("Is it raining outside? " + isRaining);  // This will print "Is it raining outside? false"
```


    <IPython.core.display.Javascript object>

