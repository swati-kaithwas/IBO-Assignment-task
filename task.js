/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/

const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];
// task 1
function getUniqueProductCount() {
  let a1 = {};
  listOfProducts.map((e) => {
    if (a1[e.productName] === undefined) {
      a1[e.productName] = 1;
    } else {
      a1[e.productName]++;
    }
  });
  return a1;
}
console.log(getUniqueProductCount());

// task 2
function getUniquePrducts() {
  let abc = {};
  let newArr = [];
  for (let i = 0; i < listOfProducts.length; i++) {
    if (abc[listOfProducts[i].productName] === undefined) {
      abc[listOfProducts[i].productName] = newArr.length;
      newArr.push(listOfProducts[i]);
    } else {
      newArr[abc[listOfProducts[i].productName]].quantity =
        newArr[abc[listOfProducts[i].productName]].quantity +
        listOfProducts[i].quantity;
    }
  }
  console.log(newArr);
}
getUniquePrducts();
