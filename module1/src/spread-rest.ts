{
  // spread operator
  // destructuring
  // rest operator

  //   example of spread operator
  const foods: string[] = ["Dal", "Vat", "Mangso"];
  const drinks: string[] = ["Cocacola", "Pepsi", "Mojo"];

  foods.push(...drinks);

  // example of rest operator
  function greetings(...friends: string[]) {
    friends.forEach((item: string) => console.log(`Hi ${item}`));
  }

  greetings("Abdul", "Kuddus", "Bokka");
}
