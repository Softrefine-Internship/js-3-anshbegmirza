// Write a JavaScript program to check if obj1 contains all the property values of obj2.

// Example 1:
// Input: obj1: { name: "John", age: 23; degree: "CS" }, obj2: {age: 23, degree: "CS"}
// Output: true

// Example 2:
// Input: obj1: { name: "John", degree: "CS" }, obj2: {name: "Max", age: 23, degree: "CS"}
// Output: false


'use strict';
const obj1 = { name: "John", age: 23, degree: "CS" };
const obj2 = { age: 23, degree: "CS" };

let isTrue = false;
for (const pro1 in obj1) {
  console.log(`${pro1}: ${obj1[pro1]}`);
  for (const pro2 in obj2)
    if (pro1 === pro2) {
      isTrue = true;
      console.log(isTrue);
    }
    else
      console.log(isTrue);
}