// Spread operator

const friends = ["Saran", "Atul", "Fahad"];
const bestFriends = ["Tuhin", "Mizan", "Kamrul"];

friends.push(...bestFriends);

// console.log(friends);

// rest parameter
const greetFriends = (...myFriends: string[]): void =>
  myFriends.forEach((friend) => console.log(`Hi ${friend}`));

greetFriends(...friends, "Kuddus");
