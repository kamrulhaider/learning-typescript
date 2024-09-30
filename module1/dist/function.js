"use strict";
// learning function
// normal function
// arrow function
function greet(name) {
    return `Hello, ${name}!`;
}
// Arrow function
const greetArrow = (name) => `Hello, ${name}!`;
// Function with optional parameter
function greetWithOptionalParam(name, age) {
    if (age) {
        return `Hello, ${name}! You are ${age} years old.`;
    }
    else {
        return `Hello, ${name}!`;
    }
}
// Function with default parameter
function greetWithDefaultParam(name, age = 25) {
    return `Hello, ${name}! You are ${age} years old.`;
}
// method
const poorUser = {
    name: "Kamrul",
    balence: 0,
    addBalence(balence) {
        return this.balence + balence;
    },
};
// number array
const numbersArr = [1, 3, 2, 5, 6];
// mapping the array
const newNumberArr = numbersArr.map((elem) => elem * elem);
