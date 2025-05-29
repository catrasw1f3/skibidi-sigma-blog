---
comments: True
layout: post
title: JavaScript Variables
description: Variables in JavaScript are used to store data.
permalink: /csse/javascript/fundamentals/variables/p1
type: collab
courses: {'csse': {'week': 4}}
categories: ['CSSE JavaScript Fundamentals']
---

# <span style="color: lavender; text-shadow: 2px 2px 5px lavender;">Variables in JavaScript</span>

 Taught by Aria, Cason, and Ethan



## <span style="color: lavender; text-shadow: 2px 2px 5px lavender;">What are variables in JavaScript?</span>
Variables in JavaScript are used to store data that can be referenced and manipulated in a program. They act as containers for values and can hold different types of data, such as numbers, strings, objects, and more.

- Variables are used to simplify code


The three types of keywords for a variable declaration in JavaScript are
 var, let, and const. 
 
 **NOTE:** Var is an outdated keyword in Javascript. 


### <span style="color: orange; text-shadow: 2px 2px 5px orange;">Creating variables</span>

Variables can be created and assigned  values by using the assignment operator "="


### <span style="color: orange; text-shadow: 2px 2px 5px orange;">Variable naming</span>

- **Camel Case (camelCase):** Commonly used in JavaScript, Java, and C#. Example: `myVariableName`

- **Pascal Case (PascalCase):** Often used in C#, and for class names in many languages. Example: `MyVariableName`

- **Snake Case (snake_case):** Frequently used in Python and Ruby. Example: `my_variable_name`

### <span style="color: green; text-shadow: 1px 1px 2.5px ;">Example:</span>


```javascript
%%javascript

const userName = "Mario"; 
let favFood = "spaghetti";
const favSport = "kart racing";

console.log("Hello! You can call me " + userName); //This will print "Hello! You can call me Mario"
console.log("I LOVE eating " + favFood); //This will print "I LOVE eating Spaghetti"
console.log("My favorite sport is " + favSport); //This will print "My favorite sport is kart racing"
```


    <IPython.core.display.Javascript object>


- As you can see, because this is in javascript, camelCase is being used

- Once a variable is created, it may be used throughout the entire program

*Here it is in use, open your console to see the output!*

## <span style="color: lavender; text-shadow: 2px 2px 5px lavender;"> Variable Types

### Data Types in JavaScript:
- Primitive Data Types:
  - `Number` 
  - `String`
  - `Boolean`
  - `Null`
  - `Undefined`
  - `Symbol`
- Non-primitive Data Types:
  - `Object`
  - `Array`
  - `Function`


### <span style="color: orange; text-shadow: 2px 2px 5px orange;">Integer Variables in JavaScript</span>

Integer variables in JavaScript are used to store whole numbers without any decimal points. They can be positive, negative, or zero. In JavaScript, integers are typically represented using the `number` data type.

### <span style="color: green; text-shadow: 1px 1px 2.5px ;">Example:</span>



```python
%%js

const a = 25; //This is a number variable
let b = 10; //This is a number variable
let sum = a + b; //This is a number variable

console.log(a); //This will print 25
console.log(b); //This will print 10
console.log(sum); //This will print 35
console.log(a * b); //This will print 250
```


    <IPython.core.display.Javascript object>


### <span style="color: orange; text-shadow: 2px 2px 5px orange;">Strings</span>

When phrases or sentences are assigned a variable name, they can be referenced later.

### <span style="color: green; text-shadow: 1px 1px 2.5px ;">Example:</span>


```python
%%js


let question = "How much do you like this lesson?"; //This is a string variable
let answer = "a lot!"; //This is a string variable

console.log(question); //This will print "How much do you like this lesson?"
console.log(answer); //This will print "a lot!"

```



<script>
let question = "How much do you like this lesson?"; //This is a string variable
let answer = "a lot!"; //This is a string variable

console.log(question); //This will print "How much do you like this lesson?"
(answer); //This will print "a lot!"
</script>



## <span style="color: pink; text-shadow: 2px 2px 5px pink;">Popcorn Hack #1</span>

### Open the notebook with the Hacks in it, "2024-10-29-variables_popcorn_hax.ipynb", and complete the first popcorn hack

### <span style="color: orange; text-shadow: 2px 2px 5px orange;">Booleans</span>

Booleans in JavaScript are a fundamental data type that can hold one of two values: true or false. They are often used in conditional statements to control the flow of a program.

### <span style="color: green; text-shadow: 1px 1px 2.5px ;">Example:</span>


```python
%%js

const isCoder = true; //This is a boolean variable
const isDesigner = false; //This is a boolean variable

console.log(isCoder); //This will print true
console.log(isDesigner); //This will print false
```


    <IPython.core.display.Javascript object>


### <span style="color: orange; text-shadow: 2px 2px 5px orange;">Nulls</span>

The `null` value signifies the deliberate absence of any object value. It is commonly used to indicate that a variable should not hold any value.

### <span style="color: green; text-shadow: 1px 1px 2.5px ;">Example:</span>


```python
%%js 

let myBankBalance = null; //This is a null variable

console.log(myBankBalance); //This will print null 
```


    <IPython.core.display.Javascript object>


### <span style="color: orange; text-shadow: 2px 2px 5px orange;">Undefined</span>

A variable in JavaScript that has been declared but not assigned a value will have the value `undefined`.

### <span style="color: green; text-shadow: 1px 1px 2.5px ;">Example:</span>


```python
%%js

let myHeight; //This is an undefined variable

console.log(myHeight); //This will print undefined
```


    <IPython.core.display.Javascript object>


### <span style="color: orange; text-shadow: 2px 2px 5px orange;">Symbol</span>

Symbols are unique and immutable data types primarily used as object property keys.

### <span style="color: green; text-shadow: 1px 1px 2.5px ;">Example:</span>


```python
%%js 

let myRPG = Symbol("Pokemon"); //This is a symbol variable

console.log(myRPG); //This will print Symbol(Pokemon)
```


    <IPython.core.display.Javascript object>


## <span style="color: pink; text-shadow: 2px 2px 5px pink;">Popcorn Hack #2</span>

### Open the notebook with the Hacks in it, "2024-10-29-variables_popcorn_hax.ipynb", and complete the second popcorn hack

### <span style="color: orange; text-shadow: 2px 2px 5px orange;">Arrays and Objects</span>

**Arrays**

Arrays are data structures that allow you to store multiple values in a single variable. Each value in an array is called an element, and arrays can hold values of any data type.

**Objects**

Objects are collections of key-value pairs, where each key (also known as a property) is associated with a value. Objects are a fundamental data type in JavaScript and are similar to dictionaries in Python. They are also referred to as **JSON Objects**.

**Functions**

 a block of code designed to perform a particular task. Functions are fundamental building blocks in JavaScript and allow you to encapsulate code for reuse, modularity, and organization

### <span style="color: green; text-shadow: 1px 1px 2.5px ;">Example:</span>


```python
%%js 
//This is an array variable
let characterPosition = ["1 fish", "2 fish", "red fish", "blue fish"]; //This is an array variable
 console.log(characterPosition); //This will print ["1 fish", "2 fish", "red fish", "blue fish"]

 //This is an object variable
 let character = 
    {name: "Mario", 
        age: 35, 
        height: 1.55, 
        weight: 70
    }; //This is an object variable
    console.log(character); //This will print {name: "Mario", age: 35, height: 1.55, weight: 70}

    //This is a function variable
    function request(song) {
        return "Now playing " + songName + " by " + artistName;
    }

let songName = "She"; //This is a string variable
let artistName = "Tyler the Creator and Frank Ocean"; //This is a string variable

    console.log(request("Despacito")); //This will print "Now playing Despacito by Luis Fonsi"
```


    <IPython.core.display.Javascript object>

