"use strict";
{
    // spread operator
    // destructuring
    // rest operator
    //   example of spread operator
    const foods = ["Dal", "Vat", "Mangso"];
    const drinks = ["Cocacola", "Pepsi", "Mojo"];
    foods.push(...drinks);
    // example of rest operator
    function greetings(...friends) {
        friends.forEach((item) => console.log(`Hi ${item}`));
    }
    greetings("Abdul", "Kuddus", "Bokka");
}
