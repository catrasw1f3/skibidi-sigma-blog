---
comments: True
layout: post
title: JavaScript Conditionals Hacks
description: conditionals hacks
permalink: /csse/javascript/fundamentals/conditionals/hacks
categories: ['CSSE JavaScript Fundamentals']
author: Shay,Yusuf,William
---

#### <span style="color: #ADD8E6; text-shadow: 3px 3px 8px #4682B4; font-weight: bold; font-size: 2em;">Popcorn Hacks:</span>
Develop a basic combat system that allows characters to engage in battles with enemies. This will help you practice using functions, conditionals, and basic game mechanics in JavaScript.

---
##### <span style="color: #FF6347; text-shadow: 2px 2px 6px #8B0000; font-weight: bold; font-size: 1.5em;">Popcorn Hack Part 1 - 1: Using <code>initializeData</code> Function</span> 

1. Add `speed` to the <code>initializeData(data = null)</code> function and give it a default value.
2. Add `seed` to the HTML output.
3. Add `speed` to the JSON data.
4. Test calling <code>initializeData</code> with no argument, and then using a `data` JSON object as an argument.

##### <span style="color: #FF6347; text-shadow: 2px 2px 6px #8B0000; font-weight: bold; font-size: 1.5em;">Popcorn Hack Part 1 - 2: Adding IJKL Key Conditions in <code>handleKeyDown</code></span> 

1. Add a `case` statement for each of the IJKL keys in the `handleKeyDown({ keyCode })` switch statement.
2. Send the key code for each IJKL key to the <code>gameObject.handleKeyDown</code> method.
3. Use <code>console.log()</code> to output `gameObject`.

---

##### <span style="color: #FF6347; text-shadow: 2px 2px 6px #8B0000; font-weight: bold; font-size: 1.5em;">Popcorn Hack 2: Creating a Simple Attack System</span>
1. Add a <code>boolean</code> variable named <code>canAttack</code>, and set it to <code>false</code>.
2. Use an <code>if</code> statement to check if the player can attack.
3. If <code>canAttack</code> is <code>false</code>, output "Can't attack."
4. Use <code>Math.random()</code> to determine if the player is allowed to attack. (Tip: Use ChatGPT for help with <code>Math.random()</code> if needed!)
5. This will pick a random number to decide if the attack can happen.
6. Use <code>console.log()</code> for all outputs.

---

##### <span style="color: #FF6347; text-shadow: 2px 2px 6px #8B0000; font-weight: bold; font-size: 1.5em;">Popcorn Hack 3: Level Requirement Check</span>
1. Use the <code>ternary operator</code> to create an output if the player meets the level requirements.
2. If not, output a message telling the player they are under-leveled.
3. Use <code>console.log()</code> to print your output.

<!-- Homework Section with Enhanced Glowing Title -->

### <span style="color: #78C0E0; text-shadow: 0 0 10px #1E3D59, 0 0 20px #1E3D59; font-weight: bold; font-size: 2em;">Homework:</span>

#### <span style="color: #FFA07A; text-shadow: 0 0 8px #3C3C3C, 0 0 15px #3C3C3C; font-weight: bold; font-size: 1.5em;">Objectives</span>

<span style="font-size: 1.2em; color: #E5E5E5; line-height: 1.8;">
  <br><strong style="color: #FFD700;">Option 1:</strong> <span style="color: #C0C0C0;">Create a simple combat system.</span>
  <ul style="color: #D3D3D3; margin-left: 20px; list-style-type: circle;">
    <li>Allow characters to fight enemies.</li>
    <li>Use basic functions and conditionals in JavaScript.</li>
    <li>Focus on making it easy to understand how battles work.</li>
  </ul>

  <br>
  <strong style="color: #FFD700;">Option 2:</strong> <span style="color: #C0C0C0;">Make a dialogue system for your NPC (Non-Player Character).</span>
  <ul style="color: #D3D3D3; margin-left: 20px; list-style-type: circle;">
    <li>Use the <code style="color: #7FFFD4;">prompt()</code> function to ask the player for a response (choose a number from 1 to 4).</li>
    <li>This dialogue should appear when the player gets close to the NPC and presses a button.</li>
  </ul>
</span>

### <span style="color: #FFA07A; text-shadow: 1px 1px 6px #3C3C3C; font-weight: bold;">Additional Tips:</span>
- <span style="color: #FFD700;">**For Option 1:**</span>
  <ul style="color: #D3D3D3; margin-left: 20px; list-style-type: square;">
    <li>Start by writing down what the characters and enemies will be. Create simple names and attributes (like health).</li>
    <li>Use <code style="color: #7FFFD4;">console.log()</code> to print out what's happening at each step. This will help you understand the flow of your code.</li>
    <li>Look for example code online to see how others have created combat systems. Don't be afraid to borrow ideas!</li>
  </ul>

- <span style="color: #FFD700;">**For Option 2:**</span>
  <ul style="color: #D3D3D3; margin-left: 20px; list-style-type: square;">
    <li>Plan out the dialogue options before you start coding. Write them down in a list.</li>
    <li>Use comments in your code to remind yourself what each part does. For example, <code style="color: #7FFFD4;">// Ask the player for a response</code>.</li>
    <li>Test your code frequently. After writing a few lines, run it to see if it works before adding more.</li>
  </ul>
