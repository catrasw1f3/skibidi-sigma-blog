---
comments: True
layout: post
title: Iteration Nested Loops
description: An intro to data abstraction
permalink: /csse/javascript/fundamentals/iteration/p2
categories: ['CSSE JavaScript Fundamentals']
author: Michael Xu
---

# **For loops**

For loops can also be used to iterate through **arrays** and **objects**

#### Recall using for loops


```python
%%js

const fruits = ['apple','bananas','cherries','durian'];

for (let i = 0; i < fruits.length; i++){
    console.log(i);          // print the indices
    console.log(fruits[i]); // print the elements
}
```

**output:**

0  
apple  
1  
bananas  
2  
cherries  
3  
durian

We can achieve the same result using the keyword **of** to iterate over arrays


```python
%%js

const fruits = ['apple','bananas','cherries','durian'];

for (let fruit of fruits) { //iterates through each element in the fruits array
    console.log(fruit); //prints each element seperately
}
```

**output:**

apple  
bananas  
cherries  
durian

### Objects

for loops can also be used to iterate **objects** over each **key** and its **value**


```python
%%js 

const personInfo = { // Define an object
    name: "Alex",
    age: 30,
    city: "San Diego",
    occupation: "Software Engineer"
};

for (let key in personInfo) { // Notice we are using for... in... instead of for... of...
    console.log(key + ": " + personInfo[key]);
}
```

#### **in**:
Checks for property existence in objects and is used in **for...in** loops to iterate over property keys.
#### **of**:
Iterates over iterable objects (like arrays) and is used in **for...of** loops to access values directly.

# **Nested Loops**

Nested loops are similar to nested conditions with for loops within other for loops

#### Example:


```python
%%js

const matrix = [ // A 2D array
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let row of matrix) { 
    for (let column of row) { 
        console.log(column); // Output: 1 to 9
    }
}
```

#### We can also do mix conditions with for loops


```python
%%js

const numbers = [1,2,3,4,5,6,7,8,9];
let evenCount = 0;

for (let number of numbers){
    if (number % 2 === 0){ // check if the number is even
        evenCount++ // increment by 1 
    }
}
console.log(evenCount) // Output: 4
```
