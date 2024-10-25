// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"


'use strict';

const inputString = "This is a demo String find the largest word from it";

const calcLongestWord = function (string) {
  const arrayStr = string.split(` `);

  // console.log(arrayStr);

  arrayStr.forEach((word, i,) => {
    const letterCount = 0;
    if (Number(word[i]) > 0) {
      console.log(`${word}`);
    }
  })

}

calcLongestWord(inputString);