"use strict";
function formatString(input, toUpper) {
    if (input && toUpper == true) {
        return input.toUpperCase();
    }
    else if (toUpper == false) {
        return input.toLowerCase();
    }
    if (input && toUpper == null) {
        return input.toUpperCase();
    }
}
// console.log(formatString('hello'))
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
function filterByRating(items) {
    return items.filter(item => (item === null || item === void 0 ? void 0 : item.rating) >= 4);
}
// console.log(filterByRating(books))
//3
//4
//5
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    let maxPrice = products[0];
    products.forEach(item => {
        if (item.price > maxPrice.price) {
            maxPrice = item;
        }
    });
    return maxPrice;
}
//   console.log(getMostExpensiveProduct(products))
