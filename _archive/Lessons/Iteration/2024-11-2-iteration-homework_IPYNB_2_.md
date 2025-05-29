---
comments: True
layout: post
title: Iteration Homework
description: An intro to data abstraction
permalink: /csse/javascript/fundamentals/iteration/hw
categories: ['CSSE JavaScript Fundamentals']
author: Kian Zhu, Michael Xu and Srinaga Pillutla
---

## Homework Assignment: for Loop Challenge
Task: Create a program that does the following:

Initialize an array with the names of five of your favorite movies.
Use a for loop to iterate through the array and print each movie name to the console.
After printing all movie names, print a message indicating how many movies you listed.

# **Homework**

Create a **3 by 3, 2D list** that represents a **tictactoe board**.
Use **"X"** for X, **"O"** for O, and **None** for empty tiles.

Ex. board = [["X","None","O"],  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;["X","O","None"],  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;["O","None","X"]]

Iterate over the board and **identify whether it is player X's or player O's turn.**

**Hint**: count the number of moves(non-None). (X goes first)

**Optional**: use console.error() to report an error if the board is illegal (ex. 7 "X"s and 2 "O"s)

## H.W application of While Loops. 

Create the Outer Loop:

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
