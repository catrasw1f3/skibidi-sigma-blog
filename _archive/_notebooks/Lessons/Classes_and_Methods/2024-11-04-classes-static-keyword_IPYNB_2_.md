---
comments: True
layout: post
title: JavaScript Classes and the Static Keyword
description: An introduction to JavaScript Static Variables and Methods
author: Ethan Fu & Lucas Masterson (reviewer)
permalink: /csse/javascript/fundamentals/classes/statics/
categories: ['CSSE JavaScript Fundamentals']
---

# Static Variables
****

The keyword ``static`` can be used to define static methods and properties, which apply to entire classes rather than its instances (AKA your objects). Think of these as global variables for classes. Below is an example (taken from online) of how static methods and properties work.




```python
%%js

class ClassWithStaticMethod {
  static staticProperty = 'someValue';
  static staticMethod() {
    return 'static method has been called.';
  }
  static {
    console.log('Class static initialization block called');
  }
}

console.log(ClassWithStaticMethod.staticProperty);
// Expected output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// Expected output: "static method has been called."
```


    <IPython.core.display.Javascript object>


## Why use static variables?
****

Static variables can be used for multiple things, but two of the most common use cases are counting the number of instances of a class object there are and defining global constants throughout a class.

### Example 1

Below is an example of counting class instances using static variables:


```python
%%js

class User {
  static instanceCount = 0; //static property, starts with a value of zero

  constructor(name) {
    this.name = name;
    User.instanceCount++; //increments the instanceCount when a new user is entered
  }

  static getInstanceCount() {
    return User.instanceCount; //static method, returns the updated instanceCount variable, which has now been incremented
  }
}

const user1 = new User("Ethan");
const user2 = new User("Lucas");
const user3 = new User("Alex")

console.log("Number of users: " + User.getInstanceCount()); // Expected output: "Number of users: 3"
```


    <IPython.core.display.Javascript object>


#### Explanation

We use instanceCount to start the inital value of the amount of objects there are, then we increment that value each time an object is created using 'User.instanceCount++'. Finally, we use a static method to return the updated instanceCount so it can be updated again later on.

If did not use static variables, the value of instanceCount would be "reset" each time we made a new object, so we would not be able to count them.

### Example 2

Below is an example of creating and using a global constant for multiple objects using static variables:


```python
%%js

class Product {
    static TAX_RATE = 0.10; // Static variable for tax rate (10%)
  
    constructor(name, price) {
      this.name = name;      // instance property
      this.price = price;    // instance property
    }
  
    // Instance method to calculate the price including tax
    calculatePriceWithTax() {
      return this.price * (1 + Product.TAX_RATE);
    }
  }
  
  // Creating individual product instances
  const product1 = new Product("Laptop", 1200);
  const product2 = new Product("Smartphone", 800);
  
  console.log("Name of product 1: " + product1.name); // Output: Laptop
  console.log("Name of product 2: " + product2.name); // Output: Smartphone

  // Using an instance method to calculate prices with tax
  console.log("Product 1 price pre-tax: " + product1.price); // Output: 1200
  console.log("Product 2 price pre-tax: " + product2.price); // Output: 800

  // Using an instance method to calculate prices with tax
  console.log("Product 1 price with tax: " + product1.calculatePriceWithTax()); // Output: 1320 (1200 + 10% tax)
  console.log("Product 2 price with tax: " + product2.calculatePriceWithTax()); // Output: 880 (800 + 10% tax)
  
  // Accessing the static variable directly from the class
  console.log("Tax rate: " + Product.TAX_RATE); // Output: 0.10
```


    <IPython.core.display.Javascript object>


### Explanation

The product class contains a static property TAX_RATE that is assigned a value of 0.10, a constructor that defines the properties of a created object from the given class, and a static method that applies the tax on the price value of the object to get the final price.

Here, static variables are given a certain value, then it is applied to all instances of the class. This makes the code simpler and more organized than they would have been otherwise.
****

## Popcorn Hack 3

Try to use static variables to both count the number of class instances you have and apply a multiplier on 


```python
%%js

class Value {
  static MULTIPLIER = 1.5; // Static variable for tax rate (8%)
  static totalNumber = 0; // Static variable to track the total number of products

  constructor(value) {
    this.value = value;     // instance property
    // TODO: Increment total product count every time a new product is created
  }

  // Instance method to calculate the price including tax
  calculateValueWithMultiplier() {
    // TODO: return Value * MULTIPLIER
  }

  // Static method to get the total number of products
  static getTotalNumbers() {
    // TODO: return totalNumber
  }
}

// Creating individual product instances
const value1 = new Value(5);
const value2 = new Value(10)

console.log("Value 1: " + value1.value);
console.log("Value 2: " + value2.value);

// Using an instance method to calculate prices with tax
console.log("Value 1 with multiplier: " + value1.calculateValueWithMultiplier()); // Output: 1296 (1200 + 8% tax)
console.log("Value 2 with multiplier: " + value2.calculateValueWithMultiplier()); // Output: 864 (800 + 8% tax)

// Accessing the static variable directly from the class
console.log("Multiplier: " + Value.MULTIPLIER); // Output: 1.5

// Accessing the static method to get the total number of products
console.log("Total number of values: " + Value.getTotalNumbers()); // Output: 2
```


    <IPython.core.display.Javascript object>


****

*If there is a possibility of several things going wrong, the one that will cause the most damage will be the one to go wrong. Corollary: If there is a worse time for something to go wrong, it will happen then.*
