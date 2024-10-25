// Write a JavaScript program to calculate the total value of a specific property in an array of objects.

// Input:  
// arr = [
//     {
//         product: "Laptop",
//         price: 1000,
//         quantity: 2,
//     },
//     {
//         product: "Phone",
//         price: 600,
//         quantity: 3,
//     },
//     {
//         product: "Monitor",
//         price: 250,
//         quantity: 1,
//     },
// ]

// Output: 
// total value for "price": 1850
// total value for "quantity": 6


'use strict'

const inputArray = [
  {
    product: "Laptop",
    price: 1000,
    quantity: 2,
  },
  {
    product: "Phone",
    price: 600,
    quantity: 3,
  },
  {
    product: "Monitor",
    price: 250,
    quantity: 1,
  },
];

const calcTotalValue = (array) => {
  const totalPrice = array.map((obj) => obj.price).reduce((acc, value) => acc + value, 0);
  console.log(totalPrice);


  const totalQuantity = array.map((obj) => obj.quantity).reduce((acc, value) => acc + value, 0);

  console.log(totalQuantity);
};

calcTotalValue(inputArray);