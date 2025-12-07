# COMP 484 JavaScript Coding Exercises

## Instructions

Complete all 20 exercises below in a single JavaScript file (e.g., `hw9-yourIntials.js`). Ensure that your file adheres strictly to the JavaScript rules outlined in the course materials, including using `var` for declarations, proper `camelCase` naming conventions, and ending all statements with semicolons. Provide comments (`//` or `/* */`) to explain the logic where required.

---

## Exercises

### Set 1: Advanced Syntax, Types, and Quirks

**Exercise 1: Complex Arithmetic and Standard Rules**
Calculate the final result of the following expression, making sure to use `camelCase` for the final variable name and end all lines with a semicolon:
$3 + 5 * (10 / 2) - (8 - 4)$.
Output the result using `console.log()`.

**Exercise 2: Case Sensitivity Test**
Declare a variable named `projectIdentifier` and assign it the string value "COMP484". On the next line, attempt to reassign its value to "JS_Advanced" using an incorrect casing (e.g., `ProjectIdentifier`). Use a comment to explain why this reassignment attempt fails based on JavaScript's rules. Finally, correctly reassign and log the correct final value.

**Exercise 3: String Quoting Challenge**
Declare a variable named `courseDescription` using `var` and `camelCase`. Assign it the string value: `The course is "interactive" and involves 'scripting' logic.` Define the string using double quotes, and ensure no escaping is required by using single quotes internally for the word 'scripting'.

**Exercise 4: Escaping and Console Output**
Declare a variable named `errorMessage` and assign it a string defined using single quotes. The string content must be: `An internal server error occurred: "Access Denied"`. Use the backslash escape character to properly include the double quotes within the single-quoted string definition. Log the `errorMessage` variable.

**Exercise 5: Type Coercion with Non-Plus Operators**
Set `valueA` to the number 10 and `valueB` to the string "4". Calculate `resultSubtraction` using the subtraction operator (`-`) and `resultMultiplication` using the multiplication operator (`*`). Log the final values and use the `typeof` operator in separate console logs to demonstrate that JavaScript coerces `valueB` into a numeric type for these operations.

### Set 2: Operators and Type Theory

**Exercise 6: Understanding `null` and `undefined` Types**
Declare a variable `unassignedVar` without giving it a value. Declare a second variable `explicitNull` and set its value explicitly to `null`. Log the results of `typeof unassignedVar` and `typeof explicitNull`. Explain in a multi-line comment why the `typeof` operator returns "object" for `null`.

**Exercise 7: Boolean Assignment and Type Identification**
Declare a variable `isBlocking` and assign it the boolean value `true`. Then, reassign `isBlocking` to the string value "true" (with quotes). Use `console.log(typeof isBlocking)` after each assignment to demonstrate how JavaScript variables are weakly typed and hold typed values.

**Exercise 8: Invalid Variable Naming**
Write three attempted variable declarations that would violate JavaScript's naming rules (e.g., starting with a number, using a space, or using symbols not allowed). Comment out these three lines, and next to each one, provide an explanation for why the declaration fails.

**Exercise 9: Chained Shorthand Arithmetic**
Initialize a variable `counterValue` to 50. In a single sequence of statements, first use the shorthand division assignment operator (`/=`) to divide the value by 5, and then use the shorthand subtraction assignment operator (`-=`) to subtract 3 from the result. Log the final `counterValue`.

**Exercise 10: Prefix vs. Postfix Unary Operators**
Initialize a variable `x` to 10.

1. Create a variable `y_post` and assign it the result of `x++`. Log both `y_post` and `x`.
2. Reinitialize `x` to 10.
3. Create a variable `z_pre` and assign it the result of `++x`. Log both `z_pre` and `x`.
   Use comments to explain how the placement of the unary operator (`++` before or after) affects the timing of the increment relative to the assignment.

### Set 3: Advanced Logic and Comparisons

**Exercise 11: Loose Equality and Coercion**
Set `testNumber` to 0 (a number) and `testBoolean` to `false` (a boolean). Write an `if` statement that compares them using the loose equality operator (`==`). Inside the `if` block, log a message confirming they are loosely equal. Explain in a comment why this comparison returns true (due to type coercion).

**Exercise 12: Strict Inequality Test**
Set `versionA` to 10.0 (a number) and `versionB` to "10.0" (a string). Write an `if` statement using the strict inequality operator (`!==`). Log a message if they are _not_ strictly equal, and use an `else` block to handle the case where they _are_ strictly equal.

**Exercise 13: Logical OR and AND Combination**
You are checking user permissions. Set three boolean variables: `isLoggedIn`, `isSubscriber`, and `isTrialExpired`. Write an `if` condition using logical operators (`&&` and `||`) that checks if access should be granted. Access is granted if (`isLoggedIn` is true AND `isSubscriber` is true) OR if (`isLoggedIn` is true AND `isTrialExpired` is false).

**Exercise 14: Simulating XOR using Nested Conditionals**
Simulate the Logical XOR operator (either A is true or B is true, but NOT BOTH) using variables `conditionA` and `conditionB`. Use a combination of `if` statements and logical operators to achieve this. Log "XOR Success" if the condition is met, otherwise log "XOR Fail".

**Exercise 15: Converting IF/ELSE to Ternary Operator**
Write an initial `if/else` statement that checks if a variable `scriptLoadType` (initialized to "deferred") is equal to "deferred". If true, assign the string "Non-blocking" to a variable `loadStatus`. Otherwise, assign "Potentially Blocking". Then, rewrite the entire conditional structure using only the Ternary Operator (`? :`) and store the result in a new variable `loadStatusTernary`.

### Set 4: Integration and Application

**Exercise 16: Commenting and Code Structure**
Define a function named `calculateRenderTime` (you don't need to define its body). Use proper indentation and a multi-line comment (`/* */`) to describe the function's purpose (e.g., calculating the time taken to parse HTML and execute JavaScript). Include a single-line comment inside the function body using `//`.

**Exercise 17: Date Object Formatting Challenge (MM/DD/YYYY)**
Complete the challenge described in the course materials. Create a new Date object. Using appropriate methods (assume basic knowledge of standard Date methods for year, month, day), extract the necessary components and use string concatenation to output the formatted string: "Today is MM/DD/YYYY". (Hint: Months are zero-indexed, so remember to add 1). Log the final formatted string to the console.

**Exercise 18: Mixed Type Arithmetic Explanation**
Initialize `val1` to 20 (number) and `val2` to "5" (string). Calculate `sumResult = val1 + val2` and `diffResult = val1 - val2`. Log both results. In a multi-line comment, explain why the `sumResult` differs significantly from `diffResult`, referencing JavaScript's behavior with the `+` operator versus other arithmetic operators.

**Exercise 19: Conditional based on Type Check**
Initialize a variable `dataInput` to the numeric value 484. Write an `if/else` statement. Use the `typeof` operator inside the condition to check if `dataInput` is strictly equal to the string "number". If it is, log "Input is numeric." If it is not, reassign `dataInput` to the boolean value `true`, and then log the new type using `typeof`.

**Exercise 20: Simulating DOM Manipulation Timing Failure (Conceptual)**
Write the standard JavaScript code sequence necessary to inject an `<h1>` element containing the text "Interactive Layer Loaded" into the document body.
Crucially, precede this injection code with a multi-line comment explaining the timing issue that occurs if this script is placed in the HTML `<head>` _without_ the `defer` or `async` attributes, leading to the error "Cannot set property 'innerHTML' of null".

---
