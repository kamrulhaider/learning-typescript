{
  // learning function
  // normal function
  // arrow function

  function greet(name: string): string {
    return `Hello, ${name}!`;
  }

  // Arrow function

  const greetArrow = (name: string): string => `Hello, ${name}!`;

  // Function with optional parameter

  function greetWithOptionalParam(name: string, age?: number): string {
    if (age) {
      return `Hello, ${name}! You are ${age} years old.`;
    } else {
      return `Hello, ${name}!`;
    }
  }

  // Function with default parameter

  function greetWithDefaultParam(name: string, age: number = 25): string {
    return `Hello, ${name}! You are ${age} years old.`;
  }

  // method

  const poorUser = {
    name: "Kamrul",
    balence: 0,
    addBalence(balence: number): number {
      return this.balence + balence;
    },
  };

  // number array
  const numbersArr: number[] = [1, 3, 2, 5, 6];

  // mapping the array
  const newNumberArr: number[] = numbersArr.map(
    (elem: number): number => elem * elem
  );
}
