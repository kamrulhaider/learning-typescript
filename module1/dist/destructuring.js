"use strict";
{
    // Destructuring
    // object destructuring
    // array destructuring
    const user = {
        id: 100,
        name: {
            firstName: "Kamrul",
            middleName: "Haider",
            lastName: "Chowdhury",
        },
        profession: "Freelancer",
    };
    const { name: { middleName }, // destructuring er khetre type declare kora jay na
    profession, } = user;
    // array destructuring
    const myFriends = ["Mughdho", "Abu Sayid", "Saran", "Atul", "Fahad"];
    const [a, b, c] = myFriends;
    const [, , bestFriend] = myFriends;
    const [, , colleague, ...cousin] = myFriends;
    console.log(cousin);
}
