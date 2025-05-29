---
comments: True
layout: post
title: JavaScript Methods
description: An in-depth look at JavaScript methods.
author: Alex Van Linge & Lucas Masterson (reviewer)
permalink: /csse/javascript/fundamentals/classes/methods/
categories: ['CSSE JavaScript Fundamentals']
---

# Methods In Depth 
****

Now that we have some of the basics out of the way, now it is time to go into methods in greater detail and depth than what was mentioned in the intro.

## Defining Methods 
Methods in JavaScript are essentially functions inside of objects. To refresh your memory, objects are anything with Key-Value Pairs inside of them (ex: Name: "Alex"), and functions are blocks of code that perform specific tasks or actions, like console.log.

### Here is an example of a method.


```python
%%js

class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    // Method to make the dog bark
    bark() {
        console.log(`${this.name} says Woof!`);
    }
}

// Creating an instance of the Dog class
let dog = new Dog("Buddy", "Golden Retriever");

// Calling the method
dog.bark(); // Output: "Buddy says Woof!"
```


    <IPython.core.display.Javascript object>


## Accessor Methods

A variant of methods that can be particularly useful in many scenarios are `Accessor Methods`. Accessor methods are functions defined within an object that allow you to retrieve (access) the values of the object's properties without modifying them. 

Accessor methods make debugging code much easier and just make the code as a whole more cohesive and consistent.



```python
%%js

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    // Accessor method to get the title of the book
    getTitle() {
        return this.title; // Returns the value of the 'title' property
    }

    // Accessor method to get the author of the book
    getAuthor() {
        return this.author; // Returns the value of the 'author' property
    }
}

// Creating an instance of the Book class
let book = new Book("1984", "George Orwell");

// Using the accessor methods
console.log(book.getTitle());  // Output: "1984"
console.log(book.getAuthor()); // Output: "George Orwell"
```


    <IPython.core.display.Javascript object>


## Mutator Methods 

`Mutator Methods` are methods that allow you to modify (or mutate) the values of the object's properties. Unlike accessor methods, which are used to retrieve values, mutator methods are focused on changing the internal state of an object.

Mutator methods are practically a necessity when it comes to changing an object's properties, and they not only are consistent and great for debugging, but they also make it easier if you want to change properties any further as you only have to do so from the mutator method and not every other access point in the code.




```python
%%js 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Mutator method to set the name
    setName(newName) {
        this.name = newName; // Update the value of the 'name' property
    }

    // Mutator method to set the age
    setAge(newAge) {
        if (newAge >= 0) { // Validate the age
            this.age = newAge; // Update the value of the 'age' property
        } else {
            console.log("Please enter a valid age.");
        }
    }

    // Accessor method to get the name
    getName() {
        return this.name;
    }

    // Accessor method to get the age
    getAge() {
        return this.age;
    }
}

// Creating an instance of the Person class
let person = new Person("Alice", 30);

// Using the mutator methods
person.setName("Bob"); // Change the name to "Bob"
person.setAge(25);     // Change the age to 25
console.log(person.getName()); // Output: "Bob"
console.log(person.getAge());  // Output: 25

// Trying to set an invalid age
// person.setAge(-5);  // Output: "Please enter a valid age."
```

## Popcorn Hack Time!! (yay) 

For the popcorn hack, use this code cell below and create an object that must include these three things 

    - Four Key-Value Pairs that at least include your name, age, and two others of your choosing
    - Accessor methods (At least 2)
    - Mutator methods (At least 2 as well) 
    


```python
%%js 

// Have Fun!

class Person {
    // Define Key-Value Pairs


    // Methods of choosing can go here


    // Methods of choosing go here


}

// Outputs can go here 
// Set 1
// Set 2
// Get 1
// Get 2

// Test invalid input
```



****

## Sources
1. Classes - JavaScript | MDN. MDN Web Docs. 2024 Jul 25. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
2. W3Schools.com. https://www.w3schools.com/js/js_classes.asp

****
*Building The Future And Keeping The Past Alive Are One In The Same Thing.*
