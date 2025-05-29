---
comments: True
layout: post
title: JavaScript Conditionals Part 3
description: An introduction to Switch Case Statements
permalink: /csse/javascript/fundamentals/conditionals/p3/
categories: ['CSSE JavaScript Fundamentals']
author: William
---

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center">
    <a href="{{site.baseurl}}/csse/javascript/fundamentals/conditionals/hacks" style="text-decoration: none;">
        <div style="background-color: #0b73be; color: black; padding: 10px 20px; border-radius: 5px; font-weight: bold;">
           <center> Hacks</center>
        </div>
    </a>
</div>

# Types of logics for your conditionals

Some types of conditinals to compare,constrast add, or, and more. 2+ values which eaither runs the loop our countinues to the next segment or next part of the code.
```bullets
- == value is equal to
- === value is strictly equal to (used for strings and more)
- != not equal to
- !== is not equal to (used for strings and more)
- > greater than
- < less than
- >= greater than or equal to
- <= less than or equal to
- && and (ex: if(fruit === "apple" && isRipe == true))
- || or  (ex: if(fruit === "apple" || fruit ==="banana"))
- ! is not
```

# Swich Statements


```python
%%html
<div id="output1"></div>

<script>
function code(){
let fruit = "apple"
const output = document.getElementById("output1")

switch(fruit){
    case "apple":
        output.innerHTML = "Apples sound great!"
        break;
    case "banana":
        output.innerHTML = "Bananas sound great!"
        break;
    case "durian":
        output.innerHTML = "YUCK!"
        break;
    case  "":
        output.innerHTML = "I was looking forward to eating this week :("
        break;
}

}
code()
</script>
```


<div id="output1"></div>

<script>
function code(){
let fruit = "apple"
const output = document.getElementById("output1")

switch(fruit){
    case "apple":
        output.innerHTML = "Apples sound great!"
        break;
    case "banana":
        output.innerHTML = "Bananas sound great!"
        break;
    case "durian":
        output.innerHTML = "YUCK!"
        break;
    case  "":
        output.innerHTML = "I was looking forward to eating this week :("
        break;
}

}
code()
</script>



When you pass a value through a swich statment it will go through all provided cases to see which ones mach<br>

a case is determend with the keyword "case" folowed by a value which and ended with a ":"<br>
if the perameters inside of your case matches the value provided (ex: you peovide the number 1 and a case sees if <br>its 1) it will run the given code inside of the case

# Ternary Operator


```python
%%html

<div id="output2"></div>

<script>
    function code(){
        let fruit = "apple";
        let output = document.getElementById("output2");
        let message = (fruit === "apple") ? "this item is super effective" : "item is bad bad";
        output.innerHTML = message;
        console.log("ran")
    }
code()
    </script>
```



<div id="output2"></div>

<script>
    function code(){
        let fruit = "apple";
        let output = document.getElementById("output2");
        let message = (fruit === "apple") ? "this item is super effective" : "item is bad bad";
        output.innerHTML = message;
        console.log("ran")
    }
code()
    </script>



When using (fruit === "apple")<br>
it will provide a bool value with the output of the given perams<br>
If folowed by a ? code : code;<br>
the ? is the if part so if its true that code will run whitch in this case sets the value of message<br>
the : represents the else so that section of code with run if the requrments are nor met<br>

<script src="https://utteranc.es/client.js"
        repo="mrboiisthebest/william_2025"
        issue-term="title"
        label="blogpost-comment"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>
