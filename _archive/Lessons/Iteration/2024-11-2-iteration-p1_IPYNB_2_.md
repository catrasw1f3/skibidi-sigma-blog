---
comments: True
layout: post
title: Iteration For Loops
description: An intro to data abstraction
permalink: /csse/javascript/fundamentals/iteration/p1
categories: ['CSSE JavaScript Fundamentals']
author: Kian Zhu
---

# What is for loops

A for loop is a control flow statement that allows you to execute a block of code a certain number of times. It's particularly useful when you know in advance how many times you want to iterate through a block of code.

## Syntax of a for Loop
The syntax of a for loop consists of three main parts:


```python
%%js 
for (initialization; condition; increment) {
    // Code to be executed on each iteration
}

```

Initialization: This sets up a counter variable and runs once at the beginning of the loop.

Condition: Before each iteration, the loop checks this condition. If it's true, the loop continues; if false, the loop ends.

Increment: This updates the counter variable after each iteration.

### Example of a for Loop


```python
%%js 
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

```

Explanation:

Initialization: let i = 1 sets the counter variable i to 1.

Condition: i <= 5 checks if i is less than or equal to 5.

Increment: i++ increases i by 1 after each iteration.

## Output
1

2

3

4

5


### Advanced Usage: Looping Through Arrays
You can use a for loop to iterate over elements in an array. Here’s an example:


```python
%%js 
let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

```

### output
apple

banana

cherry


## popcorn 1
Calculate the Sum
 Write a for loop that calculates the sum of all even numbers from 1 to 20. Output the result to the console.

**Hint**: Any number divided by two results in a remainder of 1 for odd numbers and 0 for even numbers. The modulo operator (`%`) helps you determine this condition. The statement `if (n % 2 == 0)` would be true when `n` is even.
