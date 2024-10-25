// Write a JavaScript program to flatten object into single depth object.

// Input: 
// obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// Output: 
// obj = {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
// }




'use strict';

const inputObj = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG"
  }
};

// looping a object using for...in loop
for (const i in inputObj) {
  console.log(`${i} : ${inputObj[i]}`);
}


const flattenObj = (obj) => {
  //to store final flatten obj
  let outputObj = {};

  for (const i in obj) {
    if (typeof obj[i] === 'Object' && !Array.isArray(obj[i])) {
      // typeof checks if obj at i is object, 
      // !Array.isArray(obj[i]) means it must not be an array

      // recalling flattenObj again and storing in a temporary variable

      const temp = flattenObj(obj[i]);

      for (const j in temp) {
        outputObj[i + `.` j] = temp[i];
      }
    }

    else {
      outputObj[i] = obj[i]
    }
  }
  return outputObj;
}

console.log(flattenObj(inputObj));
