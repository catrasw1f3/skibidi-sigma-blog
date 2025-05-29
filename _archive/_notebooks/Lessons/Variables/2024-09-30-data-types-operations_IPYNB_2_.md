---
comments: True
layout: post
title: JavaScript Data Types
description: Learn about the different data types in JavaScript.
categories: ['JavaScript Fundamentals']
courses: {'csse': {'week': 4}}
type: ccc
---

### Primitive Data Types

In game development, understanding the different data types in JavaScript is crucial for managing the various elements and attributes of your game. Primitive data types include numbers, strings, booleans, undefined, null, symbols, and BigInts. Reference data types include objects, arrays, and functions. Each type plays a unique role in creating a dynamic and interactive gaming experience.

1. **Number**:
   - Represents numerical values, health and timeInMilliSeconds

2. **String**:
   - Represents text, such as the user's name or keypress.

3. **Boolean**:
   - Represents true/false values, such as isAlive.

4. **Undefined**:
   - Represents a variable that has been declared but not yet assigned a value.

5. **Null**:
   - Represents the intentional absence of any object value, such as an empty inventory slot.

6. **Symbol**:
   - Represents a unique and immutable value, often used as unique identifiers for game objects.

7. **BigInt**:
   - Represents very large integers, such as the total number of points accumulated over many games.

### Reference Data Types

1. **Object**:
   - Represents a collection of key-value pairs, such as a player's attributes or game settings.

2. **Array**:
   - Represents an ordered collection of values, such as a list of high scores or inventory items.

3. **Function**:
   - Represents a block of code designed to perform a specific task, such as attacking an enemy or saving the game.


```python
%%js

/* Primitive Data Types
These are data types that store a single value.
*/

// Number: Represents numerical values, such as health and speed
let health = 100; // Integer
let playerSpeed = 5.75; // Float representing the player's speed

console.log("Health (Number):", health, "Type:", typeof health);
console.log("Player Speed (Number):", playerSpeed, "Type:", typeof playerSpeed);

// String: Represents text, such as the user's name or keypress
let userName = "Hero123"; // User name
let keyPress = 'a'; // Keypress

console.log("User Name (String):", userName, "Type:", typeof userName);
console.log("Key Press (String):", keyPress, "Type:", typeof keyPress);

// Compare single character to its ASCII value
let asciiValue = keyPress.charCodeAt(0);
console.log("ASCII Value of Key Press:", asciiValue, "Type:", typeof asciiValue);
console.log("Is Key Press 'a' (ASCII 97)?", asciiValue === 97);

// Boolean: Represents true/false values, such as isAlive
let isAlive = true;

console.log("Is Alive (Boolean):", isAlive, "Type:", typeof isAlive);

// Undefined: Represents a variable that has been declared but not yet assigned a value
let questReward;

console.log("Quest Reward (Undefined):", questReward, "Type:", typeof questReward);

// Null: Represents the intentional absence of any object value, such as an empty inventory slot
let inventorySlot = null;

console.log("Inventory Slot (Null):", inventorySlot, "Type:", typeof inventorySlot);

// Symbol: Represents a unique and immutable value, often used as unique identifiers for game objects
let uniqueID = Symbol('playerID');

console.log("Unique ID (Symbol):", uniqueID, "Type:", typeof uniqueID);

// BigInt: Represents very large integers, such as the total time played in milliseconds
let totalTimePlayed = 1234567890123456789012345678901234567890n;

console.log("Total Time Played (BigInt):", totalTimePlayed, "Type:", typeof totalTimePlayed);

/* Reference Data Types
These are data types that store references to memory locations.
*/

// Object: Represents a collection of key-value pairs, such as player attributes or game settings
let playerAttributes = {
  name: "Hero123",
  health: 100,
  mana: 50
};

console.log("Player Attributes (Object):", playerAttributes, "Type:", typeof playerAttributes);

// Array: Represents an ordered collection of values, such as a list of high scores or inventory items
let highScores = [1500, 1200, 900, 600, 300];

console.log("High Scores (Array):", highScores, "Type:", typeof highScores);

// Function: Represents a block of code designed to perform a specific task, such as attacking an enemy or saving the game
function attackEnemy() {
  console.log("Enemy attacked!");
}

console.log("Attack Enemy (Function):", attackEnemy, "Type:", typeof attackEnemy);
attackEnemy();
```


    <IPython.core.display.Javascript object>


### Data Type Operations

In JavaScript, we will be interacting with data and data types. Data types have operators that allow you to alter the data types.

### Assignment Operators and Math Operators

In this example height is being assigned the value of a calculation in relation to conventional screen sizes. These operators are straight forward (`=`, `+`, `-`, `*`, `/`)

```js
let width = 1920;
let height = Math.round(width * 9 / 16);
```

### Compound Assignment

These are shorthand for common operations and are specified as follows. Here is an example of one compound assignment. Make a code cell and try some more (`+=`, `*=`, `-=`, `\=`)

```js
let number = 100;
number += 1;  // short for number = number + 1;
```

### Concatenation

Concatenation is used to join two or more elements together. This is the same as the plus (`+`) operator. It looks like math, but once a string gets involved, it turns into concatenation.

```js
// Simple concatenation
let blockSize = 50;
block.style.width = blockSize + "px";
```

```js
/// Math at first and then concatenation following PEMDAS
block.style.height = blockSize * 9 / 16 + "px";
```

### Popcorn Hack 1

Make a code cell that show usage of compound assignment in a Data Type Operations.
