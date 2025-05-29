---
comments: True
layout: post
title: JavaScript Conditionals Part 2
description: A basic overview of the fundamentals of JavaScript conditionals
permalink: /csse/javascript/fundamentals/conditionals/p2/
categories: ['CSSE JavaScript Fundamentals']
author: Yusuf
---

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center">
    <a href="{{site.baseurl}}/csse/javascript/fundamentals/conditionals/hacks" style="text-decoration: none;">
        <div class="glow-button" style="background: linear-gradient(135deg, #8e44ad, #3498db); color: #ffffff; padding: 15px 30px; border-radius: 10px; font-weight: bold; text-align: center; position: relative; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); transition: transform 0.3s, box-shadow 0.3s;">
            <span style="font-size: 24px; position: relative; z-index: 1; color: #ffffff; text-shadow: 0 0 8px #ffffff, 0 0 16px #8e44ad;">
                Hacks
            </span>
            <span class="glow-effect" style="position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; border-radius: 10px; background: rgba(255, 255, 255, 0.1); opacity: 0; transition: opacity 0.3s;"></span>
        </div>
    </a>
</div>

<style>
    .glow-button {
        position: relative;
        z-index: 1;
    }

    .glow-button:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    }

    .glow-button:hover .glow-effect {
        opacity: 1;
    }
</style>



<style>
body {
    font-family: 'Roboto', sans-serif;
    color: #e0e0e0;
    line-height: 1.8;
    padding: 40px 20px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #121212;
}
h1 {    
    font-family: 'Playfair Display', serif;
    font-size: 2.8em;
    color: #76a9ff;
    margin-bottom: 25px;
    text-align: center;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    border-bottom: 2px solid #76a9ff;
    padding-bottom: 12px;
}
h2, h3, h4 {
    color: #c8c8c8;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
h2 {
    font-size: 1.8em;
    color: #76a9ff;
    margin-bottom: 18px;
    border-bottom: 1px solid #555;
    padding-bottom: 6px;
}
h3 { font-size: 1.6em; margin-bottom: 10px; }
h4 { font-size: 1.4em; margin-bottom: 8px; }
p { font-size: 1.1em; color: #cccccc; margin-bottom: 18px; text-align: justify; }
ul { margin: 15px 0; }
.syntax, .example {
    font-weight: 500;
    color: #e0e0e0;
    font-size: 1.1em;
    margin-top: 20px;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.5);
    background: #1c1c1c;
}
.syntax { border-left: 5px solid #76a9ff; }
.example { border-left: 5px solid #ffd966; }
.syntax code, .example code {
    font-family: 'Courier New', monospace;
    color: #ffd966;
    background-color: #2e2e2e;
    padding: 4px 6px;
    border-radius: 4px;
}
.syntax pre, .example pre {
    background-color: #2e2e2e;
    padding: 10px;
    border-radius: 6px;
    overflow-x: auto;
    white-space: pre-wrap;
    line-height: 1.5;
    margin-top: 8px;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.4);
}
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background: #1a1a1a;
    color: #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
}
th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #333;
}
th { background-color: #333; font-weight: 500; }
td { color: #cccccc; }
</style>


<h1>Lesson on If Statements in JavaScript</h1>

<h2>1. Basic IF Statements</h2>

<h3>What is an If Statement?</h3>
<p>An <em>if statement</em> is a decision-making tool in programming that allows code to run only if a specific condition is true. It makes code responsive to changing inputs or situations.</p>

<div class="syntax">
<strong>Syntax:</strong>
<pre><code>if (condition) {
// code to execute if condition is true
}</code></pre>
</div>

<h3>Example of an IF Statement in JavaScript</h3>
<div class="example">
<strong>JavaScript Example:</strong>
<pre><code>// Prompt the user for their favorite fruit
let fruit = prompt("What's your favorite fruit?");

// If the fruit is "mango," respond with a specific message
if (fruit === "mango") {
console.log("That sounds super yummy!");
}</code></pre>
</div>

<h2>2. Basic If-Else and Else-If Statements</h2>

<h3>What is an If-Else Statement?</h3>
<p>An <em>if-else statement</em> expands on the if statement by adding an alternative code block that executes if the initial condition is false. This allows for more complex decision trees in code.</p>

<div class="syntax">
<strong>Syntax:</strong>
<pre><code>if (condition) {
// code if condition is true
} else {
// code if condition is false
}</code></pre>
</div>

<h3>Example of an IF-ELSE-IF Statement in JavaScript</h3>
<div class="example">
<strong>JavaScript Example:</strong>
<pre><code>// Ask the user for their favorite fruit
let fruit = prompt("What's your favorite fruit?");

// Ensure case-insensitive comparison
if (fruit.toLowerCase() === "mango") {
console.log("That sounds super yummy!");
} else if (fruit.toLowerCase() === "banana") {
console.log("Sounds great!");
} else {
console.log(`Oh, ${fruit} is alright, but mangos are better!`);
}</code></pre>
</div>

<h2>3. Booleans in If Statements</h2>

<h3>Using Booleans with If Statements</h3>
<p>Booleans allow for true/false checks. In this example, we determine if a user’s favorite fruit is available in stock and display a message accordingly.</p>

<div class="example">
<strong>Boolean Example:</strong>
<pre><code>// Check if a fruit is available
let isAvailable = true;

if (isAvailable) {
console.log("Your favorite fruit is available!");
} else {
console.log("Sorry, your favorite fruit is out of stock.");
}</code></pre>
</div>

<h2>4. Using Random Values</h2>

<h3>Using Random Values with If Statements</h3>
<p>Random values create dynamic interactions in a program. In this example, we assign random popularity scores to two fruits and determine which one is more popular.</p>

<div class="example">
<strong>Random Example:</strong>
<pre><code>// Generate random popularity scores for two fruits
let applePopularity = Math.floor(Math.random() * 100) + 1;
let orangePopularity = Math.floor(Math.random() * 100) + 1;

console.log("Apple popularity score:", applePopularity);
console.log("Orange popularity score:", orangePopularity);

if (applePopularity > orangePopularity) {
console.log("Apples are more popular than oranges!");
} else if (applePopularity < orangePopularity) {
console.log("Oranges are more popular than apples!");
} else {
console.log("Both fruits are equally popular!");
}</code></pre>
</div>

<h4>Summary Table of Conditional Statements</h4>
<table>
<tr>
    <th>Statement Type</th>
    <th>Description</th>
    <th>Use Case</th>
</tr>
<tr>
    <td><strong>If Statement</strong></td>
    <td>Executes a block of code if a specified condition is true.</td>
    <td>Used for simple condition checks, such as verifying if a fruit is "mango".</td>
</tr>
<tr>
    <td><strong>If-Else Statement</strong></td>
    <td>Executes one block if the condition is true, and another if it is false.</td>
    <td>Useful for two-way decision-making, like checking if a fruit is available.</td>
</tr>
<tr>
    <td><strong>Else-If Statement</strong></td>
    <td>Checks additional conditions if the first condition is false.</td>
    <td>Used when comparing multiple values, like determining the more popular fruit.</td>
</tr>
</table>

<h4>Summary</h4>
<p>This lesson covers various ways to use conditional statements in JavaScript. Each structure serves a unique purpose in decision-making, from simple checks with <em>if</em> statements to multiple conditions with <em>switch</em> statements.</p>



<script src="https://utteranc.es/client.js"
        repo="YusufK-25/yusuf_2025"
        issue-term="title"
        label="blogpost-comment"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>
