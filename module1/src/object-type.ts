// reference type --> object type

// object type example
let person2: {
  readonly crush: string; // you can read this but can't change it
  company: "Makeup Coders"; // Litteral type example. you can not change this value
  name: string;
  age: number;
  isMarried?: boolean; // Optional type
  address: {
    street: string;
    city: string;
    country: string;
  };
} = {
  crush: "Jane Doe", // you can't change this value.
  company: "Makeup Coders", // Litteral type,
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};
