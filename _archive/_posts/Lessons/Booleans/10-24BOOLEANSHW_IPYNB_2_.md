---

---

### <span style="color: pink; text-shadow: 2px 2px 5px pink;">Popcorn Hack 1: Boolean in JavaScript</span> 

#### Instructions:
1. Open a New Cell set its type to Code

2. Declare a Boolean Variable:

    Create a variable named isStudent.
    Assign it a boolean value of true or false.

    Example: var isStudent = true; // Change to false to test different scenarios

3. Use an if Statement:

    Create a conditional statement to check the value of isStudent.

4. Log a Message for True Condition:

    Inside the if block, log the message "Welcome, student!" to the console if isStudent is true.

5. Log a Message for False Condition:

    Inside the else block, log the message "Welcome, guest!" to the console if isStudent is false.
6. Run the Code:

    Execute the code to see the output in the console based on the value of isStudent.

 



```python
// Step 1: Declare a boolean variable
let isStudent = true; // Change to false to test different scenarios

// Step 2: Use the boolean in a condition
if (isStudent) {
    // Log a message for the true condition
    console.log("Welcome, student!");
} else {
    // Log a message for the false condition
    console.log("Welcome, guest!");
}

```


### <span style="color: pink; text-shadow: 2px 2px 5px pink;">Popcorn Hack 2: Boolean in JavaScript</span> 

#### Instructions:
1. Open a New Cell set its type to Code
2. Declare Variables:

    Create a variable for gpa and set it to a number (e.g., var gpa = 3.5;).
    Create a variable for inExtracurriculars and set it to a boolean value (e.g., var inExtracurriculars = true;).

3. Use Boolean Operators:

    Create a variable named isEligibleForScholarship and use a combination of boolean operators to evaluate eligibility:
    Check if gpa is greater than or equal to 3.0 AND if inExtracurriculars is true.

4. Log the Result:

    Use an if statement to log a message indicating whether the student is eligible for the scholarship based on the value of isEligibleForScholarship.

5. Run the Code:

    Execute the code to see the output in the console based on the GPA and extracurricular participation.


```python
// Declare variables
const userName = "Mario"; 
let gpa = 3.5; // Student's GPA
let inExtracurriculars = true; // Participation in extracurricular activities

// Determine eligibility using boolean operators
const isEligibleForScholarship = (gpa >= 3.0) && inExtracurriculars;

// Log the result
if (isEligibleForScholarship) {
    console.log("Congratulations, " + userName + "! You are eligible for the scholarship.");
} else {
    console.log("Keep working hard to meet the eligibility criteria, " + userName + ".");
}

```
