/*
===========================================
🔁 Function Refactoring Activity
===========================================

🎯 Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions.

This activity reinforces:
- Writing functions with no, single, and multiple parameters
- Using return statements effectively
- Improving code reusability and modularity

---
🧭 Instructions:

1️⃣ Analyze the provided script, which performs a series of repetitive tasks.

2️⃣ Identify sections of code that can be improved using functions.

3️⃣ Write reusable functions with appropriate parameters and return statements.

4️⃣ Refactor the original code to use your new functions.

5️⃣ Test the refactored script to ensure it produces the same output as the original.

---
*/

// ============================================
// ❌ Original Code (Before Refactoring)
// ============================================

// // Script 1 - Greeting multiple users
// console.log("Welcome, Alice!");
// console.log("Welcome, Bob!");
// console.log("Welcome, Charlie!");

// // Script 2 - Sum calculation
// let num1 = 5, num2 = 10;
// let sum = num1 + num2;
// console.log("The sum of 5 and 10 is " + sum);

// // Script 3 - Product calculation
// let product = num1 * num2;
// console.log("The product of 5 and 10 is " + product);

// // Script 4 - Print names from a list
// let names = ["Alice", "Bob", "Charlie"];
// console.log("Names in the list:");
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

/*
===========================================
🛠️ Steps for Refactoring
===========================================

🔹 Break Down Tasks into Functions:
   - Identify repetitive patterns (e.g., greetings, calculations, list printing)
   - Define separate functions for each task

🔹 Write Functions with Parameters and Return Values:
   - Parameterize functions for flexibility (e.g., pass in name, numbers, arrays)
   - Use return statements where necessary

🔹 Refactor the Original Code:
   - Replace repeated code with meaningful function calls
   - Keep your code clean, readable, and easy to maintain
*/

// ✅ Your refactored code goes below this line!

// Script 1
function greet(name) {   
   return "Welcome, " + name + "!";
}

console.log(greet("Alice"));    // My code is different from the solution code in that
console.log(greet("Bob"));      // I did a console.log here at the end to invoke the function
console.log(greet("Charlie"));  // and print the results, rather than just calling the function.

// The solution code for Script 1 tells me that I don't necessarily need a console.log to get the values, however I do if I want to see them.


// Script 2
function sumCalc(int1, int2) {
   return "The sum of " + int1 + " and " + int2 + " is " + (int1 + int2); // My code is different because I didn't just return the value of the sum, I returned the value of the sum inside a string.
}

console.log(sumCalc(5, 10));

// The solution code for Script 2 shows me that I should read the directions more closely and output the value if that's what the instructions are asking for.


// Script 3
function prodCalc(int1, int2) {
   return "The product of " + int1 + " and " + int2 + " is " + (int1 * int2); // This code has the same difference as Script 2.
}

console.log(prodCalc(5, 10));

// The solution code for Script 3 shows me the same thing it showed me for Script 2.


// Script 4
let namesList = ["Alice", "Bob", "Charlie"];

function returnNames(names) {
   console.log("Names in the list:");
   for (let i = 0; i < names.length; i++) {
      console.log(names[i]);
   }
}

returnNames(namesList);

// For Script 4, my code did not even work. I realized that the only reason it worked before was because of the original code above.
// Once I commented all that code out, my new code did not work. I had tried invoking the function with the parameter instead of the argument
// and also had it placed before the function itself. I moved the call to the end and referenced the argument inside of the function call 
// and now it works as it should. Otherwise, my code is very similar to the solution code.