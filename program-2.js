// Write a JavaScript program to convert two-dimensional array in to an object.

// Input:  [
//     ["John", 12],
//     ["Jack", 13],
//     ["Matt", 14],
//     ["Maxx", 15]
// ]

// Output: {
//     "John": 12,
//     "Jack": 13,
//     "Matt": 14,
//     "Maxx": 15
// }


const array1 = [
  ["John", 12],
  ["Jack", 13],
  ["Matt", 14],
  ["Maxx", 15]
];

// method 1
// explanation:
// used flat array method to first flat the array1,then used spread operator to create a object using it.

const crtObj = (array) => {
  const flattenArray = array.flat(2);
  const obj = { ...flattenArray }
  return obj;
}

const object2 = crtObj(array1);
console.log(object2);


// Method 2

const crtObj2 = (array) => {
  const flattenArray = array.flat(2);
  const obj = {};
  console.log(flattenArray);
  flattenArray.forEach(
    (pro, val) => obj[pro] = [`${pro}:${val}`]
  )
  console.log(obj);

}
crtObj2(array1)
