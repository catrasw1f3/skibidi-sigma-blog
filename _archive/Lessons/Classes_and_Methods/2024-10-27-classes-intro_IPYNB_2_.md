---
comments: True
layout: post
title: JavaScript Classes & Methods Introduction
description: An introduction to JavaScript Classes & Methods
author: Lucas Masterson
permalink: /csse/javascript/fundamentals/classes/intro/
categories: ['CSSE JavaScript Fundamentals']
---

# Intro to JavaScript Classes & Methods
****

Welcome to Object Oriented Programming (OOP)! The beginning of the end as I'd like to call it. Have fun with Java and C++ in the future... or you can use Rust!

## Defining Classes
Classes in JavaScript are special functions that provide a more convenient and syntactically cleaner way to create objects and deal with inheritance. Just as you can define function expressions and function declarations, a class can be defined in two ways: a class expression or a class declaration.


```python
// Not intended to be run, just to show the syntax

// Declaration
class Rectangle {  
    // The `constructor` method is a special method of a class 
    // for creating and initializing an object instance of that class.
    constructor(height, width) {
        // Here, `this` refers to the object instance. A placeholder,
        // if you will. It is used to access the object's properties.
        this.height = height;
        this.width = width;
    }
}

// Expression; the class is anonymous but assigned to a variable
// Here, we are creating a class object without a name
const Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// Expression; the class has its own name
// Here, we are creating a class object with a name
const Rectangle = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
```

## Class Body
The body of a class is the part contained within the curly braces `{}`. There is where you define class members, like methods and the constructor.

A class element can be characterized by three aspects:
- Kind: Getter, setter, method, or field
- Location: Static or instance
- Visbility: Public or private

These will get their own topic sections later.


## The Constructor Method

The `constructor` method is a special method used to create and initialize an object created within a class. There can only be one special method with the name "constructor" in a class.

For example, you can create instance properties inside the constructor:


```python
// Not intended to be run, just to show the syntax

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}  
```

## Methods

Methods are defined on the initial class instance, and are shared by all children. Methods can be plain functions, async functions (async D:), generator functions, or async (sadge) generator functions.

For example:


```python
%%js

class Rectangle {
    // Constructor
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Getter
    get area() {
        return this.calcArea();
    }

    // Method
    calcArea() {
        return this.height * this.width;
    }

    // Generator
    *getSides() {
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]
  
```


    <IPython.core.display.Javascript object>


So, what's going on here? (Thank god no async)

### Constructor
As we know, the `constructor` method initializes the object. Ok, cool.

### Get
As for the `get` getter method, this is used to get a specific property of the object. The line `return this.calcArea()` calls the `calcArea()` method, which calculates the area of the rectangle it returns it.

### Function
The `calcArea()` function method calculates area of the rectangle using the height and width properties, and returns it.

### Generator
The `*getSides()` generator method allows you to return (or "yield") multiple values lazily, meaning they are produced one at a time, when requested, rather than all at once.

When you call `square.getSides()`, the generator doesn't immediately give you all four values. Instead it returns an iterator. You can then loop over this iterator, requesting one value at a time. By using the [...] spread operator (as in `console.log[...sqaure.getSides()])`), you're converting the iterator into an array containing all the yielded values.

### Breakdown
We first define our class template in the `class Rectangle {}` line, with a few methods. The `constructor` method initializes the rectangle with two parameters: height and width. We then define a `get area() {}` method that returns the result of the `calcArea()` function. This `calcArea()` method multiplies the two properties of the constructed object, height and width to return the area. We have another generator function `*getSides() {}` that yields (one at a time) the values of each side length.

Ohhhhhkay, that was a lot. Now what about the syntax at the bottom?

The line `const square = new Rectangle(10, 10);` constructs an object with width of 10 and height of 10.

We show getting the area by using the `area` method in `square.area` (we run a method on an object) to get 100, which goes through the entire aforementioned process.

As for the `console.log([...square.getSides()]);` statement, this simply uses the [...] spread operator the print out the lengths of the sides as an array.

****


## Popcorn Hack 1

Construct a class `Triangle` that:
- **Constructs** a triangle
- **Gets** the area
- **Returns** the calculated area (method)
- **Genreates** the side lengths of the triangle


```python
%%js

class Triangle {
    // Construct the triangle with base and height here


    // Get the area of the triangle here


    // Calculate the area of the triangle here


    // Generate the sides of the triangle here


}

/*
Uncomment this section once you have implemented the Triangle class

const triangle = new Triangle(10, 5);

console.log(triangle.calcArea()); // 25
console.log(triangle.area); // 25
console.log([...triangle.getSides()]); // [10, 5, 10]
*/
```

## Sources
1. Classes - JavaScript | MDN. MDN Web Docs. 2024 Jul 25. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
2. W3Schools.com. https://www.w3schools.com/js/js_classes.asp

****
*Nothing is as easy as it looks.*
