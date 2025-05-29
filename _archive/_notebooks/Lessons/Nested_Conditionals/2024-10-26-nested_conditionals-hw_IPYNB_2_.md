---
comments: True
layout: post
title: JavaScript Nested Conditionals Homework
description: Nested conditionals with booleans in Javascript are condition statements placed inside condition statements, allowing multiple layers of decision making.
author: Avantika Chittari
permalink: /csse/javascript/fundamentals/nested-conditionals/hw
categories: ['CSSE JavaScript Fundamentals']
---

<h2><span style="font-family: Ariel; color:#94c4ff">Homework - Nested Conditionals</span></h2>

## Objective:
Write a JavaScript program that randomly assigns a student grade level (from 0 to 12) and outputs the school level the student would be in (kindergarten, elementary, middle, or high school). The program also identifies if the student is in their last year at their current school level.

## Instructions:

1. Open a JavaScript file (e.g., schoolLevel.js).

2. Generate a Random Grade:
    - Use Math.random() to generate a random number between 0 to 1 and multiply it by 12, which will represent the student’s grade.
    - Round the number to the nearest whole number using Math.round().
    - Store this number in a variable called grade.
    - Print the grade to the console with a message such as, "You are in grade ___."

3. Determine the School Level:
    Use if statements to check the value of grade and print which school level the student is in:
    - Kindergarten for grade 0.
    - Elementary School for grades 1–5.
    - Middle School for grades 6–8.
    - High School for grades 9–12.

4. For each school level, add a nested additional check to see if the student is in their final year. If all is done correctly, it will print a message like this, “You will graduate this year from _____.”

5. Sample Outputs:
    - Sample 1:
        - "You are in grade 5."
        - "You will graduate this year from elementary school"
    - Sample 2:
        - "You are in grade 3."

Extra information:
- Booleans are a data type that can only have two different values - True or Flase. You can use boolean flag to identify if student is in final year.
- Random generates random values with unpredictable results, usually within a specified range such as 0-1
