// COMP 484 - Homework 9 solutions
// All variables use `var`, camelCase naming, and statements end with semicolons.

// --------------------
// Set 1: Advanced Syntax, Types, and Quirks
// --------------------
// Exercise 1: Complex Arithmetic and Standard Rules
var complexArithmeticResult = 3 + 5 * (10 / 2) - (8 - 4); // evaluates to 24
console.log('Exercise 1:', complexArithmeticResult);

// Exercise 2: Case Sensitivity Test
var projectIdentifier = "COMP484";

// The following incorrect reassignment is commented out because JavaScript is case-sensitive.
// `ProjectIdentifier` is not the same identifier as `projectIdentifier`, so this would either
// create a new global variable (in non-strict mode) or throw a ReferenceError (if used incorrectly).
// ProjectIdentifier = "JS_Advanced"; // incorrect casing — will not reassign `projectIdentifier`;

projectIdentifier = "JS_Advanced"; // correct reassignment
console.log('Exercise 2:', projectIdentifier);

// Exercise 3: String Quoting Challenge
var courseDescription = "The course is \"interactive\" and involves 'scripting' logic.";
console.log('Exercise 3:', courseDescription);

// Exercise 4: Escaping and Console Output
var errorMessage = 'An internal server error occurred: "Access Denied"';
console.log('Exercise 4:', errorMessage);

// Exercise 5: Type Coercion with Non-Plus Operators
var valueA = 10;
var valueB = "4";
var resultSubtraction = valueA - valueB; // coerces "4" to 4 -> 6
var resultMultiplication = valueA * valueB; // coerces "4" to 4 -> 40
console.log('Exercise 5 results:', resultSubtraction, resultMultiplication);
console.log('Exercise 5 types:', typeof resultSubtraction, typeof resultMultiplication);

// --------------------
// Set 2: Operators and Type Theory
// --------------------
// Exercise 6: Understanding `null` and `undefined` Types
var unassignedVar;
var explicitNull = null;
console.log('Exercise 6 types:', typeof unassignedVar, typeof explicitNull);

/*
	The `typeof` operator returns "object" for `null` because of a legacy bug in JavaScript's
	original implementation. `null` is a primitive, but `typeof null` historically returned
	"object" and this behavior was kept for backward compatibility.
*/

// Exercise 7: Boolean Assignment and Type Identification
var isBlocking = true;
console.log('Exercise 7 before:', typeof isBlocking); // boolean
isBlocking = "true"; // now a string
console.log('Exercise 7 after:', typeof isBlocking); // string

// Exercise 8: Invalid Variable Naming (commented out examples)
// var 1stPlace = 1; // invalid: cannot start with a digit
// var my var = 2; // invalid: space is not allowed in identifier
// var total-amount = 3; // invalid: '-' is the subtraction operator, not allowed in identifier

// Exercise 9: Chained Shorthand Arithmetic
var counterValue = 50;
counterValue /= 5; // now 10
counterValue -= 3; // now 7
console.log('Exercise 9:', counterValue);

// Exercise 10: Prefix vs. Postfix Unary Operators
var x = 10;
var y_post = x++;
console.log('Exercise 10 y_post, x:', y_post, x); // y_post is 10, x becomes 11

x = 10; // reinitialize
var z_pre = ++x;
console.log('Exercise 10 z_pre, x:', z_pre, x); // z_pre is 11, x is 11
// Explanation: postfix `x++` returns the original value, then increments. Prefix `++x` increments first, then returns the new value.

// --------------------
// Set 3: Advanced Logic and Comparisons
// --------------------
// Exercise 11: Loose Equality and Coercion
var testNumber = 0;
var testBoolean = false;
if (testNumber == testBoolean) {
	console.log('Exercise 11: 0 is loosely equal to false');
}
// Explanation: `false` coerces to 0 when compared with a number using `==`.

// Exercise 12: Strict Inequality Test
var versionA = 10.0;
var versionB = "10.0";
if (versionA !== versionB) {
	console.log('Exercise 12: Not strictly equal');
} else {
	console.log('Exercise 12: Strictly equal');
}

// Exercise 13: Logical OR and AND Combination
var isLoggedIn = true;
var isSubscriber = false;
var isTrialExpired = false;
if ((isLoggedIn && isSubscriber) || (isLoggedIn && !isTrialExpired)) {
	console.log('Exercise 13: Access granted');
} else {
	console.log('Exercise 13: Access denied');
}

// Exercise 14: Simulating XOR using Nested Conditionals
var conditionA = true;
var conditionB = false;
if ((conditionA && !conditionB) || (!conditionA && conditionB)) {
	console.log('Exercise 14: XOR Success');
} else {
	console.log('Exercise 14: XOR Fail');
}

// Exercise 15: Converting IF/ELSE to Ternary Operator
var scriptLoadType = "deferred";
var loadStatus;
if (scriptLoadType === "deferred") {
	loadStatus = "Non-blocking";
} else {
	loadStatus = "Potentially Blocking";
}
var loadStatusTernary = (scriptLoadType === "deferred") ? "Non-blocking" : "Potentially Blocking";
console.log('Exercise 15:', loadStatus, loadStatusTernary);

// --------------------
// Set 4: Integration and Application
// --------------------
// Exercise 16: Commenting and Code Structure

/*
	calculateRenderTime: Estimate time to render content by measuring the time
	to parse HTML and execute required JavaScript rendering tasks. This function
	could return milliseconds or an object with breakdowns per phase.
*/

function calculateRenderTime() {
	// Placeholder: actual timing logic would go here (e.g., performance.now())
}

// Exercise 17: Date Object Formatting Challenge (MM/DD/YYYY)
var today = new Date();
var month = today.getMonth() + 1; // months are zero-indexed
var day = today.getDate();
var year = today.getFullYear();

// ensure two-digit month/day
var monthStr = (month < 10) ? ("0" + month) : ("" + month);
var dayStr = (day < 10) ? ("0" + day) : ("" + day);
var formattedDate = "Today is " + monthStr + "/" + dayStr + "/" + year;
console.log('Exercise 17:', formattedDate);

// Exercise 18: Mixed Type Arithmetic Explanation
var val1 = 20;
var val2 = "5";
var sumResult = val1 + val2; // "205" because + performs string concatenation when one operand is a string
var diffResult = val1 - val2; // 15 because - forces numeric coercion
console.log('Exercise 18 results:', sumResult, diffResult);

/*
	The `+` operator performs string concatenation if any operand is a string, so `20 + "5"` -> "205".
	Other arithmetic operators (like `-`) coerce string operands to numbers when possible, so `20 - "5"` -> 15.
*/

// Exercise 19: Conditional based on Type Check
var dataInput = 484;
if (typeof dataInput === "number") {
	console.log('Exercise 19: Input is numeric.');
} else {
	dataInput = true;
	console.log('Exercise 19 new type:', typeof dataInput);
}

// Exercise 20: Simulating DOM Manipulation Timing Failure (Conceptual)
/*
	If this script is placed in the HTML <head> without `defer` or `async`, the DOM
	(including `document.body`) isn't parsed when the script runs. Attempting
	to access `innerHTML` on an element that doesn't exist will cause the error
	"Cannot set property 'innerHTML' of null" because the referenced element is `null`.
	Using `defer` ensures the script runs after parsing, or place the script just before
	the closing </body> tag.
*/
var h1Element = document.createElement('h1');
h1Element.innerHTML = 'Interactive Layer Loaded';
document.body.appendChild(h1Element);

