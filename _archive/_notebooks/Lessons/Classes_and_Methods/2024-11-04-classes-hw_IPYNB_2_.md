---
comments: True
layout: post
title: JavaScript Classes & Methods Homework
description: The JavaScript Classes & Methods Homework assignment for the JavaScript Fundamentals course.
author: Lucas Masterson
permalink: /csse/javascript/fundamentals/classes/hw/
categories: ['CSSE JavaScript Fundamentals']
---

# Classes & Methods Homework
****

## Homework!

As you read through this, notice the new content introduced. We encourage you to do your own research (this can be Google, ChatGPT, documentation, etc.). Here, we introduce the `_` property (memory safety), `extends` keyword, and `super()` method.

To complete the homework, implement the `TODO:` comments. The example usage should guide you and work if all implementation is done correctly. Have fun! 

*If anything simply cannot go wrong, it will anyway.*


```python
%%js

class Aircraft {
    // Constructor
    constructor(model, capacity, range) {
        this._model = model; // _model is a convention to indicate that it's a private property
        this._capacity = capacity; // _capacity is a convention to indicate that it's a private property
        this._range = range; // _range is a convention to indicate that it's a private property
    }

    // Getter for model
    get model() {
        return this._model;
    }

    // Setter for model
    set model(newModel) {
        this._model = newModel;
    }

    // Getter for capacity
    get capacity() {
        return this._capacity;
    }

    // Setter for capacity
    set capacity(newCapacity) {
        this._capacity = newCapacity;
    }

    // Getter for range
    get range() {
        // TODO: get the range
    }

    // Setter for range
    set range(newRange) {
        // TODO: set the range
    }

    // Method to display aircraft details
    displayDetails() {
        // TODO: display the details (model, capacity, range)
    }

    // Static method to compare range
    static compareRange(aircraft1, aircraft2) {
        return aircraft1.range - aircraft2.range;
    }
}

// Example usage
let boeing = new Aircraft('Boeing 747', 416, 13800);
let airbus = new Aircraft('Airbus A380', 853, 15700);

console.log(boeing.displayDetails());
console.log(airbus.displayDetails());
console.log(`Range difference: ${Aircraft.compareRange(boeing, airbus)} km`);

// New content in the HW! Lo and behold, the FighterJet class! 
// For 1) do research. What does the extend keyword do in JavaScript?
// Here's a quick rundown if you're in a hurry: 
// the extends keyword creates a child class (FighterJet) that inherits from a parent class (Aircraft).
class FighterJet extends Aircraft {
    constructor(model, capacity, range, speed) {
        super(model, capacity, range); // We call the parent class constructor with super
        this._speed = speed;
    }

    // TODO: Getter for speed
    // Remember to use the _speed property for memory safety

    // TODO: Setter for speed
    // Remember to use the _speed property and add a function paramater.

    // TODO: Method to display fighter jet details (model, capacity, range, speed)
}

// Example usage
let f16 = new FighterJet('F-16', 1, 4220, 2400);
let f22 = new FighterJet('F-22', 1, 2960, 2410);

console.log(f16.displayDetails());
console.log(f22.displayDetails());
console.log(`Range difference: ${Aircraft.compareRange(f16, f22)} km`);
```


    <IPython.core.display.Javascript object>


****

*If you perceive that there are four possible ways in which a procedure can go wrong, and circumvent these, then a fifth way, unprepared for, will promptly develop.*

*You have no purpose because you fear to seek one. That fear is your failure. Your fear brings you pain. We know pain. Our purpose is its end.*
